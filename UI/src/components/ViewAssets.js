import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Link } from "react-router-dom";
import * as AssetAPI from "../utility/AssetAPI";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from "../style/listItems.module.css";
import { IconButton, TablePagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteConfirmationDialog from './AssetDelConfirm';
import EditConfirmationDialog from './AssetEditConfirm'; 

export default function ViewAssets() {
  const [assets, setAssets] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [deletingAssetId, setDeletingAssetId] = React.useState(null);
  const [openAssetId, setOpenAssetId] = React.useState(null);
  const [openEditConfirmation, setOpenEditConfirmation] = React.useState(false); 
  const [editingAssetId, setEditingAssetId] = React.useState(null);

  React.useEffect(() => {
    const getAssets = async () => {
      const res = await AssetAPI.getAll();
      setAssets(res);
    };
    getAssets();
  }, []);

  const handleEditConfirmation = (id) => {
    setEditingAssetId(id);
    setOpenEditConfirmation(true);
  };

  const handleEditAsset = () => {
    setOpenEditConfirmation(false);
    // Navigate to the oter page
  };

  const handleDelete = (id) => {
    setDeletingAssetId(id);
    setOpenDeleteDialog(true);
  };

  const handleDeleteAsset = async (id) => {
    try {
      console.log(id);
      const response = await AssetAPI.deleteById(id);
      setAssets((assets) => assets.filter((a) => a.id !== id));
      if (response.status === 200) {
        console.log("Deleted");
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = (id) => {
    setOpenAssetId(id);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <Title>Assets</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? assets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : assets
          ).map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.id}</TableCell>
              <TableCell>{a.type}</TableCell>
              <TableCell>{a.link}</TableCell>
              <TableCell>{a.title}</TableCell>
              <TableCell>{a.author}</TableCell>
              <TableCell align="right">
                <IconButton className={styles.link}>
                  <Link to={`/asset/open/${a.id}`} className={styles.link}>
                    <VisibilityIcon />
                  </Link>
                </IconButton>
                <IconButton className={styles.link}>
                  {/* Use handleEditConfirmation function for edit confirmation */}
                  <EditIcon onClick={() => handleEditConfirmation(a.id)} />
                </IconButton>
                <IconButton
                  className={styles.link}
                  onClick={() => handleDelete(a.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        component="div"
        count={assets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Stack direction="row" spacing={2}>
        <Link to="/asset/add">
          <Button
            variant="contained"
            endIcon={<PostAddIcon />}
            style={{ background: "black" }}
          >
            Add Asset
          </Button>
        </Link>

        <Button
          id="cancel-button"
          variant="outlined"
          endIcon={<UndoIcon />}
          onClick={{}}
        >
          Back To Dashboard
        </Button>
      </Stack>

      <EditConfirmationDialog
        open={openEditConfirmation}
        handleClose={() => setOpenEditConfirmation(false)}
        handleConfirm={() => {
          setOpenEditConfirmation(false);
          handleEditAsset(editingAssetId);
        }}
        assetId={editingAssetId}
      />

      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        handleConfirm={() => {
          setOpenDeleteDialog(false);
          // Call handleDeleteAsset function to delete the asset
          handleDeleteAsset(deletingAssetId);
        }}
        assetId={deletingAssetId}
      />
    </React.Fragment>
  );
}

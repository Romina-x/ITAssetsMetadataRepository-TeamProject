import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import * as TypeAPI from '../utility/TypeAPI';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, TablePagination } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../style/listItems.module.css";
import DeleteConfirmationDialog from './TypeDelConfirm';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import UndoIcon from "@mui/icons-material/Undo";


export default function ViewTypes() {
  const [types, setTypes] = React.useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [deletingTypeId, setDeletingTypeId] = React.useState(null);

  React.useEffect(() => {
    const getTypes = async () => {
      const res = await TypeAPI.getAll();
      console.log(res)
      setTypes(res)
    };

    getTypes();
  }, []);

  const handleDelete = (id) => {
    setDeletingTypeId(id);
    setOpenDeleteDialog(true);
  };

  const handleDeleteType = async (id) => {
    try {
      console.log(id);
      const response = await TypeAPI.deleteById(id);
      setTypes((Types) => types.filter((t) => t.id !== id));
      if (response.status === 200) {
        console.log("Deleted");
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
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
      <Title>Types</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Custom Attribute Name 1</TableCell>
            <TableCell>Custom Attribute Name 2</TableCell>
            <TableCell>Custom Attribute Name 3</TableCell>
            <TableCell>Custom Attribute Name 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? types.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : types
          ).map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.id}</TableCell>
              <TableCell>{t.typeName}</TableCell>
              <TableCell>{t.customAttribute1}</TableCell>
              <TableCell>{t.customAttribute2}</TableCell>
              <TableCell>{t.customAttribute3}</TableCell>
              <TableCell>{t.customAttribute4}</TableCell>
              <TableCell align="right">
              <IconButton className={styles.link}>
              <Link to={`/type/open/${t.id}`} className={styles.link}>
                  <VisibilityIcon />
              </Link>
              </IconButton>
                <IconButton className={styles.link}>
                  <Link to={`/type/edit/${t.id}`} className={styles.link}>
                    <EditIcon />
                  </Link>
                </IconButton>
                <IconButton
                  className={styles.link}
                  onClick={() => handleDelete(t.id)}
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
        count={types.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Stack direction="row" spacing={2}>
        <Link to="/type/add">
          <Button
            variant="contained"
            endIcon={<PostAddIcon />}
            style={{ background: "black" }}
          >
            Add Type
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
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        handleConfirm={() => {
          setOpenDeleteDialog(false);
          // Call handleDeleteAsset function to delete the asset
          handleDeleteType(deletingTypeId);
        }}
        typeId={deletingTypeId}
      />
    </React.Fragment>
  );
}
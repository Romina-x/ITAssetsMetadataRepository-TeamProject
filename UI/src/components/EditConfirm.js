import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function EditConfirmationDialog({ open, handleClose, handleConfirm, assetId }) {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>You Are Deleting an Asset</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to Edit asset with ID: {assetId}? <br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} autoFocus>
            Edit
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    );
  }
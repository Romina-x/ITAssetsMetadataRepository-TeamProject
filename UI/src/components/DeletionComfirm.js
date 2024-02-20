import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function DeleteConfirmationDialog({ open, handleClose, handleConfirm, assetId }) {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>You Are Deleting an Asset</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete asset with ID: {assetId}? <br/>
            You can undo your action!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
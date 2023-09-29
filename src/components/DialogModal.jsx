import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function DialogModal({ children, hidenModal, modal, title, submit, maxWidth }) {

  return (
    <div>

      <Dialog
        fullWidth
        open={modal}
        maxWidth={maxWidth}
        onClose={hidenModal}
        scroll={'paper'}
      >

        <DialogTitle>{title}</DialogTitle>

        <DialogContent dividers>

          {children}

        </DialogContent>
        <DialogActions>
          <Button color='error' variant='text' onClick={hidenModal}>Cancel</Button>
          <Button variant='contained' color='primary' sx={{ width: 90 }} onClick={submit}>REGISTER</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
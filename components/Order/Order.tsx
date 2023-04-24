import * as React from "react";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface OrderProps {
  size?: React.ComponentProps<typeof Button>["size"];
}

const Order: React.FC<OrderProps> = ({ size }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<EmailIcon />}
        onClick={handleClickOpen}
        size={size}
      >
        Оставить заявку
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Оставить заявку</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Пожалуйста, введите Ваш телефон или емайл. <br />
            Мы перезвоним или ответим на почту!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Номер телефона"
            type="tel"
            fullWidth
            variant="standard"
            inputProps={{
              pattern:
                "\\+7\\s?\\(?\\d{3}\\)?[-\\s]?\\d{3}[-\\s]?\\d{2}[-\\s]?\\d{2}",
            }}
          />
          <TextField
            margin="dense"
            id="email"
            label="Адрес почты"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose}>Отправить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Order;

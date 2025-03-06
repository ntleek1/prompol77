import * as React from "react";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";

interface OrderProps {
  size?: React.ComponentProps<typeof Button>["size"];
}

const Order: React.FC<OrderProps> = ({ size }) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");

  const phoneInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);

  // Focus on the phone field when the dialog opens
  React.useEffect(() => {
    if (open) {
      const focusPhoneField = () => {
        if (phoneInputRef.current) {
          phoneInputRef.current.focus();
        }
      };
      setTimeout(focusPhoneField, 0);
    }
  }, [open]);

  // Focus on the first error field after validation
  React.useEffect(() => {
    if (phoneError) {
      phoneInputRef.current?.focus();
    } else if (emailError) {
      emailInputRef.current?.focus();
    }
  }, [phoneError, emailError]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
  };

  const isPhoneValid = (phone: string) => {
    const phoneRegex =
      /^(\+7)\s?\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$/;
    return phoneRegex.test(phone);
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!email && !phone) {
      setEmailError("Введите email или телефон!");
      setPhoneError("Введите телефон или email!");
      isValid = false;
    } else {
      setEmailError("");
      setPhoneError("");
    }

    if (phone && !isPhoneValid(phone)) {
      setPhoneError("Неверный формат, введите номер вида +79995551122");
      isValid = false;
    }

    if (email && !isEmailValid(email)) {
      setEmailError("Неверный формат email!");
      isValid = false;
    }

    if (isValid) {
      // Submit the form and close the dialog
      handleClose();
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<EmailIcon />}
        // onClick={handleClickOpen}
        href="mailto:9775002266@mail.ru"
        size={size}
      >
        Отправить заявку
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          Отправить заявку
          <IconButton
            edge="end"
            color="inherit"
            size="small"
            onClick={handleClose}
            sx={{ position: "absolute", top: 20, right: 20 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Пожалуйста, введите Ваш телефон или емайл. <br />
            Мы перезвоним или ответим на почту!
          </DialogContentText>
          <TextField
            inputRef={phoneInputRef}
            margin="normal"
            id="phone"
            label="Номер телефона"
            type="tel"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={Boolean(phoneError)}
            helperText={phoneError}
          />
          <TextField
            inputRef={emailInputRef}
            margin="normal"
            id="email"
            label="Адрес почты"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleClose}
          >
            Отмена
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSubmit}
            startIcon={<MarkEmailReadIcon />}
          >
            Отправить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Order;

import { Snackbar, Alert, Slide } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../contexts/MessageContext";

function AlertMessage({ newMessage, newSeverity }) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const { message, setMessage } = useContext(MessageContext);

  useEffect(() => {
    if (newMessage !== undefined) {
      setMessage(newMessage);
      setSeverity(newSeverity);
      setOpen(true);
    }
    console.log(message.message);
  }, [setMessage, setSeverity, setOpen]);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
      TransitionComponent={props => <Slide {...props} direction="left" />}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertMessage;

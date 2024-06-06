import { Snackbar, Alert, Slide } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../contexts/MessageContext";

function AlertMessage() {
  const [open, setOpen] = useState(false);
  const { message } = useContext(MessageContext);

  useEffect(() => {
    setOpen(true);
  }, [message]);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <>
      {message.message !== "" && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleClose}
          TransitionComponent={props => <Slide {...props} direction="left" />}
        >
          <Alert onClose={handleClose} severity={message.error ? "error" : "success"} variant="filled" sx={{ width: "100%" }}>
            {message.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default AlertMessage;

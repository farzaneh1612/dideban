import { Alert, Snackbar, styled } from "@mui/material";

import { AlertContext } from "../context/AlertContext";
import { useContext } from "react";

const SnackbarGeneral = () => {
  const { notificationProps, clearNotification } = useContext(AlertContext);

  setTimeout(() => {
    clearNotification();
  }, [notificationProps.alertDuration]);

  return (
    <SnackbarStyle
      className="alert-snackbar"
      open={notificationProps.isAlertVisible}
      autoHideDuration={notificationProps.alertDuration}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert
        className="alert-snackbar"
        variant="filled"
        onClose={clearNotification}
        severity={notificationProps.severity || "error"}
        sx={{
          direction: "rtl",
          width: "100%",
          display: !!notificationProps.message ? "flex" : "none",
          alignItems: "center",
        }}
      >
        {notificationProps.message}
      </Alert>
    </SnackbarStyle>
  );
};

const SnackbarStyle = styled(Snackbar)(({ theme }) => ({
  minWidth: "300px",
  maxWidth: "90%",
  width: "max-content",
  margin: "auto",

  ".MuiPaper-root": {
    padding: theme.spacing(1, 2, 1, 6),
  },
  ".MuiAlert-icon": {
    marginLeft: "12px",
    marginRight: "0px !important",
  },
  ".MuiAlert-action": {
    padding: "0",
    left: theme.spacing(1),
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));
export default SnackbarGeneral;

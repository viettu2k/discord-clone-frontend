import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";

const AlertNotification = () => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}}
      // autoHideDuration={6000}
    >
      <Alert severity="info">Alert message</Alert>
    </Snackbar>
  );
};

export default AlertNotification;

"use client";

import { createContext, useState } from "react";

import Snackbar from "../components/Snackbar";

const initialState = {
  notificationProps: {
    message: "",
    severity: "",
    isAlertVisible: false,
    alertDuration: 6000,
  },
  setNotificationProps: "",
  clearNotification: "",
};

const AlertContext = createContext(initialState);

function AlertContextProvider({ children }) {
  const [notificationProps, setNotificationProps] = useState(
    initialState.notificationProps
  );

  const clearNotification = () =>
    setNotificationProps(initialState.notificationProps);

  return (
    <AlertContext.Provider
      value={{
        notificationProps,
        setNotificationProps,
        clearNotification,
      }}
    >
      <Snackbar />

      {children}
    </AlertContext.Provider>
  );
}

export { AlertContextProvider, AlertContext };

"use client";
import { AlertContext } from "@/context/AlertContext";
import { useContext } from "react";

function useNotify() {
  const { setNotificationProps } = useContext(AlertContext);

  const notify = (message, severity) => {
    setNotificationProps({
      message,
      severity,
      alertDuration: 6000,
      isAlertVisible: true,
    });
  };

  return notify;
}

export default useNotify;

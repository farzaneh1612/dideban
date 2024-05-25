"use client";
import { useDispatch as ToolkitDispatch } from "react-redux";
import useNotify from "./useNotify";

export default function useDispatch() {
  const dispatch = ToolkitDispatch();
  const notify = useNotify();

  const handleRequest = async (apiCall, successMessage) => {
    try {
      const data = await dispatch(apiCall);
      if (!!data.error) {
        throw data.payload;
      }

      if (successMessage) {
        notify(successMessage, "success");
      }

      return data;
    } catch (error) {
      notify(error, "error");
      throw error;
    }
  };

  return handleRequest;
}

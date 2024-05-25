"use client";

import useNotify from "@/hooks/useNotify";
import { LoadingButton } from "@mui/lab";
import { Close } from "@mui/icons-material";

import {
  Box,
  IconButton,
  Typography,
  FormHelperText,
  styled,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import WrapperLoading from "@/components/WrapperLoading";

import { getAuthToken, isTokenExpired, refreshToken } from "@/config/http";

function DragAndDrop({ onChange, error, helperText, valueDefault, value }) {
  const [fileList, setFileList] = useState([]);
  const [uploadFile, setUploadFile] = useState(false);
  let updatedImageUrl;
  const notify = useNotify();
  const accessToken = getAuthToken();
  const apiUrl = process.env.BASE_URL;

  const { getRootProps, open, acceptedFiles, getInputProps } = useDropzone({
    noClick: true,

    onDrop: async (acceptedFiles) => {
      await handleFileChange(acceptedFiles);
    },
  });

  useEffect(() => {
    if (fileList !== undefined) {
      setFileList([...acceptedFiles, ...fileList]);
    } else {
      setFileList([...acceptedFiles]);
    }
  }, [acceptedFiles]);

  const removeFile = () => {
    setFileList([]);
    onChange([]);
  };

  const removeItem = (select) => {
    const updatedFileList = fileList.filter((file) =>
      file?.name ? file?.name !== select?.name?.name : file !== select
    );
    setFileList(updatedFileList);
    const updatedImageUrl = updatedFileList.map((item) =>
      item?.path
        ? `http://37.152.183.38:4648/media/uploads/${item?.path}`
        : item
    );
    onChange(updatedImageUrl);
  };

  const handleFileChange = async (event) => {
    setUploadFile(true);

    const formData = new FormData();
    formData.append("file", event[0]);

    try {
      const response = await fetch(`${apiUrl}/account/upload/`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const responseData = await response.json();
      const relativePath = new URL(responseData?.file).pathname;
      notify("عکس آپلود شد", "success");

      if (!!fileList) {
        updatedImageUrl = [
          ...fileList,
          `http://37.152.183.38:4648${relativePath}`,
        ];
      } else {
        onChange([`http://37.152.183.38:4648${relativePath}`]);
      }

      const urlsArray = updatedImageUrl.map((item) => {
        if (typeof item === "object" && item.path) {
          return `http://37.152.183.38:4648/media/uploads/${item.path}`;
        } else {
          return item;
        }
      });

      setFileList(urlsArray);
      onChange(urlsArray);
      setUploadFile(false);
    } catch (e) {
      if (await isTokenExpired()) {
        // Refresh the token
        const newAccessToken = await refreshToken();
        // Update the accessToken in the headers after refresh
        const updatedHeaders = new Headers({
          Authorization: `Bearer ${newAccessToken}`,
        });
        try {
          const response = await fetch(`${apiUrl}/account/upload/`, {
            method: "POST",
            body: formData,
            headers: updatedHeaders, // Updated headers with new access token
          });
          const responseData = await response.json();
          const relativePath = new URL(responseData?.file).pathname;

          notify("عکس آپلود شد", "success");

          if (!!fileList) {
            updatedImageUrl = [
              ...fileList,
              `http://37.152.183.38:4648${relativePath}`,
            ];
          } else {
            onChange([`http://37.152.183.38:4648${relativePath}`]);
          }

          const urlsArray = updatedImageUrl.map((item) => {
            if (typeof item === "object" && item.path) {
              return `http://37.152.183.38:4648/media/uploads/${item.path}`;
            } else {
              return item;
            }
          });
          setFileList(urlsArray);
          onChange(urlsArray);
          setUploadFile(false);
        } catch (e) {
          console.log(e?.message, "error");
          setUploadFile(false);
        }
      } else {
        console.log(e?.message, "error");
        setUploadFile(false);
      }
      setUploadFile(false);
    }
  };

  useEffect(() => {
    setFileList(valueDefault);
  }, [valueDefault]);

  useEffect(() => {
    setFileList(value);
  }, [value]);

  let files = Array.isArray(fileList)
    ? fileList?.map((file) => (
        <BoxImage key={file?.name}>
          <IconButton onClick={() => removeItem(file)}>
            <Close />
          </IconButton>

          <Box>
            {file?.path ? (
              <img
                src={`http://37.152.183.38:4648/media/uploads/${file?.path}`}
                alt=""
                width={200}
                height={200}
              />
            ) : (
              <img src={file} alt="" width={200} height={200} />
            )}
          </Box>
        </BoxImage>
      ))
    : null;

  return (
    <Box pt={2}>
      <Box {...getRootProps({ className: "dropzone" })} display="flex">
        <input {...getInputProps()} />
        <Box ml={3}>
          <Button onClick={open} color="hostUser">
            <Typography color="common.white" variant="h6" fontWeight={400}>
              افزودن تصویر
            </Typography>
          </Button>
        </Box>

        <Box>
          <LoadingButton
            variant="contained"
            color="buttonGray"
            onClick={removeFile}
          >
            <Typography color="text.gray" variant="h6" fontWeight={400}>
              حذف
            </Typography>
          </LoadingButton>
        </Box>
      </Box>
      {files && (
        <BoxShowImage mr={2}>
          {uploadFile ? <WrapperLoading /> : <>{files}</>}
        </BoxShowImage>
      )}
      {error && (
        <FormHelperText sx={{ mr: 2, textAlign: "right" }} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
}
const BoxShowImage = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.text.border}`,
  padding: theme.spacing(2, 0),
  margin: theme.spacing(2, 0),
  display: "flex",
  flexWrap: "wrap",
}));
const BoxImage = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  position: "relative",
  ".MuiButtonBase-root": {
    top: "-10px",
    position: "absolute",
    left: "-11px",
    background: "red",
    padding: "0",
    svg: {
      color: "#fff",
    },
  },
}));
export default DragAndDrop;

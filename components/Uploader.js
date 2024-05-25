"use client";

import { Box, ButtonBase, Typography, styled } from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import Menu from "./Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useRef } from "react";

function Uploader({ onChange, value }) {
  const inputFileRef = useRef();

  const handleRemoveItem = (e) => {
    const filesToKeep = value.filter((f) => f.name !== e.name);

    onChange(filesToKeep);
  };

  const uploadedItemOptions = [
    {
      icon: <RemoveCircleIcon />,
      text: "Remove Item",
      onClick: handleRemoveItem,
    },
  ];

  const handleClickUpload = () => {
    inputFileRef.current.click();
  };

  const handleChangeFileUpload = (e) => {
    const files = e?.target?.files;
    let filesToKeep = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      filesToKeep.push(file);
    }

    onChange(filesToKeep);
  };

  return (
    <>
      <UploaderWrapper onClick={handleClickUpload}>
        <HiddenFileInput
          type="file"
          ref={inputFileRef}
          onChange={handleChangeFileUpload}
          multiple
        />

        <Dropzone>
          <AttachFileIcon sx={{ mr: 1 }} />

          <Typography variant="subtitle1" color="text.secondary">
            برای بارگذاری فایل ها اینجا کلیک کنید
          </Typography>
        </Dropzone>
      </UploaderWrapper>

      <Box>
        {value?.map((file, index) => (
          <UploadedItem key={index}>
            <a href={URL.createObjectURL(file)}>{file.name}</a>

            <Menu
              button={<MoreVertIcon />}
              data={file}
              items={uploadedItemOptions}
            />
          </UploadedItem>
        ))}
      </Box>

      <Typography dir="rtl" variant="subtitle1" color="text.secondary">
        فایل های مجاز: jpeg, jpg, png, gif, webp, mpeg, ogg, mp4, webm, 3gp,
        mov, flv, avi, wmv, ts, mkv, xls, xlsx, csv, doc, txt, pdf, zip, rar,
        docx, dot
      </Typography>
    </>
  );
}

const UploaderWrapper = styled(ButtonBase)(({ theme }) => ({
  width: "100%",
  display: "block",
  position: "relative",
}));

const UploadedItem = styled(Box)(({ theme }) => ({
  background: `${theme.palette.primary.main}30`,
  padding: theme.spacing(2),
  borderRadius: 8,
  margin: theme.spacing(1, 0),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Dropzone = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}60`,
  height: 60,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const HiddenFileInput = styled("input")(() => ({
  display: "none",
}));

export default Uploader;

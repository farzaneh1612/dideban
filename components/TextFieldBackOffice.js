"use client";
import {
  IconButton,
  InputAdornment,
  TextField,
  styled,
  Typography,
} from "@mui/material";

import { useState } from "react";

function TextFieldGeneral(props) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <TextFieldStyle
      type={props.type || "text"}
      dir="rtl"
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButtonStyle onClick={() => setIsShowPassword(!isShowPassword)}>
              <Typography
                variant="label"
                textAlign="right"
                color="text.main"
                fontWeight={400}
              >
                {props.icon}
              </Typography>
            </IconButtonStyle>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
    />
  );
}

const TextFieldStyle = styled(TextField)(({ theme }) => ({
  ".MuiInputBase-root": {
    borderRadius: "8px",
    border: `0.5px solid #c4c4c4`,

    minHeight: "45px",
  },
}));
const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.main,
  padding: 0,
}));

export default TextFieldGeneral;

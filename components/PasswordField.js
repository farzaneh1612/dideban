import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  styled,
  useTheme,
} from "@mui/material";

import { useState } from "react";

import { Eye, EyeSlash, Lock } from "@/public/Icon";

function PasswordField(props) {
  const theme = useTheme();

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <WrapperPassword>
      <TextField
        type={isShowPassword ? "text" : "password"}
        dir="rtl"
        sx={{
          ".MuiInputBase-input": {
            paddingLeft: "30px !important",
          },
        }}
        {...props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButtonStyle
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <Eye color={theme.palette.common.black} />
                ) : (
                  <EyeSlash color={theme.palette.common.black} />
                )}
              </IconButtonStyle>
            </InputAdornment>
          ),
          ...props.InputProps,
        }}
      />
    </WrapperPassword>
  );
}

const WrapperPassword = styled(Box)(({ theme }) => ({
  position: "relative",
  ".MuiInputBase-root": {
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
}));

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.main,
}));

export default PasswordField;

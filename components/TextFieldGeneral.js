import {
  IconButton,
  InputAdornment,
  TextField,
  styled,
  useTheme,
} from "@mui/material";

import { useState } from "react";

function TextFieldGeneral(props) {
  const theme = useTheme();

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <TextFieldStyle
      type={"text"}
      dir="ltr"
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <IconButtonStyle onClick={() => setIsShowPassword(!isShowPassword)}>
              {props.icon}
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
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
}));
const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.main,
  padding: 0,
}));

export default TextFieldGeneral;

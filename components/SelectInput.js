import {
  IconButton,
  TextField,
  styled,
  useTheme,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

function SelectInput({
  itemText,
  itemValue,
  onChange,
  items,
  placeholder,
  minHeight,
  error,
  helperText,
  value,
  customValue,
  ...props
}) {
  const theme = useTheme();

  return (
    <>
      <Select
        sx={{
          boxShadow: "none",

          ".MuiSelect-select": {
            padding: "4px",
            paddingRight: "7px !important",
            paddingLeft: "32px",
            minWidth: "140px",
            minHeight: `${minHeight} !important`,
            display: "flex",
            alignItems: "center",
          },
          width: "100%",
          "& .MuiSelect-icon": {
            marginLeft: "auto",
            right: "auto",
            left: "7px",
          },
        }}
        value={value}
        onChange={onChange}
        width="100%"
        defaultValue="none"
      >
        <MenuItem value="none" disabled>
          {placeholder}
        </MenuItem>
        {items?.map((option, index) => (
          <MenuItem key={index} value={option[itemValue] || option}>
            {customValue ? customValue(option) : option[itemText] || option}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText sx={{ ml: 2, textAlign: "right" }} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}

const TextFieldSelect = styled(TextField)(() => ({
  ".MuiButtonBase-root": {
    position: "absolute",
    top: "50%",
    right: "8px",
    transform: "translateY(-50%)",
    transition: "all 0.3s",
    "&.MuiSelect-iconOpen": {
      transform: "translateY(-50%) rotate(180deg)",
    },
  },

  '&[dir="rtl"]': {
    ".MuiSelect-select": {
      padding: "16.5px 14px",
      paddingRight: "14px !important",
      paddingLeft: "32px !important",
    },
    ".MuiButtonBase-root": {
      right: "initial",
      left: "8px",
    },
  },
}));

export default SelectInput;

"use client";

import { TextareaAutosize, styled, FormHelperText } from "@mui/material";

function TextArea({
  placeholder,
  value,
  onChange,
  items,
  itemText,
  itemValue,
  customValue,
  justifyContent,
  marginTop,
  maxHeight,
  error,
  helperText,
  ...props
}) {
  return (
    <>
      <TextFieldSelect
        minRows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && (
        <FormHelperText sx={{ mr: 2, textAlign: "right" }} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}
const TextFieldSelect = styled(TextareaAutosize)(() => ({
  width: "100%",
  fontWeight: "400",
  lineHeight: "1.5",
  padding: "12px",
  borderRadius: "8px",
  border: "0.5px solid #A3A3A3",

  "&:hover": {
    borderColor: "#A3A3A3",
  },
  "&:focus": {
    borderColor: "#A3A3A3",
  },
  "&:focus-visible": {
    borderColor: "#A3A3A3",
    outline: "none",
  },
  "&:placeholder": {
    color: "#c4c4c4",
  },
}));

export default TextArea;

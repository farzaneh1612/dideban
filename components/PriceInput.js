import { TextField, styled } from "@mui/material";

import { NumericFormat } from "react-number-format";

function PriceInput({
  value,
  onChange,
  placeholderPlacement = "left",
  allowNegative = false,
  maxWidth,
  maxHeight,
  ...props
}) {
  return (
    <NumericFormat
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      value={value}
      placeholderPlacement={placeholderPlacement}
      customInput={TextFieldStyle}
      allowNegative={allowNegative}
      decimalScale={2}
      // valueIsNumericString={true}
      isNumericString={true}
      thousandsGroupStyle=","
      thousandSeparator={true}
      onValueChange={(values) => {
        onChange(values.value);
      }}
      {...props}
    />
  );
}

const TextFieldStyle = styled(TextField)(
  ({ textAlign, placeholderPlacement, maxWidth, maxHeight }) => ({
    textAlign,
    ".MuiInputBase-root": {
      border: "none",
    },
    input: {
      border: "1px solid #C5C5C5",
      maxHeight: maxHeight || "31px",
      borderRadius: "8px",
      maxWidth: maxWidth || "155px",
      "&::placeholder": {
        textAlign: placeholderPlacement,
      },
    },
  })
);

export default PriceInput;

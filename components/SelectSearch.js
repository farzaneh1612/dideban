import { TextField, styled, Autocomplete, FormHelperText } from "@mui/material";
function SelectSearch({
  items,
  onProvinceChange,
  placeholder,
  maxHeight,
  error,
  helperText,
  value,
  width,
}) {
  return (
    <>
      <AutocompleteStyle
        width={width}
        maxHeight={maxHeight}
        onChange={(event, newValue) => {
          const selectedItem = items.find((item) => item?.name === newValue);

          if (selectedItem) {
            onProvinceChange(selectedItem);
          } else {
            // Handle the case when no item is selected
            onProvinceChange(null);
          }
        }}
        options={items?.map((option) => option.name)}
        sx={{ width: 140 }}
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} />
        )}
      />

      {error && (
        <FormHelperText sx={{ ml: 2, textAlign: "right" }} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}

const AutocompleteStyle = styled(Autocomplete)(({ maxHeight, width }) => ({
  width: width || `100% !important`,

  ".MuiInputBase-root": {
    borderRadius: "5px !important",
    borderColor: "#adadad !important",
    padding: 0,
    paddingRight: `0px !important`,
    ".MuiAutocomplete-endAdornment": {
      right: "auto",
      left: 0,
    },
    ".MuiInputBase-input": {
      maxHeight: maxHeight || "31px",
    },
  },
}));

export default SelectSearch;

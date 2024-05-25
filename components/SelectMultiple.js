import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Box, Chip, FormHelperText, styled } from "@mui/material";

export default function SelectMultiple({
  value,
  onChange,
  items,
  itemText,
  itemValue,
  customValue,
  justifyContent,
  dir,
  marginTop,
  maxHeight,
  error,
  helperText,
  ...props
}) {
  const MenuProps = {
    PaperProps: {
      style: {
        background: "#F5F5F5",
      },
    },
  };

  return (
    <>
      <SelectStyle
        multiple
        value={value}
        onChange={onChange}
        MenuProps={MenuProps}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected?.map((value) => {
              const option = items?.find((item) => item?.id === value);
              return <Chip key={value} label={option?.name} />;
            })}
          </Box>
        )}
      >
        {items?.map((item) => (
          <MenuItem key={item?.id} value={item?.id}>
            <Checkbox checked={value?.indexOf(item?.id) > -1} />

            <ListItemText primary={item?.name} />
          </MenuItem>
        ))}
      </SelectStyle>

      {error && (
        <FormHelperText sx={{ ml: 2 }} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}

const SelectStyle = styled(Select)(({ theme }) => ({
  borderRadius: "8px",
  background: "#F5F5F5",
  width: "100%",
  minHeight: "44px",
  ".MuiSelect-select": {
    padding: theme.spacing(0.5, 1),
  },
}));

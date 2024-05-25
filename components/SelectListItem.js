import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, Chip, styled, FormHelperText } from "@mui/material";
import Image from "next/image";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";

export default function SelectListItem({
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
  playlistItemId,
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
          <MenuItem
            key={item?.id}
            value={item?.id}
            display="flex"
            sx={{ justifyContent: "space-between !important" }}
          >
            <Box edge="end" display="flex" alignItems="center">
              <ListItemAvatar sx={{ paddingRight: "8px !important" }}>
                <Image
                  width={70}
                  height={70}
                  borderRadius={6}
                  alt=""
                  src={item?.thumbnail.path}
                  unoptimized
                />
              </ListItemAvatar>
              <ListItemText primary={item?.name} />
              <ListItemText primary={item?.time} />
            </Box>

            <Checkbox checked={value?.indexOf(item?.id) > -1} />
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

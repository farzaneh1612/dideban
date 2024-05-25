"use client";
import { SearchIcon } from "../public/Icon";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
  useTheme,
  Popover,
  Paper,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";

function SearchInput({
  setData, 
  allData,
  setSearchQuery,
  searchQuery,
  showIcon,
  placeholder,
}) {
  const theme = useTheme();

  const [searchResults, setSearchResults] = useState([]);
  const [ShowResult, setShowResult] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchQuery(e.target.value);
    setData(e.target.value);
    setShowResult(true);

    const filteredData = allData?.filter((item) =>
      item?.name?.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredData);
  };

  const handleListItemClick = (result) => {
    setData(result.name);
    setSearchQuery(result.name);
    setShowResult(false);
  };
  const handlePaperClick = (e) => {
    e.stopPropagation();
    setShowResult(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest("#search-paper")) {
        // Click outside the Paper component
        setShowResult(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <Box>
      <TextFieldStyle
        variant="outlined"
        value={searchQuery}
        onMouseDown={(e) => e.stopPropagation()}
        onInput={handleInput}
        dir="rtl"
        placeholder={placeholder}
        textAlign="right"
        // error={!!searchQuery}
        // helperText={!!searchQuery && "لطفا شهر مورد نظر خود را انتخاب کنید"}
        InputProps={{
          endAdornment: (
            <>
              {showIcon && (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "text.secondary" }}
                    aria-label="history"
                    size="small"
                  >
                    <Typography
                      component="span"
                      ml={1}
                      display="flex"
                      alignItems="center"
                    >
                      <SearchIcon color={theme.palette.text.secondary} />
                    </Typography>
                  </IconButton>
                </InputAdornment>
              )}
            </>
          ),
        }}
        fullWidth
      />
      {ShowResult && searchResults?.length !== 0 && (
        <Box
          id="search-paper"
          sx={{ position: "absolute", width: "100%" }}
          onClick={handlePaperClick}
        >
          <Paper>
            <List>
              {searchResults?.map((result) => (
                <ListItem
                  sx={{ cursor: "pointer" }}
                  key={result.id}
                  onClick={() => handleListItemClick(result)}
                >
                  {/* Render your search result item here */}
                  <Typography>{result.name}</Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      )}
    </Box>
  );
}

const TextFieldStyle = styled(TextField)(({ theme }) => ({
  // paddingTop: theme.spacing(3),
  // paddingBottom: theme.spacing(3),

  ".MuiInputBase-root": {
    color: theme.palette.text.secondary,
    border: "none",
    // background: `${theme.palette.text.grayLight}`,
    borderRadius: "6px",
    border:"1px solid #d5d5d5"
  },
}));

export default SearchInput;

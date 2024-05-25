import usePaginate from "@/hooks/usePaginate";
import {
  Grid,
  Pagination as MuiPagination,
  Typography,
  styled,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Pagination({ handlePageSizeChange,handlePage,totalPages,page }) {


 

  return (
    <>
  <Grid
  pt={2}
              item
              md={12}
              xs={12}
              order={{ md: 1, xs: 1 }}
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
     
      <MuiPaginationStyle
        color="primary"
        count={totalPages}
        onChange={(event, value) => handlePage(value)}
        page={page}
        size="small"
      ></MuiPaginationStyle>
</Grid>
    </>
  );
};

export default Pagination;

const MuiPaginationStyle = styled(MuiPagination)(({ theme }) => ({
  direction: "ltr",
  ".MuiPagination-ul": {
    justifyContent: "start",

    ".MuiButtonBase-root": {
      background: theme.palette.text.border,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      lineHeight: "0",
      color: theme.palette.text.secondary,
      borderRadius: "4px",

      "&.Mui-selected": {
        background: theme.palette.adduser.main,
        color: theme.palette.common.white,
      },
    },
  },
}));
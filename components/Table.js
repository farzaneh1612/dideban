import {
  Box,
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  useTheme,
  Typography,
} from "@mui/material";

import EmptyState from "./EmptyState";

import { useMemo, useState } from "react";

import {
  EmptyStateIcon,
  SortBottomIcon,
  SortIcon,
  SortTopIcon,
} from "@/public/Icon";

export function Table({
  headers,
  items,
  hideBorders = false,
  onRowClick = () => {},
  dense = false,
  onSort,
}) {
  const theme = useTheme();

  const [sortedColumn, setSortedColumn] = useState(null);

  const handleClickColumn = ({ key, sortable, sortKey }) => {
    if (sortable) {
      if (key === sortedColumn?.key) {
        if (sortedColumn.sort === "asc") {
          setSortedColumn({ key: key, sort: "desc", sortKey });

          if (onSort) {
            onSort({ key: key, sort: "desc", sortKey });
          }
        } else {
          setSortedColumn(null);

          if (onSort) {
            onSort(null);
          }
        }
      } else {
        setSortedColumn({ key: key, sort: "asc", sortKey });

        if (onSort) {
          onSort({ key: key, sort: "asc", sortKey });
        }
      }
    }
  };

  const sortedValue = useMemo(() => {
    const itemsToSort = items ? [...items] : [];

    if (sortedColumn) {
      if (sortedColumn.sort === "asc") {
        return itemsToSort.sort((a, b) => {
          const aValue = a[sortedColumn.sortKey];
          const bValue = b[sortedColumn.sortKey];
          if (aValue === undefined || bValue === undefined) {
            return 0; // Handle undefined values
          }
          if (aValue < bValue) {
            return 1;
          }
          if (aValue > bValue) {
            return -1;
          }
          return 0;
        });
      } else {
        return itemsToSort.sort((a, b) => {
          const aValue = a[sortedColumn.sortKey];
          const bValue = b[sortedColumn.sortKey];
          if (aValue === undefined || bValue === undefined) {
            return 0; // Handle undefined values
          }
          if (aValue < bValue) {
            return -1;
          }
          if (aValue > bValue) {
            return 1;
          }
          return 0;
        });
      }
    } else {
      return items;
    }
  }, [sortedColumn, items]);

  return (
    <TableContainerStyle component={Paper}>
      <MuiTableStyle hideBorders={hideBorders}>
        <TableHeadStyle dense={dense}>
          <TableRow>
            {headers?.map((headCell) => (
              <TableHeadCellStyle
                dense={dense}
                key={headCell.key}
                align={headCell.align}
                width={headCell?.width}
                onClick={() => handleClickColumn(headCell)}
                sortable={headCell?.sortable}
              >
                <HeadCellIconWrapper
                  sortable={headCell?.sortable}
                  selected={sortedColumn && sortedColumn.key === headCell.key}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    pr={1}
                    color="text.secondary"
                  >
                    {headCell.name}
                  </Typography>
                  {headCell?.hideSortIcon && (
                    <>
                      <div className="sort-icon">
                        {sortedColumn?.sort === "asc" ? (
                          <SortTopIcon />
                        ) : (
                          <SortBottomIcon />
                        )}
                      </div>
                    </>
                  )}
                </HeadCellIconWrapper>
              </TableHeadCellStyle>
            ))}
          </TableRow>
        </TableHeadStyle>

        <TableBody>
          {sortedValue?.length > 0 ? (
            sortedValue?.map((row, index) => (
              <TableRowStyle
                color={row?.color}
                onClick={() => onRowClick && onRowClick(row)}
                key={index}
              >
                {headers?.map((headCell) => (
                  <TableCellStyle
                    dense={dense}
                    key={`${index}-${headCell.key}`}
                    align={headCell.align}
                  >
                    {row[headCell?.key]}
                  </TableCellStyle>
                ))}
              </TableRowStyle>
            ))
          ) : (
            <TableRowStyle>
              <TableCellStyle colSpan={headers?.length}>
                <EmptyState
                  text={"No Data Available"}
                  icon={<EmptyStateIcon color={theme.palette.modules.border} />}
                />
              </TableCellStyle>
            </TableRowStyle>
          )}
        </TableBody>
      </MuiTableStyle>
    </TableContainerStyle>
  );
}

export const TableContainerStyle = styled(TableContainer)({
  width: "100%",
  overflow: "auto",
  backgroundColor: "#ffffff",
  borderRadius: 0,
});

export const TableCellStyle = styled(TableCell)(({ theme, dense }) => ({
  padding: dense ? theme.spacing(0.8, 0.5) : theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5, 0.5),
  },
}));

export const HeadCellIconWrapper = styled(Box)(
  ({ sortable, selected, theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ".sort-icon": {
      display: "flex",
      alignItems: "center",
    },
  })
);

export const TableHeadCellStyle = styled(TableCell)(
  ({ theme, dense, sortable }) => ({
    position: "relative",
    cursor: sortable ? "pointer" : "default",
    padding: dense ? theme.spacing(0.8, 0.5) : theme.spacing(2),
    color: `${theme.palette.text.primary} !important`,

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.5, 0.5),
    },
  })
);

export const MuiTableStyle = styled(MuiTable)(({ hideBorders, theme }) => ({
  border: hideBorders ? "none" : "1px solid rgba(113,119,129,.15)",

  [theme.breakpoints.down("md")]: {
    border: "none",
  },
}));

export const TableHeadStyle = styled(TableHead)(({ theme, dense }) => ({
  background: dense ? "transparent !important" : "",

  [theme.breakpoints.down("md")]: {
    background: "none !important",
  },
}));

export const TableRowStyle = styled(TableRow)(({ color, onRowClick }) => ({
  background: color,
  cursor: onRowClick ? "pointer" : "text",
}));

export const ResponsiveSortIcons = styled(Box)(({ sort, theme }) => ({
  position: "absolute",
  right: "-15px",
  top: "calc(50% - 2px)",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  "ion-icon": {
    width: "10px",
    height: "10px",

    "&.up-icon": {
      color:
        sort === "asc"
          ? theme.palette.secondary.main
          : theme.palette.text.secondary,

      width: sort === "asc" ? "13px" : "10px",
      height: sort === "asc" ? "13px" : "10px",
    },

    "&.down-icon": {
      color:
        sort === "desc"
          ? theme.palette.secondary.main
          : theme.palette.text.secondary,
      width: sort === "desc" ? "13px" : "10px",
      height: sort === "desc" ? "13px" : "10px",
    },
  },
}));

export default Table;

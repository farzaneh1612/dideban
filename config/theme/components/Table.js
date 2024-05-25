const MuiTableContainer = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "10px",

      ".MuiTable-root": {
        ".MuiTableHead-root": {
          background: theme.palette.modules.tableHead,
          borderBottom: "none",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "21px",
          color: theme.palette.text.secondary,
        },
      },

      ".MuiTableCell-root": {
        borderBottom: "none",
        fonWeight: "500",
        fontSize: "14px",
        lineHeight: "21px",
        color: theme.palette.text.secondary,
      },

      ".MuiTableRow-root": {
        borderBottom: "1px solid rgba(113,119,129,.15)",
      },
    }),
  },

  defaultProps: {
    variant: "contained",
    disableElevation: true,
  },
};

export default MuiTableContainer;

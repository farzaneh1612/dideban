export const MuiTabs = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: "initial",
      color: theme.palette.text.main,
      backgroundColor: "initial",
      justifyContent: "space-between",
      margin: "auto",
      padding: "8px",

      ".MuiTabs-indicator": {
        height: "1px",
      },

      ".MuiButtonBase-root": {
        fontSize: "14px",
        fontWeight: "500",
        minHeight: "30px",
        minWidth: "60px",
        textTransform: "none",
        color: theme.palette.grey[100],
        padding: "0px",
        "&.Mui-selected": {
          color: "#1ca6b0",
          background: "#ffff",
          padding: "0",
          borderRadius: "12px",
        },
      },
    }),
  },
  defaultProps: {
    indicatorColor: "secondary",
    textColor: "secondary",
  },
};

export default MuiTabs;

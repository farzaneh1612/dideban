const MuiMenu = {
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiButtonBase-root": {
        "&.MuiMenuItem-root": {
          "&.MuiMenuItem-root": {
            "&.Mui-selected": {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
      },
      ".MuiMenu-paper": {
        boxShadow: theme.shadows[3],
        backgroundColor: theme.palette.primary.light,
        borderRadius: "8px",
      },
    }),
  },
  defaultProps: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

export default MuiMenu;

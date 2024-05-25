const MuiButton = {
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiButtonBase-root:hover": {
        backgroundColor: " transparent !important",
      },

      "&.MuiButton-sizeMedium": {
        minHeight: "30px",
      },
      "&.MuiButton-sizeSmall": {
        minHeight: "34px",
        fontSize: "10px",
        minWidth: "72px",
      },
      minWidth: "130px",
      borderRadius: "8px",
      textTransform: "none",
      letterSpacing: "2px !important",
      fontSize: "14px",
      fontWeight: 500,

      "&.Mui-disabled:not(.MuiLoadingButton-loading)": {
        opacity: 0.3,
        color: `${theme.palette.common.white}`,
      },

      "&.MuiLoadingButton-loading": {
        ".MuiCircularProgress-circle": {
          color: theme.palette.common.white,
        },

        "*:not(.MuiLoadingButton-loadingIndicator) > ": {
          opacity: 0.3,
        },
      },
    }),
  },

  defaultProps: {
    variant: "contained",
    disableElevation: true,
  },
};

export default MuiButton;

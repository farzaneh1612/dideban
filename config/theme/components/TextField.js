const MuiTextField = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: "100%",

      ".MuiInputBase-root": {
        borderRadius: "11px",
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        alignItems: "center",
        border: "1px solid #000",
        ".MuiInputBase-input": {
          textAlign: "inherit",
          height: "100%",
          padding: "8px",

          "&::placeholder ": {
            fontSize: "12px",
            color: "#0000008a",
            fontWeight: 400,
            opacity: 1,
          },
        },

        color: theme.palette.common.black,
      },

      "&.Mui-focused": {
        border: `1px solid ${theme.palette.info.lightest}`,
      },

      ".MuiFormHelperText-root": {
        textAlign: "inherit",
      },

      fieldset: {
        border: "none !important",
      },
    }),
  },

  // defaultProps: {
  //   dir: "rtl",
  // },
};

export default MuiTextField;

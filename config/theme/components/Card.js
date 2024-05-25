const MuiCard = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "8px",
      padding: theme.spacing(2),
      // boxShadow: '0px 0px 11px -10px rgba(0,0,0,0.31)',
      background: `${theme.palette.background.main}`,

      "&.MuiPaper-outlined": {
        boxShadow: "none",
        border: `1px solid ${theme.palette.text.primary}20`,
        borderRadius: '8px'
      },

      // "&:hover": {
      //   boxShadow: theme.shadows["2"],
      // },
    }),
  },
};

export default MuiCard;

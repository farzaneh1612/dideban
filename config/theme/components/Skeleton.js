const MuiSkeleton = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: `${theme.palette.secondary.main}20`,
    }),
  },
  defaultProps: {
    animation: "wave",
  },
};

export default MuiSkeleton;

import { Box, Typography, styled } from "@mui/material";

function EmptyState({ icon, text }) {
  return (
    <BoxStyle>
      {icon}
      <Typography variant="h5" color="text.secondary">
        {text}
      </Typography>
    </BoxStyle>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  width: '100%',
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  border: `8px solid ${theme.palette.modules.border}`,
  padding: theme.spacing(1),
  svg: {
    width: "120px",
    marginBottom: theme.spacing(1),
  },
}));

export default EmptyState;

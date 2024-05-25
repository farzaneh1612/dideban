import { Box, Card, Typography, styled } from "@mui/material";

import React from "react";

function WidgetCard({ title, count, color, icon }) {
  return (
    <Card dir="rtl" sx={{ background: color, position: "relative", height:"100%" }}>
      <BackgroundIcon>{icon}</BackgroundIcon>
      <Typography color="common.white" variant="h6">
        {title}
      </Typography>

      {count()}
    </Card>
  );
}

const BackgroundIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "-40px",
  top: "0",
  width: "100px",
  height: "100px",
  opacity: 0.2,

  svg: {
    color: theme.palette.common.white,
    width: '100%',
    height: '100%',
  },
}));

export default WidgetCard;

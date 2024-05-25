import { useMediaQuery, useTheme } from "@mui/material";

export default function useIsMobileView(size) {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down(size || "sm"));

  return isMobileView;
}

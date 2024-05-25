"use client";

import LocaleLink from "@/components/LocaleLink";
import { Box, Button, Typography, styled, useTheme } from "@mui/material";
import { ROUTES_PATH } from "@/constants/route";
export default function NotFound() {
  const theme = useTheme();

  return (
    <NotFoundWrapper>
      <Box pb={3}>
        <Typography
          variant="h1"
          textAlign="center"
          color="secondary"
          fontWeight={600}
          pb={2}
          sx={{ fontSize: "100px", textShadow: " 1px 1px 1px rgba(0, 0, 0)" }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          color="text.main"
          lineHeight="4"
          fontWeight={300}
        >
          صفحه مورد نظر شما یافت نشد!
        </Typography>
        <Typography variant="h4" textAlign="center" color="text.main">
          ممکن است این صفحه وجود نداشته باشد و یا از سایت حذف شده باشد
        </Typography>
      </Box>
      <Button
        px={2}
        sx={{ background: `${theme.palette.secondary.main}` }}
        display="flex"
        justifyContent="center"
        component={LocaleLink}
        href={ROUTES_PATH?.home}
      >
        <Typography color="common.white">بازگشت به صفحه اصلی</Typography>
      </Button>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled(Box)(({ theme }) => ({
  background: `url(/blogs/images/pageNotFound.png) `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#d1d5db00",
  position: "relative",
  overflow: "hidden",
}));

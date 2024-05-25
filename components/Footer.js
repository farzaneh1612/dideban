import theme from "@/config/theme/theme";
import { ROUTES_PATH } from "@/constants/route";
import { Instagram, Telegram, WhatsApp, Youtube } from "@/public/Icon";
import {
  Container,
  Grid,
  Typography,
  styled,
  List,
  ListItem,
  Box,
} from "@mui/material";
import Image from "next/image";
import LocaleLink from "./LocaleLink";
import useIsMobileView from "@/hooks/useIsMobileView";
const dataFooter = [
  { id: 0, name: "تماس با پازارلند", path: "/contact-us" },
  { id: 1, name: " وبلاگ ", path: "/blog" },
  { id: 2, name: "میزبان شوید ", path: "/" },
  { id: 3, name: " درباره پازارلند ", path: "/about" },
  { id: 4, name: " حریم شخصی کاربران ", path: "/user-privacy" },
  { id: 5, name: " سوالات متداول ", path: "/questions" },
  { id: 6, name: "قوانین و مقررات رزرو", path: "/terms-conditions" },
  { id: 7, name: "خط مشی پازارلند", path: "/policy" },
];

function Footer() {
  const isMobileView = useIsMobileView();

  return (
    <WrapperFooter>
      <Container>
        <Grid container columnSpacing={{ md: 3, xs: 0 }} mt={7}>
          <Grid item md={5} xs={12}>
            <Box display="flex">
              <BoxLogo>
                <Image
                  src="/image/logo-sm.png"
                  width={40}
                  height={40}
                  alt=""
                  unoptimized
                />
              </BoxLogo>
              <Box pr={2}>
                <Typography
                  variant={isMobileView ? "h5" : "h2"}
                  color="text.main"
                  fontWeight={900}
                  pb={2}
                >
                  پازارلند
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.main"
                  textAlign="center"
                  sx={{ background: "#fff" }}
                >
                  www.pazarland.ir
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              pr={{ md: 10, xs: 0 }}
              justifyContent="space-between"
            >
              <List>
                {dataFooter.slice(0, 4).map((item, index) => (
                  <ListItem key={index} component={LocaleLink} href={item.path}>
                    <Typography
                      textAlign="right"
                      variant={isMobileView ? "subtitle2" : "h6"}
                      color="text.main"
                    >
                      {item.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <List>
                {dataFooter.slice(4, 8).map((item, index) => (
                  <ListItem key={index} component={LocaleLink} href={item.path}>
                    <Typography
                      textAlign="right"
                      variant={isMobileView ? "subtitle2" : "h6"}
                      color="text.main"
                    >
                      {item.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item md={7} xs={12}>
            <BoxSupport>
              <Typography
                textAlign="right"
                variant={isMobileView ? "subtitle2" : "h6"}
                fontWeight={500}
                mt={{ md: "0px", xs: "24px" }}
              >
                تلفن پشتیبانی: ۹۱۰۰۸۸۴۴ - ۰۲۱
              </Typography>
              <Typography
                textAlign="right"
                variant={isMobileView ? "subtitle2" : "h6"}
                fontWeight={500}
              >
                ایمیـل: support@pazarland.ir
              </Typography>

              <Box display="flex" pt={{ lg: "24px", xs: "16px" }}>
                <CardGetApplication
                  display="flex"
                  component={LocaleLink}
                  href={ROUTES_PATH.home}
                >
                  <Typography variant="subtitle1">
                    دریافت از گوگل پلی
                  </Typography>
                  <Image
                    src="/image/footer/google-play.png"
                    width={20}
                    height={20}
                    alt=""
                    unoptimized
                  />
                </CardGetApplication>
                <CardGetApplication
                  display="flex"
                  mr={1}
                  component={LocaleLink}
                  href={ROUTES_PATH.home}
                >
                  <Typography variant="subtitle1">دریافت از بازار</Typography>
                  <Image
                    src="/image/footer/cafe-bazaar.png"
                    width={20}
                    height={20}
                    alt=""
                    unoptimized
                  />
                </CardGetApplication>
              </Box>

              <Box mt={5}>
                <Image
                  src="/image/footer/image.png"
                  width={256}
                  height={64}
                  alt=""
                  unoptimized
                />
              </Box>
            </BoxSupport>
          </Grid>
        </Grid>
        <WrapperSocialMedia>
          <Grid container columnSpacing={{ md: 3, xs: 0 }} my={2}>
            <Grid item md={5} xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                pr={{ md: 11, xs: 0 }}
              >
                <Typography textAlign="right" variant="h6">
                  شبکه های اجتماعی
                </Typography>

                <Box display="flex" justifyContent="space-around" width="120px">
                  <Box
                    component={LocaleLink}
                    href={ROUTES_PATH.home}
                    display="flex"
                  >
                    <Instagram />
                  </Box>
                  <Box
                    component={LocaleLink}
                    href={ROUTES_PATH.home}
                    display="flex"
                  >
                    <WhatsApp />
                  </Box>
                  <Box
                    component={LocaleLink}
                    href={ROUTES_PATH.home}
                    display="flex"
                  >
                    <Telegram />
                  </Box>
                  <Box
                    component={LocaleLink}
                    href={ROUTES_PATH.home}
                    display="flex"
                  >
                    <Youtube />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={7} xs={12}>
              <Typography
                textAlign={{ xs: "center", md: "left", lg: "center" }}
                variant={isMobileView ? "subtitle2" : "h6"}
                fontWeight={400}
                pt={{ md: 0, xs: 2 }}
              >
                کلیه حقوق این سایت محفوظ و متعلق به شرکت پازارگاد است.
              </Typography>
            </Grid>
          </Grid>
        </WrapperSocialMedia>
      </Container>
    </WrapperFooter>
  );
}

export default Footer;

const WrapperFooter = styled(Box)(({ theme }) => ({
  background: theme.palette.text.light,
  paddingTop: theme.spacing(5),
  backgroundImage: "url('./image/footer/logo.png')",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "center",
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(1),
  },
}));

const BoxLogo = styled(Box)(({ theme }) => ({
  borderRadius: "35px 36px 14px 14px",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.00) 100%)",
  boxShadow: "0px 5px 9.8px 0px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(2px)",
  display: "inline-flex",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const CardGetApplication = styled(Box)(({ theme }) => ({
  borderRadius: "6px",
  background: "#FFF",
  display: "flex",
  justifyContent: "space-between",
  minWidth: "144px",
  padding: theme.spacing(1),
}));

const WrapperSocialMedia = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.text.border}`,
  display: "flex",
  width: "100%",
}));

const BoxSupport = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));

"use client";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  styled,
  Toolbar,
  Box,
  List,
  ListItem,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";

import {
  ROUTES_PATH,
  ROUTES_PATH_HOST_USER,
  ROUTES_PATH_PROFILE,
} from "@/constants/route";
import { MENUITEMS } from "@/constants/general";
import { usePathname, useRouter } from "next/navigation";
import { LoadingButton } from "@mui/lab";
import { Profile } from "@/public/Icon";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import WrapperLogin from "./Header/components/WrapperLogin";
import WrapperSignUp from "./Header/components/WrapperSignUp";
import {
  getAuthToken,
  getIsHost,
  getRefreshToken,
  getUseName,
  httpToken,
} from "@/config/http";
import OtpModal from "./Header/components/OtpModal";
import WrapperMobileNumber from "./Header/components/WrapperMobileNumber";
import { PostLogout } from "@/app/api/api";
import useNotify from "@/hooks/useNotify";
import MenuIcon from "@mui/icons-material/Menu";
import useIsMobileView from "@/hooks/useIsMobileView";
import SideMenu from "@/app/(main)/_components/SideMenu";

function Header({ addDataSearch }) {
  const pathname = usePathname();
  const theme = useTheme();
  const router = useRouter();
  const userName = getUseName();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showModalOtp, setShowModalOtp] = useState(false);
  const [showMobileNumber, setShowMobileNumber] = useState(false);
  const [phonNumber, setPhonNumber] = useState();
  const [isHost, setIsHost] = useState(false);
  const [openMenu, setOpeMenu] = useState(false);

  const isMobileView = useIsMobileView();
  const accessToken = getAuthToken();
  const refreshToken = getRefreshToken();
  const notify = useNotify();

  useEffect(() => {
    setIsHost(getIsHost());
  }, [accessToken, isHost]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeRout = () => {
    if (isHost !== "false") {
      router.push(ROUTES_PATH_HOST_USER?.personal);
    } else {
      router.push(ROUTES_PATH_PROFILE?.personal);
    }
  };
  const handleAccommodations = () => {
    if (isHost !== "false") {
      router.push(ROUTES_PATH_HOST_USER?.allAccommodations);
    } else {
      router.push(ROUTES_PATH_PROFILE?.travels);
    }
  };
  const handleTransactions = () => {
    if (isHost !== "false") {
      router.push(ROUTES_PATH_HOST_USER?.transactions);
    } else {
      router.push(ROUTES_PATH_PROFILE?.wallet);
    }
  };

  const handleLogout = async () => {
    const formData = new FormData();
    formData.append("refresh", refreshToken);

    try {
      await httpToken.post(PostLogout, { refresh: refreshToken });
      notify("خروج از حساب کاربری", "success");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("uid");
      localStorage.removeItem("isHost");
      localStorage.removeItem("userName");
      router.push(ROUTES_PATH?.home);
    } catch (e) {
      notify(e?.message, "error");
    }
  };
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const options = [
    {
      text: "حساب کاربری",

      onClick: changeRout,
    },
    {
      text: isHost === "false" ? "سفرهای من" : "اقامتگاه های من",

      onClick: handleAccommodations,
    },
    {
      text: isHost === "false" ? "کیف پول" : "تراکنش ها ",

      onClick: handleTransactions,
    },
    {
      text: "خروج از حساب کاربری",

      onClick: handleLogout,
    },
  ];
  const toggleDrawer = () => {
    setOpeMenu((v) => !v);
  };
  return (
    <>
      <WrapperHeader pathname={pathname}>
        <Container>
          <Grid container spacing={2} mt={0}>
            <Grid item lg={4} xs={8}>
              <Toolbar sx={{ paddingRight: "0 !important" }}>
                <Box
                  component={LocaleLink}
                  href={ROUTES_PATH.home}
                  pl={{ sm: 4, xs: 0 }}
                >
                  <Image
                    src="/image/logo/logo.png"
                    width="40"
                    height="40"
                    alt=""
                    unoptimized
                  />
                </Box>

                {!isMobileView ? (
                  <>
                    {MENUITEMS?.map((item, index) => (
                      <MenuLink
                        key={index}
                        component={LocaleLink}
                        href={item.path}
                        onClick={() => addDataSearch(() => ({}))}
                        sx={{ flexGrow: 1 }}
                        active={item.path}
                        pathname={pathname}
                      >
                        <Typography variant="h6" color="text.main">
                          {item?.name}
                        </Typography>
                      </MenuLink>
                    ))}
                  </>
                ) : (
                  <>
                    {!openMenu && (
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{ ...(openMenu && { display: "none" }) }}
                      >
                        <MenuIcon color="text" size="big" />
                      </IconButton>
                    )}
                  </>
                )}
              </Toolbar>
              <SideMenu open={openMenu} toggleDrawer={toggleDrawer} />
            </Grid>
            <Grid item lg={8} xs={4}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="end"
                height="100%"
                mr={10}
              >
                {!accessToken && (
                  <LoadingButton
                    onClick={() => setShowLogin(true)}
                    variant="contained"
                    color="text"
                    type="submit"
                    sx={{
                      flexGrow: 1,

                      maxWidth: "100px !important",
                    }}
                  >
                    <Typography color="primary.main"> ثبت نام/ورود</Typography>
                  </LoadingButton>
                )}

                {accessToken !== null && (
                  <User>
                    <ListStyle
                      // component={Button}
                      variant="text"
                      rounded
                      aria-label="Device settings"
                    >
                      <ListItem
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClickListItem}
                      >
                        <Profile color={theme.palette.text.secondary} />
                        <Typography
                          variant="h6"
                          fontWeight={500}
                          color="text.secondary"
                          px={1}
                        >
                          {userName}
                        </Typography>
                      </ListItem>
                    </ListStyle>

                    <Menu
                      id="lock-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "lock-button",
                        role: "listbox",
                      }}
                    >
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          onClick={(event) => option?.onClick(event)}
                        >
                          {option.icon}
                          <Typography
                            variant="h6"
                            pr={1}
                            color="secondary.main"
                          >
                            {option.text}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </User>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </WrapperHeader>

      {showLogin && (
        <Modal
          maxWidth={"sm"}
          open={showLogin}
          onClose={() => setShowLogin(false)}
          title={"ورود "}
        >
          <WrapperLogin
            setShowMobileNumber={setShowMobileNumber}
            setShowLogin={setShowLogin}
          />
        </Modal>
      )}

      {showSignUp && (
        <Modal
          maxWidth={"sm"}
          open={showSignUp}
          onClose={() => setShowSignUp(false)}
          title={"ثبت نام "}
        >
          <WrapperSignUp
            setShowSignUp={setShowSignUp}
            phonNumber={phonNumber}
          />
        </Modal>
      )}

      {showMobileNumber && (
        <Modal
          maxWidth={"sm"}
          open={showMobileNumber}
          onClose={() => setShowMobileNumber(false)}
          title={" شماره موبایل خود را وارد کنید"}
        >
          <WrapperMobileNumber
            setShowModalOtp={setShowModalOtp}
            setShowMobileNumber={setShowMobileNumber}
            setPhonNumber={setPhonNumber}
          />
        </Modal>
      )}

      {showModalOtp && (
        <Modal
          maxWidth={"sm"}
          open={showModalOtp}
          onClose={() => setShowModalOtp(false)}
          title={"وارد کردن کد Otp"}
        >
          <OtpModal
            setShowSignUp={setShowSignUp}
            setShowModalOtp={setShowModalOtp}
          />
        </Modal>
      )}
    </>
  );
}

export default Header;

export const MenuLink = styled(Box)(({ theme, active, pathname }) => ({
  h6: {
    borderBottom:
      active === pathname ? `2px solid ${theme.palette.primary.lightest}` : "",
    display: "inline-block",
  },
}));

export const WrapperProfile = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "10px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  flexShrink: "0",
  borderRadius: "30px",
  background: theme.palette.secondary.light,
  flexGrow: 1,
  maxWidth: "40px",
}));

const User = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));

const WrapperHeader = styled(Box)(({ theme, pathname }) => ({
  [theme.breakpoints.down("lg")]: {
    position: pathname === "/home" ? "absolute" : "relative",
    zIndex: 10,
    width: "100%",
  },
}));

const ListStyle = styled(List)(({ theme }) => ({
  borderRadius: "8px",
  background: theme.palette.secondary.light,
  padding: theme.spacing(0, 1),
  cursor: "pointer",
  position: "absolute",
}));

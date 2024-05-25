"use client";

import {
  Container,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  useTheme,
  Button,
} from "@mui/material";

import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { MoonStars, Notification, Profile } from "@/public/Icon";
import { PostLogout } from "@/app/api/api";
import { httpToken } from "@/config/http";
import useNotify from "@/hooks/useNotify";
import { useRouter } from "next/navigation";
import { ROUTES_PATH } from "@/constants/route";
// import { getRefreshToken, getUseName } from "../../../../../config/http";
import useIsMobileView from "@/hooks/useIsMobileView";
import Image from "next/image";

function AppBar({ toggleDrawer, openDrawer }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  // const refreshToken = getRefreshToken();
  const notify = useNotify();
  // const userName = getUseName();
  const isMobileView = useIsMobileView();

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleLogout = async () => {
  //   const formData = new FormData();
  //   formData.append("refresh", refreshToken);

  //   try {
  //     await httpToken.post(PostLogout, { refresh: refreshToken });
  //     notify("خروج از حساب کاربری", "success");
  //     localStorage.removeItem("accessToken");
  //     localStorage.removeItem("refreshToken");
  //     localStorage.removeItem("uid");
  //     localStorage.removeItem("isHost");
  //     localStorage.removeItem("userName");
  //     router.push(ROUTES_PATH?.home);
  //   } catch (e) {
  //     notify(e?.message, "error");
  //   }
  // };

  const options = [
    {
      text: "خروج از حساب کاربری",
      icon: <InputOutlinedIcon color="secondary" fontSize="small" />,
      // onClick: handleLogout,
    },
  ];

  return (
    <Container>
    <WrapperAppBar>
        <Grid container alignItems="center">
          <Grid item sm={8} xs={12}>
            <Box  display="flex" alignItems="center">
              {!openDrawer && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  edge="start"
                  sx={{ ...(open && { display: "none" }) }}
                >
                  <MenuIcon color="profile" />
                </IconButton>
              )}
              {isMobileView ? (
                <Typography pr={4} variant="h4">
                جهت به روز رسانی داده ها،<br />
                صفحه خود را مجددا بارگذاری نمایید
              </Typography>
                
              ) : (
                <Typography  variant="h6" fontWeight={200}  color="text.main" >
جهت به روز رسانی داده ها، صفحه خود را مجددا بارگذاری نمایید </Typography>
              )}
            </Box>
          </Grid>

          <Grid item sm={4} xs={12}>
            <Box display="flex" alignItems="center" justifyContent="end">
              <Button size="small" onClick={() => router.push(ROUTES_PATH?.home)}>
                <Notification color={theme.palette.common.white}/>
              </Button>
              <MoonStars color={theme.palette.common.white} />

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
          <Image src="/image/Avatar.png" alt="" width={38} height={38} />
                    {/* <Typography
                      variant="h6"
                      fontWeight={400}
                      color="common.white"
                      px={1}
                    >
                      {userName}
                    </Typography> */}
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
                      <Typography variant="h6" pr={1} color="secondary.main">
                        {option.text}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </User>
            </Box>
          </Grid>
        </Grid>
      
    </WrapperAppBar>
    </Container>
  );
}

const WrapperAppBar = styled(Box)(({ theme }) => ({
  minHeight: "72px",
  // borderBottom: `1px solid ${theme.palette.text.border}`,
  boxShadow: "0px 4px 4px 0px rgba(165, 163, 174, 0.3)",
  padding:theme.spacing(0,2),
  borderRadius:"6px",
  display:"flex",
alignItems:"center",
  background: theme.palette.common.white,
  zIndex: 10,
  // position: "-webkit-sticky", /* Safari */
  // position: "sticky",
  // top: 0,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 0),
    position: "relative",
  },
}));
const User = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));
const BoxHome = styled(Box)(({ theme }) => ({
  background: theme.palette.profile.active,
  padding: theme.spacing(0.6, 1.5),
  cursor: "pointer",
  marginLeft: theme.spacing(2),
  borderRadius: "8px",
}));

const ListStyle = styled(List)(({ theme }) => ({
  borderRadius: "8px",
  background: theme.palette.profile.main,
  padding: theme.spacing(0, 1),
  cursor: "pointer",
}));

export default AppBar;

"use client";
import { AppBar as MuiAppBar, styled, Box } from "@mui/material";

export const drawerWidth = 240;

export const Main = styled("main", {

  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background:"rgba(248, 247, 250, 1)",
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: open ? `-${drawerWidth}px` : "0px",
  paddingTop: theme.spacing(2),
  minHeight: `calc(100vh - 72px)`,

  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    padding: theme.spacing(0),
  },

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",

  button: {
    color: theme.palette.common.white,
  },
}));
export const CardProfile = styled(Box)(({ theme }) => ({
  borderRadius: "6px",
  // boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
  padding: theme.spacing(1),
  margin: theme.spacing(3, 0),
  width: "100%",
}));
export const SectionTitle = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.text.border}`,
}));
export const CardId = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/image/general/bank-card.png')`,
  minHeight: "240px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "350px",
  margin: "auto",
  position: "relative",
}));

export const BoxHome = styled(Box)(({ theme }) => ({
  background: theme.palette.profile.active,
  padding: theme.spacing(0.6, 1.5),
  cursor: "pointer",
  marginLeft: theme.spacing(2),
  borderRadius: "8px",
}));

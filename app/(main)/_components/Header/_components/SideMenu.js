"use client";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  styled,
  Typography,
} from "@mui/material";
import { DrawerHeader, drawerWidth } from "../../../layout.style";
import Image from "next/image";
import MenuListItem from "./MenuListItem";
import useIsMobileView from "@/hooks/useIsMobileView";
import { SIDE_MENU_ITEMS } from "@/constants/profile";
import { CircleDot, SmartHome } from "@/public/Icon";
import { BorderBottom } from "@mui/icons-material";

function SideMenu({ open, toggleDrawer, setOpenModal }) {
  const isMobileView = useIsMobileView();
  const menuItems = SIDE_MENU_ITEMS;

  return (
    <DrawerStyle
      variant={isMobileView ? "temporary" : "persistent"}
      anchor="right"
      open={open}
    >
      <Box display="flex" justifyContent="space-between" mb={5} sx={{borderBottom:"1px solid #ccc"}}>
        <Box display="flex" alignItems="center" >
          <Image src="/image/logo/logo.png" alt="" width={48} height={48} />
          <Typography color="text.grayDark" variant="h6" pr={2}>
            سامانه دیده بان
          </Typography>
        </Box>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            <CircleDot />
          </IconButton>
        </DrawerHeader>
      </Box>

      <List>
        {menuItems?.map((item, index) => (
          <>
            <MenuListItem key={index} item={item} toggleDrawer={toggleDrawer} />
          </>
        ))}
      </List>
    </DrawerStyle>
  );
}

const DrawerStyle = styled(Drawer)(({ open, theme }) => ({
  width: open && drawerWidth,
  flexShrink: 0,
  zIndex: open ? 5 : -1,

  "& .MuiDrawer-paper": {
    padding: theme.spacing( 2),
    background: theme.palette.common.white,
    borderLeft: `1px solid ${theme.palette.text.border}`,
    width: open && drawerWidth,
    boxSizing: "border-box",
    
    overflowX: "hidden",
  },
}));

const SelectionHosting = styled(Box)(({ theme }) => ({
  borderTop: `1px dashed ${theme.palette.text.main}`,
  display: "flex",
  padding: theme.spacing(5, 1.5),
  alignItems: "center",
  marginTop: theme.spacing(3),
  cursor: "pointer",
}));

export default SideMenu;

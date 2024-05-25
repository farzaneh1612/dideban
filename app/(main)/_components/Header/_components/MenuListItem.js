import useIsMobileView from "@/hooks/useIsMobileView";
import {
  Box,
  ListItem,
  ListItemButton,
  Typography,
  styled,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import { useMemo } from "react";
// import { useSelector } from "react-redux";

function MenuListItem({ item, showChildren, setShowChildren, toggleDrawer }) {
  const pathname = usePathname();
  const router = useRouter();
  const isMobileView = useIsMobileView();

  const handleClick = (item) => {
    if (item?.children) {
      if (item.key === showChildren) {
        setShowChildren(null);
      } else {
        setShowChildren(item.key);
      }
    } else {
      router.push(item.path);
      if (isMobileView) {
        router.push(item.path);
        toggleDrawer();
      }
    }
  };

  const isActive = useMemo(() => {
    return pathname === item?.path;
  }, [pathname, item?.path]);

  return (
    <>
      <ListItem sx={{ paddingBottom: 3 }} disablePadding>
        <ListItemButtonParent
          onClick={() => handleClick(item)}
          isActive={isActive}
        >
          <ListItemParentName>
            {/* {isActive ? item?.iconActive : item?.icon} */}

            <Typography
              mr={2}
              fontWeight={isActive ? 500 : 400}
              variant="h6"
              color={isActive ? "common.white" : "text.main"}
            >
              {item.name}
            </Typography>
          </ListItemParentName>
        </ListItemButtonParent>
      </ListItem>
    </>
  );
}

const ListItemButtonParent = styled(ListItemButton)(({ theme, isActive }) => ({
  padding: theme.spacing(1.5),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderRadius: "8px",
  background: isActive ? theme.palette.profile.active : "transparent",
  color: theme.palette.common.white,
  position: "relative",
  textAlign: "right",
  "&:hover": {
    background: theme.palette.modules.sideMenuSecondaryDesktop,
  },

  "&:after": {
    content: '""',
    height: 1,
    width: "90%",
    background: `${theme.palette.common.white}20`,
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const ListItemParentName = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default MenuListItem;

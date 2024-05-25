import {
  Container,
  SwipeableDrawer,
  styled,
} from "@mui/material";

import Modal from "./Modal";
import useIsMobileView from "hooks/useIsMobileView";

export function BottomDrawer({
  open,
  onClose,
  title,
  children,
  dir,
  maxWidth,
}) {
  const isMobileView = useIsMobileView();

  return (
    <>
      {!isMobileView ? (
        <Modal
          maxWidth={maxWidth || "sm"}
          open={open}
          onClose={onClose}
          dir={dir}
          title={title}
        >
          {children}
        </Modal>
      ) : (
        <SwipeableDrawerStyle anchor="bottom" open={open} onClose={onClose}>
          <Container>
            {children}
          </Container>
        </SwipeableDrawerStyle>
      )}
    </>
  );
}

const SwipeableDrawerStyle = styled(SwipeableDrawer)(({ theme }) => ({
  "> .MuiPaper-root": {
    borderRadius: "20px 20px 0  0",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export default BottomDrawer;

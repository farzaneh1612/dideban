import { CloseIcon } from "@/public/Icon";
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Slide,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import useIsMobileView from "@/hooks/useIsMobileView";

// import { CloseSmall } from "assets/Icon";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Modal({
  onClose,
  open,
  title,
  hideContainer,
  maxWidth = "lg",
  children,
  dir = "ltr",
  closeIcon = true,
}) {
  const theme = useTheme();
  const isMobileView = useIsMobileView();

  return (
    <DialogStyle
      fullScreen={isMobileView}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth={maxWidth}
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {hideContainer ? (
        <>{title}</>
      ) : (
        <DialogTitleWrapper>
          <Typography
            variant={isMobileView ? "h6" : "h4"}
            color="text.main"
            textAlign="center"
            width="100%"
            fontWeight={500}
          >
            {title}
          </Typography>
          {closeIcon && (
            <IconButtonStyle onClick={onClose} color="text.main">
              <CloseIcon color={theme.palette.error.main} />
            </IconButtonStyle>
          )}
        </DialogTitleWrapper>
      )}
      {hideContainer ? (
        <>{children}</>
      ) : (
        <DialogContainer>{children}</DialogContainer>
      )}
    </DialogStyle>
  );
}

const IconButtonStyle = styled(IconButton)(() => ({
borderRadius:"5px",
  position: "absolute",
  left: 0,
  background: "#ff00003d",
  top: 0,
}));
const DialogStyle = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    width: "100%",
    borderRadius: "8px",
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      borderRadius: "0px",
    },
  },
}));

const DialogContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const DialogTitleWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 2, 0),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.common.white,
  position: "sticky",
  top: "0",
  zIndex: 1,
}));

export default Modal;

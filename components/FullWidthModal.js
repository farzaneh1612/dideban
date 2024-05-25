import {
  Container,
  Dialog,
  Grid,
  IconButton,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

// import { Left } from "assets/Icon";
import Modal from "./Modal";
import React from "react";
import useIsMobileView from "hooks/useIsMobileView";

function FullWidthModal({ open, onClose, title, children, dir, maxWidth }) {
  const isMobileView = useIsMobileView();
  const theme = useTheme();

  return (
    <>
      {!isMobileView ? (
        <Modal
          maxWidth={maxWidth || "sm"}
          onClose={onClose}
          open={open}
          title={title}
          dir={dir}
        >
          {children}
        </Modal>
      ) : (
        <FullWidthModalStyle fullScreen open={open} onClose={onClose}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <IconButton onClick={onClose}>
                  {/* <Left color={theme.palette.text.main} /> */}
                  <Typography variant="h6" color="text.main">
                    {title}
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
          </Container>

          <Container>{children}</Container>
        </FullWidthModalStyle>
      )}
    </>
  );
}

const FullWidthModalStyle = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    background: theme.palette.modules.navbar,
  },
}));

export default FullWidthModal;

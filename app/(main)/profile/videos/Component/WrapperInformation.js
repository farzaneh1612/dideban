import Modal from "@/components/Modal";
import { PlayerIcon, ScrinIcon } from "@/public/Icon";
import { BorderBottom } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography, styled, useTheme } from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";

function WrapperInformation({ data }) {
  console.log("data", data);
  const [openModaShowe, setOpenModaShowe] = useState(false);
  return (
    <>
     <Box>
      <Typography fontWeight={500} variant="h4" textAlign="center">
      ویدئوهای جلسه
      </Typography>
      <Typography fontWeight={400} variant="h6"  textAlign="center" pt={1}>
      0098461325 / ادمین: سید محمد حسین حسینی
      </Typography>
      <Box sx={{ borderTop: "1px solid #ccc" }} p={2} mt={3}>
        <Grid container mt={0} spacing={2}>
          <Grid item md={12} xs={12}>
            <BoxStyle display="flex" pb={2} justifyContent="space-between">
              <Typography
                fontWeight={400}
                variant="h5"
                color="text.secondary"
                pl={1}
              >
افراد حاضر در جلسه
              </Typography>
              <Typography>مشاهده ویدئو</Typography>
            </BoxStyle>
            <BoxStyle display="flex" py={2} justifyContent="space-between">
              <Typography
                fontWeight={400}
                variant="h5"
                color="text.secondary"
                pl={1}
              >
سید محمد حسین حسینی
              </Typography>
              <IconButton
         color="text"
         onClick={() => {
          setOpenModaShowe(true);
         //call function downloud file admin
         }}
       >
        <PlayerIcon/>
       </IconButton>
            </BoxStyle>
          </Grid>
          
       
        </Grid>
      </Box>
    </Box>
    {openModaShowe && (
      <Modal
        maxWidth={"md"}
        open={openModaShowe}
        onClose={() => setOpenModaShowe(false)}
      >
        <ReactPlayer url='https://www.aparat.com/v/mzra454' controls={true} width="99%" height="99%" playing={true} />
      </Modal>
    )}
    </>
   
  );
}

export default WrapperInformation;

const BoxStyle = styled(Box)(() => ({
 borderBottom:`1px solid #d9d9d9`
}));
import { Alert, Box, styled, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import OtpInput from "@/components/OtpInput";
import CountdownButton from "@/components/CountdownButton";
import { useState } from "react";
import { GetOtpVerify } from "../../../app/api/api";
import http, { getUid } from "../../../config/http";
import useNotify from "@/hooks/useNotify";

export default function OtpModal({ setShowModalOtp, setShowSignUp }) {
  const [otpData, setOtpData] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const uid = getUid();
  const notify = useNotify();

  const handleChange = (newValue) => {
    setOtpData(newValue);
  };

  const handleClick = async () => {
    setIsSubmitting(true);

    try {
      const { data } = await http.get(
        GetOtpVerify({ uid: uid, otpData: otpData })
      );
      setShowModalOtp(false);
      setShowSignUp(true);
      setIsSubmitting(false);
    } catch (e) {
      setIsSubmitting(false);
      notify(e?.message, "error");
    }
    setIsSubmitting(false);
  };

  // const handleGetCode = async () => {
  //   try {
  //     setOtpData("");
  //   } catch (e) {}
  // };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
        variant="subtitle2"
        textAlign="center"
        mb={3}
        color="text.main"
        fontWeight={500}
      >
        لطفا کد نمایش داده شده را وارد نمایید
      </Typography>
      <Box maxWidth={{ md: "60%", xs: "100%" }}>
        <OtpInput handleChange={handleChange} otp={otpData} />
      </Box>
      {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={3}
        mt={3}
      >
        <Typography
          dir="rtl"
          variant="h6"
          textAlign="center"
          color="text.alternate"
          pr={1}
        >
          <CountdownButton onClick={handleGetCode} time={120} />
        </Typography>
      </Box> */}
      <Box mt={2}>
        <LoadingButton
          loading={isSubmitting}
          variant="contained"
          color="text"
          type="submit"
          onClick={handleClick}
        >
          <Typography color="primary.main"> ادامه</Typography>
        </LoadingButton>
      </Box>
    </Box>
  );
}

const BoxIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "40px",
  paddingBottom: "24px",
  ".MuiBox-root ": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "15px",
    gap: "10px",
    width: "88px",
    height: "88px",
    background: "#F8F8F8",
    borderRadius: "50%",
  },
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.success.main}20`,
  cursor: "pointer",
  maxWidth: "172px",
  margin: "auto",
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

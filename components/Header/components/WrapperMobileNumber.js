import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { registerSchemaMobileNumber } from "../../../utils/validations/validationsForm";

import TextFieldGeneral from "@/components/TextFieldGeneral";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import useNotify from "@/hooks/useNotify";
import { yupResolver } from "@hookform/resolvers/yup";
import http from "@/config/http";
import { PostOtpSend } from "../../../app/api/api";

function WrapperMobileNumber({
  setShowModalOtp,
  setShowMobileNumber,
  setPhonNumber,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = useNotify();
  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchemaMobileNumber()),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const body = {
      phone_number: data?.phone_number,
    };

    try {
      const { data } = await http.post(PostOtpSend, body);

      localStorage.setItem("uid", data?.uid);
      notify(data?.otp, "success");
      setShowMobileNumber(false);

      setShowModalOtp(true);
    } catch (e) {
      notify(e?.message, "error");
    }
    setIsSubmitting(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mt={0} pt={3} px={{ md: 5, xs: 0 }}>
          <Grid item xs={12} textAlign="right">
            <TextFieldGeneral
              error={!!errors?.phone_number}
              helperText={errors?.phone_number?.message}
              placeholder="شماره موبایل خود را وارد کنید"
              value={watch("phone_number")}
              onChange={async (e) => {
                setValue("phone_number", e.target.value);
                await trigger("phone_number");
                setPhonNumber(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              pt={4}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <LoadingButton
                loading={isSubmitting}
                variant="contained"
                color="text"
                type="submit"
              >
                {!isSubmitting && (
                  <Typography color="primary.main"> ورود</Typography>
                )}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default WrapperMobileNumber;

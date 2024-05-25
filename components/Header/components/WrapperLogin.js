import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { registerSchemaLogin } from "../../../utils/validations/validationsForm";
import PasswordField from "@/components/PasswordField";
import TextFieldGeneral from "@/components/TextFieldGeneral";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import useNotify from "@/hooks/useNotify";
import { yupResolver } from "@hookform/resolvers/yup";
import http from "@/config/http";
import { serialize } from "cookie";

import { PostLogin } from "@/app/api/api";

function WrapperLogin({ setShowMobileNumber, setShowLogin }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const notify = useNotify();
  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchemaLogin()),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const body = {
      username: data.phone_number,
      password: data.password,
    };

    try {
      const { data } = await http.post(PostLogin, body);

      const token = data?.access;
      const refreshToken = data?.refresh;
      const uid = data?.uid;
      const isHost = data?.is_host;

      localStorage.setItem("accessToken", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("uid", uid);
      localStorage.setItem("isHost", isHost);

      notify("ورود با موفقیت انجام", "success");
      setShowLogin(false);
    } catch (e) {
      notify(e?.message, "error");
    }
    setIsSubmitting(false);
    setShowLogin(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mt={0} pt={3} px={{ md: 5, xs: 0 }}>
          <Grid item xs={12} textAlign="right">
            <TextFieldGeneral
              error={!!errors?.phone_number}
              helperText={errors?.phone_number?.message}
              placeholder="شماره تماس خود را وارد کنید"
              value={watch("phone_number")}
              onChange={async (e) => {
                setValue("phone_number", e.target.value);
                await trigger("phone_number");
              }}
            />
          </Grid>

          <Grid item xs={12} textAlign="right">
            <PasswordField
              activePassword={activePassword}
              error={!!errors?.password}
              helperText={errors?.password?.message}
              placeholder="رمز عبور خود را  وارد کنید"
              value={watch("password")}
              onChange={async (e) => {
                setValue("password", e.target.value);
                await trigger("password");
                setActivePassword(e.target.value ? true : false);
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
      <Box
        display="flex"
        pb={2}
        pt={5}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6" fontWeight={500} color="text.secondary">
          حساب کاربری ندارید?
        </Typography>
        <LoadingButton
          onClick={() => {
            setShowLogin(false);
            setShowMobileNumber(true);
          }}
          variant="tex"
          color="secondary"
          type="submit"
          sx={{ minWidth: "80px !important" }}
        >
          <Typography variant="h6" color="secondary.main">
            ثبت نام
          </Typography>
        </LoadingButton>
      </Box>
    </>
  );
}

export default WrapperLogin;

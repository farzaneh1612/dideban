import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  registerSchemaLogin,
  registerSchemaSignUp,
} from "../../../utils/validations/validationsForm";
import PasswordField from "@/components/PasswordField";
import TextFieldGeneral from "@/components/TextFieldGeneral";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import useNotify from "@/hooks/useNotify";
import { yupResolver } from "@hookform/resolvers/yup";
import http from "@/config/http";
import { PostRegister } from "@/app/api/api";
// import SelectInput from "@/components/SelectInput";

function WrapperSignUp({ setShowSignUp, phonNumber }) {
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
    resolver: yupResolver(registerSchemaSignUp()),
  });
  // const genderItem = [
  //   {
  //     value: "male",
  //     name: " مرد",
  //   },
  //   {
  //     value: "female",
  //     name: " زن",
  //   },
  // ];

  // const handleChangeGender = (e) => {
  //   const value = e?.target?.value;
  //   setValue("gender", value);
  // };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const userName = `${data?.first_name} ${data?.last_name}`;
    const body = {
      username: phonNumber,
      is_host: false,
      password: data?.password,
      password1: data?.confirmPassword,
      phone_number: phonNumber,
      profile: {
        first_name: data?.first_name,
        last_name: data?.last_name,
        gender: "male",
        national_code: data?.national_code,
      },
    };

    try {
      const data = await http.post(PostRegister, body);
      const token = data?.access;
      const refreshToken = data?.refresh;
      const uid = data?.uid;
      const isHost = data?.is_host;
      localStorage.setItem("useName", userName);

      // localStorage.setItem("refreshToken", refreshToken);
      // localStorage.setItem("uid", uid);
      // localStorage.setItem("isHost", isHost);
      notify("به پازار لند خوش آمدید", "success");
      setShowSignUp(false);
    } catch (e) {
      notify(e?.message, "error");
    }
    setIsSubmitting(false);
    setShowSignUp(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mt={0} pt={3} px={{ md: 5, xs: 0 }}>
          <Grid item xs={12} textAlign="right">
            <TextFieldGeneral
              placeholder="نام "
              value={watch("first_name")}
              onChange={async (e) => {
                setValue("first_name", e.target.value);
                await trigger("first_name");
              }}
              error={!!errors?.first_name}
              helperText={errors?.first_name?.message}
            />
          </Grid>
          <Grid item xs={12} textAlign="right">
            <TextFieldGeneral
              placeholder="نام خانوادگی "
              value={watch("last_name")}
              onChange={async (e) => {
                setValue("last_name", e.target.value);
                await trigger("last_name");
              }}
              error={!!errors?.last_name}
              helperText={errors?.last_name?.message}
            />
          </Grid>
          <Grid item xs={12} textAlign="right">
            <TextFieldGeneral
              placeholder="شماره ملی "
              value={watch("national_code")}
              onChange={async (e) => {
                setValue("national_code", e.target.value);

                await trigger("national_code");
              }}
              error={!!errors?.national_code}
              helperText={errors?.national_code?.message}
            />
          </Grid>
          {/* <Grid item xs={12} textAlign="right">
            <SelectInput
              minHeight={"45px"}
              value={watch("gender")}
              itemText="name"
              itemValue="value"
              items={genderItem}
              onChange={handleChangeGender}
              error={!!errors?.gender}
              helperText={errors?.gender?.message}
            />
          </Grid> */}

          <Grid item xs={12} textAlign="right">
            <PasswordField
              activePassword={activePassword}
              error={!!errors?.password}
              helperText={errors?.password?.message}
              placeholder="رمز عبور خود را وارد کنید"
              value={watch("password")}
              onChange={async (e) => {
                setValue("password", e.target.value);
                await trigger("password");
                setActivePassword(e.target.value ? true : false);
              }}
            />
          </Grid>

          <Grid item xs={12} textAlign="right">
            <PasswordField
              placeholder="رمز عبور خود را دوباره وارد کنید"
              error={!!errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
              value={watch("confirmPassword")}
              onChange={async (e) => {
                setValue("confirmPassword", e.target.value);
                await trigger("confirmPassword");
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
    </>
  );
}

export default WrapperSignUp;

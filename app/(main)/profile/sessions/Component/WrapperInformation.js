import { Box, Grid, Typography, useTheme } from "@mui/material";

function WrapperInformation({ data }) {
  console.log("data", data);
  return (
    <Box>
      <Typography fontWeight={500} variant="h4" textAlign="center">
        اطلاعات میهمان
      </Typography>
      <Box sx={{ borderTop: "1px solid #ccc" }} p={2} mt={3}>
        <Grid container mt={0} spacing={2}>
          <Grid item md={6} xs={12}>
            <Box display="flex" pb={2}>
              <Typography
                fontWeight={400}
                variant="h5"
                color="text.secondary"
                pl={1}
              >
                نام:
              </Typography>
              <Typography>{data?.guest?.profile?.first_name}</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display="flex" pb={2}>
              <Typography
                fontWeight={400}
                variant="h5"
                color="text.secondary"
                pl={1}
              >
                {" "}
                نام خانوادگی:
              </Typography>
              <Typography>{data?.guest?.profile?.last_name}</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display="flex" pb={2}>
              <Typography
                fontWeight={400}
                variant="h5"
                color="text.secondary"
                pl={1}
              >
                {" "}
                شماره تماس :
              </Typography>
              <Typography>{data?.guest?.phone_number}</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display="flex" pb={2}>
              <Typography
                fontWeight={400}
                variant="h5"
                color="text.secondary"
                pl={1}
              >
                {" "}
                کد ملی :
              </Typography>
              <Typography>{data?.guest?.profile?.national_code}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default WrapperInformation;

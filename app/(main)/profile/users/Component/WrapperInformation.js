import { Box, Grid, Typography, useTheme } from "@mui/material";

function WrapperInformation({ data }) {
  console.log("data", data);
  return (
    <Box>
      <Typography fontWeight={500} variant="h4" textAlign="center">
        اطلاعات کاربر
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
              <Typography>{data?.user?.first_name}</Typography>
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
              <Typography>{data?.user?.last_name}</Typography>
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
               نام کاربر:
              </Typography>
              <Typography>{data?.user?.username}</Typography>
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
              <Typography>{data?.user?.national_code}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default WrapperInformation;

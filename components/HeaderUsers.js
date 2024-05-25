"use client";
import { Container, Grid, Typography, Box, styled } from "@mui/material";
import SearchInput from "@/components/SearchInput";
import { LoadingButton } from "@mui/lab";

function HeaderUsers({
  onChange,
  searchPhoneNumber,
  setSearchPhoneNumber,
  searchFirstName,
  setSearchFirstName,
  searchLastName,
  setSearchLastName,
  searchCodeNationality,
  setSearchCodeNationality,
  setISSearch,
}) {
  return (
    <Grid container mt={0} spacing={2}>
      <Grid item xs={12} lg={2} md={6}>
        <SearchInput
          placeHolder="  نام "
          setData={onChange}
          searchQuery={searchFirstName}
          setSearchQuery={setSearchFirstName}
        />
      </Grid>
      <Grid item xs={12} lg={2} md={6}>
        <SearchInput
          placeHolder="  نام خانوادگی "
          setData={onChange}
          searchQuery={searchLastName}
          setSearchQuery={setSearchLastName}
        />
      </Grid>

      <Grid item xs={12} lg={3} md={6}>
        <SearchInput
          placeHolder=" شماره تماس"
          setData={onChange}
          searchQuery={searchPhoneNumber}
          setSearchQuery={setSearchPhoneNumber}
        />
      </Grid>
      <Grid item xs={12} lg={3} md={6}>
        <SearchInput
          placeHolder=" کد ملی"
          setData={onChange}
          searchQuery={searchCodeNationality}
          setSearchQuery={setSearchCodeNationality}
        />
      </Grid>
      <Grid item xs={12} lg={2} md={6}>
        <LoadingButton
          onClick={() => setISSearch(true)}
          variant="contained"
          color="button"
          type="submit"
          sx={{
            background:
              "linear-gradient(270deg, #7367F0 0%, rgba(115, 103, 240, 0.70) 100%)",
            minWidth: "auto",
            width: "100%",
          }}
        >
          <Typography color="common.white" variant="h6">
            جستجو
          </Typography>
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

export default HeaderUsers;

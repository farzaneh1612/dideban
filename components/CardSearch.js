"use client";
import { useEffect, useMemo, useState } from "react";
import DatePicker from "react-multi-date-picker";
import { Box, Typography, styled, Grid, IconButton } from "@mui/material";
import SearchInput from "@/components/SearchInput";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { LoadingButton } from "@mui/lab";
import transition from "react-element-popper/animations/transition";
import { formatDate } from "@/utils/helpers/formatDate";
import { formatDareShams } from "@/utils/helpers/formatDateJalali";
import { useDataSearch } from "@/hooks/useDataSearch";
import { useDataReservation } from "@/hooks/useDataReservation";
import { useRouter } from "next/navigation";
import { ROUTES_PATH } from "@/constants/route";
import { GetAccommodationCitySearch } from "../app/api/api";
import useNotify from "@/hooks/useNotify";
import http from "../config/http";
import useIsMobileView from "@/hooks/useIsMobileView";
import { SearchIcon } from "@/public/Icon";
import { useTheme } from "@emotion/react";

function CardSearch() {
  const router = useRouter();
  const notify = useNotify();
  const theme = useTheme();
  const isMobileView = useIsMobileView("md");

  const [city, setCity] = useState([]);
  const [search, setSearch] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [loading, setLoading] = useState(false);
  // const { addDataSearch } = useDataSearch();

  const { addDataReservation } = useDataReservation();
  const [searchQuery, setSearchQuery] = useState("");

  function handleChangeStartDate(value) {
    setStartDate(value);
  }
  function handleChangeEndDate(value) {
    setEndDate(value);
  }

  const getAccommodationCitySearch = async (text) => {
    try {
      const { data } = await http.get(GetAccommodationCitySearch(text));

      setCity([...data?.city_results]);
    } catch (e) {
      notify(e?.response?.data?.message, "error");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getAccommodationCitySearch(search);
    }, 5000);
  }, [search]);

  const chooseIdCity = useMemo(
    () => city?.find((item) => item.name === searchQuery),
    [city, searchQuery]
  );

  function handelSearch() {
    setLoading(true);

    if (startDate && endDate && city) {
      setLoading(true);
      addDataSearch((prevDataSearch) => ({
        ...prevDataSearch,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        city: chooseIdCity?.id,
        cityName: chooseIdCity?.name,
      }));
      addDataReservation((prevDataSearch) => ({
        ...prevDataSearch,
        startDate: formatDareShams(startDate),
        endDate: formatDareShams(endDate),
      }));
      setSearch("");
      setEndDate("");
      setStartDate("");
      setSearchQuery("");
      router.push(ROUTES_PATH.residence);
    } else {
      notify("لطفا مقادیر سرچ را وارد کنید", "error");
      setLoading(false);
    }
    setLoading(false);
  }

  function handelSearchCity() {
    setLoading(true);
    if (city) {
      setLoading(true);
      addDataSearch(() => ({
        city: chooseIdCity?.id,
        cityName: chooseIdCity?.name,
      }));
      setSearchQuery("");

      router.push(ROUTES_PATH.residence);
    } else {
      notify("لطفا شهر مورد نظر خود را وارد کنید", "error");
      setLoading(false);
    }
    setLoading(false);
  }

  return (
    <>
      {isMobileView ? (
        <WrapperBox>
          <Grid container mt={0}>
            <Grid item xs={12}>
              <SearchInput
                setData={setSearch}
                allData={city}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                showIcon={false}
              />
              <IconButton
                sx={{
                  color: "text.secondary",
                  position: "absolute",
                  left: 0,
                  bottom: "15px",
                }}
                aria-label="history"
                size="small"
                onClick={handelSearchCity}
                loading={loading}
              >
                <Typography
                  component="span"
                  ml={1}
                  display="flex"
                  alignItems="center"
                >
                  <SearchIcon color={theme.palette.text.secondary} />
                </Typography>
              </IconButton>
            </Grid>
          </Grid>
        </WrapperBox>
      ) : (
        <WrapperBox>
          <Grid container columnSpacing={3} mt={0}>
            <Grid item xs={4}>
              <SearchInput
                setData={setSearch}
                allData={city}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                showIcon={true}
              />
            </Grid>
            <Grid item xs={3}>
              <DatePicker
                // render={<InputIcon />}
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                value={startDate}
                onChange={handleChangeStartDate}
                calendarPosition="bottom-left"
                placeholder="تاریخ ورود"
              />
            </Grid>

            <Grid item xs={3}>
              <DatePicker
                // render={<InputIcon />}
                animations={[transition()]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-left"
                value={endDate}
                onChange={handleChangeEndDate}
                placeholder="تاریخ خروج"
              />
            </Grid>

            <Grid item xs={2}>
              <LoadingButton
                loading={loading}
                onClick={handelSearch}
                variant="contained"
                color="button"
                type="submit"
                sx={{
                  background:
                    "linear-gradient(270deg, #02A9B9 0%, #07FFF0 100%)",
                  minWidth: "auto",
                  width: "100%",
                }}
              >
                {!loading && (
                  <Typography color="text.main" variant="h6">
                    جستجو
                  </Typography>
                )}
              </LoadingButton>
            </Grid>
          </Grid>
        </WrapperBox>
      )}
    </>
  );
}

export default CardSearch;

export const WrapperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  background: theme.palette.common.white,
  boxShadow: "0px 8px 20.6px 0px rgba(0, 0, 0, 0.25)",
  padding: theme.spacing(4, 2),
  position: "relative",
  borderRadius: "20px",
  zIndex: 11,
  marginTop: theme.spacing(2),
  "&::after ": {
    content: "' '",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    borderRadius: "20px",
    border: "1px solid transparent",
    background: `${theme.palette.modules.borderBox} border-box`,
    WebkitMask:
      "linear-gradient(#fff 0 0) padding-box, \n    linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "destination-out",
    maskComposite: "exclude",
    zIndex: -1,
  },
  ".rmdp-container": {
    width: "100%",
  },
  ".rmdp-input": {
    color: theme.palette.text.secondary,
    border: "none",
    background: theme.palette.text.grayLight,
    borderRadius: "6px",
    minHeight: "39px",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));

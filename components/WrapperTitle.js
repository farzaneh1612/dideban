import {
  Container,
  Grid,
  Typography,
  useTheme,
  styled,
  Box,
} from "@mui/material";
import LocaleLink from "./LocaleLink";
import { AngleLeft, Filter, List, Slider } from "@/public/Icon";
import useIsMobileView from "@/hooks/useIsMobileView";

function WrapperTitle({
  title,
  description,
  path,
  textAll,
  filter,
  setShowList,
  show,
  showList,
  setShowFilter,
}) {
  const theme = useTheme();
  const isMobileView = useIsMobileView();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pt={2}
    >
      <Box>
        <Box display="flex" alignItems="center">
          <Typography
            variant={isMobileView ? "h5" : "h2"}
            color="text.secondary"
            fontWeight={900}
            lineHeight={2}
          >
            {title}
          </Typography>
          {filter && (
            <BoxFiler onClick={() => setShowFilter(true)}>
              <Filter />
              <Typography
                variant={isMobileView ? "subtitle1" : "h6"}
                color="info.main"
                pr={1}
              >
                فیلترها
              </Typography>
            </BoxFiler>
          )}
        </Box>
        <Typography
          variant={isMobileView ? "subtitle1" : "h6"}
          color="text.secondary"
          fontWeight={600}
        >
          {description}{" "}
        </Typography>
      </Box>
      {textAll && (
        <Box
          display="flex"
          component={LocaleLink}
          href={path}
          alignItems="center"
        >
          <Typography
            variant={isMobileView ? "subtitle1" : "h5"}
            color="text.secondary"
            fontWeight={600}
          >
            {textAll}
          </Typography>
          <AngleLeft />
        </Box>
      )}
      {show && (
        <Box display="flex" alignItems="center">
          <BoxList onClick={() => setShowList(true)} ml={1}>
            <List
              color={
                showList
                  ? theme.palette.text.secondary
                  : theme.palette.text.border
              }
            />
          </BoxList>
          <BoxList onClick={() => setShowList(false)}>
            <Slider
              color={
                !showList
                  ? theme.palette.text.secondary
                  : theme.palette.text.border
              }
            />
          </BoxList>
        </Box>
      )}
    </Box>
  );
}

export default WrapperTitle;
const BoxFiler = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  border: `1px solid ${theme.palette.text.border}`,
  borderRadius: "8px",
  padding: theme.spacing(1),
  height: "fit-content",
  marginRight: theme.spacing(2),
  cursor: "pointer",
}));
const BoxList = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  background: theme.palette.info.light,
  padding: theme.spacing(1),
  display: "flex",
  width: "40px",
  height: "40px",
  cursor: "pointer",
}));

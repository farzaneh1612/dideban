import moment from "jalali-moment";

export function formatDateMiladi(value) {
  const gregorianDate = moment
    .from(value, "fa", "YYYY/MM/DD")
    .locale("en")
    .format("YYYY-MM-DD");
  return gregorianDate;
}

import jalaliMoment from "jalali-moment";
export function getDateToDay() {
  var jalaliDate = jalaliMoment().format("jYYYY/jMM/jDD");
  return jalaliDate;
}

import moment from "moment-jalali";

export function formatDateJalali(value) {
  const gregorianMoment = moment(value);
  const jalaliMoment1 = gregorianMoment?.format("jYYYY/jMM/jDD");
  return jalaliMoment1;
}
export function formatDareShams(value) {
  const endDateMoment = moment({
    year: value?.year,
    month: value?.month?.monthIndex || value?.month?.number - 1, // assuming month is an object with a monthIndex property
    day: value?.day,
    hour: value?.hour,
    minute: value?.minute,
    second: value?.second,
    millisecond: value?.millisecond,
  });

  // Format the moment object as "YYYY/MM/DD"
  const formattedEndDate = endDateMoment.format("YYYY/MM/DD");
  return formattedEndDate;
}

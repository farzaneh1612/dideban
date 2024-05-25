import moment from "moment-jalali";
export function formatDateJalali(value){
const date=moment.unix(value).format(" HH:mm:ss   | jYYYY/jM/jD")

return date;
}
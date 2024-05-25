import { formatDateJalali } from "./formatDateJalali";

export function formatTimeDate(originalTimestamp) {
  const date = new Date(originalTimestamp);

  // Get the year, month, and day
  const year = date.getUTCFullYear();
  // Month is zero-based in JavaScript, so add 1 to get the correct month
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  // Get the hours, minutes, and seconds
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const dateJalay = formatDateJalali(`${year}/${month}/${day}`);
  // Create the formatted date string
  const formattedDate = `${hours}:${minutes}:${seconds} | ${dateJalay} `;
  return formattedDate;
}

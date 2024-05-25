export function getDaysBetweenDates(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);

  var daysBetween = [];

  while (start <= end) {
    daysBetween.push(start.getDate());
    start.setDate(start.getDate() + 1);
  }

  return daysBetween;
}
export function getMonthBetweenDates(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  // Calculate the difference in months
  const diffMonths =
    (endDate?.getFullYear() - startDate?.getFullYear()) * 12 +
    (endDate?.getMonth() - startDate?.getMonth());

  // Create an array to store the months
  const months = [];

  // Generate the list of months
  for (let i = 0; i <= diffMonths; i++) {
    const currentMonth = startDate?.getMonth() + i;
    months?.push(currentMonth + 1); // Adding 1 to convert from 0-indexed to 1-indexed months
  }

  return months;
}

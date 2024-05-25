export function numberDays({ startDateValue, endDateValue }) {
  function parsePersianDate(persianDate) {
    if (typeof persianDate !== "string" || !persianDate.includes("/")) {
      // Handle the case where persianDate is not a string or does not contain '/'
      return null; // or throw an error, depending on your requirements
    }

    const [year, month, day] = persianDate.split("/").map(Number);
    return new Date(year + 621, month - 1, day);
  }

  function calculateDaysDifference(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // میلی‌ثانیه در یک روز
    const startTimestamp = startDate?.getTime();
    const endTimestamp = endDate?.getTime();

    const daysDifference = Math.round(
      Math.abs((endTimestamp - startTimestamp) / oneDay)
    );
    return daysDifference;
  }

  // تاریخ‌های شما
  const startDate = parsePersianDate(startDateValue);
  const endDate = parsePersianDate(endDateValue);

  if (startDate === null || endDate === null) {
    // Handle the case where parsing fails
    return null; // or throw an error, depending on your requirements
  }

  // محاسبه تعداد روز
  const daysDifference = calculateDaysDifference(startDate, endDate);
  return daysDifference;
}

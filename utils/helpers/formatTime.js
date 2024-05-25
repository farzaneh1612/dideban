export function formatTime(time) {
  const originalDate = new Date(time);
  const formattedTime1 = originalDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedTime = formattedTime1.split(" ")[0];
  return formattedTime;
}

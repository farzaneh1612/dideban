import React from "react";

function formatTimeDefaultValues({ time, date }) {
  const combinedDateTimeString = `${date}T${time}:00Z`;

  const formattedDate = new Date(combinedDateTimeString);

  const formattedDateString = formattedDate.toUTCString();
  return formattedDateString;
}

export default formatTimeDefaultValues;

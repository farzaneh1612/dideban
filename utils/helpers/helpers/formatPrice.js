export const formatPrice = (value) => {
  if (value) {
    const parts = value.toString().split(".");
    const firstPart = parts[0];
    const secondPart = parts[1];
    const formattedFirstPart = firstPart
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (secondPart) return `${formattedFirstPart}.${secondPart}`;
    else return formattedFirstPart;
  }
};

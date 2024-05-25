import { formatPrice } from "@/utils/helpers/formatPrice";
import { Typography } from "@mui/material";

export function Price({ data }) {
  return (
    <>
      <Typography variant="h6" fontWeight={400}>
        {formatPrice(data?.final_price)} تومان
      </Typography>
    </>
  );
}

export default Price;

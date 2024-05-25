import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function WrapperLoading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Image
        src="/image/general/loading.gif"
        width={140}
        height={140}
        alt=""
        unoptimized
      />
    </Box>
  );
}

export default WrapperLoading;

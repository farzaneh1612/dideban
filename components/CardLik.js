import { Box, styled } from "@mui/material";
import { Like, LikeFull } from "@/public/Icon";
import { httpToken } from "@/config/http";
import { PostInteraction, PostTokenRefresh } from "@/app/api/api";
import useNotify from "@/hooks/useNotify";
import { useTheme } from "@emotion/react";
import { useState } from "react";

function CardLik({ accommodationDetail, like, setLike }) {
  const notify = useNotify();
  const theme = useTheme();

  const HandelChangeLik = async () => {
    try {
      await httpToken.post(PostInteraction(accommodationDetail?.id), {
        is_favored: !like,
      });
      setLike(!like);
    } catch (e) {
      notify("امکان لایک کردن برای شما وجود ندارد", "error");
    }
  };

  return (
    <WrapperLike onClick={HandelChangeLik}>
      {accommodationDetail?.is_favored || like ? (
        <LikeFull color={theme.palette.error.main} />
      ) : (
        <Like color={theme.palette.error.main} />
      )}
    </WrapperLike>
  );
}

export const WrapperLike = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  flexShrink: "0",
  borderRadius: "50%",
  background: theme.palette.text.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));
export default CardLik;

import { TypographyLink } from "@/app/(main)/residence/_component/general.style";
import { LoadingButton } from "@mui/lab";
import { Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

let timer;

function CountdownButton({
  time,
  onClick,
  text,
  onComplete,
  onConfirm,
  ...props
}) {
  const [timeLeft, setTimeLeft] = useState(null);

  const startCountDown = (tempTime) => {
    clearInterval(timer);

    setTimeLeft(tempTime || time);
    let tempTimeLeft = tempTime || time;

    timer = setInterval(() => {
      tempTimeLeft = tempTimeLeft - 1;
      setTimeLeft((v) => v - 1);

      if (tempTimeLeft === 0) {
        setTimeLeft(null);
        clearInterval(timer);
        setTimeLeft(0);
      }
    }, 1000);
  };

  const handleStartCountDown = async () => {
    if (!timeLeft) {
      onClick(startCountDown(120));
    } else {
      if (onConfirm) onConfirm();
    }
  };

  useEffect(() => {
    startCountDown();
  }, []);

  return (
    <ButtonStyle
      variant="text"
      color="secondary"
      onClick={handleStartCountDown}
    >
      {timeLeft !== 0 ? (
        <>
          {timeLeft}
          <Typography
            dir="rtl"
            variant="h6"
            textAlign="center"
            color="text.alternate"
            pr={1}
          >
            ثانیه تا درخواست مجدد ارسال کد
          </Typography>
        </>
      ) : (
        <TypographyLink
          variant="h6"
          textAlign="center"
          color="text.gray"
          pr={1}
          fontWeight={400}
        >
          ارسال مجدد کد
        </TypographyLink>
      )}
    </ButtonStyle>
  );
}
const ButtonStyle = styled(LoadingButton)(() => ({
  fontSize: "13px",
  minWidth: "auto",
}));
export default CountdownButton;

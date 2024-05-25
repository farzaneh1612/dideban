import { MuiOtpInput } from "mui-one-time-password-input";

export default function OtpInput({ handleChange, otp }) {
  return (
    <MuiOtpInput
      length={4}
      value={otp}
      onChange={handleChange}
      textAlign="center"
      dir="ltr"
    />
  );
}

import { cookies } from "next/headers";

export const setCookies = async () => {
  const Cookie = await cookies().toString();

  return Cookie;
};

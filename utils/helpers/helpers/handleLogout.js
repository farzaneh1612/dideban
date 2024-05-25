"use client";
import { ROUTES_PATH } from "@/constants/route";
import http, { getRefreshToken } from "@/config/http";
import { PostLogout } from "@/app/api/api";
import { useRouter } from "next/navigation";

export async function handleLogout() {
  try {
    const router = useRouter();
    const refreshToken = getRefreshToken();

    await http.post(PostLogout, { refresh: refreshToken });

    notify("خروج از حساب کاربری", "success");

    const localStorageKeys = ["accessToken", "refreshToken", "uid", "isHost"];
    localStorageKeys.forEach((key) => localStorage.removeItem(key));

    router.push(ROUTES_PATH?.home);
  } catch (error) {
    console.error("Logout failed:", error);
    // Handle error, e.g., show an error notification to the user
  }
}

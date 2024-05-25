import { ROUTES_PATH } from "@/constants/route";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect(ROUTES_PATH.home);
}

"use client";

import { DEFAULT_PAGE_LENGTH } from "@/constants/general";
import { useSearchParams } from "next/navigation";

export default function usePaginate(params) {
  const searchParams = useSearchParams();
  const pageSearch = (+searchParams.get("page") || 1) - 1;

  const count = +searchParams.get("count") || DEFAULT_PAGE_LENGTH;

  const page = params?.showPageNumber ? pageSearch + 1 : pageSearch * count;

  return { page, count };
}

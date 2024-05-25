import { ROUTES_PATH_HOST_USER } from "./route";

export const SIDE_MENU_ITEMS_ACCOMMODATIONS = [
  {
    key: "request-hosting",
    name: " ثبت اقامتگاه",
    path: ROUTES_PATH_HOST_USER.requestHosting,
  },
  // {
  //   key: "list-accommodations",
  //   name: "فهرست اقامتگاه های من",
  //   children: [
  //     {
  //       key: "forest-accommodations",
  //       name: "اقامتگاه جنگلی نور",
  //       path: ROUTES_PATH_HOST_USER.forestAccommodations,
  //     },
  //     {
  //       key: "beach-cottage-accommodations",
  //       name: "کلبه ساحلی دریا ",
  //       path: ROUTES_PATH_HOST_USER.beachCottageAccommodations,
  //     },
  //   ],
  // },
  {
    key: "all-accommodations",
    name: " مشاهده همه اقامتگاه ها",
    path: ROUTES_PATH_HOST_USER.allAccommodations,
  },
];
export const SIDE_MENU_ITEMS = [
  {
    key: "reservations",
    name: "رزروها",
    path: ROUTES_PATH_HOST_USER.reservations,
  },
  {
    key: "transactions",
    name: "تراکنش ها",

    path: ROUTES_PATH_HOST_USER.transactions,
  },
  {
    key: "notifications",
    name: "اعلانات",

    path: ROUTES_PATH_HOST_USER.notifications,
  },
  {
    key: "personal",
    name: "اطلاعات کاربری ",

    path: ROUTES_PATH_HOST_USER.personal,
  },
];

export const SHEBA_MASK = [
  "I",
  "R",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];

export const CREDIT_CARD_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

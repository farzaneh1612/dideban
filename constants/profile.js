import { ROUTES_PATH_PROFILE, ROUTES_PATH_SESSION_ROOMS } from "./route";
import { FileDollar, FileLike, IdCart, Truck, Wallet } from "../public/Icon";

export const SIDE_MENU_ITEMS = [
  {
    key: "travels",
    name: "جلسات",
    // icon: <Truck />,
    iconActive: <Truck color={"#fff"} />,

    path: ROUTES_PATH_SESSION_ROOMS.sessions,
  },
  {
    key: "accountInformation",
    name: "کاربران",
    // icon: <IdCart />,
    iconActive: <IdCart color={"#fff"} />,

    path: ROUTES_PATH_SESSION_ROOMS.users,
  },
  {
    key: "transactions",
    name: "ویدیوها",
    // icon: <FileDollar />,
    iconActive: <FileDollar color={"#fff"} />,

    path: ROUTES_PATH_SESSION_ROOMS.videos,
  },
  // {
  //   key: "wallet",
  //   name: "کیف پول ",
  //   icon: <Wallet />,
  //   iconActive: <Wallet color={"#fff"} />,

  //   path: ROUTES_PATH_PROFILE.wallet,
  // },
  // {
  //   key: "favoritesList",
  //   name: " فهرست برگزیده ها",
  //   icon: <FileLike />,
  //   iconActive: <FileLike color={"#fff"} />,
  //   path: ROUTES_PATH_PROFILE.favoritesList,
  // },
];

export const INVENTORY = [
  {
    id: 0,
    price: 50000,
  },
  {
    id: 1,
    price: 100000,
  },
  {
    id: 2,
    price: 200000,
  },
  {
    id: 3,
    price: 500000,
  },
  {
    id: 4,
    price: 1000000,
  },
];

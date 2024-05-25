export const ROUTES_PATH = {
  home: "/home",
  residence: "/residence",
  singleResidence: (id) => `/residence/${id || ":id"}`,
  travelConfirmation: (id) => `/travel-confirmation/${id || ":id"}`,
  singleCategory: (id) => `/category/${id || ":id"}`,
  singleBlog: (id) => `/blog/${id || ":id"}`,
};

export const ROUTES_PATH_SESSION_ROOMS = {
  // personal: "/profile/personal-info",
  sessions: "/profile/sessions",
  users: "/profile/users",
  videos: "/profile/videos",
};

export const ROUTES_PATH_HOST_USER = {
  personal: "/host-user/personal-info",
  reservations: "/host-user/reservations",
  transactions: "/host-user/transactions",
  notifications: "/host-user/notifications",
  requestHosting: "/host-user/request-hosting",
  editRequestHosting: (id) => `/host-user/request-hosting/${id || ":id"}`,
  forestAccommodations: "/host-user/forest-accommodations",
  beachCottageAccommodations: "/host-user/beach-cottage-accommodations",
  allAccommodations: "/host-user/all-accommodations",
};

export const PLAYLIST_TABS = {
  SONGS: { key: "songs", index: 0, name: "Songs" },
  VIDEO: { key: "video", index: 1, name: "Video" },
  PLAYLIST: { key: "playlist", index: 2, name: "PLayList" },
  MOOD: { key: "mood", index: 3, name: "Mood" },
  CATEGORY: { key: "category", index: 4, name: "Category" },
  Event: { key: "list-event", index: 4, name: "Event" },
};

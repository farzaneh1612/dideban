// export const GetAccommodationCitySearch = (text) =>
//   `accommodation/search-text/search/?text=${text}`;

// export const GetAccommodationSearchDate = ({ startDate, endDate, city }) =>
//   `accommodation/accommodation/?rent_start_date__gte=${startDate}&rent_end_date__lte=${endDate}&city=${city}`;

// export function GetAccommodationSearchFilter({
//   city,
//   startDate,
//   endDate,
//   locationTypeId,
//   rooms,
//   beds,
//   priceGte,
//   priceLte,
//   capacity,
//   neighbourhood,
//   facilities,
//   permissions,
//   isSpecial,
//   category,
// }) {
//   let url = "accommodation/accommodation/?";

//   if (startDate) {
//     url += `rent_start_date__gte=${startDate}&`;
//   }

//   if (endDate) {
//     url += `rent_end_date__lte=${endDate}&`;
//   }

//   if (city) {
//     url += `city=${city}&`;
//   }

//   if (locationTypeId) {
//     url += `location_type=${locationTypeId}&`;
//   }
//   if (category) {
//     url += `category=${category}&`;
//   }

//   if (rooms) {
//     url += `rooms=${rooms}&`;
//   }

//   if (beds) {
//     url += `beds=${beds}&`;
//   }

//   if (priceGte) {
//     url += `price__gte=${priceGte}&`;
//   }

//   if (priceLte) {
//     url += `price__lte=${priceLte}&`;
//   }

//   if (capacity) {
//     url += `capacity__gte=${capacity}&`;
//   }

//   if (neighbourhood) {
//     url += `neighbourhood__id=${neighbourhood}&`;
//   }

//   if (facilities) {
//     url += `facilities_ids=${facilities}&`;
//   }

//   if (permissions) {
//     url += `permissions_ids=${permissions}&`;
//   }
//   if (isSpecial) {
//     url += `is_special=${isSpecial}&`;
//   }

//   // Remove trailing '&' if present
//   if (url.endsWith("&")) {
//     url = url.slice(0, -1);
//   }

//   return url;
// }

export const GetSessions = `/api/cmr/rm/rooms`;

export const GetSessionsContent= `/api/cmr/rm/room/result/count`;

export const UserCount = `/api/cmr/rm/room/going`;

export const GetUserList = `/api/cmr/rm/room/user/all`;

export const AddBanUser = `/api/cmr/rm/room/ban/add`;

export const RemoveBanUser = `/api/cmr/rm/room/ban/remove`;

export const GetSessionsDetails = (RoomId) =>
  `/api/cmr/rm/room/r/${RoomId}`;

export const SearchSessionByCode = (RoomId) =>
  `api/cmr/rm/room/r/${RoomId}`;

export const GetAllVideos = `api/cmf/fl/files`;

export const DetailsOfFile = (RoomId) => `/api/cmf/fl/file/r/${RoomId}/`;

export const DownloadFile = (RoomId) => `/api/fl/file/download/${RoomId}/`;

// export const GetProfile = `account/profile/`;

// export const PostRegister = `account/register/`;

// export const PostLogin = `/account/token/login/`;

// export const PostLogout = `/account/token/logout/`;

// export const PostReservation = `/reservation/`;

// export const GetReservationList = `/reservation/`;

// export const GetReservationListPageNation = (id) => `/reservation/?page=${id}`;

// export const GetAllAccommodation = `accommodation/accommodation/`;

// export const GetMyAccommodations = `accommodation/accommodation/my-accommodations/`;

// export const GetMyAccommodationsPageNation = (id) =>
//   `accommodation/accommodation/my-accommodations/?page=${id}`;

// export const PostAccommodation = `accommodation/accommodation/`;

// export const UpdateAccommodation = (id) => `accommodation/accommodation/${id}/`;

// export const PostTokenRefresh = `/account/token/refresh/`;

// export const PostTokenVerify = `/account/token/verify/`;

// export const GetFavorites = `/accommodation/accommodation/favorites/`;

// export const GetFavoritesPageNation = (id) =>
//   `/accommodation/accommodation/favorites/?page=${id}`;

// export const GetUploadFile = `account/upload/`;

// export const availableDays = ({ id, startDate, endDate }) =>
//   `accommodation/accommodation/${id}/available-days/?check_in_date=${startDate}&check_out_date=${endDate}`;

// export const GetTransaction = `payment/transaction/`;

// export const GetTransactionPageNation = (id) =>
//   `payment/transaction/?page=${id}`;

// export const GetTicketsList = `ticketing/tickets-list/`;

// export const PostTicket = `ticketing/ticket/`;

// export const GetTicketsDetail = (id) => `ticketing/ticket/${id}/`;

// export const GetWalletDetail = `payment/wallet/`;

// export const PostOtpSend = `account/otp/send/`;

// export const GetOtpVerify = ({ uid, otpData }) =>
//   `account/otp/verify/${uid}/${otpData}/`;

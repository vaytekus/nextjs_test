export const LANGUAGES = [
  {
    t: "Nederlands",
    v: "nl",
  },
  {
    t: "English",
    v: "en",
  },
  {
    t: "Français",
    v: "fr",
  },
  {
    t: "Deutsch",
    v: "de",
  },
];
export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const DAYS_IN_MS = 1000 * 60 * 60 * 24;
export const HOURS_IN_MS = 1000 * 60 * 60;
export const MIN_IN_MS = 1000 * 60;
export const SEC_IN_MS = 1000;
export const DAYS_IN_S = 24 * 60 * 60;
export const MIN_IN_S = 60;

export const LIGHT_ORANGE_COLOR = "#FFC2AA";
export const DARK_ORANGE_COLOR = "#FF682A";
export const LIGHT_GREEN_COLOR = "#A3D8D6";
export const DARK_GREEN_COLOR = "#21BFB4";

export const TICKET_SELECT_OPTIONS = [
  {
    t: "Kies hier uw aantal tickets",
    v: "Kies hier uw aantal tickets",
  },
  {
    t: "1",
    v: "1",
  },
  {
    t: "2",
    v: "2",
  },
  {
    t: "3",
    v: "3",
  },
  {
    t: "4",
    v: "4",
  },
  {
    t: "5",
    v: "5",
  },
  {
    t: "6",
    v: "6",
  },
  {
    t: "7",
    v: "7",
  },
  {
    t: "8",
    v: "8",
  },
  {
    t: "9",
    v: "9",
  },
  {
    t: "10",
    v: "10",
  },
  {
    t: "11",
    v: "11",
  },
];

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PHONE_REGEX = /^(?:(?:\+|00)[1-9][0-9]{1,2})?[0-9]{9,10}$/;
export const COUPON_CODE_REGEX =
  /^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}$/;
export const POSTCODE_REGEX = /^[0-9]{4}\s?[A-Za-z]{2}$/;
export const CLOUDINARY_IMAGE_MODES = {
  card: "1",
  hero: "2",
  reviewSM: "3",
  reviewXL: "4",
  carousel: "5",
};

export const CATEGORY_ENUM = {
  CONCERT: "concerten",
  CABARET: "cabaret-theater",
  MUSICAL: "musicals",
  EVENT: "evenementen",
};

export const SOCKET_EVENT_SUBSCRIPTIONS = [
  "login",
  "qr code expired",
  "refresh qr code",
  "authenticated",
  "new login code",
  "error",
  "error error generating code",
  "error connecting",
  "disconnected",
  "verifying code",
  "code verified",
  "user approved login",
  "user account changes",
  "login code expired",
];

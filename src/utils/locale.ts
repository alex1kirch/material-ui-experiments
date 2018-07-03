export type Locales = "en" | "ar";
export type Directions = "rtl" | "ltr";

export const getDirectionByLocale = (locale: string): Directions => (locale === "ar" ? "rtl" : "ltr");
export const getOtherLocale = (locale: string): Locales => (locale === "ar" ? "en" : "ar");

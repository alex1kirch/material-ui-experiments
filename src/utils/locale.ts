export enum Locales {
    en = "en",
    ar = "ar",
}

export enum Directions {
    rtl = "rtl",
    ltr = "ltr",
}

export const getDirectionByLocale = (locale: string): Directions =>
    locale === Locales.ar ? Directions.rtl : Directions.ltr;

export const getOtherLocale = (locale: string): string =>
    locale === Locales.ar ? Locales.en : Locales.ar;

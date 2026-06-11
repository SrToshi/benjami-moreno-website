export const locales = ["en", "de", "es", "cat"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const siteContent = {
  en: {
    name: "Benjamin Moreno Torres",
    title: "Data Science & AI Lead",
    tagline:
      "Mathematician by training. Architect by choice. Data scientist by evolution.",
    location: "Berlin, Germany",
    email: "benji.moreno@gmail.com",
    linkedin: "https://linkedin.com/in/benjami-moreno-torres",
    cvPath: "/cv-benjami-moreno.pdf",
  },
} as const;

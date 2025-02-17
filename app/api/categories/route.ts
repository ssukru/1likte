import { NextResponse } from "next/server";
import { getTranslations } from "next-intl/server";
import { DATA } from "@/mock-data";
import { sleep } from "@/utils/sleep";

const SUPPORTED_LOCALES = ["en", "tr"] as const;
const DEFAULT_LOCALE = "tr";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const requestedLocale = searchParams.get("locale");

    const locale =
      requestedLocale &&
      SUPPORTED_LOCALES.includes(
        requestedLocale as (typeof SUPPORTED_LOCALES)[number]
      )
        ? requestedLocale
        : DEFAULT_LOCALE;

    const t = await getTranslations({
      locale,
      namespace: "categories",
    });

    const categoriesWithTranslations = DATA.map((category) => ({
      ...category,
      title: t(`${category.id}.title`),
      description: t(`${category.id}.description`),
    }));

    const filteredData = query
      ? categoriesWithTranslations.filter((category) =>
          category.title.toLowerCase().includes(query.toLowerCase())
        )
      : categoriesWithTranslations;

    const randomSleep = Math.floor(Math.random() * 1000) + 1000;
    await sleep(randomSleep);

    return NextResponse.json(
      {
        categories: filteredData,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch categories",
        success: false,
      },
      { status: 500 }
    );
  }
}

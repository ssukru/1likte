"use client";

import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher({
  className,
}: {
  className?: string;
}) {
  const locale = useLocale();
  const t = useTranslations("locale_switcher");

  return (
    <LocaleSwitcherSelect
      className={className}
      defaultValue={locale}
      label={t("label")}
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}

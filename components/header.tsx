import VerticalSeperator from "@/components/vertical-seperator";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import SearchInput from "./search-input";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations("header");

  return (
    <div className="bg-primary flex flex-col w-full text-white">
      <div className="container flex flex-col py-6 gap-6">
        <div className="flex flex-row w-full justify-between">
          <div className="flex items-center justify-start gap-4">
            <div className="flex">
              <Logo />
            </div>
            <VerticalSeperator />
            <div className="flex">
              <span className="text-base">{t("education")}</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="hidden md:flex">
              <Button variant={"ghost"} className="font-medium text-base">
                {t("login")}
              </Button>
            </div>
            <MobileMenu />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium">{t("recommendations")}</h1>
        </div>
        <SearchInput />
      </div>
    </div>
  );
}

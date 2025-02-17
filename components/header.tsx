import VerticalSeperator from "@/components/vertical-seperator";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import SearchInput from "./search-input";

export default function Header() {
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
              <span className="text-base">Eğitim</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="hidden md:flex">
              <Button variant={"ghost"} className="font-medium text-base">
                Giriş Yap
              </Button>
            </div>
            <MobileMenu />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium">
            1likte Ekibinden tavsiyeler ve yanıtlar
          </h1>
        </div>
        <SearchInput />
      </div>
    </div>
  );
}

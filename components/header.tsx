import VerticalSeperator from "@/components/vertical-seperator";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import MobileMenu from "./mobile-menu";

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
        <div className="flex bg-secondary rounded-[10px] h-[50px] md:h-[56px] overflow-hidden items-center px-4 gap-2">
          <SearchIcon className="w-6 h-6" />
          <Input
            placeholder="Yazılarda arayın..."
            className="rounded-none pl-0 border-none text-[16px] leading-5 focus-visible:ring-0 placeholder:text-white/70"
          />
        </div>
      </div>
    </div>
  );
}

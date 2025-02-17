"use client";

import HorizontalSeperator from "@/components/horizontal-seperator";
import LocaleSwitcher from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  const t = useTranslations("mobile_menu");

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <AlignRight className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full border-r-0 bg-primary p-0 text-white [&_button.close]:text-white [&_button.close]:hover:text-white/70"
      >
        {/* added to avoid accessibility errors. https://radix-ui.com/primitives/docs/components/dialog */}
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <div className="container flex flex-col gap-4">
            <Button
              variant="ghost"
              className="font-medium text-base justify-start text-white"
            >
              {t("login")}
            </Button>
            <HorizontalSeperator />
            <LocaleSwitcher className="w-fit" />
          </div>
          <div className="container flex flex-col py-6"></div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

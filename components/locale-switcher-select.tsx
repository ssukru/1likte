"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  className?: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
  className,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as string;
    startTransition(() => {
      router.replace(
        {
          pathname,
        },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={cn(
        "relative text-white text-base w-full flex items-center gap-2",
        isPending && "transition-opacity [&:disabled]:opacity-30",
        className
      )}
    >
      <p className="sr-only">{label}</p>
      <Image
        src={"/assets/icons/locale-switcher-icon.svg"}
        alt="locale-switcher-icon"
        width={24}
        height={24}
      />
      <div className="relative w-full">
        <select
          className="inline-flex w-full appearance-none bg-transparent pr-4 max-w-16 text-ellipsis"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
        <ChevronDownIcon className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
      </div>
    </label>
  );
}

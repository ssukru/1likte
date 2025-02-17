"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const queryString = createQueryString("q", debouncedSearch);
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  }, [debouncedSearch, router, pathname, createQueryString]);

  return (
    <div className="flex bg-secondary rounded-[10px] h-[50px] md:h-[56px] overflow-hidden items-center px-4 gap-2">
      <SearchIcon className="w-6 h-6" />
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Yazılarda arayın..."
        className="rounded-none pl-0 border-none text-[16px] leading-5 focus-visible:ring-0 placeholder:text-white/70"
      />
    </div>
  );
}

import { cn } from "@/lib/utils";
import { ForwardIcon, Activity, Badge, Info } from "lucide-react";
import { Category } from "@/types/category";
import Image from "next/image";

interface CategoryIconProps extends Pick<Category, "iconURL" | "id"> {
  className?: string;
}

export default function CategoryIcon({
  iconURL,
  id,
  className,
}: CategoryIconProps) {
  // in case you want to add new categories via editing mock-data.ts file - you don't have to worry about specifying an icon
  if (!iconURL) {
    const RandomIcon =
      RANDOM_ICONS[Math.floor(Math.random() * RANDOM_ICONS.length)];

    return (
      <RandomIcon
        className={cn("w-6 h-6 md:w-7 md:h-7 text-[#1C1C1E]", className)}
      />
    );
  }

  return (
    <Image
      src={iconURL!}
      alt={`category icon ${id}`}
      width={24}
      height={24}
      className={cn("w-6 h-6 md:w-7 md:h-7 text-[#1C1C1E]", className)}
    />
  );
}

const RANDOM_ICONS = [ForwardIcon, Activity, Badge, Info];

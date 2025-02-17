import { Card, CardTitle } from "@/components/ui/card";
import { Category } from "@/types/category";
import { ForwardIcon } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="p-5 space-y-2.5">
      <ForwardIcon className="w-6 h-6 md:w-7 md:h-7 text-[#1C1C1E]" />
      <CardTitle className="text-sm md:text-base font-medium text-[#1C1C1E]">
        {category.title}
      </CardTitle>
      <p className="text-base md:text-[16px] text-[#414141]">
        {category.description}
      </p>
      <p className="text-[13px] text-[#9A9A9A]">{category.articleCount} yazı</p>
    </Card>
  );
}

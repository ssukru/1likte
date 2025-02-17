"use client";

import CategoryIcon from "@/components/category-icon";
import { Card, CardTitle } from "@/components/ui/card";
import { Category } from "@/types/category";
import { motion } from "framer-motion";

interface CategoryCardProps {
  category: Category;
  index: number;
}
export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
    >
      <Card className="p-5 space-y-2.5">
        <CategoryIcon id={category.id} iconURL={category.iconURL} />
        <CardTitle className="text-sm md:text-base font-medium text-[#1C1C1E]">
          {category.title}
        </CardTitle>
        <p className="text-base md:text-[16px] text-[#414141]">
          {category.description}
        </p>
        <p className="text-[13px] text-[#9A9A9A]">
          {category.articleCount} yazı
        </p>
      </Card>
    </motion.div>
  );
}

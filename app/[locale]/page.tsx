import CategoryCard from "@/components/category-card";
import { fetchCategories } from "@/helper/api/category";

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q: string }>;
}) {
  const { locale } = await params;
  const { q } = await searchParams;

  const { categories } = await fetchCategories(q, locale);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 mt-2.5">
      {categories.map((category, index) => (
        <CategoryCard key={category.title} category={category} index={index} />
      ))}
    </div>
  );
}

import CategoryCard from "@/components/category-card";
import { fetchCategories } from "@/helper/api/category";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  const { categories } = await fetchCategories(q);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 mt-2.5">
      {categories.map((category) => (
        <CategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
}

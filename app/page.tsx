import CategoryCard from "@/components/category-card";
import { DATA } from "@/mock-data";

export default function Home() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 mt-2.5">
      {DATA.map((category) => (
        <CategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
}

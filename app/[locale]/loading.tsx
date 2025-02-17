import CategoryCardSkeleton from "@/components/category-card-skeleton";

export default function Loading() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 mt-2.5">
      {[...Array(15)].map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </div>
  );
}

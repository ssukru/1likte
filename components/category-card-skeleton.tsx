import { Skeleton } from "@/components/ui/skeleton";
export default function CategoryCardSkeleton() {
  return (
    <div className="p-5 space-y-2.5 bg-white rounded-lg border h-full w-full">
      <Skeleton className="w-12 h-12 rounded-full" />

      <Skeleton className="h-5 w-3/4" />

      <div className="space-y-2 flex-grow">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <Skeleton className="h-3 w-1/4" />
    </div>
  );
}

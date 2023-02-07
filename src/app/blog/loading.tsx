import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="container mx-auto mt-20 grow px-2">
      <div className="text-slate-900 dark:text-white mt-5 container mx-auto max-w-2xl">
        <SkeletonCard isLoading={true} />
      </div>
    </div>
  );
}

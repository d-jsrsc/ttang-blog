import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="text-slate-900 dark:text-white mt-5 container mx-auto max-w-2xl">
      <SkeletonCard isLoading={true} />
    </div>
  );
}

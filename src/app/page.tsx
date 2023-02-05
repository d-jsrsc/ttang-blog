import ListCard from "@/components/ListCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Suspense } from "react";
import TimeLine from "./time-line";

export default function Home() {
  return (
    <>
      <div className="w-full sticky top-0">
        {/* <div className="relative z-10 md:text-center lg:text-left"> */}
        <img src="/onepiece.jpg" alt="" />
      </div>
      <div className="bg-white dark:bg-zinc-900 pt-5 grow z-10 flex flex-col gap-5 text-slate-700 dark:text-slate-200">
        <div className="px-2 mx-auto container max-w-7xl flex flex-row gap-5">
          <div className="basis-3/4 flex flex-col gap-5">
            <ListCard />
            <ListCard />
            {new Array(199).fill("").map((item, idx) => {
              return <h1 key={idx}>{idx}</h1>;
            })}
          </div>
          <section className="basis-1/4 sticky top-20 h-fit">
            <Suspense
              fallback={
                <div className="w-full h-40 ">
                  <SkeletonCard isLoading={true} />
                </div>
              }
            >
              <TimeLine />
            </Suspense>
          </section>
        </div>
      </div>
    </>
  );
}

import { Suspense, use } from "react";
import Image from "next/image";

import { API_SERVER } from "@/constants";
import ListCard from "@/components/ListCard";
import SkeletonCard from "@/components/SkeletonCard";
import TimeLine from "@/components/Timeline";

type RecommendData = {
  type: string; // 'blog',
  path: string; // '/deno/2023-02/使用 Deno 开发一个 blog-server',
  meta: any;
  date: string;
  card: string; // "/deno/2023-02/使用 Deno 开发一个 blog-server/card.webp";
};

export const revalidate = 60 * 60 * 12; // seconds

async function recommend(): Promise<any> {
  const response = await fetch(new URL(`/server/recommend`, API_SERVER), {
    // cache: "force-cache",
    next: { revalidate },
  });
  const data: {
    name: string;
    data: Array<RecommendData>;
  } = await response.json();
  return data;
}

export default function Home() {
  const {
    data,
  }: {
    data: Array<RecommendData>;
  } = use(recommend());
  // console.log(data);
  return (
    <>
      <div className="w-full sticky top-0">
        {/* <div className="relative z-10 md:text-center lg:text-left"> */}
        <Image
          src="/onepiece.jpg"
          alt=""
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="bg-white dark:bg-zinc-900 pt-5 grow z-10 flex flex-col gap-5 text-slate-700 dark:text-slate-200">
        <div className="px-2 mx-auto container max-w-6xl flex flex-row gap-5">
          <div className="basis-3/4 flex flex-col gap-5">
            {data.map((item) => {
              return (
                <ListCard
                  key={item.path}
                  href={item.path}
                  card_img={item.card}
                  type={item.type}
                  title={item.meta.title}
                  intro={item.meta.intro}
                  date={item.meta.date}
                />
              );
            })}

            {/* {new Array(199).fill("").map((item, idx) => {
              return <h1 key={idx}>{idx}</h1>;
            })} */}
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

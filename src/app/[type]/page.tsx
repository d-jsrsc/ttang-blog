import ArticleCard from "@/components/AritcleCard";
import { API_SERVER } from "@/constants";

const revalidate = 60 * 60 * 24;
export default async function Blog({
  params,
}: {
  params: {
    type: string;
  };
}) {
  const response = await fetch(
    new URL(`/server/blog/${params.type}`, API_SERVER),
    {
      next: { revalidate },
    }
  );
  const data: {
    name: string;
    data?: {
      name: string;
      type: string;
      path: string;
      card: string;
      meta?: undefined | any;
    }[];
  } = await response.json();

  if (!data.data) {
    return null;
  }
  return (
    <div className="container max-w-6xl mx-auto mt-20 max-w-8xl grow px-2">
      <div className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        {/* ... {params.type}
        <div>{JSON.stringify(data)}</div> */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.data.map((item) => {
            const { meta, path, type, name, card } = item;
            return (
              <ArticleCard
                key={path}
                href={path}
                type={type}
                card_img={card}
                title={meta?.title || name}
                intro={meta?.intro}
              />
            );
          })}
        </div>
      </div>
      {/* <Link className="hover:break-after-column" href={"/blog/nodejs/v8"}>
        Store
      </Link> */}
    </div>
  );
}

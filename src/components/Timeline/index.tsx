import Link from "next/link";
import clsx from "clsx";
import { use } from "react";

import { API_SERVER } from "@/constants";

import styles from "./styles.module.css";

type DateItem = {
  name: string;
  type: string;
  path: string;
  card: string;
  meta?: undefined | any;
};

export const revalidate = 60 * 60 * 12;

async function time_line(ms: number): Promise<{
  name: string;
  data: {
    [key: string]: Array<DateItem>;
  };
}> {
  const response = await fetch(new URL(`/server/times`, API_SERVER), {
    // cache: "force-cache",
    next: { revalidate },
  });
  const data: {
    name: string;
    data: {
      [key: string]: Array<DateItem>;
    };
  } = await response.json();

  // await new Promise((res) =>
  //   setTimeout(() => {
  //     res(title);
  //   }, ms)
  // );
  return data;
}

export default function TimeLine() {
  let { data } = use(time_line(800));

  const times = Object.keys(data).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="">
      <div className="mb-2 text-xl font-bold">{"The Past..."}</div>
      <div className={clsx("overflow-auto", styles.container)}>
        {times.map((k) => {
          return (
            <div key={k}>
              <h3 className="top-0 sticky bg-white dark:bg-zinc-900">{k}</h3>
              {data[k].map((item, idx) => {
                return (
                  <div key={item.name} className="px-3">
                    <Link href={`/blog${item.path}`}>
                      {item.meta?.title || item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* <div>
          <h3 className="top-0 sticky">{"k"}</h3>

          {new Array(100).fill("").map((item, idx) => {
            return <h1 key={idx}>ss</h1>;
          })}
        </div> */}
      </div>
    </div>
  );
}

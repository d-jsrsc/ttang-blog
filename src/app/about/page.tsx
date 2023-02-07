import { Dot, Email, GitHub } from "@/components/Icons";
import Image from "next/image";
import dayjs from "dayjs";
import Content from "./message.mdx";
import { API_SERVER } from "@/constants";

const revalidate = 60 * 60 * 24;
export async function get_about() {
  const response = await fetch(new URL(`/server/about`, API_SERVER), {
    // cache: "force-cache",
    next: { revalidate },
  });
  const about: {
    name: string;
    data: {
      curriculumVitae: Array<{
        title: string;
        intro: string;
        date: string;
      }>;
    };
  } = await response.json();
  return about;
}

export default async function About() {
  const { data } = await get_about();

  return (
    <div
      className="container mx-auto pt-20 max-w-6xl grow px-2 bg-white/95 dark:bg-zinc-900/95"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_1fr] gap-4">
        <div className="lg:pl-10 pt-4 lg:sticky lg:top-20 ..">
          <div className="max-w-xs lg:max-w-none">
            <Image
              src={"/avatar.jpeg"}
              alt="avatar"
              width={300}
              height={300}
              className="w-full aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            ></Image>
          </div>
        </div>
        {/** col-span-2 row-span-2 */}
        <div className="lg:order-first lg:col-span-2 row-span-2">
          <div className="text-slate-900 dark:text-slate-200">
            <h3 className="text-base lg:sticky lg:top-16 py-4 font-semibold tracking-tight mb-8 bg-white dark:bg-zinc-900 z-30">
              CurriculumVitae
            </h3>
            <div className="relative sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(11rem+1px),calc(100%-40rem))]">
              <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
              <div className="space-y-16">
                {data.curriculumVitae.map((item) => {
                  return (
                    <Card key={item.title} {...item} datetime={item.date} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-10  ..">
          <div className="lg:sticky lg:top-[calc(455px)]">
            <ul role="list">
              {/* <li className="flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                href="/about#"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                >
                  <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                </svg>
                <span className="ml-4">Follow on Twitter</span>
              </a>
            </li> */}

              <li className="mt-4 flex">
                <a
                  className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  href="/about#"
                >
                  <GitHub />
                  <span className="ml-2">GitHub</span>
                </a>
              </li>

              <li className="mt-4 flex">
                <a
                  className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  href="mailto:d_jsrsc@163.com"
                >
                  <Email />
                  <span className="ml-2">d_jsrsc@163.com</span>
                </a>
              </li>

              {/* <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 ">
              <a
                className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                href="mailto:d_jsrsc@163.com"
              >
                <Email />
                <span className="ml-2">d_jsrsc@163.com</span>
              </a>
            </li> */}
            </ul>

            <div className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              <Content />
            </div>

            {/* <div className="mt-5 ">
            <ExportPDF />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  intro,
  datetime,
}: {
  title: string;
  intro: string;
  datetime: string;
}) {
  return (
    <article className="relative group">
      <div className="absolute sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
      <Dot />
      <div className="relative">
        <h3 className="text-base font-semibold tracking-tight pt-8 lg:pt-0">
          {title}
        </h3>
        <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 text-slate-700 dark:text-slate-400">
          <p>{intro}</p>
        </div>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          <dt className="sr-only">Date</dt>
          <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
            <time dateTime={dayjs(datetime).toDate().toISOString()}>
              {dayjs(datetime).format("MMM YYYY")}
            </time>
          </dd>
        </dl>
      </div>
      <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
    </article>
  );
}

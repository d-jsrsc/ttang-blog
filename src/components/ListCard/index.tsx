/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ListCard({
  title,
  intro,
  type,
  card_img,
  href,
  date,
}: {
  title: string;
  intro: string;
  type: string;
  href: string;
  date: string;
  card_img: string;
}) {
  return (
    <div className="flex flex-row gap-3 h-40 group relative">
      <div className="h-full basis-1/4 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img src={`/card${card_img}`} alt="" />
      </div>
      <div className="flex flex-col basis-3/4 justify-between">
        <div className="">
          <h3 className="text-xl text-slate-500 dark:text-slate-200">
            {title}
          </h3>
          <p className="my-2 text-slate-500 dark:text-slate-200">{intro}</p>
          <div>
            <span className="text-sm capitalize leading-6 text-slate-600 md:order-first md:rounded-full md:px-2 md:text-xs md:font-semibold md:leading-7 md:bg-slate-100 md:text-slate-500 md:group-hover:bg-slate-200">
              {type}
            </span>
            <time
              className="relative z-10 order-first ml-3 inline-flex items-center text-sm text-zinc-400 dark:text-zinc-500"
              dateTime={date}
            >
              {date}
            </time>
          </div>
        </div>
        <div>
          <Link
            className="hover:break-after-column flex items-center text-sm text-teal-500"
            href={`/blog${href}`}
          >
            <span aria-hidden="true" className="absolute inset-0"></span>
            <span>{"Read"}</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

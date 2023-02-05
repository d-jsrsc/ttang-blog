import Link from "next/link";

export default function ListCard() {
  return (
    <div className="flex flex-row gap-3 h-40 group relative">
      <div className="h-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img
          src="https://arweave.net/ptFAPiNVdlyCCQnrRaqI5FwF2fpbvkPr5GBLbyjmAiE?ext=png"
          alt=""
          className="h-full w-52 object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="">
          <h3 className="text-xl text-slate-500 dark:text-slate-200">
            Power By Next.js
          </h3>
          <p className="my-2 text-slate-500 dark:text-slate-200">
            https://arweave.net/ptFAPiNVdlyCCQnrRaqI5FwF2fpbvkPr5GBLbyjmAiE?ext=png
          </p>
          <time
            className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
            dateTime="2022-09-02"
          >
            September 2, 2022
          </time>
        </div>
        <div>
          <Link
            className="hover:break-after-column flex items-center text-sm text-teal-500"
            href={`/blog/rust/2023-02/tokio-step-0`}
          >
            <span aria-hidden="true" className="absolute inset-0"></span>
            <span> Read article</span>
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

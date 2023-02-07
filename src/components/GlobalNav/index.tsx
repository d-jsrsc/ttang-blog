"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

export const revalidate = 86400; //60 * 60 * 24; // seconds

export function GlobalNav({ navs }: { navs: string[] }) {
  const pathname = usePathname();
  const pathnameArr = pathname?.split("/") || [];

  return (
    <header className="w-full fixed top-0 z-50  bg-white/95 dark:bg-zinc-900/95">
      <div className="w-full border-b border-b-gray-500">
        <div className="flex items-center mx-auto container max-w-6xl py-3 px-2 gap-1">
          <Link
            href={"/"}
            className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
          >
            <Logo className="w-auto h-5" />
          </Link>
          <div className="grow flex items-center justify-between text-lg leading-10 text-slate-700 dark:text-slate-200">
            <nav className="">
              <ul className="flex items-center">
                {navs.map((nav) => {
                  return (
                    <li
                      key={nav}
                      className={clsx(
                        "px-2 hover:text-slate-900 dark:hover:text-slate-300",
                        pathnameArr[1] === nav ? styles.active : ""
                      )}
                    >
                      <Link href={`/${nav}`} className="capitalize">
                        {nav}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div>
              <ul className="flex items-center">
                <li
                  className={clsx(
                    pathnameArr[1] === "about" ? styles.active : ""
                  )}
                >
                  <Link className="capitalize" href={"/about"}>
                    about
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Logo({ className, ...props }: { className: string }) {
  return (
    <svg
      viewBox="0 0 50 31"
      className={clsx("text-slate-900 dark:text-white", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
        fill="#38bdf8"
      />
    </svg>
  );
}

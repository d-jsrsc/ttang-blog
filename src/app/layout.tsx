import Footer from "@/components/Footer";
import { GlobalNav } from "@/components/GlobalNav";
import { API_SERVER } from "@/constants";
import { use } from "react";
import "./globals.css";

export const revalidate = 86400; //60 * 60 * 24; // seconds

export async function get_navs() {
  const response = await fetch(new URL(`/server/navs`, API_SERVER), {
    // cache: "force-cache",
    next: { revalidate },
  });
  const navBar: {
    navs: string[];
  } = await response.json();
  return navBar;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navBar = use(get_navs());

  // console.log(navs);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
          }}
        />
      </head>
      <body className="overflow-y-scroll bg-white dark:bg-zinc-900">
        <main className="flex flex-col">
          <GlobalNav navs={navBar.navs} />
          {/* <GlobalNav /> */}
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

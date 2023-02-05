import Footer from "@/components/Footer";
import { GlobalNav } from "@/components/GlobalNav";
import { API_SERVER } from "@/constants";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(new URL(`/server/navs`, API_SERVER));
  const navBar: {
    navs: string[];
  } = await response.json();

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
          <GlobalNav types={navBar.navs} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

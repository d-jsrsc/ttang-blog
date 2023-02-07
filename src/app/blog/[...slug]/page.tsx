import { use } from "react";

import { API_SERVER } from "@/constants";
import MarkdownShower from "@/components/MarkdownShower";

const revalidate = 60 * 60 * 24;
type MarkdownStr = string;

const fetch_blog_data = async (blog_path: string) => {
  const response = await fetch(
    new URL(`/server/blog/${blog_path}`, API_SERVER),
    {
      cache: "no-cache",
      // next: { revalidate },
    }
  );
  const data: {
    content: MarkdownStr;
    type: string;
    metadata: any;
  } = await response.json();

  return data;
};

export default function Blog({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const mdHtml = use(fetch_blog_data(params.slug.join("/")));

  if (!mdHtml) return null;

  return (
    <div className="container mx-auto mt-20 grow px-2">
      <div className="text-slate-900 dark:text-white mt-5 container mx-auto max-w-2xl">
        <MarkdownShower content={mdHtml.content} />
      </div>
    </div>
  );
}

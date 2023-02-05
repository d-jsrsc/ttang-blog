import clsx from "clsx";
import markdownParser from "@/utils/markdown";

import { API_SERVER } from "@/constants";

import "github-markdown-css/github-markdown-dark.css";
import styles from "./styles.module.css";

type MarkdownStr = string;

export default async function Blog({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const response = await fetch(
    new URL(`/server/blog/${params.slug.join("/")}`, API_SERVER)
  );
  const data: {
    content: MarkdownStr;
    type: string;
    metadata: any;
  } = await response.json();

  const mdHtml = markdownParser.render(data.content);
  return (
    <div className="container mx-auto mt-20 grow px-2">
      <div className="text-slate-900 dark:text-white mt-5 container mx-auto max-w-2xl">
        <div
          className={clsx(
            "markdown-body",
            styles.revert,
            styles["markdown-body"]
          )}
          dangerouslySetInnerHTML={{ __html: mdHtml }}
        />
      </div>
    </div>
  );
}

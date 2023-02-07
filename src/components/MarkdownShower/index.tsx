"use client";

import { useMemo } from "react";
import clsx from "clsx";

import markdownParser from "@/utils/markdown";

import "github-markdown-css/github-markdown-dark.css";
import styles from "./styles.module.css";

export default function MarkdownShower({ content }: { content: string }) {
  // const data = use(get_markdown_data(slug));
  const mdHtml = useMemo(() => {
    if (!content) return "";
    return markdownParser.render(content);
  }, [content]);

  return (
    <div
      className={clsx("markdown-body", styles.revert, styles["markdown-body"])}
      dangerouslySetInnerHTML={{ __html: mdHtml }}
    />
  );
}

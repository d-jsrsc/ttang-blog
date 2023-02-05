import { API_SERVER } from "@/constants";
import MarkdownShower, { MarkdownStr } from "@/components/MarkdownShower";

// async function blog_data(params: string[]): Promise<string> {
//   const response = await fetch(
//     new URL(`/server/blog/${params.join("/")}`, API_SERVER)
//   );
//   const data: {
//     content: MarkdownStr;
//     type: string;
//     metadata: any;
//   } = await response.json();

//   // const mdHtml = useMemo(() => {
//   //   if (!data?.content) return "";
//   //   return markdownParser.render(data?.content);
//   // }, [data?.content]);
//   const mdHtml = markdownParser.render(data?.content);
//   return mdHtml;
// }

export default async function Blog({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  // const mdHtml = use(blog_data(params.slug));
  const response = await fetch(
    new URL(`/server/blog/${params.slug.join("/")}`, API_SERVER)
  );
  const data: {
    content: MarkdownStr;
    type: string;
    metadata: any;
  } = await response.json();

  // const mdHtml = useMemo(() => {
  //   if (!data?.content) return "";
  //   return markdownParser.render(data?.content);
  // }, [data?.content]);

  // const mdHtml = markdownParser.render(data.content);
  return (
    <div className="container mx-auto mt-20 grow px-2">
      <div className="text-slate-900 dark:text-white mt-5 container mx-auto max-w-2xl">
        <MarkdownShower content={data.content} />
      </div>
    </div>
  );
}

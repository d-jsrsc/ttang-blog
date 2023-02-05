import Content from "./message.mdx";

export default function About() {
  return (
    <div className="container mx-auto mt-20 max-w-7xl  grow px-2">
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        About
      </h3>
      <div className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        <Content />
      </div>
    </div>
  );
}

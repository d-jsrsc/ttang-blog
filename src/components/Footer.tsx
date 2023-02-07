import packageInfo from "../../package.json";

export default function Footer() {
  return (
    <footer className="container max-w-6xl mx-auto p-2 mt-5 flex justify-between">
      <div className="text-slate-500 dark:text-slate-200">Power By Next.js</div>
      <div className="text-slate-500 dark:text-slate-200">
        {packageInfo.version}
      </div>
    </footer>
  );
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="blog-layout" className="container mx-auto mt-20 grow px-2">
      {children}
    </div>
  );
}

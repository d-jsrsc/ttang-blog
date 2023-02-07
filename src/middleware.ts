import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_SERVER } from "./constants";

export const config = {
  matcher: ["/blog/:path*", "/card/:path*"],
};

const isImgEnd = (pathname: string) => {
  return (
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".gif") ||
    pathname.endsWith(".avif") ||
    pathname.endsWith(".webp")
  );
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const referer = req.headers.get("referer");

  let response;

  if (pathname.startsWith("/blog") && isImgEnd(pathname)) {
    const blog = referer?.split("/").slice(-3) as string[];
    const img = pathname.split("/").pop();
    const blogImgPath = blog.join("/") + `/${img}`;

    response = await fetch(new URL(`/server/blog/${blogImgPath}`, API_SERVER));
  }

  if (pathname.startsWith("/card") && isImgEnd(pathname)) {
    response = await fetch(
      new URL(`/server/blog${pathname.replace("/card", "")}`, API_SERVER)
    );
  }

  if (response) {
    return new NextResponse(response.body, {
      status: response.status,
      headers: {
        "x-response-time": response.headers.get("x-response-time") || "",
        "cache-control": response.headers.get("cache-control") || "",
        "content-length": response.headers.get("content-length") || "",
        "x-server": response.headers.get("server") || "",
        "vary": response.headers.get("vary") || "",
      },
    });
  }

  return NextResponse.next();
}

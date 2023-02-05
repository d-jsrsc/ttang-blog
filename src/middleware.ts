import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_SERVER } from "./constants";

export const config = {
  matcher: ["/blog/:path*", "/card/:path*"],
};

const ImgEnd = (pathname: string) => {
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

  if (pathname.startsWith("/blog") && ImgEnd(pathname)) {
    const blog = referer?.split("/").slice(-3) as string[];
    const img = pathname.split("/").pop();
    const blogImgPath = blog.join("/") + `/${img}`;

    const response = await fetch(
      new URL(`/server/blog/${blogImgPath}`, API_SERVER)
    );

    return new NextResponse(response.body, {
      status: response.status,
      ...response.headers,
    });
  }

  if (pathname.startsWith("/card") && ImgEnd(pathname)) {
    // console.log({ pathname });
    const response = await fetch(
      new URL(`/server/blog${pathname.replace("/card", "")}`, API_SERVER)
    );

    return new NextResponse(response.body, {
      status: response.status,
      ...response.headers,
    });
  }

  return NextResponse.next();
  // const basicAuth = req.headers.get("authorization");
  // const url = req.nextUrl;

  // if (basicAuth) {
  //   const authValue = basicAuth.split(" ")[1];
  //   const [user, pwd] = atob(authValue).split(":");

  //   if (user === basicAuthName && pwd === basicAuthPass) {
  //     return NextResponse.next();
  //   }
  // }
  // url.pathname = "/api/basic-auth";

  // return NextResponse.rewrite(url);
}

import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host === "b2benrich.com") {
    const url = request.nextUrl.clone();
    url.host = "www.b2benrich.com";
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|manifest|api).*)",
  ],
};

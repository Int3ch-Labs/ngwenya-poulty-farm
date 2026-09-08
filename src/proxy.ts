import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const isValid = await verifySessionToken(token);

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/dashboard") && !isValid) {
    const loginUrl = new URL("/admin", request.url);
    return NextResponse.redirect(loginUrl);
  }

  const isMutatingApi =
    pathname.startsWith("/api/posts") &&
    ["POST", "PUT", "PATCH", "DELETE"].includes(request.method);

  if (isMutatingApi && !isValid) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*", "/api/posts/:path*"],
};

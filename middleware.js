import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Only use Arcjet in development
const isDev = process.env.NODE_ENV === "development";

let arcjetMiddleware = null;

if (isDev) {
  try {
    const { default: arcjet, createMiddleware, detectBot, shield } = await import("@arcjet/next");
    const aj = arcjet({
      key: process.env.ARCJET_KEY,
      rules: [
        shield({ mode: "LIVE" }),
        detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"] }),
      ],
    });
    const clerk = clerkMiddleware(async (auth, req) => {
      const { userId } = await auth();
      if (!userId && isProtectedRoute(req)) {
        const { redirectToSignIn } = await auth();
        return redirectToSignIn();
      }
      return NextResponse.next();
    });
    arcjetMiddleware = createMiddleware(aj, clerk);
  } catch (error) {
    console.warn("Arcjet failed to load in development:", error);
  }
}

export default arcjetMiddleware || clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }
  return NextResponse.next();
});
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

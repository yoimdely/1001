import { NextResponse } from "next/server";
import { company } from "@/lib/content";

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://${company.domain}/sitemap.xml
`;

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}

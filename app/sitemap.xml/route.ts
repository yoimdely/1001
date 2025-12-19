import { NextResponse } from "next/server";
import { company, seoPages } from "@/lib/content";

export async function GET() {
  const urls = seoPages
    .map(
      (page) => `
  <url>
    <loc>https://${company.domain}${page.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml" },
  });
}

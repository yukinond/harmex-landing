import { data } from "~/data/content";
import { Article } from "../lib/models/Article";

export default defineEventHandler(async (event) => {
    event.node.res.setHeader('Content-Type', 'application/xml');

    const config = useRuntimeConfig(event);
    const baseUrl = config.public.siteUrl || 'https://harmex.ru';
    const now = new Date();

    const staticRoutes = [
        { loc: '/', lastmod: now, priority: 1.0, changefreq: 'monthly' },
        { loc: '/blog', lastmod: now, priority: 0.8, changefreq: 'daily' }
    ];

    const articles = await Article.find({ date: { $lte: now } }, "slug uuid updatedAt").lean();

    const dynamicRoutes = [
        ...(Array.isArray(data) ? data.flatMap(item =>
            item.subItems?.filter(subItem => !subItem.disabled)
                .map(subItem => ({ loc: `/info/${subItem.value}`, lastmod: now, priority: 0.7, changefreq: 'monthly' })) || []
        ) : []),
        ...articles.map(article => ({
            loc: `/blog/${article.slug || article.uuid}`,
            lastmod: article.updatedAt || now,
            priority: 0.9,
            changefreq: 'monthly'
        }))
    ];

    const urls = [...staticRoutes, ...dynamicRoutes]
        .map(({ loc, lastmod, priority, changefreq }) => `
        <url>
            <loc>${baseUrl}${loc}</loc>
            <lastmod>${new Date(lastmod).toISOString()}</lastmod>
            <priority>${priority}</priority>
            <changefreq>${changefreq}</changefreq>
        </url>`)
        .join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
    </urlset>`.trim();

    return sitemap;
});

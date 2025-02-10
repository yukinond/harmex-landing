import { data } from "~/data/content";
import { Article } from "../lib/models/Article";

export default defineEventHandler(async (event) => {
    event.node.res.setHeader('Content-Type', 'application/xml');
    
    const config = useRuntimeConfig(event);
    const baseUrl = config.public.siteUrl || 'https://example.com';

    const staticRoutes = ['/', '/blog'];

    const articles = await Article.find({}, "slug uuid").lean();
    
    const dynamicRoutes = [
        ...(Array.isArray(data) ? data.flatMap(item => 
            item.subItems?.filter(subItem => !subItem.disabled).map(subItem => `/info/${subItem.value}`) || []
        ) : []),
        ...articles.map(article => `/blog/${article.slug || article.uuid}`)
    ];

    const urls = [...staticRoutes, ...dynamicRoutes]
        .map(route => `<url><loc>${baseUrl}${route}</loc></url>`)
        .join('\n');
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
    </urlset>`.trim();

    return sitemap;
});

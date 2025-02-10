export default defineEventHandler(async (event) => {
    event.node.res.setHeader('Content-Type', 'text/plain');
    const config = useRuntimeConfig(event);

    const result = `User-agent: *
Allow: /
Disallow: /articles

Sitemap: ${config.public.siteUrl}/sitemap.xml
Host: ${config.public.siteUrl}
`
    return result
});
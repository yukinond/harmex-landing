import { Article } from '@/server/lib/models/Article';
import { slugify } from "~/server/utils/slugify";

export default eventHandler(async (event) => {
    const query = getQuery(event);

    let article;

    if (query.uuid) {
        article = await Article.findOne({ uuid: query.uuid }).select('-_id');
    } 
    else if (query.slug) {
        article = await Article.findOne({ slug: query.slug }).select('-_id');
    }

    if (!article) {
        throw createError({ statusCode: 404, statusMessage: 'Статья не найдена' });
    }

    if (query.plus === 'true') {
        await Article.updateOne({ uuid: article.uuid }, { $inc: { views: 1 } });
    }

    if (query.fromParams === 'true' && !article.slug) {
        let baseSlug = slugify(article.title);
        let uniqueSlug = baseSlug;
        let counter = 1;

        while (await Article.exists({ slug: uniqueSlug })) {
            uniqueSlug = `${baseSlug}-${counter}`;
            counter++;
        }

        await Article.updateOne({ uuid: article.uuid }, { $set: { slug: uniqueSlug } });

        article.slug = uniqueSlug;
    }

    return article;
});

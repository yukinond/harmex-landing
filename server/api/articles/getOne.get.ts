import { Article } from '@/server/lib/models/Article';

export default eventHandler(async (event) => {
    const query = getQuery(event);
    const article = await Article.findOne({ uuid: query.uuid }).select('-_id');

    if(!article) {
        throw createError({ statusCode: 404, statusMessage: 'Статья не найдена' });
    }

    if (query.plus === 'true') {
        await Article.updateOne({ uuid: query.uuid }, { $inc: { views: 1 } });
    }

    return article;
});

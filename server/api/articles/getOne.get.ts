import { Article } from '@/server/lib/models/Article';

export default eventHandler(async (event) => {
    const query = getQuery(event);
    // console.log('query', query);
    const article = await Article.findOne({ uuid: query.uuid }).select('-_id');

    if(!article) {
        throw createError({ statusCode: 404, statusMessage: 'Статья не найдена' });
    }

    if (query.plus === 'true') {
        console.log('Подсчет', query.plus);
        await Article.updateOne({ uuid: query.uuid }, { $inc: { views: 1 } });
    }

    console.log('articles', article);
    return article;
});

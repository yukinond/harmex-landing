import { Article } from '@/server/lib/models/Article';
import { uuid } from 'uuidv4';

export default eventHandler(async (event) => {
    const query = getQuery(event);

    const article = await Article.findOne({ uuid: query.uuid });

    if(!article) {
        throw createError({ statusCode: 404, statusMessage: 'Статья не найдена' });
    }

    article.views += 1;

    await article.save();

    return article;
});

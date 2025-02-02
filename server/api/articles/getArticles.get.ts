import { Article } from '@/server/lib/models/Article';

export default eventHandler(async (event) => {
    const query = getQuery(event);
    const now = new Date(); // Текущая дата

    let articles;

    if (query.main === 'true') { 
        articles = await Article.find({
            date: { $lte: now } // Фильтр статей с датой не в будущем
        })
        .sort({ views: -1 })
        .select('-_id')
        .limit(3);
    } else {
        articles = await Article.find({
            date: { $lte: now }
        })
        .sort({ views: -1 })
        .select('-_id');
    }
    console.log('articles', articles);
    return articles;
});

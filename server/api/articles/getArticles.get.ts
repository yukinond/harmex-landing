import { Article } from '@/server/lib/models/Article';

export default eventHandler(async (event) => {
    const query = getQuery(event);

    let articles;

    if (query.main === 'true') { 
        articles = await Article.find().sort({ views: -1 }).select('-_id').limit(3);
    } else {
        articles = await Article.find().sort({ views: -1 }).select('-_id')
    }

    // console.log('articles', articles);
    return articles;
});

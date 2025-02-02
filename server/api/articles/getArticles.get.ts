import { Article } from '@/server/lib/models/Article';

export default eventHandler(async (event) => {
    const query = getQuery(event);
    const now = new Date();

    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 6;
    const skip = (page - 1) * limit;

    if (query.main === 'true') { 
        const mainArticles = await Article.find({ date: { $lte: now } })
        .sort({ views: -1 })
        .select('-_id')
        .limit(3);
        return { mainArticles };
    } else {
        const mainArticles = await Article.find({ date: { $lte: now } })
        .sort({ views: -1 })
        .select('-_id')
        .limit(3);
        const totalCount = await Article.countDocuments({ date: { $lte: now } }); 
        const articles = await Article.find({ date: { $lte: now } })
            .sort({ date: -1 })
            .select('-_id')
            .skip(skip)
            .limit(limit);

        return { mainArticles, articles, totalCount };
    }
});

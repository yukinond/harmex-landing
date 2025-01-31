import { Article } from '@/server/lib/models/Article'

export default eventHandler(async (event) => {
    const articles = await Article.find()
    console.log('articles', articles)
    return articles
})

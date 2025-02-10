import { Article } from '@/server/lib/models/Article';
import { v4 as uuidv4 } from 'uuid'

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.title || !body.description || !body.author || !body.date || !body.category || !Array.isArray(body.sections)) {
      throw createError({ statusCode: 400, statusMessage: 'Все поля должны быть заполнены и sections должен быть массивом' });
    }

    const newArticle = new Article({
      title: body.title,
      description: body.description,
      image: body.image,
      article: body.sections,
      author: body.author,
      date: new Date(body.date),
      category: body.category,
      uuid: uuidv4(),
      readTime: body.readTime,
    });

    await newArticle.save();

    return {
      statusCode: 201,
      message: 'Статья успешно создана',
      article: newArticle
    };
  } catch (error) {
    console.error('Ошибка при создании статьи:', error);
    throw createError({ statusCode: 500, statusMessage: 'Ошибка при создании статьи: ' + error.message });
  }
});

import { Article } from '@/server/lib/models/Article';
import { uuid } from 'uuidv4';

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);

    console.log('Полученные данные:', body);

    if (!body.title || !body.description || !body.author || !body.date || !body.category || !Array.isArray(body.sections)) {
      throw createError({ statusCode: 400, statusMessage: 'Все поля должны быть заполнены и sections должен быть массивом' });
    }

    const newArticle = new Article({
      title: body.title,
      description: body.description,
      image: body.image,
      author: body.author,
      date: body.date,
      category: body.category,
      sections: body.sections,
      uuid: uuid(),
      readTime: body.readTime,
    });
    console.log('Перед сохранением:', newArticle);

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

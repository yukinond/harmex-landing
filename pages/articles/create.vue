<script setup>
const article = reactive({
title: '',
description: '',
image: '',
author: '',
category: '',
sections: [{ subheading: '', content: [{ text: '', class: '' }] }]
});

const addSection = () => {
article.sections.push({ subheading: '', content: [{ text: '', class: '' }] });
};

const addParagraph = (index) => {
article.sections[index].content.push({ text: '', class: '' });
};

const saveArticle = async () => {
const newArticle = {
  ...article,
  date: new Date().toISOString().split('T')[0]
};

try {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newArticle),
  });
  const data = await response.json();
  alert('Статья успешно сохранена!');
} catch (error) {
  console.error('Ошибка при сохранении статьи:', error);
}
};
</script>


<template>
  <div class="w-full max-w-[600px] mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Создание статьи</h1>
    <form @submit.prevent="saveArticle" class="space-y-4">
      <input v-model="article.title" type="text" placeholder="Заголовок" class="w-full p-2 border rounded" />
      <input v-model="article.description" type="text" placeholder="Описание" class="w-full p-2 border rounded" />
      <input v-model="article.image" type="text" placeholder="Ссылка на изображение" class="w-full p-2 border rounded" />
      <input v-model="article.author" type="text" placeholder="Автор" class="w-full p-2 border rounded" />
      <input v-model="article.category" type="text" placeholder="Категория" class="w-full p-2 border rounded" />
      
      <div v-for="(section, index) in article.sections" :key="index" class="border p-4 rounded">
        <input v-model="section.subheading" type="text" placeholder="Подзаголовок" class="w-full p-2 border rounded mb-2" />
        <div v-for="(paragraph, pIndex) in section.content" :key="pIndex" class="flex space-x-2">
          <textarea v-model="paragraph.text" placeholder="Текст" class="w-full p-2 border rounded"></textarea>
          <input v-model="paragraph.class" type="text" placeholder="CSS класс" class="p-2 border rounded" />
        </div>
        <button type="button" @click="addParagraph(index)" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Добавить параграф</button>
      </div>
      <button type="button" @click="addSection" class="bg-green-500 text-white px-4 py-2 rounded">Добавить раздел</button>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Сохранить статью</button>
    </form>
  </div>
</template>

<style scoped>
</style>

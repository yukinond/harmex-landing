<script setup lang="ts">
import { uuid } from 'uuidv4';

const article = reactive({
title: '',
description: '',
image: '',
author: '',
date: '',
category: '',
readTime: '',
sections: [{ subheading: '', content: [{ text: '', class: '' }] }]
});

const classOptions = [
  { value: "violation-list", label: "Список" },
  { value: "step-list", label: "Список шагов" },
  { value: "default", label: "Обычный текст" },
  { value: "comment", label: "Комментарий" },
  { value: "block-blue", label: "Синий блок" },
  { value: "block-yellow", label: "Желтый блок" },
  { value: "block-red", label: "Красный блок" }
];

const addSection = () => {
  article.sections.push({ subheading: '', content: [{ text: '', class: 'default' }] });
};

const addParagraph = (index: any) => {
  article.sections[index].content.push({ text: '', class: 'default' });
};

const saveArticle = async () => {
const newArticle = {
  ...article,
  // date: new Date().toISOString().split('T')[0]
};

try {
  const response = await fetch('/api/articles/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newArticle),
  });
  const data = await response.json();
  console.log('data', data);
  // alert('Статья успешно сохранена!');
} catch (error) {
  console.error('Ошибка при сохранении статьи:', error);
}
};

const formattedContent = computed(() => {
  if (article.sections) {
    return article.sections.map((section: any) => ({
      subheading: section.subheading,
      class: section.class || "default-block",
      content: section.content.map((para: any) => ({
        text: para.text.replace(/\n/g, '<br>'),
        class: para.class || 'default-text'
      }))
    }));
  }
  return [];
});

const getClass = (className: string) => {
  const classMap: Record<string, string> = {
    "violation-list": "text-[18px] leading-[28px] font-[400] text-black list-disc pl-0",
    "step-list": "text-[18px] leading-[28px] font-[400] text-black list-decimal pl-0",
    "default": "text-[18px] leading-[28px] font-[400] text-[#1D1D1D]",
    "comment": "border-l-[1px] border-[#E86B35] p-4 italic before:content-['«'] after:content-['»']",
    "block-blue": "bg-[#E4F4FF] p-4 rounded-none",
    "block-yellow": "bg-[#F1BB6B] p-4 rounded-none",
    "block-red": "bg-[#FFE4F2] p-4 rounded-none",
  };
  return classMap[className] || classMap["default"];
};

const { upload } = useS3Object();
const loading = ref(false);
const imgName = ref('');

async function uploadToS3(event: Event) {
  loading.value = true;
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  if (file.name.toLowerCase().endsWith(".webp")) {
    console.error("Нельзя загружать вебпикчи");
    loading.value = false;
    return;
  }

  imgName.value = file.name;

  const fileName = "harmex/landing1/articles/" + uuid();
  try {
    const result = await upload(file, { key: fileName });
    if (!result) {
      console.error("Не удалось загрузить фото");
      loading.value = false;
      return;
    }
    await useFetch("/api/images/openForPublic", {
      method: "GET",
      params: {
        path: result.split("query/")[1],
      },
    });
    article.image = `https://ozonmpportal.hb.vkcs.cloud/${result.split("query/")[1]}`;
  } catch (error) {
    console.error("Ошибка загрузки изображения", error);
  } finally {
    loading.value = false;
  }
}

const { $dayjs } = useNuxtApp()

</script>


<template>
  <div class="flex lg:flex-row flex-col justify-between">
    <section class="w-full max-w-[600px] mx-auto p-6 rounded-r-xl">
      <h1 class="text-2xl font-bold mb-4">Создание статьи</h1>
      <form @submit.prevent="saveArticle" class="space-y-4">
        <input v-model="article.title" type="text" placeholder="Заголовок" class="w-full p-2 border rounded" />
        <input v-model="article.description" type="text" placeholder="Описание" class="w-full p-2 border rounded" />
        <label class="block w-full p-2 border rounded bg-gray-100 text-center cursor-pointer">
          {{ loading ? "Загрузка..." : !article.image ? "Загрузить изображение" : imgName }}
          <input type="file" @change="uploadToS3" accept="image/*" class="hidden" />
        </label>

        <input v-model="article.author" type="text" placeholder="Автор" class="w-full p-2 border rounded" />
        <!-- <input v-model="article.date" type="text" placeholder="Дата" class="w-full p-2 border rounded" /> -->
        <VueDatePicker v-model="article.date"></VueDatePicker>
        <input v-model="article.category" type="text" placeholder="Категория" class="w-full p-2 border rounded" />
        <input v-model="article.readTime" type="text" placeholder="Время чтения" class="w-full p-2 border rounded" />
        
        <div v-for="(section, index) in article.sections" :key="index" class="border p-4 rounded">
          <input v-model="section.subheading" type="text" placeholder="Подзаголовок" class="w-full p-2 border rounded mb-2" />
          <div v-for="(paragraph, pIndex) in section.content" :key="pIndex" class="flex space-x-2">
            <textarea v-model="paragraph.text" placeholder="Текст" class="w-full p-2 border rounded"></textarea>
            <select v-model="paragraph.class" class="p-2 border rounded">
              <option v-for="option in classOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>
          <button type="button" @click="addParagraph(index)" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Добавить параграф</button>
        </div>
        <button type="button" @click="addSection" class="bg-green-500 text-white px-4 py-2 rounded">Добавить раздел</button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Сохранить статью</button>
      </form>
    </section>
    <section v-if="article && article.title" class="w-full flex flex-col gap-0 bg-[#EAEAEA38]">
      <div
        class="flex flex-col gap-5 px-6 py-8 sm:pt-[64px] sm:pb-[80px] items-center justify-center bg-gradient-to-b from-[#FFFFFF] from-[45%] to-[#fef8f3] to-[100%] border-b border-[#0A0A0A12]"
      >
        <h1
          v-if="article.title"
          class="text-[28px] leading-[33px] sm:text-[48px] sm:leading-[56px] font-[700] w-full max-w-[80%] text-center text-[#1D1D1D]"
        >
          {{ article.title }}
        </h1>
        <p
          v-if="article.description"
          class="text-[18px] leading-[28px] font-[400] text-[#0A0A0AB2] text-center w-full max-w-[80%]"
        >
          {{ article.description }}
        </p>
      </div>

      <div
        class="px-4 lg:px-6 py-20 lg:py-20 flex flex-col justify-center items-center bg-white"
      >
        <div
          class="flex flex-col w-full lg:max-w-[70%] items-center justify-center gap-6"
        >
          <Nuxt-Img
            v-if="article.image"
            :src="article.image"
            class="w-full max-h-[320px] flex mx-auto object-cover rounded-2xl"
          />
          <div v-if="article.category" class="flex justify-between mb-1 w-full">
            <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">
              {{ article.category }}
            </p>
            <span class="text-[#0A0A0AB2] flex items-center gap-3">
              <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" /> 300
            </span>
          </div>
          <div class="grid grid-cols-3 whitespace-nowrap rounded-xl px-2 py-4 sm:p-4 bg-[#F7F7F7] w-full text-[12px] leading-[20px] sm:text-[18px] sm:leading-[27px] font-[400]">
            <div class="flex flex-col gap-2.5">
              <p class="text-[#98989A]">Имя автора</p>
              <p>{{ article.author }}</p>
            </div>
            <div v-if="article.date" class="flex flex-col gap-2.5">
              <p class="text-[#98989A]">Дата публикации</p>
              <p>{{ $dayjs(article.date).format('DD.MM.YYYY') }}</p>
            </div>
            <div v-if="article.readTime" class="flex flex-col gap-2.5">
              <p class="text-[#98989A]">Время чтения</p>
              <p>{{ article.readTime }}</p>
            </div>
          </div>

          <div v-if="formattedContent.length" class="flex flex-col gap-6 w-full">
            <div
              v-for="(section, index) in formattedContent"
              :key="index"
              class="flex flex-col gap-4 rounded-lg"
            >
              <h2 class="text-[24px] leading-[32px] font-[600] text-[#1D1D1D] mb-2">
                {{ section.subheading }}
              </h2>
              <div class="flex flex-col gap-4" :class="getClass(section.class)">
                <div v-for="(para, pIndex) in section.content" :key="pIndex"  >
                  <p :class="getClass(para.class)" v-html="para.text"></p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-else class="w-full bg-[#F7F7F7] flex justify-center items-center">
      <p
        class="text-[30px] leading-[28px] font-[500] text-center w-full"
      >
        Пост не найден
      </p>
    </section>
  </div>
</template>

<style scoped>
</style>

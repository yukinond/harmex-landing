<script setup lang="ts">
import { uuid } from 'uuidv4'

const article = reactive({
  title: '',
  description: '',
  image: '',
  author: '',
  date: '',
  category: '',
  readTime: '',
  sections: [
    {
      subheading: '',
      headingClass: 'h2-default',
      content: [
        {
          text: '',
          bold: [] as { start: number; end: number }[],
          italic: [] as { start: number; end: number }[],
          underline: [] as { start: number; end: number }[],
          class: '',
        },
      ],
    },
  ],
})

const classOptions = [
  { value: 'violation-list', label: 'Список' },
  { value: 'step-list', label: 'Список шагов' },
  { value: 'default', label: 'Обычный текст' },
  { value: 'comment', label: 'Комментарий' },
  { value: 'block-blue', label: 'Синий блок' },
  { value: 'block-yellow', label: 'Желтый блок' },
  { value: 'block-red', label: 'Красный блок' },
]

const headingClassOptions = [
  { value: 'h1-default', label: 'H1 Обычный' },
  { value: 'h2-default', label: 'H2 Обычный' },
  { value: 'h3-default', label: 'H3 Обычный' },
  { value: 'h1-bold', label: 'H1 Жирный' },
  { value: 'h2-bold', label: 'H2 Жирный' },
  { value: 'h3-bold', label: 'H3 Жирный' },
]

const addSection = () => {
  article.sections.push({
    subheading: '',
    headingClass: 'h2-default',
    content: [
      {
        text: '',
        bold: [] as { start: number; end: number }[],
        italic: [] as { start: number; end: number }[],
        underline: [] as { start: number; end: number }[],
        class: 'default',
      },
    ],
  })
}

const addParagraph = (index: any) => {
  article.sections[index].content.push({
    text: '',
    bold: [] as { start: number; end: number }[],
    italic: [] as { start: number; end: number }[],
    underline: [] as { start: number; end: number }[],
    class: 'default',
  })
}

const saveArticle = async () => {
  const newArticle = {
    ...article,
    // date: new Date().toISOString().split('T')[0]
  }

  try {
    const response = await fetch('/api/articles/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newArticle),
    })
    const data = await response.json()
    console.log('data', data)
    // alert('Статья успешно сохранена!');
  } catch (error) {
    console.error('Ошибка при сохранении статьи:', error)
  }
}

const { formattedContent, getHeadingClass, getClass } = useFormattedContent(article)

const { upload } = useS3Object()
const loading = ref(false)
const imgName = ref('')

async function uploadToS3(event: Event) {
  loading.value = true
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  if (file.name.toLowerCase().endsWith('.webp')) {
    console.error('Нельзя загружать вебпикчи')
    loading.value = false
    return
  }

  imgName.value = file.name

  const fileName = 'harmex/landing1/articles/' + uuid()
  try {
    const result = await upload(file, { key: fileName })
    if (!result) {
      console.error('Не удалось загрузить фото')
      loading.value = false
      return
    }
    await useFetch('/api/images/openForPublic', {
      method: 'GET',
      params: {
        path: result.split('query/')[1],
      },
      watch: false,
    })
    article.image = `https://ozonmpportal.hb.vkcs.cloud/${
      result.split('query/')[1]
    }`
  } catch (error) {
    console.error('Ошибка загрузки изображения', error)
  } finally {
    loading.value = false
  }
}

const { $dayjs } = useNuxtApp()

const formatText = (
  sectionIndex: number,
  paragraphIndex: number,
  formatType: 'bold' | 'italic' | 'underline'
) => {
  const textarea = document.getElementById(
    `editor-${paragraphIndex}`
  ) as HTMLTextAreaElement

  if (textarea) {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = textarea.value.substring(start, end)

    if (!selectedText) return 

    const content = article.sections[sectionIndex].content[paragraphIndex]

    const selectionObject = { start, end }

    const existingIndex = content[formatType].findIndex(
      (entry: any) => entry.start === start && entry.end === end
    )

    if (existingIndex !== -1) {
      content[formatType].splice(existingIndex, 1)
    } else {
      content[formatType].push(selectionObject)
    }

    console.log(`Выделенный текст (${formatType}):`, selectionObject)

    textarea.setSelectionRange(end, end)
  }
}

</script>

<template>
  <div class="flex lg:flex-row flex-col justify-between">
    <section class="w-full max-w-[600px] mx-auto p-6 rounded-r-xl">
      <h1 class="text-2xl font-bold mb-4">Создание статьи</h1>
      <form @submit.prevent="saveArticle" class="space-y-4">
        <input
          v-model="article.title"
          type="text"
          placeholder="Заголовок"
          class="w-full p-2 border rounded"
        />
        <input
          v-model="article.description"
          type="text"
          placeholder="Описание"
          class="w-full p-2 border rounded"
        />
        <label
          class="block w-full p-2 border rounded bg-gray-100 text-center cursor-pointer"
        >
          {{
            loading
              ? 'Загрузка...'
              : !article.image
              ? 'Загрузить изображение'
              : imgName
          }}
          <input
            type="file"
            @change="uploadToS3"
            accept="image/*"
            class="hidden"
          />
        </label>

        <input
          v-model="article.author"
          type="text"
          placeholder="Автор"
          class="w-full p-2 border rounded"
        />
        <VueDatePicker v-model="article.date"></VueDatePicker>
        <input
          v-model="article.category"
          type="text"
          placeholder="Категория"
          class="w-full p-2 border rounded"
        />
        <input
          v-model="article.readTime"
          type="text"
          placeholder="Время чтения"
          class="w-full p-2 border rounded"
        />

        <div
          v-for="(section, index) in article.sections"
          :key="index"
          class="flex flex-col gap-2 border p-4 rounded"
        >
          <div class="flex space-x-2">
            <input
              v-model="section.subheading"
              placeholder="Подзаголовок"
              class="w-full p-2 border rounded"
            />
            <select v-model="section.headingClass" class="p-2 border rounded">
              <option
                v-for="option in headingClassOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div
            v-for="(paragraph, pIndex) in section.content"
            :key="pIndex"
            class="flex flex-col space-y-2"
          >
            <div class="flex space-x-2">
              <textarea
                :id="'editor-' + pIndex"
                v-model="paragraph.text"
                placeholder="Текст"
                class="w-full p-2 border rounded"
              ></textarea>
              <select v-model="paragraph.class" class="p-2 border rounded">
                <option
                  v-for="option in classOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            {{ paragraph }}
            <div class="flex space-x-2">
              <button
                type="button"
                @click="formatText(index, pIndex, 'bold')"
                class="bg-blue-500 text-white px-4 py-2 rounded font-bold"
              >
                Ж
              </button>
              <button
                type="button"
                @click="formatText(index, pIndex, 'italic')"
                class="bg-blue-500 text-white px-4 py-2 rounded italic"
              >
                К
              </button>
              <button
                type="button"
                @click="formatText(index, pIndex, 'underline')"
                class="bg-blue-500 text-white px-4 py-2 rounded underline"
              >
                Ч
              </button>
            </div>
          </div>
          <button
            type="button"
            @click="addParagraph(index)"
            class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Добавить параграф
          </button>
        </div>
        <button
          type="button"
          @click="addSection"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Добавить раздел
        </button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
          Сохранить статью
        </button>
      </form>
    </section>

    <section v-show="article.title" class="w-full flex flex-col gap-0 bg-[#EAEAEA38]">
      <div class="flex flex-col gap-5 px-6 py-8 sm:pt-[64px] sm:pb-[80px] items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#fef8f3] border-b border-[#0A0A0A12]">
        <h1 class="text-[28px] leading-[33px] sm:text-[48px] font-bold w-full max-w-[80%] text-center text-[#1D1D1D]">
          {{ article.title }}
        </h1>
        <p v-show="article.description" class="text-[18px] leading-[28px] font-[400] text-[#0A0A0AB2] text-center w-full max-w-[80%]">
          {{ article.description }}
        </p>
      </div>

      <div class="px-4 lg:px-6 py-20 flex flex-col items-center bg-white">
        <div class="flex flex-col w-full lg:max-w-[70%] items-center gap-6">
          <Nuxt-Img v-show="article.image" :src="article.image" class="w-full max-h-[320px] mx-auto object-cover rounded-2xl" />
          <div v-show="article.category" class="flex justify-between w-full">
            <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">
              {{ article.category }}
            </p>
            <span class="text-[#0A0A0AB2] flex items-center gap-3">
              <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" /> 0
            </span>
          </div>

          <div class="grid grid-cols-3 whitespace-nowrap rounded-xl px-2 py-4 sm:p-4 bg-[#F7F7F7] w-full text-[12px] leading-[20px] sm:text-[18px] font-[400]">
            <div v-show="article.author" class="flex flex-col gap-2.5">
              <p class="text-[#98989A]">Имя автора</p>
              <p>{{ article.author }}</p>
            </div>
            <div v-show="article.date" class="flex flex-col gap-2.5">
              <p class="text-[#98989A]">Дата публикации</p>
              <p>{{ $dayjs(article.date).format('DD.MM.YYYY') }}</p>
            </div>
            <div v-show="article.readTime" class="flex flex-col gap-2.5">
              <p class="text-[#98989A]">Время чтения</p>
              <p>{{ article.readTime }}</p>
            </div>
          </div>

          <div v-show="formattedContent.length" class="flex flex-col gap-6 w-full">
            <div v-for="(section, index) in formattedContent" :key="index" class="flex flex-col gap-4 rounded-lg">
              <h2 :class="getHeadingClass(section.headingClass)">
                {{ section.subheading }}
              </h2>

              <div class="flex flex-col gap-4" :class="getClass(section.class)">
                <p v-for="(para, pIndex) in section.content" :key="pIndex" :class="getClass(para.class)" v-html="para.text"></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-show="!article.title" class="w-full bg-[#F7F7F7] flex justify-center items-center">
      <p class="text-[30px] leading-[28px] font-[500] text-center w-full">Пост не найден</p>
    </section>
  </div>
</template>

<style scoped></style>

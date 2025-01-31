<script setup lang="ts">
// import { mainArticles } from '~/data/articles/articles';

const loadingArticles = ref(true)
const route = useRoute();
const article = ref<any>({});

async function getArticles() {
  loadingArticles.value = true
  const uuid = route.params.uuid
  if(uuid) {
    const { data } = await useFetch('/api/articles/getOne', {
        method: 'GET',
        query: {
            uuid: uuid,
        }
    })
    if(data.value) {
      article.value = data.value
    }
  }
  loadingArticles.value = false
}
getArticles()

const formattedContent = computed(() => {
  if (article.value.article) {
    return article.value.article.map((section: any) => ({
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

const { $dayjs } = useNuxtApp()
// onMounted(() => {
//   data.value = mainArticles.find((item: any) => item.id === route.params.uuid) || {};
// });
</script>

<template>
  <div v-if="article && article.title" class="flex flex-col gap-0 bg-[#EAEAEA38]">
    <section
      class="flex flex-col gap-5 px-6 py-8 sm:pt-[64px] sm:pb-[80px] items-center justify-center bg-gradient-to-b from-[#FFFFFF] from-[45%] to-[#fef8f3] to-[100%] border-b border-[#0A0A0A12]"
    >
      <h1
        class="text-[28px] leading-[33px] sm:text-[48px] sm:leading-[56px] font-[700] w-full max-w-[80%] text-center text-[#1D1D1D]"
      >
        {{ article.title }}
      </h1>
      <p
        class="text-[18px] leading-[28px] font-[400] text-[#0A0A0AB2] text-center w-full max-w-[80%]"
      >
        {{ article.description }}
      </p>
    </section>

    <section
      class="px-4 lg:px-6 py-20 lg:py-20 flex flex-col justify-center items-center bg-white"
    >
      <div
        class="flex flex-col w-full lg:max-w-[70%] items-center justify-center gap-6"
      >
        <Nuxt-Img
          :src="`https://ozonmpportal.hb.vkcs.cloud/harmex/landing1${article.image}`"
          class="w-full max-h-[320px] sm:max-h-[520px] 2xl:max-h-[720px] flex mx-auto object-cover rounded-2xl"
        />
        <div class="flex justify-between mb-1 w-full">
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
          <div class="flex flex-col gap-2.5">
            <p class="text-[#98989A]">Дата публикации</p>
            <p>{{ $dayjs(article.date).format('DD.MM.YYYY') }}</p>
          </div>
          <div class="flex flex-col gap-2.5">
            <p class="text-[#98989A]">Время чтения</p>
            <p>10 минут</p>
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
    </section>


    <section class="w-full b-white py-8 px-6 lg:px-16 lg:py-20 flex justify-center items-center bg-white">
            <div class="rounded-xl bg-[--primary] flex lg:flex-row flex-col gap-6 justify-between py-8 px-6 lg:p-16 w-full items-center">
                <div class="flex flex-col gap-6 text-white">
                    <h1 class="block-title">Не пропускайте важное!</h1>
                    <p class="font-[500] text-[16px] leading-[24px]">Получайте лучшие материалы прямо в Telegram</p>
                </div>
                <a href="https://t.me/harmexpro_bot" target="_blank" rel="noopener noreferrer" class="btn-primary !bg-[#323232] h-[58px] !px-8 flex items-center justify-center">
                    Подписаться на Telegram-канал
                </a>
            </div>
    </section>
  </div>
  <div v-else-if="loadingArticles" class="flex w-full justify-center items-center min-h-[calc(50vh-80px)]">
    <div class="lds-dual-ring "></div>
  </div>
  <div v-else class="w-full min-h-[calc(50vh-80px)] bg-[#F7F7F7] flex justify-center items-center">
      <p
        class="text-[30px] leading-[28px] font-[500] text-center w-full"
      >
        Пост не найден
      </p>
  </div>
</template>


<style scoped>
.title-gray {
    /* font-weight: 600;
    font-size: 28px;
    line-height: 36px; */
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #0A0A0A73;
    text-align: left;
    width: 100%;
}
.title {
    /* font-weight: 600;
    font-size: 28px;
    line-height: 36px; */
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: left;
    width: 100%;
}
.text {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    padding: 16px;
    text-align: left;
    width: 100%;
}

.block-blue {
  background-color: #E4F4FF;
  border-radius: 0px;
  padding: 16px;
}

.block-red {
  background-color: #FFE4F2;
  border-radius: 0px;
  padding: 16px;
}

.block-yellow {
  background-color: #F1BB6B;
  border-radius: 0px;
  padding: 16px;
}

.comment {
  border-left: 1px solid #E86B35;
  border-radius: 0px;
  padding: 16px;
}
</style>
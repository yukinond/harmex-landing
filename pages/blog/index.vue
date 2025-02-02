<script setup lang="ts">
// import { mainArticles } from '~/data/articles/articles';

const articles = ref([]) as any;
const mainArticles = ref([]) as any;
const loadingArticles = ref(false);
const currentPage = ref(1);
const totalPages = ref(1);
const limit = 15; 

async function getArticles(page = 1) {
  loadingArticles.value = true;
  
  const { data } = await useFetch('/api/articles/getArticles', {
    method: 'GET',
    query: { page, limit },
    watch: false,
  });

  if (data.value) {
    mainArticles.value = data.value.mainArticles; 
    articles.value = data.value.articles;
    totalPages.value = Math.ceil(data.value.totalCount / limit);
  }

  loadingArticles.value = false;
}
getArticles();


getArticles();

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    getArticles(page);
  }
}
</script>
<template>
    <div class="flex flex-col gap-0 bg-[#EAEAEA38]">
        <section class="flex flex-col gap-5 px-6 py-8 sm:pt-[64px] sm:pb-[80px] items-center justify-center bg-gradient-to-b from-[#FFFFFF] from-[45%] to-[#fef8f3] to-[100%] border-b border-[#0A0A0A12]">
          <h1 class="text-[28px] leading-[33px] sm:text-[48px] sm:leading-[56px] font-[700] max-w-[632px] text-center text-[#1D1D1D]">Откройте полезные инсайты и советы для развития вашего бизнеса</h1>
          <p class="text-[18px] leading-[28px] font-[400] text-[#0A0A0AB2] max-w-[480px] text-center">Всё о продвижении, репутации, маркетплейсах, интернет-магазинах и стриминговых платформах.</p>
        
        </section>

        <section class="w-full rounded-[12px] flex items-center py-8 px-6 lg:p-16 lg:py-20  bg-white flex-col gap-12">
            <h1 class="block-title">Популярные статьи</h1>
            <div class="flex lg:flex-row flex-col gap-6 w-full justify-center">
                <div v-if="mainArticles && mainArticles.length"  v-for="(item, index) in mainArticles" class="flex flex-col flex-1">
                    <Nuxt-Link :to="`/blog/${item.uuid}`" class="w-full bg-[#F7F7F7] rounded-lg">           
                        <Nuxt-Img :src="`https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/articles/main${index + 1}.png`" loading="lazy" class="w-full rounded-lg object-fi"  />
                    </Nuxt-Link>
                    <div class="px-[16px] py-8 flex flex-col gap-3">
                    <div class="flex justify-between mb-1">
                        <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">{{ item.category }}</p>
                        <span class="text-[#0A0A0AB2] flex items-center gap-3">
                        <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" />
                        {{ item.views }}
                        </span>
                    </div>
                    <Nuxt-Link :to="`/blog/${item.uuid}`" class="font-[600] text-[20px] leading-[28px]">{{ item.title }}</Nuxt-Link>
                    <p class="font-[400] text-[15px] leading-[24px] text-[#0A0A0AB2]">{{ item.description }} </p>
                    </div>
                </div>
                <div v-else-if="loadingArticles" class="lds-dual-ring"></div>
            </div>
        </section>

        <section class="w-full rounded-[12px] flex items-center py-8 px-6 lg:p-16 lg:py-20  bg-white flex-col gap-12">
            <h1 class="block-title">Выберите интересующую статью</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div class="flex flex-col flex-1" v-for="(item, index) in articles" :key="item.uuid">
                    <Nuxt-Link :to="`/blog/${item.uuid}`" class="w-full bg-[#F7F7F7] rounded-lg">
                        <Nuxt-Img :src="`https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/articles/main${index + 1}.png`" loading="lazy" class="w-full rounded-lg object-fi"  />
                    </Nuxt-Link>
                    <div class="px-[16px] py-8 flex flex-col gap-3">
                        <div class="flex justify-between mb-1">
                            <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">{{ item.category }}</p>
                        </div>
                        <Nuxt-Link :to="`/blog/${item.uuid}`" class="font-[600] text-[20px] leading-[28px]">{{ item.title }}</Nuxt-Link>
                        <p class="font-[400] text-[15px] leading-[24px] text-[#0A0A0AB2]">{{ item.description }}</p>
                        <div class="flex justify-between">
                            <div class="text-[#0A0A0AB2] flex items-center gap-3">
                                <Icon name="uil:calendar" class="w-6 h-6 text-[#0A0A0A73]" />
                                {{ new Date(item.date).toLocaleDateString() }}
                            </div>
                            <div class="text-[#0A0A0AB2] flex items-center gap-3">
                                <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" />
                                {{ item.views }}
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <div class="flex gap-1.5 justify-center">
                <button type="button" aria-label="Предыдущая страница"
                    class="btn-circle flex items-center justify-center"
                    @click="goToPage(currentPage - 1)"
                    :disabled="currentPage === 1">
                    <Icon name="uil:arrow-left" class="w-5 h-5" />
                </button>

                <button v-for="page in totalPages" :key="page" type="button"
                    class="flex btn-circle items-center justify-center"
                    :class="{ '!bg-gray-800 !text-white': page === currentPage }"
                    @click="goToPage(page)">
                    {{ page }}
                </button>

                <button type="button" aria-label="Следующая страница"
                    class="btn-circle flex items-center justify-center"
                    @click="goToPage(currentPage + 1)"
                    :disabled="currentPage === totalPages">
                    <Icon name="uil:arrow-right" class="w-5 h-5" />
                </button>
            </div>

        </section>

        <section class="w-full b-white py-8 px-6 lg:px-16 lg:py-20 flex justify-center items-center">
            <div class="rounded-xl bg-[--primary] flex lg:flex-row flex-col gap-6 justify-between py-8 px-6 lg:p-16 w-full items-center">
                <div class="flex flex-col gap-6 text-white">
                    <h1 class="block-title">Не пропускайте важное!</h1>
                    <p class="font-[500] text-[16px] leading-[24px]">Получайте лучшие материалы прямо в Telegram</p>
                </div>
                <a href="https://t.me/harmexpro_bot" target="_blank" rel="noopener noreferrer"  class="btn-primary !bg-[#323232] h-[58px] !px-8 flex items-center justify-center">
                    Подписаться на Telegram-канал
                </a>
            </div>
        </section>
    </div>
</template>

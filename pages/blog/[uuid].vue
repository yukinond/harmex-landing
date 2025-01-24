<script setup lang="ts">
</script>
<template>
    <div class="flex flex-col gap-0 bg-[#EAEAEA38]">
        <section class="flex flex-col gap-5 px-6 py-8 sm:pt-[64px] sm:pb-[80px] items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#FEF5EE]">
          <h1 class="text-[28px] leading-[33px] sm:text-[48px] sm:leading-[56px] font-700 max-w-[632px] text-center">Как повысить рейтинг вашего продукта и привлечь больше клиентов?</h1>
          <p class="text-[18px] leading-[28px] font-[400] text-[#0A0A0AB2] max-w-[480px] text-center">Одной из ключевых особенностей любой платформы для ведения блогов является возможность планировать публикацию постов на будущее.</p>
        </section>
        <section class=" py-20  flex flex-col justify-center items-center bg-white ">
            <div class="flex flex-col w-full max-w-[70%] items-center justify-center gap-6">
                <Nuxt-Img src="/img/finance.svg" class="w-full flex mx-auto"/>
                <div class="flex justify-between mb-1 w-full">
                    <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">Отзывы</p>
                    <span class="text-[#0A0A0AB2] flex items-center gap-3">
                    <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" />
                    300
                    </span>
                </div>
                <div class="grid grid-cols-3 rounded-xl p-4 bg-[#F7F7F7] w-full">
                    <div class="flex flex-col gap-2.5">
                        <p class="text-[18px] leading-[27px] font-[400] text-[#98989A]">Имя автора</p>
                        <p class="text-[18px] leading-[27px] font-[400] ">Доктор Эмили Уокер</p>
                    </div>
                </div>
                <h2 class="title-gray">Откройте для себя советы, лучшие практики и углубленные статьи, которые помогут вам оптимизировать вашу работу, упростить задачи и оставаться на шаг впереди в вашем пути к продуктивности.</h2>
                <p class="text bg-[#E4F4FF]">Как ведущая в мире компания по проведению автомобильных аукционов, Mecum Auction Company продала некоторые из самых известных автомобилей в мире. И хотя их цифровая платформа успешно развивалась на протяжении многих лет, она достигла своих пределов, что мешало им быстро создавать объявления. С помощью цифрового агентства Americaneagle.com, Mecum приняла новую,Composable архитектуру, что дало им уверенность в том, что их веб-сайт будет быстрым, производительным и надежным.</p>
                <p class="text bg-[#FFE4F2]">Как ведущая в мире компания по проведению автомобильных аукционов, Mecum Auction Company продала некоторые из самых известных автомобилей в мире. И хотя их цифровая платформа успешно развивалась на протяжении многих лет, она достигла своих пределов, что мешало им быстро создавать объявления. С помощью цифрового агентства Americaneagle.com, Mecum приняла новую,Composable архитектуру, что дало им уверенность в том, что их веб-сайт будет быстрым, производительным и надежным.</p>
                <p class="text bg-[#FFFAE4]">Как ведущая в мире компания по проведению автомобильных аукционов, Mecum Auction Company продала некоторые из самых известных автомобилей в мире. И хотя их цифровая платформа успешно развивалась на протяжении многих лет, она достигла своих пределов, что мешало им быстро создавать объявления. С помощью цифрового агентства Americaneagle.com, Mecum приняла новую,Composable архитектуру, что дало им уверенность в том, что их веб-сайт будет быстрым, производительным и надежным.</p>
                <h2 class="title">Решения, которые составляют архитектуру</h2>
                <p class="text bg-[#E4FFEE]">Как ведущая в мире компания по проведению автомобильных аукционов, Mecum Auction Company продала некоторые из самых известных автомобилей в мире. И хотя их цифровая платформа успешно развивалась на протяжении многих лет, она достигла своих пределов, что мешало им быстро создавать объявления. С помощью цифрового агентства Americaneagle.com, Mecum приняла новую,Composable архитектуру, что дало им уверенность в том, что их веб-сайт будет быстрым, производительным и надежным.</p>
            
            </div>
        </section>
        <section class="w-full b-white py-8 px-6 lg:px-16 lg:py-20 flex justify-center items-center">
            <div class="rounded-xl bg-[--primary] flex lg:flex-row flex-col gap-6 justify-between py-8 px-6 lg:p-16 w-full items-center">
                <div class="flex flex-col gap-6 text-white">
                    <h1 class="block-title">Не пропускайте важное!</h1>
                    <p class="font-[500] text-[16px] leading-[24px]">Получайте лучшие материалы прямо в Telegram</p>
                </div>
                <button class="btn-primary !bg-[#323232] h-[58px] !px-8">
                    Подписаться на Telegram-канал
                </button>
            </div>
        </section>
    </div>
</template>

<style scoped>
.title-gray {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #0A0A0A73;
    text-align: left;
    width: 100%;
}
.title {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
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
</style>
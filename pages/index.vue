<script lang="ts" setup>
import { data } from '~/data/content';

const appData = ref(data);
const harmexPluses = ref([
  {
    icon: 'mage:zap',
    title: 'Рост продаж', 
    text: 'Создаём эффект реального спроса, поднимая ваш продукт в ТОП по самым эффективным поисковым запросам для привлечения новых покупателей.',
  },
  {
    icon: 'mynaui:chat-messages',
    title: 'Положительные отзывы', 
    text: 'Добавляем достоверные оценки от активных пользователей, укрепляя доверие к вашему бренду у покупателей и площадок.',
  },
  {
    icon: 'hugeicons:chart-breakout-square',
    title: 'Укрепление имиджа бренда', 
    text: 'Поддержание высокого рейтинга создает превосходный образ компании, выделяя её среди конкурентов.',
  },
  {
    icon: 'streamline:chat-bubble-oval-smiley-1',
    title: 'Привлекательность бренда', 
    text: 'Делаем ваш продукт популярным в интернете, стимулируя спрос и повышая доверие покупателей.',
  },
])


const stepsBlockData = ref([
  {
    title: 'Пополнение баланса',
    text: 'Вы можете пополнить баланс с физической карты, бизнес-карты или расчётного счёта — быстро и удобно.',
    image: '/img/steps/step1.png',
  },
  {
    title: 'Выбор услуги',
    text: 'Ознакомьтесь с каталогом услуг или запросите необходимую услугу, подходящую для вашего бизнеса.',
    image: '/img/steps/step2.png',
  },
  {
    title: 'Создание заказа',
    text: 'Запланируйте выполнение заказа в любое удобное время — услуга будет выполнена точно в срок.',
    image: '/img/steps/step3.png',
  },
  {
    title: 'Отчётность',
    text: 'Вся информация о финансовых операциях, выполнении услуг и результатах доступна в вашем личном кабинете.',
    image: '/img/steps/step4.png',
  }
])

const sections = [
{
    title: 'С чего начать?',
    content: `
      Зарегистрируйтесь на нашей платформе — это займёт всего пару минут.<br><br>
      Определите количество необходимых услуг для достижения ваших целей. Если затрудняетесь, оставьте заявку, и наша команда поможет вам выбрать оптимальный пакет.<br><br>
      После консультации мы сразу приступим к продвижению ваших продуктов и бренда.<br><br>
      Весь процесс максимально прост и удобен, а результаты не заставят себя ждать.`,
  },

  {
    title: 'Блокируют ли карточки при продвижении?',
    content: `      Мы соблюдаем все регламенты онлайн-площадок, чтобы исключить любые риски блокировок, санкций или претензий.<br><br>
      Наша проверенная технология позволяет успешно продвигать товары на маркетплейсах и других онлайн-платформах.<br><br>
      Следуя нашим рекомендациям и работая над репутацией, рейтингом и продажами, вы всегда останетесь конкурентоспособными.`,
  },
  {
    title: 'Сроки выполнения услуг',
    content: `
      Все заказы выполняются строго в рамках регламента.<br><br>
      Например, если вы оформили заказ на услугу «Оценка продукта на WB» с 13:00 до 15:00 25.12.2024, он будет выполнен в указанный период.<br><br>
      По завершении вы сразу получаете отчёт о результатах, чтобы видеть динамику продвижения.
    `,
  },
  {
    title: 'Как отслеживать отчетность?',
    content: `
      Вся информация о выполнении услуг доступна в вашем личном кабинете.<br><br>
      Вы можете видеть:<br>
      - Финансовые операции.<br>
      - Прогресс выполнения заказов.<br>
      - Статистику по задачам.<br><br>
      Прозрачность и удобство — основа нашей работы.
    `,
  },
];

const openIndex = ref(0);

const handleAccordionToggle = (index:any) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const phone = ref('');

const formatPhone = () => {
  let rawValue = phone.value.replace(/\D/g, "");

  if (!rawValue.startsWith("7")) {
    rawValue = "7" + rawValue;
  }

  let formattedValue = "+7";

  if (rawValue.length > 1) {
    formattedValue += ` (${rawValue.substring(1, 4)}`;
  }
  if (rawValue.length >= 5) {
    formattedValue += `) ${rawValue.substring(4, 7)}`;
  }
  if (rawValue.length >= 8) {
    formattedValue += `-${rawValue.substring(7, 9)}`;
  }
  if (rawValue.length >= 10) {
    formattedValue += `-${rawValue.substring(9, 11)}`;
  }

  phone.value = formattedValue;

  if (rawValue.length > 11) {
    phone.value = phone.value.substring(0, 18);
  }
};

const handleFocus = () => {
  if (phone.value === "") {
    phone.value = "+7 ";
  }
};

const handleBlur = () => {
  if (phone.value === "+7 ") {
    phone.value = "";
  }
};
</script>

<template>
    <div class="flex flex-col gap-1.5">
      <section class="relative w-full lg:min-h-[600px] overflow-hidden rounded-[12px] flex items-center py-8 px-6 lg:px-16">

        <div 
          class="absolute inset-0 lg:w-full w-[250%] xs:-left-[50%] xs:w-[200%] sm:left-[-20%] sm:w-[150%] bg-cover bg-no-repeat lg:translate-x-[35%]"
          style="background-image: url('/img/reputationBg.png');">
        </div>

        <div 
          class="absolute inset-0 bg-gradient-to-r from-[#323232] via-[#323232] to-transparent filter blur-xs from-20% via-70% to-100% sm:from-10% sm:via-60% sm:to-100% lg:from-30% lg:via-60% lg:to-100% lg:w-3/4">
        </div>

        <div class="relative z-10 lg:p-6 text-white">
          <h1 class="text-2xl font-[600] lg:text-[60px] lg:leading-[72px] text-[30px] leading-[36px] mb-6">Репутация и продажи <br class="hidden lg:block"> под вашим контролем!</h1>
          <p class="text-[#ADADAD] lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] font-[500] mb-8 max-w-[60%] sm:max-w-[60%]">Harmex предоставляет инструменты, которые повысят ваши продажи, узнаваемость и привлекательность на популярных онлайн-площадках.</p>
          <div class="flex gap-3">
            <button @click="navigateTo('https://app.harmex.ru/auth', { external: true })" class="btn-primary lg:h-[60px] lg:!px-[32px]">
              Попробовать
            </button>
            <a href="#contact">
              <button class="btn-glass lg:h-[60px] lg:!px-[32px] flex gap-3 items-center whitespace-nowrap">
                <Icon name="lucide:phone" class="w-5 h-5"/>
                <span>Обратный звонок</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      <section class="w-full rounded-[12px] flex items-center py-8 px-6 lg:p-16  bg-white flex-col gap-12">
        <h1 class="block-title">Ознакомьтесь с площадками для продвижения</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full justify-center">
          <div v-for="item in appData" class="bg-[#F7F7F7] rounded-xl p-[32px] text-center flex flex-col gap-[12px] justify-center">
            <Icon :name="item.otherIcon" class="w-12 h-12 text-[--primary] flex mx-auto" />
            <p class="text-[#323232] text-[20px] leading-[24px] font-[600] whitespace-nowrap">{{ item.title }}</p>
            <p class="text-[#7C7C7C] text-[14px] leading-[20px] font-[400]">{{ item.subItems.length+  '+ площадок' }}</p>
          </div>
        </div>
      </section>

      <section class="w-full rounded-[12px] flex items-center lg:px-16 lg:py-24 py-8 px-6 bg-white flex-col gap-8 lg:gap-16">
        <h1 class="block-title">Почему выбирают HARMEX?</h1>
        <div class="image-container relative max-h-[200px] xs sm:max-h-[400px] lg:max-h-[476px] xl:max-h-[576px]">
          <Nuxt-img src="/img/bg.jpeg" alt="Background"/>
          <Nuxt-img src="/img/app.png" alt="Image" class="noblur absolute max-w-[90%] lg:max-w-[80%] top-2/3 2xl:top-[10%] 2xl:-translate-y-0 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 rounded-sm" />
        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="item in harmexPluses" class="bg-[#F4F4F4] p-6 rounded-[10px] w-full">
              <div class="bg-[--primary] text-white p-3 rounded-[10px] w-fit max-h-[49px] mb-16 "> 
                <Icon :name="item.icon" class="w-6 h-6"/>
              </div>
              <p class="mb-2 text-[#101828] font-[600] text-[18px] leading-[30px]">{{ item.title }}</p>
              <p class="text-[#475467] font-[400] text-[16px] leading-[24px]">{{ item.text }}</p>
            </div>
        </div>
        <a href="#contact">
          <button class="btn-primary flex gap-3">
            <Icon name="lucide:phone" class="w-5 h-5"/>
            <span>Обратный звонок</span>
          </button>
        </a>

      </section>

      <section class="w-full rounded-[12px] flex items-center py-8 px-6 lg:px-[137px] lg:py-[86px] bg-black flex-col gap-8 lg:gap-16 relative">
        <h1 class="font-[500] lg:text-[50px] lg:leading-[60px] text-[24px] leading-[28px] text-white max-w-[315px] sm:max-w-[684px] text-center">Простое управление услугами в 4 шага</h1>
        <Nuxt-Img src="/img/stepsBlockDecoration/firstBlockImage.svg" class="w-[28px] h-[32px] absolute z-10 top-[550px] hidden lg:block" />
        <Nuxt-Img src="/img/stepsBlockDecoration/secondBlockImage.svg" class="w-[28px] h-[19px] absolute z-10 top-[1100px] hidden lg:block" />
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 text-white ">
          <div v-for="(item, index) in stepsBlockData" :key="index" class="flex flex-col bg-[#121212] rounded-[21px] border border-[#202122] p-9 relative" >
            <p class="order-1 mb-9 text-[14px] leading-[17px] font-[500]">{{ index + 1 }}.</p>
            <Nuxt-Img 
              class="sm:w-[528px] sm:h-[300px] w-[274px] h-[154px] rounded-lg"
              :src="item.image" 
              :class="index % 4 === 0 || index % 4 === 1 ? 'order-4 mt-9' : 'order-2 mb-9'" 
            />
            <p class="mb-3.5 font-[500] leading-[26px] text-[21px]" :class="index % 4 === 0 || index % 4 === 1 ? 'order-3' : 'order-3'">{{ item.title }}</p>
            <p class="text-[14px] leading-[17px] font-[400] max-w-[274px]" :class="index % 4 === 0 || index % 4 === 1 ? 'order-3' : 'order-3'">{{ item.text }}</p>
            <Nuxt-Img v-if="index == 0" src="/img/stepsBlockDecoration/dashedLine.svg" class="w-[630px] h-[23px] absolute -bottom-[5%] translate-x-1/2 hidden lg:block" />
            <Nuxt-Img v-if="index !== stepsBlockData.length - 1" src="/img/stepsBlockDecoration/connector.svg" class="h-10 w-10 absolute -bottom-10 left-[45%] block lg:hidden z-[8]" />
          </div>
        </div>
        <a href="#contact">
          <button class="btn-primary flex gap-3">
            <Icon name="lucide:phone" class="w-5 h-5"/>
            <span>Обратный звонок</span>
          </button>
        </a>
      </section>

      <section class="w-full rounded-[12px] flex items-center lg:px-[66px] py-8 px-6 lg:py-20 bg-white flex-col ">
        <h1 class="lg:text-[30px] text-[24px] leading-[36px] font-[700] mb-10 lg:mb-12">До и После</h1>
        <p class="text-[#4B5563] text-[16px] font-[400] leading-[25px] mb-8">Сравните карточки до работы с нами (низкий рейтинг) и после (4.9). Примеры наглядно показывают, как изменяется эффективность.</p>
        <Slider />

      </section>

      <section class="w-full rounded-[12px] flex items-center py-8 px-6 lg:p-16  bg-white flex-col gap-12">
        <h1 class="block-title">Блоги</h1>
        <div class="flex lg:flex-row flex-col gap-6 w-full sm:max-w-[60%] lg:w-full">
          <div class="flex flex-col flex-1">
            <!-- <Nuxt-Img :src="'/img/blog.svg'" class="w-full h-1/2" /> -->
            <div class="min-h-[248px] w-full bg-[#F7F7F7] rounded-lg"></div>
            <div class="px-[16px] py-8 flex flex-col gap-3">
              <div class="flex justify-between mb-1">
                <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">Отзывы</p>
                <span class="text-[#0A0A0AB2] flex items-center gap-3">
                  <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" />
                  300
                </span>
              </div>
              <p class="font-[600] text-[20px] leading-[28px]">Как повысить рейтинг вашего продукта и привлечь больше клиентов?</p>
              <p class="font-[400] text-[15px] leading-[24px] text-[#0A0A0AB2]"> One key feature of any blogging platform is the ability to schedule posts for future publication. </p>
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <!-- <Nuxt-Img :src="'/img/blog.svg'" class="w-full h-1/2" /> -->
            <div class="min-h-[248px] w-full bg-[#F7F7F7] rounded-lg"></div>
            <div class="px-[16px] py-8 flex flex-col gap-3">
              <div class="flex justify-between mb-1">
                <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">Отзывы</p>
                <span class="text-[#0A0A0AB2] flex items-center gap-3">
                  <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" />
                  300
                </span>
              </div>
              <p class="font-[600] text-[20px] leading-[28px]">Как повысить рейтинг вашего продукта и привлечь больше клиентов?</p>
              <p class="font-[400] text-[15px] leading-[24px] text-[#0A0A0AB2]"> One key feature of any blogging platform is the ability to schedule posts for future publication. </p>
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <!-- <Nuxt-Img :src="'/img/blog.svg'" class="w-full h-1/2" /> -->
            <div class="min-h-[248px] w-full bg-[#F7F7F7] rounded-lg"></div>
            <div class="px-[16px] py-8 flex flex-col gap-3">
              <div class="flex justify-between mb-1">
                <p class="text-[16px] leading-[24px] font-[500] text-[--primary]">Отзывы</p>
                <span class="text-[#0A0A0AB2] flex items-center gap-3">
                  <Icon name="uil:eye" class="w-6 h-6 text-[#0A0A0A73]" />
                  300
                </span>
              </div>
              <p class="font-[600] text-[20px] leading-[28px]">Как повысить рейтинг вашего продукта и привлечь больше клиентов?</p>
              <p class="font-[400] text-[15px] leading-[24px] text-[#0A0A0AB2]"> One key feature of any blogging platform is the ability to schedule posts for future publication. </p>
            </div>
          </div>
        </div>
        <Nuxt-Link to="/blog" class="btn-primary flex gap-3 items-center">
            <span>Перейти в блог</span>
            <Icon name="uil:arrow-right" class="w-6 h-6"/>
        </Nuxt-Link>
      </section>

      <section class="w-full rounded-[12px] flex items-center py-8 px-6 lg:py-20 lg:px-[195px] bg-white flex-col lg:gap-12 gap-14">

        <div class="flex lg:flex-row flex-col justify-between gap-8">
          <div class="flex flex-col justify-start ">
            <h1 class="text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] font-[600] max-w-[507px] !text-left">Часто задаваемые вопросы</h1>
            <Nuxt-Img src="/img/questMan.svg" class="hidden lg:flex max-w-[240px] max-h-[285px]" />
          </div>

          <div class="lg:w-1/2 lg:max-w-1/2 w-full ">
            <Accordion
              v-for="(section, index) in sections"
              :key="index"
              :title="section.title"
              :isOpen="openIndex === index"
              @update:isOpen="handleAccordionToggle(index)"
            >
              <div v-html="section.content"></div>
            </Accordion>

          </div>  
        </div>
      </section>

      <section id="contact" class="w-full rounded-[12px] flex lg:flex-row flex-col items-center py-8 px-6 lg:p-16 bg-[--primary] gap-6 lg:gap-12 justify-between">
        <div class="flex flex-col gap-6 max-w-[100%] sm:max-w-[50%] xl:max-w-[36%] text-white">
          <h1 class="text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] font-[600] !text-left">Будьте активнее, проще и ближе к своим клиентам с Harmex!</h1>
          <p class="font-[500] text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px]">Есть вопросы, пожелания или предложения? Напишите нам или оставьте заявку — мы свяжемся с вами максимально быстро!</p>
        </div>
        <div class="flex flex-col gap-3 max-w-[100%] sm:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
          <div class="flex lg:flex-row flex-col gap-1.5">
            <input
              id="phone-input"
              v-model="phone"
              placeholder="Введите номер телефона"
              @focus="handleFocus"
              @blur="handleBlur"
              @input="formatPhone"
              class="w-full px-4 py-3 text-[14px] font-medium rounded-[10px] border border-gray-300 h-[60px]"
            />
          <button class="btn-black">Отправить</button>
          </div>
          <p class="font-[400] text-[12px] leading-[16px] text-[#323232A3]">
            Согласен на обработку и хранение моих персональных данных в соответствии с <a class="text-[#323232]" href="#">Условиями</a>
          </p>
        </div>
      </section>
    </div>
</template>
  

<style scoped>
.image-container {
  width: 100%;
  overflow: hidden; 
  border-radius: 24px;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover; 
  object-position: center; 
  filter: blur(4px);
}

.image-container .noblur {
  filter: none;
}



@meddia (max-width: 640px) {
  .xs {
    max-height: 300px;
  }
}

</style>

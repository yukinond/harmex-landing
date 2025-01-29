<script lang="ts" setup>

const route = useRoute()
const mp = ref({}) as any
const persistedStore = usePersistedStore();
const store = useMainStore();

onMounted(() => {
  store.info[persistedStore.current].title ? mp.value = store.info[persistedStore.current] : navigateTo('/')
})

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

const emojis = {
  start: '💼',
  growth: '🚀',
  support: '📈',
}

const stepsBlock = ref([
  {
    title: 'Пополнение баланса',
    description: 'Вы можете пополнить баланс с физической карты, бизнес-карты или расчётного счёта — быстро и удобно.',
    image: '/img/mpSteps/step1.png',
  },
  {
    title: 'Выбор услуги',
    description: 'Ознакомьтесь с каталогом услуг или запросите необходимую услугу, подходящую для вашего бизнеса.',
    image: '/img/mpSteps/step2.png',
  },
  {
    title: 'Создание заказа',
    description: 'Запланируйте выполнение заказа в любое удобное время — услуга будет выполнена точно в срок.',
    image: '/img/mpSteps/step3.png',
  },
  {
    title: 'Отчётность',
    description: 'Вся информация о финансовых операциях, выполнении услуг и результатах доступна в вашем личном кабинете.',
    image: '/img/mpSteps/step4.png',
  },
])

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

const slides = [
  { type: "desktop", content: "/img/slider/finance.svg" },
  { type: "desktop", content: "/img/slider/step2.svg" },
];

const currentIndex = ref(0);

const content =  [
    {
      title: "Безопасность",
      value: 'security',
      icon: 'bitcoin-icons:shield-outline',
      // image: "/path/to/security-image.jpg",
      points: [
        "Автоматическая защита: Круглосуточная безопасность без вашего участия.",
        "Никаких скрытых затрат: Вся инфраструктура уже включена — ничего докупать не нужно.",
        "Соблюдение стандартов: Мы строго следим за нормами безопасности маркетплейсов.",
        "Круглосуточный мониторинг: Ваши данные под защитой 24/7.",
        "Контроль покупок: Ограничение до 6 покупок в месяц для вашего спокойствия.",
        "Верификация аккаунтов: Каждый пользователь проходит строгую проверку."
      ]
    },
    {
      title: "Скорость",
      value: 'speed',
      icon: 'formkit:time',
      // image: "/path/to/speed-image.jpg",
      points: [
        "Планирование заказов: Создавайте заказы на дни и недели вперед в пару кликов.",
        "Отслеживание в реальном времени: Все статусы заказов доступны мгновенно.",
        "Экономия времени: Освобождаем до 3 часов в день для важных задач.",
        "Автоматическая отчетность: Готовые отчеты сразу после завершения заказов.",
        "Упрощенные финансовые операции: Все расчеты на нашей стороне."
      ]
    },
    {
      title: "Результативность",
      value: 'results',
      icon: 'ph:intersect-duotone',
      // image: "/path/to/results-image.jpg", 
      points: [
        "Автоматизация процессов: Решайте задачи без лишних действий.",
        "Все в одном месте: Личный кабинет как центр управления.",
        "ИИ-помощники: Умные алгоритмы для быстрых и эффективных решений.",
        "Поддержка многоканальных продаж: Управляйте товарами и заказами с разных маркетплейсов и интернет-магазинов в одном интерфейсе.",
        "Персонализированные рекомендации: ИИ-алгоритмы предлагают оптимальные стратегии для повышения продаж на основе ваших данных."
      ]
    }
]
const currentContent = ref('security');
const contentBlock = ref(null);
const blockHeight = ref(0);

const getBlockHeight = async () => {
  await nextTick(); 

  if (contentBlock.value && contentBlock.value.length > 0) {
    const firstBlock = contentBlock.value[0];
    
    if (firstBlock) {
      blockHeight.value = firstBlock.offsetHeight; 
    }
  }
};


onMounted(() => {
  getBlockHeight();
});

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % stepsBlock.value.length; 
  }, 3500);
  setInterval(() => {
  const currentIndex = content.findIndex(item => item.value === currentContent.value);

  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % content.length;

    currentContent.value = content[nextIndex].value;
  }
}, 30000);
});
</script>

<template>
    <div class="flex flex-col gap-0 bg-[#EAEAEA38]">
      <section class="flex flex-col gap-5 px-6 py-8 sm:pt-[64px] sm:pb-[80px] items-center justify-center bg-gradient-to-b from-[#FFFFFF] from-[45%] to-[#fef8f3] to-[100%] border-b border-[#0A0A0A12]">
        <h1 class="text-[28px] leading-[33px] sm:text-[48px] sm:leading-[56px] font-[700] max-w-[632px] text-center text-[#1D1D1D]"> Репутация и продажи под вашим контролем на {{ mp.title }}!</h1>
        <p class="text-[18px] leading-[28px] font-[400] text-[#0A0A0AB2] max-w-[480px] text-center">Увеличивайте заказы и положительные отзывы 24/7 с Harmex — ваш надежный помощник в борьбе за высокий рейтинг и доверие клиентов!</p>
        <div class="flex gap-2">
            <button @click="navigateTo('https://app.harmex.ru/auth', { external: true })" class="btn-primary lg:h-[60px] lg:!px-[32px] !max-h-[40px] flex items-center">
              Попробовать
              <Icon name="lucide:arrow-right" class="w-5 h-5 ml-1"/>
            </button>
            <a href="#contact">
              <button class="btn-primary flex gap-3 !bg-white !font-[400] !text-black !max-h-[40px]">
                <Icon name="lucide:phone" class="w-5 h-5"/>
                <span>Обратный звонок</span>
              </button>
            </a>
        </div>
      </section>

      <section class="bg-white px-6 lg:px-[120px] py-12 lg:py-14 flex flex-col gap-14">
        <div class="flex flex-col justify-center items-center gap-5">
          <h1 class="block-title">Почему Harmex важен для вашего бизнеса?</h1>
          <p class="text-[18px] leading-[28px] font-[400] text-[#0A0A0AB2] max-w-[480px] text-center">Скрытые ошибки, которые мешают вам выйти в топ и увеличить продажи на {{ mp.title }}</p>
        </div>
        <div class="flex justify-between gap-8  lg:w-[50%] max-w-[600px] mx-auto">
          <div class="flex flex-col gap-6 items-center" v-for="item in content">
            <button @click="[currentContent = item.value]" class="flex justify-center items-center btn-primary w-16 h-16" :class="{ '!bg-[#F7F7F7] !text-black': item.value !== currentContent }">
              <Icon :name="item.icon" class="w-7 h-7"/>
            </button>
            <p class="md:text-[20px] text-[12px] font-[600] leading-[30px]">{{ item.title }}</p>
          </div>
        </div>

        <div id="slideshow"  class="relative overflow-hidden min-h-[400px] w-full -mb-32 lg:-mb-0  sm:my-0 z-0" :style="blockHeight !== 0 ? { height: blockHeight+150 + 'px' } : {height: '800px'}" >
          <transition-group name="fade" tag="div">
            <div
              v-for="(slide, index) in content"
              :key="index"
              v-show="currentContent === slide.value"
              class="absolute w-full h-full lg:h-[580px] xl:h-[100%] -mb-20"
            >
              <div class="flex w-full justify-between lg:flex-row flex-col p-4 md:p-12 gap-4 md:gap-12 bg-[#F7F7F7] rounded-2xl overflow-hidden" ref="contentBlock" :style="blockHeight !== 0 ? { height: blockHeight + 'px' } : {}">          
                <div class="flex flex-col gap-6 md:gap-8 max-w-1/3">
                  <p class="text-[18px] leading-[24px] md:font-[600] md:text-[24px] md:leading-[29px]">Как эту задачу решил Harmex:</p>
                  <div class="flex gap-3 items-center" v-for="item in content.find(item => item.value === currentContent).points">
                    <div class="w-[20px] h-[20px] flex items-center justify-center">
                      <Icon name="icon-park-solid:check-one" class="w-[20px] h-[20px] text-[--primary]"/>
                    </div>
                    <p class="text-[#5A556B] text-[16px] leading-[24px] font-[500]">         
                      <span>{{ item.split(':')[0] }}:</span>
                      <br />
                      <span>{{ item.split(':')[1].trim() }}</span> 
                    </p>
                  </div>
                </div>
                <div class="relative w-full lg:max-w-[566px] max-h-[400px] lg:max-h-full lg:h-full flex lg:my-auto">
                  <Nuxt-img 
                    :src="`/img/buisnessBlock/${index+1}.png`" 
                    class="w-full h-full object-contain lg:object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </section>


      <section class="bg-white py-14 px-6 lg:px-[120px] lg:pt-14 lg:pb-[112px] flex flex-col gap-8 lg:gap-14 justify-center items-center w-full" >
        <h1 class="block-title text-center"> Почему выбирают HARMEX?</h1>
        <Nuxt-Img src="/img/harmex.svg" class="w-full max-w-[1120px] max-h-[700px] flex mx-auto"/>
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
          <button class="btn-primary flex gap-3 !rounded-3xl !bg-[#04201A] !font-[400]">
            <Icon name="lucide:phone" class="w-5 h-5"/>
            <span>Обратный звонок</span>
          </button>
        </a>
      </section>

      <section class="py-8 px-6 lg:py-20 lg:px-28 bg-white flex flex-col gap-14">
        <h1 class="block-title max-w-[652px] mt-10 !text-left">
          Простое управление услугами в 4 шага
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col gap-1 justify-between" v-for="(item, index) in stepsBlock">
            <div class="flex flex-col gap-1">
              <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:inline-block" 
                :class="{ 'after:bg-[linear-gradient(to_right,_#6366F1_50%,_white_50%)]': index === 0, 'after:bg-white': index !== 0 }">
                <span class="flex items-center justify-center w-8 h-8 rounded-full shrink-0" 
                      :class="{ 'bg-[#6366F1] text-white': index === 0, 'bg-white border': index !== 0 }">
                  {{ index+1 }}
                </span>
              </li>
              <p class="font-[600] text-[20px] leading-[28px] mr-6">{{ item.title }}</p>
              <p class="text-[#0A0A0AB2] text-[18px] leading-[28px] mr-6">{{ item.description }}</p>
            </div>
          </div>
          
        </div>
        <!-- <div class="relative w-full overflow-hidden justify-center">
            <div class="flex w-full items-center overflow-y-auto max-w-[50%] mx-auto">
              <Nuxt-Img
                v-for="(item, index) in stepsBlock"
                :key="index"
                :src="item.image"
                class="w-full h-auto max-w-[100%] object-contain mb-6"
              />
            </div>
        </div> -->

      </section>

      <section class="bg-white flex flex-col py-0 px-0 lg:px-16 items-center justify-center">
        <div id="slideshow" class="relative overflow-hidden h-[400px] lg:min-h-[800px] w-full -mt-5 -mb-10 sm:my-0 z-0">
          <transition-group name="fade" tag="div">
            <div
              v-for="(slide, index) in stepsBlock"
              :key="index"
              v-show="currentIndex === index"
              class="absolute w-full h-full lg:h-[580px] xl:h-[100%]"
            >
              <NuxtImg 
                :src="slide.image"
                class="w-full lg:w-[90%]  object-fill flex max-w-[1500px] mx-auto rounded-md" 
                alt="Finance image"
              />
            </div>
          </transition-group>
        </div>
        <a href="#contact" class="my-10 -mt-10 sm:mt-0 lg:-mt-32 xl:mt-20 z-10">
          <button class="btn-primary flex gap-3 !rounded-3xl !bg-[#04201A] !font-[400]">
            <Icon name="lucide:phone" class="w-5 h-5"/>
            <span>Обратный звонок</span>
          </button>
        </a>
      </section>

      <section class="w-full flex flex-col gap-16 py-8 px-6 lg:py-24 lg:px-28">
        <h1 class="block-title">Тарифы для любого бизнеса</h1>
        <div class="flex lg:flex-row flex-col gap-5">
          <div
            v-if="mp"
            v-for="(item, key) in mp.price"
            :key="key"
            class="flex flex-col gap-4 flex-1 p-8 rounded-2xl bg-white"
          >
            <div class="flex justify-between">
              <p class="text-[18px] leading-[28px] text-[#667085]">
                <span class="emoji-container">{{ emojis[key] }}</span> {{ item.title }}
              </p>
              <span
                class="text-[--primary] bg-[#FFF0E9] rounded-2xl py-1 px-3"
                v-if="item.title === 'Рост'"
              >
                Популярный
              </span>
            </div>
            <p class="text-[50px] leading-[60px] font-[600]">от {{ item.value }}</p>
            <p class="text-[#667085] text-[16px] leading-[24px]">{{ item.description }}</p>
            <button class="mt-4 btn-primary h-[48px] text-[16px] leading-[24px]" @click="navigateTo('https://app.harmex.ru/auth', { external: true })">Выбрать тариф</button>
          </div>

        </div>
      </section>

      <section class="w-full rounded-[12px] flex items-center lg:px-[64px] py-8 px-6 lg:py-20 bg-white flex-col ">
          <h1 class="lg:text-[30px] text-[24px] leading-[36px] font-[700] mb-10 lg:mb-12">До и После</h1>
          <p class="text-[#4B5563] text-[16px] font-[400] leading-[25px] mb-8">Сравните карточки до работы с нами (низкий рейтинг) и после (4.9). Примеры наглядно показывают, как изменяется эффективность.</p>
          <Slider />
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

#slideshow > div { 
  position: absolute; 
  top: 10px; 
  left: 10px; 
  right: 10px; 
  bottom: 10px; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateX(0); 
}

.fade-leave-to {
  transform: translateX(-100%);
}
@media (min-width: 2000px) {
  .max-w {
    max-width: 400px;
  }
}
</style>
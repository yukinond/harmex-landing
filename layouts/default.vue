<script lang="ts" setup>
import { data } from '~/data/content';

const popupData = ref(data);
const persistedStore = usePersistedStore();

const currentPopup = ref('mp');
const popupVisible = ref(false);

const toggleDropdown = () => {
  const dropdown = document.getElementById('myDropdown')
  popupVisible.value = !popupVisible.value
}

const handleClickOutside = (e: any) => {
  const mobileDropdown = document.getElementById('myDropdownMobile')
  if(mobileDropdown) {
    return
  }
  const dropdown = document.getElementById('myDropdown')
  if(!dropdown) {
    return
  }
  if (!e.target.matches('.dropbtn') && !dropdown.contains(e.target)) {
    if(popupVisible.value) {
      popupVisible.value = false
    }
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};

const route = useRoute()

function navigateToSite(url:string, disabled:boolean) {
  popupVisible.value = false
  isOpen.value = false
  document.body.classList.remove('no-scroll');
  persistedStore.setCurrent(url)
  navigateTo(`/info/${persistedStore.current}`)
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div :class="{ 'px-1.5' : route.name === 'index',  }">
    <header id="header" class="flex justify-between items-center h-[84px] px-3 bg-white " :class="{ 'mb-1.5 rounded-b-xl shadow-[2px_1px_7px_1px_rgba(0,_0,_0,_0.1)]' : route.name === 'index', 'lg:px-[calc(10%)]' : route.name !== 'index'}">
      <div class="flex gap-6">
        <Nuxt-Link to="/">
          <nuxt-img class="w-[88px] h-[28px] ml-3" src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/logo.svg" loading="lazy"></nuxt-img>
        </Nuxt-Link>

        <div class="dropdown lg:flex hidden ">
          <button type="button" aria-label="Открыть каталог" class="dropbtn font-[500] text-[14px] leading-[17.5px] flex my-auto gap-1.5" @click="toggleDropdown">
            Каталог 
            <Icon :name="popupVisible ? 'icon-park-outline:up' : 'icon-park-outline:right'" class="w-4 h-5 pointer-events-none" />
          </button>
          <Transition>
            <div v-if="popupVisible" class="dropdown-content full-width mt-8" id="myDropdown">
              <div  class="w-full rounded-md p-6 flex bg-white shadow-[0px_-1px_5px_-2px_rgba(0,_0,_0,_0.1)]">
                <div class="flex flex-col gap-4 font-normal w-[25%] mr-6">
                  <button type="button" :aria-label="`Открыть ${item.title}`" v-for="item in popupData" :key="item.value" class="flex justify-between items-center w-full hover:text-[--primary] group" :class="{ 'text-[--primary]': item.value === currentPopup }" @click="currentPopup = item.value">
                    <div class="flex gap-1.5 items-center">
                      <Icon :name="item.icon" class="w-5 h-5 text-[#7c7c7c] group-hover:text-[--primary]" :class="{ 'text-[--primary]': item.value === currentPopup }" />
                      <span class="font-[500] text-[16px] leading-[24px]">{{ item.title }}</span>
                    </div>            
                    <Icon 
                      name="icon-park-outline:right" 
                      class="w-4 h-5" 
                      :class="item.value === currentPopup ? 'mr-0' : 'mr-1'" 
                    />
                  </button>
                </div>

                <div class="vertical-divider"></div>

                <div class="flex flex-col gap-4 ml-6">
                  <button type="button" :aria-label="`Перейти ${subItem.title}`" @click="navigateToSite(subItem.value, subItem.disabled)" :disabled="subItem.disabled" v-for="subItem in popupData.find(item => item.value === currentPopup).subItems || []" 
                      :key="subItem.value" 
                      class="flex gap-1.5 items-center disabled:text-[#f4f4f4]">
                    <span class="font-[400] text-[14px] leading-[26px] text-[#303940]">{{ subItem.title }}</span>
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div> 

        <nav class="items-center gap-6 font-[500] text-[14px] leading-[17.5px] lg:flex hidden">
          <Nuxt-Link to="/blog">Блог</Nuxt-Link>
          <Nuxt-Link to="/#reviews">Кейсы</Nuxt-Link>
          <Nuxt-Link :to="route.name === 'index' ? '#contact' : '/#footer'">Помощь</Nuxt-Link>
          <a href="#">Калькулятор</a>
        </nav>
      </div>
      <div class="h-full lg:flex hidden">
        <div class="flex items-center h-full" :class="{ 'px-1.5 border-l border-l-[#E8E8E8]': route.name === 'index' }">
          <a href="https://app.harmex.ru/register" target="_blank" rel="noopener noreferrer" class="btn-ghost flex items-center">
            <Icon name="ep:user" class="w-5 h-5" />
            Войти
          </a>
        </div>
        <div class="flex items-center h-full" :class="{ 'pl-3 border-l border-l-[#E8E8E8] ': route.name === 'index' }">
          <button type="button" aria-label="Регистрация" href="https://app.harmex.ru/register" target="_blank" rel="noopener noreferrer" class="btn-primary">
            Регистрация
          </button>
        </div>
      </div>
      <button type="button" aria-label="Бургер" class="btn-circle lg:hidden !bg-transparent !border-[#E5E9EB]">  
        <div
          ref="navIcon"
          id="nav-icon3"
          :class="{ open: isOpen }"
          @click="toggleOpen"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

    <!-- Mobile -->
      <div
        v-if="isOpen"
        class="overlay"
        @click="toggleOpen"
      ></div>
      <Transition name="slide-down">
      <nav
        v-if="isOpen"
        id="mobile-menu"
        class="fixed flex-col top-0 left-0 w-full bg-white z-50 flex gap-5 items-start justify-start py-3 px-5 lg:hidden "
        :class="popupVisible ? 'h-screen' : 'h-fit'"
      >
        <button type="button" aria-label="Бургер" class="btn-circle lg:hidden !bg-transparent !border-[#E5E9EB]">  
          <div
            ref="navIcon"
            id="nav-icon3"
            :class="{ open: isOpen }"
            @click="toggleOpen"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="flex items-center w-full">
          <a href="https://app.harmex.ru/register" target="_blank" rel="noopener noreferrer" class="btn-primary">
            Регистрация
          </a>
        </div>
        <div class="flex items-center  w-full">
          <a href="https://app.harmex.ru/register" target="_blank" rel="noopener noreferrer" class="btn-ghost  flex items-center" >
            <Icon name="ep:user" class="w-5 h-5 -ml-3.5" />
            Войти
          </a>
        </div>
        
        <div class="gap-6 font-[500] text-[14px] leading-[17.5px] flex-col flex items-start">
          <Nuxt-Link to="/blog" @click="toggleOpen">Блог</Nuxt-Link>
          <Nuxt-Link class="text-left" to="/#reviews" @click="toggleOpen">Кейсы</Nuxt-Link>
          <Nuxt-Link to="/#contact" @click="toggleOpen">Помощь</Nuxt-Link>
          <a class="text-left" href="#" @click="toggleOpen">Калькулятор</a>
        </div>
        <div class="dropdown ">
          <button type="button" aria-label="Открыть каталог" class="dropbtn font-[500] text-[14px] leading-[17.5px] flex my-auto gap-1.5" @click="toggleDropdown">
            Каталог 
            <Icon :name="popupVisible ? 'icon-park-outline:up' : 'icon-park-outline:right'" class="w-4 h-5 pointer-events-none" />
          </button>
          <Transition>
            <div v-if="popupVisible" class="dropdown-content full-width mt-2" id="myDropdownMobile">
              <div  class="w-full rounded-md flex flex-col bg-white">
                <div class="flex flex-col gap-4 font-normal w-full py-3 px-4">
                  <div v-for="item in popupData" :key="item.value" class="flex flex-col gap-4">
                    <button type="button" :aria-label="`Открыть ${item.title}`" class="flex justify-between items-center w-full hover:text-[--primary] group" :class="{ 'text-[--primary]': item.value === currentPopup }" @click="currentPopup = item.value">
                      <div class="flex gap-1.5 items-center">
                        <Icon :name="item.icon" class="w-5 h-5 text-[#7c7c7c] group-hover:text-[--primary]" :class="{ 'text-[--primary]': item.value === currentPopup }" />
                        <span class="font-[500] text-[16px] leading-[24px]">{{ item.title }}</span>
                      </div>            
                      <Icon 
                        name="icon-park-outline:right" 
                        class="w-4 h-5" 
                        :class="item.value === currentPopup ? 'mr-0' : 'mr-1'" 
                      />
                    </button>
                    <div v-if="currentPopup === item.value" class="flex flex-col gap-4">
                      <button type="button" :aria-label="`Перейти ${subItem.title}`" :disabled="subItem.disabled" @click="navigateToSite(subItem.value, subItem.disabled)" v-for="subItem in item.subItems" 
                          :key="subItem.value" 
                          class="flex gap-1.5 items-center">
                        <span class="font-[400] text-[14px] leading-[26px] text-[#303940]">{{ subItem.title }}</span>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </Transition>
        </div> 
      </nav>
    </Transition>
    </header>
    <slot class="!z-1" />
    <footer id="footer" class="mt-1.5 rounded-xl rounded-b-none bg-[#323232] px-6 py-8 lg:p-16 flex flex-col gap-12">
      <Nuxt-Img src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/footer/logo-white.svg" class="w-full max-w-[139px] min-h-[44px]" loading="lazy"/>
      <div class="flex sm:flex-row flex-col justify-between gap-12">
        <div class="flex sm:flex-row flex-col gap-12 lg:gap-20 flex-wrap">
          <div v-for="item in popupData.slice(0, 4)" :key="item.value" class="flex flex-col gap-3 font-[600] text-[14px] leading-[18px]">
            <p class="text-white">{{ item.title }}</p>
            <div v-for="subItem in item.subItems.slice(0, 5)" :key="subItem.value" class="flex flex-col gap-3 text-[#ADADAD]">
              <Button type="Button" @click="navigateToSite(subItem.value, subItem.disabled)" class="font-[400] text-[14px] leading-[17.5px] lg:leading-[26px] text-[#E8E8E8] text-left">{{ subItem.title }}</Button>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 items-end text-white">
          <a class="text-[32px] leading-[38px] lg:text-[40px] lg:leading-[48px] font-[600]" href="tel:8 (964) 726 50 61">+7 964 726-50-61</a>
          <a class="font-[500] text-[14px] leading-[17.5px] flex gap-3 items-center" href="https://t.me/HarmexSupport_bot" target="_blank" rel="noopener noreferrer"><Nuxt-Img src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/footer/support.svg" class="w-5 h-5" loading="lazy"/>Служба заботы</a>
          <a class="font-[500] text-[14px] leading-[17.5px] flex gap-3 items-center" href="https://t.me/harmexpro_bot" target="_blank" rel="noopener noreferrer"><Nuxt-Img src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/footer/tg.svg" class="w-5 h-5" loading="lazy"/>Презентация Harmex</a>
          <a class="mb-2 text-[16px] text-[#47A4D2]" href="mailto:info@harmex.ru">info@harmex.ru</a>
          <div class="mb-2 text-right flex flex-col gap-1.5">
            <p class="text-[16px]">Саратовская обл., г. Ртищево, ул. Пролетарская, д. 2, кв. 87</p>
            <p class="text-[14px] text-[#ADADAD]">Пн-Пт: с 8:00 до 20:00, Сб-Вс: с 10:00 до 18:00</p>
          </div>
          <div class="flex gap-3 items-center">
            <span class="text-[14px] text-[#ADADAD]">
              Наверх
            </span>
            <button type="button" aria-label="Наверх" @click="scrollTop" class="btn-primary max-h-[42px] flex items-center"><Icon name="octicon:arrow-up-24" class="w-5 h-7 text-black" /></button>
          </div>
        </div>
      </div>
      <div class="border-t border-[#4B4B4B] pt-12 flex lg:flex-row flex-col justify-center lg:justify-between text-[14px] leading-[17.5px] gap-12">
        <p class="text-white text-center lg:text-left">©{{ new Date().getFullYear() }} HARMEX Все права защищены.</p>
        <div class="flex lg:flex-row flex-col gap-6 items-center lg:items-end text-[#ADADAD]">
          <a href="/docs/conf_policy.pdf" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
          <a href="/docs/oferta.pdf" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  header a:hover{
      color: var(--primary);
  }

  .btn-primary {
    color: #fff;
  }

  .vertical-divider {
  width: 1px; 
  background-color: #D9D9D9; 
  height: auto; 
  margin: 0; 
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  cursor: pointer;
  border: none;
  outline: none;
  margin: 0;
  display: flex;
  align-items: center; 
  justify-content: center;
  height: 100%; 
  box-sizing: border-box; 
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  width: calc(100%);
  z-index: 100;
}

.dropdown-content.full-width {
  left: 0px; 
}

#nav-icon3 {
  width: 24px; 
  height: 18px; 
  position: relative;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon3 span {
  display: block;
  position: absolute;
  height: 3px; 
  width: 100%;
  background: #737373;
  border-radius: 3px; 
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 7px; 
}

#nav-icon3 span:nth-child(4) {
  top: 14px;
}

#nav-icon3.open span:nth-child(1) {
  top: 7px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 7px;
  width: 0%;
  left: 50%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>

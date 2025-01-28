import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: (): any => ({
    info: {
      wildberries: {
        title: 'Wildberries',
        value: 'wildberries',
        disabled: false,
        price: {
          start: { 
            value: '235 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '20,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '70,000 ₽', 
            title: 'Поддержка', 
            description: 'Подходит для более 300 услуг по выкупу товара и публикациям отзывов' 
          },
        },
      },
      ozon: {
        title: 'Ozon',
        value: 'ozon',
        disabled: false,
        price: {
          start: { 
            value: '250 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '23,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '72,000 ₽', 
            title: 'Поддержка', 
            description: 'Подходит для более 300 услуг по выкупу товара и публикациям отзывов' 
          },
        },
      },
      yandex_market: {
        title: 'Yandex Market',
        value: 'yandex_market',
        disabled: false,
        price: {
          start: { 
            value: '400 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '38,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '115,000 ₽', 
            title: 'Поддержка', 
            description: 'Подходит для более 300 услуг по выкупу товара и публикациям отзывов' 
          },
        },
      },
      avito: {
        title: 'Avito',
        value: 'avito',
        disabled: false,
        price: {
          start: { 
            value: '500 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '47,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '139,000 ₽', 
            title: 'Поддержка', 
            description: 'Подходит для более 300 услуг по выкупу товара и публикациям отзывов' 
          },
        },
      },
      flowwow: {
        title: 'Flowwow',
        value: 'flowwow',
        disabled: false,
        price: {
          start: { 
            value: '235 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '20,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '70,000 ₽', 
            title: 'Поддержка', 
            description: 'Подходит для более 300 услуг по выкупу товара и публикациям отзывов' 
          },
        },
      },
    },
  }),
});

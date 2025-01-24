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
            value: '250 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '25,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '75,000 ₽', 
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
            value: '300 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '30,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '90,000 ₽', 
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
            value: '250 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '25,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '75,000 ₽', 
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
            value: '750 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '75,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '215,000 ₽', 
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
            value: '450 ₽', 
            title: 'Запуск', 
            description: 'Поддержка для более 1 услуги по выкупу товара и публикации отзыва', 
          },
          growth: { 
            value: '45,000 ₽', 
            title: 'Рост', 
            description: 'Оптимально для более 100 услуг по выкупу товара и публикациям отзывов',
          },
          support: { 
            value: '135,000 ₽', 
            title: 'Поддержка', 
            description: 'Подходит для более 300 услуг по выкупу товара и публикациям отзывов' 
          },
        },
      },
    },
  }),
});

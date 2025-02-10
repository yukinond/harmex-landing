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
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/wildberries/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/wildberries/After1.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/wildberries/Before2.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/wildberries/After2.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/wildberries/Before3.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/wildberries/After3.png',
          },
        ]
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
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozon/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozon/After1.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozon/Before2.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozon/After2.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozon/Before3.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozon/After3.png',
          },
        ]
      },
      yandex_market: {
        title: 'Yandex market',
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
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_market/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_market/After1.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_market/Before2.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_market/After2.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_market/Before3.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_market/After3.png',
          },
        ]
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
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avito/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avito/After1.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avito/Before2.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avito/After2.png',
          },
          {
            before: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avito/Before3.png',
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avito/After3.png',
          },
        ]
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

        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/flowwow/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/flowwow/After1.png',
          },
        ]
      },
      ozonHotels: {
        title: 'OZON hotels',
        value: 'ozonHotels',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozonHotels/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ozonHotels/After1.png',
          },
        ]
      },
      avitoHotels: {
        title: 'Avito hotels',
        value: 'avitoHotels',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avitoHotels/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/avitoHotels/After1.png',
          },
        ]
      },
      sutochno: {
        title: 'Суточно',
        value: 'sutochno',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/sutochno/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/sutochno/After1.png',
          },
        ]
      },
      ostrovok: {
        title: 'Островок',
        value: 'ostrovok',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ostrovok/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/ostrovok/After1.png',
          },
        ]
      },
      onetwotrip: {
        title: 'OneTwoTrip',
        value: 'onetwotrip',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/onetwotrip/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/onetwotrip/After1.png',
          },
        ]
      },
      cian: {
        title: 'Циан',
        value: 'cian',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/cian/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/cian/After1.png',
          },
        ]
      },
      _101hotels: {
        title: '101HOTELS',
        value: '_101hotels',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/101hotels/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/101hotels/After1.png',
          },
        ]
      },
      _2giz: {
        title: '2GIZ',
        value: '_2giz',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/2giz/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/2giz/After1.png',
          },
        ]
      },
      yandex_maps: {
        title: 'Yandex карты',
        value: 'yandex_maps',
        disabled: false,
        price: {
          start: { value: '1,000 ₽', title: 'Запуск', description: 'Минимальный пакет услуг' },
          growth: { value: '75,000 ₽', title: 'Рост', description: 'Оптимально для 100 услуг' },
          support: { value: '200,000 ₽', title: 'Поддержка', description: 'Подходит для 300 услуг' },
        },
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_maps/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/yandex_maps/After1.png',
          },
        ]
      },
      letual: {
        title: 'Лэтуаль',
        value: 'letual',
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
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/letual/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/letual/After1.png',
          }
        ]
      },
      lamoda: {
        title: 'Ламода',
        value: 'lamoda',
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
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/lamoda/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/lamoda/After1.png',
          }
        ]
      },
      goldApple: {
        title: 'Золотое яблоко',
        value: 'goldApple',
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
        images: [
          {
            before: `https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/goldApple/Before1.png`,
            after: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reviews/goldApple/After1.png',
          }
        ]
      },
    },
  }),
});

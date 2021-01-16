import {nanoid} from 'nanoid';

const pizzas = [
  {
    typeId: nanoid(),
    type: 'Мясные',
    isHot: false,
    isVegan: false,
    isNew: false,
    title: 'Чизбургер-пицца',
    structure:
      'Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_584x584.jpeg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: false,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 300, isAvailable: false},
          {id: nanoid(), size: 30, price: 400, isAvailable: false},
          {id: nanoid(), size: 40, price: 500, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 500, isAvailable: false},
          {id: nanoid(), size: 30, price: 600, isAvailable: true},
          {id: nanoid(), size: 40, price: 800, isAvailable: true},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Вегетарианские',
    isHot: false,
    isVegan: true,
    isNew: false,
    title: 'Сырная',
    structure: 'Увеличенная порция моцареллы, томатный соус',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/f8ea1b5e-671d-4460-9e3d-ce720b95a1ce.jpg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 200, isAvailable: true},
          {id: nanoid(), size: 30, price: 300, isAvailable: true},
          {id: nanoid(), size: 40, price: 400, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 550, isAvailable: true},
          {id: nanoid(), size: 30, price: 650, isAvailable: true},
          {id: nanoid(), size: 40, price: 850, isAvailable: true},
          {id: nanoid(), size: 44, price: 990, isAvailable: true},
        ],
      },
      {
        dough: 'Бортики',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 35, price: 800, isAvailable: true},
          {id: nanoid(), size: 40, price: 1100, isAvailable: false},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Мясные',
    isHot: true,
    isVegan: false,
    isNew: false,
    title: 'Мексиканская',
    structure: `Острый цыпленок, томатный соус, сладкий перец, красный лук, 
    моцарелла, острый перец халапеньо, томаты, соус сальса`,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a1f7da39-debe-4a2e-bfc9-82d747f5aeec.jpg',
    options: [
      {
        dough: 'Традиционное',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 200, isAvailable: true},
          {id: nanoid(), size: 30, price: 300, isAvailable: true},
          {id: nanoid(), size: 40, price: 400, isAvailable: true},
          {id: nanoid(), size: 44, price: 1050, isAvailable: true},
        ],
      },
      {
        dough: 'Тонкое',
        isAvailableDough: false,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 550, isAvailable: true},
          {id: nanoid(), size: 30, price: 650, isAvailable: true},
          {id: nanoid(), size: 40, price: 850, isAvailable: true},
        ],
      },
    ],
  },

  {
    typeId: nanoid(),
    type: 'Вегетарианские',
    isHot: false,
    isVegan: true,
    isNew: true,
    title: 'Пицца-пирог',
    structure: 'Ананасы, брусника, молоко сгущенное',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/acf387b2-273b-41ab-82c8-d648ae4793cd.jpg',
    options: [
      {
        dough: 'Тонкое',
        isAvailableDough: true,
        id: nanoid(),
        conditions: [
          {id: nanoid(), size: 26, price: 350, isAvailable: true},
          {id: nanoid(), size: 30, price: 550, isAvailable: true},
        ],
      },
    ],
  },
];

export default pizzas;

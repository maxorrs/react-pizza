const pizzas = [
  {
    typeId: 1,
    type: 'Мясная',
    title: 'Чизбургер-пицца',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/85f46c84-f5de-4d16-ad94-b65501b04ff5.jpg',
    options: [
      {
        dough: 'Традиционное',
        id: 44324,
        conditions: [
          {id: 123, size: 26, price: 300},
          {id: 124, size: 30, price: 400},
          {id: 125, size: 40, price: 500},
        ],
      },
      {
        dough: 'Тонкое',
        id: 23523,
        conditions: [
          {id: 231, size: 26, price: 500},
          {id: 232, size: 30, price: 600},
          {id: 233, size: 40, price: 800},
        ],
      },
    ],
  },

  {
    typeId: 2,
    type: 'Вегетарианская',
    title: 'Сырная',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/f8ea1b5e-671d-4460-9e3d-ce720b95a1ce.jpg',
    options: [
      {
        dough: 'Традиционное',
        id: 214123,
        conditions: [
          {id: 331, size: 26, price: 200},
          {id: 332, size: 30, price: 300},
          {id: 333, size: 40, price: 400},
        ],
      },
      {
        dough: 'Тонкое',
        id: 89420,
        conditions: [
          {id: 441, size: 26, price: 550},
          {id: 442, size: 30, price: 650},
          {id: 443, size: 40, price: 850},
        ],
      },
    ],
  },
];

export default pizzas;

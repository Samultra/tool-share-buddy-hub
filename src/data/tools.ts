export interface Tool {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  priceUnit: 'день' | 'неделя' | 'месяц';
  category: string;
  rating: number;
  location: string;
  distance: string;
  description: string;
  features: string[];
  owner: {
    name: string;
    rating: number;
    reviews: number;
    memberSince: string;
  };
  availability: {
    nextAvailable: string;
    minRentalDays: number;
    maxRentalDays: number;
  };
}

export const tools: Tool[] = [
  {
    id: "1",
    name: "Аккумуляторная дрель DeWalt",
    imageUrl: "https://www.pnevmoteh.ru/sites/pnevmoteh.ru/files/images/dwd112s-ks.jpg",
    price: 1200,
    priceUnit: "день",
    category: "Электроинструменты",
    rating: 4.8,
    location: "ул. Ленина, 15",
    distance: "1.2 км",
    description: "Профессиональная аккумуляторная дрель DeWalt с двумя аккумуляторами в комплекте.",
    features: [
      "Мощность: 18V",
      "В комплекте: 2 аккумулятора",
      "Вес: 1.8 кг",
      "Комплектация: кейс, биты, инструкция"
    ],
    owner: {
      name: "Иван Петров",
      rating: 4.8,
      reviews: 45,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-20",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  },
  {
    id: "2",
    name: "Перфоратор Bosch",
    imageUrl: "https://www.promarenda.pro/upload/iblock/3cb/3cb585aeb99019f5f168d01203dda7d1.jpg",
    price: 1800,
    priceUnit: "день",
    category: "Электроинструменты",
    rating: 4.7,
    location: "пр. Мира, 45",
    distance: "2.5 км",
    description: "Мощный перфоратор Bosch для профессионального использования.",
    features: [
      "Мощность: 800 Вт",
      "Энергия удара: 2.6 Дж",
      "Вес: 2.8 кг",
      "Комплектация: кейс, бур, инструкция"
    ],
    owner: {
      name: "Алексей Смирнов",
      rating: 4.7,
      reviews: 38,
      memberSince: "2022"
    },
    availability: {
      nextAvailable: "2024-03-21",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "3",
    name: "Шуруповерт Makita",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/759924/1200x800/51379651.jpg",
    price: 1500,
    priceUnit: "день",
    category: "Электроинструменты",
    rating: 4.8,
    location: "ул. Шурупная, 34",
    distance: "2.1 км",
    description: "Профессиональный шуруповерт Makita с быстрозажимным патроном и LED-подсветкой.",
    features: [
      "Мощность: 18V",
      "Крутящий момент: 50 Нм",
      "В комплекте: 2 аккумулятора",
      "Вес: 1.4 кг",
      "Комплектация: кейс, биты, зарядное устройство, инструкция"
    ],
    owner: {
      name: "Александр Шурупов",
      rating: 4.9,
      reviews: 52,
      memberSince: "2020"
    },
    availability: {
      nextAvailable: "2024-03-22",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "4",
    name: "Циркулярная пила Makita",
    imageUrl: "https://dewalt.store/media/catalog/product/cache/48/small_image/1248x/a4e40ebdc3e371adff845072e1c73f37/e/9/e9369120-fe55-11ef-b777-005056043025.webp",
    price: 1500,
    priceUnit: "день",
    category: "Электроинструменты",
    rating: 4.9,
    location: "ул. Центральная, 12",
    distance: "0.8 км",
    description: "Профессиональная циркулярная пила Makita для точных распилов.",
    features: [
      "Мощность: 1200 Вт",
      "Глубина пропила: 66 мм",
      "Вес: 4.2 кг",
      "Комплектация: кейс, пильный диск, инструкция"
    ],
    owner: {
      name: "Андрей Новиков",
      rating: 4.8,
      reviews: 41,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-23",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "5",
    name: "Лобзик Bosch",
    imageUrl: "https://cdn-products.sdvor.com/images/sdvor-catalog/800x800/5/r26602.jpg?t=1709275034476",
    price: 1300,
    priceUnit: "день",
    category: "Электроинструменты",
    rating: 4.6,
    location: "ул. Лобзиковая, 23",
    distance: "1.7 км",
    description: "Профессиональный лобзик Bosch для точной резки различных материалов.",
    features: [
      "Мощность: 500 Вт",
      "Ход пилки: 20 мм",
      "Частота хода: 0-3000 об/мин",
      "Вес: 2.1 кг",
      "Комплектация: кейс, пилки, инструкция"
    ],
    owner: {
      name: "Петр Лобзиков",
      rating: 4.7,
      reviews: 33,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-01",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "6",
    name: "Шлифовальная машинка Makita",
    imageUrl: "https://grand-instrument.ru/upload/iblock/68f/68f7b8a289123cfd933969e20002a905.jpeg",
    price: 1200,
    priceUnit: "день",
    category: "Электроинструменты",
    rating: 4.7,
    location: "ул. Шлифовальная, 78",
    distance: "1.9 км",
    description: "Профессиональная шлифовальная машинка Makita для обработки различных поверхностей.",
    features: [
      "Мощность: 750 Вт",
      "Скорость: 12000 об/мин",
      "Размер подошвы: 125 мм",
      "Вес: 2.5 кг",
      "Комплектация: кейс, насадки, инструкция"
    ],
    owner: {
      name: "Николай Шлифов",
      rating: 4.8,
      reviews: 45,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-31",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "7",
    name: "Краскопульт Wagner",
    imageUrl: "https://www.plastidiprus.ru/wa-data/public/shop/products/23/12/1223/images/1049/1049.700.jpg",
    price: 1500,
    priceUnit: "день",
    category: "Покрасочные инструменты",
    rating: 4.7,
    location: "ул. Малярная, 23",
    distance: "1.5 км",
    description: "Профессиональный краскопульт Wagner для качественной покраски поверхностей.",
    features: [
      "Мощность: 600 Вт",
      "Объем бака: 1.5 л",
      "Давление: 2.5 бар",
      "Вес: 2.8 кг",
      "Комплектация: кейс, насадки, инструкция"
    ],
    owner: {
      name: "Александр Маляров",
      rating: 4.8,
      reviews: 56,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-26",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "8",
    name: "Компрессор для покраски",
    imageUrl: "https://www.bigam.ru/upload/medialibrary/a13/ga4cu5rmctq2pqbgopyt4evijpqwa60y/23.png",
    price: 2000,
    priceUnit: "день",
    category: "Покрасочные инструменты",
    rating: 4.6,
    location: "пр. Покрасочный, 45",
    distance: "2.2 км",
    description: "Мощный компрессор для профессиональной покраски.",
    features: [
      "Мощность: 1.5 кВт",
      "Объем бака: 50 л",
      "Давление: 8 бар",
      "Вес: 35 кг",
      "Комплектация: шланги, фильтры, инструкция"
    ],
    owner: {
      name: "Дмитрий Компрессоров",
      rating: 4.7,
      reviews: 42,
      memberSince: "2022"
    },
    availability: {
      nextAvailable: "2024-03-27",
      minRentalDays: 1,
      maxRentalDays: 7
    }
  },
  {
    id: "9",
    name: "Набор малярных валиков",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/ruchnoj-instrument/nabory-ruchnogo-instrumenta/1424524/1200x800/52163659.jpg",
    price: 800,
    priceUnit: "день",
    category: "Покрасочные инструменты",
    rating: 4.5,
    location: "ул. Валиковая, 12",
    distance: "1.8 км",
    description: "Профессиональный набор малярных валиков для покраски стен и потолков.",
    features: [
      "Количество валиков: 5 шт",
      "Размеры: 180-250 мм",
      "Материал: полиакрил",
      "Комплектация: кейс, ручки, инструкция"
    ],
    owner: {
      name: "Иван Маляр",
      rating: 4.6,
      reviews: 38,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-28",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  },
  {
    id: "10",
    name: "Покрасочная камера",
    imageUrl: "https://ur-spk.ru/userfiles/shop/large_shop/3/29242_kamera-okraski-mobilnaya.jpg",
    price: 5000,
    priceUnit: "день",
    category: "Покрасочные инструменты",
    rating: 4.8,
    location: "ул. Камерная, 34",
    distance: "3.5 км",
    description: "Мобильная покрасочная камера для профессиональной покраски.",
    features: [
      "Размеры: 3x3x2.5 м",
      "Мощность вентиляции: 2000 м³/ч",
      "Фильтрация: 3 ступени",
      "Вес: 120 кг",
      "Комплектация: инструкция, фильтры"
    ],
    owner: {
      name: "Сергей Камеров",
      rating: 4.9,
      reviews: 67,
      memberSince: "2020"
    },
    availability: {
      nextAvailable: "2024-03-29",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "11",
    name: "Набор кистей",
    imageUrl: "https://pervomaster.ru/images/main/BIG/000-534-326.jpg",
    price: 600,
    priceUnit: "день",
    category: "Покрасочные инструменты",
    rating: 4.4,
    location: "ул. Кистевая, 56",
    distance: "2.1 км",
    description: "Профессиональный набор кистей для покраски.",
    features: [
      "Количество кистей: 8 шт",
      "Размеры: 20-100 мм",
      "Материал: натуральная щетина",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Андрей Кистев",
      rating: 4.5,
      reviews: 29,
      memberSince: "2022"
    },
    availability: {
      nextAvailable: "2024-03-30",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  },
  {
    id: "31",
    name: "Бетономешалка",
    imageUrl: "https://electrolite.ru/Pc/shop/full/2967_17183549639935.jpg",
    price: 3000,
    priceUnit: "день",
    category: "Строительные инструменты",
    rating: 4.6,
    location: "ул. Бетонная, 34",
    distance: "2.3 км",
    description: "Профессиональная бетономешалка для строительных работ.",
    features: [
      "Объем барабана: 180 л",
      "Мощность: 1.1 кВт",
      "Скорость вращения: 25 об/мин",
      "Вес: 120 кг",
      "Комплектация: инструкция, инструменты"
    ],
    owner: {
      name: "Дмитрий Бетонов",
      rating: 4.7,
      reviews: 38,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-26",
      minRentalDays: 1,
      maxRentalDays: 7
    }
  },
  {
    id: "38",
    name: "Промышленный пылесос",
    imageUrl: "https://nskprokat.ru/wp-content/uploads/2020/12/nt-65-2-1.jpg",
    price: 1800,
    priceUnit: "день",
    category: "Уборочное оборудование",
    rating: 4.6,
    location: "ул. Пылесосная, 78",
    distance: "1.7 км",
    description: "Мощный промышленный пылесос для строительных работ.",
    features: [
      "Мощность: 2000 Вт",
      "Объем бака: 30 л",
      "Вес: 12 кг",
      "Комплектация: насадки, фильтры, инструкция"
    ],
    owner: {
      name: "Николай Пылесосов",
      rating: 4.7,
      reviews: 41,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-08",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "33",
    name: "Тачка строительная",
    imageUrl: "https://vashdom24.ru/upload/p_img/product/big/00604936.jpg",
    price: 500,
    priceUnit: "день",
    category: "Строительные инструменты",
    rating: 4.4,
    location: "ул. Тачечная, 78",
    distance: "1.2 км",
    description: "Прочная строительная тачка для перевозки материалов.",
    features: [
      "Объем кузова: 100 л",
      "Материал: сталь",
      "Колесо: пневматическое",
      "Вес: 15 кг",
      "Комплектация: инструкция"
    ],
    owner: {
      name: "Алексей Тачечный",
      rating: 4.5,
      reviews: 35,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-28",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  },
  {
    id: "34",
    name: "Строительные леса",
    imageUrl: "https://www.prom23.ru/upload/resize_cache/iblock/7e8/650_650_1/7e88855bb9b3ba27f9c3ca22052f15ff.jpg",
    price: 5000,
    priceUnit: "день",
    category: "Строительные инструменты",
    rating: 4.8,
    location: "ул. Лесная, 90",
    distance: "2.5 км",
    description: "Профессиональные строительные леса для высотных работ.",
    features: [
      "Высота: 6 м",
      "Ширина: 1.5 м",
      "Глубина: 1 м",
      "Максимальная нагрузка: 200 кг/м²",
      "Комплектация: инструкция, инструменты"
    ],
    owner: {
      name: "Петр Лесовой",
      rating: 4.9,
      reviews: 58,
      memberSince: "2020"
    },
    availability: {
      nextAvailable: "2024-03-29",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "35",
    name: "Вибратор для бетона",
    imageUrl: "https://www.mosstroyprokat.ru/uploads/model-sovremennogo-glubinnogo-vibratora.jpg",
    price: 1500,
    priceUnit: "день",
    category: "Строительные инструменты",
    rating: 4.6,
    location: "ул. Вибрационная, 45",
    distance: "1.7 км",
    description: "Профессиональный вибратор для уплотнения бетона.",
    features: [
      "Мощность: 1.1 кВт",
      "Частота вибрации: 12000 об/мин",
      "Длина вала: 1.5 м",
      "Вес: 8 кг",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Николай Вибраторов",
      rating: 4.7,
      reviews: 41,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-30",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "36",
    name: "Строительный миксер",
    imageUrl: "https://ir.ozone.ru/s3/multimedia-1-f/c1000/6958585779.jpg",
    price: 1200,
    priceUnit: "день",
    category: "Строительные инструменты",
    rating: 4.5,
    location: "ул. Миксерная, 67",
    distance: "1.9 км",
    description: "Профессиональный строительный миксер для замешивания растворов.",
    features: [
      "Мощность: 1.3 кВт",
      "Скорость: 0-800 об/мин",
      "Вес: 5 кг",
      "Комплектация: насадки, инструкция"
    ],
    owner: {
      name: "Андрей Миксеров",
      rating: 4.6,
      reviews: 36,
      memberSince: "2022"
    },
    availability: {
      nextAvailable: "2024-03-31",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "13",
    name: "Набор трубных ключей",
    imageUrl: "https://st5.stpulscen.ru/images/product/540/107/585_original.jpg",
    price: 800,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.4,
    location: "ул. Ключевая, 89",
    distance: "1.4 км",
    description: "Профессиональный набор трубных ключей для сантехнических работ.",
    features: [
      "Количество ключей: 6 шт",
      "Размеры: 10-50 мм",
      "Материал: хром-ванадиевая сталь",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Сергей Ключев",
      rating: 4.5,
      reviews: 32,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-01",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  },
  {
    id: "14",
    name: "Труборез Ridgid",
    imageUrl: "https://tool-impex.ru/upload/iblock/c83/c83d09d3e4fbf07ea289c373be655b26.jpg",
    price: 1500,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.7,
    location: "ул. Трубная, 23",
    distance: "1.6 км",
    description: "Профессиональный труборез Ridgid для точной резки труб.",
    features: [
      "Диаметр труб: 15-50 мм",
      "Материал: сталь",
      "Вес: 1.2 кг",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Дмитрий Трубов",
      rating: 4.8,
      reviews: 45,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-02",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "19",
    name: "Труборез Ridgid",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/truborezy/759924/1200x800/51379651.jpg",
    price: 1500,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.7,
    location: "ул. Трубная, 23",
    distance: "1.6 км",
    description: "Профессиональный труборез Ridgid для точной резки труб.",
    features: [
      "Диаметр труб: 15-50 мм",
      "Материал: сталь",
      "Вес: 1.2 кг",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Дмитрий Трубов",
      rating: 4.8,
      reviews: 45,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-02",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "15",
    name: "Гидравлический пресс",
    imageUrl: "https://cmpnn.com/wp-content/uploads/2019/08/1.jpg",
    price: 4000,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.8,
    location: "ул. Прессовая, 45",
    distance: "2.2 км",
    description: "Мощный гидравлический пресс для профессионального использования.",
    features: [
      "Усилие: 10 тонн",
      "Ход: 150 мм",
      "Вес: 50 кг",
      "Комплектация: инструкция, инструменты"
    ],
    owner: {
      name: "Александр Прессов",
      rating: 4.9,
      reviews: 52,
      memberSince: "2020"
    },
    availability: {
      nextAvailable: "2024-04-03",
      minRentalDays: 1,
      maxRentalDays: 7
    }
  },
  {
    id: "20",
    name: "Набор для пайки труб",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/payalniki/759924/1200x800/51379651.jpg",
    price: 1000,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.5,
    location: "ул. Паяльная, 67",
    distance: "1.8 км",
    description: "Профессиональный набор для пайки медных труб.",
    features: [
      "Мощность: 2000 Вт",
      "Температура: до 500°C",
      "Комплектация: паяльник, припой, флюс, инструкция"
    ],
    owner: {
      name: "Иван Паяльников",
      rating: 4.6,
      reviews: 38,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-04",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "21",
    name: "Трубогиб",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/trubogiby/759924/1200x800/51379651.jpg",
    price: 1200,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.6,
    location: "ул. Трубогибная, 89",
    distance: "1.5 км",
    description: "Профессиональный трубогиб для гибки металлических труб.",
    features: [
      "Диаметр труб: 15-32 мм",
      "Угол гибки: до 180°",
      "Вес: 3 кг",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Петр Трубогибов",
      rating: 4.7,
      reviews: 42,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-05",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "22",
    name: "Набор для прочистки труб",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/prochistka/759924/1200x800/51379651.jpg",
    price: 800,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.4,
    location: "ул. Прочистная, 34",
    distance: "1.3 км",
    description: "Профессиональный набор для прочистки канализационных труб.",
    features: [
      "Длина троса: 15 м",
      "Диаметр: 6 мм",
      "Комплектация: трос, насадки, инструкция"
    ],
    owner: {
      name: "Алексей Прочисткин",
      rating: 4.5,
      reviews: 35,
      memberSince: "2022"
    },
    availability: {
      nextAvailable: "2024-04-06",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  },
  {
    id: "37",
    name: "Мойка высокого давления 3000 PSI",
    imageUrl: "https://ae01.alicdn.com/kf/S820f6dd30a724025972b3316b8abf4few.jpg",
    price: 2500,
    priceUnit: "день",
    category: "Уборочное оборудование",
    rating: 4.7,
    location: "ул. Моечная, 56",
    distance: "1.9 км",
    description: "Мощная мойка высокого давления для профессиональной очистки.",
    features: [
      "Давление: 3000 PSI",
      "Расход воды: 8 л/мин",
      "Мощность: 2.2 кВт",
      "Вес: 15 кг",
      "Комплектация: шланги, насадки, инструкция"
    ],
    owner: {
      name: "Дмитрий Моющий",
      rating: 4.8,
      reviews: 48,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-07",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "24",
    name: "Мойка высокого давления 3000 PSI",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/moyki/759924/1200x800/51379651.jpg",
    price: 2500,
    priceUnit: "день",
    category: "Уборочное оборудование",
    rating: 4.7,
    location: "ул. Моечная, 56",
    distance: "1.9 км",
    description: "Мощная мойка высокого давления для профессиональной очистки.",
    features: [
      "Давление: 3000 PSI",
      "Расход воды: 8 л/мин",
      "Мощность: 2.2 кВт",
      "Вес: 15 кг",
      "Комплектация: шланги, насадки, инструкция"
    ],
    owner: {
      name: "Дмитрий Моющий",
      rating: 4.8,
      reviews: 48,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-07",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "25",
    name: "Промышленный пылесос",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/pylesosy/759924/1200x800/51379651.jpg",
    price: 1800,
    priceUnit: "день",
    category: "Уборочное оборудование",
    rating: 4.6,
    location: "ул. Пылесосная, 78",
    distance: "1.7 км",
    description: "Мощный промышленный пылесос для строительных работ.",
    features: [
      "Мощность: 2000 Вт",
      "Объем бака: 30 л",
      "Вес: 12 кг",
      "Комплектация: насадки, фильтры, инструкция"
    ],
    owner: {
      name: "Николай Пылесосов",
      rating: 4.7,
      reviews: 41,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-08",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "39",
    name: "Поломоечная машина",
    imageUrl: "https://clearspb.ru/sites/default/files/imagecache/product_full/1-783-230.jpg",
    price: 3500,
    priceUnit: "день",
    category: "Уборочное оборудование",
    rating: 4.8,
    location: "ул. Поломоечная, 90",
    distance: "2.1 км",
    description: "Профессиональная поломоечная машина для уборки больших помещений.",
    features: [
      "Ширина уборки: 50 см",
      "Объем бака: 60 л",
      "Мощность: 1.5 кВт",
      "Вес: 45 кг",
      "Комплектация: щетки, инструкция"
    ],
    owner: {
      name: "Андрей Поломоечный",
      rating: 4.9,
      reviews: 55,
      memberSince: "2020"
    },
    availability: {
      nextAvailable: "2024-04-09",
      minRentalDays: 1,
      maxRentalDays: 7
    }
  },
  {
    id: "26",
    name: "Газонокосилка бензиновая",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/sadovaya-tehnika/gazonokosilki/759924/1200x800/51379651.jpg",
    price: 2500,
    priceUnit: "день",
    category: "Садовые инструменты",
    rating: 4.7,
    location: "ул. Садовая, 12",
    distance: "1.5 км",
    description: "Мощная бензиновая газонокосилка для профессионального использования.",
    features: [
      "Мощность: 5.5 л.с.",
      "Ширина скашивания: 50 см",
      "Объем бака: 1.2 л",
      "Вес: 35 кг",
      "Комплектация: инструкция, инструменты"
    ],
    owner: {
      name: "Александр Газонов",
      rating: 4.8,
      reviews: 42,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-10",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "27",
    name: "Культиватор электрический",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/sadovaya-tehnika/kultivatory/759924/1200x800/51379651.jpg",
    price: 1800,
    priceUnit: "день",
    category: "Садовые инструменты",
    rating: 4.6,
    location: "ул. Культиваторная, 34",
    distance: "1.8 км",
    description: "Электрический культиватор для обработки почвы.",
    features: [
      "Мощность: 1.5 кВт",
      "Ширина обработки: 40 см",
      "Глубина обработки: 25 см",
      "Вес: 15 кг",
      "Комплектация: инструкция, насадки"
    ],
    owner: {
      name: "Иван Культиваторов",
      rating: 4.7,
      reviews: 38,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-11",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "28",
    name: "Бензопила Husqvarna",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/sadovaya-tehnika/benzopily/759924/1200x800/51379651.jpg",
    price: 2000,
    priceUnit: "день",
    category: "Садовые инструменты",
    rating: 4.8,
    location: "ул. Лесная, 56",
    distance: "2.1 км",
    description: "Профессиональная бензопила для валки деревьев и распиловки бревен.",
    features: [
      "Мощность: 2.5 кВт",
      "Длина шины: 45 см",
      "Объем бака: 0.5 л",
      "Вес: 5.5 кг",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Петр Лесорубов",
      rating: 4.9,
      reviews: 45,
      memberSince: "2020"
    },
    availability: {
      nextAvailable: "2024-04-12",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "29",
    name: "Садовый измельчитель",
    imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/sadovaya-tehnika/izmelchiteli/759924/1200x800/51379651.jpg",
    price: 2200,
    priceUnit: "день",
    category: "Садовые инструменты",
    rating: 4.7,
    location: "ул. Измельчительная, 78",
    distance: "1.7 км",
    description: "Мощный садовый измельчитель для переработки веток и листьев.",
    features: [
      "Мощность: 2.5 кВт",
      "Диаметр веток: до 40 мм",
      "Вес: 25 кг",
      "Комплектация: инструкция, инструменты"
    ],
    owner: {
      name: "Андрей Измельчителев",
      rating: 4.8,
      reviews: 41,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-13",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "32",
    name: "Алюминиевая лестница 2.5м",
    imageUrl: "https://stroykray.ru/uploads/all/0a/13/91/0a139116b81214ece334b563dd7e0c2c.jpg",
    price: 800,
    priceUnit: "день",
    category: "Строительные инструменты",
    rating: 4.5,
    location: "ул. Лестничная, 56",
    distance: "1.8 км",
    description: "Прочная алюминиевая лестница для строительных и ремонтных работ.",
    features: [
      "Высота: 2.5 м",
      "Материал: алюминий",
      "Максимальная нагрузка: 150 кг",
      "Вес: 8 кг",
      "Комплектация: чехол, инструкция"
    ],
    owner: {
      name: "Иван Лестничный",
      rating: 4.6,
      reviews: 42,
      memberSince: "2022"
    },
    availability: {
      nextAvailable: "2024-03-27",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  },
  {
    id: "40",
    name: "Компрессор 6 галлонов",
    imageUrl: "https://spb.pnevmoteh.ru/sites/pnevmoteh.ru/files/styles/product-full/public/images/sb4-24.f114.png?itok=2xCrD4GE",
    price: 2200,
    priceUnit: "день",
    category: "Электроинструменты",
    rating: 4.6,
    location: "ул. Садовая, 78",
    distance: "1.9 км",
    description: "Мощный компрессор для профессионального использования.",
    features: [
      "Объем бака: 6 галлонов",
      "Мощность: 1.5 л.с.",
      "Давление: 8 бар",
      "Вес: 25 кг",
      "Комплектация: шланги, фильтры, инструкция"
    ],
    owner: {
      name: "Сергей Компрессоров",
      rating: 4.8,
      reviews: 45,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-03-25",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "16",
    name: "Набор для пайки труб",
    imageUrl: "https://adr-tools.ru/upload/resize_cache/iblock/622/br7857lmejf928cvjl8jjkn5nc55sj23/1200_1200_140cd750bba9870f18aada2478b24840a/dytron_set_p_4a_650w_tw_standard_blue_20_63_apparat_dlya_payki_polipropilenovykh_trub.jpg",
    price: 1000,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.5,
    location: "ул. Паяльная, 67",
    distance: "1.8 км",
    description: "Профессиональный набор для пайки полипропиленовых труб.",
    features: [
      "Мощность: 650 Вт",
      "Температура: до 300°C",
      "Диаметр труб: 20-63 мм",
      "Комплектация: паяльник, насадки, инструкция"
    ],
    owner: {
      name: "Иван Паяльников",
      rating: 4.6,
      reviews: 38,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-04",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "17",
    name: "Трубогиб",
    imageUrl: "https://ro-tools.ru/upload/iblock/dcf/virax-minsk_240842.jpg",
    price: 1200,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.6,
    location: "ул. Трубогибная, 89",
    distance: "1.5 км",
    description: "Профессиональный трубогиб для гибки металлических труб.",
    features: [
      "Диаметр труб: 15-32 мм",
      "Угол гибки: до 180°",
      "Вес: 3 кг",
      "Комплектация: кейс, инструкция"
    ],
    owner: {
      name: "Петр Трубогибов",
      rating: 4.7,
      reviews: 42,
      memberSince: "2021"
    },
    availability: {
      nextAvailable: "2024-04-05",
      minRentalDays: 1,
      maxRentalDays: 14
    }
  },
  {
    id: "18",
    name: "Набор для прочистки труб",
    imageUrl: "https://discount-tools.ru/upload/iblock/3ab/3ab981e3b68813a0b36563badda7ec7f.jpg",
    price: 800,
    priceUnit: "день",
    category: "Сантехнические инструменты",
    rating: 4.4,
    location: "ул. Прочистная, 34",
    distance: "1.3 км",
    description: "Профессиональный набор для прочистки канализационных труб.",
    features: [
      "Длина троса: 15 м",
      "Диаметр: 6 мм",
      "Комплектация: трос, насадки, инструкция"
    ],
    owner: {
      name: "Алексей Прочисткин",
      rating: 4.5,
      reviews: 35,
      memberSince: "2022"
    },
    availability: {
      nextAvailable: "2024-04-06",
      minRentalDays: 1,
      maxRentalDays: 30
    }
  }
];

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getFeaturedTools = (): Tool[] => {
  return tools.slice(0, 4);
};

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter(tool => tool.category === category);
}; 
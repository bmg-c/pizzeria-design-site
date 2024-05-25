const products = [
  {
    category: "Пицца",
    name: "Данила",
    description:
      "Древние старцы помнят, что давным-давно по телевизору передавали шоу  «Даёшь молодежь». Там Данила и Герман говорили на гламурном  московском диалекте. Шоу больше нет, а пицца всё ещё супербл и крейзи!",
    variantCost1: 299,
    variantType1: "25 см",
    variantCost2: 549,
    variantType2: "30 см",
    variantCost3: 679,
    variantType3: "35 см",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/danila.png",
  },
  {
    category: "Пицца",
    name: "Грибная",
    description:
      "Заботливые дедушки всегда берут грибятишек  погостить на лето, лихо могут починить велик и всегда разрешают ходить  на речку. Пицца из-за этого такая нежная, а не из-за соуса и сыра. Это  правда.",
    variantCost1: 299,
    variantType1: "25 см",
    variantCost2: 549,
    variantType2: "30 см",
    variantCost3: 679,
    variantType3: "35 см",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/gribnaya.png",
  },
  {
    category: "Пицца",
    name: "Эрондондон",
    description:
      "Если вы все еще хотите попросить старшего брата пройти главного босса в  Нид Фо Спид Андэграунд Часть Первая, то передавайте там всем привет в  2003 и заказывайте пиццу Эрондондон.",
    variantCost1: 409,
    variantType1: "25 см",
    variantCost2: 629,
    variantType2: "30 см",
    variantCost3: 739,
    variantType3: "35 см",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/erondondon.png",
  },
  {
    category: "Пицца",
    name: "Гавайская",
    description:
      "Второе имя гавайской пиццы — Пицца, Которую Все Взрослые Обязательно  Заказывают Для Своих Детей, Потому Что Она С Ананасами, А Дети Очень  Любят Ананасы.",
    variantCost1: 479,
    variantType1: "25 см",
    variantCost2: 689,
    variantType2: "30 см",
    variantCost3: 869,
    variantType3: "35 см",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/gavayskaya.png",
  },
  {
    category: "Пицца",
    name: "Цыпленок-барбекю",
    description:
      "Величайшая цыплячья фэнтези-трилогия от Вселенной Пиццы-тайм. В третьей части  добрые цыплята при поддержке красного лука и томатов одерживают верх над  бесчисленными ордами невкусных пицц.",
    variantCost1: 569,
    variantType1: "25 см",
    variantCost2: 869,
    variantType2: "30 см",
    variantCost3: 969,
    variantType3: "35 см",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/cyplyonok.png",
  },
  {
    category: "Пицца",
    name: "Мексиканская PRO",
    description:
      "Дигаме, пор фавор, но разве в вашей голове не заиграла музыка марьячи?   Новая Мексика встречает вас с тем же привкусом жаркого солнца, в лучах  которого сияет еще ярче.",
    variantCost1: 569,
    variantType1: "25 см",
    variantCost2: 869,
    variantType2: "30 см",
    variantCost3: 969,
    variantType3: "35 см",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/mexicanskaya.png",
  },
  {
    category: "Закуски",
    name: "Картофельные дольки с беконом и огурчиками",
    description:
      "Если вы хотите долю в крупной компании, а Билл Гейтс до сих пор не  позвонил, то закажите с друзьями на всех картофельные дольки. А там и до  основания IТ-холдинга недалеко.",
    variantCost1: 279,
    variantType1: "230 г",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/sogurchikami.png",
  },
  {
    category: "Закуски",
    name: "Картофельные дольки с беконом и жареным луком",
    description:
      "Поговаривают, что это блюдо появилось в ходе величайшей операции ЦРУ по  добыче тайного секретного супер-оружия русских «Tovarisch, davai  pozharim kartoshki so shkvarkami, da s luchkom!».",
    variantCost1: 279,
    variantType1: "230 г",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/slukom.png",
  },
  {
    category: "Закуски",
    name: "Картофель из печи",
    description:
      "Мы совершенно протестно отказались жарить картошку во фритюре. Вместо этого засовываем свежие брусочки в пицца-печь, а на выходе получаем хрустящую корочку снаружи и нежнейшую начинку внутри.",
    variantCost1: 229,
    variantType1: "165 г",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/ispechi.png",
  },
  {
    category: "Закуски",
    name: "Картофельные дольки",
    description:
      "Лучшие  умы белорусского картофелеведения ведут непрерывный селекционный  процесс для наших долек, Think different, eat kartoshka!",
    variantCost1: 229,
    variantType1: "185 г",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/dolki.png",
  },
  {
    category: "Закуски",
    name: "Наггетсы",
    description:
      "Рецепт  наггетсов — академическая работа целого американского профессора,  который однажды вывел идеальное сочетание курицы и хрустящей  панировки. Вывести вывел, а запатентовать не запатентовал!",
    variantCost1: 219,
    variantType1: "195 г",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/naggetsi.png",
  },
  {
    category: "Напитки",
    name: "Китай Кока-кола",
    description:
      "Ни хао! То, чего вы хотите, это кола. Время прикоснуться к новому, чтобы ощутить любимый вкус.",
    variantCost1: 159,
    variantType1: "350 мл",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/cola.png",
  },
  {
    category: "Напитки",
    name: "Китай Фанта",
    description:
      "Родной вкус фанты в азиатском стиле. Вы не просто пьете любимую газировку, но и получаете удовольствие от самой упаковки.",
    variantCost1: 159,
    variantType1: "350 мл",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/fanta.png",
  },
  {
    category: "Напитки",
    name: "Китай Спрайт",
    description:
      "Скучали? Он по вам тоже. На каком языке не напиши, а Спрайт остается тем же, только теперь в азиатском стиле.",
    variantCost1: 159,
    variantType1: "350 мл",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/sprite.png",
  },
  {
    category: "Напитки",
    name: "Облепиховый морс",
    description:
      "Если бы этот морс был актером, он бы взял Оскар, настолько он хорош.",
    variantCost1: 119,
    variantType1: "500 мл",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/oblepiha.png",
  },
  {
    category: "Напитки",
    name: "Малиновый морс",
    description:
      "Количеству малины в этом морсе позавидует даже бабулино варенье.",
    variantCost1: 119,
    variantType1: "500 мл",
    variantCost2: 0,
    variantType2: "",
    variantCost3: 0,
    variantType3: "",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/malina.png",
  },
];

module.exports = products;

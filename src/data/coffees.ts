import espresso from '../assets/coffees/espresso.svg';
import american from '../assets/coffees/american.svg';
import creamyEspresso from '../assets/coffees/creamy-espresso.svg';
import coldCoffee from '../assets/coffees/cold-coffee.svg';
import withMilk from '../assets/coffees/with-milk.svg';
import latte from '../assets/coffees/latte.svg';
import cappuccino from '../assets/coffees/cappuccino.svg';
import macchiato from '../assets/coffees/macchiato.svg';
import mocaccino from '../assets/coffees/mocaccino.svg';
import hotChocolate from '../assets/coffees/hot-chocolate.svg';
import cuban from '../assets/coffees/cuban.svg';
import hawaiian from '../assets/coffees/hawaiian.svg';
import arabic from '../assets/coffees/arabic.svg';
import irish from '../assets/coffees/irish.svg';

export const coffees = [
  {
    id: 1,
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café deito com água quente e grãos moídos',
    price: 9.90,
    image: espresso
  },
  {
    id: 2,
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    image: american
  },
  {
    id: 3,
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    image: creamyEspresso
  },
  {
    id: 4,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    image: coldCoffee
  },
  {
    id: 5,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    image: withMilk
  },
  {
    id: 6,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    image: latte
  },
  {
    id: 7,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    image: cappuccino
  },
  {
    id: 8,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    image: macchiato
  },
  {
    id: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    image: mocaccino
  },
  {
    id: 10,
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    image: hotChocolate
  },
  {
    id: 11,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    image: cuban
  },
  {
    id: 12,
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    image: hawaiian
  },
  {
    id: 13,
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    image: arabic
  },
  {
    id: 14,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    image: irish
  }
];

export const coffeeType = typeof coffees;
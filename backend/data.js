import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Jean Michel',
      email: 'jeanmichel@example.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false,
    },
    {
      name: 'Apollo Micheal',
      email: 'godofthesun@example.com',
      password: bcrypt.hashSync('456'),
      idAdmin: true,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'PlayStation 5 Physical',
      slug: 'playstation5-console',
      category: 'Consoles',
      image: '/images/p5.jpg',
      price: 499,
      countInStock: 0,
      brand: 'Sony',
      rating: 4.8,
      numReviews: 45,
      description:
        "PlayStation's latest and greatest console. Take a deep dive into new cinematic masterpieces fully equiped.",
    },
    {
      //_id: '2',
      name: 'Xbox Series X',
      slug: 'xbox-seriesx-console',
      category: 'Consoles',
      image: '/images/xx.jpg',
      price: 449,
      countInStock: 110,
      brand: 'Microsoft',
      rating: 4.6,
      numReviews: 26,
      description:
        "Xbox's latest generation of console. Unrivaled power gives you the power to fully immerse yourself in gameplay.",
    },
    {
      //_id: '3',
      name: 'Nintendo Switch',
      slug: 'nintendo-switch-console',
      category: 'Consoles',
      image: '/images/ns.jpg',
      price: 399,
      countInStock: 320,
      brand: 'Nintendo',
      rating: 4.9,
      numReviews: 113,
      description:
        "Fun at home and on the go! Play Nintendo's greatest hits either as a home console or in the Nintendo Switch's signature hand-held mode.",
    },
    {
      //_id: '4',
      name: 'PlayStation 5 DualSense Controller',
      slug: 'playstation-dualshock-controller',
      category: 'Peripherals',
      image: '/images/p5_cont.png',
      price: 59,
      countInStock: 144,
      brand: 'Sony',
      rating: 4.4,
      numReviews: 29,
      description:
        'The revolutionary DualShock Playstation 5 controllers feature haptic feedback and optimaly engineered ergonamic grips.',
    },
    {
      //_id: '5',
      name: 'Xbox One Controller',
      slug: 'xbox-one-controller',
      category: 'Peripherals',
      image: '/images/xx_cont.jpg',
      price: 59,
      countInStock: 80,
      brand: 'Microsoft',
      rating: 4.1,
      numReviews: 19,
      description:
        "Elevate your play with Xbox's greatest controller design. Auxilary components not included.",
    },
    {
      //_id: '6',
      name: 'Nintendo Switch Pro Controller',
      slug: 'nintendo-pro-controller',
      category: 'Peripherals',
      image: '/images/npc.PNG',
      price: 89,
      countInStock: 214,
      brand: 'Nintendo',
      rating: 3.9,
      numReviews: 204,
      description:
        "Use Nintendo's new pro controller. Features motion sensors and haptic feedback.",
    },
  ],
};

export default data;

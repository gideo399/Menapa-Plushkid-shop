// Editable content. Add `price: 'GH₵ 00'` to any product to display a price.
const img = (f) => `/images/${f}`;

export const products = [
  { id: 1, name: 'Tropical Fruit Print Shirt', image: img('tropical-shirt.jpeg'), description: 'A fun short-sleeve shirt with a bold banana and pineapple print.' },
  { id: 2, name: "“Mama's Mini” Sweatshirt", image: img('mamas-mini.jpeg'), description: 'A cosy sand-coloured sweatshirt with navy lettering and ribbed trims.' },
  { id: 3, name: 'Elsa Headphones School Backpack', image: img('elsa-backpack.jpeg'), description: 'A sparkly teal and pink backpack with a 3D character front.' },
  { id: 4, name: 'Adventure Print T-Shirt', image: img('adventure-tee.jpeg'), description: 'A playful tee covered in cars, planes, rockets and sharks, with yellow trim.' },
  { id: 5, name: 'Unicorn Cat Lunch Bag', image: img('lunch-bag.jpg'), description: 'A two-level pink lunch bag with a rainbow print and shoulder strap.' },
  { id: 6, name: 'Classic Denim Dungarees', image: img('overalls.webp'), description: 'Light-wash denim overalls for easy everyday style.' },
  { id: 7, name: 'Striped Kids Socks', image: img('socks.jpg'), description: 'Blue striped socks with a coral cuff and green heel and toe.' },
  { id: 8, name: 'Spider-Man School Backpack', image: img('spiderman-backpack.jpeg'), description: 'A black and red backpack with a bold spider emblem.' },
];

export const gallery = [
  { src: img('store-rack.jpg'), alt: 'Colourful printed shirts hanging on a rail in the Menampa Plush Kids shop', span: 'row-span-2' },
  { src: img('adventure-tee.jpeg'), alt: 'Kids T-shirt with cars, planes and rockets print' },
  { src: img('lunch-bag.jpg'), alt: 'Pink unicorn cat lunch bag' },
  { src: img('overalls.webp'), alt: 'Light denim kids dungarees' },
  { src: img('mamas-mini.jpeg'), alt: "Beige Mama's Mini sweatshirt", span: 'row-span-2' },
  { src: img('elsa-backpack.jpeg'), alt: 'Teal and pink character school backpack' },
  { src: img('tropical-shirt.jpeg'), alt: 'Tropical fruit print shirt' },
  { src: img('socks.jpg'), alt: 'Blue striped kids socks' },
  { src: img('spiderman-backpack.jpeg'), alt: 'Black and red Spider-Man backpack' },
];

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#collections', label: 'Collections' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

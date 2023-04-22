const store = [
  {
    title: "Skate",
    img: "skate.jpg",
    description: "Making skates terrorific"
  },{
    title: "Hoodie",
    img: "hoodie.webp",
    description: "Custom made whool hoodie"
  },{
    title: "Shorts",
    img: "shorts.webp",
    description: "Buy 2 and take 1 free"
  },{
    title: "Shirt",
    img: "shirt.jpg",
    description: "Available in all sizes"
  },{
    title: "Figurine",
    img: "Pyramid.jpg",
    description: "20 cm tall figure of the iconic Pyramid Head"
  }
];

const getCards = () => {
  return store;
};

export default {
  getCards
};

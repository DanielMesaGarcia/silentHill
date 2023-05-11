const cards = [
  {
    title: "Games",
    img: "games.jpg",
    link: "/games"
  },{
    title: "Films",
    img: "films.jpg",
    link: "/films"
  },{
    title: "Merch",
    img: "merch.webp",
    link: "/merch"
  },{
    title: "What's next",
    img: "future.jpg",
    link: "/next"
  },{
    title: "RSS feed",
    img: "rss.png",
    link: "/rss"
  }
];

const getCards = () => {
    return cards;
}

export default {
  getCards
};
import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/store");

const getCards = () => {
  return get(dbRef);
};

const addCard = (title, img, description) => {
  return push(dbRef, {
    title: title,
    img: img,
    description: description
  });
};

const updateCard = (title, img, description) => {
  return push(dbRef, {
    title: title,
    img: img,
    description: description
  });
};

const removeCard = (key) => {
  const dbRefCard = ref(db, `/store/${key}`);
  return remove(dbRefCard);
};

export default {
  getCards,
  addCard,
  removeCard,
  updateCard
};

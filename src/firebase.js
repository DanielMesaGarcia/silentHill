// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCskrmHdLXCwO0OkXp0e7ZbLoIXN-2tHfw",
  authDomain: "silenthill-7c3b2.firebaseapp.com",
  databaseURL: "https://silenthill-7c3b2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "silenthill-7c3b2",
  storageBucket: "silenthill-7c3b2.appspot.com",
  messagingSenderId: "985649751925",
  appId: "1:985649751925:web:9ee36ef861dd2a701d553c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
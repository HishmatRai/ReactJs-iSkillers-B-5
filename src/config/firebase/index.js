import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA5JhjYpTlDYueA71aQHZjcKKqLjMxJM5o",
  authDomain: "testing-b9a0e.firebaseapp.com",
  databaseURL: "https://testing-b9a0e-default-rtdb.firebaseio.com",
  projectId: "testing-b9a0e",
  storageBucket: "testing-b9a0e.appspot.com",
  messagingSenderId: "874972302500",
  appId: "1:874972302500:web:39ec6b35d95358333aea31",
  measurementId: "G-H9K5WSHVHD",
};
const firebase = initializeApp(firebaseConfig);
export default firebase;

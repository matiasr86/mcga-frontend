// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdGw1c3C5bcLE2o7TcbJ7pM1DI0e9uHvI",
  authDomain: "mcga-frontend-9da01.firebaseapp.com",
  projectId: "mcga-frontend-9da01",
  storageBucket: "mcga-frontend-9da01.appspot.com",
  messagingSenderId: "1092220027325",
  appId: "1:1092220027325:web:0b3b33d6ab10858d22d2d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1dw8dtJ1LlSzj8WcS7XGqgc2HglZIeAw",
  authDomain: "stazy-46518.firebaseapp.com",
  databaseURL: "https://stazy-46518-default-rtdb.firebaseio.com",
  projectId: "stazy-46518",
  storageBucket: "stazy-46518.appspot.com",
  messagingSenderId: "728959127885",
  appId: "1:728959127885:web:3011cc26b32c4bc08ae704",
  measurementId: "G-Z5BKCJ5RF9"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth(app);
export default app;
export {database};
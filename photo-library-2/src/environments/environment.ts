import { initializeApp } from "firebase/app";


export const environment = {
  production: true,
  apiKey: "",
  authDomain: "photo-library-2.firebaseapp.com",
  projectId: "photo-library-2",
  databaseURL: 'https://photo-library-2-default-rtdb.firebaseio.com',
  storageBucket: "photo-library-2.appspot.com",
  messagingSenderId: "517492012960",
  appId: ""
};


const app = initializeApp(environment);

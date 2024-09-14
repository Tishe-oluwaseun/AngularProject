import { initializeApp } from "firebase/app";


export const environment = {
  production: true,
  apiKey: "AIzaSyD_-mvl0fTcCa7JhtTkgZV-Ofqv_LUpYS8",
  authDomain: "photo-library-2.firebaseapp.com",
  projectId: "photo-library-2",
  databaseURL: 'https://photo-library-2-default-rtdb.firebaseio.com',
  storageBucket: "photo-library-2.appspot.com",
  messagingSenderId: "517492012960",
  appId: "1:517492012960:web:6d6dd4e538d3340eb856c5"
};


const app = initializeApp(environment);

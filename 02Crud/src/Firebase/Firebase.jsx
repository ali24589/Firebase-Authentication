
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAySr2FQx4HLmWnXckoACBV-cnXdGPO_wQ",
    authDomain: "crud-web-app-ad893.firebaseapp.com",
    projectId: "crud-web-app-ad893",
    storageBucket: "crud-web-app-ad893.appspot.com",
    messagingSenderId: "962292881104",
    appId: "1:962292881104:web:51f14fd82fcedfc0a770d5",
    databaseURL:'https://crud-web-app-ad893-default-rtdb.firebaseio.com/'
  };
  
  
  export const app = initializeApp(firebaseConfig);
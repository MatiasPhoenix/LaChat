
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAfdMNAyBga0KjMsJF_u_LH7ScRxf5H9pQ",
  authDomain: "reactfirebase-40062.firebaseapp.com",
  databaseURL: 'https://lachat-aa85f-default-rtdb.firebaseio.com/',
  projectId: "reactfirebase-40062",
  storageBucket: "reactfirebase-40062.appspot.com",
  messagingSenderId: "66072772218",
  appId: "1:66072772218:web:e78f07de16234fe19445c3"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

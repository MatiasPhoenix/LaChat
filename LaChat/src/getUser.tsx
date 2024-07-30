import { ref, onValue } from 'firebase/database';
import { db } from './firebase-config';

// Funzione per ascoltare i dati degli utenti
export const listenToUsers = (callback: (users: any[]) => void): void => {
  const usersRef = ref(db, 'utenti/');
  onValue(usersRef, (snapshot) => {
    const users: any[] = [];
    if (snapshot.exists()) {
      const data = snapshot.val();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          users.push(data[key]);
        }
      }
    }
    callback(users);
  }, (error) => {
    console.error('Error fetching data: ', error);
  });
};


export const getMessages = (chatId: string, callback: (messages: any[]) => void) => {
  const messagesRef = ref(db, `chats/${chatId}/messages`);
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const messagesArray = Object.values(data);
      callback(messagesArray);
    } else {
      callback([]);
    }
  });
};




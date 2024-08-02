import { ref, push, set } from 'firebase/database';
import { db } from './firebase-config';

interface ChatMessage {
  sender: string;
  text: string;
  timestamp: number;
}

export const addMessage = async (chatId: string, message: ChatMessage): Promise<void> => {
  try {
    const messagesRef = ref(db, `chats/${chatId}/messages`);
    await push(messagesRef, message);
  } catch (error) {
    console.error('Error adding message: ', error);
  }
};






interface User {
  name: string;
}

export const addUser = async (user: User): Promise<void> => {
  try {
    const userId = new Date().getTime().toString(); 
    const userRef = ref(db, 'utenti/' + userId); 
    await set(userRef, user);
    localStorage.setItem(`userName`, user.name);
    console.log('User added with ID: ', userId);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
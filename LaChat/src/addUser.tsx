import { ref, push, set } from "firebase/database";
import { db } from "./firebase-config";

//Interfaccia e funzione per i messaggi
interface ChatMessage {
  sender: string;
  text: string;
  timestamp: number;
}

// Funzione per la gestione dei messaggi
export const addMessage = async (
  chatId: string,
  chatId2: string,
  message: ChatMessage
): Promise<void> => {
  try {
    const messagesRef = ref(db, `chats/${chatId}/messages`);
    addMessage2(chatId2, message);
    await push(messagesRef, message);
  } catch (error) {
    console.error("Error adding message: ", error);
  }
};
const addMessage2 = async (
  chatId2: string,
  message: ChatMessage
): Promise<void> => {
  try {
    const messagesRef = ref(db, `chats/${chatId2}/messages`);
    await push(messagesRef, message);
  } catch (error) {
    console.error("Error adding message: ", error);
  }
};

//Interfaccia e creazione utente (semplificata)
interface User {
  name: string;
  avatar: any;
}

export const addUser = async (user: User): Promise<void> => {
  try {
    const userId = new Date().getTime().toString();
    const userRef = ref(db, "utenti/" + userId);
    await set(userRef, user);
    localStorage.setItem(`userName`, user.name);
    localStorage.setItem(`userAvatar`, user.avatar);
    window.location.reload();
    console.log("User added with ID: ", userId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

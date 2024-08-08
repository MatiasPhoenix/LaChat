import { useEffect, useRef, useState } from 'react';
import { getMessages } from '../../getUser';
import { addMessage } from '../../addUser';
import LinksRoutes from '../LinksRoutes';

import avatarImg1  from '../../assets/Avatar00.png';
import avatarImg2  from '../../assets/Avatar01.png';
import avatarImg3  from '../../assets/Avatar02.png';
import avatarImg4  from '../../assets/Avatar03.png';
import avatarImg5  from '../../assets/Avatar04.png';
import avatarImg6  from '../../assets/Avatar05.png';
import avatarImg7  from '../../assets/Avatar06.png';
import avatarImg8  from '../../assets/Avatar07.png';
import avatarImg9  from '../../assets/Avatar08.png';
import avatarImg10 from '../../assets/Avatar09.png';

function Prova2() {
  const [user,     setUser]     = useState<string>(''); // 'user1' o 'user2'
  const [avatar, setAvatar] = useState<string| null>(null);
  const [userId,   setUserId]   = useState<string | null>(null);
  const [message,  setMessage]  = useState<string>('');
  const [messages, setMessages] = useState<any[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const user1 = localStorage.getItem("chatName1");
  const user2 = localStorage.getItem("chatName2");
  const imgUser = localStorage.getItem("imgUserChat");
  const chatId = user1! + user2;
  const chatId2 = user2! + user1;

  useEffect(() => {
    getUserId();
    getMessages(chatId, setMessages);
  }, [chatId]);
  useEffect(() => {
    scrollMessagge();
  },[messages]);

  const scrollMessagge = () =>{
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const inviaMessaggio = async () => {
    if (user && message.trim()) {
      const newMessage = {
        sender: user,
        text: message,
        timestamp: Date.now(),
      };
      await addMessage(chatId, chatId2, newMessage);
      scrollMessagge();
      setMessage('');
    } else {
      console.log('Please select a user and enter a message.');
    }
  };

  const getUserId = () => {
    const nomeTemp = localStorage.getItem("userName");
    const avatarTemp = localStorage.getItem("userAvatar");
    if (nomeTemp !== null || avatarTemp !== null) {
      setUserId(nomeTemp);
      setUser(nomeTemp!);
      setAvatar(avatarTemp)
    } else {
      console.log("Nome utente non trovato nel local storage");
    }
  };
  
  const chooseAvatar = (thisAvatar: string) => {
    switch (thisAvatar) {
      case "2": return avatarImg2;
      case "3": return avatarImg3;
      case "4": return avatarImg4;
      case "5": return avatarImg5;
      case "6": return avatarImg6;
      case "7": return avatarImg7;
      case "8": return avatarImg8;
      case "9": return avatarImg9;
      case "10": return avatarImg10;
      default: return avatarImg1;
    }
  };

  return (
    <div className='container bg-slate-950'>

      <div className='flex items-center py-6 bg-slate-800 h-10'>
      <div>
        <LinksRoutes/>
      </div>
      <img className=' me-3 h-8' src={chooseAvatar(imgUser!)} alt="" /><p className='font-bold'>{user2}</p>
      </div>
    
    {/* Sezione messaggi della chat */}
    <div className='mt-5 areaChat mx-5'>
      {messages.map((msg, index) => (
        <div key={index} className="mb-2 grid justify-items-stretch">
          <div
            className={`mx-3 flex flex-col w-auto max-w-[480px] min-w-[100px] leading-1.5 p-2 border-gray-200 rounded-es-xl rounded-e-xl 
            ${msg.sender === userId ? 'rounded-tr-none rounded-tl-lg bg-green-600 justify-self-end text-left pl-6' 
            : 'rounded-tl-none bg-sky-600 justify-self-start text-right pr-6'}`}>
            <p ref={messagesEndRef} className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              {msg.text}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Sezione dove scrivere/inviare i messaggi */}
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 flex items-center">
      <input
        className='flex-grow p-2 rounded-l-md bg-gray-900 text-white border border-gray-700 focus:outline-none'
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && inviaMessaggio()}
        placeholder="Scrivi il tuo messaggio"
      />
      <button className='p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700' onClick={inviaMessaggio}>Invia</button>
    </div>
    </div>
  );
}

export default Prova2;

import { useEffect, useRef, useState } from 'react';
import { getMessages } from '../../getUser';
import { addMessage } from '../../addUser';
import LinksRoutes from '../LinksRoutes';


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
  

  return (
    <div className='container bg-slate-950'>
      <div className='left-0 right-0 bg-gray-800 py-2 px-10 items-center flex justify-between items-center'>
      <div>
        <LinksRoutes/>
      </div>
        <div className='flex items-center'>
          <img className='me-3 h-8' src={avatar!} alt="avatar" /> {userId}
        </div>
      </div>
    <div className='flex items-center py-6 bg-red-900 h-10'>
      {/* <p className='font-bold pe-2'>Stai chattando con:</p> */}
       <img className='h-8 ps-5 pe-1' src={imgUser} alt="" /><p className='font-bold'>{user2}</p>
    </div>
    
    {/* Sezione messaggi della chat */}
    <div className='mt-5 areaChat mx-5'>
      {messages.map((msg, index) => (
        <div key={index} className="mb-2 grid justify-items-stretch">
          <div
            className={`mx-3 flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-es-xl rounded-e-xl 
            ${msg.sender === userId ? 'rounded-tr-none rounded-tl-lg bg-green-600 justify-self-end text-left pl-6' 
            : 'rounded-tl-none bg-sky-600 justify-self-start text-right pr-6'}`}>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{msg.sender}</span>
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

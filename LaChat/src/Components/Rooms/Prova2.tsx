import { useEffect, useState } from 'react';
import { getMessages } from '../../getUser';
import { addMessage } from '../../addUser';
import LinksRoutes from '../LinksRoutes';


function Prova2() {
  const [user,     setUser]     = useState<string>(''); // 'user1' o 'user2'
  const [userId,   setUserId]   = useState<string | null>(null);
  const [message,  setMessage]  = useState<string>('');
  const [messages, setMessages] = useState<any[]>([]);

  const user1 = localStorage.getItem("chatName1");
  const user2 = localStorage.getItem("chatName2");
  const chatId = user1! + user2;
  const chatId2 = user2! + user1;

  useEffect(() => {
    getUserId();
    getMessages(chatId, setMessages);
  }, [chatId]);

  const inviaMessaggio = async () => {
    if (user && message.trim()) {
      const newMessage = {
        sender: user,
        text: message,
        timestamp: Date.now(),
      };
      await addMessage(chatId, chatId2, newMessage);
      setMessage('');
    } else {
      console.log('Please select a user and enter a message.');
    }
  };

  const getUserId = () => {
    const nomeTemp = localStorage.getItem("userName");
    if (nomeTemp !== null) {
      setUserId(nomeTemp);
      setUser(nomeTemp)
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
        <p className=''>{userId ? userId : 'Non sei un utente attivo'}</p>
      </div>
    
    <div className='mb-5'>
    </div>

<div className='mt-5 areaChat mx-5'>
  {messages.map((msg, index) => (
    <div key={index} className="mb-2 grid justify-items-stretch">
      <div
        className={`mx-3 flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-es-xl rounded-e-xl 
        ${msg.sender === userId ? 'rounded-tr-none rounded-tl-lg bg-green-600 justify-self-end text-left pl-6' 
                                : 'rounded-tl-none bg-sky-600 justify-self-start text-right pr-6'}`}>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{msg.sender}</span>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {msg.text}
        </p>
      </div>
    </div>
  ))}
</div>

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

import { useEffect, useState } from 'react';
import { getMessages } from '../../getUser';
import { addMessage } from '../../addUser';
import LinksRoutes from '../LinksRoutes';


function Prova2() {
  const [user,     setUser]     = useState<string>(''); // 'user1' o 'user2'
  const [message,  setMessage]  = useState<string>('');
  const [messages, setMessages] = useState<any[]>([]);
  const [userId,   setUserId]   = useState<string | null>(null);


  const chatId = 'chat_example';

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
      await addMessage(chatId, newMessage);
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
    {/* <div className='flex justify-center'>
      <button onClick={() => setUser('user1')} className={`mx-2 ${user === 'user1' ? 'bg-blue-500 text-white' : ''}`}>User 1</button>
      <button onClick={() => setUser('user2')} className={`mx-2 ${user === 'user2' ? 'bg-blue-500 text-white' : ''}`}>User 2</button>
    </div> */}
    <div className='mt-5 areaChat mx-5'>
      {messages.map((msg, index) => (
        <div key={index} className={`p-2 mb-2 ${msg.sender === user ? 'bg-sky-600' : 'bg-green-600'}
         ${msg.sender === user ? 'justify-start text-left pl-6' : 'justify-end text-right pr-6'}` }>
           <strong>{msg.sender}</strong>: 
           <p className={`${msg.sender === user ? 'justify-start text-left pl-6 py-2' : 'justify-end text-right pr-6 py-2'}` }>
           {msg.text} 
           </p>
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

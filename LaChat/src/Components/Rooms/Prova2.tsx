import { useEffect, useState } from 'react';
import LinksRoutes from '../LinksRoutes';
import { getMessages } from '../../getUser';
import { addMessage } from '../../addUser';


function Prova2() {
  const [user, setUser] = useState<string>(''); // 'user1' o 'user2'
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<any[]>([]);
  const chatId = 'chat_example';

  useEffect(() => {
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

  return (
    <>
      <div className='mb-5'>
        <LinksRoutes />
      </div>
      <div className='flex justify-center'>
        <button onClick={() => setUser('user1')} className={`mx-2 ${user === 'user1' ? 'bg-blue-500 text-white' : ''}`}>User 1</button>
        <button onClick={() => setUser('user2')} className={`mx-2 ${user === 'user2' ? 'bg-blue-500 text-white' : ''}`}>User 2</button>
      </div>
      <div className='mt-5'>
        <p>User attivo: {user || 'Nessuno'}</p>
      </div>

      {/* Area per inviare un messaggio */}
      <div>
        <input
          className='py-2 px-3'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Scrivi il tuo messaggio"
        />
        <button onClick={inviaMessaggio} onKeyPress={(e) => e.key === 'Enter' && inviaMessaggio()}
        >Invia</button>
      </div>

      {/* Visualizzazione messaggi */}
      <div className='mt-5'>
        <h2>Messaggi:</h2>
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 mb-2 ${msg.sender === user ? 'bg-sky-600' : 'bg-green-600'} ${msg.sender === user ? 'justify-start text-left pl-6' : 'justify-end text-right pr-6'}` }>
            <strong>{msg.sender}</strong>: 
            <p className={`${msg.sender === user ? 'justify-start text-left pl-6 py-2' : 'justify-end text-right pr-6 py-2'}` }>
            {msg.text} 
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Prova2;

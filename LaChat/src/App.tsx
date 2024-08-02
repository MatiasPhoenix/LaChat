import './App.css';
import { addUser } from './addUser';
import { useEffect, useState } from 'react';
import LinksRoutes from './Components/LinksRoutes';


function App() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (name) {
      const user = { name};
      await addUser(user);
      setName('');    
    } else {
      console.log('Please fill in all fields.');
    }
  };

  useEffect(() => {
    getUserId();
  });

 
  const getUserId = () => {
    const nomeTemp = localStorage.getItem("userName");
    if (nomeTemp !== null) {
      setUserId(nomeTemp);
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
  <div className='mt-10'>
    <h1 className='py-3'>{userId ? 'Ciao ' + userId + '!' : 'Devi ancora scegliere un Nickname'}</h1>
    <div>
    <input className='p-2'
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Nome"
      />
    <button onClick={handleSubmit}>Aggiungi Utente</button>
    </div>
  </div>
  <ul className='mt-5'>
    <li>Il tuo nome è:</li>
    <li>{userId ? userId : 'Non sei un utente attivo'}</li>
  </ul>
  </div>
  );
}

export default App;

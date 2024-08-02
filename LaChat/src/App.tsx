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
  <>
  <LinksRoutes />
  <div className='mt-10'>
    <h1>Ciao Gringo!</h1>
    <h2 className='my-2'>Scegli un nicKname</h2>
    <input className='p-2'
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Nome"
    />
  <button onClick={handleSubmit}>Aggiungi Utente</button>
  </div>
  <ul className='mt-5'>
    <li>Il tuo nome è:</li>
    <li>{userId ? userId : 'Non sei un utente attivo'}</li>
  </ul>
  </>
  );
}

export default App;

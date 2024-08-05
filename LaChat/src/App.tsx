import './App.css';
import { addUser } from './addUser';
import { useEffect, useState } from 'react';
import LinksRoutes from './Components/LinksRoutes';
import { listenToUsers } from './getUser';
import { Link } from 'react-router-dom';



function App() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [arrayUsers, setArrayUsers] = useState<any[]>([]);
  const [count, setCount] = useState(0);


useEffect(() => {
  getUserId();
  setCount(count + 1);
  },[]);

  const handleSubmit = async () => {
    if (name) {
      const user = { name};
      await addUser(user);
      setName('');    
    } else {
      console.log('Please fill in all fields.');
    }
  };

  const getUserId = () => {
    const nomeTemp = localStorage.getItem("userName");
    if (nomeTemp !== null) {
      setUserId(nomeTemp);
    } else {
      console.log("Nome utente non trovato nel local storage");
    }
    listenToUsers(setArrayUsers);
  };

  const newChatName = (nameUser:string) =>{
    const chatName1 = userId + nameUser;
    const chatName2 = nameUser + userId ;
    localStorage.setItem("chatName1", chatName1);
    localStorage.setItem("chatName2", chatName2);
  }
  

  return (  
  <div className='container bg-slate-950'>
    <div className='left-0 right-0 bg-gray-800 py-2 px-10 items-center flex justify-between items-center'>
      <div>
        <LinksRoutes/>
      </div>
        <p className=''>{userId ? userId : 'Non sei un utente attivo'}</p>
    </div>

    {/* Con il booleano cambia la visibilità della pagina */}
    {userId ? 
    <h1 className='py-3'>{userId ? 'Ciao ' + userId + '!' : 'Devi ancora scegliere un Nickname'}</h1>
    :
    <div className='mt-10'>
        <h1 className='py-3'>{userId ? 'Ciao ' + userId + '!' : 'Devi ancora scegliere un Nickname'}</h1>
      <div>
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
    </div>}

    {userId ? 
    <ul className='mt-5'>
      <li>Con chi vuoi chattare?:</li>
      {arrayUsers.map((user, index) => (
        user.name !== userId &&(
        <li key={index}>
          <Link to="/Chatroom">
            <span onClick={() => newChatName(user.name) }>{user.name}</span>
          </Link>
        </li>
      )))}
    </ul> :
    <div></div> }

  </div>
  );
}

export default App;

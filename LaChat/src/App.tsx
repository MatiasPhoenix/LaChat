import './App.css';
import { addUser } from './addUser';
import { useEffect, useState } from 'react';
import { listenToUsers } from './getUser';
import { Link } from 'react-router-dom';

import avatarImg1  from '../src/assets/Avatar00.png';
import avatarImg2  from '../src/assets/Avatar01.png';
import avatarImg3  from '../src/assets/Avatar02.png';
import avatarImg4  from '../src/assets/Avatar03.png';
import avatarImg5  from '../src/assets/Avatar04.png';
import avatarImg6  from '../src/assets/Avatar05.png';
import avatarImg7  from '../src/assets/Avatar06.png';
import avatarImg8  from '../src/assets/Avatar07.png';
import avatarImg9  from '../src/assets/Avatar08.png';
import avatarImg10 from '../src/assets/Avatar09.png';


function App() {
  const [name,       setName]         = useState('');
  const [avatar,     setAvatar]       = useState<string| null>(null);
  const [userId,     setUserId]       = useState<string | null>(null);
  const [arrayUsers, setArrayUsers]   = useState<any[]>([]);
  

  const chooseAvatar = (thisAvatar: string) => {
    switch (thisAvatar) {
      case "2"  : return avatarImg2;
      case "3"  : return avatarImg3;
      case "4"  : return avatarImg4;
      case "5"  : return avatarImg5;
      case "6"  : return avatarImg6;
      case "7"  : return avatarImg7;
      case "8"  : return avatarImg8;
      case "9"  : return avatarImg9;
      case "10" : return avatarImg10;
      default   : return avatarImg1;
    }
  };
  
  useEffect(() => {
    getUserId();
    },[]);

  // Salva utente nel database
  const handleSubmit = async () => {
    if (name) {
      const user = { name, avatar };
      await addUser(user);
    } else {
      console.log("Please fill in all fields.");
    }
  };

  // Caricamento degli utenti dal database
  const getUserId = () => {
    const nomeTemp = localStorage.getItem("userName");
    const avatarSearch = localStorage.getItem("userAvatar");
    const avatarTemp = chooseAvatar(avatarSearch!);

    if (nomeTemp !== null || avatarTemp !== null) {
      setUserId(nomeTemp);
      setAvatar(avatarTemp!);
    } else {
      console.log("Nome utente non trovato nel local storage");
    }
    listenToUsers(setArrayUsers);
  };

  // Salva in localStore nomi utenti e avatar
  // Serve per agevolare i processi
  const newChatName = (nameUser: string, imgAvatarUser: string) => {
    localStorage.setItem("imgUserChat", imgAvatarUser);
    localStorage.setItem("chatName1", userId!);
    localStorage.setItem("chatName2", nameUser);
  };
  
  return (
    <div className="container bgApp bg-black">
      {/* Sezione header */}
      <div className="bg-gray-800 py-2 px-10 flex items-center">
        <div className="flex-1"></div>
        <div className="flex items-center">
          {userId ? (
            <div className="flex items-center">
              <img className="me-2 h-8" src={avatar!} alt="avatar" />
              <p className="font-bold">{userId}</p>
            </div>
          ) : (
            <div className="flex items-center">
              <img className="me-3 h-8" src={avatarImg1} alt="avatar" />
              <span>Non sei un utente attivo</span>
            </div>
          )}
        </div>
      </div>

      {/* Sezione creazione account */}
      {userId ? (
        <h1 className="py-3">
          {userId ? "" : "Devi ancora scegliere un Nickname"}
        </h1>
      ) : (
        <div className="mt-10">
          <h1 className="py-3">
            {userId
              ? "Ciao " + userId + "!"
              : "Devi ancora scegliere un Nickname"}
          </h1>

          <div>
            <div>
              <input
                className="p-2"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
              />
              <div className="flex justify-center flex-wrap py-6 px-4 space-x-4">
                <div>
                  <img className="avatar" src={avatarImg2} alt="avatar2" />
                  <input
                    id="2"
                    name="avatar-selection"
                    type="radio"
                    value="2"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg3} alt="avatar3" />
                  <input
                    id="3"
                    name="avatar-selection"
                    type="radio"
                    value="3"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg4} alt="avatar4" />
                  <input
                    id="4"
                    name="avatar-selection"
                    type="radio"
                    value="4"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg5} alt="avatar5" />
                  <input
                    id="5"
                    name="avatar-selection"
                    type="radio"
                    value="5"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg6} alt="avatar6" />
                  <input
                    id="6"
                    name="avatar-selection"
                    type="radio"
                    value="6"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg7} alt="avatar7" />
                  <input
                    id="7"
                    name="avatar-selection"
                    type="radio"
                    value="7"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg8} alt="avatar8" />
                  <input
                    id="8"
                    name="avatar-selection"
                    type="radio"
                    value="8"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg9} alt="avatar9" />
                  <input
                    id="9"
                    name="avatar-selection"
                    type="radio"
                    value="9"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <img className="avatar" src={avatarImg10} alt="avatar10" />
                  <input
                    id="10"
                    name="avatar-selection"
                    type="radio"
                    value="10"
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              <button onClick={handleSubmit}>Aggiungi Utente</button>
            </div>
          </div>
        </div>
      )}

      {/* Sezione degli utenti */}
      {userId ? (
        <div className="flex">
          <div className="flex-none w-1/3"></div>

          <div className="flex-1 flex justify-start">
            <ul className="mt-5">
              <li>Con chi vuoi chattare?:</li>
              {arrayUsers.map(
                (user, index) =>
                  user.name !== userId && (
                    <li className="flex" key={index}>
                      <Link to="/Chatroom">
                        <span
                          onClick={() => newChatName(user.name, user.avatar)}
                        >
                          <div className="flex py-2">
                            <img
                              className="me-3 h-8"
                              src={chooseAvatar(user.avatar)}
                              alt=""
                            />
                            {user.name}
                          </div>
                        </span>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;

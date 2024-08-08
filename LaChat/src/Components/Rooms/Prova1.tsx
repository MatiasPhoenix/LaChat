// App.tsx
import React, { useEffect, useState } from 'react';

import { listenToUsers } from '../../getUser';
import LinksRoutes from '../LinksRoutes';


const App: React.FC = () => {
  const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState<number | ''>('');
  const [users, setUsers] = useState<any[]>([]);

  const handleSubmit = async () => {
    
  };

  useEffect(() => {
    
    listenToUsers(setUsers);
  }, []);

  return (
    <div>
      <LinksRoutes/>

      <h1>Aggiungi Utente</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <button onClick={handleSubmit}>Aggiungi Utente</button>

      <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify("Nome utente: " + user.name)}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default App;

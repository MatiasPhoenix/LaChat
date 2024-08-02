// App.tsx
import React, { useEffect, useState } from 'react';
import { addUser } from '../../addUser';
import { listenToUsers } from '../../getUser';
import LinksRoutes from '../LinksRoutes';


const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [users, setUsers] = useState<any[]>([]);

  const handleSubmit = async () => {
    if (name && email && age) {
      const user = { name, email, age: Number(age) };
      await addUser(user);
      // Resetta i campi dopo l'aggiunta
      setName('');
      setEmail('');
      setAge('');
    } else {
      console.log('Please fill in all fields.');
    }
  };

  useEffect(() => {
    // Chiama la funzione per ottenere i dati in tempo reale
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

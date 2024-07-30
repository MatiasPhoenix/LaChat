
import { createBrowserRouter, Link } from 'react-router-dom';
import App    from '../App';
import Prova1 from './Rooms/Prova1.tsx';
import Prova2 from './Rooms/Prova2.tsx';
import Prova3 from './Rooms/Prova3.tsx';
import Chat from './Rooms/Chat.tsx';

export const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/Prova1", element: <Prova1 />},
  {path:"/Prova2", element: <Prova2 />},
  {path:"/Prova3", element: <Prova3 />},
  {path:"/Chat", element: <Chat />},
  {path:"/Esperimento", element: 
    <div>
        <h1>Il mio esperimentos!</h1>
        <button><Link to="/">Torna indietro</Link></button>
        <button><Link to="/Chat">Vai a Chat</Link></button>
    </div>},
])
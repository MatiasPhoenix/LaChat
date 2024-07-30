import { useState } from 'react';
import { Link } from 'react-router-dom';

function Chat() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>ciao sono un div!</div>
      <button onClick={() => setCount((count) => count + 1)}>Señor boton - {count}</button>
      <p></p>
      <button><Link to="/">Torna indietro</Link></button>
    </>
  );
}

export default Chat;

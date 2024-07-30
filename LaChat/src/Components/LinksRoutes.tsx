import { Link } from "react-router-dom";

const LinksRoutes = () => {
  return (
    <>
        <ul className='flex justify-center space-x-7'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Prova1">Prova1</Link>
          </li>
          <li>
            <Link to="/Prova2">Prova2</Link>
          </li>
          <li>
            <Link to="/Prova3">Prova3</Link>
          </li>
          <li>
            <Link to="/Esperimento">Ovolollo</Link>
          </li>
        </ul>
    </>
  )
};

export default LinksRoutes;
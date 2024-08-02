import { Link } from "react-router-dom";

const LinksRoutes = () => {
  return (
    <>
        <ul className='flex justify-center space-x-10'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Prova2">Chat Room</Link>
          </li>
        </ul>
    </>
  )
};

export default LinksRoutes;
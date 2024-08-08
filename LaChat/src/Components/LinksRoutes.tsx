import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const LinksRoutes = () => {
  return (
    <>
        <ul className='flex justify-center space-x-10'>
          <li className="ps-4">
            <Link className="font-bold" to="/"><HiOutlineArrowSmLeft size={28}/></Link>
          </li>
          <li>
            {/* <Link to="/Chatroom">Chat Room</Link> */}
          </li>
        </ul>
    </>
  )
};

export default LinksRoutes;
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

// import store from "../../utils/store";



const Title = () => {
    return(
          <>
          <Link to="/">
            <img
              className="h-28 p-2 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
              alt="logo" >
            </img>
          </Link>
          </>
        );
   };

const Header = () => {
  
  const cartItems = useSelector(state => state.cart.items);
  const onlinestatus= useOnline();


  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
    <Title />
    <div className="list-items">
    <ul className="flex py-10">
       
        <Link to="/"><li className="px-2 text-black hover:bg-gray-800 hover:text-white rounded-md">Home</li></Link>
        <Link to="/contact"><li className="px-2 text-black hover:bg-gray-800 hover:text-white rounded-md">Contact</li></Link>
        <Link to="/about"><li className="px-2 text-black hover:bg-gray-800 hover:text-white rounded-md">About US</li></Link>
        {/* <Link to="/instamart"className="px-2 text-black hover:bg-gray-800 hover:text-white rounded-md">Instamart</Link> */}
        <Link to="/cart" className="px-2 text-black hover:bg-gray-800 hover:text-white rounded-md">Cart-{cartItems.length}</Link>
        <li className="mx-3">{onlinestatus? "🟢: Online":"🔴: Offline"}</li>
    </ul>
    </div>
  </div>
  );
}

export default Header;
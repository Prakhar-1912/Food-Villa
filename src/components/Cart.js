import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
// import { clearCart } from "../utils/cardSlice";


const Cart = ()=> {
    
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    // const handleClearCart = () => {
    //     dispatch(clearCart);
    // }

    return(
    <div>
    <h1 className=" font-bold text-3xl">cart-{cartItems.length}</h1>
    <button className="bg-green-100 m-2 p-2">Clear Cart</button>
    <div className="flex flex-wrap">
    {cartItems.map((item) => {return <FoodItem key={item.id} {...item}/>})}
    </div>
    </div>
  );
    
}

export default Cart;
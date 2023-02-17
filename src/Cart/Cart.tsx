import CartItems from './CartItems/CartItems'
import { CartItemType } from '../App'
import './Cart.tsx'


type props ={
 cartItems:CartItemType[];
 addToCart:(clickedItem: CartItemType)=>void;
 removeFromCart: (id:number)=>void;
};

const Cart: React.FC<props> =({cartItems, addToCart, removeFromCart})=>{
  const calculateTotal=(items:CartItemType[])=>
  items.reduce((ack:number, item) => ack + item.amount * item.price, 0)
  return(
    <div>
        <h2>Your Shopping Cart</h2>
        {cartItems.length=== 0 ? <p>No items in cart.</p>:null}
        {cartItems.map(item=>(
            <CartItems 
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            />
        ))}
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </div>
  )  
}
export default Cart

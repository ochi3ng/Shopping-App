import './NavBar.css'
import { useState } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Drawer from '@material-ui/core/Drawer';
import Cart from './Cart/Cart';

type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}
type props={
  cartItems: CartItemType[]
  handleAddToCart: (clickedItem: CartItemType) => void
  getTotalItems: (items: CartItemType[]) => number
  handleRemoveFromCart: (id: number) => void
}

function NavBar({cartItems, handleAddToCart,getTotalItems, handleRemoveFromCart}:props) {
   

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className='NavBar'>
           <div className='navbar'>
              <h1 className='web'>
                  Shopping Web
              </h1>
                  <Drawer anchor='left' open={cartOpen} onClose={() => setCartOpen(false)}>
                  <Cart cartItems={cartItems} 
                  addToCart={handleAddToCart} 
                  removeFromCart={handleRemoveFromCart}
               />
                     </Drawer>
              <button>
          <div>{getTotalItems(cartItems)}</div>
                <AddShoppingCartIcon onClick={() => setCartOpen(true)}/>
               
       
              </button>
              
              
           </div>
          
    </div>
  )
}

export default NavBar

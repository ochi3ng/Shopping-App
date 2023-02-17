import { Button } from "@material-ui/core"
import { CartItemType } from "../../App" 
import './CartItems.css'

type props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const CartItems: React.FC<props>=({item, addToCart, removeFromCart})=>
    <div className = "outerdiv">
        <div className="titleDiv" >
                <h3>{item.title}</h3>
                <div className="information">
                    <p>Price: ${item.price}</p>
                    <p>Total:${(item.amount * item.price).toFixed(2)}</p>
                </div>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)}
                >
                    +
                </Button>
            </div>
           
        </div>
        <img className="imgs" src={item.image} alt={item.title} />
</div>


export default CartItems

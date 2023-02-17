import { Button } from "@material-ui/core";
//Types
import { CartItemType } from "../App";
//styles
import './Item.css'

type Props={
    item:CartItemType;
    handleAddToCart: (clickedItem: CartItemType)=> void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart })=>(
  
   <div className="header">
        <img src={item.image} alt={item.title} />
        <div className="details">
            <h3>{item.title}</h3>
            <div>${item.price}</div>
        </div>
        <button onClick={()=>handleAddToCart(item)}>Add To Cart</button>
    </div>
)
export default Item
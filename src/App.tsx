import {useState} from 'react'
import { useQuery } from 'react-query';
import NavBar from './NavBar';
import Item from './Item/Item'
import  LinearProgress from '@material-ui/core/LinearProgress';
import  Grid  from '@material-ui/core/Grid';
import './App.css'
export type CartItemType={
  id: number;
  category: string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
}

const getProducts =async (): Promise<CartItemType[]> =>
await (await fetch('https://fakestoreapi.com/products')).json();

const App=()=> {
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'product',
    getProducts
  );
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((value: number, item) => value + item.amount, 0);


  const handleAddToCart = (clickedItem: CartItemType) =>{
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
  

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    }) 
  };
  const handleRemoveFromCart =(id: number)=>{
    setCartItems(Prev =>
      Prev.reduce((ack, item)=>{
      if(item.id === id){
        if(item.amount ===1) return ack;
        return [...ack, {...item, amount:item.amount -1}];
      }else{
        return[...ack, item];
      }
    }, [] as CartItemType[])
    );
  };

      if(isLoading) return <LinearProgress/>;
      if(error) return <div>Something went wrong ...</div>;
  console.log(cartItems)
  return (
    <div> 
      <div className='navone'>
        <NavBar
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          getTotalItems={getTotalItems}
          handleRemoveFromCart={handleRemoveFromCart}


        /> 
        </div>   
      <Grid container spacing={3}>
      {data?.map(item =>(
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
        </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default App;

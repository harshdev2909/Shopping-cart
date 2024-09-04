import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  const[cart,setCart] = useState([]);
  const[warrning,setWaring]=useState(false);
  const[show,setShow] = useState(true);
  const handleClick = (item)=>{
    let isPresent = false;
    cart.forEach((product)=>{
      if(item.id===product.id)
        isPresent=true;
    })
    if(isPresent){
      setWaring(true);
      setTimeout(()=>{
        setWaring(false);
      },2000);
      return;
    }

    setCart([...cart,item])


  }
    return (
    <div>
      <Navbar  size={cart.length} setShow={setShow}/>
      {
        show ?  <Shop handleClick={handleClick}/> : 
        <Cart cart={cart} setCart={setCart}  handleChange={handleClick}/>
      }
     
      {warrning && <div className='warning'>
        Item is already present in your cart
      </div> }
    </div>
  );
}

export default App;

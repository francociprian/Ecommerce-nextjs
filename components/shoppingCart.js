import { useAppContext } from "./stateWrapper"
import Product from './product'
import style from "../styles/shoppingCart.module.css";

export default function ShoppingCart() {
  const { closeCart, emptyCart, deleteItem, items, isOpen } = useAppContext();
  
  function getTotal(){
    const total = items.reduce((acc, item)=> acc + item.qty * item.price, 0)
    return total 
  }
  function handleCloseCart(){
    closeCart();
  }
  function handleClearCart(){
    emptyCart();
  }

  return (
    <div className={style.shoppingCart} style={{display: isOpen ? 'block' : ' none'}} >
      <button className={style.close} onClick={handleCloseCart}>Close</button>

      {items.length === 0 ? (
        <div className={style.empty}>Cart is empty</div> 
        ) : (
        <>
          <div className={style.title}>
            <h3>Your items</h3>
            <button className={style.clear} onClick={handleClearCart}>Clear</button>
          </div>
          <div >
            {items.map(item => (
              <div >
                <div className={style.clearItem}><button onClick={() => deleteItem(item.id)}>X</button></div>
                <Product key={item.id} item={item} showAs='ListItem' qty={item.qty}/>
              </div>
            ))}
          </div>
          <div className={style.total}>Total: ${getTotal()}</div>
        </>)} 
    </div>
  )
}

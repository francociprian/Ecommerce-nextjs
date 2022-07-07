import style from '../styles/cartButton.module.css'
import { useAppContext } from "../components/stateWrapper"

export default function CartButton({item}) {
  const cart = useAppContext();

  function handleOnClick(){
    cart.addItemToCart(item);
  }
  return (
    <button
      onClick={handleOnClick} 
      className={style.button }>
      Add to Cart
    </button>
  )
}

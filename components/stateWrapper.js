import { createContext, useContext, useState } from "react"

const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: ()=>{},
  closeCart: ()=>{},
  addItemToCart: (item)=>{},  
  getNumberOfItems: ()=>{},
  emptyCart: () =>{},
  deleteItem: (id) => {},
});

export default function StateWrapper({children}) {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ items, setItems ] = useState([]);
  function handleOpenCart(){
    setIsOpen(true);
  }
  function handleCloseCart(){
    setIsOpen(false);
  }
  function handleAddItemToCart(item){
    const temp = [...items];
    const found = temp.find(product => product.id === item.id);
    if(found){
      found.qty++;
    }else{
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
  }
  function handleNumberOfItems(){
    const total = items.reduce((acc, item)=> acc + item.qty, 0);
    return total
  }
  function handleEmptyCart(){
    setItems([])
  }
  function handleDeleteItem(id){
    setItems(items.filter(x => x.id !== id))
  }
  
  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems, 
        emptyCart: handleEmptyCart,
        deleteItem: handleDeleteItem,
      }}>
      {children}
    </AppContext.Provider>
  )
}


export function useAppContext(){
  return useContext(AppContext)
}
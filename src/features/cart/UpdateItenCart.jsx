
import { useDispatch} from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItenCart({pizzaId}) {
    const dispatch = useDispatch();
  return (
    <>
<Button onClick={()=>{
    dispatch(decreaseItemQuantity(pizzaId))
}} type='small'>-</Button>
   <Button onClick={()=>{
    dispatch(increaseItemQuantity(pizzaId))
   }} type='small'>+</Button>
    </>
   
  )
}


import Button from '../../ui/Button'
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

export default function Deleteitem({pizzaId}) {
    const dispatch = useDispatch();
    function handleDelete(){
        dispatch(deleteItem(pizzaId));
    
      }
  return (
    <Button onClick={handleDelete} type="small">Delete</Button>
  )
}

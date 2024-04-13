import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';
import Deleteitem from '../cart/Deleteitem';
import { getItemQuantity } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const itemQuantity = useSelector(getItemQuantity(id));
  console.log(itemQuantity);

  const quant = itemQuantity > 0;

  function handleAddtoCart(){
    console.log(id);
    const newItem={
      pizzaId:id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice * 1,
    }
    dispatch(addItem(newItem));

}
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
         {quant && <Deleteitem pizzaId={id}/> } 

         {!soldOut && !quant && (<Button onClick={handleAddtoCart} type="small">Add to cart</Button>) } 
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalQuantity } from './cartSlice';

function CartOverview() {
  //we should always use complex logic related to redux inside the selector function which is inside the useselector() hook.
  //we should not write redux related complex logic inside the component.
  const quantity = useSelector(getTotalQuantity)
  //double cart is  used since the name in value in create slice is "cart", and cart itself is present in  state variable
  //gettotalquantity is the selector function defined cart slice.

  //if!totalprice then can return null 

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{quantity} pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
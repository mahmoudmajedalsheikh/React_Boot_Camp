import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice.js';
import { formatCurrency } from '../../utils/helpers.js';

function CartOverview() {
  // console.log(cart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div
      className="bg-stone-800 text-stone-200 uppercase h-12  w-screen
      sm:px-6 text-xm md:text-base flex justify-between items-center"
    >
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

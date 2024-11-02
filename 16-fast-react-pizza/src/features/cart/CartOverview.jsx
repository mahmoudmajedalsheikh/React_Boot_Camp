import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div
      className="bg-stone-800 text-stone-200 uppercase h-12  w-screen
      sm:px-6 text-xm md:text-base flex justify-between items-center"
    >
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

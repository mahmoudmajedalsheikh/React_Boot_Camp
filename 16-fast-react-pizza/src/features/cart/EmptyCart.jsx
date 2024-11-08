import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton.jsx';

function EmptyCart() {
  return (
    <div>
      <LinkButton to="/menu">Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;

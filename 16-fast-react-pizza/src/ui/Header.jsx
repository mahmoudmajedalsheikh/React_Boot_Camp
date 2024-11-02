import { Link } from "react-router-dom";
import  SearchOrder  from '../features/order/SearchOrder'
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-yellow-400 uppercase 
    tracking-widest px-5 border-b border-stone-600 sm:px-6 h-14 font-pizza">
      <Link to='/' className=" uppercase">Fast React Pizza Co</Link>
      <SearchOrder />
      <UserName/>
    </header>
  )
}

export default Header;

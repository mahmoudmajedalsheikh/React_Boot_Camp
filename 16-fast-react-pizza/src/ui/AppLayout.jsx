import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from '../features/cart/CartOverview'
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading";
  // console.log(navigation)
  return (
    <div className="layout">
      {isLoading && <Loader/>}
      <Header/>
      <main>
        <h1>Hello Pizza</h1>
        <Outlet/>
        <Link to='/cart'>Open cart &rarr; </Link>
      </main>

      <CartOverview/>
    </div>
  )
}

export default AppLayout;

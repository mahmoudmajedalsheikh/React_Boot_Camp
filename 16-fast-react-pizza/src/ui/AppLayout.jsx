import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from '../features/cart/CartOverview'
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading";
  // console.log(navigation)
  return (<>
  <div className="h-screen flex flex-col justify-between ">
      {isLoading && <Loader/>}
      <Header/>
      <div className=" h-full my-10 overflow-scroll flex flex-col  justify-center">
        <main className="h-full">
        <h1>Hello Pizza</h1>
          <Outlet/>
        <Link to='/cart' className=" ">Open cart &rarr; </Link>
        </main>
      </div>
      <div className=" flex w-screen items-end">
        <CartOverview/>
      </div>

  </div>

</>)
}

export default AppLayout;

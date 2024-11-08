import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // console.log(navigation)

  return (
    <>
      <div className="h-screen flex flex-col justify-between ">
        {isLoading && <Loader />}
        <Header />
        <div className=" h-full  overflow-scroll flex flex-col  justify-center content-center  ml-auto mr-auto md:ml-[220px] md:mr-[220px]">
          <main className="h-full w-full basis-8/10 justify-center  content-center">
            {/* <h1>Hello Pizza</h1> */}
            <Outlet />
          </main>
        </div>
        <div className=" flex w-screen items-end">
          <CartOverview />
        </div>
      </div>
    </>
  );
};

export default AppLayout;

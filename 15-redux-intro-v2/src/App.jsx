import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";


function App() {
  // const state = useSelector((state) => state);
  // console.log(state)
  const fullName = useSelector((state) => state.customerReducer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
    {fullName === '' ?
    (<CreateCustomer />)
    :(<>
    <Customer />
    <AccountOperations />
    <BalanceDisplay />
    </>)

  }

    </div>
  );
}

export default App;

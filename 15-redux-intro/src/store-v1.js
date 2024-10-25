import {combineReducers, createStore} from 'redux'

const initialStateAccount = {
  balance:0,
  loan:0,
  loanPurpose:"",
}
//===========================
const initialStateCustomer = {
  fullName:"",
  nationalID:"",
  createdAt:"",
}

//===========================

const ACCOUNT_DEPOSIT = "account/deposit";


///==========================================
function accountReducer (state = initialStateAccount,action) {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
    return{
      ...state,balance:state.balance + action.payload
    }
    case "account/withdrawal":
    return{
      ...state,balance:state.balance - action.payload
    }
    case "account/requestLoan":
    if(state.loan > 0) return 0;
    // LATER action.payload.purpose
    return{
      ...state,loan:action.payload.amount,
      loanPurpose:action.payload.purpose,
      balance:state.balance + action.payload.amount
    }
    case "account/payLoan":
    return{
      ...state,
      loanPurpose:"",
      balance:state.balance - state.loan,
    }
    default:return state;
  }
}


///==========================================
const customerReducer = (state =initialStateCustomer,action ) => {
  switch (action.type) {
    case "customer/createCustomer":
    return{
      ...state,
      fullName:action.payLoad.fullName,
      nationalID:action.payLoad.nationalID,
      createdAt:action.payLoad.createdAt,
    }
    case "customer/updateName":
    return{
      ...state,
      fullName:action.payLoad,
    }
  
    default:return state;
  }
} 




//=================
// store.dispatch({type:'account/deposit',payload:500});
// store.dispatch({type:'account/withdrawal',payload:500});
// // console.log("hey Redux"); for test
// console.log(store.getState()); 
// store.dispatch({type:'account/requestLoan',payload:{
//   amount:1000,
//   purpose:"Buy a Car"
// }});
// console.log(store.getState()); 
// store.dispatch({type:'account/payLoan'});
// console.log(store.getState()); 

// ========== Addtional Trick -> Action Creator




function deposit (amount){
  return{type:ACCOUNT_DEPOSIT,payload:amount}
}
function withdrawal (amount){
  return{type:'account/withdrawal',payload:amount}
}
function requestLoan (amount,purpose){
  return{
    type:'account/requestLoan',
    payload:{amount,purpose}
  }
}
function payLoan (){
  return{type:'account/payLoan'}
}




// ========== Customer


function createCustomer (fullName,nationalID) {
  return{
    type:'customer/createCustomer',
    payLoad:{fullName,nationalID,createdAt:new Date().toISOString()},
  }
}

function updateName (fullName) {
  return{
    type:'customer/updateName',
    payLoad:fullName,
  }
}

//====================

const rootReducer = combineReducers({
  account:accountReducer,
  customer:customerReducer
})

const store = createStore(rootReducer);

//=========================================
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdrawal(300));
console.log(store.getState());
store.dispatch(requestLoan(1000,"buy a phone"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

//=========================================


store.dispatch(createCustomer("Mahmmoud Majed",301958594));
console.log(store.getState());






























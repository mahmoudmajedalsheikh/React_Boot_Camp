const initialStateAccount = {
  balance:0,
  loan:0,
  loanPurpose:"",
};



const ACCOUNT_DEPOSIT = "account/deposit";

export default function accountReducer (state = initialStateAccount,action){
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



export function deposit (amount){
  return{type:ACCOUNT_DEPOSIT,payload:amount}
}
export function withdrawal (amount){
  return{type:'account/withdrawal',payload:amount}
}

export function requestLoan (amount,purpose){
  return{
    type:'account/requestLoan',
    payload:{amount,purpose}
  }
}

export function payLoan (){
  return{type:'account/payLoan'}
}














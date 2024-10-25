import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  balance:0,
  loan:0,
  loanPurpose:"",
  isLoading:false,
};

const accountSlice = createSlice({
  name:'account',
  initialState,
  reducers:{
    deposit(state , action){
      state.balance = state.balance + action.payload;
    },
    withdrawal(state , action){
      state.balance  -=  action.payload;
    },
    requestLoan(state , action){
      if(state.loan > 0) return;
      state.loan = action.payload.amount;
      state.loanPurpose=action.payload.purpose;
      state.balance=state.balance + action.payload.amount;
    },
    payLoan(state){
      state.loan = 0;
      state.loanPurpose="";
      state.balance -= state.loan;
    }
  },
})

// console.log(accountSlice);

export const {deposit,withdrawal,requestLoan,payLoan} = accountSlice.actions;
export default accountSlice.reducer;

// const ACCOUNT_DEPOSIT = "account/deposit";

// export default function accountReducer (state = initialState,action){
//   switch (action.type) {

//     case ACCOUNT_DEPOSIT:
//     return{
//       ...state,
//       balance:state.balance + action.payload,
//       isLoading:false,
//     }

//     case "account/withdrawal":
//     return{
//       ...state,balance:state.balance - action.payload
//     }

//     case "account/requestLoan":
//     if(state.loan > 0) return state;
//     // LATER action.payload.purpose
//     return{
//       ...state,
//       loan:action.payload.amount,
//       loanPurpose:action.payload.purpose,
//       balance:state.balance + action.payload.amount

//     }

//     case "account/payLoan":
//     return{
//       ...state,
//       loan:0,
//       loanPurpose:"",
//       balance:state.balance - state.loan,
//     }

//     case "account/convertingCurrency":
//       return{
//         ...state,
//         isLoading:true
//       }
//     default:return state;
//   }
// }


// export function deposit (amount,currency){
//   if(currency === "USD" )
//   return{
//     type:ACCOUNT_DEPOSIT,
//     payload:amount
//   }
  
//   return async function (dispatch,getState){
//     dispatch({type:'account/convertingCurrency'});

//     //API Call 
//       const res =await fetch(`https://api.frankfurter.app/latest?base=${"EUR"}&symbols=${"USD"}`)
//       const data =await res.json()
//       const convertedAmount = (amount * data.rates["USD"]).toFixed(2);
//       console.log(convertedAmount)

//     dispatch({
//       type:"account/deposit",
//       payload:convertedAmount,
//     })

//     //return action

//   }
// }
// export function withdrawal (amount){
//   return{type:'account/withdrawal',payload:amount}
// }

// export function requestLoan (amount,purpose){
//   return{
//     type:'account/requestLoan',
//     payload:{amount,purpose}
//   }
// }

// export function payLoan (){
//   return{type:'account/payLoan'}
// }














import { combineReducers } from 'redux';

let bankInfo = {
    accounts:[
        {
          "_id": 1,
          "name": "Lannisters",
          "balance": 1189.78
        },
        {
          "_id": 2,
          "name": "Starks",
          "balance": 567.71
        },
        {
          "_id": 3,
          "name": "Baratheons",
          "balance": 31.26
        },
        {
          "_id": 4,
          "name": "Targaryens",
          "balance": 34.75
        },
        {
          "_id": 5,
          "name": "Greyjoys",
          "balance": 9.03
        },
        {
          "_id": 6,
          "name": "Tyrells",
          "balance": 1133.45
        },
        {
          "_id": 7,
          "name": "Martells",
          "balance": 737.9
        },
        {
          "_id": 8,
          "name": "Tullys",
          "balance": 483.56
        },
        {
          "_id": 9,
          "name": "Arryns",
          "balance": 1035.83
        },
        {
          "_id": 10,
          "name": "Free Folk",
          "balance": -134.34
        }
    ],
    transaction:[]
};


const activityReducer = (state, action) => {
    switch (action.type) {
        case 'DEPOSIT_MONEY':
            let balance = parseFloat(state.accounts[action.payload.accountId-1].balance);
            let deposit = parseFloat(action.payload.amount);
            balance += deposit
            state.accounts[action.payload.accountId-1].balance = balance;
            console.log("Added");
            console.log(state.accounts[action.payload.accountId-1].balance)
            console.log(state)
            state.transaction.push(action.payload);
            return state;
        default:
            return bankInfo;
    }
}

export default combineReducers({
    bankInfo: activityReducer
});
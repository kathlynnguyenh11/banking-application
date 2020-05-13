import axios from 'axios';

export const fetchData = () => {
    return dispatch => {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
            dispatch(receivedData(response.data))
        }).catch(error => {
            dispatch(dataRequestFailed(error))
        });
      };
}
export const receivedData = data => ({
    type: 'RECEIVED_DATA', data,
})

export const dataRequestFailed = (err) => ({
    type: 'DATA_FAILED', err,
}) 

export const depositMoney = (accountId, amount, activity) => {
    return {
      type: 'DEPOSIT_MONEY',
      payload: {
        accountId, activity, amount
      }
    }
  }
  
export const withdrawMoney = (accountId, amount, activity) => {
    return {
      type: 'WITHDRAW_MONEY',
      payload: {
        accountId, activity, amount
      }
    }
  }

export const deleteAccount = (accountId) => {
    return {
      type: 'DELETE_ACCOUNT',
      payload: accountId
    }
  }
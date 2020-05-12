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

export const depositMoney = (accountId, amount) => {
    return {
      type: 'DEPOSIT_MONEY',
      payload: {
        accountId, amount
      }
    }
  }
  
export const withdrawMoney = (accountId, amount) => {
    return {
      type: 'WITHDRAW_MONEY',
      payload: {
        accountId, amount
      }
    }
  }

export const deleteAccount = (accountId) => {
    return {
      type: 'DELETE_ACCOUNT',
      payload: accountId
    }
  }
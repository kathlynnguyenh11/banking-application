import React from 'react';
import { connect } from 'react-redux';

class TransactionHistory extends React.Component {
  render() {
    return this.props.transaction.filter(x => x.accountId === this.props.accountId).map(info =>(
      <li className="list-group-item" key={info.accountId}>{info.activity}, Amount: {info.amount}</li>
    ))
    }
}

const mapStateToProps = state => {
    return {
      transaction: state.bankInfo.transaction,
    };
  };
  export default connect(mapStateToProps)(TransactionHistory);
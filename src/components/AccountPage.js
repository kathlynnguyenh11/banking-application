import React from 'react';
import { connect } from 'react-redux';

import DepositMoney from './DepositMoney';
import WithdrawMoney from './WithdrawMoney';
import TransactionHistory from "./TransactionHistory";

class AccountPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accountName: this.props.match.params.name,
            accountInfo: this.props.location.state
        };
    }

  goToHome = () => {
    this.props.history.push(`/`);
  }

  render() {
    return this.props.accounts.filter(accountInfo => accountInfo.name === this.state.accountName).map(accountInfo =>(
      <div className="page-variable" key={accountInfo._id}>
        <h3>Account Page: { this.state.accountName}</h3>
        <button onClick={this.goToHome}>Go To Home</button>
        <div className="container" style={{ marginTop: '15px' }}>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Account Info</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Id: {accountInfo._id}</li>
                            <li className="list-group-item">Name: {accountInfo.name}</li>
                            <li className="list-group-item">Balance: {accountInfo.balance}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                  <div className="card" >
                    <div className="card-body">
                      <h5 className="card-title">Deposit</h5>
                      <DepositMoney accountId={this.state.accountInfo.data._id} />
                    </div>
                  </div>
                  <div className="card" >
                    <div className="card-body">
                      <h5 className="card-title">Withdraw</h5>
                      <WithdrawMoney accountId={this.state.accountInfo.data._id} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card" >
                    <div className="card-body">
                      <h5 className="card-title">Transaction History </h5> 
                    </div>
                    <ul className="list-group list-group-flush">
                      <TransactionHistory accountId={this.state.accountInfo.data._id} />
                    </ul>
                  </div>
                </div>
            </div>
        </div>
      </div>
    ))
  }
}

const mapStateToProps = state => {
    return {
      accounts: state.bankInfo.accounts,
      transaction: state.bankInfo.transaction
    };
  };
  export default connect(mapStateToProps)(AccountPage);
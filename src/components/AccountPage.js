import React from 'react';
import { connect } from 'react-redux';

import DepositMoney from './DepositMoney';
import AccountInfo from './AccountInfo';

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
    let accountInfo = this.props.accounts.filter(x => x.name === this.state.accountName)
    console.log("test render")
    console.log(accountInfo)
    return (
      <div className="page-variable">
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
                            <li className="list-group-item">Id: {accountInfo[0]._id}</li>
                            <li className="list-group-item">Name: {accountInfo[0].name}</li>
                            <li className="list-group-item">Balance: {accountInfo[0].balance}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    Deposit
                    <DepositMoney accountId={this.state.accountInfo.data._id} />
                </div>
                <div className="col-sm-4">
                  <AccountInfo accountId={this.state.accountInfo.data._id}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      accounts: state.bankInfo.accounts,
      transaction: state.bankInfo.transaction
    };
  };
  export default connect(mapStateToProps)(AccountPage);
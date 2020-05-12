import React from 'react';
import { connect } from 'react-redux';

class AccountInfo extends React.Component {
  render() {
    console.log(this.props['accounts'])
    let accountInfo = this.props.accounts.filter(x => x._id === this.props.accountId);
    return (
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
    );
  }
}

const mapStateToProps = state => {
    return {
      accounts: state.bankInfo.accounts,
    };
  };
  export default connect(mapStateToProps)(AccountInfo);
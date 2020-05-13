import React from 'react';
import { connect } from 'react-redux';

import { withdrawMoney } from "../actions";

class WithdrawMoney extends React.Component {
  state = { accountId: '', amount: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.withdrawMoney(this.props.accountId, this.state.amount, "Withdraw");
    this.setState({ accountId: '', amount: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label>how much?</label>
          <input type="text" className="form-control"
                 name="init"
                 value={this.state.amount}
                 onChange={(e) => this.setState({ amount: e.target.value })} />
        </div>
        <input type="submit" className="btn btn-success" value={ `Withdraw` } />
      </form>
    )
  }
}

export default connect(null, { withdrawMoney })(WithdrawMoney);
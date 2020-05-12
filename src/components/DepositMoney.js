import React from 'react';
import { connect } from 'react-redux';

import { depositMoney } from "../actions";

class DepositMoney extends React.Component {
  state = { accountId: '', amount: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.depositMoney(this.props.accountId, this.state.amount);
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
        <input type="submit" className="btn btn-success" value={ `Deposit` } />
      </form>
    )
  }
}

export default connect(null, { depositMoney })(DepositMoney);
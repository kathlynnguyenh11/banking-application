import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteAccount } from "../actions";

class AccountList extends React.Component{
    render(){
        let renderedList = this.props.accounts.map((account)=>{
            return(
                <tr key={account.id}>
                    <td>{account._id}</td>
                    <td>
                        {account.name} 
                        <button type='button'
                                onClick={() => { this.props.deleteAccount(account.id) }}
                                className='btn btn-danger'
                                style={{ float: 'right' }}>
                                Delete
                        </button>
                    </td>
                    <td>${account.balance}</td>
                    <td>
                        <Link to={{
                            pathname: `/page/${account.name}`,
                            state:{
                                data: account
                            } 
                        }}>Here</Link>
                    </td>
                </tr>
            )
        })

        return(
            <table className="table table-hover table-striped ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Account Page</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedList}
                </tbody>
            </table>      
        )
    }
}
const mapStateToProps = state => {
    return {
      accounts: state.bankInfo.accounts
    };
  };

export default connect(mapStateToProps, { deleteAccount })(AccountList);

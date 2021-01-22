import React, { Component } from 'react';
import { connect } from 'react-redux';
import setAuthedUser from '../actions/authedUser';
import logo from '../img/ReactLogo.png';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedUser: '' };
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.selectedUser));
    }

    handleSelectionChange = (e) => {
        this.setState({selectedUser: e.target.value});
    }

    render () {
        const {users} = this.props;
        return (
            <div className = 'login-flex-container'>
                <h4>Welcome to the Would You Rather App!</h4>
                <h5>Please sign in to continue</h5>
                <div>
                    <div>
                        <img src = {logo}
                            alt = "React"
                            className = 'avatar'
                        /> 
                    </div>
                    <h2>Sign in</h2>
                    <form onSubmit = {this.handleSubmit}>
                        <select id = "usersList" className = 'input' onChange={this.handleSelectionChange} >
                            <option value="">--Select User--</option>
                            {Object.keys(users).map((userId) => <option value={userId}>{users[userId].name}</option>)}
                        </select>
                        <input type = "submit" className = 'submit' value = "Sign in"></input>
                    </form>
                </div>
            </div>
        );
    }
}

function  mapStateToProps({users, authedUser}) {
    return{
        users,
        authedUser,
    };
    
}
export default connect(mapStateToProps)(Login);
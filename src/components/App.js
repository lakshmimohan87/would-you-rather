import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import { connect} from 'react-redux';
import PageNotFound from './PageNotFound';
import Questions from './Questions';
import QuestionPoll from './QuestionPoll';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Results from './Results';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import setAuthedUser from '../actions/authedUser';

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  logoutUser(e) {
    this.props.dispatch(setAuthedUser(null));
  }

  render() {
    const {users} = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          {this.props.authedUser ?
          <div className =  'container'>
              <nav className = 'nav'>
                <ul>
                    <li>
                        <NavLink to = '/' exact className = 'link' activeClassName = 'active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = '/Leaderboard' className = 'link' activeClassName ='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = '/add' className = 'link' activeClassName = 'active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <div className = 'link'>Hello, {users[this.props.authedUser].name}</div>
                        
                    </li>
                    <li>
                          <img src = { users[this.props.authedUser].avatarURL }
                                  alt = {`Avatar of  ${users[this.props.authedUser].name}`}
                                  className = 'avatar-small'
                          />
                    </li>
                    <li>
                        <NavLink to = '/' className = 'link' activeClassName = 'link' onClick={this.logoutUser.bind(this)}>
                            Logout
                        </NavLink>
                    </li>
                  
                </ul>
            </nav>
            {this.props.loading === true
            ? null
            : <div>
                <Switch>
                  <Route path = '/' exact component = {Questions} />
                  <Route path = '/Results/:id' component = {Results} />
                  <Route path = '/Questions/:id' component = {QuestionPoll} />
                  <Route path = '/add' component = {NewQuestion} />
                  <Route path = '/Leaderboard' component = {Leaderboard} />
                  <Route path = '/Login' component = {Login} />
                  <Route path = '/404' component = {PageNotFound} />
                  <Redirect to="/404" />
                </Switch>
              </div>
            }    
          </div> : <Login></Login>}
        </Fragment>
      </Router>
    );
  }
}


function mapStateToProps({ authedUser, users }) {
  return{
    loading: authedUser === null,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leader extends Component {

    render () {
        const { users, leaderId, answersCount, questionsCount, score } = this.props;
        
        return (
            <div className = 'leader-grid'>
                <div>
                    <img src = { users[leaderId].avatarURL }
                        alt = {`Avatar of  ${users[leaderId].name}`}
                        className = 'avatar'
                    /> 
                </div>   
                <div>
                    <h3>{users[leaderId].name}</h3>
                    <h5>Answered Questions  {answersCount}</h5>
                    <h5>Created Questions   {questionsCount}</h5>
                </div>
                <div>
                    <h4>Score</h4>
                    <h4 className = 'score'>{score}</h4>
                </div>          
                
            </div>
        );
    }
}

function mapStateToProps({ users }){
    return {
        users
    };
}

export default connect(mapStateToProps)(Leader);
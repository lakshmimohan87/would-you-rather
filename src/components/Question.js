import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Question extends Component {
    
    render () {
        const { questions, users, questionId } = this.props;
        const { author, optionOne, optionTwo } = questions[questionId];
        const { name, avatarURL } = users[author];
        
        return (
            
            <div className = 'flex-container'>
                <h3>{ name } asks:</h3>
                <div>
                <div className = 'flex-item-left'>
                    <img src = { avatarURL }
                    alt = {`Avatar of  ${name}`}
                    className = 'avatar'
                    />
                </div>
                    <div className = 'flex-item-right'>
                        <h4 className = 'center'>Would you rather... </h4>
                        <div className = 'question'>
                            <label className = 'option-one center'>{optionOne.text}</label> 
                            <label className = 'center'>OR</label>
                            <label className = 'option-two center'>{optionTwo.text}</label>
                        
                            <Link to = {`/questions/${questionId}`} >
                                <button className = 'submit '>View Poll</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>       
        
        );
    }
}

function mapStateToProps ({ authedUser,users,questions,currentQuestionsTab }) {
    return {
        authedUser,
        users,
        questions, 
        currentQuestionsTab 
    };
}

export default withRouter(connect(mapStateToProps)(Question));
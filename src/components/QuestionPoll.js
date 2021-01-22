import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/answers';
import { withRouter, Redirect } from 'react-router-dom';

class QuestionPoll extends Component {

    hasCurrentUserAnswered() {
        const { users, questionId, authedUser } = this.props;
        return Object.keys(users[authedUser].answers).includes(questionId);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, authedUser, questionId} = this.props;
        const answer = e.target.optionOne.checked ? "optionOne" : "optionTwo";
        dispatch(handleAddAnswer(authedUser, questionId, answer));
    }

    render () {
        const { questions, users, questionId  } = this.props;
        if(!Object.keys(questions).includes(questionId)) {
            return (<div> <Redirect to='/404'></Redirect> </div>);
        }
        const { author, optionOne, optionTwo } = questions[questionId];
        const { name, avatarURL } = users[author];
        const hasCurrentUserAnswered = this.hasCurrentUserAnswered();
            return (
                <div>
                { hasCurrentUserAnswered ? 
                <div> <Redirect to={`/results/${questionId}`}></Redirect> </div> :
                <div className = ' flex-container-result '>
                    <h3>{ name } asks:</h3>
                     <div>
                        <div className = 'flex-item-left' >
                            <img src = { avatarURL }
                                alt = {`Avatar of  ${name}`}
                                className = 'avatar'
                            />
                        </div>
                        <div className = 'flex-item-right'>
                            <h2 className = 'center'>Would You Rather ...</h2> 
                            <form className = 'questionpoll-form' onSubmit = {this.handleSubmit}>
                                <input type = "radio" id = "optionOne" name = "options" className = 'questionpoll-input'  value="optionOne" checked></input>
                                <label className = 'questionpoll-label'>{optionOne.text}</label> 
                                <input type = "radio" id = "optionTwo" name = "options"  className = 'questionpoll-input' value="optionTwo"></input>
                                <label className = 'questionpoll-label'>{optionTwo.text}</label>
                                <input type = "submit" className = 'questionpoll-button submit' value = "Submit"></input>                          
                            </form>  
                        </div> 
                    </div>    
                </div>}
                </div>
            );
        }
       
    
}
function mapStateToProps ({ questions, users, authedUser },props)
{   
    const { id } = props.match.params;
    
    return{
        questions,
        users,
        authedUser,
        questionId: id,
    };
}

export default withRouter(connect(mapStateToProps)(QuestionPoll));
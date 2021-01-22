import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Question from './Question';
import setCurrentQuestionTab, {CURRENT_QUESTIONS_TAB_UNANSWERED, CURRENT_QUESTIONS_TAB_ANSWERED} from '../actions/questionsTab';

class Questions extends Component {
    switchToAnswered(e) {
        e.preventDefault();
        this.props.dispatch(setCurrentQuestionTab(CURRENT_QUESTIONS_TAB_ANSWERED));
    }

    switchToUnanswered(e) {
        e.preventDefault();
        this.props.dispatch(setCurrentQuestionTab(CURRENT_QUESTIONS_TAB_UNANSWERED));
    }

    render () {
        const { questions, users, authedUser, currentQuestionsTab } = this.props;
        const { answers } = users[authedUser];
        let activeAnswered = '';
        let activeUnanswered = '';
        let currentQuestions = Object.keys(answers);
        if (currentQuestionsTab === CURRENT_QUESTIONS_TAB_UNANSWERED) {
            currentQuestions = Object.keys(questions).filter((questionKey) => !currentQuestions.includes(questionKey));
             activeUnanswered = 'active';
        }
        else {
            activeAnswered = 'active';
        }
        
        currentQuestions.sort((a,b) => questions[b].timestamp-questions[a].timestamp);
        return (
            
            <div >
                <div className = 'nav-questions'>
                    <ul>
                        <li>
                            <Link to='.' onClick={this.switchToUnanswered.bind(this)} className = {`link ${activeUnanswered}`}>Unanswered</Link>
                        </li>
                         
                        <li>
                            <Link to='.' onClick={this.switchToAnswered.bind(this)} className = {`link ${activeAnswered}`}>Answered</Link>
                        </li>    
                    </ul>    
                </div> 
                <div className = 'questions-container'>  
                    <ul>
                        {currentQuestions.map((answerKey) => (
                            <li key= {answerKey}>
                                <Question questionId = {answerKey} /> 
                            </li>
                            ))
                        }
                        
                    </ul>
               </div>
 
             
            </div>

        );
    }
}

function mapStateToProps({ authedUser,users,questions, currentQuestionsTab }) {
    return {
        authedUser,
        users,
        questions, 
        currentQuestionsTab
    };

}

export default connect(mapStateToProps)( Questions );
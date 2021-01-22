import { _getUsers, _getQuestions } from "../data/_DATA";
import { showLoading, hideLoading }  from 'react-redux-loading';
import { receiveQuestions } from './questions';
import setCurrentQuestionTab, { CURRENT_QUESTIONS_TAB_UNANSWERED } from './questionsTab';
import receiveUsers from './users';


function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }));
  }

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setCurrentQuestionTab(CURRENT_QUESTIONS_TAB_UNANSWERED))
                dispatch(hideLoading())
            });
    };
}
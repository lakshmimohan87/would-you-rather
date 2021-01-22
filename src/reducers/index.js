import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import authedUser from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';
import currentQuestionsTab from './questionsTab';

export default combineReducers({
    authedUser,
    users,
    questions,
    currentQuestionsTab,
    loadingBar : loadingBarReducer,
});



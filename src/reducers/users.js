import { ADD_QUESTION } from '../actions/questions';
import { RECEIVE_USERS } from '../actions/users';
import { ADD_ANSWER } from '../actions/answers';
 
export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };

        case ADD_QUESTION :
            const currentUser = state[action.question.author];
            let currentUserQuestions = currentUser.questions;
            currentUserQuestions = currentUserQuestions.concat([action.question.id]);
            return{
                ...state,
                [action.question.author] : { ...currentUser, questions: currentUserQuestions },
                
            };
        case ADD_ANSWER :
            return{
                ...state,
                [action.authedUser] : {...state[action.authedUser], 
                                       answers: { ...state[action.authedUser].answers,
                                       [action.answer.qid]: action.answer.answer }}
            };  

        default : return state; 

    }
}
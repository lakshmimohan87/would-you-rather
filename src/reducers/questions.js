import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_ANSWER } from '../actions/answers';

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            };
        
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id] : action.question,
            };

        case ADD_ANSWER :
            const questionId = action.answer.qid ;
            const newAnswer = action.answer.answer ;
            if(newAnswer === 'optionOne') {
                return {
                    ...state,
                    [questionId]: { ...state[questionId],
                                    optionOne: {...state[questionId].optionOne, 
                                    votes: state[questionId].optionOne.votes.concat([action.authedUser])} }
                };
            }
            else if(newAnswer === 'optionTwo') {
                return {
                    ...state,
                    [questionId]: { ...state[questionId], 
                                    optionTwo: {...state[questionId].optionTwo, 
                                    votes: state[questionId].optionTwo.votes.concat([action.authedUser])} }
                };
            }
            else {
                return state;
            }
        default : return state ;
    }
}
import { saveQuestionAnswer } from "../data/api";
import { showLoading, hideLoading }  from 'react-redux-loading';

export const ADD_ANSWER = 'ADD_ANSWER';
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';

export function addAnswer (authedUser,qid,answer) {
    return {
        type : ADD_ANSWER,
        authedUser,
        answer:{qid,
                answer
                }    
    };
}

export default function receiveAnswer (answers) {
    return {
        type : RECEIVE_ANSWERS,
        answers,
    };
} 

export function handleAddAnswer (authedUser,qid,answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading);
        return saveQuestionAnswer({authedUser,
                                    qid, 
                                    answer
                                 })
                .then((value) => {
                dispatch(addAnswer(authedUser,qid,answer));
        })
        .then(() => dispatch(hideLoading()));
    };
}

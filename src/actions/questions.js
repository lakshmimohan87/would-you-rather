import { saveQuestion } from '../data/api';
import { showLoading, hideLoading }  from 'react-redux-loading';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

function addQuestion (question) {
    return {
        type : ADD_QUESTION,
        question,
    };
}


export function receiveQuestions (questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions,
    };
}

export function handleAddQuestion (optionOneText,optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading);
        return saveQuestion({optionOneText,
                              optionTwoText, 
                            author:authedUser
                            })
        .then((question) => {
            dispatch(addQuestion(question));
        })
        .then(() => dispatch(hideLoading()));
    };
}

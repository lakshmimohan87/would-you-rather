import { SET_CURRENT_QUESTIONS_TAB } from '../actions/questionsTab';

export default function questionsTab (state = null, action) {
    switch(action.type) {
        case SET_CURRENT_QUESTIONS_TAB :
            return action.currentQuestionsTab;
        default : return state;
    }

}
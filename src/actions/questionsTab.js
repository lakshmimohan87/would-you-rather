export const SET_CURRENT_QUESTIONS_TAB = 'SET_CURRENT_QUESTIONS_TAB';
export const CURRENT_QUESTIONS_TAB_ANSWERED = 'CURRENT_QUESTIONS_TAB_ANSWERED';
export const CURRENT_QUESTIONS_TAB_UNANSWERED = 'CURRENT_QUESTIONS_TAB_UNANSWERED';

export default function setCurrentQuestionTab (currentQuestionsTab) {
    return {
        type : SET_CURRENT_QUESTIONS_TAB,
        currentQuestionsTab,
    };
} 
import { _saveQuestion, _saveQuestionAnswer } from './_DATA.js';

export function saveQuestion (question) {
    debugger;
    return _saveQuestion(question)
}

export function saveQuestionAnswer ({authedUser,qid,answer}) {
  return _saveQuestionAnswer({authedUser,qid,answer})
}
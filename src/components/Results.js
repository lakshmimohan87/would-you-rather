import React, { Component} from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {  Redirect } from "react-router-dom";

class Results extends Component {
    
    
    render () {
        
        const { questions, users, questionId, authedUser } = this.props;
        const currentQuestion = questions[questionId];
        const { name, avatarURL } = users[currentQuestion.author];
        const optionOneVotesCount = currentQuestion.optionOne.votes.length;
        const optionTwoVotesCount = currentQuestion.optionTwo.votes.length;
        const totalVotes = optionOneVotesCount + optionTwoVotesCount;
        const optionOnePercentage = Math.round(optionOneVotesCount * 100 / totalVotes);
        const optionTwoPercentage = Math.round(optionTwoVotesCount * 100 / totalVotes);
        let optionOneBadgeClass = '';
        let optionTwoBadgeClass = '';
        let showBadgeOnOne = false;

        if ((currentQuestion.optionOne.votes).includes(authedUser)) {
            optionOneBadgeClass = 'notification ';
            showBadgeOnOne = true;
        }
        else if ((currentQuestion.optionTwo.votes).includes(authedUser)) {
            optionTwoBadgeClass = 'notification ';
        }
        else {
            return(<div> <Redirect to={`/Questions/${questionId}`}></Redirect> </div>);
        }

        return (
            <div className = 'flex-container-result'>
                <h3>Asked by {name}</h3>
                <div>
                    <div className = 'result-flex-item-left' >
                        <img src = { avatarURL }
                            alt = {`Avatar of  ${name}`}
                            className = 'result-avatar'
                        />
                    </div>
                    <div className = 'flex-item-right result-flex'>
                        <h3>Results:</h3>
                        <div className = {`result ${optionOneBadgeClass}`}>
                            {showBadgeOnOne ? <span className = 'badgeOne'>your vote</span> : ""}
                            <h4>Would you rather {currentQuestion.optionOne.text} ?</h4>
                            <h5>{`${optionOneVotesCount} out of ${totalVotes} votes`}</h5>
                            <ProgressBar now = {optionOnePercentage}  label={`${optionOnePercentage}%`} /> 
                        </div>
                        <div className = 'result-filler'></div>
                        <div className = {`result ${optionTwoBadgeClass}`}>
                            {!showBadgeOnOne ? <span className = 'badgeTwo'>your vote</span> : ""}
                            <h4>Would you rather {currentQuestion.optionTwo.text} ?</h4>
                            <h5>{`${optionTwoVotesCount} out of ${totalVotes} votes`}</h5>
                            <ProgressBar now = {optionTwoPercentage} label={`${optionTwoPercentage}%`} /> 
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, authedUser },props) {
    const { id } = props.match.params;
    return {
        questions,
        users,
        authedUser,
        questionId: id,
    };
}


export default connect(mapStateToProps)(Results);
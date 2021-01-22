import React, { Component } from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';


class Leaderboard extends Component {
    
    render () {
                const { users } = this.props;
                let usersWithScores = [];
                Object.keys(users).map((userId) => usersWithScores.push(getUserWithScores(users, userId)));
                usersWithScores.sort((a, b) => b.score-a.score);

                return (
                    <div>
                        <ul>
                            {usersWithScores.map((userWithScore) => {
                                return <li key={userWithScore.userId}>
                                        <Leader leaderId={userWithScore.userId}
                                                answersCount={userWithScore.answersCount}
                                                questionsCount={userWithScore.questionsCount}
                                                score = {userWithScore.score} />
                                        </li>})}
                        </ul>
                    </div>
                    
                );
    }
       
}

    function getUserWithScores(users, userId) {
        const answersCount = Object.keys(users[userId].answers).length;
        const questionsCount = users[userId].questions.length;
        const score = answersCount + questionsCount;
        return { userId, answersCount, questionsCount, score };
    }

    function mapStateToProps({ users }){
        return {
            users
        };
    }

    export default connect(mapStateToProps)(Leaderboard);

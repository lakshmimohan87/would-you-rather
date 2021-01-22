import React, { Component} from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';


class NewQuestion extends Component {
    constructor(props){
        super(props);
        this.state= {optionOne : '',
                     optionTwo : '' ,
                     hasQuestionSaved : false };
        }

    handleChange = (e) => {
        if (e.target.id === "optionOne"){
            this.setState ((currentState) => ({...currentState, optionOne: e.target.value}) );
        }
        else if (e.target.id === "optionTwo"){
            this.setState ((currentState) => ({...currentState, optionTwo: e.target.value}) );
        }
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        const { optionOne } = this.state;
        const { optionTwo } = this.state;
        const { dispatch } = this.props;

        dispatch(handleAddQuestion( optionOne, optionTwo ));
        this.setState((currentState) => currentState.hasQuestionSaved = true);
        
    }

    
    render () {
        
        return(
            <div>
                { this.state.hasQuestionSaved ? 
                <div> <Redirect to={`/`}></Redirect> </div> :
                <div className = 'newquestionbox'>
                    <h1 className = 'newquestionheaderborder'>Create New Question</h1>
                    <h3>Complete the question</h3>
                    <h2>Would You Rather...</h2>
                    <form onSubmit = { this.handleSubmit }>
                        <input type = "text" id = "optionOne" className = 'input' value = { this.state.optionOne } onChange = { this.handleChange }></input>
                        <h2 className = 'center'>OR</h2>
                        <input type = "text" id = "optionTwo" className = 'input' value = { this.state.optionTwo } onChange = { this.handleChange }></input>
                        <button className ='submit' type ='submit' disabled = {this.state.optionOne === '' && this.state.optionTwo === ''}>
                            Submit
                        </button>
                    </form>
                </div> }
            </div>
        );
    }
}

export default connect()(NewQuestion);
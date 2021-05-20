import React, {Component} from 'react'

export default class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.searched(this.state.query)
    }

    inputHandler = (e) => {
        this.setState({query: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                <label>Enter a Search Term:</label>
                <input type='text' value={this.state.query} onChange={this.inputHandler}></input>
                <input type='submit' ></input>
            </form>
        )
    }
}
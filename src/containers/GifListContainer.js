import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: [],
            query: '',
            apiKey: 'lVEwBaUZWcc8lEAQ3uaLQsJMhGUX3Eqi'
        }
    }

    newSearch = (q) => this.setState({query: q})

    componentDidUpdate() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${this.state.apiKey}&rating=g`).then(resp => resp.json()).then(gifs => this.setState({gifs: gifs.data.slice(0,3)}))
    }

    render() {
        return (
            <div>
                <GifSearch searched={this.newSearch.bind(this)}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
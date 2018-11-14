import React from 'react';
import List from './List';

export default class WikipediaViewer extends React.Component {
    state = {
        linkInfo: []
    }

    handleSearch = (e) => {
        e.preventDefault();
        const link = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=' + e.target.elements.wikiSearch.value

        fetch(link)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState(() => ({
                    linkInfo: myJson.query.search
                }))
            })
            console.log(this.state.linkInfo)
    }

    render() {
        return (
            <div>
                <h1>Wikipedia Search</h1>
                <form onSubmit={this.handleSearch}>
                    <input type='text' id='wikiSearch'></input>
                    <button>Search</button>
                </form>
                <List linkInfo={this.state.linkInfo} />
            </div>
        )
    }
}
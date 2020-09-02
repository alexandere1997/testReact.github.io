import React, { Component } from 'react';

export default class Search extends Component{
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    render() {
        return(
        <div className="app__search">
            <h3>Найти</h3>
            <input type="text"
                  value={this.state.term}
                  onChange={this.onSearchChange}
                  placeholder="Введите фамилию" />
        </div>
        )
    }
}
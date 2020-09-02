import React, { Component } from 'react';

export default class Modal extends Component{
    constructor() {
        super();
        this.state = {
            modalon: false,
            value__one: "",
            value__two: "",
            value__fri: "",
            value__four: "",
        } 
    }
    onTextChangeOne = (e) => {
        this.setState({
           value__one: e.target.value,
        })
      };
      onTextChangeTwo = (e) => {
        this.setState({
           value__two: e.target.value
        })
      };
      onTextChangeFri = (e) => {
        this.setState({
           value__fri: e.target.value
        })
      };
      onTextChangeFour = (e) => {
        this.setState({
           value__four: e.target.value
        })
      };

    modalOn  = () => {
        this.setState({
            modalon: !this.state.modalon
        })
    }
    render() {
        const {value__one, value__two, value__fri, value__four} = this.state
        return(
            <div>
            <button className="app__button" onClick={this.modalOn}>Добаить запись</button>
            { !this.state.modalon ? null : <div className="app__modal">
                <div className="app__inner">
                <p className="app__off" onClick={this.modalOn}>&times;</p>
                <div className="app__items">
                    <label>Фамилия</label>
                    <input type="text"
                           value={this.state.value__one}
                           onChange={this.onTextChangeOne} />
                </div>
                <div className="app__items">
                    <label>Имя</label>
                    <input type="text"
                           value={this.state.value__two}
                           onChange={this.onTextChangeTwo} />
                </div>
                <div className="app__items">
                    <label>Возраст</label>
                    <input type="text"
                           value={this.state.value__fri}
                           onChange={this.onTextChangeFri} />
                </div>
                <div className="app__items">
                    <label>Наименование должности</label>
                    <input type="text"
                           value={this.state.value__four}
                           onChange={this.onTextChangeFour} />
                </div>
                <button className="app__btn_two" onClick={() => this.props.onItemAdded(value__one, value__two, value__fri, value__four)}>Добавить</button>
                </div>
            </div>}
            </div>
        )
    }
}
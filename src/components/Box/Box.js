import React, { Component } from 'react';
import "./Box.css"
export default class Box extends Component{
    render() {
        const {name, famile, age, onDeleted, caption} = this.props
        return(
        <tr>
            <td>{name}</td>
            <td>{famile}</td>
            <td>{age}</td>
            <td>{caption}</td>
            <td><button onClick={onDeleted}>Удалить</button></td>
            <td><button>Редактировать</button></td>
        </tr> 
        )
    }
}
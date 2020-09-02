import React , { Component } from 'react';
import Box from "../Box/Box";
export default class Table__content extends Component {

    render() {
        const {data__one, onDeleted} = this.props
        let items = data__one.map((item) => {
            const {id, ...itemProps } = item;
            return(
                <tbody key={id}>
                    <Box 
                    {...itemProps }
                     onDeleted={() => onDeleted(id)}
                    />
                </tbody>
            )
        })
        return(
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                    <th>Наименование должности</th>
                </tr>
            </thead>
              {items}
        </table>
        )
    }
} 
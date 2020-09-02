import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Table__content from "./components/table__content/Table__content";
import Modal from "./components/Modal/Modal";
import Search from "./components/Search/Search"

export default class App extends Component{
  maxId = 100;
  state = {
    arr1: [
      {
        id: 1,
        name: "Иван", 
        famile: "Абрамов",
        age: 29, 
        positioned: 1,
        caption: "Product Manager"
      },
      {
        id: 2,
        name: "Сергей",
        famile: "Петров",
        age: 27 ,
        positioned: 2,
        caption: "Senior Developer"
      },
      
      {
        id: 3,
        name: "Георгий",
        famile: "Васютин",
        age: 21 , 
        positioned: 3,
        caption: "Middle Developer"
      },
      
      {
        id: 4,
        name: "Александр",
        famile: "Алиев", 
        age: 23 , 
        positioned: 3,
        caption: "Junior Developer"
      }
    ],
    term: "",
  };
  addItem = (text__one, text__two, text__fri, text__four) => {
    const newItem = {
      name: text__one,
      famile: text__two,
      age: text__fri,
      caption: text__four,
      id: this.maxId++
    };

    this.setState(({ arr1 }) => {
      const newArr = [
        ...arr1,
        newItem
      ];

      return {
        arr1: newArr
      };
    });
  };

  deletedItem = (id) => {
    this.setState(({ arr1 }) => {
      const idx = arr1.findIndex((el) => el.id === id);

      const newArr = [
        ...arr1.slice(0, idx),
        ...arr1.slice(idx + 1)
      ];

      return {
        arr1: newArr
      }
    })
  }  

  search(items, term) {
    if(term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.famile.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }
  onSearchChange = (term) => {
    this.setState({ term })
  }

   render() {
     const {arr1, term } = this.state;

     const visibleItems = this.search(arr1, term);
     return(
      <div className="App">
        <Header/>
        <Table__content
          data__one={visibleItems}
          onDeleted={ this.deletedItem }
         />
         < Modal onItemAdded={this.addItem}/>
         < Search 
           onSearchChange={this.onSearchChange} />
        <Footer/>
      </div>
     )
   }
}


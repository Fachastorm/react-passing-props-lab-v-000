import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;


class App extends Component{
    constructor(){ 
        super();

        this.state = { 
            fruit:[], 
            filters:[],
            currentFilter: null
        }
    }

    componentDidMount(){ 
        this.fetchFilters(); 
        this.fetchFruit();
    }


    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
      }

    fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters }));
      }

      fetchFruit() {
        fetch('/api/fruit')
          .then(response => response.json())
          .then(fruit => this.setState({ fruit }));
      }

      render() { 
          return(
              <FruitBasket
              updateFilterCallback={this.handleFilterChange} fruit={this.state.fruit}
              filters={this.state.filters} currentFilter={this.state.currentFilter} /> 
          )
      }


}

export default App;

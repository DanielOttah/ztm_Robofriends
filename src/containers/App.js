import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from '../components/CardList';
// import { robots } from './robots';
import { SearchBox } from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users }));

    const dat = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await dat.json();
    this.setState({ robots: res })


  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

  }
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    // console.log(filteredRobots);

    // function App() {
    if (this.state.robots.length === 0) {
      return <h1>Loading ...</h1>
    } else {
      return (
        <div className="tc">
          <header className="">
          </header>
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>

      );
    }
  }
}

export default App;

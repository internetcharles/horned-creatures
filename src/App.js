import React from 'react';
import './App.css';
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';
import data from './data'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this);
  }
  
  

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      
      <div className="App">
        <Header />
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="" defaultValue>Select Keyword</option>
            <option value="narwhal">narwhal</option>
            <option value="rhino">rhino</option>
            <option value="unicorn">unicorn</option>
            <option value="triceratops">triceratops</option>
            <option value="unilego">unilego</option>
        </select>
        <p>horn count: {this.state.value}</p>
        <ImageList data={data} keyword={this.state.value} />
      </div>
    );
    }
}

export default App;

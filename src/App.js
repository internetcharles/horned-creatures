import React from 'react';
import './App.css';
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';
import data from './data'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', hornCount: data.horns, urls: data.url }

    this.handleChange = this.handleChange.bind(this);
  }
  
  cunti

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      
      <div className="App">
        <Header />
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Select Horn Count</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
        </select>
        <p>horn count: {this.state.value}</p>
        <ImageList data={data} />
      </div>
    );
    }
}

export default App;

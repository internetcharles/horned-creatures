import React from 'react';
import './App.css';
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';
import data from './data'


const container = [];
const hornContainer = [];

data.forEach(creature => {
  if (container.includes(creature.keyword)) {
    return
  }
  else { container.push(creature.keyword)
  }
});
data.forEach(creature => {
  if (hornContainer.includes(creature.horns)) {
    return
  }
  else { hornContainer.push(creature.horns) }
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "", hornCount: "" }

    this.handleChange = this.handleChange.bind(this);
    this.handleHornChange = this.handleHornChange.bind(this);

  }
  


  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleHornChange(event) {
    this.setState({ hornCount: event.target.value })
  }

  render() {
    return (
      
      <div className="App">
        <Header />
        <select onChange={this.handleChange}>
            <option value="" defaultValue>Select Keyword</option>
            {container.map((keyword) =>
                    <option value={keyword}>{keyword}</option>
                    )}
        </select>
        <select onChange={this.handleHornChange}>
            <option value="" defaultValue>Select Horn Count</option>
            {hornContainer.map((horns) =>
                    <option value={horns}>{horns}</option>
                    )}
        </select>
        <p>Keyword: {this.state.value}</p>
        <p>Horn Count: {this.state.hornCount}</p>
        <ImageList data={data} keyword={this.state.value} horns={this.state.hornCount} />
      </div>
    );
    }
}

export default App;

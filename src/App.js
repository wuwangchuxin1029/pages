import React, { Component } from 'react';
import Parent from './components/parentHoc'
import './App.css';

class App extends Component {
  constructor(){
    super()
  }
  // componentDidMount (){
  //   const { pageData } = this.state
  //   axios.post('/api/page')
  //   .then((res) => {
  //       this.setState({
  //         pageData:res.data
  //       })
  //   })
  // }
  render() {
    // const { pageData } = this.state
    return (
      <div className="App">
        <Parent/>
      </div>
    )
  }
}

export default App;

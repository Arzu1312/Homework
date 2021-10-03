import React, { Component } from 'react';
import './app.css';
import Form from './components/Form';
import List from './components/List';


class App extends Component {

  state ={
    data:[]
  };

  handleSubmit = (newValue) => {
    this.setState({data: [...this.state.data, newValue]})
  }

  //LocalStorage
  componentDidUpdate(){
    localStorage.setItem('dataStore',JSON.stringify(this.state.data))
  }
  
  handleRemove = index => {
    const {data} = this.state;
    this.setState({
      data: data.filter((item,i)=> {
        return i !== index
      })
    })
    }


  render() {
    const{data}= this.state
    console.log(data)

    return (
      <div className="app">
      <Form onSubmit={this.handleSubmit}/>
        <h1>Todo list</h1>
       <List todo={data}
       onDelete = {this.handleRemove}
       />
      </div>
    )
  }
}

export default App

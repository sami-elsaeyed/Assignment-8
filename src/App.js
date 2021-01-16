import logo from './logo.svg';
import './App.css';
import { Component } from "react";

import Table from './components/table'

  class App extends Component{
    constructor(props){
      super(props)
      this.state={
        col:0,
        row:0,
        color:""
      }
    }
    addRow=()=>{
      if(this.state.col===0){
      this.setState({col:this.state.col+1})}
      this.setState({row:this.state.row+1})
    }
    addCol=()=>{
      if(this.state.row===0){
        this.setState({row:this.state.row+1})}
      this.setState({col:this.state.col+1})
    }
    render(){
  return (
    <div className="App">
      <button onClick={this.addRow}>Add Row</button>
      <button onClick={this.addCol}>Add Column</button>
      <Table rows={this.state.row} cols={this.state.col} color={this.state.color} />
    </div>
  );
}
  }
export default App;

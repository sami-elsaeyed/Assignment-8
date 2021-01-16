import {  Component } from "react";

class TableCell extends Component{
    constructor(props){
        super(props)
        this.state={
            color:""
        }
    }
    handleClick=(event)=>{
         this.setState({color:this.props.color})
      
    }
render(){
    console.log("this is cell")
    return  <td onClick={this.handleClick} style={{backgroundColor:this.state.color}}>hello</td>
        
}

}
export default TableCell
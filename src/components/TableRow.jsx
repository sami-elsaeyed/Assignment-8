import { Component } from "react";

import TableCell from "./TableCell"

class TableRow extends Component{

        render(){
            console.log("this is row")
            return <tr>      
              {Array(this.props.col).fill(<TableCell color={this.props.color}/>)}
              </tr> 
        }

}
export default TableRow
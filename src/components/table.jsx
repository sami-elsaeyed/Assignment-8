import {Component} from 'react'
import TableRow from "./TableRow"


class Table extends Component{
    render(){
        console.log("this is table")
        return <table>
            {Array(this.props.rows).fill(<TableRow col={this.props.cols}/>)}
            </table>
    }
}
export default Table
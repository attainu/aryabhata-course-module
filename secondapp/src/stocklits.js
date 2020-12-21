import React, { Component } from 'react';
import TableRow from './TableRow';

class StockList extends Component {
    constructor(props) {
        super(props);
      }
      
      tabRow(){
        if(this.props.data instanceof Array){
          return this.props.data.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        return (
            <div className="container">
                 <h1>Stock List</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>Stock Name</td>
                  <td>Stock Price</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
            <hr/>
        </div>
        );
      }
}

export default StockList
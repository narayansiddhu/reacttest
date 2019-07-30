import React from 'react';
import './App.css';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      rows: 0, 
      cols: [], 
      spaceRow: 0,
      spaceCol: 0 
    };
    this.handleRow = this.handleRow.bind(this);
    this.handleColumn = this.handleColumn.bind(this);
    this.handleRowSpace = this.handleRowSpace.bind(this);
    this.handleColumnSpace = this.handleColumnSpace.bind(this);
  }

  handleRow(e) {
    this.setState({ rows: e.target.value });
  }
  handleColumn(e) {
    this.setState({ cols: e.target.value.split(',')});
  }

  handleRowSpace(e) {
    this.setState({ spaceRow: e.target.value });
  }

  handleColumnSpace(e) {
    this.setState({ spaceCol: e.target.value });
  }

  render() {
    const getRows = this.state.rows
    const getColumn = this.state.cols
    var rows = ""
    var cols = ""
    var cols1 = ""
    var marginBottom = this.state.spaceRow
    var marginRight = this.state.spaceCol
    if (getColumn.length == 2) {
      var maxwidth = ""
      var maxwidth1 = ""
      getColumn.map((num, i) => {
       // console.log("checking the num",getColumn[1])
        if (i == 0) {   
          if(getColumn[0]>getColumn[1]){
            maxwidth1 = (getColumn[0]*100)/getColumn[1]+"px"
            console.log("checking th3 ",maxwidth1)
            maxwidth = "100px"
          }else{
            maxwidth = (getColumn[1]*100)/getColumn[0]+"px"
            maxwidth1 = "100px";
          }
          for (var i = 1; i <= num; i++) {
            cols = cols + `<div style="margin-bottom:${marginBottom}; margin-right:${marginRight}"><div style="width:${maxwidth}; height:100px;border :2px solid black;" id="test">
          </div> </div>`
          }
        } else if (i == 1) {         
          for (var i = 1; i <= num; i++) {
            cols1 = cols1 + `<div style="margin-bottom:${marginBottom}; margin-right:${marginRight}"><div style="width:${maxwidth1}; height:100px;border :2px solid black;" id="test">
            </div></div>`
          }
        }
      })
    }
    for (var i = 1; i <= getRows; i++) {
      rows = rows + `<div style="margin-bottom:${marginBottom}; margin-right:${marginRight}"><div style="width:100px; height:100px;border :2px solid black;" id="test">
      </div> </div>`
    }
    return (
      <div>
        <h1>Please Enter the Fields</h1>
        <label>Enter Rows :</label>
        <input onChange={this.handleRow} placeholder="No of Rows"></input>
        <label>Enter Rows and Columns:</label>
        <input onChange={this.handleColumn} placeholder="Columns String"></input>
        <label>Enter space for rows in PX's :</label>
        <input onChange={this.handleRowSpace} placeholder="Space between rows"></input>
        <label>Enter space for boxes in PX's :</label>
        <input onChange={this.handleColumnSpace} placeholder="Space between boxes"></input>
        <br></br>
        <br></br>
        <div className="changetorow">
          {ReactHtmlParser(rows)}
        </div>
        <div className="changetorow">
          {ReactHtmlParser(cols)}
        </div>
        <div className="changetorow">
          {ReactHtmlParser(cols1)}
        </div>

      </div>
    );
  }
}

export default App;

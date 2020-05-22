import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from "axios";
import "../styles/main.css"
 

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: "",
      clicked: false,
      data: []
    };
    this.handleReturnIndicatorName = this.handleReturnIndicatorName.bind(this);
  }


  componentDidMount = () => {
    axios.get("/info").then(response => {
      console.log(response)
      this.handleReturnIndicatorName(response)  
    })
  }

  updateSearch(e) {
    this.setState({ input: e.currentTarget.value });
    this.handleReturnSearchIndicator();
  }

  handleReturnSearchIndicator(){
    if (this.state.input === ""){
      return null;
    }else{
      let filtered = this.state.data.filter(indicator =>{
        return indicator.indicatorname.includes(this.state.input)
      })

        filtered = filtered.sort(function (a, b) { return (a.indicatorname > b.indicatorname) ? 1 : ((a.indicatorname < b.indicatorname) ? -1 : 0); });
        return (
          <div className="indicator-wrapper">
            {filtered.map(indicator =>{
             return <div className="specific-indicator-items" onClick={() => this.props.history.push(`/info/${indicator.id}`)}>
                {indicator.indicatorname}
              </div>
            })}
          </div>
        )
      
    }
  }

  handleReturnIndicatorName(response){
    const responseArray = [];
    for (let i = 0; i < response.data.length; i++) {
      responseArray.push(response.data[i]);
    }
    this.setState({data: responseArray})
  }
  render(){
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1>World Bank CHN Data</h1>
        <h2 style={{ marginTop: "-5px", fontSize: "30px"}}>Search by indicator name to see relevant information gathered from 1960-2012!</h2>
         <div>
        <input
          className="search-text-area"
          type="text"
          autoCapitalize="none"
          placeholder="Search"
          size="26"
          results="0"
          value={this.state.input}
          onChange={(e) => this.updateSearch(e)}
        />
        </div>
        {this.handleReturnSearchIndicator()}
      </div>
    )
  }
}


export default withRouter(Main);
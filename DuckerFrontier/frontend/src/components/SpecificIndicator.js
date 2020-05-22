import React, { Component } from 'react';
import axios from "axios";
import "../styles/specificIndicator.css"
 
class SpecificIndicator extends Component {
  constructor(props){
    super(props)
    this.state = {data: []};
    this.returnNumbers = this.returnNumbers.bind(this);
  }


  componentDidMount(){
    axios.get(`/info/${this.props.match.params.id}`).then(response =>{
      this.setState({data: Object.values(response.data[0])})
    })
  }


  returnNumbers(){
    return <div className="years-data-outer-wrapper">
              {this.state.data.map((numbers,idx) =>{
                return idx >= 3 && numbers.length ? 
                <div className="specific-year-and-data-wrapper">
                  <div className="year">{idx + 1957}</div>
                  <div className="numbers">{numbers}</div>
                </div> : null; 
              })}
            </div>;
  }

  render(){
    if (!this.state.data.length) {
      return null;
    } else {
      return <div>
              <h1 style={{fontSize: "30px"}}>Indicator Name: {this.state.data[1]}</h1>
              <h2 style={{fontSize: "30px"}}>Indicator Code: {this.state.data[2]}</h2>
              {this.returnNumbers()}
            </div>
    }
  }

}
export default SpecificIndicator;
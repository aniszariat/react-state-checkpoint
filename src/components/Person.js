import React, { Component,useState } from "react";
//import Hooks from "./hooks/Hooks";
import PersonData from "./PersonData";
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: PersonData.fullName,
      bio: PersonData.bio,
      profession: PersonData.profession,
      imgSRC:PersonData.imgSRC,
      count :0
    };
  }
  styles = {
    fontStyle: "italic",
    color: "rgb(249, 178, 8)",
    backgroundColor: "teal",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({count : this.state.count + 1})
    }, 1000)
  }
  timer = () => {
    
    const Hours = `0${Math.floor(this.state.count / (60 * 60))}`.slice(-2);
    const Minutes = `0${Math.floor((this.state.count / 60) % 60)}`.slice(-2);
    const Seconds = `0${this.state.count % 60}`.slice(-2);
    return `${Hours}:${Minutes}:${Seconds}`
  }
  render() {
    return <div className="App">
  
      <h1 style={this.styles}> {this.state.fullName}</h1>
      {/* <button onClick={this.Buttonchange}>{this.state.sub}</button> */}
      <p/>
       <p > {this.state.bio}</p>
       <h3> {this.state.profession}</h3>
      <img
        style={{
          width: 160,
          height: 180,
          border:"solid",
          borderColor: "teal",

        }}
        src={this.state.imgSRC}
        //onClick={this.Imgchange}
        alt="where is the image"
      />
      <h3 style={this.styles}>you're here since {this.timer()}</h3>
    </div>
    
  

  }
}

export default Person;

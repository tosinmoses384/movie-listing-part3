import React, { Component, Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import Card from "./Card";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      ApiData: []
    };
  }

  // ......................................................................
  // handle Change

  onHandleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // ........................................................................
  // handle submit
  handleSearch = () => {
    axios
      .get(`http://www.omdbapi.com/?apikey=3e3b8fec&s=${this.state.value}`)
      .then(({ data }) => {
        console.log(data);
        let search = data.Search;
        this.setState({
          ApiData: search
        });
      });
  };

  

  render() {
    const { ApiData } = this.state;

    // const style={
    //   display:grid,
    //   grid-template-columns:repeat(3,ifr)
    // }
    return (
      <Fragment>
        <Navbar />
        <div className="home_container">Welcome</div>
        <div className="search">
          <div className="input">
            <input type="text" onChange={this.onHandleChange} />
          </div>
          <div className="search">
            <input type="button" value="Search" onClick={this.handleSearch} />
          </div>
        </div>
        <div className="ApiCards">
          {ApiData.map(data => (
            <div key={data.imdbID}>
              <Card title={data.Title} poster={data.Poster} year={data.Year} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

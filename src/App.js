import React, { Component } from "react";
import {connect} from "react-redux"

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component. --Done
//2. Call the fetchSmurfs action when the component first loads. --Done
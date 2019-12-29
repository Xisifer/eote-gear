import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, Container} from 'react-bootstrap'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import data from './data/CustomWeapons.json'
import qualities from './data/qualities.json'
import eoteWeapons from "./data/EOTEWeapons.json"

import TextModal from "./components/DescriptionModal"
import TextModal2 from "./components/DescriptionModal2"

import WeaponsReactTable from "./components/weapons-react-table.js"
import WeaponsReactTableFilter from "./components/weapons-react-table-filter.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      qualityText: ""
    };
    // this.toggle = this.toggle.bind(this);
  }


  render() {



    return (
      <Container>
        <p>HELLO WORLD</p>
        <WeaponsReactTableFilter/>
      </Container>
    )
  }
}

export default App;

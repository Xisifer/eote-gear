import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

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
        {/* <Router>
          <Link to={WeaponsReactTable}>react-table</Link>
          <Link to={WeaponsReactTableFilter}>react-table-filter</Link>
          <Switch>
            <Route path="/" component={WeaponsReactTable} />
            <Route path="/filter" component={WeaponsReactTableFilter} />
          </Switch>


        </Router> */}
        <p>
          This is the area of the App that is OUTSIDE of the React Table.
          POTATO.
        </p>
        <WeaponsReactTable/>
      </Container>
    )
  }
}

export default App;

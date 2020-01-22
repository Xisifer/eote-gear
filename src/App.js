import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container} from 'react-bootstrap'

import 'react-table/react-table.css'


import WeaponsReactTable from "./components/weapons-react-table.js"
import ArmorReactTable from "./components/armor-react-table.js"



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
        <ArmorReactTable/>
        <WeaponsReactTable/>
      </Container>
    )
  }
}

export default App;

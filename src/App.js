import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/weapons.json'

import ReactTable from 'react-table'
import 'react-table/react-table.css'



class App extends Component {

  render() {
    // const data = [
    //   {
    //     name: 'Tanner Linsley',
    //     age: 26,
    //     friend: {
    //       name: 'Jason Maurer',
    //       age: 23,
    //     }
    //   } 
      // {
      //   name: "Hammer",
      //   weight: "2",
      //   description: "This is a hammer."
      // }
    // ]
    console.log(data);
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Category',
      accessor: data.Weapon[0].Categories.Category[0],
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Damage',
      accessor: data.Weapon[0].DamageAdd
      // accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
  
    return (
      <ReactTable
        data={data}
        columns={columns}
      />
    )
  }
}

export default App;

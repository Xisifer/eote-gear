import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import data from './data/weapons.json'
import qualities from './data/qualities.json'


const weapons = data.Weapon;


class WeaponTable extends Component {




 getQuality = (event, quality) => {

  console.log(qualities[quality])

  // event.preventDefault()

  // console.log("This quality is...", qualities.Key)

  // console.log(Key)

  // const quality = Key

  // console.log("Quality is: ", qualities.quality)

 }
  




  render() {
    console.log(weapons);


    const SkillKey = {
      RANGLT: "Ranged: Light", 
      MELEE: "Melee",
      RANGHV: "Ranged: Heavy"
      // etc, etc, etc....
  }


    const columns = [{
      Header: 'Name',
      accessor: 'Name' // String-based value accessors!
    },
    {
      id: 'category',
      Header: 'Category',
      accessor: 'Categories.Category',

      Cell: props => typeof props.value === 'string' 
        ? <span className='category'>{props.value}</span>  
        : props.value.map(
          category =>   <ul><span className='category'>{category}</span></ul>
        ) 

      // Custom cell components!
    },
    {
      id: 'damage',
      Header: 'Damage',
      accessor: row => row.Damage || `+${row.DamageAdd}`
    },
    {
      id: 'critical',
      Header: 'Critical',
      accessor: row => row.Crit
    },
    {
      id: 'skill', 
      Header: 'Skill',
      accessor: row => SkillKey[row.SkillKey]
    },
    {
      id: 'range', 
      Header: 'Range',
      accessor: row => row.Range
    },
    {
      id: 'qualities',
      Header: 'Qualities',
      accessor: 'Qualities.Quality',

      Cell: props => props.value.length ? props.value.map(
          quality => <ul>
                        <Button 
                          variant="info" 
                          onClick = {(event) => this.getQuality(event, quality.Key)}
                        >
                          {quality.Key} {quality.Count}
                        </Button>
                    </ul>
          // <span className='quality'>{quality.Key}{quality.Count}</span>
        )
        : <ul>
          <Button 
            variant="info" 
            onClick = {(event) => this.getQuality(event, props.value.Key)}
          >
            {props.value.Key} {props.value.Count}
          </Button>
      </ul>
        // <span className='quality'>{props.value.Key} {props.value.Count}</span>

    },
    {
      id: 'price', 
      Header: 'Price',
      accessor: row => row.Range
    }

  ]

    return (
      <ReactTable
        data={weapons}
        columns={columns}
      />
    )
  }
}

export default WeaponTable;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import data from './data/CustomWeapons.json'
import qualities from './data/qualities.json'
import eoteWeapons from "./data/EOTEWeapons.json"


const weapons = eoteWeapons.Weapon;


class App extends Component {

  // popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Title as="h3">Popover right</Popover.Title>
  //     <Popover.Content>
  //       And here's some <strong>amazing</strong> content. It's very engaging.
  //       right?
  //     </Popover.Content>
  //   </Popover>
  // );
  // Example = () => (
  //   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
  //     <Button variant="success">Click me to see</Button>
  //   </OverlayTrigger>
  // );


 getQuality = (event, quality) => {

  console.log(qualities[quality])

  console.log(eoteWeapons)

  // event.preventDefault()

  // console.log("This quality is...", qualities.Key)

  // console.log(Key)

  // const quality = Key

  // console.log("Quality is: ", qualities.quality)

 }
  




  render() {
    console.log(weapons);


    const SkillKey = {
      "RANGLT": "Ranged: Light", 
      "RANGHV": "Ranged: Heavy",
      "GUNN": "Gunnery",
      "BRAWL": "Brawl",
      "MELEE": "Melee",
      "LTSABER": "Lightsaber",
      "MECH": "Mechanics",
      "SURV": "Survival",
      "SKUL": "Skulduggery",
      "STUNSETTING": "Stun Setting"


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
      accessor: row => row.RangeValue.substring(2)
    },
    {
      id: 'qualities',
      Header: 'Qualities',
      accessor: 'Qualities.Quality',

      Cell: props => props.value.length ? props.value.map(
          quality => <ul>


            <Popover 
            id="popover-basic"
            onClick = {(event) => this.getQuality(event, quality.Key)}
            >
              <Popover.Title as="h3">{quality.Key} {quality.Count}</Popover.Title>
              <Popover.Content>
              {qualities[quality]}
              </Popover.Content>
            </Popover>

              {/* <Button 
                variant="info" 
                onClick = {(event) => this.getQuality(event, quality.Key)}
              >
                {quality.Key} {quality.Count}
              </Button> */}

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
      accessor: row => row.Price
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

export default App;

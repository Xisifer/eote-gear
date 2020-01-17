import React, { Component } from 'react';
// import logo from './logo.svg';
import {Button, Container} from 'react-bootstrap'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import data from '../data/CustomWeapons.json'
import generateQualities from '../data/qualities.js'
// import generateQualities from '../data/qualities.json'
import eoteWeapons from "../data/EOTEWeapons.json"

// import TextModal from "./DescriptionModal"
import TextModal2 from "./DescriptionModal2"


const weapons = data.Weapon;

const SkillKey = {
  "RANGLT": "Ranged: Light", 
  "RANGHVY": "Ranged: Heavy",
  "GUNN": "Gunnery",
  "BRAWL": "Brawl",
  "MELEE": "Melee",
  "LTSABER": "Lightsaber",
  "MECH": "Mechanics",
  "SURV": "Survival",
  "SKUL": "Skulduggery",
  "STUNSETTING": "Stun Setting",



  // etc, etc, etc....
}

const QualityKey =  {
"ACCURATE": "Accurate",
"AUTOFIRE": "Auto-Fire",
"BREACH": "Breach",
"BURN": "Burn",
"BLAST": "Blast",
"CONCUSSIVE": "Concussive",
"CORTOSIS": "Cortosis",
"CUMBERSOME": "Cumbersome",
"DEFENSIVE": "Defensive",
"DEFLECTION": "Deflection",
"DISORIENT": "Disorient",
"ENSNARE": "Ensnare",
"GUIDED": "Guided",
"KNOCKDOWN": "Knockdown",
"INACCURATE": "Inaccurate",
"INFERIOR": "Inferior",
"ION": "Ion",
"LIMITEDAMMO": "Limited Ammo",
"LINKED": "Linked",
"PIERCE": "Pierce",
"PREPARE": "Prepare",
"SLOWFIRING": "Slow-Firing",
"STUNSETTING": "Stun Setting",
"STUNDAMAGE": "Stun Damage",
"SUNDER": "Sunder",
"SUPERIOR": "Superior",
"TRACTOR": "Tractor",
"VICIOUS": "Vicious",
"UNWIELDY": "Unwieldy"
}



class WeaponsReactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: true,
      qualityText: ""
    };
    // this.toggle = this.toggle.bind(this);
  }


 getQuality = ( quality) => {
   console.log("Entering getQuality()...");
// Here we're waiting for the response from State before we're setting State
  // this.setState({qualityText:generateQualities[quality]});

console.log("GetQuality thinks that props is: ", quality);
  generateQualities({qualityNumber: quality});
  

 }




  render() {


    const qualityText = this.state.qualityText;
    // when i set state, react qwill re render the component with the new state
    // since i set state.qualityText in getQuality(), in render I will have a new value
    // for this.state.qualityText
    console.log("this.state.qualityText is: ", this.state.qualityText)


    console.log("this.state.modal is: ", this.state.modal)


  // {(qualityText != "") ? <div> {qualityText} </div> : <div></div>}

    





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

              <TextModal2
                qualityText = {generateQualities[quality.Key]}
                qualityName = {QualityKey[quality.Key]}
                qualityNumber = {quality.Count}
                onClick = {(event) => this.getQuality(quality.Count)}
                modal = {this.state.modal}
              />

          </ul>
        )
        : <ul>

              <TextModal2
                qualityText = {generateQualities[props.value.Key]}
                qualityName = {QualityKey[props.value.Key]}
                qualityNumber = {props.value.count}
                clicker = {(event) => this.getQuality(event, props.value.Key)}
                modal = {this.state.modal}
              />
      </ul>

    },
    {
      id: 'price', 
      Header: 'Price',
      accessor: row => row.Price
    },
    {
      id: 'description', 
      Header: 'Description',
      accessor: row => row.Description
    },
    {
      id: 'miscdesc', 
      Header: 'Misc Description',
      accessor: 'BaseMods.Mod.MiscDesc'
      // accessor: row => row.BaseMods.Mod.MiscDesc
    }

  ]

    return (
      <Container>
        <p>This is the Weapons table built with react-table</p>
        <ReactTable
          data={weapons}
          columns={columns}
        />
      </Container>
    )
  }
}

export default WeaponsReactTable;

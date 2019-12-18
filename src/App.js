import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, Popover, OverlayTrigger, Modal} from 'react-bootstrap'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
// import data from './data/CustomWeapons.json'
import qualities from './data/qualities.json'
import eoteWeapons from "./data/EOTEWeapons.json"

import TextModal from "./components/DescriptionModal"


const weapons = eoteWeapons.Weapon;

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
"VICIOUS": "Vicious"
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      qualityText: ""
    };
    // this.toggle = this.toggle.bind(this);
  }


 getQuality = async(event, quality) => {
// Here we're waiting for the response from State before we're setting State
  await this.setState({qualityText:qualities[quality]});

  console.log("this.state.qualityText is: ", this.state.qualityText)
  this.setState(prevState => ({
    modal: !prevState.modal
  }));

 }
  




  render() {


    const qualityText = this.state.qualityText;




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





              {/* <Button 
                variant="info" 
                onClick = {(event) => this.getQuality(event, quality.Key)}
              >
                {QualityKey[quality.Key]} {quality.Count}
              </Button> */}
              <TextModal
                qualityText = {qualityText}
                qualityName = {QualityKey[quality.Key]}
                clicker = {(event) => this.getQuality(event, quality.Key)}
                modal = {this.state.modal}
              />

          </ul>
        )
        : <ul>

          <Button 
            variant="info" 
            onClick = {(event) => this.getQuality(event, props.value.Key)}
          >
            {SkillKey[props.value.Key]} {props.value.Count}
          </Button>
      </ul>
        // <span className='quality'>{props.value.Key} {props.value.Count}</span>

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
      <ReactTable
        data={weapons}
        columns={columns}
      />
    )
  }
}

export default App;

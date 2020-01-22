import React, { Component } from 'react';
// import logo from './logo.svg';
import { Button, Container } from 'react-bootstrap'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import data from '../data/CustomWeapons.json'
import generateQualities from '../data/qualities.jsx'
// import generateQualities from '../data/qualities.json'
import eoteArmor from "../data/EOTEArmor.json"

// import TextModal from "./DescriptionModal"
import TextModal2 from "./DescriptionModal2"


const armor = eoteArmor.Armor;

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

const QualityKey = {
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



class ArmorReactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: true,
      qualityText: ""
    };
    // this.toggle = this.toggle.bind(this);
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
    // {
    //   id: 'category',
    //   Header: 'Category',
    //   accessor: 'Categories.Category',

    //   Cell: props => typeof props.value === 'string'
    //     ? <span className='category'>{props.value}</span>
    //     : props.value.map(
    //       category => <ul><span className='category'>{category}</span></ul>
    //     )

    //   // Custom cell components!
    // },
    {
      id: 'soak',
      Header: 'Soak',
      accessor: row => row.Soak //|| `+${row.DamageAdd}`
    },
    {
      id: 'defense',
      Header: 'Defense',
      accessor: row => row.Defense
    },
    {
      id: 'hp',
      Header: 'Hard Points',
      accessor: row => row.HP
    },
    // {
    //   id: 'range',
    //   Header: 'Range',
    //   accessor: row => row.RangeValue.substring(2)
    // },
// ==========================================================
// ==========================================================
    // {
    //   id: 'qualities',
    //   Header: 'Qualities',
    //   accessor: 'Qualities.Quality',

    //   Cell: props => props.value.length ? props.value.map(
    //     quality => <ul>

    //       <TextModal2
    //         qualityText={generateQualities({
    //           Key: quality.Key,
    //           qualityNumber: quality.Count
    //         })}
    //         qualityName={QualityKey[quality.Key]}
    //         qualityNumber={quality.Count}
    //         modal={this.state.modal}
    //       />

    //     </ul>
    //   )
    //     : <ul>

    //       <TextModal2
    //         qualityText={generateQualities({
    //           Key: props.value.Key,
    //           qualityNumber: props.value.Count
    //         })}
    //         qualityName={QualityKey[props.value.Key]}
    //         qualityNumber={props.value.Count}
    //         modal={this.state.modal}
    //       />
    //     </ul>

    // },
// ==========================================================
// ==========================================================
    {
      id: 'price',
      Header: 'Price',
      accessor: row => row.Price
    },
    {
        id: 'rarity',
        Header: 'Rarity',
        accessor: row => row.Rarity
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
        <p>This is the Armor table built with react-table</p>
        <ReactTable
          data={armor}
          columns={columns}
        />
      </Container>
    )
  }
}

export default ArmorReactTable;

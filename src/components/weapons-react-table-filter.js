import React, { Component } from 'react';
// import logo from './logo.svg';

import {Button, Container} from 'react-bootstrap'

import TableFilter from 'react-table-filter';
 
// Be sure to include styles at some point, probably during your bootstraping
// In JS
import 'react-table-filter/lib/styles.css';





import data from '../data/CustomWeapons.json'
import qualities from '../data/qualities.json'
import eoteWeapons from "../data/EOTEWeapons.json"

import TextModal from "./DescriptionModal"
import TextModal2 from "./DescriptionModal2"


const weapons = data.Weapon;

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
"VICIOUS": "Vicious",
"UNWIELDY": "Unwieldy"
}



class WeaponsReactTableFilter extends Component {

    filterUpdated = (newData, filterConfiguration) => {
        this.setState({
            "upddatedData": newData
        });
    }

  render() {

    return (
      <Container>
        <p>This is the Weapons table built with react-table-filter</p>
        <TableFilter
            rows={weapons}
            onFilterUpdate={this._filterUpdated}>
                
            <th filterkey="Name">
                Name
            </th>
            <th filterkey="Key">
                Key
            </th>
            <td>HELLO</td>
            {/* <th filterkey="Damage">
                Damage
            </th> */}
            {/* <th filterkey="Crit">
                Critical 
            </th>
            {/* <th filterkey="Encumbrance">
                Encumbrance
            </th> */}


            {/* <th filterkey="Price">
                Price
            </th>
            <th filterkey="Description">
                Description
            </th>  */}
        </TableFilter>


        {/* <ReactTable
          data={weapons}
          columns={columns}
        /> */}




      </Container>
    )
  }
}

export default WeaponsReactTableFilter;

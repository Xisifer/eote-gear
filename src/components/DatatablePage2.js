import React from 'react';
import { MDBDataTable } from 'mdbreact';
import data from "./dataexample.js"
import RyanData from "./data/RyanWeapons.json"

const DatatablePage = () => {
    console.log(RyanData);

  return (
    <MDBDataTable
      striped
      bordered
      small
      maxHeight="100vh"
      data={data}
    />
  );
}

export default DatatablePage;
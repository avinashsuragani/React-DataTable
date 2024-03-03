import React, {  useEffect, useState } from 'react';
import './App.css'; // Import CSS file for styling
import axios from 'axios';
import DataTable from 'react-data-table-component';

const customStyle={
  headRow:{
    style: {
      backgroundColor: 'olive',
      color: 'white'
    },
  },
  headcells:{
    style:{
      forntSize: '16px',
      fontWeight: '600',
      textTransform: 'uppercase'
      
    },
  },
  cellls:{
    style:{
      forntSize:"15px"
    },
  },
}


function App() {
  // State to store fetched data
  const column = [
    {
      name:"SNo",
      selector: row => row.SNo,
      sortable: true
    },
    {
      name:"Name",
      selector : row => row.Name
    },
    {
      name:"Age",
      selector : row => row.Age
    },
    {
      name:"Phone",
      selector : row => row.Ph_no
    },
    {
      name:"Location",
      selector : row => row.Location
    },
    {
      name: "Date",
      selector: row => {
        const dateTime = new Date(row.Created_at);
        return dateTime.toLocaleDateString();
      },
      sortable: true
    },
    {
      name: "Time",
      selector: row => {
        const dateTime = new Date(row.Created_at);
        return dateTime.toLocaleTimeString();
      },
      sortable: true
    }
  ]
    

  // Effect hook to fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
        axios.get('http://localhost:4000/api/details')
        .then(res => {
          setRecords(res.data)
          setfRecords(res.data)
          
        })
        .catch(err => console.log(err))
    }
    fetchData();
  }, [])

  // Function to fetch data from backend
  
  
const [records,setRecords] = useState([])

const [frecords,setfRecords] = useState([])

const handleFilter = (event) =>{
  const newData = frecords.filter(row => row.Name.toLowerCase().includes( event.target.value.toLowerCase() ) || row.Location.toLowerCase().includes( event.target.value.toLowerCase() ))
  setRecords(newData);
}
  return (
    
    <div style={{padding: "50px 10%", backgroundColor: "gray"}}>
      <h1 className='h1'>
        Welcome to Customer Details
      </h1>
      <div style={{display:'flex',justifyContent:'right'}}>
        <input className='search-bar' type="text" placeholder='Search by Name or Location' onChange={handleFilter}style={{padding:'6px 10px'}} />
      </div>
      <DataTable className='table'
      columns={column}
      data={records}
      customStyles={customStyle}
      pagination
      
      >

      </DataTable>
    </div>
  )
};


export default App;

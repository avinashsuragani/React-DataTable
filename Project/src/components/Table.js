import React from 'react';
import './Table.css'; // Import CSS file for styling
import TableRow from './TableRow'


const Table = ({ data }) => {

  return (
    <div>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Created At (Date)</th>
          <th>Created At (Time)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} rowData={row} />
        ))}
      </tbody>
    </table>
    </div>

  );
};

export default Table;

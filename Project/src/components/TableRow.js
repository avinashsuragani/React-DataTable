import React from 'react';
import './Table.css'; // Import CSS file for styling

const formatDateAndTime = (createdAt) => {
  const dateObject = new Date(createdAt);
  const date = dateObject.toLocaleDateString();
  const time = dateObject.toLocaleTimeString();
  return { date, time };
};

const TableRow = ({ rowData }) => {
  const { date, time } = formatDateAndTime(rowData.Created_at);

  return (
    <tr className="table-row">
      <td>{rowData.Name}</td>
      <td>{rowData.Age}</td>
      <td>{rowData.Ph_no}</td>
      <td>{rowData.Location}</td>
      <td>{date}</td>
      <td> {time}</td>
    </tr>
  );
};

export default TableRow;

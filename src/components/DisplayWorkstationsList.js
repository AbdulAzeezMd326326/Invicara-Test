import React from "react";
import { Button, Container, Table } from "reactstrap";
import { useState } from "react";
import { v4 as _id } from "uuid";

const DisplayWorkstationsList = () => {
 
  const initState = [
    {
      id: _id(),
      deskNumber: 10,
      currentReservedStatus: true,
      bookedTime: "--",
      users: [],
    },
    {
      id: _id(),
      deskNumber: 20,
      currentReservedStatus: true,
      bookedTime: "--",
      users: [],
    },
    {
      id: _id(),
      deskNumber: 30,
      currentReservedStatus: true,
      bookedTime: "--",
      users: [],
    },
    {
      id: _id(),
      deskNumber: 40,
      currentReservedStatus: true,
      bookedTime: "--",
      users: [],
    },
  ];
  const [workstations, setWorkstations] = useState(initState);
 

  const handleClick = (id) => {
    setWorkstations(
      workstations.map((workstation) =>
        workstation.id === id ?
    { ...workstation,
      currentReservedStatus: !workstation.currentReservedStatus,
      bookedTime:new Date().toLocaleTimeString(),
     } : workstation
      )
    );
  };

  return (
    
    <Container>
      <h3>Workstation List</h3>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Desk Number</th>
            <th>Availability</th>
            <th>Booked Time</th>
          </tr>
        </thead>
        <tbody>
          {workstations.map((workstation) => (
            <tr>
              <td>{workstation.id}</td>
              <td>{workstation.deskNumber}</td>
              <td>
                {workstation.currentReservedStatus ? (
                  <span className="dotAvailable"></span>
                ) : (
                  <span className="dotUnavailable"></span>
                )}
              </td>
              <td>{workstation.bookedTime}</td>
              <td>
                {workstation.currentReservedStatus ? (
                  <Button onClick={() => handleClick(workstation.id)}>
                    Book
                  </Button>
                ) : (
                  <Button>Reserved</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DisplayWorkstationsList;

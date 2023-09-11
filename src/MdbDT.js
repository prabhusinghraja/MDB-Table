import { MDBDataTable } from 'mdbreact'
import React, { useEffect, useState } from 'react'
import json from './data.json'

const MdbDT = () => {
  const [state, setState] = useState(json)
  
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => setState(data))
  //     .catch(err => console.log(err))
  // }, [])

  // Map the data to an array of objects with the required 'name' property
  const mappedData = state.map(item => ({ id: item.id , name: item.name, username: item.username, email: item.email, address: item.address.street }));

  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id'
      },
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Username',
        field: 'username'
      },
      {
        label: 'Email',
        field: 'email'
      },
      {
        label: 'Address',
        field: 'address'
      }
    ],
    rows: mappedData // Use the mappedData array here
  }

  return (
    <div>
      <MDBDataTable className='container-fluid' striped bordered hover data={data} />
    </div>
  )
}

export default MdbDT;

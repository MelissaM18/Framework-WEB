// Lista de todos los pendientes sin resolver (ID y UserID)
import React, { useState, useEffect } from 'react';

import TableNFL from "./TableNFL";

const SRIDU = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('http://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching: ', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Cargando datos...</div>;
    }

    return (
        <div>
            <h1>Listas de Todos los Pendientes sin Resolver, ID y userID</h1>
            <TableNFL columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'User ID', accessor: 'userId' }]} 
                data={data.filter(item => !item.completed)}/>
        </div>
    );
};

export default SRIDU;
import React, { useState, useEffect } from 'react';
import './App.css';

import DataTable from './components/DataTable';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://demon-slayer.cyclic.app/api/')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name',
      },
      {
        Header: 'Habilidad',
        accessor: 'skill',
      },
      {
        Header: 'Raza',
        accessor: 'race',
      },
    ],
    []
  );

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div id='js'>
      <h1 className='titulo'>Tabla de Demon Slayer</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;

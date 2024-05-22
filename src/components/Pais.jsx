import React, { useEffect, useState } from 'react';
import { getPaises } from '../services/api';

const Pais = ({ onChange }) => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    getPaises().then(response => setPaises(response.data));
  }, []);

  return (
    <select onChange={e => onChange(e.target.value)}>
      <option value="">Seleccione un país</option>
      {paises.map(pais => (
        <option key={pais.id} value={pais.id}>
          {pais.nombre}
        </option>
      ))}
    </select>
  );
};

export default Pais;
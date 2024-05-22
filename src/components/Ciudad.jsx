import React, { useEffect, useState } from 'react';
import { getCiudades } from '../services/api';

const Ciudad = ({ departamentoId, onChange }) => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    if (departamentoId) {
      getCiudades(departamentoId).then(response => setCiudades(response.data));
    }
  }, [departamentoId]);

  return (
    <select onChange={e => onChange(e.target.value)} disabled={!departamentoId}>
      <option value="">Seleccione una ciudad</option>
      {ciudades.map(ciudad => (
        <option key={ciudad.id} value={ciudad.id}>
          {ciudad.nombre}
        </option>
      ))}
    </select>
  );
};

export default Ciudad;
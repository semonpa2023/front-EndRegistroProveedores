import React, { useEffect, useState } from 'react';
import { getDepartamentos } from '../services/api';

const Departamento = ({ paisId, onChange }) => {
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    if (paisId) {
      getDepartamentos(paisId).then(response => setDepartamentos(response.data));
    }
  }, [paisId]);

  return (
    <select onChange={e => onChange(e.target.value)} disabled={!paisId}>
      <option value="">Seleccione un departamento</option>
      {departamentos.map(departamento => (
        <option key={departamento.id} value={departamento.id}>
          {departamento.nombre}
        </option>
      ))}
    </select>
  );
};

export default Departamento;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComboMaterias({ onMateriaSeleccionada }) {
  // Estado local para almacenar las materias
  const [materias, setMaterias] = useState([]);
  // Estado local para almacenar la materia seleccionada
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');

  // Efecto para cargar las materias desde el API al montar el componente
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}api/materias`)
      .then(response => {
        setMaterias(response.data);
      })
      .catch(error => {
        console.error('Hubo un error obteniendo las materias:', error);
      });
  }, []);

  // Manejar el cambio de la materia seleccionada
  const handleMateriaChange = (event) => {
    const materiaSeleccionada = event.target.value;
    setMateriaSeleccionada(materiaSeleccionada);
    if (onMateriaSeleccionada) {
      onMateriaSeleccionada(materiaSeleccionada);
    }
  };

  return (
    <select
      id="materias"
      className="form-select w-100"
      value={materiaSeleccionada}
      onChange={handleMateriaChange}
    >
      <option value="">Selecciona una materia</option>
      {materias.map(materia => (
        <option key={materia.id} value={materia.nombre.toLowerCase()}>{materia.nombre}</option>
      ))}
    </select>
  );
}

export default ComboMaterias;

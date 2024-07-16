import React from 'react';
import ComboMaterias from '../Combos/ComboMaterias';

function ResultadosTutores() {

  const handleMateriaSeleccionada = (materia) => {
    // Aquí puedes manejar la materia seleccionada
    console.log('Materia seleccionada:', materia);
  };
  // Ejemplo de datos de tutores (pueden ser dinámicos o desde una API)
  const tutores = [
    { id: 1, nombre: 'Juan Pérez', materia: 'Matemáticas', nivel: 'Secundaria' },
    { id: 2, nombre: 'María González', materia: 'Física', nivel: 'Universidad' },
    { id: 3, nombre: 'Pedro Ramírez', materia: 'Química', nivel: 'Preparatoria' },
    { id: 4, nombre: 'Ana Martínez', materia: 'Historia', nivel: 'Secundaria' },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Columna de filtros de búsqueda */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filtros de Búsqueda</h5>
              {/* Aquí irían los filtros de materia y nivel */}
              <div className="mb-3">
                <label htmlFor="materia" className="form-label">Materia</label>
                <ComboMaterias onMateriaSeleccionada={handleMateriaSeleccionada} />
                </div>
              <div className="mb-3">
                <label htmlFor="nivel" className="form-label">Nivel</label>
                <input type="text" className="form-control" id="nivel" />
              </div>
              <button className="btn btn-dark w-100">Buscar</button>
            </div>
          </div>
        </div>
        
        {/* Columna de tutores */}
        <div className="col-md-8">
          <div className="row">
            {/* Iterar sobre los datos de los tutores */}
            {tutores.map(tutor => (
              <div key={tutor.id} className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{tutor.nombre}</h5>
                    <p className="card-text"><strong>Materia:</strong> {tutor.materia}</p>
                    <p className="card-text"><strong>Nivel:</strong> {tutor.nivel}</p>
                    <button className="btn btn-dark">Ver Perfil</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultadosTutores;

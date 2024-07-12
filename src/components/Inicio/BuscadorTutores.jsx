import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BuscadorTutores() {

    // tarer las materias desde el API
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/materias`)
            .then(response => {
                setMaterias(response.data);
            })
            .catch(error => {
                console.error('Hubo un error obteniendo las materias:', error);
            });
    }, []);


    const [niveles, setNiveles] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/niveleseducativos`)
            .then(response => {
                setNiveles(response.data);
            })
            .catch(error => {
                console.error('Hubo un error obteniendo los niveles:', error);
            });
    }, []);

    return (

        <section className="">
            <div className="container-lg p-3 mt-3">
                <div className="row gap-2">
                    <h2 className="text-3xl fw-bold">Encuentra tu tutor ideal</h2>
                    <p className="text-muted">Reserva sesiones de tutoría en línea con expertos en diferentes materias.</p>
                </div>
                <form className="row gap-4">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="materias" className="form-label">Materias</label>
                            <select id="materias" className="form-select w-100">
                                <option value="">Selecciona una materia</option>
                                {materias.map(materia => (
                                    <option key={materia.id} value={materia.nombre.toLowerCase()}>{materia.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="niveles" className="form-label">Niveles</label>
                            <select id="niveles" className="form-select w-100">
                                <option value="">Selecciona un nivel</option>
                                {niveles.map(nivel => (
                                    <option key={nivel.id} value={nivel.nivel.toLowerCase()}>{nivel.nivel}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark w-100 mt-3">Buscar Tutores</button>
                </form>
            </div>
        </section>


    )
}
export default BuscadorTutores;

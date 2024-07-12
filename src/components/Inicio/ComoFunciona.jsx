import React from 'react'

function ComoFunciona() {
    return (

        <section className="">
            
            <div className="container-lg bg-gray p-5 mt-5">
                <div className="row gap-2">
                    <h2 className="text-3xl fw-bold">Cómo funciona</h2>
                    <p className="text-muted">Sigue estos pasos para reservar una sesión de tutoría.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 gap-6">
                    <div className="col text-center">
                        <img src='/img/busqueda-de-lupa.png' className='como-funciona-imagen' />
                        
                        <h3 className="text-xl fw-semibold">Busca Tutores</h3>
                        <p className="text-muted">
                            Explora nuestra base de datos de tutores calificados y filtra por materia, nivel y disponibilidad.
                        </p>
                    </div>
                    <div className="col text-center">
                    <img src='/img/calendario.png' className='como-funciona-imagen' />
                        <h3 className="text-xl fw-semibold">Reserva una Sesión</h3>
                        <p className="text-muted">
                            Selecciona el tutor y la fecha/hora que mejor se adapte a tu horario.
                        </p>
                    </div>
                    <div className="col text-center ">
                    <img src='/img/camara-de-video.png' className='como-funciona-imagen' />
                        <h3 className="text-xl fw-semibold">Aprende en Línea</h3>
                        <p className="text-muted">
                            Conéctate a la sesión de tutoría a través de videoconferencia o de forma presencial.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ComoFunciona
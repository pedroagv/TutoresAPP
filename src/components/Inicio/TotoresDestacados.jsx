import React from 'react'

function TotoresDestacados() {
    return (
        <section className="">
            <div className="container-lg p-3 mt-5">
                <div className="row gap-6">
                    <div className="col">
                        <h2 className="text-3xl fw-bold">Tutores Destacados</h2>
                        <p className="text-muted">Conoce a algunos de nuestros tutores más experimentados.</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gap-6">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-4">
                                    <div className="border rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                        <img src="/img/placeholder-user.jpg" alt="Avatar" className="img-fluid rounded-circle" />
                                    </div>
                                    <div>
                                        <h3 className="fw-semibold">John Doe</h3>
                                        <p className="text-sm text-muted">Matemáticas</p>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <p className="text-muted">
                                        Experto en matemáticas con más de 10 años de experiencia. Ayudo a estudiantes de todos los niveles
                                        a mejorar sus habilidades.
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon bi bi-star-fill" fill="currentColor" viewBox="0 0 16 16" style={{ width: '1rem', height: '1rem' }}>
                                            <path d="M7.21.33a.75.75 0 0 1 1.08 0l1.75 1.7.75-.72a.75.75 0 0 1 1.08 1.04l-.78.76 1.78 1.73a.75.75 0 0 1-.42 1.28l-2.2.32-.98 2.01a.75.75 0 0 1-1.35 0l-.98-2.01-2.2-.32a.75.75 0 0 1-.42-1.28l1.78-1.73-.78-.76a.75.75 0 0 1 1.08-1.04l.75.72 1.75-1.7a.75.75 0 0 1 1.08 0z" />
                                        </svg>
                                        <span className="text-sm fw-medium">4.9</span>
                                        <span className="text-sm text-muted"> (125 reseñas)</span>
                                    </div>
                                </div>
                                <button className="btn btn-dark w-100 mt-3">Reservar Sesión</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-4">
                                    <div className="border rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                        <img src="/img/placeholder-user.jpg" alt="Avatar" className="img-fluid rounded-circle" />
                                    </div>
                                    <div>
                                        <h3 className="fw-semibold">Sarah Anderson</h3>
                                        <p className="text-sm text-muted">Inglés</p>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <p className="text-muted">
                                        Profesora de inglés nativa con amplia experiencia en la enseñanza a estudiantes de todos los
                                        niveles.
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon bi bi-star-fill" fill="currentColor" viewBox="0 0 16 16" style={{ width: '1rem', height: '1rem' }}>
                                            <path d="M7.21.33a.75.75 0 0 1 1.08 0l1.75 1.7.75-.72a.75.75 0 0 1 1.08 1.04l-.78.76 1.78 1.73a.75.75 0 0 1-.42 1.28l-2.2.32-.98 2.01a.75.75 0 0 1-1.35 0l-.98-2.01-2.2-.32a.75.75 0 0 1-.42-1.28l1.78-1.73-.78-.76a.75.75 0 0 1 1.08-1.04l.75.72 1.75-1.7a.75.75 0 0 1 1.08 0z" />
                                        </svg>
                                        <span className="text-sm fw-medium">4.8</span>
                                        <span className="text-sm text-muted"> (98 reseñas)</span>
                                    </div>
                                </div>
                                <button className="btn btn-dark w-100 mt-3">Reservar Sesión</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-4">
                                    <div className="border rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                        <img src="/img/placeholder-user.jpg" alt="Avatar" className="img-fluid rounded-circle" />
                                    </div>
                                    <div>
                                        <h3 className="fw-semibold">Maria Gonzalez</h3>
                                        <p className="text-sm text-muted">Ciencias</p>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <p className="text-muted">
                                        Licenciada en Biología con experiencia en la enseñanza de ciencias a estudiantes de secundaria y
                                        universidad.
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon bi bi-star-fill" fill="currentColor" viewBox="0 0 16 16" style={{ width: '1rem', height: '1rem' }}>
                                            <path d="M7.21.33a.75.75 0 0 1 1.08 0l1.75 1.7.75-.72a.75.75 0 0 1 1.08 1.04l-.78.76 1.78 1.73a.75.75 0 0 1-.42 1.28l-2.2.32-.98 2.01a.75.75 0 0 1-1.35 0l-.98-2.01-2.2-.32a.75.75 0 0 1-.42-1.28l1.78-1.73-.78-.76a.75.75 0 0 1 1.08-1.04l.75.72 1.75-1.7a.75.75 0 0 1 1.08 0z" />
                                        </svg>
                                        <span className="text-sm fw-medium">4.7</span>
                                        <span className="text-sm text-muted"> (82 reseñas)</span>
                                    </div>
                                </div>
                                <button className="btn btn-dark w-100 mt-3">Reservar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TotoresDestacados
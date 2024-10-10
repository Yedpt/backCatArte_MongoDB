import React from 'react'

function AboutUs() {
    return (
        <div
            className="min-h-screen text-gray-900"
            style={{
                background: 'linear-gradient(180deg, #F5F5F5 0%, #E3D5D5 100%)',
            }}
        >
            {/* Team Section */}
            <section className="py-12">
                <div className="text-start font-jaro p-14">
                    <h1 className="text-6xl font-bold  text-purple-600 ">
                        MECAT
                    </h1>
                    <h2 className="text-6xl font-bold text-purple-600 ">
                        MUSEUM
                    </h2>
                    <p className="text-lg mt-12 ">
                        ENTRE EN CONTACTO CON NUESTRO EQUIPO!
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* Card 1: Pepe */}
                    <div className="relative group bg-transparent rounded-lg shadow-md overflow-hidden text-center">
                        <img
                            src="/src/assets/about-us/Pepe.jpg"
                            alt="Pepe"
                            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />

                        {/* Texto siempre visible */}
                        <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
                            <h2 className="text-xl font-bold text-white">
                                PEPE
                            </h2>
                            <p className="text-sm text-white">SCRUM MASTER</p>
                        </div>

                        {/* Fondo oscuro y descripción gatuna */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 ease-in-out flex justify-center items-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white text-center p-4">
                                <p>
                                    Pepe es un gato ágil y energético, siempre
                                    organizando con precisión. Además de ser el
                                    SCRUM master, ¡sabe perfectamente cómo
                                    gestionar cada parte del equipo y le encanta
                                    asegurarse de que todo fluya!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Cesar */}
                    <div className="relative group bg-transparent rounded-lg shadow-md overflow-hidden text-center">
                        <img
                            src="/src/assets/about-us/Cesar2.jpg"
                            alt="Cesar"
                            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
                            <h2 className="text-xl font-bold text-white">
                                CESAR
                            </h2>
                            <p className="text-sm text-white">DEVELOPER</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 ease-in-out flex justify-center items-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white text-center p-4">
                                <p>
                                    Cesar es el felino sereno del equipo.
                                    Siempre trabajando en silencio, es experto
                                    en backend y frontend, asegurándose de que
                                    cada función esté donde tiene que estar.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Sara */}
                    <div className="relative group bg-transparent rounded-lg shadow-md overflow-hidden text-center">
                        <img
                            src="/src/assets/about-us/Sara.jpg"
                            alt="Sara"
                            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
                            <h2 className="text-xl font-bold text-white">
                                SARA
                            </h2>
                            <p className="text-sm text-white">DEVELOPER</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 ease-in-out flex justify-center items-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white text-center p-4">
                                <p>
                                    Sara es una gata muy enfocada y creativa,
                                    siempre atenta a cada detalle del front-end.
                                    Si algo se ve bien, seguramente es gracias a
                                    su magia con React y CSS.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Dario */}
                    <div className="relative group bg-transparent rounded-lg shadow-md overflow-hidden text-center">
                        <img
                            src="/src/assets/about-us/Dario.jpg"
                            alt="Dario"
                            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
                            <h2 className="text-xl font-bold text-white">
                                DARIO
                            </h2>
                            <p className="text-sm text-white">DEVELOPER</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 ease-in-out flex justify-center items-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white text-center p-4">
                                <p>
                                    Dario es un gato curioso e ingenioso,
                                    manejando Cloudinary y React como si fuera
                                    su segunda naturaleza. Siempre encuentra una
                                    solución perfecta para cada desafío del
                                    proyecto.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Juliana */}
                    <div className="relative group bg-transparent rounded-lg shadow-md overflow-hidden text-center">
                        <img
                            src="/src/assets/about-us/Juliana.jpg"
                            alt="Juliana"
                            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
                            <h2 className="text-xl font-bold text-white">
                                JULIANA
                            </h2>
                            <p className="text-sm text-white">PRODUCT OWNER</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 ease-in-out flex justify-center items-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white text-center p-4">
                                <p>
                                    Juliana es la diseñadora del equipo, siempre
                                    cuidando cada rincón del estilo visual. No
                                    hay detalle que escape a su ojo felino para
                                    crear la experiencia visual perfecta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs

const Footer = () => {
    return (
        <footer className="bg-black text-white py-2 z-30 relative">
            {/* Segunda sección con las columnas */}
            <div className="w-full h-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-3 lg:pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-start">
                {/* Follow Us Section */}
                <div className="flex flex-col items-center sm:items-center lg:items-center relative md: mr-[4.5%] sm: ml-[23%]">
                    {' '}
                    {/* Cambié items-end a items-center para centrar */}
                    {/* Logo principal */}
                    <div className="container flex flex-col items-center">
                        <img
                            className="w-28 sm:w-20 md:w-56  md: mr-[20%] lg:w-64 rounded-full border-black mb-4 lg: mr-12 lg:mb-6 sm: mr-[18%]"
                            src="/src/assets/icons/LogoBlanco2.png"
                            alt="Icon"
                        />{' '}
                        {/* Ajusté el mb */}
                        {/* Texto "Follow Us" */}
                        <div className="flex flex-col items-center text-center mr-24">
                            <p className="text-[#eee8e1] text-lg lg:text-xl font-bold uppercase tracking-widest mt-2">
                                Follow Us
                            </p>

                            {/* Logos de redes sociales */}
                            <div className="flex gap-4 mt-2 justify-center">
                                {' '}
                                {/* Eliminé los justify-end para centrar */}
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/src/assets/icons/logoIgGato.png"
                                        className="w-8 sm:w-6 md:w-12 lg:w-16"
                                        alt="Instagram Logo"
                                    />
                                </a>
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/src/assets/icons/logoFacebookGato.png"
                                        className="w-8 sm:w-6 md:w-12 lg:w-16"
                                        alt="Facebook Logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-center sm:items-center md:items-start">
                    <p className="text-[#eee8e1] text-lg font-bold uppercase tracking-widest sm:text-center md:text-left">
                        Quick Links
                    </p>
                    <ul className="mt-2 space-y-2 text-center sm:text-center md:text-left">
                        <li>
                            <a
                                href="aboutus"
                                className="text-[#eee8e1] text-base opacity-50"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#reports"
                                className="text-[#eee8e1] text-base opacity-50"
                            >
                                Reports
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="text-[#eee8e1] text-base opacity-50"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-[#eee8e1] text-base opacity-50"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Subscribe Section */}
                <div className="flex flex-col items-center sm:items-center md:items-start">
                    <p className="text-[#eee8e1] text-lg font-bold uppercase tracking-widest sm:text-center md:text-left">
                        Subscribete
                    </p>
                    <p className="text-[#eee8e1] text-base mt-2 leading-relaxed text-center sm:text-center md:text-left">
                        Recibe las tendencias y los conocimientos de nuestro
                        equipo directamente en su bandeja de entrada todos los
                        meses.
                    </p>
                    <div className="relative mt-4 w-full sm:w-full md:w-auto">
                        <input
                            className="px-16 py-2 text-base text-[#8b8a8a] bg-transparent border-2 border-[#eee8e1]/70 rounded-full w-full pr-12"
                            placeholder="Your email"
                        />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2">
                            <img
                                src="/src/assets/icons/botonCat.png"
                                alt="Submit"
                                className="w-10 lg:w-12 h-10 rounded-full border-2 border-white"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-white/30 py-2 w-full mx-0 px-0">
                <div className="flex flex-col font-jaro sm:flex-col lg:flex-row lg:justify-between lg:items-center w-full">
                    <p className="text-[#eee8e1]/70  text-sm text-center lg:text-left ml-8">
                        ©️ 2024 MeCat Museum- The Meme’s Cat Museum
                    </p>
                    <div className="flex space-x-6 mt-4 lg:mt-0 mr-8">
                        <a href="#" className="text-[#eee8e1]/70 text-sm">
                            Privacy
                        </a>
                        <a href="#" className="text-[#eee8e1]/70 text-sm">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

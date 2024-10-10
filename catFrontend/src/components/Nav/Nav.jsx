/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Filter from './Filter'
import FilterContext from '../../layout/FilterContext.jsx'

const Nav = () => {
    const { handleSelectChange } = useContext(FilterContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        if (!isMenuOpen) {
            setIsFilterOpen(false)
        }
    }

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen)
        if (!isFilterOpen) {
            setIsMenuOpen(false)
        }
    }

    const isHomePage = location.pathname === '/'

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 p-1 bg-slate-50 bg-opacity-90 backdrop-blur-sm w-full items-center flex flex-row justify-between z-30">
                {/* Logo */}
                <div className="flex items-center ml-[4%]">
                    <NavLink to="/">
                        <img
                            src="/src/assets/icons/Mecatmus-logo.png"
                            alt="Logo"
                            className="w-16 h-16"
                        />
                    </NavLink>
                    <h1 className="font-jaro text-2xl">MeCat Museum</h1>
                </div>

                {/* Barra de búsqueda y menú hamburguesa */}
                <div className="flex items-center justify-end mr-[4%] space-x-4">
                    {/* Ícono de búsqueda */}
                    {isHomePage && (
                        <div className="relative">
                            <img
                                src="/src/assets/icons/search.svg"
                                alt="Buscar"
                                className="w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-125 hover:rotate-12 hover:opacity-90 hover:animate-pulse"
                                onClick={() => {
                                    if (!isFilterOpen) {
                                        toggleFilter()
                                    }
                                }}
                            />
                        </div>
                    )}

                    {/* Menú hamburguesa */}
                    <img
                        src={
                            isMenuOpen
                                ? '/src/assets/icons/burguer-close.svg'
                                : '/src/assets/icons/burguer-open.svg'
                        }
                        alt="Menú"
                        className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
                            isMenuOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                        onClick={toggleMenu}
                    />
                </div>
            </nav>

            {/* Componente Filter integrado en el Nav */}
            {isHomePage && (
                <Filter
                    isFilterOpen={isFilterOpen}
                    toggleFilter={toggleFilter}
                    handleSelectChange={handleSelectChange}
                />
            )}

            {/* Menú hamburguesa y transiciones*/}
            <div
                className={`fixed right-0 top-[72px] w-full h-[17vh] bg-black bg-opacity-80 backdrop-blur-lg text-white shadow-2xl z-40 transition-all ${
                    isMenuOpen
                        ? 'duration-700 ease-in-out'
                        : 'duration-300 ease-in'
                } transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } ${isFilterOpen ? 'opacity-0 pointer-events-none' : ''}`}
            >
                <ul className="flex flex-col p-4 ">
                    <li className="py-1 text-xl text-center">
                        <NavLink
                            to="/"
                            className="text-white transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-gray-400"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="py-1 text-xl text-center">
                        <NavLink
                            to="/aboutus"
                            className="text-white transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-gray-400"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="py-1 pb-1 text-xl text-center">
                        <NavLink
                            to="/contact"
                            className="text-white transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-gray-400"
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav

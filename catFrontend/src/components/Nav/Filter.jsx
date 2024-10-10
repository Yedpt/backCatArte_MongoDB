import React, { useContext } from 'react'
import Select from 'react-select'
import FilterContext from '../../layout/FilterContext.jsx'

const categories = [
    { label: 'Todas', value: 'Todas' },
    { label: 'Gatos siendo gatos', value: 'gatos_siendo_gatos1' },
    { label: 'Gatos siendo humanos', value: 'gatos_siendo_humanos2' },
    { label: 'Gatos enfadados', value: 'gatos_enfadados3' },
    { label: 'Me dijiste', value: 'me_dijiste4' },
]

const popularity = [
    { label: 'Más populares', value: 'Más populares' },
    { label: 'Menos populares', value: 'Menos populares' },
]

const date = [
    { label: 'Más recientes', value: 'Más recientes' },
    { label: 'Más viejunos', value: 'Más viejunos' },
]

const Filter = ({ isFilterOpen, toggleFilter }) => {
    const { handleSelectChange } = useContext(FilterContext)

    // Estilos para los select
    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#FFFFFF',
            borderColor: '#e5e7eb',
            borderRadius: '0.375rem',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#A8A8A8',
            },
        }),
        // Estilos para caja option
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#e2e8f0' : 'white',
            color: state.isSelected ? '#334155' : '#4b5563',
            '&:hover': {
                backgroundColor: '#cbd5e1',
            },
        }),

        //Color texto valor seleccionado
        singleValue: (provided) => ({
            ...provided,
            color: '#4b5563', // Texto gris medio para el valor seleccionado
        }),

        //Estilo menú desplegable
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'white',
            borderRadius: '0.375rem',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        }),
    }

    return (
        <div
            data-testid="filter-component"
            className={`fixed top-[72px] left-0 right-0 bg-slate-40 bg-opacity-70 backdrop-blur-sm z-20 transition-all duration-500 ease-in-out transform ${
                isFilterOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
            }`}
        >
            <div className="w-full bg-slate-50 bg-opacity-70 backdrop-blur-sm shadow-md z-10 p-4 flex flex-col transition-all duration-300 ease-in-out">
                <div className="w-[92%] mb-[30px] flex items-center justify-between mx-auto">
                    <img
                        src="/src/assets/icons/filter.svg"
                        alt="Filter"
                        className="w-6 h-6"
                    />
                    <img
                        src="/src/assets/icons/close.svg"
                        alt="Cerrar filtros"
                        className="w-6 h-6 cursor-pointer"
                        onClick={toggleFilter}
                    />
                </div>

                <div className="w-[92%] flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mx-auto">
                    <div className="flex flex-col w-full sm:w-1/3">
                        <Select
                            name="category"
                            defaultValue={{
                                label: 'Categoría',
                                value: 'empty',
                            }}
                            options={categories}
                            onChange={handleSelectChange}
                            styles={customStyles}
                        />
                    </div>

                    <div className="flex flex-col w-full sm:w-1/3">
                        <Select
                            name="popularity"
                            defaultValue={{
                                label: 'Popularidad',
                                value: 'empty',
                            }}
                            options={popularity}
                            onChange={handleSelectChange}
                            styles={customStyles}
                        />
                    </div>

                    <div className="flex flex-col w-full sm:w-1/3">
                        <Select
                            name="date"
                            defaultValue={{
                                label: 'Fecha',
                                value: 'empty',
                            }}
                            options={date}
                            onChange={handleSelectChange}
                            styles={customStyles}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter

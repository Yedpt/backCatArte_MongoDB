import React, { useState, useEffect, useContext, useRef } from 'react'
import {
    getMemes,
    getMemeByCategory,
    deleteMeme,
    updateMeme,
    createMeme,
} from '../services/services'
import MemeGrid from '../components/MemeGrid'
import Modal from '../components/Modal'
import TitleSection from '../components/Titles'
import FilterContext from '../layout/FilterContext'
import Hero from '../components/Hero'
import MemeForm from '../components/MemeForm'
import MessageModal from '../components/MessageModal'

const categories = [
    'gatos_siendo_gatos1',
    'gatos_siendo_humanos2',
    'gatos_enfadados3',
    'me_dijiste4',
]

const categoryClasses = {
    gatos_siendo_gatos1: 'bg-gatos-siendo-gatos1',
    gatos_siendo_humanos2: 'bg-gatos-siendo-humanos2',
    gatos_enfadados3: 'bg-gatos-enfadados3',
    me_dijiste4: 'bg-me-dijiste4',
}

const categoryTitles = {
    gatos_siendo_gatos1: 'Gatos Siendo Gatos',
    gatos_siendo_humanos2: 'Gatos Siendo Humanos',
    gatos_enfadados3: 'Gatos Enfadados',
    me_dijiste4: 'Me Dijiste',
}

const Home = () => {
    const { selectedCategory, selectedPopularity, selectedDate } =
        useContext(FilterContext)

    const [memesByCategory, setMemesByCategory] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [memeToEdit, setMemeToEdit] = useState(null)
    const [filteredMemes, setFilteredMemes] = useState([])
    const [message, setMessage] = useState('')
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
    const [messageType, setMessageType] = useState('success')
    const [isConfirmDialog, setIsConfirmDialog] = useState(false)
    const [memeToDelete, setMemeToDelete] = useState(null)

    useEffect(() => {
        const fetchMemes = async () => {
            try {
                const allMemes = await getMemes()

                // Agrupamos y ordenamos los memes por categoría y popularidad
                const memesByCategory = allMemes.reduce((acc, meme) => {
                    if (!acc[meme.category]) {
                        acc[meme.category] = []
                    }
                    acc[meme.category].push(meme)
                    return acc
                }, {})

                // Ordenamos los memes dentro de cada categoría por popularidad (de mayor a menor)
                for (const category in memesByCategory) {
                    memesByCategory[category].sort((a, b) => b.likes - a.likes)
                }

                setMemesByCategory(memesByCategory)
                setFilteredMemes(allMemes) // Inicialmente mostramos todos los memes
            } catch (error) {
                console.error('Error fetching memes:', error)
            }
        }

        fetchMemes()
    }, [])

    // Función para filtrar y ordenar los memes
    const filterAndSortMemes = (
        allMemes,
        selectedCategory,
        selectedPopularity,
        selectedDate
    ) => {
        let filteredMemes = [...allMemes] // Copia de todos los memes

        // Filtramos por categoría si es diferente de "Todas"
        if (selectedCategory !== 'Todas') {
            filteredMemes = filteredMemes.filter(
                (meme) => meme.category === selectedCategory
            )
        }

        // Agrupamos los memes por categoría
        const memesByCategory = filteredMemes.reduce((acc, meme) => {
            if (!acc[meme.category]) {
                acc[meme.category] = []
            }
            acc[meme.category].push(meme)
            return acc
        }, {})

        // Ordenamos los memes dentro de cada categoría según los filtros
        for (const category in memesByCategory) {
            if (selectedPopularity === 'Más populares') {
                memesByCategory[category].sort((a, b) => b.likes - a.likes)
            } else if (selectedPopularity === 'Menos populares') {
                memesByCategory[category].sort((a, b) => a.likes - b.likes)
            }

            if (selectedDate === 'Más recientes') {
                memesByCategory[category].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                )
            } else if (selectedDate === 'Más viejunos') {
                memesByCategory[category].sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                )
            }
        }

        // Volvemos a aplanar el objeto para obtener un array de memes filtrados y ordenados
        return Object.values(memesByCategory).flat()
    }

    // Aplicamos filtros cada vez que cambiamos
    useEffect(() => {
        // Otenem memes combinados
        const allMemes = Object.values(memesByCategory).flat()

        // Llamamos a la función de filtrado y ordenamiento
        const filtered = filterAndSortMemes(
            allMemes,
            selectedCategory,
            selectedPopularity,
            selectedDate
        )

        setFilteredMemes(filtered)
    }, [selectedCategory, selectedPopularity, selectedDate, memesByCategory])

    const handleDelete = (category, id) => {
        setIsConfirmDialog(true)
        setIsMessageModalOpen(true)
        setMessage('¿Estás seguro que quieres eliminar el meme?')
        setMessageType('success')
        setMemeToDelete({ category, id })
    }

    const confirmDelete = async () => {
        try {
            await deleteMeme(memeToDelete.id)
            setMemesByCategory((prev) => ({
                ...prev,
                [memeToDelete.category]: prev[memeToDelete.category].filter(
                    (meme) => meme.id !== memeToDelete.id
                ),
            }))
            setMessage('Meme eliminado con éxito.')
            setMessageType('success')
        } catch (error) {
            setMessage('Error al cargarte el meme.')
            setMessageType('error')
        }
        setIsConfirmDialog(false)
        setIsMessageModalOpen(true)
        setMemeToDelete(null)
    }

    const openModalForCreate = () => {
        setIsEditMode(false)
        setIsModalOpen(true)
    }

    const openModalForEdit = (meme) => {
        setIsEditMode(true)
        setMemeToEdit(meme)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setMemeToEdit(null)
    }

    const refreshMemes = async () => {
        try {
            const memesPromises = categories.map((category) =>
                getMemeByCategory(category)
            )
            const memesResults = await Promise.all(memesPromises)
            const memesByCategory = categories.reduce(
                (acc, category, index) => {
                    acc[category] = memesResults[index]
                    return acc
                },
                {}
            )
            setMemesByCategory(memesByCategory)
        } catch (error) {
            console.error('Error refreshing memes:', error)
        }
    }

    const closeMessageModal = () => {
        setIsMessageModalOpen(false)
        setIsConfirmDialog(false)
    }

    const handleFormSubmit = async (data, actionType) => {
        try {
            if (actionType === 'create') {
                await createMeme(data)
            } else {
                await updateMeme(memeToEdit.id, data)
            }
            setMessage(
                actionType === 'create'
                    ? 'Meme creado con éxito.'
                    : 'Meme actualizado con éxito.'
            )
            setMessageType('success')
            await refreshMemes() // Actualiza los memes después de la acción
        } catch (error) {
            setMessage(
                actionType === 'create'
                    ? 'Error al crear el meme.'
                    : 'Error al editar el meme.'
            )
            setMessageType('error')
        }
        setIsMessageModalOpen(true)
        setIsModalOpen(false) // Cierra el modal después de la acción
    }

    return (
        <div className="min-h-screen w-full m-0">
            <Hero />
            <div>
                <button
                    onClick={openModalForCreate}
                    className="fixed right-4 sm:right-10 md:right-20 bottom-[20px] transform bg-slate-50 bg-opacity-70 backdrop-blur-sm text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-transparent border border-black border-solid hover:shadow-md transition-transform duration-300 ease-in-out hover:scale-105 animate-spin-slow z-20 min-w-[150px] sm:min-w-[200px] md:min-w-[250px]"
                >
                    CREAR NUEVO MEME
                </button>
            </div>

            {categories.map((category) => {
                // Filtramos los memes para esta categoría
                const memesForCategory = filteredMemes.filter(
                    (meme) => meme.category === category
                )

                // Clase para controlar la visibilidad del bloque
                const categoryBlockClass =
                    selectedCategory === 'Todas' ||
                    selectedCategory === category
                        ? 'block'
                        : 'hidden'

                return (
                    <div
                        key={category}
                        className={`w-full py-10 ${categoryClasses[category]} ${categoryBlockClass}`} // Aplicamos la clase de visibilidad
                    >
                        {/* Renderizamos el título solo si la categoría está seleccionada o si se seleccionó "Todas" */}
                        {(selectedCategory === 'Todas' ||
                            selectedCategory === category) && (
                            <h1 className="text-3xl font-bold mb-8 text-center text-white"></h1>
                        )}

                        {/* Pasamos los memes filtrados para esta categoría a MemeGrid */}
                        <TitleSection title={categoryTitles[category]} />
                        <MemeGrid
                            memes={memesForCategory}
                            onDelete={(id) => handleDelete(category, id)}
                            onEdit={(meme) => openModalForEdit(meme)}
                        />
                    </div>
                )
            })}

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <MemeForm
                        onSubmit={(data) =>
                            handleFormSubmit(
                                data,
                                isEditMode ? 'edit' : 'create'
                            )
                        }
                        initialData={isEditMode ? memeToEdit : null}
                        submitButtonText={
                            isEditMode ? 'Actualizar Meme' : 'Crear Meme'
                        }
                        onClose={closeModal}
                    />
                </Modal>
            )}
            {isMessageModalOpen && (
                <MessageModal
                    message={message}
                    type={messageType}
                    onClose={closeMessageModal}
                    onConfirm={isConfirmDialog ? confirmDelete : null}
                    isConfirmDialog={isConfirmDialog}
                />
            )}
        </div>
    )
}

export default Home
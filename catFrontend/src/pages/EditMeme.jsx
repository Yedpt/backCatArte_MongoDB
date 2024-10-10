import React, { useEffect, useState } from 'react'
import { getMemeById, updateMeme } from '../services/services'
import { useNavigate, useParams } from 'react-router-dom'
import MemeForm from '../components/MemeForm'

const EditMeme = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [initialData, setInitialData] = useState({})

    useEffect(() => {
        const fetchMeme = async () => {
            try {
                const meme = await getMemeById(id)
                setInitialData(meme)
            } catch (error) {
                console.error('Error al obtener el meme:', error)
            }
        }
        fetchMeme()
    }, [id])

    const handleEditMeme = async (memeData) => {
        try {
            await updateMeme(id, memeData)
            navigate('/') // Redirige a la página principal después de la actualización
        } catch (error) {
            console.error('Error actualizando meme', error)
        }
    }

    return (
        <MemeForm
            initialData={initialData}
            onSubmit={handleEditMeme}
            onClose={() => navigate('/')}
            submitButtonText="Actualizar Meme"
        />
    )
}

export default EditMeme

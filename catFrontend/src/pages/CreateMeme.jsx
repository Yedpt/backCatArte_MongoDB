// CreateMeme.js
import React from 'react'
import MemeForm from '../components/MemeForm'
import { createMeme } from '../services/services'

const CreateMeme = ({ onClose, onMemeCreated }) => {
    const handleCreateMeme = async (memeData) => {
        try {
            console.log('Datos enviados al servidor:', memeData)
            const response = await createMeme(memeData)
            console.log('Respuesta del servidor:', response)
            if (typeof onMemeCreated === 'function') {
                onMemeCreated() // Actualiza la lista de memes si está definido
            }
            if (typeof onClose === 'function') {
                onClose() // Cierra el modal si está definido
            }
        } catch (error) {
            console.error('Error creando meme:', error)
        }

        return (
            <MemeForm
                onSubmit={handleCreateMeme}
                onClose={onClose}
                submitButtonText="Subir Meme"
            />
        )
    }
}
export default CreateMeme

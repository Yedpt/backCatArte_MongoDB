/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import MessageModal from './MessageModal' // Asegúrate de que la ruta sea correcta

const MemeForm = ({ onSubmit, initialData, onClose, submitButtonText }) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm()
    const [imageUrl, setImageUrl] = useState(initialData?.image || '')
    const [uploading, setUploading] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        if (initialData) {
            setValue('name', initialData.name)
            setValue('description', initialData.description)
            setValue('category', initialData.category)
            setImageUrl(initialData.image)
        }
    }, [initialData, setValue])

    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append(
            'upload_preset',
            import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        )

        setUploading(true)
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${
                    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
                }/image/upload`,
                formData
            )
            setImageUrl(response.data.secure_url)
            setUploading(false)
        } catch (error) {
            console.error('Error subiendo imagen a Cloudinary', error)
            setUploading(false)
        }
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0]
        if (file) {
            await uploadImageToCloudinary(file)
        }
    }

    const onSubmitHandler = async (data) => {
        if (imageUrl) {
            const memeData = {
                ...data,
                image: imageUrl,
                likes: initialData?.likes || 0, // Si estás editando un meme, conserva los likes actuales, si no, inicialízalos en 0
            }
            try {
                await axios.post('http://localhost:3000/api/memes', memeData);
               
                //  console.log('respuesta del servidor:', response.data);
                
                
                
                reset()
                if (typeof onClose === 'function') {
                    onClose()
                }
            } catch (error) {
                console.error('Error al enviar los datos del meme:', error)
            }
        } else {
            setModalMessage('Por favor, sube una imagen antes de continuar')
            setIsModalVisible(true)
        }
    }

    const closeModal = () => {
        setIsModalVisible(false)
    }

    return (
        <div className="rounded-lg relative inline-block text-gray p-4 bg-gray-100 shadow-lg w-full max-w-lg mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:shadow-2xl">
            <h1 className="font-inter font-semibold text-lg text-left mb-4 text-gray-800">
                {submitButtonText === 'Actualizar Meme'
                    ? 'Editar Meme'
                    : 'Crear Meme'}
            </h1>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="space-y-5"
            >
                {/* Nombre */}
                <div className="flex flex-col sm:flex-row items-center mb-2 text-gray-800">
                    <label
                        htmlFor="name"
                        className="font-inter text-sm mb-2 sm:mb-0 sm:mr-2 flex-shrink-0 w-full sm:w-28 text-gray-800"
                    >
                        Nombre:
                    </label>
                    <input
                        id="name"
                        {...register('name', {
                            required: 'Por favor, completa este campo',
                        })}
                        className={`border p-1 text-sm w-full ${
                            errors.name
                                ? 'border-purple-500'
                                : 'border-gray-700'
                        }`}
                        placeholder="Nombre del meme"
                    />
                    {errors.name && (
                        <p className="text-purple-500 text-xs mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Descripción */}
                <div className="flex flex-col sm:flex-row items-center mb-2 text-gray-800">
                    <label
                        htmlFor="description"
                        className="font-inter text-sm mb-2 sm:mb-0 sm:mr-2 flex-shrink-0 w-full sm:w-28 text-gray-800"
                    >
                        Descripción:
                    </label>
                    <textarea
                        id="description"
                        {...register('description', {
                            required: 'La descripción es requerida',
                        })}
                        className={`border p-1 text-sm w-full ${
                            errors.description
                                ? 'border-purple-500'
                                : 'border-gray-300'
                        } text-gray-500`}
                        placeholder="Descripción del meme"
                        maxLength={100}
                    />
                    {errors.description && (
                        <p className="text-purple-500 text-xs mt-1">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                {/* Categoría */}
                <div className="flex flex-col sm:flex-row items-center mb-2">
                    <label
                        htmlFor="category"
                        className="font-inter text-sm mb-2 sm:mb-0 sm:mr-2 flex-shrink-0 w-full sm:w-28 text-gray-800"
                    >
                        Categoría:
                    </label>
                    <select
                        id="category"
                        {...register('category', {
                            required: 'Selecciona una categoría',
                        })}
                        className={`border p-1 text-sm w-full ${
                            errors.category
                                ? 'border-purple-500'
                                : 'border-gray-300'
                        } text-gray-500`}
                    >
                        <option value="" disabled selected>
                            Selecciona una categoría
                        </option>
                        <option value="gatos_siendo_gatos1">
                            Gatos siendo gatos
                        </option>
                        <option value="gatos_siendo_humanos2">
                            Gatos siendo humanos
                        </option>
                        <option value="gatos_enfadados3">
                            Gatos enfadados
                        </option>
                        <option value="me_dijiste4">Me dijiste</option>
                    </select>
                    {errors.category && (
                        <p className="text-purple-500 text-xs mt-1">
                            {errors.category.message}
                        </p>
                    )}
                </div>
                {/*imagen*/}
                <div className="flex flex-col sm:flex-row items-center mb-2 text-gray-400">
                    <label
                        htmlFor="image"
                        className="font-inter text-sm mb-2 sm:mb-0 sm:mr-2 flex-shrink-0 w-full sm:w-28 text-gray-800"
                    >
                        Imágen:
                    </label>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`border p-1 text-sm w-full ${
                            imageUrl ? 'border-gray-300' : 'border-gray-500'
                        }`}
                    />

                    {/* Spinner de carga */}
                    {uploading && (
                        <div className="flex justify-center items-center mt-2">
                            <svg
                                className="animate-spin h-5 w-5 text-purple-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                ></path>
                            </svg>
                        </div>
                    )}

                    {/* Mostrar imagen cargada */}
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Uploaded"
                            className="mt-2 w-16 h-16"
                        />
                    )}
                </div>
                {/* Botones */}
                <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-4 text-sm rounded-[20px] transition-all duration-300 ease-in-out hover:bg-green-200 w-full sm:w-auto"
                    >
                        {submitButtonText}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-red-500 text-white py-2 px-4 text-sm rounded-[20px] transition-all duration-300 ease-in-out hover:bg-red-300 w-full sm:w-auto"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            {isModalVisible && (
                <MessageModal
                    message={modalMessage}
                    type="success"
                    onClose={closeModal}
                />
            )}
        </div>
    )
}

export default MemeForm

/* eslint-disable react/prop-types */
// src/components/CustomNode.jsx
import React from 'react'

const CustomNode = ({ data }) => (
    <div className="p-4 bg-white border rounded-lg shadow-lg border-gray-200">
        <h2 className="text-xl font-bold mb-2">{data.name}</h2>
        <img
            src={data.image}
            alt={data.description}
            className="w-full h-auto object-contain rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-2">{data.description}</p>
        <p className="text-sm text-gray-500">Categoría: {data.category}</p>
        <p className="text-sm text-gray-500">Fecha: {data.date}</p>
        <p className="text-sm text-gray-500">Likes: {data.likes}</p>
        <button
            onClick={() => data.handleDelete(data.id)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
            Eliminar
        </button>
    </div>
)

export default CustomNode

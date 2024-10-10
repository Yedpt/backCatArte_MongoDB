/* eslint-disable react/prop-types */
import React from 'react'

const Modal = ({ children }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div>{children}</div>
        </div>
    )
}

export default Modal

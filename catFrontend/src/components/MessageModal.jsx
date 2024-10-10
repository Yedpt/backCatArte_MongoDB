import React from 'react'

const MessageModal = ({
    message,
    type,
    onClose,
    onConfirm,
    isConfirmDialog = false, // Para decidir si es un mensaje de confirmación o informativo
}) => {
    const modalStyle = {
        // backgroundColor: type == "success" ? "green" : "red",
        // color: "white",
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div
                className="rounded-lg p-6 bg-white border-8 border-gray-600 "
                style={{ minWidth: '300px', ...modalStyle }}
            >
                <h2 className="text-2xl font-bold mb-4">
                    {type === 'success' ? '' : 'Error'}
                </h2>
                <p className="mb-6">{message}</p>

                <div className="flex justify-end space-x-4">
                    {isConfirmDialog ? (
                        <>
                            <button
                                className="bg-black text-white py-3 px-8 rounded-3xl transition-all duration-300 ease-in-out hover:bg-green-500 hover:border-black hover:text-black"
                                onClick={onConfirm}
                            >
                                Confirmar
                            </button>
                            <button
                                className="bg-red-500 text-white py-3 px-8 rounded-3xl border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:border-black hover:text-black"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                        </>
                    ) : (
                        <button
                            className="bg-black text-white py-3 px-8 rounded-3xl border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:border-black hover:text-black"
                            onClick={onClose}
                        >
                            OK
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MessageModal

import React, { useEffect, useRef, useState } from 'react'
import Masonry from 'masonry-layout'
import Card from '../components/Card' // Asegúrate de que la ruta sea correcta

const generatePattern = (memes) => {
    const positions = [
        { gridRow: 1, gridColumn: 2 },
        { gridRow: 1, gridColumn: 3 },
        { gridRow: 2, gridColumn: 1 },
        { gridRow: 2, gridColumn: 2 },
        { gridRow: 3, gridColumn: 1 },
        { gridRow: 4, gridColumn: 3 },
        { gridRow: 4, gridColumn: 2 },
        { gridRow: 5, gridColumn: 2 },
        { gridRow: 5, gridColumn: 3 },
    ]

    return memes.map((meme, index) => {
        const randomMarginTop = Math.floor(Math.random() * 80)
        const randomMarginBottom = Math.floor(Math.random() * 30) + 30

        if (index < positions.length) {
            const position = positions[index]
            return { ...meme, ...position, randomMarginTop, randomMarginBottom }
        } else {
            return { ...meme, randomMarginTop, randomMarginBottom }
        }
    })
}

const MemeGrid = ({ memes, onDelete, onEdit, onLike }) => {
    const [flipped, setFlipped] = useState({})
    const gridRef = useRef(null)

    useEffect(() => {
        if (gridRef.current) {
            const masonry = new Masonry(gridRef.current, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true,
                gutter: 10, // Espaciado entre los elementos
            })

            // Destruir Masonry al desmontar el componente
            return () => masonry.destroy()
        }
    }, [memes])

    const handleFlip = (id) => {
        setFlipped((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Invierte el estado de la tarjeta con el ID
        }))
    }

    const patternedMemes = generatePattern(memes)

    return (
        <div
            ref={gridRef}
            className="ml-11 flex flex-col items-start justify-start lg:54ml-10 lg:w-[60%] w-full sm:flex-col"
            style={{
                // El comportamiento para pantallas pequeñas (móviles) se define aquí
                display: 'flex',
                flexWrap: 'wrap', // Mantiene las tarjetas en su lugar en pantallas grandes
                justifyContent: 'flex-center',
                '@media (max-width: 640px)': {
                    flexDirection: 'column', // Para pantallas pequeñas, todas las tarjetas estarán en una columna
                },
            }}
        >
            {patternedMemes.map((meme) => (
                <div
                    key={meme.id}
                    className="grid-item"
                    style={{
                        // marginTop: `${meme.randomMarginTop}px`,
                        // marginBottom: `${meme.randomMarginBottom}px`,
                        width: 'calc(33.333% - 16px)', // En pantallas grandes
                        '@media (max-width: 1440px)': {
                            width: 'calc(100% - 16px)', // En pantallas pequeñas, ocupa todo el ancho
                        },
                    }}
                >
                    <Card
                        meme={meme}
                        handleDelete={onDelete}
                        handleFlip={() => handleFlip(meme.id)} // Asegúrate de pasar la función correctamente
                        isFlipped={flipped[meme.id] || false} // Pasamos el estado de volteo
                        handleEdit={onEdit}
                        handleLike={onLike}
                    />
                </div>
            ))}
        </div>
    )
}

export default MemeGrid
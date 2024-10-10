import React from 'react'
import ReactCardFlip from 'react-card-flip'
import HeartButton from './HeartButton'

const Card = ({
    meme,
    handleDelete,
    handleFlip,
    isFlipped,
    handleLike,
    handleEdit,
}) => {
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Parte frontal */}
            <div
                key={meme.id}
                className="group relative w-full hover:z-20 max-w-xs min-h-[370px] transition-all ease-in-out duration-300"
                style={{
                    perspective: '1000px',
                    marginTop: '0px',
                    marginBottom: '20px',
                }}
            >
                <div className="w-full h-full group-hover:z-10 transition-transform duration-300">
                    {/* Contenedor envolvente para imagen y botones */}
                    <div className="w-full h-full backface-hidden z-10 group-hover:scale-x-100 transition-transform duration-300">
                        <div
                            className="w-full min-h-[120px] flex flex-col justify-between overflow-hidden group-hover:bg-white transition-colors duration-300"
                            style={{
                                padding: '10px',
                                backgroundColor: 'transparent',
                            }}
                        >
                            {/* Contenedor para imagen con marco solo en la parte superior */}
                            <div className="relative flex-grow flex justify-center items-center overflow-hidden rounded-t-3xl group-hover:bg-white transition-colors duration-300">
                                <img
                                    src={meme.image}
                                    alt={meme.description}
                                    className="max-h-[350px] hover:border-8 border-2 hover:border-white w-auto object-contain rounded-3xl transition-all duration-300"
                                />
                            </div>

                            {/* Contenedor de botones */}
                            <div className="w-full rounded-b-3xl p-2 bg-white flex justify-evenly opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <HeartButton
                                    initialLikes={meme.likes}
                                    memeId={meme.id}
                                    onLike={(newLikes) =>
                                        handleLike(meme.id, newLikes)
                                    }
                                />
                                <button
                                    className="delete"
                                    onClick={() => handleDelete(meme.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="26px"
                                        viewBox="0 0 256 256"
                                        fill="currentColor"
                                    >
                                        <path d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0" />
                                    </svg>
                                </button>
                                <button
                                    className="more"
                                    onClick={() => handleFlip(meme.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="edit"
                                    onClick={() => handleEdit(meme)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                    >
                                        <g
                                            id="clarity:note-line"
                                            clipPath="url(#clip0_356_2321)"
                                        >
                                            <path
                                                id="Vector"
                                                d="M20.222 21.6667H4.33312V5.77779H13.8809L15.3253 4.33334H4.33312C3.95003 4.33334 3.58263 4.48553 3.31174 4.75641C3.04085 5.0273 2.88867 5.3947 2.88867 5.77779V21.6667C2.88867 22.0498 3.04085 22.4172 3.31174 22.6881C3.58263 22.9589 3.95003 23.1111 4.33312 23.1111H20.222C20.6051 23.1111 20.9725 22.9589 21.2434 22.6881C21.5143 22.4172 21.6665 22.0498 21.6665 21.6667V10.8333L20.222 12.2778V21.6667Z"
                                                fill="#A3A3A3"
                                            />
                                            <path
                                                id="Vector_2"
                                                d="M24.2163 4.21779L21.7824 1.7839C21.6744 1.67558 21.546 1.58965 21.4048 1.53102C21.2635 1.47238 21.112 1.4422 20.959 1.4422C20.8061 1.4422 20.6546 1.47238 20.5133 1.53102C20.3721 1.58965 20.2437 1.67558 20.1357 1.7839L10.234 11.7433L9.43238 15.2172C9.39823 15.3856 9.40182 15.5595 9.44289 15.7263C9.48397 15.8932 9.56151 16.0488 9.66994 16.1821C9.77837 16.3154 9.91498 16.423 10.07 16.4972C10.225 16.5714 10.3945 16.6103 10.5663 16.6111C10.6551 16.6208 10.7447 16.6208 10.8335 16.6111L14.3363 15.8383L24.2163 5.86445C24.3246 5.75644 24.4105 5.62811 24.4692 5.48683C24.5278 5.34555 24.558 5.19408 24.558 5.04112C24.558 4.88815 24.5278 4.73669 24.4692 4.59541C24.4105 4.45412 24.3246 4.3258 24.2163 4.21779ZM13.5852 14.5022L10.9418 15.0872L11.5557 12.4656L19.009 4.96167L21.0457 6.99834L13.5852 14.5022ZM21.8618 6.18223L19.8252 4.14556L20.9446 3.00445L22.9957 5.05556L21.8618 6.18223Z"
                                                fill="#A3A3A3"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_356_2321">
                                                <rect
                                                    width="26"
                                                    height="26"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                           
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Parte trasera */}

            <div
                key={`back-${meme.id}`}
                className="relative w-full hover:z-20 max-w-xs min-h-[370px] transition-all ease-in-out duration-300"
                style={{
                    perspective: '1000px',
                    marginTop: '0px',
                    marginBottom: '20px',
                }}
            >
                <div className="w-full h-full group-hover:z-10 transition-transform duration-300 flex items-center justify-center">
                    <div
                        className="p-4 bg-rose-100 text-black border border-black rounded-3xl text-sm transition-transform duration-200 hover:scale-105 hover:bg-rose-200"
                        style={{
                            padding: '20px',
                        }}
                    >
                        <div className="flex flex-col items-center justify-between h-full">
                            <div className="text-center">
                                <h3 className="text-xl font-bold">
                                    {meme.name}
                                </h3>
                                <p className="text-sm mt-2">
                                    {meme.description}
                                </p>
                            </div>
                            <button
                                onClick={() => handleFlip(meme.id)}
                                className="p-2 bg-transparent text-black border border-black rounded-lg text-sm transition-transform duration-300 hover:scale-90 hover:p-2 hover:border-2 hover:text-black mt-4"
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    )
}

// Componente que maneja la cuadrícula de cartas
const CardGrid = ({ memes, handleDelete, handleFlip, flippedCards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {memes.map((meme) => (
                <Card
                    key={meme.id}
                    meme={meme}
                    handleDelete={handleDelete}
                    handleFlip={handleFlip}
                    isFlipped={flippedCards.includes(meme.id)}
                />
            ))}
        </div>
    )
}

export default Card

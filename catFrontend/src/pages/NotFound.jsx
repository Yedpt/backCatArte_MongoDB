import { useRouteError, Link } from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError()
    console.log(error)

    return (
        <main
            className="flex justify-center items-center h-screen"
            style={{
                background: 'linear-gradient(13%, #D6D6D6 100%, #F8F8F8 100%)',
            }}
        >
            <div className="flex flex-col items-center gap-10">
                <section className="text-center">
                    <h1
                        className="text-8xl font-bold text-blue-500 uppercase leading-tight tracking-wider"
                        style={{ fontFamily: "'Jaro', sans-serif" }}
                    >
                        Mecat Museum
                    </h1>
                </section>
                <section className="flex flex-col items-center">
                    <div
                        className="border-1 border-black rounded-md p-4"
                        style={{ width: '600px' }}
                    >
                        <video
                            loading="lazy"
                            className="object-contain w-full rounded-lg"
                            alt="Mecat Museum exhibit"
                            autoPlay
                            muted
                            loop
                            style={{ maxHeight: '400px' }}
                        >
                            <source src="src/assets/animaciones/cat404.mp4" />
                        </video>
                    </div>
                    <Link to="/" className="mt-5">
                        <button
                            className="text-white py-3 px-8 rounded-full"
                            style={{
                                backgroundColor: 'black',
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                            }}
                        >
                            Volver a Home
                        </button>
                    </Link>
                </section>
            </div>
        </main>
    )
}

export default NotFound

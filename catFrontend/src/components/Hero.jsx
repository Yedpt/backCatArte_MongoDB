const Hero = () => {
    return (
        <div className="flex items-start relative z-19">
            <div className="w-full flex flex-col pt-[12%] pb-[10%]  items-center bg-gradient-to-b from-[#ff9a8b] to-[#ff4b2b]">
                <div className="w-[85vw] flex flex-col items-start">
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-60 w-full">
                        <p className="w-full lg:w-[40%] font-jaro text-6xl lg:text-9xl text-shadow-sm text-center mb-6 lg:mb-10 lg:text-left">
                            Mecat Museum
                        </p>
                        <p className="w-full lg:w-[60%] font-inter text-base lg:text-2xl text-center lg:text-left">
                            MeCat es el primer museo virtual dedicado
                            exclusivamente a los memes de gatos. Aquí, los
                            amantes de los gatos pueden explorar, compartir y
                            reír con los memes más divertidos del mundo felino.
                            Nuestro objetivo es celebrar el humor y la
                            creatividad que los gatos inspiran en internet,
                            ofreciendo un espacio para que todos los fans del
                            "cat-meme" se reúnan y disfruten de lo mejor del
                            contenido viral felino. ¡Únete a nuestra comunidad y
                            forma parte de la historia del meme gatuno!
                        </p>
                    </div>
                    <div className="mt-[5%] w-full text-center lg:w-[40%] lg:self-start lg:text-left">
                        <p className="font-alatsi text-lg lg:text-2xl">
                            Donde los memes de gatos hacen historia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

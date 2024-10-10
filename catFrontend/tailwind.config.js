/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gatos-siendo-gatos1':
                    'linear-gradient(to bottom, #ff4b2b, #ff416c)',
                'gatos-siendo-humanos2':
                    'linear-gradient(to bottom, #ff416c, #0072ff)',
                'gatos-enfadados3':
                    'linear-gradient(to bottom, #0072ff, #FBD786)',
                'me-dijiste4': 'linear-gradient(to bottom, #FBD786, #EAEAEA)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                jaro: ['Jaro', 'sans-serif'],
            },
            fontSize: {
                '20px': '20px',
                '24px': '24px',
                '28px': '28px', // Tamaño adicional
            },
            letterSpacing: {
                '3px': '3px',
            },
            textShadow: {
                sm: '1px 1px 1px rgba(0, 0, 0, 0.5)',
                DEFAULT: '2px 2px 2px rgba(0, 0, 0, 0.5)',
                md: '3px 3px 3px rgba(0, 0, 0, 0.5)',
                lg: '4px 4px 4px rgba(0, 0, 0, 0.5)',
                xl: '5px 5px 5px rgba(0, 0, 0, 0.5)',
            },
        },
    },
    plugins: [
        require('tailwindcss-textshadow'),
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow-sm': {
                    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow': {
                    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-md': {
                    textShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-lg': {
                    textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-xl': {
                    textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
                },
            }

            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
}

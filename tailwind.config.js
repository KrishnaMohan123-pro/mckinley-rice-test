/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        colors: {
            grey: {
                primary: '#323438',
                secondary: '#85878c',
                other: '#e5e6e9',
            },
            white: '#ffffff',
            green: '#00c362',
            blue: '#2196f3',
        },
    },
    plugins: [],
};

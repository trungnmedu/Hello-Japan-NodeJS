module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            width: {
                '0.25': '1px'
            },
            colors: {
                'dark-blue': '#233b5e',
                'blue-gray': '#535f66',
                'light-blue': '#95daf8',
                'ice-blue': '#cad5da',
                'catalina-blue': '#002d74',
                'aqua': '#347c95'
            },
            animation: {
                'fade-in': 'fadeIn 0.25s linear',
            }
        },
    },
    plugins: [],
}

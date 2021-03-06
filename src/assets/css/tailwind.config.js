module.exports = {
    purge: {
        content: ['dist/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                change: 'transparent',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
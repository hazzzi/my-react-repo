const pixelToRem = size => `${size / 16}rem`

const palette = {
    white: '#FFFFFF',
    primary: {
        light: '#02C7F2',
        main: '#00ABFF',
    },
    text: {
        main: '#4C4C4C',
        light: '#9F9F9F',
    },
    background: '#F5F5F5',
    border: '#E0E0E0',
}

const theme = {
    pixelToRem,
    palette,
}

export default theme

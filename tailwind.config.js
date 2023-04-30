/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: '2rem',
				lg: '3rem',
				xl: '3rem',
				'2xl': '3rem',
			},
		},
		fontFamily: {
			primary: ['"Open Sans"', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
		},
		colors: {
			pink: 'var(--pink)',
			'pale-cyan': 'var(--pale-cyan)',
			'dark-cyan': 'var(--dark-cyan)',
			gray: 'var(--gray)',
			white: 'var(--white)',
		},
	},
	plugins: [],
}
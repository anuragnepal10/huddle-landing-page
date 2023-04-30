/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			boxShadow: {
				custom: 'rgba(0, 0, 0, 0.1) 4px 4px 20px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1080px',
			xl: '1440px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: '3rem',
				lg: '4rem',
				xl: '5rem',
			},
			screens: {
				sm: '640px',
				md: '640px',
				lg: '640px',
				xl: '1440px',
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

const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Purple: '#7828C8',
				Red: '#F31260',
				Grey: '#D4D4D8',
				Zinc: '#18181B',
			},
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}

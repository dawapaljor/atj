/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
	  },
	  colors: {
		black: "#000000",
		white: "#ffedd5",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#0E86D4",
		zinc: {
		  100: "#F3F3F3",
		  200: "#F0F0F0",
		  300: "#D9D9D9",
		  400: "#D8D8D8",
		  500: "#898989",
		  600: "#B0B0B0",
		  700: "#787878",
		  800: "#292A32",
		  900: "#191A23",
		},
	  },
	  extend: {
		fontFamily: {
			SpaceGrotesk: ["Space Grotesk", "sans-serif"],
			specialElite:["Special Elite"],
		},
		animation: {
		  marquee: 'marquee 25s linear infinite',
		  marquee2: 'marquee2 25s linear infinite',
		},
		keyframes: {
		  marquee: {
			'0%': { transform: 'translateX(0%)' },
			'100%': { transform: 'translateX(-100%)' },
		  },
		  marquee2: {
			'0%': { transform: 'translateX(100%)' },
			'100%': { transform: 'translateX(0%)' },
		  },
		},
		backgroundImage: {
			'hero-pattern': "url('/pictures/news.jpg')",
		  }
	 },
	 
	},
	plugins: [
		require('flowbite/plugin')
	],
	
  };
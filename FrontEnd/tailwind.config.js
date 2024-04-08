/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ["Rajdhani"],
      },
      colors:{
        twitterColor:"#1DA1F2",
        githubColor:"#2b3137",
        linkedinColor:"#0A66C2",
        lightGreen:"#F1FADA",
        darkGreen:"#9AD0C2",
      }
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

    },
  },
  
  plugins: [
    require("daisyui"),
  ]
}


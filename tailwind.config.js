/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB", 
        "gray-50": "#EFE6E6", 
        "gray-100": "#DFCCCC", 
        "gray-500": "#5E0000",
        "primary-100": "FFE1E0",
        "primary-300": "FFA6A3",
        "primary-500": "FF6B66",
        "secondary-400": "FFCD58",
        "secondary-500": "FFC132",        
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        // "mobile-home": "url("./assets/imagename.png")"
      }),
      fontFamily: {
        dmsans: ["DM sans", "sans-serif"],
        montserrat:["montserrat", "sans-serif"]
      },
      content: {
        // evolvetext: "url("./assets/evolvetext.png")"
        // abstractwaves: "url("./assets/abstractwaves.png")"
        // sparkles: "url("./assets/sparkles.png")"
        // circle: "url("./assets/circle.png")"
      }
    },
    screens: {
      "xs": "480px",
      "sm": "768px",
      "md": "1060px",
    }
  },
  plugins: [],
}
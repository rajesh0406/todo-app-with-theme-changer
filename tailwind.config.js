module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode:'class', // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
       lightgray:"#fafafa",
       verylightgrayblue:"#e4e5f1",
       lightgrayblue:"#d2d3db",
       darkgrayblue:"#9394a5",
       verydarkgrayblue:"#484b6a",
       DARKverydarkblue:"#161722",
       DARKverydarksaturatedblue:"#25273c",
       DARKlightgrayblue:"#cacde8",
       DARKlightgraybluehover:"#e4e5f1",
       DARKdarkgrayblue:"#777a92",
       DARKverydarkgrayishblue1:"#4d5066",
       DARKverydarkgrayishblue2:"#393a4c",
       brightblue:"#3a7bfd",
       skyblue:"#57ddff",
       purple:" #c058f3"
      },
      
    extend: {
      fontFamily: {
        'Josefin':['Josefin Sans','sans-serif']
      },
      backgroundImage: theme => ({
        'desktopDark': "url('/src/images/bg-desktop-dark.jpg')",
        'desktopLight':"url('/src/images/bg-desktop-light.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

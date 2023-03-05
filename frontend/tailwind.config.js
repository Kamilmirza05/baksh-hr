/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontSize:{
      'poppins-400':['40px',
        {
          fontFamily: 'Poppins',
          fontSize: '40px',
          fontWeight: '400',
          lineHeight: '39px',
          letterSpacing: '-0.02em',
          textAlign: 'right',
        }
      ],
      
      'poppins-300':['40px',{
        fontFamily: 'Poppins',
        fontsize: '40px',
        fontweight: '300',
        lineheight: '39px',
        letterspacing: '-0.02em',
        textalign: 'right',
      }],

      'poppins-600':['40px',{
        fontFamily: 'Poppins',
        fontSize: '40px',
        fontWeight: '600',
        lineHeight: '39px',
        letterSpacing: '-0.02em',
        textAlign: 'right',
      }],
      'login-heading':['34px',
        {
          fontFamily: 'Poppins',
          fontSize: '34px',
          fontWeight: '600',
          lineHeight: '51px',
          letterSpacing: '-0.02em',
          textAlign: 'left',
        }
      ],
      
      'login-desc':['14px',{
        //styleName: 14;
        fontFamily: 'Poppins',
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "21px",
        letterSpacing: "-0.02em",
        textAlign: "left",
      }]
    },
    colors:{
      'lightGray':'#EFEFEF',
      'darkGray':'#868B90',
      'primary':'#C49A50',
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {

        'homeRight':  "url('./images/background.jpg')",


      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ruta y extención de archivos donde teilwind sera aplicado 
  content: [
    // Por defecto viene asi:
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    //---------------------------------------//

    // Aplicaremos solo para archivos typescript dentro de src
    './src/**/*.tsx',
  ],
  theme: {
    // extender el tema de tailwind, incluir estilos personalizados
    extend: {
       gridTemplateColumns:{app:'minmax(18rem, 20rem) 1fr'},

        colors:{mandarina:'#DE6749'}


      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}

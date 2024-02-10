/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        iconW: '1.5rem'
      },
      colors: {
        tugmaColor: '#7F56D9',
        tugmaText: '#ffffff',
        bodyBg: '#2C1F4A',
        fTextColor: '#BEA0FF',
        mostBg: '#524870',
        footerPColor: '#B0B0D1',
        avatarBg: '#54546B',
        testimonial: '#381D74',
        testimonialText: '#D9ECFF',
        borderC: 'rgba(255, 255, 255, 0.20)',
        tugma2: '#FF5156',
        footerColorS: '#38275F',
        footerColorE: '#302252',
        chiziq: '#DADAF7',
        arabicParagraph: '#CFD6CE',
        arabicHeadingX: '#7DFB50',
        arabicParagraph2: '#FAFAFA',
        btnGroup: '#41355C',
        cardDesign: '#5C4791',
        login: 'rgba(88, 130, 193, 0.28)',
        eye: '#C7D2D6',
        input: '#BCBEC0',
        loginButton: '#003465',
        contact: '#2E0249',
        contactText: '#A91079',
        contactPhone: '#570A57',
        contactB: '#A91079',
        contactForm: '#EEEEEE',
        contactborder: '#2E0249', 
        focusContact: '#A91079',
      },
      borderRadius: {
        tugmaRadius: '17px',
      },
    },
  },
  plugins: [],
}
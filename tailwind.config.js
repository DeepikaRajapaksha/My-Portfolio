module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        spaceDark: '#0B0B16', // Dark space color
        spaceLight: '#1C1C2E', // Slightly lighter space color
        snowWhite: '#F0F0F', // Snowy background color
        snowGray: '#D3D3D3', // Light gray for snowy theme
      },
    },
  },
  darkMode: 'class',
};

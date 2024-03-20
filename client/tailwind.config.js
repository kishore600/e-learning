/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      orange : "#FB4000",
      orangeshade:"#FA5119",
      liteyellow:"#FFE75E",
      liteOrange : "#FFD580",
      gr:"#4A4A4A",
      purple:"#6508CE",
      litePurple:"#f1eaf9",
      purpleshade:"#8032D8",
      white:"white",
      gray:"#6E6E6E",
      bg:"#FDFDFD",
      black:"#000000",
      red:'#FF0000',
      logoutbg:'#FFE6E6',
      snav:'#6508CE',
      snavbg:'#EDE2FA',
      subheading:'#868686',
      blue:'#6495ED',
      green: '#32CD32',
    }
  },
  plugins: [],
}

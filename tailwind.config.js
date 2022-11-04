/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "primary-green": "#5AA645",
        "light-green": "#F3FAF2",
        "dark-green": "#4E903C",
        "background-white": "#FCFCFD",
        "primary-black": "#101828",
        "light-gray": "#344054",
        "lighter-gray": "#667085",
        "faded-gray": "#D0D5DD",
        "light-gray2": " #EAECF0",
        "light-blue": "#F9FAFB",
        "secondary-black": "#344054",
        "success-green": "#ECFDF3",
      },
      boxShadow: {
        "search-shadow": "0px 1px 2px rgba(16, 24, 40, 0.05)",
        "dashboard-shadow":
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [],
};

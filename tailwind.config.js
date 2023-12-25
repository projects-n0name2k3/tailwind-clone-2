/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
      },
      colors: {
        "gray/10": "#1A1A1A",
        "gray/11": "#1C1C1C",
        "gray/15": "#262626",
        "gray/20": "#333333",
        "gray/30": "#4C4C4D",
        "gray/35": "#59595A",
        "gray/40": "#656567",
        "gray/60": "#98989A",
        "gray/70": "#B3B3B3",
        "gray/75": "#BFBFBF",
        "white/90": "#E4E4E7",
        "white/95": "#F1F1F3",
        "white/97": "#F7F7F8",
        "white/99": "#FCFCFD",
        "green/60": "#CAFF33",
        "green/65": "#D1FF4D",
        "green/70": "#D8FF66",
        "green/80": "#E5FF99",
        "green/90": "#F2FFCC",
        "green/95": "#F8FFE5",
        "green/97": "#FBFFF0",
        "green/99": "#FEFFFA",
      },
    },
  },
  plugins: [],
};

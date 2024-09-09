/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "public/**/*.html",
        "src/**/*.{ts,tsx,js,jsx}",
        "../*/src/**/*.{ts,tsx,js,jsx}", // Picks up files from component packages as well
    ],
    theme: {},
    plugins: [
        require("@tailwindcss/typography"),
    ],
};
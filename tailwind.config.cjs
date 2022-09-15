/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["GT Walsheim Pro", "sans-serif"],
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                accent: "#4F46E5",
            },
        },
    },
    plugins: [],
};

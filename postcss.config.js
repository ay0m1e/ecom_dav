// PostCSS configuration that stitches Tailwind's utilities with vendor prefixing.
module.exports = {
  plugins: {
    // Compile Tailwind directives defined across the project.
    tailwindcss: {},
    // Automatically add vendor prefixes for broader browser support.
    autoprefixer: {},
  },
};

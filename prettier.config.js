module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  pluginSearchDirs: false,
  // prettier-plugin-astro
  astroAllowShorthand: true,
};

const prettierPluginTailwindCss = require("prettier-plugin-tailwindcss");

module.exports = {
  plugins: [prettierPluginTailwindCss],
  tailwindConfig: "./tailwind.config.ts",
};

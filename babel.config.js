module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["@babel/preset-env", {
        "targets": { "browsers": ["last 2 versions"] }
      }],
      "@babel/preset-react"
    ],
    plugins: [],
  };
};

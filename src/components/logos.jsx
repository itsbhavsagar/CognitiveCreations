// src/assets/logos/index.js
const importAll = (r) => r.keys().map(r);
const logos = importAll(require.context("./", false, /\.png$/));

export default logos;

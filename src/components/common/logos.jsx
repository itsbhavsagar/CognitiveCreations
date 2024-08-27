// src/components/logos.jsx
const importAll = (r) => r.keys().map(r);
const logos = importAll(require.context("./", false, /\.png$/));

export default logos;

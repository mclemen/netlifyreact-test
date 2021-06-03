const fetch = require("node-fetch");
const renderPages = require("hyperstatic/src/renderPages");

// const pokepages = require('static/heros.json')

(async () => {
  let pages = [
    "/",
    '/project',
    // '/starter',
    // '/counter',
    "/heros",
    // '/apod'
  ];

  // Get a list of pokemon pages
  const pokemonPages = await fetch(
    `https://raw.githubusercontent.com/webhsieh/derp/main/heros.json`
  )
    .then((response) => response.json())
    // .then(console.log(response))
    .then((data) => data.data.map((hero) => `/heros/${hero.heroid}`));

  // Add pokemons pages to urls
  pages = pages.concat(pokemonPages);

  renderPages(pages).then(() => {
    console.log("All pages rendered!");
    process.exit(0);
  });
})();

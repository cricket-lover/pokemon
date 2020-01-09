const fs = require('fs');
const pokemonData = fs.readFileSync('./pokemon.json', 'utf8');
const parsedData = JSON.parse(pokemonData);
let imgLink = '';
let name = '';

parsedData.forEach(element => {
  imgLink = element['art_url'];
  name = element.name;
  console.log(
    `<div class="card"><h1 class="heading">${name}</h1><img src="${imgLink}" alt="${name}" /></div>`
  );
});

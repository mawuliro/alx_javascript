#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const films = JSON.parse(body).results;
  const characterId = '18';
  let count = 0;

  films.forEach(function (film) {
    const characters = film.characters;

    characters.forEach(function (character) {
      if (character.endsWith(characterId)) {
        count++;
      }
    });
  });

  console.log(count);
});

#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Request failed with status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message);
    process.exit(1);
  }
});

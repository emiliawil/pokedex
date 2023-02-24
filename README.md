# Pokedex App

This is a simple app that uses the [PokeAPI](https://pokeapi.co/) to display a list of Pokemon and their details.

## Getting Started

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm start` to start the app
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing

1. Run `npm test` to run the tests

### Deployment

1. Run `npm run build` to build the app for production to the `build` folder.
2. Run `npm install -g serve` to install the serve package globally.
3. Run `serve -s build` to serve the production build.

## API

The app uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data.

The API is a RESTful API that returns JSON data.

### Endpoints

- [Pokemon](https://pokeapi.co/docs/v2#pokemon)
- [Pokemon Species](https://pokeapi.co/docs/v2#pokemon-species)
- [Pokemon Types](https://pokeapi.co/docs/v2#types)
- [Pokemon Abilities](https://pokeapi.co/docs/v2#abilities)
- [Pokemon Moves](https://pokeapi.co/docs/v2#moves)

### Data

The data returned from the API is used to display the Pokemon's name, image, type, abilities, moves, and stats.

### Pagination

The API returns a list of Pokemon, but only 20 at a time. To get the next 20, you need to pass in an offset parameter. The app uses this to paginate the list of Pokemon.

### Caching

The app uses [React Query](https://react-query.tanstack.com/) to cache the data returned from the API. This means that when you navigate to a Pokemon's details page, the data is already in the cache and doesn't need to be fetched again.

## Built With

- [Next](https://nextjs.org/) - React framework
- [Typescript](https://www.typescriptlang.org/) - Type checking
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [PokeAPI](https://pokeapi.co/) - Pokemon API
- [React Query](https://react-query.tanstack.com/) - Data fetching
- [Jest](https://jestjs.io/) - Testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing
- [Cypress](https://www.cypress.io/) - E2E testing

## Author

- **[Emilia Williamson](https://github.com/emiliawil)**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

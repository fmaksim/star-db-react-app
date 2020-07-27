import PlanetTransformer from "./data-transformers/planet-transformer";
import PersonTransformer from "./data-transformers/person-transformer";
import StarshipTransformer from "./data-transformers/starship-transformer";

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api/';

    getResource = async(resource) => {
        const res = await fetch(`${this._apiBase}${resource}/`);

        if (!res.ok) {
            throw new Error(`Could not fetch resource: ${resource}, 
                received code: ${res.status}`);
        }

        return await res.json();
    }

    getPerson = async(id) => {
        const person = await this.getResource(`people/${id}`);

        return PersonTransformer.transform(person);
    }

    getAllPersons = async() => {
        const res = await this.getResource(`people`);

        return res.results.map(person => PersonTransformer.transform(person));
    }

    getPlanet = async(id) => {
        const planet = await this.getResource(`planets/${id}`);

        return PlanetTransformer.transform(planet);
    }

    getAllPlanets = async() => {
        const res = await this.getResource(`planets`);

        return res.results.map(planet => PlanetTransformer.transform(planet));
    }

    getStarship = async(id) => {
        const starship = await this.getResource(`starships/${id}`);

        return StarshipTransformer.transform(starship);
    }

    getAllStarships = async() => {
        const res = await this.getResource(`starships`);

        return res.results.map(starship => StarshipTransformer.transform(starship));
    }
}
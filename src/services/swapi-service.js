export default class SwapiService {

    _apiBase = 'https://swapi.dev/api/';

    async getResource(resource) {
        const res = await fetch(`${this._apiBase}${resource}`);

        if (!res.ok) {
            throw new Error(`Could not fetch resource: ${resource}, 
                received code: ${res.status}`);
        }

        return await res.json();
    }

    async getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPersons() {
        const res = await this.getResource(`peoples`);

        return res.results;
    }

    async getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`planets`);

        return res.results;
    }

    async getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`starships`);

        return res.results;
    }
}
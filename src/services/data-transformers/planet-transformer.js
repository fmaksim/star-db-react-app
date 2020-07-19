import IdExtractor from "./id-extractor";

export  default class PlanetTransformer {
    static transform = (planet) => {
        const id = IdExtractor.extractId(planet.url);
        return {
            id,
            name: planet.name,
            diameter: planet.diameter,
            climate: planet.climate,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
        };
    }
}
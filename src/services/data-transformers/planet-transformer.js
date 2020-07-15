export  default class PlanetTransformer {
    static transform = (planet) => {
        return {
            name: planet.name,
            diameter: planet.diameter,
            climate: planet.climate,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
        };
    }
}
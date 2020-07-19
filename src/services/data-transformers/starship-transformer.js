import IdExtractor from "./id-extractor";

export  default class StarshipTransformer {
    static transform = (starship) => {
        const id = IdExtractor.extractId(starship.url);
        return {
            id,
            name: starship.name,
            model: starship.model,
            costInCredits: starship.cost_in_credits,
            class: starship.starship_class,
            hyperdriveRating: starship.hyperdrive_rating,
        };
    }
}
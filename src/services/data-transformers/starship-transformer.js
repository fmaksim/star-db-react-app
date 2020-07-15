export  default class StarshipTransformer {
    static transform = (starship) => {
        return {
            name: starship.name,
            model: starship.model,
            costInCredits: starship.cost_in_credits,
            class: starship.starship_class,
            hyperdriveRating: starship.hyperdrive_rating,
        };
    }
}
import IdExtractor from "./id-extractor";

export  default class PersonTransformer {
    static transform = (person) => {
        const id = IdExtractor.extractId(person.url);
        return {
            id,
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
            hairColor: person.hair_color,
        };
    }
}
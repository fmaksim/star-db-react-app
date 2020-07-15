export  default class PersonTransformer {
    static transform = (person) => {
        return {
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
            hairColor: person.hair_color,
        };
    }
}
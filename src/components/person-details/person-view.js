import React from "react";

const PersonView = ({person}) => {
    const {id, name, gender, birthYear, eyeColor, hairColor} = person;
    return (
        <>
            <img
                className="person-img"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt=""/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Hair Color</span>
                        <span>{hairColor}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PersonView;
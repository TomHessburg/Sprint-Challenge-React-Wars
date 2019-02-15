import React from 'react';


const Character = props => {

    return(
        <div className="specific-character">
            <h2>{props.characterName}</h2>
            <p><span>birth year: </span>{props.character.birth_year}</p>
            <p><span>eye color: </span>{props.character.eye_color}</p>
            <p><span>gender: </span>{props.character.gender}</p>
            <p><span>hair color: </span>{props.character.hair_color}</p>
            <p><span>height: </span>{props.character.height}"</p>
            <p><span>mass: </span>{props.character.mass}kg</p>
            <input onChange={props.doAThing} placeholder="does a thing..."></input>
        </div>
    );
}


export default Character;
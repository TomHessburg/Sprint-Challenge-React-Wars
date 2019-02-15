import React from 'react';
import Character from './Character'


const ListCharacter = props => {
    
    return(
        <div className="characters-holder">
            {props.characters.map(character => {
                return <Character characterName={character.name} character={character} key={character.id} />
            })}

        </div>
    );
}

export default ListCharacter;

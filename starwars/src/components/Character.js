import React from 'react';


const Character = props => {

    return(
        <div className="specific-character">
            <p>{props.characterName}</p>
            
        </div>
    );
}


export default Character;
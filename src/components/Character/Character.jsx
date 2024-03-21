import React, {useState, useEffect} from 'react'
import './Character.css'


const Character = () => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            const character = await fetch("https://rickandmortyapi.com/api/character/?page=1");
            const characterJson = await character.json();
            setCharacter(characterJson.results)
  
            return {
                ...characterJson,
                name: characterJson.name,
                image: characterJson.image
            }
        }
            getCharacters()   
    }, [])

  return (
    <div>
    <h1>Rick and Morty Characters</h1>
    <div className="characters-container">
        {character.map(charact => (
            <div key={charact.id} className="character">
                <img src={charact.image} alt={charact.name} 
                onClick={(e) => {
                    const target = e.target;
                    target.style.transform = target.style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
                  }}/>
                <h3>{charact.name}</h3>
            </div>
        ))}
    </div>
</div>
  )
}

export default Character
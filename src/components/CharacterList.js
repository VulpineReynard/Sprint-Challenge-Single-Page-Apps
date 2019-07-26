import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log('characters: ', res.data.results);
      setCharacterList(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className='character-list grid-view'>
      {
        characterList.map((character, index) => {
          return <CharacterCard character={character} key={index}/>
        })
      }
    </section>
  );
}

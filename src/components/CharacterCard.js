import React from 'react'
import styled from 'styled-components';

const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 300px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
`;
const CharImg = styled.img`
  max-width: 70%;
  max-height: 70%;
  margin: 5px auto;
`;

export default function CharacterCard ({character}) {
  return (
    <CharCard className="character-card">
      <h3 style={{textAlign: "center"}}>{character.name}</h3>
      <CharImg src={character.image}/>
      <p style={{margin: "0"}}>Location: {character.location.name}</p>
      <p style={{margin: "0"}}>Gender: {character.gender}</p>
      <p style={{margin: "0"}}>Species: {character.species}</p>
      <p style={{margin: "0"}}>Status: {character.status}</p>
    </CharCard>
  );
}

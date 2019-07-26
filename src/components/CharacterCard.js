import React from 'react'
import styled from 'styled-components';

const CharCard = styled.div`
  height: 200px;
  width: 150px;
  border: 2px solid black;
`;

export default function CharacterCard ({character}) {
  return (
    <CharCard className="character-card">
      <h3>{character.name}</h3>
    </CharCard>
  );
}

import React from 'react'
import styled from 'styled-components';

const EpiCard = styled.div`
  height: 200px;
  width: 150px;
  border: 2px solid black;
`;

export default function EpisodeCard ( {episode} ) {
  return (
    <EpiCard className="episode-card">
      <h3>{episode.name}</h3>
    </EpiCard>
  );
}
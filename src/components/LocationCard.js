import React from 'react'
import styled from 'styled-components';

const LocCard = styled.div`
  height: 200px;
  width: 150px;
  border: 2px solid black;
`;

export default function LocationCard  ( {location} ) {
  return (
    <LocCard className="location-card">
      <h3>{location.name}</h3>
    </LocCard>
  );
}
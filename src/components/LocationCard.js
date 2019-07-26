import React from 'react'
import styled from 'styled-components';

const LocCard = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 300px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
`;

export default function LocationCard  ( {location} ) {
  return (
    <LocCard className="location-card">
      <h3 style={{textAlign: "center"}}>{location.name}</h3>
      <p style={{margin: "0"}}>Dimension: {location.dimension}</p>
      <p style={{margin: "0"}}>Type: {location.type}</p>
    </LocCard>
  );
}
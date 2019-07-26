import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/")
    .then(res => {
      console.log('locations: ', res.data.results);
      setLocationList(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className='location-list grid-view'>
      {
        locationList.map((location, index) => {
          return <LocationCard location={location} key={index}/>
        })
      }
    </section>
  );
}
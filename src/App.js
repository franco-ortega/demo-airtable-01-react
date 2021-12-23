import React, { useEffect, useState } from 'react';
import Map from './maps/Map';

const API_KEY = 'keykQbQpBWtr1spv2';
const BASE_ID = 'appZTYyVloFGEKjPl';

const App = () => {

  const [maps, setMaps] = useState([]);

  useEffect(() => {
    //fetch maps
    fetch(`https://api.airtable.com/v0/${BASE_ID}/maps?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => {

        Object.keys(res.records).forEach((key) => {

          Object.keys(res.records[key].fields).forEach((field) => {
            var replacedField = field.trim().replace(/\s+/g, "_");
            if (field !== replacedField) {
              res.records[key].fields[replacedField] = res.records[key].fields[field];
               delete res.records[key].fields[field]
            }
          });

       });

        setMaps(res.records);
      });
      
    }, []);

  const mapList = maps.map(map => (
    <Map
      key={map.id}
      {...map.fields}
    />
  ));

  if(!maps) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Maps</h1>
      <ul>{mapList}</ul>
    </div>
  );
};

export default App;

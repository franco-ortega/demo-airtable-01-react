import React from 'react';
import PropTypes from 'prop-types';

const Map = ({
    Name,
    Priority,
    Status,
    Start_Date,
    Deadline,
    Cost,
    Price
  }) => {
  return (
    <li>
      <p>Name: {Name}</p>
      <p>Priority: {Priority}</p>
      <p>Status: {Status}</p>
      <p>Start Date: {Start_Date}</p>
      <p>Deadline: {Deadline}</p>
      <p>Cost: ${Cost}</p>
      <p>Price: ${Price}</p>
    </li>
  );
};

Map.propTypes = {
  Name: PropTypes.string.isRequired,
  Priority: PropTypes.string.isRequired,
  Status: PropTypes.string.isRequired,
  Start_Date: PropTypes.string.isRequired,
  Deadline: PropTypes.string.isRequired,
  Cost: PropTypes.number.isRequired,
  Price: PropTypes.number.isRequired
};

export default Map;

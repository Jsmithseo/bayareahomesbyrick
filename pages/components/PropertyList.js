import React from 'react';
import properties from '../../pages/api/properties';

const PropertyList = ({ properties }) => {
  // Check if properties is defined and is an array
  if (!Array.isArray(properties)) {
    return <p>No properties available</p>;
  }

  return (
    <div>
      {properties.map((property, index) => (
        <div key={index}>
          <h2>{property.title || 'No Title'}</h2>
          <p>{property.description || 'No Description'}</p>
          {/* Add more property details as needed */}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;

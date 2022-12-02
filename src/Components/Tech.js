import React from 'react';

const Tech = ({ image, name }) => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + image} alt="" className="svg-img " />
      <p>{name}</p>
    </div>
  );
};

export default Tech;

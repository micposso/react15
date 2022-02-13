import React, { useState, userEffect } from 'react';

function SingleColor({rgb, weight, index}) {
  const bcg = rgb.join(',');
  return (
    <div className="color-box" style={{backgroundColor:`rgb(${bcg})`}}>
      <h2>{' '}</h2>
    </div>
  )
}

export default SingleColor;
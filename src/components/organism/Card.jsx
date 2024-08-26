import React from 'react';
import {SecretMessage} from "../../../public/assets/index.js";

export const Card = ({ image, title }) => {
  console.log('🚀SecretMessage >> ', SecretMessage())
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={`/assets/${image}`} alt={title} className="w-full h-48 object-cover"/>
          <div className="px-4 py-4">
              <h5 className="text-lg font-bold">{title}</h5>
          </div>
      </div>
  );
};


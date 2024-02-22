// eslint-disable-next-line no-unused-vars
import React from "react";
import { CardContainer, CardBox } from "/src/components/Card/styles.js";


// eslint-disable-next-line react/prop-types
export function Card ({item}) {

  // eslint-disable-next-line react/prop-types
  const {images = {},title = '',  scoreMessage = ""} = item

  return (
    <CardContainer>
      {/* className="anime-item" */}
      <CardBox>
        {/* Mostrar la imagesn si está presente */}
        {images && images.jpg
        && (
        <img 
          src={images.jpg.image_url}
          // eslint-disable-next-line react/prop-types
          alt={item.title}
          className='img'
        />
      )}
        <p className='title'>{title}</p>

      </CardBox>
      <p className='message'>{scoreMessage}</p> 
    </CardContainer>
  )
}
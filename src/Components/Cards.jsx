import React from 'react';
import Cardsdata from './CardData.js'

const Cards = () => {
  
  return (
    <div>
      <div class='flex ml-8 md:items-center sticky min-h-0 items-center content-center justify-items-center'>
        <div class=" flex min-h-0 h-48 max-w-screen-lg items-center space-x-9">
          {
            Cardsdata.map((data,index) => (
              <div class="items-center w-26 h-22">
                <img class="h-22" src={data.img} alt={data.title} />
                <div class="px-4 py-4">
                  <div class="font-semibold text-m mb-2">{data.title}</div>
                </div>
              </div>                 
                 
                
                ))}

        </div>
      </div>


    </div>
  );
};

export default Cards;
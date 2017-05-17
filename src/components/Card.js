import React from 'react';

const Card = ({ showCard, updateCard, flipped, matched, icon, index }) => (
  <div
    onClick={ () => {updateCard(index, flipped), showCard() }}
    className='col-xs-3 text-center'
    style={{ height: '300px', border: '1px solid black'}}
    >
    
    <i className={`fa ${icon} fa-5x`} />

   {/*show icon if flipped or matched*/}
   {/*<i className={`fa ${icon} fa-5x`} />*/}

   {/*do not show icon if not flipped or matched*/}

   {/*do not allow user to click on card again if flipped or matched*/}
  </div>
);

export default Card;

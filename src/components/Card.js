import React, { Component } from 'react';

class Card extends Component {



  updateCard = (flipped) => {
      this.setState ({ flipped: !flipped })
    }

//({ showCard, updateCard, flipped, matched, icon, index }) =>
render(){
  let index = this.state
  let flipped = this.state
return(
  <div
    onClick={ () => {updateCard(index, flipped) }}
    className='col-xs-3 text-center'
    style={{ height: '300px', border: '1px solid black'}}
    >
   {/*show icon if flipped or matched*/}
   <i className={`fa ${icon} fa-5x`} />
   {/*do not show icon if not flipped or matched*/}
   {/*do not allow user to click on card again if flipped or matched*/}
  </div>
);
}
}

export default Card;

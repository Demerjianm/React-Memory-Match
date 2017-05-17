import React, { Component } from 'react';


class Card extends Component {
  state = { cards: this.props.cards}
  render(){
      let { updateCard, flipped, matched, icon, index } = this.props
      console.log(flipped)
    return(
      <div
        onClick={ () => {updateCard(index, flipped) }}
        className='col-xs-3 text-center'
        style={{ height: '300px', border: '1px solid black'}}
      >
      <i className={`fa ${icon} fa-5x`} />
       {/*need a onClick handler on the card div to call updateCard*/}
       {/*show icon if flipped or matched*/}
       {/*<i className={`fa ${icon} fa-5x`} />*/}
       {/*do not show icon if not flipped or matched*/}
       {/*do not allow user to click on card again if flipped or matched*/}
      </div>

    )
  }
}
export default Card;

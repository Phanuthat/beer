import React, { Component } from 'react';
import BeerItem from '../beer/item';
class calculate extends Component {
//  total() {
//     return this.props.items.reduce((sum, item) => {
//       return sum + item.attenuation_level;
//     }, 0);
//   }
  render(cal){
      return(
         cal = this.props.items.reduce((sum, item) => {
            return sum + item.attenuation_level;
          }, 0)
      )
  }
}



export default calculate;
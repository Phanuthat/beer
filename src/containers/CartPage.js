import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListCart from '../components/Cart/list_cart';

const mapStateToProps = state => {
  return {
    isShowDialog: state.isShowDialog
  };
};

class CartPage extends Component {
  getItems = () => {
    const jsonStr = localStorage.getItem('user-data');
    
    const email = jsonStr && JSON.parse(jsonStr).email;
    const jsonCartStr = localStorage.getItem(`beer-ja-list-cart-${email}`);
    if (jsonCartStr) {
      const items = jsonCartStr && JSON.parse(jsonCartStr);
      return items;
    }
  };

  calculate = () =>{

      const kuys = this.getItems()
      console.log("ssss",kuys[0].attenuation_level);
      let total = 0
      for(let i of kuys ){
            total+=i.attenuation_level
            
      }
      return total 






    // const jsonStr = localStorage.getItem('user-data');
    // const price = jsonStr && JSON.parse(jsonStr).attenuation_level;
    // const jsonCartStr = localStorage.getItem(`beer-ja-list-cart-${price}`);
    // // const jsonCartStr = localStorage.getItem(`beer-ja-list-cart-${price}`);
    // if (jsonCartStr){
    //  const Price = jsonCartStr && JSON.parse(jsonCartStr);
    //   // for(let i=0 ; sumPrice.length>i;i++ ){
    //   //   let total = 0
    //   //   return total +=sumPrice[i]
    //   // }
    //    return Price ;
    // }



  }

  // total() {
  //   return this.props.items.reduce((sum, item) => {
  //     return sum + item.attenuation_level;
  //   }, 0);
  // }

  // total = () => {
  //   const jsonStr = localStorage.getItem('user-data');
  //   const price = jsonStr && JSON.parse(jsonStr).attenuation_level;
  //   for (let i = 0; price.length > i; i++) {
  //     let sum = 0;
  //     return (sum += price[i]);
  //   }
  //   console.log(price);
  // };

  render() {
    console.log(this.props.isShowDialog);

    console.log("buy item" ,this.getItems());
    console.log("buy item" ,this.calculate());
    return (
      <div
        style={{
          padding: '16px',
          marginTop: 64,
          minHeight: '600px'
        }}
      >
      <div>total ={'TOtal' + this.calculate()}</div>
        {/* <ListCart items={this.getItems()} /> */}
        <ListCart items={this.getItems()}  />
        <div>
          {/* <Button
            type="primary"
            // loading={this.state.isLoading}
            // onClick={this.onClickLogout}
          >
            Logout
          </Button> */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartPage);

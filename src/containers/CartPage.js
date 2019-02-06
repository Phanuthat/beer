import React, { Component } from 'react';
import { Layout, Menu, Modal, Button,Icon,Row, Col } from 'antd';
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

  calculate = () => {
    const price = this.getItems();
    // console.log('price', price[0].attenuation_level);
    let total = 0;
    for (let i of price) {
      total += i.attenuation_level;
    }
    return total;
  };
  CheckoutCLick = () => {
    this.props.history.push('/checkout');
  };

  render() {
    console.log(this.props.isShowDialog);

    console.log('buy item', this.getItems());
    console.log('buy item', this.calculate());
    return (
      <div
        style={{
          padding: '16px',
          marginTop: 64,
          minHeight: '600px'
        }}
      >
        <ListCart items={this.getItems()} />
        
            
            <div >
              <p>{'Discount 0 $'}</p>
              <p>{'Total ' + this.calculate() + '$'}</p>  
              <Button type="danger" onClick={this.CheckoutCLick}>
                Check out
              </Button>
            </div>
            
           
         
         
          
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartPage);

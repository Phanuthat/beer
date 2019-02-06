import React, { Component } from 'react';
import { Layout, Menu, Modal, Button, message, Icon } from 'antd';
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
    const kuys = this.getItems();
    console.log('ssss', kuys[0].attenuation_level);
    let total = 0;
    for (let i of kuys) {
      total += i.attenuation_level;
    }
    return total;

   
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
        <div class="total">
          <p>{'Discount 0 $'}</p>
        </div>
        <div class="total">
          <p>{'Total ' + this.calculate() + '$'}</p>
        </div>
        <div class = "button-right">
          <Button type="danger" >Check out</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartPage);

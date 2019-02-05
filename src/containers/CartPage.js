import React, { Component } from 'react';
import { Button} from 'antd';
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
    console.log(this.price);
    console.log(this.jsonStr);
    console.log(this.jsonCartStr);
    return (
      <div
        style={{
          padding: '16px',
          marginTop: 64,
          minHeight: '600px'
        }}
      >
        <ListCart items={this.getItems()} />

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

import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListCart from '../components/Cart/list_cart'

const mapStateToProps = state => {
  return {
    isShowDialog: state.isShowDialog
  };
};

class CartPage extends Component {
  getItems = () => {
    const jsonStr = localStorage.getItem('user-data');
    const email = jsonStr && JSON.parse(jsonStr).email;
    const jsonFavStr = localStorage.getItem(`beer-ja-list-cart-${email}`);
    if (jsonFavStr) {
      const items = jsonFavStr && JSON.parse(jsonFavStr);
      return items;
    }
  };

  render() {
    console.log(this.props.isShowDialog);
    return (
      <div
        style={{
          padding: '16px',
          marginTop: 64,
          minHeight: '600px'
        }}
      >
        <ListCart items={this.getItems()} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartPage);

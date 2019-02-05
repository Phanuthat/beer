import React, { Component } from 'react';
import { List } from 'antd';
import BeerItem from '../beer/item';
import Cal from './calculate';
class ListCart extends Component {
  // total() {
  //   return this.props.items.reduce((sum, item) => {
  //     return sum + item.attenuation_level;
  //   }, 0);
  // }
  render() {
    // console.log(total);

    return (
      <div style={{ minHeight: '300px' }}>
      {/* <Cal cal={this.cal}/> */}
        <List
          itemLayout="horizontal"
          size="large"
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.props.items}
          renderItem={item => (
            <List.Item>
              <BeerItem item={item} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ListCart;

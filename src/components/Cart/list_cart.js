import React, { Component } from 'react';
import { List } from 'antd';
import BeerItem from '../beer/item';

class ListCart extends Component {
  render() {
    return (
      <div style={{ minHeight: '300px' }}>
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
  }render() {
    return (
      <div style={{ minHeight: '300px', textAlign: 'left' }}>
        <List
          style={{
            marginLeft: '200px',
            marginRight: '200px',
            marginTop: '16px'
          }}
          itemLayout="vertical"
          size="large"
          dataSource={this.props.items}
          renderItem={item => (
            <List.Item
              key={item.name}
              style={{ paddingTop: '20px' }}
              extra={
                <img
                  width="auto"
                  height="200px"
                  alt="logo"
                  src={item.image_url}
                />
              }
            >
              <List.Item.Meta
                style={{ display: 'flex' }}
                title={<a href={item.href}>{item.name}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ListCart;

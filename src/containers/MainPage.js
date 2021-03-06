import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Modal,
  Button,
  message,
  Icon,

} from 'antd';
// import axios from 'axios'
import RouteMenu from './RouteMenu';
import { connect } from 'react-redux';

const { Header, Content, Footer } = Layout;
const menus = ['home', 'favorite', 'cart', 'profile'];

const mapStateToProps = state => {
  return {
    isShowDialog: state.isShowDialog,
    itemBeer: state.itemBeer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDismissDialog: () =>
      dispatch({
        type: 'dismiss_dialog'
      }),
    onItemMovieClick: item =>
      dispatch({
        type: 'click_item',
        payload: item
      })
  };
};

class MainPage extends Component {
  state = {
    items: [],
    currentMenu: menus[0],
    email: '',
    favItems: [],
    cartItem: [],
   
  };
  // getInfo = () => {
  //   axios.get(`${this.state.items}`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data
  //       })
  //     })
  // }

  componentDidMount() {
    const jsonStr = localStorage.getItem('user-data');
    const email = jsonStr && JSON.parse(jsonStr).email;
    const { pathname } = this.props.location;
    var currentMenu = menus[0];
    if (pathname != '/') {
      currentMenu = pathname.replace('/', '');
      if (!menus.includes(currentMenu)) currentMenu = menus[0];
    }
    const jsonFavStr = localStorage.getItem(`beer-ja-list-fav-${email}`);
    if (jsonFavStr) {
      const items = jsonFavStr && JSON.parse(jsonFavStr);
      this.setState({ favItems: items });
    }
    this.setState({ currentMenu, email });
  }

  onMenuClick = e => {
    var path = '/';
    path = `/${e.key}`;
    this.props.history.replace(path);
    console.log(' path', path)
    this.setState({ currentMenu: path })
  };

  onClickFavoriteItem = () => {
    const items = this.state.favItems;
    const itemFav = this.props.itemBeer;
    const index = items.findIndex(item => {
      return item.name === itemFav.name;
    });
    if (index != -1) {
      items.splice(index, 1);
      localStorage.setItem(
        `beer-ja-list-fav-${this.state.email}`,
        JSON.stringify(items)
      );
      message.success('unfavorite this item successfully', 1, () => {
        this.setState({ favItems: items });
        this.onModalClickCancel();
      });
    } else {
      items.push(itemFav);
      localStorage.setItem(
        `beer-ja-list-fav-${this.state.email}`,
        JSON.stringify(items)
      );
      message.success('Saved your favorite this item', 1, () => {
        this.setState({ favItems: items });
        this.onModalClickCancel();
      });
    }
  };

  onClickCartItem = () => {
    const items = this.state.cartItem;
    const itemCart = this.props.itemBeer;
    const index = items.findIndex(item => {
      return item.name === itemCart.name;
    });
    if (index != -1) {
      items.splice(index, 1);
      localStorage.setItem(
        `beer-ja-list-cart-${this.state.email}`,
        JSON.stringify(items)
      );
      message.error('Canceled Cart ', 1, () => {
        this.setState({ cartItems: items });
        this.onModalClickCancel();
      });
    } else {
      items.push(itemCart);
      localStorage.setItem(
        `beer-ja-list-cart-${this.state.email}`,
        JSON.stringify(items)
      );
      message.success('Buy item !!', 1, () => {
        this.setState({ cartItems: items });
        this.onModalClickCancel();
      });
    }
  };

  // onClickBuyItem = () => {
  //   message.info('coming soon...');
  //   this.props.onDismissDialog();
  // };

  onModalClickCancel = () => {
    this.props.onDismissDialog();
  };

  checkItemCart = () => {
    const items = this.state.cartItem;
    const itemBeer = this.props.itemBeer;
    const result = items.find(item => {
      return item.name === itemBeer.name;
    });
    if (result) {
      return 'danger';
    } else {
      return '';
    }
  };

  checkItemFavorited = () => {
    const items = this.state.favItems;
    const itemBeer = this.props.itemBeer;
    const result = items.find(item => {
      return item.name === itemBeer.name;
    });
    if (result) {
      return 'primary';
    } else {
      return '';
    }
  };

  render() {
    const itemBeer = this.props.itemBeer;
    return (
      <div>
        <div style={{ height: '100vh' }}>
          {' '}
          <Layout className="layout" style={{ background: 'dark' }}>
            <Header
              style={{
                padding: '0px',
                position: 'fixed',
                zIndex: 1,
                width: '100%'
              }}
            >
              {/* <AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: 300 }}
                size="small"
                style={{ width: '20%' }}
                // dataSource={options}
                placeholder="input here"
                optionLabelProp="value"
              >
                <Input
                  suffix={
                    <Icon type="search" className="certain-category-icon" />
                  }
                />
              </AutoComplete> */}
              <Menu
                theme="#3c3c3c"
                mode="horizontal"
                SelectedKeys={[this.state.currentMenu]}
                style={{ lineHeight: '64px' }}
                onClick={e => {
                  this.onMenuClick(e);
                }}
              >
                <Menu.Item key={menus[0]} ><Icon type="home" />Home</Menu.Item>
                <Menu.Item key={menus[1]}><Icon type="heart" />Favorite</Menu.Item>
                <Menu.Item key={menus[2]}><Icon type="shopping-cart" />Cart</Menu.Item>
                <Menu.Item key={menus[3]}><Icon type="user" />Profile</Menu.Item>
              </Menu>
            </Header>
            <Content>
              <RouteMenu items={this.state.items} />
            </Content>
            <Footer style={{ textAlign: 'center', background: 'white' }}>
              BeerJa Application Workshop @ CAMT
            </Footer>
          </Layout>
        </div>

        {itemBeer != null ? (
          <div>
            <Modal
              width="40%"
              style={{ maxHeight: '70%' }}
              title={itemBeer.name}
              visible={this.props.isShowDialog}
              onCancel={this.onModalClickCancel}
              footer={[
                <Button
                  key="submit"
                  type={this.checkItemFavorited()}
                  icon="heart"
                  size="large"
                  shape="circle"
                  onClick={this.onClickFavoriteItem}
                />,
                <Button
                  key="submit"
                  type={this.checkItemCart()}
                  icon="shopping-cart"
                  size="large"
                  shape="circle"
                  onClick={this.onClickCartItem}
                />
              ]}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <img
                  src={itemBeer.image_url}
                  style={{ height: '200px', width: 'auto' }}
                />
              </div>
              <p>
                <b>Price:</b> {itemBeer.attenuation_level}
                <b>$</b>
              </p>
              <p>
                <b>Tagline:</b> {itemBeer.tagline}
              </p>
              <p>
                <b>First Brewed:</b> {itemBeer.first_brewed}
              </p>
              <p>
                <b>Description:</b> {itemBeer.description}
              </p>
              <p>
                <b>Brewers Tips:</b> {itemBeer.brewers_tips}
              </p>
              <p>
                <b>Contributed by:</b> {itemBeer.contributed_by}
              </p>
            </Modal>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './Home/Home'
import Tabbar from './Common/Tabbar'
import Order from './Order/Order'
import Menu from './Order/Menu/Menu'
import Navigationbar from './Common/Navigationbar'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import Checkout from './Checkout/Checkout'

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path='/main' component={Home} />
          <Route exact path='/main/order/:id' render={props => <Order {...props} handleBack={() => window.location.href = '#/main'} />} />
          <Route path='/main/order/:id/one' render={
            props =>
              <Menu
                {...props}
                handleBack={() => {
                  const id = window.location.hash.split('/')[3]
                  window.location.href = `#/main/order/${id}`
                }}
              />
            }
          />
          <Route path='/main/shoppingcart' render={props => <ShoppingCart {...props} handleBack={() => window.location.href = '#/main'} />} />
          <Route path='/main/checkout' component={Checkout} />
        </div>
      </HashRouter>
    )
  }
}

export default Main

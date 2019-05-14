import React, { Component } from 'react'
import './Navigationbar.css'

class Navigationbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { handleBack } = this.props
    return (
      <div class="navigationbar">
        <img class="back" src="src/left-arrow-chevron.svg" onClick={handleBack}/>
        <p class="title">點餐</p>
        <img class="cart" src="src/shoppingCart@3x.png" onClick={() => {
          window.location.href = '#/main/shoppingcart'
        }} />
        <div class="added">0</div>
      </div>
    )
  }
}

export default Navigationbar

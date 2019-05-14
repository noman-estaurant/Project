import React, { Component } from 'react'
import MainMeal from './MainMeal/MainMeal'
import Tabbar from '../../Common/Tabbar'
import Navigationbar from '../../Common/Navigationbar'
import './Menu.css'

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  render() {
    const { handleBack } = this.props
    const GetPage = () => {
      const ChangePage = () => {
        this.setState({
          page: 1
        })
      }
      switch(this.state.page) {
        case 0:
          return (
            <div id="big-menu">
              <div id="main-meal" onClick={ChangePage}>
                <div class="button">
                  <img src="src/unmannedRestaurant07@2x.png" />
                  <p>主餐</p>
                </div>
              </div>
              <div id="side-meal">
                <div class="button">
                  <img src="src/unmannedRestaurant08@2x.png" />
                  <p>副餐</p>
                </div>
              </div>
              <div id="drinks">
                <div class="button">
                  <img src="src/unmannedRestaurant09@2x.png" />
                  <p>飲料</p>
                </div>
              </div>
            </div>
          )
          break
        case 1:
          return (
            <MainMeal />
          )
          break
      }
    }
    return (
      <div>
        <Navigationbar handleBack={handleBack}/>
          {
            GetPage()
          }
        <Tabbar />
      </div>
    )
  }
}

export default Menu

import React, { Component } from 'react'
import Navigationbar from '../Common/Navigationbar'
import './ShoppingCart.css'

class ShoppingCart extends Component {
  /*componentDidMount() {
    const getMainDetail = (n, name, money) => {
      var s = "";
      s = s + '<div class="detail" >';
      s = s + '   <p class="close" onclick="removeThis($(this))">✖</p>';
      s = s + '   <p class="name">' + name + '</p>';
      s = s + '   <label class="check-container">不要洋蔥';
      s = s + '       <input type="checkbox">';
      s = s + '       <span class="checkmark"></span>';
      s = s + '   </label>';
      s = s + '   <label class="check-container">不要酸黃瓜';
      s = s + '       <input type="checkbox" >';
      s = s + '       <span class="checkmark"></span>';
      s = s + '   </label>';
      s = s + '   <p class="howmuch">' + "$ " + money + '</p>';
      s = s + '</div>';
      return s.repeat(n);
    }
    const getSideDetail = (n, name, money) => {
      var s = "";
      s = s + '<div class="detail">';
      s = s + '   <p class="close" onclick="ReallyDelete($(this))">✖</p>';
      s = s + '   <p class="name">' + name + '</p>';
      s = s + '   <label class="check-container">番茄醬';
      s = s + '       <input type="checkbox">';
      s = s + '       <span class="checkmark"></span>';
      s = s + '   </label>';
      s = s + '   <label class="check-container">芥末醬';
      s = s + '       <input type="checkbox" >';
      s = s + '       <span class="checkmark"></span>';
      s = s + '   </label>';
      s = s + '   <p class="howmuch">' + "$ " + money + '</p>';
      s = s + '</div>';
      return s.repeat(n);
    }
    const getDrinkDetail = (n, name, money) => {
      var s = "";
      s = s + '<div class="detail">';
      s = s + '   <p class="close" onclick="ReallyDelete($(this))">✖</p>';
      s = s + '   <p class="name">' + name + '</p>';
      s = s + '   <label class="check-container">去冰';
      s = s + '       <input type="checkbox">';
      s = s + '       <span class="checkmark"></span>';
      s = s + '   </label>';
      s = s + '   <label class="check-container">少冰';
      s = s + '       <input type="checkbox" >';
      s = s + '       <span class="checkmark"></span>';
      s = s + '   </label>';
      s = s + '   <p class="howmuch">' + "$ " + money + '</p>';
      s = s + '</div>';
      return s.repeat(n);
    }
    $("#empty").hide();
    $("#main-meal").append(getMainDetail(2, "#name", 80));
    $("#side-meal").append(getSideDetail(2, "#name", 20));
    $("#drinks").append(getDrinkDetail(2, "#name", 20));
  }*/

  render() {
    const { handleBack } = this.props
    const handleMain = () => {
      if (mclick == 0) { //click once
        $("#main-meal .detail").toggleClass('showing-detail', 'slow');
          mclick = 1;
      } else { //click twice
        $("#main-meal .detail").toggleClass('showing-detail', 'slow');
        mclick = 0;
      }
    }
    return (
      <div>
        <Navigationbar handleBack={handleBack}/>
        <div class="list">
          <div id="empty">
            <img src="src/unmannedRestaurant03@3x.png" />
            <div>
              <p>購物車內尚無餐點</p>
              <p>快點餐，讓購物車多點東西吧！</p>
            </div>
          </div>

          <div id="notempty">
            <div id="main-meal">
              <div class="button" onClick={handleMain}>
                <img src="src/unmannedRestaurant07@2x.png" />
                <p>我的主餐</p>
                <p class="howmany">x 2</p>
                <p class="howmuch">$ 160</p>
              </div>
            </div>
            <div id="side-meal">
              <div class="button">
                <img src="src/unmannedRestaurant08@2x.png" />
                <p>我的副餐</p>
                <p class="howmany">x 0</p>
                <p class="howmuch">$ 0</p>
              </div>
            </div>
            <div id="drinks">
              <div class="button">
                <img src="src/unmannedRestaurant09@2x.png" />
                <p>我的飲料</p>
                <p class="howmany">x 0</p>
                <p class="howmuch">$ 0</p>
              </div>
            </div>
          </div>
        </div>

        <div class="check">
            <div class="container">
                <div class="checkout" onClick={() => window.location.href = '#/main/checkout'}>
                    <p>結帳</p>
                </div>
                <div class="total">
                    <p>總金額</p>
                    <p class="money">$ 160</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ShoppingCart

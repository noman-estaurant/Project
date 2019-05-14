import React, { Component } from 'react'
import './MainMeal.css'

class MainMeal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      added: 0,
      show: []
    }
  }

  componentDidMount() {
    const addShow = add => {
      this.setState({
        show: [...this.state.show, add]
      })
    }
    const getMenu = (img, name, money) => {
      return (
        <div class="menu">
          <div class="button">
            <img src={img} />
            <div class="content">
              <p class="title">{name}</p>
              <p class="howmuch">{money}</p>
            </div>
          </div>
          <div class="add" onClick={a => {
            console.log('++')
            $(a).animate({
                backgroundColor: "rgb(255,123,159)",
                boxShadow: "0px 3px 6px rgba(111, 65, 65, 0.5)",
                color: "white",
            }, 150).delay(150).animate({
                backgroundColor: "white",
                boxShadow: "0px 3px 6px rgba(111, 65, 65, 0.5)",
                color: "rgb(255, 123, 159)",
            }, 150);
            const added = this.state.added + 1
            if (added === 1) {
                $(".navigationbar .added").text(added);
                $(".navigationbar .added").transition('zoom', 500);
            } else {
                $(".navigationbar .added").transition('zoom');
                $(".navigationbar .added").text(added);
                $(".navigationbar .added").transition('zoom', 500);
            }
            this.setState({
              added
            })
          }}>+</div>
        </div>
      );
    }
    $.ajax({
      async: true,
      crossDomain: true,
      url: "https://luffy.ee.ncku.edu.tw:17785/api/menu",
      method: "GET",
      dataType: "json",
      success: function(data) {
          console.log(data);
          var i;
          for (i = 0; i < data.result.length; i++) {
              console.log(data.result[i]);
              addShow(getMenu(data.result[i].photo, data.result[i].name, data.result[i].price))
          }
      },
      error: function(result) {
          console.log(result);
      }
    })
  }
  render() {
    const addCart = () => {
      
    }
    return (
      <div id="main-dish">
        { this.state.show.map(element => {
          return element
        }) }
      </div>
    )
  }
}

export default MainMeal

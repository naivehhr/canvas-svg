import React, { Component } from "react"

const menu = [
  "推荐",
  "视111频",
  "热点",
  "社会",
  "娱乐",
  "军事",
  "科技",
  "汽车",
  "体育",
  "财经",
  "国际",
  "时尚"
]
export default class nav extends Component {
  state = {
    current: "推荐"
  }

  handleClick = item => {
    return () => {
      this.setState({ current: item })
      const ele = document.querySelectorAll(`[data-channel="${item}"]`)[0]
      // ele.scrollIntoView(false);
      const element = document.getElementById('pp')
      // element.scrollLeft = 80
      
      const rectLeft = ele.getBoundingClientRect().left
      // const centerCoordinate = (document.body.clientWidth - ele.offsetWidth) / 2

      console.log('rectLeft', rectLeft)
      console.log('卷去的左边', element.scrollLeft)
      // const _scrollLeft = rectLeft > centerCoordinate? rectLeft - centerCoordinate: 0
      // console.log('_scrollLeft', _scrollLeft)
      // element.scrollLeft = _scrollLeft
      // console.log(ele.offsetWidth)
      // console.log(document.body.clientWidth)
      // 应该偏移到的位置

    }
  }

  render() {
    const menuView = menu.map((item, index) => {
      const style = {
        display: "inline-block",
        padding: 15,
        color: this.state.current === menu[index] ? "red" : "black"
      }
      return (
        <div data-channel={item} onClick={this.handleClick(item)} style={style}>
          {item}
        </div>
      )
    })
    return (
      <div
        id="pp"
        style={{
          overflow: "hidden",
          overflowX: "scroll",
          whiteSpace: "nowrap"
        }}
      >
        {menuView}
      </div>
    )
  }
}

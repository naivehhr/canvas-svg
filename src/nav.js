/*
 * @Author: aran.hu 
 * @Date: 2018-09-30 00:43:14 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-09-30 00:48:38
 */
import React, { Component } from "react";

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
];
export default class nav extends Component {
  state = {
    current: "推荐"
  };

  handleClick = item => {
    return () => {
      this.setState({ current: item });
      const targetEle = document.querySelectorAll(
        `[data-channel="${item}"]`
      )[0];
      const wrapElement = document.getElementById("wrap");
      const { scrollLeft, scrollWidth } = wrapElement;
      // ele距离屏幕左边距离
      const rectLeft = targetEle.getBoundingClientRect().left;

      // 中间点间距
      const centerCoordinate =
        (document.body.clientWidth - targetEle.offsetWidth) / 2;
      const diff = rectLeft - centerCoordinate;
      const diffValue = Math.abs(diff);
      if (diff < 0) {
        // 向右移动
        if (scrollLeft >= diffValue) {
          wrapElement.scrollLeft -= diffValue;
        } else {
          wrapElement.scrollLeft = 0;
        }
      } else if (diff > 0) {
        // 向左移动
        const scrollRight =
          scrollWidth - document.body.clientWidth - scrollLeft;
        if (scrollRight >= diffValue) {
          wrapElement.scrollLeft += diffValue;
        } else {
          wrapElement.scrollLeft = scrollWidth;
        }
      } else {
        // 相等不移动
      }
    };
  };

  render() {
    const menuView = menu.map((item, index) => {
      const style = {
        display: "inline-block",
        padding: 15,
        color: this.state.current === menu[index] ? "red" : "black"
      };
      return (
        <div data-channel={item} onClick={this.handleClick(item)} style={style}>
          {item}
        </div>
      );
    });
    return (
      <div
        id="wrap"
        style={{
          overflow: "hidden",
          overflowX: "scroll",
          whiteSpace: "nowrap"
        }}
      >
        {menuView}
      </div>
    );
  }
}

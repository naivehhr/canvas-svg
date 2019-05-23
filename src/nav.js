/*
 * @Author: aran.hu
 * @Date: 2018-09-30 00:43:14
 * @Last Modified by: aran.hu
 * @Last Modified time: 2019-05-24 01:04:12
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
      // ele距离屏幕左边距离
      const rectLeft = targetEle.getBoundingClientRect().left;
      // 中间点间距
      const centerCoordinate =
        (document.body.clientWidth - targetEle.offsetWidth) / 2;
      const diff = rectLeft - centerCoordinate;
      this.scrollByRaf(wrapElement, diff);
    };
  };

  scrollByRaf(dom, offset) {
    const frequency = 15
    const step = offset / frequency;
    let times = 1;
    const move = () => {
      dom.scrollLeft += step;
      if (times < frequency) {
        times++;
        window.requestAnimationFrame(move);
      }
    };
    window.requestAnimationFrame(move);
  }

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

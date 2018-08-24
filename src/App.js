import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./test";
import Text from "./Text";

class App extends Component {
  componentDidMount() {
    // const test = new Test('凹凸曼')
    // test.sayHellow()
    // Test.sayName()
    // console.log(Test.aa)
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(100, 75, 50, 0.5 * Math.PI, 0);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.font = "10px Arial";
    ctx.fillText("A", 30, 80);
    ctx.font = "20px Arial";
    ctx.fillText("B", 50, 30);
    const myText = new Text(ctx);
    myText.text = "C";
    myText.font = "20px Arial";
    myText.position = { x: 70, y: 10 };
    myText.draw();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <canvas
          id="myCanvas"
          width="300"
          height="150"
          style={{
            border: "1px solid #d3d3d3",
            borderRadius: 5
          }}
        >
          您的浏览器不支持 HTML5 canvas 标签。
        </canvas>
      </div>
    );
  }
}

export default App;

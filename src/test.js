import React, { Component } from "react";

class Test {
  constructor(name) {
    console.log('构造函数')
    this.myName = name;
  }
  sayHellow() {
    this.age = 123
    console.log("hellow", this.myName);
    console.log("age", this.age);
  }

  static sayName() {
    // console.log("this.name", this.myName);
    this.sayHellow2()
  }

  static sayHellow2() {
    console.log("hellow22222");
  }
}
Test.aa = 'aa'

export default Test;

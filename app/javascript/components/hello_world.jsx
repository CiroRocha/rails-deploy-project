import React, { Component } from "react";

// export default class HelloWorld extends Component {
//   render() {
//     return <h1>Hello World</h1>;
//   }
// }

const HelloWorld = ({ word }) => {
  return <h1>Hello {word}!</h1>;
};

export default HelloWorld;

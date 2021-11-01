import React, { Component } from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";

//export const NotFound = () => {
//  <div>
//    <h1 style={{ color: "#000", fontSize: 30 }}>404!</h1>
//    <ButtonBackToHome/>
//  </div>;
//};

export class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="title">404!</h1>
        <h2 className="subtitle">Page not found</h2>
        <br/>
        <ButtonBackToHome />
      </div>
    );
  }
}

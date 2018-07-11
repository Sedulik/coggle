import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

export default class TbMenuItem extends React.Component {
  render() {
    return (
      <Link to={this.props.link}>
        <a href={this.props.link} className="nav-item">
          {this.props.name}
        </a>
      </Link>
    );
  }
}

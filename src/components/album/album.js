import React from "react";
import { graphql } from "gatsby";

class FullCalendar extends React.Component {
  componentDidMount() {
    console.log("page rendered");
  }

  render() {
    return (
      <React.Fragment>
        <h1>all the photos</h1>
      </React.Fragment>
    );
  }
}

export default FullCalendar;

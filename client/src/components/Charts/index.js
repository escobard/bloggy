import React, { Component, Fragment } from "react";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

export default class Charts extends Component {
  renderCharts() {
    switch (chart) {
      case "pie":
        return <p>Pie</p>;
      case "polar":
        return;
      case "bar":
        return;
      case "donught":
        return;
      default:
        return <p>No variant!</p>;
    }
  }

  render() {
    let { title, subtitle, description, variant, data } = this.props;
    return (
      <Card>
        <CardTitle title={title} subtitle={subtitle} />
        <CardText>{description}</CardText>
        {this.renderChart(variant, data)}
      </Card>
    );
  }
}

Charts.defaultProps = {
  title: "test title",
  subtitle: "test sub",
  description: "test desc",
  variant: "pie"
};

Charts.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  variant: "pie"
};
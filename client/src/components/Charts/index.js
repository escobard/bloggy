import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Pie } from "react-chartjs-2";

import styles from "./styles.scss"

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default class Chart extends Component {
  renderCharts = (variant, data) => {
    switch (variant) {
      case "pie":
        return (
          <Fragment>
            <Pie data={data} />
          </Fragment>
        );
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
      <Card className={`chart ${variant}`}>
       { title !== '' ? <CardTitle title={title} subtitle={ subtitle ? subtitle : null} /> : null }
       { description !== '' ? <CardText>{description}</CardText> : null } 
        
        {this.renderCharts(variant, data)}
      </Card>
    );
  }
}

Chart.defaultProps = {
  title: "test title",
  subtitle: "test sub",
  description: "test desc",
  variant: "pie",
  data: {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  }
};

Chart.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.string,
  data: PropTypes.object
};
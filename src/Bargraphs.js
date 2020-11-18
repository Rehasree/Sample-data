import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Stack, Animation } from "@devexpress/dx-react-chart";

import { olimpicMedals as data } from "../src/Data/bargraphData";
const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row"
  }
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: "nowrap"
  }
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="amazon"
            valueField="gold"
            argumentField="country"
            color="#ffd700"
          />
          <BarSeries
            name="flipKart"
            valueField="silver"
            argumentField="country"
            color="#c0c0c0"
          />
          <BarSeries
            name="Mynthra"
            valueField="bronze"
            argumentField="country"
            color="#03254c"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
          <Title text="Bar graphs" />
          <Stack />
        </Chart>
      </Paper>
    );
  }
}

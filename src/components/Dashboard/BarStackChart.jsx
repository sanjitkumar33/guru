import React from 'react';
import Chart from 'react-apexcharts';
import Stack from 'rsuite/Stack';
import HStack from 'rsuite/HStack';
import VStack from 'rsuite/VStack';

// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Stack/styles/index.css';
import Panel from 'rsuite/Panel';
import PanelGroup from 'rsuite/PanelGroup';

// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Panel/styles/index.css';
import 'rsuite/PanelGroup/styles/index.css';


const defaultOptions = {
  chart: {
    fontFamily: 'inherit',
    parentHeightOffset: 0,
    toolbar: {
      show: false
    },
    animations: {
      enabled: false
    },
    stacked: true
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  grid: {
    padding: {
      top: -20,
      right: 0,
      left: -4,
      bottom: -4
    },
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    tooltip: {
      enabled: false
    },
    axisBorder: {
      show: false
    },
    type: 'datetime'
  },
  yaxis: {
    labels: {
      padding: 4
    }
  },
  colors: ['#206bc4', '#79a6dc', '#bfe399'],
  legend: {
    show: false
  }
};

const BarStackChart = ({ title, actions, data, type, labels, options }) => (
  <Panel
    className="card"
    header={
      <Stack justifyContent="space-between">
        {title}
        {actions}
      </Stack>
    }
  >
    <Chart
      series={data}
      type={type}
      height={284}
      options={{ ...defaultOptions, ...options, labels }}
    />
  </Panel>
);

export default BarStackChart;

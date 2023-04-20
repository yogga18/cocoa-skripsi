import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartBar {
  titleOfChart: string;
  dataOfChart: any;
  options: any;
}

const ChartBar = ({ titleOfChart, dataOfChart, options }: ChartBar) => {
  return (
    <Fragment>
      <h5 className='text-center'>{titleOfChart}</h5>
      <Bar data={dataOfChart} options={options} />
    </Fragment>
  );
};

export default ChartBar;

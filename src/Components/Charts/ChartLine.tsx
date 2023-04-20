import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ...registerables
);

interface ChartLine {
  dataOfChart: any;
  titleOfChart: string;
  options: any;
}

const ChartLine = ({ dataOfChart, titleOfChart, options }: ChartLine) => {
  return (
    <Fragment>
      <h5 className='text-center'>{titleOfChart}</h5>
      <Line data={dataOfChart} options={options} />
    </Fragment>
  );
};

export default ChartLine;

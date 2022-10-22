import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale, Filler } from 'chart.js';
import {Radar , Doughnut , Line ,Bar} from 'react-chartjs-2';
import {AppBar } from './AppBar';
import './App.css';

function App() {
  ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
    Filler,
    Tooltip,
    Legend
  );

  const dataRadar = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  const optionsRadar = {
    type: 'radar',
    data: dataRadar,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };
  const dataDoughnut = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const optionsDoughnut = {
    type: 'doughnut',
    data: dataDoughnut,
  };

const dataLine = {
  labels: ["一月","二月","三月","四月","五月","六月","七月"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const optionsLine = {
  type: 'line',
  data: dataLine,
};
const dataBar = {
  labels: ["一月","二月","三月","四月","五月","六月","七月"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
const optionsBar = {
  type: 'bar',
  data: dataBar,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


  return(
    <div className="App">
      <AppBar />
      <h1 className='title'>Lulu</h1>
      <div className='grid'>
      <div className='box'>
        <Radar options={optionsRadar} data={dataRadar} />
      </div>
      <div className='box'>
        <Doughnut options={optionsDoughnut} data={dataDoughnut} />
      </div>
      <div className='box'>
        <Line options={optionsLine} data={dataLine} />
      </div>
      <div className='box'>
        <Bar options={optionsBar} data={dataBar} />
      </div>
    </div>
    </div>
  );
}
export default App;
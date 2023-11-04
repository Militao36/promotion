
import { NavBar } from '../../components/NavBar'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './styles.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map((_, i) => i * Math.random() * 1000),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function PageHome() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="mt-2 alert alert-primary d-flex justify-content-between align-items-center" role="alert">
          <span>Cadastrar novo produto?</span> <button className='btn btn-sm btn-success'>+</button>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                Acessos a loja
              </div>
              <div className="card-body">
                <Line options={options} data={data} />
                <div className='mt-2' style={{ display: 'flex', gap: 10 }}>
                  <span className="badge text-bg-primary">Janeiro: 100</span>
                  <span className="badge text-bg-secondary">Fevereiro: 100</span>
                  <span className="badge text-bg-success">Success</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-2"></div>

          <div className="col-sm-4" style={{ borderLeft: '1px solid #e3e3e3' }}>
            <h6 className='bg-dark mt-2 text-white p-2 rounded text-center'>Listagem de produtos mais visitados</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Camisa preta</li>
              <li className="list-group-item">Camisa Polo</li>
              <li className="list-group-item">Calça Jeans</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

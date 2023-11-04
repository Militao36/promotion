import { NavBar } from '../../components/NavBar'

export function PageProduct() {
  return (
    <>
      <NavBar />

      <div className="container mt-4">
        <div className='bg-dark text-white p-2 rounded d-flex justify-content-between align-items-center'>
          <h4>Produtos</h4>
          <button className='btn btn-success btn-sm'>+</button>
        </div>
        <div className='row mt-3'>
          <div className='col-sm-10'>
            <label htmlFor="">Pesquisa</label>
            <input type="text" className='form-control form-control-sm' />
          </div>
          <div className='col-sm-2'>
            <button className='btn btn-dark btn-sm mt-4'>Pesquisar</button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
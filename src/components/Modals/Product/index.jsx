export function ModalProduct() {
  return (
    <div className="form-product mt-3 card p-3" style={{ width: 800, margin: '0 auto' }}>
      <div className=" mt-2 row">
        <div className=" col-sm-8">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="col-sm-4">
          <label className="form-label">Preço</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="col-sm-12">
          <label htmlFor="formFile" className="form-label">Imagem principal</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="col-sm-12 mt-2 mb-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>
          <img style={{ width: '100%' }} src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" />
          <img style={{ width: '100%' }} src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" />
          <img style={{ width: '100%' }} src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" />
          <img style={{ width: '100%' }} src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" />
          <img style={{ width: '100%' }} src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" />
          <img style={{ width: '100%' }} src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" />
        </div>
        <div className="">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <button className='btn btn-sm btn-success mt-2'>Salvar produto</button>
    </div>
  )
}
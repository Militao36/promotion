export function SignIn() {
  return (
    <div className="card shadow-sm" style={{ width: 500 }}>
      <div className="card-body">
        <form className="form-signin text-center">
          <img className="mb-4 text-center" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
            width="72" height="72" />
          <h4 className="h3 mb-3 font-weight-normal">Cadastra-se</h4>
          <div className="text-start m-0 p-0 row">
            <div className="col-sm-12">
              <label className="sr-only">E-mail</label>
              <input type="email" className="form-control form-control-sm" />
            </div>
            <div className="col-sm-12">
              <label className="sr-only">Senha</label>
              <input type="password" className="form-control form-control-sm" />
            </div>
          </div>

          <h5 className="mt-2">Informações de endereço</h5>
          <div className="m-0 p-0 row">
            <div className="text-start col-sm-8">
              <label className="sr-only">Endereço</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="text-start col-sm-4">
              <label className="sr-only">Número</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="text-start col-sm-6">
              <label className="sr-only">Complemento</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="text-start col-sm-6">
              <label className="sr-only">Bairro</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="text-start col-sm-8">
              <label className="sr-only">Cidade</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="text-start col-sm-4">
              <label className="sr-only">UF</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>

          <h5 className="mt-2">Informações de contato</h5>
          <div className="m-0 p-0 row">
            <div className="text-start col-sm-12">
              <label className="sr-only">Telefone</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <button className="mt-2 btn btn-sm btn-lg btn-primary btn-block w-100" type="submit">Acessar</button>
        </form>
      </div>
    </div>
  )
}
export function PageLogin() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fbfc', height: '100vh', width: '100vw' }}>
      <div className="card shadow-sm" style={{ width: 500 }}>
        <div className="card-body">
          <form className="form-signin text-center" action="/home">
            <img className="mb-4 text-center" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
              width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Acessar painel</h1>
            <div className="text-start m-0 p-0">
              <label htmlFor="inputEmail" className="sr-only">E-mail</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="E-mail" required="" autoFocus="" />
              <label htmlFor="inputPassword" className="sr-only">Senha</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required="" />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
            </div>
            <button className="btn btn-lg btn-primary btn-block w-100" type="submit">Acessar</button>
            <p className="mt-3 mb-3 text-muted">© 2017-2018</p>
          </form>
        </div>
      </div>
    </div>
  )
}
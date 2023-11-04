export function ResetPassword() {
  return (
    <div className="card shadow-sm" style={{ width: 500 }}>
      <div className="card-body">
        <form className="form-signin text-center">
          <img className="mb-4 text-center" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
            width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Recuperação de senha</h1>
          <div className="text-start m-0 p-0">
            <label htmlFor="inputEmail" className="sr-only">E-mail</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="E-mail" required="" autoFocus="" />
          </div>
          <button className="btn btn-sm btn-lg btn-primary btn-block w-100 mt-2" type="submit">Enviar e-mail</button>
        </form>
      </div>
    </div>
  )
}
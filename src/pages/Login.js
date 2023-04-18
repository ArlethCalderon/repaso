import React from 'react'

const Login = () => {
  return (
    <div className='container'>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
  
  </div>
  <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
</form>
            
    </div>
  )
}

export default Login
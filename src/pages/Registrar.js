import React from "react";
import { useState } from "react";

const Registrar = () => {
  const [data, setData] = useState({
      id: Date.now(),
      name: "",
      lastname: "",
      age: 0,
      curp: "",
      address: "",
      phone: 0,
      email: "",
      height: 0,
      weight: 0,
      category: ""
  })

    const Registro = async () => {
      console.log (data)
      await fetch('http://localhost:5000/persona', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    }
  
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        <div className="card col-lg-6">
          <h2 className="text-center">Registrar Paciente</h2>
          <div className="card-body">
            <form className="from-group" >
              <div>
                <label className="form-label" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  onChange={e => setData ({...data, name: e.target.value})}
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="lastname">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="Apellido"
                  onChange={e => setData ({...data, lastname: e.target.value})}
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="age">
                  Edad
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                  onChange={e => setData ({...data, age: e.target.value})}
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="weight">
                  Peso
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  id="weight"
                  onChange={e => setData ({...data, weight: e.target.value})}
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="address">
                  Direccion
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Direccion"
                  onChange={e => setData ({...data, address: e.target.value})}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  onChange={e => setData ({...data, email: e.target.value})}
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Telefono"
                  onChange={e => setData ({...data, phone: e.target.value})}
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="height">
                  Estatura
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="height"
                  id="height"
                  placeholder="Estatura"
                  onChange={e => setData ({...data, height: e.target.value})}
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="curp">
                  CURP
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="curp"
                  id="curp"
                  placeholder="CURP"
                  onChange={e => setData ({...data, curp: e.target.value})}
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="categoria">
                  Categoria
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Categoria"
                  onChange={e => setData ({...data, category: e.target.value})}
                  
                />
              </div>
              <div className="d-grip gap-2">
                <button
                  onClick={Registro}
                  className="btn btn-primary"
                >
                  Registrar
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;

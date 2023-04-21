import React, {useState, useEffect}from "react";


const ListaPaciente = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/persona')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <table className="table container mt-3">
      <thead>
      <tr>
        <th colSpan="9" className="text-center">Lista de paciente</th>
      </tr>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">CURP</th>
          <th scope="col">Edad</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono</th>
          <th scope="col">Correo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {data.map(data => {
          return (
            <tr key ={data.id}>
          <td>{data.id}</td>
          <td >{data.name}</td>
          <td >{data.lastname}</td>
          <td >{data.curp}</td>
          <td >{data.age}</td>
          <td >{data.address}</td>
          <td >{data.phone}</td>
          <td >{data.email}</td>
          <td>Editar Eliminar</td>
          </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListaPaciente;

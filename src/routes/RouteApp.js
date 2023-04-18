import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registrar from '../pages/Registrar'
import ListaPaciente from '../pages/ListaPaciente'



const RouteApp = () => {
  return (
      <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/registro" element={<Registrar/>}/>
      <Route path= "/pacientes" element={<ListaPaciente/>}/>
      </Routes>
  )
}

export default RouteApp


import React,{useEffect, useState} from 'react'
import Boton from '../components/Boton'


const Home = () => {
  const [click, setClick] = useState(0)
  const suma = (e) =>{
    e.preventDefault()

    setClick(click + 1)
  }
  
  const restar = (e) => {
    e.preventDefault()
    if (click !== 0){
        setClick(click - 1)
    }

  }
  const reiniciar = (e) => {
    e.preventDefault()
    setClick(0)
  }

  
  return (
   <div>Hola Mundo
    
    <Boton click = {click} setClick = {setClick} nombre="suma 1" metodo = {suma}/>
    <Boton click = {click} setClick = {setClick} nombre ="restar 1" metodo = {restar}/> 
    <Boton click = {click} setClick = {setClick} nombre ="Limpiar" metodo = {reiniciar}/>
   </div>
  )
}

export default Home
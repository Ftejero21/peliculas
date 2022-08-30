import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
const Lista = () => {
    
    
    const [lista , setLista] = useState([])
    
    let img = "https://image.tmdb.org/t/p/w500"
    
    
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('Lista2'));
        setLista(peliculas)
        return peliculas
        console.log(lista);
       let ultima_pelicula = lista.pop();
    
    }

    const borrar = (id) =>{
        let pelis_guardadas = conseguirPeliculas();
        
        let nuevoListado = pelis_guardadas.filter(peli => peli.id !== parseInt(id));
        setLista(nuevoListado)

        localStorage.setItem('Lista2',JSON.stringify(nuevoListado))

    }

    

    

    useEffect(() =>{
        conseguirPeliculas();
    },[])

    


  return (
    <>
    <header>
                <div className="titulo">
                    <div className='logo'>
                        <h1>Pelis<span>Free</span></h1>
                    </div>
                    <div className="enlaces">
                        <NavLink to='/inicio'><button>Inicio</button></NavLink>

                        <NavLink to='/Lista'><button>Mi Lista</button></NavLink>
                    </div>
                </div>
                <div className="buscador">
                    <input type="search" name='buscador' placeholder='Busca tu pelicula' />
                </div>
    </header>
    
    <div className="conteiner_lista">
        
        {
            lista.map(peli =>{
                return(
                    <div className="caja-lista" key={peli.id}>
                        <div className='imagen-lista'>
                            <img src={img + peli.poster_path} alt="" />
                        </div>
                        <div className="boton-quitar">
                            <button onClick={() => borrar(peli.id)}>Quitar</button>
                        </div>
                       
                    </div>
                    
                )
            })
        }
    </div>
    
    </>
        
    
        

    
  )
}

export default Lista
import React from 'react'
import { useState } from 'react'
import InfoPelicula from './InfoPelicula'
import { GuardarEnStorage } from './Helpers/GuardarEnStorage'
import { useEffect } from 'react'
const Pelicula = ({ info,peliinfo}) => {
  let img = "https://image.tmdb.org/t/p/w500"
  
  

  


  return (
    <>

      {
       !info ? <h1>Cargando</h1> : info.map((informacion) => {
          return (
            <>
              <div className="caja" id='caja' key={informacion.id}>

                <img src={informacion.poster_path == null ? 'https://static1.abc.es/media/play/2019/11/21/caida-netflix-k92C--510x349@abc.JPG': img + informacion.poster_path} alt="Imagen Pelicula"/>
                <div className='titulo-pelicula'>
                  <button onClick={() =>{
                    alert("Pelicula añadida")
                     GuardarEnStorage('Lista2',informacion)
                    }
                    }>Añadir a favoritos</button>
                  <button onClick={() =>{
                    peliinfo(informacion)
                    document.getElementById('infopelicula').style.display='block'
                  }}>Ver mas</button>
                </div>
                <div className='año-pelicula'>
                  <h6>{!informacion.release_date ? "No hay fecha" : informacion.release_date}</h6>
                </div>


              </div>
              
              

            </>
          )
        })
      }


    </>



  )
}

export default Pelicula
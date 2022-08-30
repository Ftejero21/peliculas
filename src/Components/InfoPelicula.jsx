import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Youtube from 'react-youtube'
import { GuardarEnStorage } from './Helpers/GuardarEnStorage'
const InfoPelicula = ({ data }) => {
  console.log(data)
  let url = 'https://image.tmdb.org/t/p/w500'
  return (
    <>
      {
        (!data ? "no hay pelicula" :

          <div className="container-info" id='container-info' >
            <div className="imagen-principal" id='imagen-fallida'>

              <img src={data.backdrop_path == null ? 'https://static1.abc.es/media/play/2019/11/21/caida-netflix-k92C--510x349@abc.JPG' : url + data.backdrop_path} alt="Ha ocurrido un problema" />
            </div>
            <div className="content">
              <div className='boton-cerrar'>
                <button onClick={() =>
                  document.getElementById('infopelicula').style.display = 'none'
                }>Close</button>
              </div>
              <div className="container-principal">
                <div className="img-principal">
                  <img src={data.poster_path == null ? 'https://static1.abc.es/media/play/2019/11/21/caida-netflix-k92C--510x349@abc.JPG': url + data.poster_path } alt="" />
                </div>
                <div className='contenido'>
                  <h1>{"Titulo:" + data.title}</h1>
                  <p>{!data.overview ? 'No se encuentra el resumen' : 'Resumen: ' + data.overview}</p>
                  <div className="puntuacion">
                    <div>
                      <h2>{'Puntuacion: ' + data.vote_average + '/10'}</h2>
                    </div>
                    <div>
                      <h3>{'Fecha de lanzamiento: ' + data.release_date}</h3>
                    </div>

                  </div>
                  <div className='añadir'>
                      <button onClick={() =>{
                        GuardarEnStorage('Lista2',data)
                        alert("Pelicula Añadida")
                      }}>Añadir a Favoritos</button>
                  </div>
                  
                </div>

              </div>

            </div>






          </div>

        )
      }


    </>

  )
}

export default InfoPelicula
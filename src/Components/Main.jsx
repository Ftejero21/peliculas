import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import InfoPelicula from './InfoPelicula';
import Pelicula from './Pelicula'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
let API_key = "&api_key=0b76fd8ce97b175b609d325162e68032";
let base_url = "https://api.themoviedb.org/3";
let let_url = base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
const Main = () => {
    
    const [data, setdata] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [titulo, setTitulo] = useState('Peliculas')
    const [info, setinfo] = useState()
    const [url, seturl] = useState(let_url)
    const [search, setSearch] = useState();
    const [peliculas , setPeliculas] = useState()
    const [total_page , setTotalPages] = useState()
    
    const searchMovie = (e) =>{
        if(e.key =="Enter"){
            setPagina(1)
            let_url=base_url+"/search/movie?api_key=0b76fd8ce97b175b609d325162e68032&query="+search
            seturl(let_url)
            setSearch(" ")
            
        }
    }

    const getPeliculas = () =>{
        let_url = base_url+'/discover/movie?sort_by=popularity.desc'+API_key;
        seturl(let_url)
        setTitulo("Peliculas")
        setPagina(1)
        data.sort((a,b)  => a.vote_average < b.vote_average ? 1 : -1)
        return data
        
    }

    

    const getKids = () =>{
        let_url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key
        seturl(let_url);
        setTitulo("Peliculas para niños")
        setPagina(1)
    }
    const getDrama = () =>{
        let_url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key
        seturl(let_url);
        setTitulo("Peliculas de Drama")
        setPagina(1)
    }

    const getTeatro = () =>{
        let_url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key
        seturl(let_url);
        setTitulo("Peliculas Teatrales")
        setPagina(1)
    }

    const getComedia = () =>{
        let_url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key
        seturl(let_url);
        setTitulo("Peliculas de Comedia")
        setPagina(1)
    }
    
    const conseguirData = () => {
        fetch(url+"&page="+pagina)
            .then(Response => Response.json())
            .then(respuesta_final => {
                console.log(respuesta_final)
                console.log("La pagina donde nos encontramos: " + respuesta_final.page)
                setdata(respuesta_final.results)
                setPagina(respuesta_final.page)
                setPeliculas(respuesta_final.total_results)
                console.log("total de peliculas "+respuesta_final.total_results)
                setTotalPages(respuesta_final.total_pages)
            })
    }

    const adelante = () => {
        setPagina(pagina + 1)
        
    }

    const atras = () => {
        if (pagina == 1) {
            setPagina(pagina)
        } else {
            setPagina(pagina - 1)
        }

    }

    const mostrar = e => {
        let buscador = e.target.buscador;
        console.log(buscador.value)
    }

    

    







    useEffect(() => {
        
        conseguirData();
        
    },[pagina , url])

    return (
        <>

            <header>
                <div className="titulo">
                    <div className='logo'>
                        <h1>Peli<span>Info</span></h1>
                    </div>
                    <div className="enlaces">
                        <NavLink to='/inicio'><button>Inicio</button></NavLink>

                        <NavLink to='/Lista'><button>Mi Lista</button></NavLink>
                        
                        <button onClick={getPeliculas}>Lo Mas Visto</button>
                        
                        
                        
                       
                    </div>
                </div>
                <div className="buscador">
                    <input type="search"  placeholder='Busca tu pelicula' onChange={(e) => {setSearch(e.target.value)}} value={search} onKeyPress = {searchMovie}/>
                    
                </div>
            </header>



            <main>
                <div className="filtro">
                    <div className='filtro-logo'>
                        <h1>Filtro</h1>
                    </div>
                    <div className='filtro-botones'>
                       
                            <button onClick={getKids}>Kids</button>
                            <button onClick={getTeatro}>Teatro</button>
                            <button onClick={getDrama}>Drama</button>
                            <button onClick={getComedia}>Comedia</button>
                            
                        
                    </div>
                    
                </div>
               <div className='listado-de-peliculas'>
                 <div className="titulo2">
                     <h1>{titulo} Mas Vistas</h1>
                
                 </div>
                 <div className='pagina'>
                     <h4>Total Peliculas: {peliculas}</h4>
                 </div>
                
                 <div className='conteiner-caja'>
                     <Pelicula info={data} peliinfo={peli => setinfo(peli)} />
                
                 </div>
                 <div className='botones'>
                
                     <button onClick={atras}>Atras</button>
                        <h2>{pagina}</h2>
                     <button onClick={adelante}>Adelante</button>
                 </div>
                 <div className="infopelicula" id='infopelicula'>
                     <InfoPelicula data={info} />
                 </div>
               </div>
               
            </main>
        </>


    )
}

export default Main
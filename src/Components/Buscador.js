import React, { useState } from 'react';
import NavBar from './NavBar';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { buscarCorrespondenciaPorFolio } from '../helpers/buscarApi';
import { Link } from "react-router-dom";



export const Buscador = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let { q = '',  } = queryString.parse(location.search);
    


    const [datos, setDatos] = useState([]);
    const [ campoId, setCampoId] = useState('');
    
    //const { campoId } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ campoId }&buscar=buscar`)
        setDatos(null);
        //console.log("q vale : ", q);

        buscarCorrespondenciaPorFolio(campoId)
        .then(correspondencia  => {
            //console.log("correspondencia => ",correspondencia);                
            setDatos(correspondencia);
        });

    }
    let correspondencia='';
    if (datos)
        correspondencia=datos.folioCorrespondencia;
    
    console.log(correspondencia);
  return (
    <>
        <NavBar/>
        <hr />
        <h1 style={{ 'textAlign' : 'left' }}>Buscador</h1>
        <hr />

        <div className="row">
            <div className="col-md-6" style={{ 'border' : '1px solid #EAEAEA', 'padding' : '34px', 'borderRadius' : '25px'}}>

                <form onSubmit={ handleSearch }>
                    <input 
                        type="text"
                        placeholder="Buscar por Id de Correspondencia"
                        className="form-control"
                        name="campoId"
                        autoComplete="on"
                        value={ campoId }
                        
                        //onChange={ handleInputChange }
                        onChange={e => setCampoId(e.target.value)}
                    />


                    <button 
                        className="btn btn-outline-primary mt-1"
                        type="submit">
                        Buscar...
                    </button>

                </form>
              

            </div>


            <div className="col-md-6" id="Resultados">
               Resultado de la búsqueda

               {
                    (correspondencia)
                    ?  correspondencia.map( correspondenciaMap =>(
                        
                        
                        <h5 key={correspondenciaMap.FolioRemitente}>
                            <Link className="link-primary" to={`/correspondencia/detalleCorrespondencia?folioRemitente=${correspondenciaMap.FolioRemitente}&seleccionar=1`}
                                style={{"fontSize": "16px"}}
                                >
                                {correspondenciaMap.FolioRemitente}                                
                            </Link> =&gt;
                            {correspondenciaMap.IdCorrespondencia}.- { correspondenciaMap.Asunto} </h5>                             
                        
                        
                    ))
                    : `sin datos`
               }

               

            </div>
        </div>
    </>
  )
}

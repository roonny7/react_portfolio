import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { buscarFolioCorrespondencia } from '../helpers/buscarApi';

const estadoInicial = {
    FolioRemitente: 'cargando...',
    Referencia : 'cargando...',
    Asunto : 'cargando...',
    NumeroOficio : 'cargando...',
    TipoDocumento : 'cargando...',
    Fecha : '0000-00-00',
    Dependencia : 'cargando...',
    Destinatario : 'cargando...',
    Anexos : '...',
    FechaLimite:'...',
    Titular : '...',
    Cargo : '...'

}

export const CorrespondenciaDetalle = () => {

    const location = useLocation();
    
    let { folioRemitente = '',  } = queryString.parse(location.search);
    //console.log(queryString.parse(location.search));
    
    let [ correspondencia, setCorrespondencia] = useState(estadoInicial);
    let datosCorrespondencia='';    
    let datosAdjuntos='';
    let correspondenciaCompleta=[];
    correspondenciaCompleta[0]={};

    useEffect(() => {
        buscarFolioCorrespondencia(folioRemitente)
            .then(correspondencia  => {
                //console.log("correspondencia => ",correspondencia);                
                setCorrespondencia(correspondencia);
            });        
    }, [folioRemitente])
    
    //datosCorrespondencia=correspondencia.folioCorrespondencia;
    
    datosCorrespondencia = {...correspondencia};
    //console.log(datosCorrespondencia);
    if (datosCorrespondencia)
    {   
        datosAdjuntos=datosCorrespondencia.archivosAdjuntos;
        correspondenciaCompleta=datosCorrespondencia.folioCorrespondencia;

        (correspondenciaCompleta) 
        ? correspondencia = {...correspondenciaCompleta[0]}
        : correspondencia = {};
    }

    
    
    
  return (
    <>
        <NavBar/>
        <hr />
        <h1 style={{ 'textAlign' : 'left' }}>Detalle de la correspondencia</h1>
        <hr />

        <div className="row">
            <div className="col-md-12" style={{ 'border' : '1px solid #EAEAEA', 'padding' : '34px', 'borderRadius' : '25px'}}>
                <div className="row">
                    <div className="col-md-6 derecha">
                        <div className="row">
                            <div className="col-md-6 derecha">Folio </div>
                            <div className="col-md-6 izquierda">{ correspondencia.FolioRemitente} </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-md-6 derecha">Fecha </div>
                            <div className="col-md-6 izquierda">{ correspondencia.Fecha } - { correspondencia.FechaLimite } </div>
                        </div>                    
                        
                        <div className="row">
                            <div className="col-md-6 derecha">Destinatario </div>
                            <div className="col-md-6 izquierda">{correspondencia.Destinatario } </div>                            
                        </div>                                            

                        <div className="row">
                            <div className="col-md-6 derecha">Asunto </div>
                            <div className="col-md-6" style={{"textAlign": "justify"}}>{ correspondencia.Asunto} </div> 
                        </div>                                                                    
                    </div>
                    <div className="col-md-6 derecha">
                        <div className="row">
                            <div className="col-md-6 derecha">Titular </div>
                            <div className="col-md-6 izquierda">{ correspondencia.Titular} </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-md-6 derecha">Cargo </div>
                            <div className="col-md-6 izquierda">{ correspondencia.Cargo} </div>                            
                        </div>                

                        <div className="row">
                            <div className="col-md-6 derecha">Anexos </div>
                            <div className="col-md-6 izquierda">{ correspondencia.Anexos} </div>                            
                        </div>                                                                    
                    </div>                    
                </div>


                
                <div className="row">
                {
                (datosAdjuntos)
                    ? datosAdjuntos.forEach(element => {  
                           console.log(element);
                        })
                    : ''
                }
                </div>
                



                    <button 
                        className="btn btn-outline-primary mt-1"
                        type="submit">
                        Buscar...
                    </button>


            </div>


            <div className="col-md-6" id="Resultados">
               Resultado de la búsqueda

               {/*
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
                    : `sin datos`*/
               }

               

            </div>
        </div>
    </>
  )
}

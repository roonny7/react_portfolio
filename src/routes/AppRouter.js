import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Buscador } from '../Components/Buscador';
import ScreenPrincipal from '../Components/ScreenPrincipal'
import { CorrespondenciaDetalle } from '../Components/CorrespondenciaDetalle';

export const AppRouter = () => {
  return (
    <>
        <div className="container2" style={{"marginLeft" : "25px"}}>
            <Routes>
                <Route path="/correspondencia" element={<Buscador />} />
                <Route path="/correspondenciadetalle" element={<CorrespondenciaDetalle />} />

                <Route path="/" element={<ScreenPrincipal />} />
            </Routes>
        </div>
    </>
  )
}

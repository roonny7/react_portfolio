import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const miEstilo= {
        color : '000000'
    }

    const navigate = useNavigate();
    
    const handlePrincipal = () => {
        navigate('/')
    }

  return (
    <>
    
    <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm cosaUl" id="pillNav2" role="tablist" >
        <li className="nav-item" role="presentation">
            <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true" style={ miEstilo}>Buscar correspondencia por Id</button>
        </li>

        <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Buscar por folio</button>
        </li>

        <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" onClick={ handlePrincipal}>Contacto</button>
        </li>
</ul>
    </>
  );
}

export default NavBar;

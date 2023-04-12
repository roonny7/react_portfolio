import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    // Hare referencia a que el componente esta montado o no
    const isMounted = useRef(true);
    //Controla las respuestas del fetch por medio de este useState
    const [state, setState] = useState({data: null, error:null, loading:true});

    //Se ejectuta para detectar si el componente esta montado  o no y cambia el valor del ref segun sea el caso
    useEffect(() => {
    
      return () => {
        isMounted.current = false;
      }
    }, [])
    
    // Se actualiza cada vez que la url cambia
    useEffect(() => {
        // Para mostrar el loading entre saltos
        setState({
            data: null,
            error: null,
            loading:true
        })

        fetch(url)
            .then( resp => resp.json()
            .then(data => {
                // Si el componente esta montado llamamos el useState para traer los datos en el DATA
                if ( isMounted.current ) {
                    
                    setState({
                        data,
                        error: null,
                        loading:false
                    });

                }else{
                    console.log("No se ejecuto el proceso");
                }
            })
        )
    }, [url])
    
    return state;
}
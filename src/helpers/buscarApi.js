export const buscarCorrespondenciaPorFolio = async( nombre ) => {

    const url = `http://10.9.15.20:4000/api/reportes/buscar?folio=${ encodeURI( nombre ) }`;
    const resp = await fetch( url );
    const  data  = await resp.json();
    //console.log("buscarempleados => tiene valor de : ", data);

    /*const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })*/

    return data;


}

export const buscarFolioCorrespondencia = async( folio ) => {

    const url = `http://10.9.15.20:4000/api/reportes/buscarfolio/${ encodeURI( folio ) }`;
    console.log(url);
    const resp = await fetch( url );
    const  data  = await resp.json();
    //console.log("buscarempleados => tiene valor de : ", data);

    /*const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })*/

    return data;


}

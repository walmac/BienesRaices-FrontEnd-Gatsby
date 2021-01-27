import React from 'react'
import Iconos from './iconos';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import {Link} from 'gatsby';
import urlSlug from 'url-slug';

const Boton = styled(Link)`
    background-color: #75ab00;
    color: #fff;
    display: block;
    font-weight: 700;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%auto;
    &:hover{
        cursor: pointer;
    }
    
`;


const Card = styled.div`
    border: 1px solid #e1e1e1;
    img {
        max-width: 100%
    }
`;

const Contenido = styled.div`
    padding: 2rem;

    h3 {
        font-family: 'Lato', sans-serif;
        font-size: 2.4rem;
        margin: 0 0 2rem 0;
    }
    .precio{
        color: #75ab00;
        font-size: 2rem;
    }
`;


const PropiedadPreview = ({propiedad}) => {
    const { nombre, imagen, wc, estacionamiento, habitaciones, precio  } = propiedad;
    return ( 

       <Card>
           <Image 
                fluid={imagen.sharp.fluid}
           />
           <Contenido>
               <h3>{nombre}</h3>
               <p className="precio">$ {precio}</p>
               <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}

               />     

            </Contenido>
            <Boton
                to={urlSlug(nombre)}
            
            >Visitar propiedad</Boton>
       </Card>
        
     );
}
 
export default PropiedadPreview;
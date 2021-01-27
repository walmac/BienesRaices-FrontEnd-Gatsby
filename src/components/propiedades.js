import React from 'react'
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Iconos from './iconos';
import Layout from './layout';
import { graphql } from 'gatsby';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width:95%;

    @media ( min-width: 768px){
        display:grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const SideBar = styled.aside `
    .precio{
        font-size: 2rem;
        color: #75ab00;
    }
    .agente{
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75ab00;
        padding: 3rem;
        color: #FFF;

        p{
            margin: 0;
        }


    }
`;

export const query = graphql`
    query($id: String!){
        allStrapiPropiedades(filter: {id:{eq: $id}}) {
        edges {
            node {
                    nombre
                    estacionamiento
                    wc
                    precio
                    descripcion
                    habitaciones
                    agentes{
                        nombre
                        telefono
                        email
                    }
                    imagen{
                        sharp: childImageSharp {
                            fluid (maxWidth: 1200){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
            }
        }
        }
        
    }
`;

const Propiedades = ({data: {allStrapiPropiedades:{edges}}}) => {


    //const {nombre, estacionamiento, wc, precio, descripcion, agentes, imagen} = data.allStrapiPropiedades.edges[0].node;
    const {nombre, estacionamiento, wc, precio, descripcion, agentes, habitaciones, imagen} = edges[0].node;
    
    console.log(nombre);
    return ( 
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>

                    <Image 
                        fluid={imagen.sharp.fluid}
                    />
                    <p>{descripcion}</p>
                </main>
                <SideBar>
                    <p className="precio">$ {precio}</p>
                    <Iconos
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />  
                    <div className="agente">
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>{agentes.telefono}</p>
                        <p>{agentes.email}</p>
                    </div>

                </SideBar>
                
            </Contenido>
            
        </Layout> 
     );
}
 
export default Propiedades;
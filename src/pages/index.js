import React from 'react'
import Layout from '../components/layout';
import UseInicio from '../hooks/useInicio';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';
import { css} from '@emotion/react';
import styled from '@emotion/styled';
import BackGroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';

const ImagenBackground = styled(BackGroundImage)`
	height: 600px
`;

const Index = () => {
	const inicio= UseInicio();
	const { nombre, contenido, imagen } = inicio[0];
    return ( 
        <Layout>
			<ImagenBackground
				tag="section"

				fluid={imagen.sharp.fluid}
				
				fadeIn="soft"
			>
				<div className={heroCSS.imagenbg}>
					<h1 className={heroCSS.titulo}>
						Venta de Casas y Departamentos exlusivos
					</h1>
				</div>
			
			</ImagenBackground>

			<main>
				<div
					css={css`
						max-width: 800px;
						margin: 0 auto;
					`}
				>
					<h1>{nombre}</h1>
					<p
						css={css`
							text-align: center;
						`}
					>{contenido}</p>

				</div>
			</main>
			<Encuentra />
			<ListadoPropiedades />
        	
		</Layout>
     );
}
 
export default Index;
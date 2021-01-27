const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
    query{
        allStrapiPaginas{
          nodes{
            nombre
            id
          }
        }
        allStrapiPropiedades{
          nodes{
            nombre
            id
          }
        }
      }

    `);
    // console.log(JSON.stringify(resultado.data.allStrapiPropiedades));
    //si no hay resultados
    if(resultado.errors){
        reporter.panic('No Hubo resultados', resultado.errors);
    }

    //si hay resultados generar los archivos staticos
    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;

    //crea los templates para paginas
    paginas.forEach(pagina => {
      actions.createPage({
          path:urlSlug(pagina.nombre),
          component: require.resolve('./src/components/paginas.js'),
          context:{
            id: pagina.id
          }
      });
      
  });
    

    //crear los templates de propiedades
    propiedades.forEach(propiedad => {
        actions.createPage({
            path:urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedades.js'),
            context:{
              id: propiedad.id
            }
        });
        
    });


}
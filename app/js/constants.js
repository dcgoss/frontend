const apiEnv = {
          local:      '',
          dev:        'http://localhost\:8080',
          production: 'https://api.cognoma.org'
        };


const AppSettings = {

  app:{
    title: 'Cognoma',
    version: '0.0.1'
  },

  api:{
    baseUrl:    apiEnv.dev,
    diseases:   '/diseases',
    samples:    '/samples',
    geneSearch: {
      base: 'https://mygene.info/v3/query?q=',
      params:{
        suggest_from: 'symbol^2,alias', // eslint-disable-line
        species:      'human',
        entrezonly:   'true',
        size:          100
      } 
    }
  }

};



export default AppSettings;

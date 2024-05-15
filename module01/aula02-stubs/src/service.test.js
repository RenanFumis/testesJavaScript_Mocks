const Service = require('./service');
const assert = require('assert');
const BASE_URL_1 = "https://swapi.dev/api/planets/1/";
const BASE_URL_2 = "https://swapi.dev/api/planets/2/";
//para chamar a biblioteca de sinon e criar um ambiente isolado
const { createSandbox } = require('sinon');
const sinon = createSandbox();

//Service
;(async () => {
// {

//     //requisição feita externamente no caso internet
//   const service = new Service();
//   const dados = await service.makeRequest(BASE_URL_2)

//   console.log('dados:', dados);
// }

const service = new Service();

{

}

})();
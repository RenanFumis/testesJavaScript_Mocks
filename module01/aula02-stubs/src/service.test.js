const Service = require("./service");
const assert = require("assert");
const BASE_URL_1 = "https://swapi.dev/api/planets/1/";
const BASE_URL_2 = "https://swapi.dev/api/planets/2/";
//para chamar a biblioteca de sinon e criar um ambiente isolado
const { createSandbox } = require("sinon");
const sinon = createSandbox();

const mocks = {
  tatooine: require("./../mocks/tatooine.json"),
  alderaan: require("./../mocks/alderaan.json"),
};

//Service
(async () => {
  // {

  //     //requisição feita externamente no caso internet
  //   const service = new Service();
  //   const dados = await service.makeRequest(BASE_URL_2)

  //   console.log('dados:', dados);
  // }

  const service = new Service();
  const stub = sinon.stub(service, service.makeRequest.name);
  {
    stub.withArgs(BASE_URL_1).resolves(mocks.tatooine);

    stub.withArgs(BASE_URL_2).resolves(mocks.alderaan);
  }

  {
    const expected = {
      name: "Tatooine",
      surfaceWter: "1",
      terrain: "desert",
    };

    const result = await service.getPlanets(BASE_URL_1);
    assert.deepStrictEqual(result, expected);
  }

  {
    const expected = {
      name: "Alderaan",
      surfaceWter: "40",
      terrain: "grasslands, mountains",
    };

    const result = await service.getPlanets(BASE_URL_2);
    assert.deepStrictEqual(result, expected);
  }
})();

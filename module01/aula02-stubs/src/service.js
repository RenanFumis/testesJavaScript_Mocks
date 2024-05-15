class Service{
  async makeRequest(url){
    return (await fetch(url)).json();
  }

  async getPlanets(url){
    //a referencia para validação do resultado e o esperado
    const data = await this.makeRequest(url);
    return {
      name: data.name,
      surfaceWter: data.surface_water,
      terrain: data.terrain,
    };
  }
}

module.exports = Service;
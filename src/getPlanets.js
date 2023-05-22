
const getPlanets = async () => {
  const route = `${ process.env.API_URL}/planets`;
  try {
      const response = await fetch(route);
      const data = await response.json();
      // Mapped results attributes names to spanish
      var dataMapped = [];
      data.results.forEach(planet => {
        let planetMapped = {};
        planetMapped['nombre'] = planet.name;
        planetMapped['periodo_de_rotacion'] = planet.rotation_period;
        planetMapped['periodo_orbital'] = planet.orbital_period;
        planetMapped['diametro'] = planet.diameter;
        planetMapped['clima'] = planet.climate;
        planetMapped['gravedad'] = planet.gravity;
        planetMapped['terreno'] = planet.terrain;
        planetMapped['agua_superficial'] = planet.surface_water;
        planetMapped['población'] = planet.population;
        dataMapped.push(planetMapped);
      });
      return dataMapped;
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    }
  }
};

module.exports = {
  getPlanets,
};
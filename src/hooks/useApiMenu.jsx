import React, { useEffect, useState } from "react";

export const useApiMenu = (caso) => {
  // caso = ruta1 || ruta2

  const [routeList, setRouteList] = useState(null);

  useEffect(() => {
    callApi(caso);
  }, [caso]);

  const callApi = async (caso) => {
    const urlApi = `http://localhost:4004/${caso}`;
    const response = await fetch(urlApi);
    const { lista } = await response.json();

    console.log('la lista es:', lista);

    setRouteList(lista);
  };

  return { routeList };
};

// conversiones.js

function convertirUnidad(valor, tipo) {
  switch (tipo) {
    case 'energia':
    case 'trabajo':
      return {
        valor: valor * 0.000947817,
        unidad: 'BTU'
      };
    case 'temperatura':
      return {
        valor: (valor - 273.15) * 9/5 + 32,
        unidad: '°F'
      };
    case 'potencia':
      return {
        valor: valor * 0.00134102,
        unidad: 'HP'
      };
    case 'cv':
      return {
        valor: valor * 0.0002388459,
        unidad: 'BTU/lb·°F'
      };
    default:
      return {
        valor: valor,
        unidad: 'Unidad desconocida'
      };
  }
}

function mostrarConversion(valor, tipo, idDestino) {
  const resultado = convertirUnidad(valor, tipo);
  document.getElementById(idDestino).textContent =
    `Equivale a: ${resultado.valor.toFixed(4)} ${resultado.unidad}`;
}

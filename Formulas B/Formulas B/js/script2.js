function calcularT2() {
  const T1 = parseFloat(document.getElementById('t1').value);
  const rc = parseFloat(document.getElementById('rc').value);
  const gamma = parseFloat(document.getElementById('gamma').value);

  if (isNaN(T1) || isNaN(rc) || isNaN(gamma) || T1 <= 0 || rc <= 1 || gamma <= 1) {
    document.getElementById('resultadoT2').textContent = 'Por favor, ingresa valores válidos: T₁ > 0, rₐ > 1, γ > 1';
    document.getElementById('conversionesT2').style.display = 'none';
    return;
  }

  const T2 = T1 * Math.pow(rc, gamma - 1);

  // Guardar el valor en una variable global o local al alcance del botón
  window.ultimaT2 = T2;

  document.getElementById('resultadoT2').textContent =
    `La temperatura después de la compresión (T₂) es: ${T2.toFixed(2)} K`;

  // Oculta las conversiones al recalcular
  document.getElementById('conversionesT2').style.display = 'none';
  document.getElementById('conversionesT2').textContent = '';
}

function mostrarConversionesT2() {
  if (!window.ultimaT2) {
    document.getElementById('conversionesT2').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const T2 = window.ultimaT2;
  const T2_C = T2 - 273.15;
  const T2_F = (T2 - 273.15) * 9/5 + 32;

  const conversionesDiv = document.getElementById('conversionesT2');
  conversionesDiv.innerHTML =
    `• ${T2_C.toFixed(2)} °C<br>` +
    `• ${T2_F.toFixed(2)} °F`;

  conversionesDiv.style.display = 'block';
}


/*------------------------------------------------------------------------------------------------------------------------*/


function calcularTemperaturaCompresion() {
  const t1 = parseFloat(document.getElementById('t1').value);
  const rc = parseFloat(document.getElementById('rcTemp').value);
  const k = parseFloat(document.getElementById('kTemp').value);

  if (isNaN(t1) || isNaN(rc) || isNaN(k) || rc <= 0) {
    document.getElementById('resultadoTemperaturaCompresion').textContent = 'Por favor, ingresa valores válidos.';
    return;
  }

  const t2 = t1 * Math.pow(rc, k - 1);

  document.getElementById('resultadoTemperaturaCompresion').textContent = `La temperatura después de la compresión T₂ es ${t2.toFixed(2)} K`;
}
function calcularTemperaturaCompresion() {
  const t1 = parseFloat(document.getElementById('t1').value);
  const rc = parseFloat(document.getElementById('rcTemp').value);
  const k = parseFloat(document.getElementById('kTemp').value);

  if (isNaN(t1) || isNaN(rc) || isNaN(k) || rc <= 0 || k <= 1 || t1 <= 0) {
    document.getElementById('resultadoTemperaturaCompresion').textContent = 'Por favor, ingresa valores válidos.';
    document.getElementById('conversionesTemperaturaCompresion').style.display = 'none';
    return;
  }

  const t2 = t1 * Math.pow(rc, k - 1);
  window.ultimaT2compresion = t2;

  document.getElementById('resultadoTemperaturaCompresion').textContent =
    `La temperatura después de la compresión T₂ es: ${t2.toFixed(2)} K`;

  document.getElementById('conversionesTemperaturaCompresion').style.display = 'none';
  document.getElementById('conversionesTemperaturaCompresion').textContent = '';
}

function mostrarConversionesTemperaturaCompresion() {
  if (!window.ultimaT2compresion) {
    document.getElementById('conversionesTemperaturaCompresion').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const t2 = window.ultimaT2compresion;
  const t2_C = t2 - 273.15;
  const t2_F = (t2 - 273.15) * 9/5 + 32;

  const div = document.getElementById('conversionesTemperaturaCompresion');
  div.innerHTML =
    `• ${t2_C.toFixed(2)} °C<br>` +
    `• ${t2_F.toFixed(2)} °F`;

  div.style.display = 'block';
}




/*------------------------------------------------------------------------------------------------------------------------*/


function calcularEficienciaOtto() {
  const rc = parseFloat(document.getElementById('rcOtto').value);
  const gamma = parseFloat(document.getElementById('gammaOtto').value);

  if (isNaN(rc) || isNaN(gamma) || rc <= 1 || gamma <= 1) {
    document.getElementById('resultadoEficienciaOtto').textContent = 'Ingresa valores válidos: rₐ > 1, γ > 1';
    document.getElementById('conversionesEficienciaOtto').style.display = 'none';
    return;
  }

  const eficiencia = 1 - (1 / Math.pow(rc, gamma - 1));
  const eficienciaPorcentaje = eficiencia * 100;

  // Guarda para mostrar luego en conversiones
  window.ultimaEficienciaOtto = eficiencia;

  document.getElementById('resultadoEficienciaOtto').textContent =
    `La eficiencia térmica del ciclo Otto es: ${eficienciaPorcentaje.toFixed(2)}%`;

  document.getElementById('conversionesEficienciaOtto').style.display = 'none';
  document.getElementById('conversionesEficienciaOtto').textContent = '';
}

function mostrarConversionesEficienciaOtto() {
  if (typeof window.ultimaEficienciaOtto === 'undefined') {
    document.getElementById('conversionesEficienciaOtto').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const eficiencia = window.ultimaEficienciaOtto;
  const porcentaje = eficiencia * 100;

  const div = document.getElementById('conversionesEficienciaOtto');
  div.innerHTML =
    `• Valor decimal: ${eficiencia.toFixed(4)}<br>` +
    `• Porcentaje: ${porcentaje.toFixed(2)}%`;

  div.style.display = 'block';
}


/*------------------------------------------------------------------------------------------------------------------------*/

function calcularMasaAire() {
  const presion = parseFloat(document.getElementById('presionAire').value);
  const volumenLitros = parseFloat(document.getElementById('volumenCilindro').value);
  const temperatura = parseFloat(document.getElementById('temperaturaAire').value);

  if (isNaN(presion) || isNaN(volumenLitros) || isNaN(temperatura) || volumenLitros <= 0 || temperatura <= 0) {
    document.getElementById('resultadoMasaAire').textContent = 'Por favor, ingresa valores numéricos válidos y positivos.';
    document.getElementById('conversionesMasaAire').style.display = 'none';
    return;
  }

  const R = 287; // J/kg·K
  const presionPa = presion * 1000; // convertir kPa a Pa
  const volumenM3 = volumenLitros * 0.001; // convertir litros a m³

  const masa = (presionPa * volumenM3) / (R * temperatura);

  // Guardamos para conversión
  window.ultimaMasaAire = masa;

  document.getElementById('resultadoMasaAire').textContent =
    `La masa del aire es ${masa.toFixed(4)} kg`;

  document.getElementById('conversionesMasaAire').style.display = 'none';
  document.getElementById('conversionesMasaAire').textContent = '';
}

function mostrarConversionesMasaAire() {
  if (typeof window.ultimaMasaAire === 'undefined') {
    document.getElementById('conversionesMasaAire').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const masa = window.ultimaMasaAire;
  const masaGramos = masa * 1000;
  const masaLibras = masa * 2.20462;

  const div = document.getElementById('conversionesMasaAire');
  div.innerHTML =
    `• ${masaGramos.toFixed(2)} g<br>` +
    `• ${masaLibras.toFixed(4)} lb`;

  div.style.display = 'block';
}
/*---------------------------------------------------------------------------------------------------------------*/

function calcularRelacionCompresion() {
  const volumenMax = parseFloat(document.getElementById('volumenMaximo').value);
  const volumenMin = parseFloat(document.getElementById('volumenMinimo').value);

  if (isNaN(volumenMax) || isNaN(volumenMin) || volumenMin <= 0) {
    document.getElementById('resultadoRelacionCompresion').textContent = 'Por favor, ingresa valores numéricos válidos y volumen mínimo mayor que cero.';
    document.getElementById('conversionesRelacionCompresion').style.display = 'none';
    return;
  }

  const relacionCompresion = volumenMax / volumenMin;

  window.ultimaRelacionCompresion = relacionCompresion;

  document.getElementById('resultadoRelacionCompresion').textContent =
    `La relación de compresión es ${relacionCompresion.toFixed(2)}`;

  document.getElementById('conversionesRelacionCompresion').style.display = 'none';
  document.getElementById('conversionesRelacionCompresion').textContent = '';
}

function mostrarConversionesRelacionCompresion() {
  if (typeof window.ultimaRelacionCompresion === 'undefined') {
    document.getElementById('conversionesRelacionCompresion').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const rc = window.ultimaRelacionCompresion;

  const div = document.getElementById('conversionesRelacionCompresion');
  div.innerHTML =
    `• Valor decimal: ${rc.toFixed(4)}<br>` +
    `• Forma tradicional: ${rc.toFixed(2)} : 1`;

  div.style.display = 'block';
}
/*---------------------------------------------------------------------------------------------------------------*/

function calcularPME() {
  const trabajo = parseFloat(document.getElementById('trabajoCiclo').value);
  const volumenLitros = parseFloat(document.getElementById('volumenBarrido').value);

  if (isNaN(trabajo) || isNaN(volumenLitros) || volumenLitros <= 0) {
    document.getElementById('resultadoPME').textContent = 'Por favor, ingresa valores numéricos válidos y volumen mayor que cero.';
    document.getElementById('conversionesPME').style.display = 'none';
    return;
  }

  const volumenM3 = volumenLitros * 0.001; // litros a m³
  const pme = trabajo / volumenM3; // Pa
  const pmeKpa = pme / 1000;

  // Guardar resultado para conversiones
  window.ultimaPME = pme;

  document.getElementById('resultadoPME').textContent =
    `La presión media específica es ${pmeKpa.toFixed(2)} kPa`;

  document.getElementById('conversionesPME').style.display = 'none';
  document.getElementById('conversionesPME').textContent = '';
}

function mostrarConversionesPME() {
  if (typeof window.ultimaPME === 'undefined') {
    document.getElementById('conversionesPME').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const pmePa = window.ultimaPME;
  const pmeBar = pmePa / 100000;
  const pmePsi = pmePa / 6894.76;

  const div = document.getElementById('conversionesPME');
  div.innerHTML =
    `• ${pmePa.toFixed(0)} Pa<br>` +
    `• ${pmeBar.toFixed(3)} bar<br>` +
    `• ${pmePsi.toFixed(2)} psi`;

  div.style.display = 'block';
}

/*---------------------------------------------------------------------------------------------------------------*/


function mostrarFormularioTrabajo() {
  const metodo = document.getElementById('metodoTrabajo').value;
  const contenedor = document.getElementById('formularioTrabajo');
  let html = '';

  switch (metodo) {
    case 'q':
      html = `
        <label for="qin">Qin (J): </label>
        <input type="number" id="qin" placeholder="Ej: 1000" /><br/>
        <label for="qout">Qout (J): </label>
        <input type="number" id="qout" placeholder="Ej: 300" /><br/>
        <button onclick="calcularTrabajoNetoQ()">Calcular</button>
      `;
      break;
   case 'temperaturas':
  html = `
    <label for="masa">Masa (kg): </label>
    <input type="number" id="masa" placeholder="Ej: 0.002" /><br/>
    <label for="cv">C<sub>v</sub> (J/kg·K): </label>
    <input type="number" id="cv" placeholder="Ej: 718" /><br/>
    <label for="t1Temp">T₁ (K): </label>
    <input type="number" id="t1Temp" /><br/>
    <label for="t2Temp">T₂ (K): </label>
    <input type="number" id="t2Temp" /><br/>
    <label for="t3Temp">T₃ (K): </label>
    <input type="number" id="t3Temp" /><br/>
    <label for="t4Temp">T₄ (K): </label>
    <input type="number" id="t4Temp" /><br/>
    <button onclick="calcularTrabajoNetoTemp()">Calcular</button>
  `;
      break;
    case 'eficiencia':
      html = `
        <label for="eficiencia">Eficiencia térmica η<sub>t</sub> (0–1): </label>
        <input type="number" id="eficiencia" placeholder="Ej: 0.4" /><br/>
        <label for="qinEf">Q<sub>in</sub> (J): </label>
        <input type="number" id="qinEf" placeholder="Ej: 1000" /><br/>
        <button onclick="calcularTrabajoNetoEf()">Calcular</button>
      `;
      break;
  }

  contenedor.innerHTML = html;
  document.getElementById('resultadoTrabajoNetoOtto').textContent = '';
}

function calcularTrabajoNetoQ() {
  const qin = parseFloat(document.getElementById('qin').value);
  const qout = parseFloat(document.getElementById('qout').value);

  if (isNaN(qin) || isNaN(qout)) {
    mostrarError('resultadoTrabajoNetoOtto', 'Ingresa valores válidos.');
    return;
  }

  const trabajo = qin - qout;
  mostrarResultado('resultadoTrabajoNetoOtto', trabajo);
}

function calcularTrabajoNetoTemp() {
  const m = parseFloat(document.getElementById('masa').value);
  const cv = parseFloat(document.getElementById('cv').value);
  const t1 = parseFloat(document.getElementById('t1Temp').value);
  const t2 = parseFloat(document.getElementById('t2Temp').value);
  const t3 = parseFloat(document.getElementById('t3Temp').value);
  const t4 = parseFloat(document.getElementById('t4Temp').value);

  if ([m, cv, t1, t2, t3, t4].some(isNaN)) {
    mostrarError('resultadoTrabajoNetoOtto', 'Completa todos los valores numéricos.');
    return;
  }

  const trabajo = m * cv * (t3 - t2 - t4 + t1);
  mostrarResultado('resultadoTrabajoNetoOtto', trabajo);
}


function calcularTrabajoNetoEf() {

  const eta = parseFloat(document.getElementById('eficiencia').value);
  const qin = parseFloat(document.getElementById('qinEf').value);

  if (isNaN(eta) || isNaN(qin)) {
    mostrarError('resultadoTrabajoNetoOtto', 'Ingresa valores válidos.');
    return;
  }

  const trabajo = eta * qin;
  mostrarResultado('resultadoTrabajoNetoOtto', trabajo);
}

function mostrarResultado(id, valor) {
  document.getElementById(id).textContent = `Trabajo neto: ${valor.toFixed(2)} J`;
  window.ultimoTrabajoNeto = valor; // Guardamos para conversión
  document.getElementById('conversionesTrabajo').style.display = 'none';
  document.getElementById('conversionesTrabajo').textContent = '';
}


function mostrarError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}
function mostrarResultadoTrabajo(valor) {
  ultimoTrabajoNeto = valor;
  document.getElementById('resultadoTrabajoNetoOtto').textContent = `Trabajo neto: ${valor.toFixed(2)} J`;
  document.getElementById('trabajoConvertido').textContent = '';
}





function mostrarConversionesTrabajo() {
  const trabajo = window.ultimoTrabajoNeto;

  if (typeof trabajo === 'undefined') {
    document.getElementById('conversionesTrabajo').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const trabajoKJ = trabajo / 1000;
  const trabajoBTU = trabajo / 1055.06;
  const trabajoFtLb = trabajo * 0.73756;

  const div = document.getElementById('conversionesTrabajo');
  div.innerHTML =
    `• ${trabajoKJ.toFixed(2)} kJ<br>` +
    `• ${trabajoBTU.toFixed(2)} BTU<br>` +
    `• ${trabajoFtLb.toFixed(2)} ft·lb`;

  div.style.display = 'block';
}

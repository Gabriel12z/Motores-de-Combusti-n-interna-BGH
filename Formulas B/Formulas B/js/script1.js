function calcularArea() {
  const D = parseFloat(document.getElementById("diametro").value);

  if (isNaN(D) || D <= 0) {
    document.getElementById("resultado").innerText = "Por favor, introduce un diámetro válido.";
    document.getElementById("btnConversionesArea").style.display = "none";
    document.getElementById("conversionesArea").style.display = "none";
    return;
  }

  const area = Math.PI * Math.pow(D, 2) / 4; // cm²
  document.getElementById("resultado").innerText = `Área del cilindro: ${area.toFixed(2)} cm²`;

  // Guardar valor para la conversión
  window.ultimaAreaCilindro = area;

  // Mostrar botón de conversiones
  document.getElementById("btnConversionesArea").style.display = "inline-block";
  document.getElementById("conversionesArea").style.display = "none";
  document.getElementById("conversionesArea").innerHTML = '';
}
function mostrarConversionesArea() {
  const area = window.ultimaAreaCilindro;

  if (typeof area === 'undefined') {
    document.getElementById("conversionesArea").innerText = "Primero realiza el cálculo del área.";
    return;
  }

  const areaM2 = area / 10000;       // m²
  const areaIn2 = area * 0.155;      // in²
  const areaFt2 = area * 0.001076;   // ft²

  const div = document.getElementById("conversionesArea");
  div.innerHTML =
    `• ${areaM2.toFixed(4)} m²<br>` +
    `• ${areaIn2.toFixed(2)} in²<br>` +
    `• ${areaFt2.toFixed(4)} ft²`;
  div.style.display = "block";
}


/*----------------------------------------------------------------------------------------------------*/

let diametroCilindroGlobal = 0;

function calcularDiametroCilindro() {
  const VH = parseFloat(document.getElementById('vhCilindro').value);
  const S = parseFloat(document.getElementById('sCilindro').value);
  const i = parseFloat(document.getElementById('iCilindro').value);

  if (isNaN(VH) || isNaN(S) || isNaN(i) || VH <= 0 || S <= 0 || i <= 0) {
    document.getElementById('resultadoDiametroCilindro').textContent = 'Introduce valores válidos para VH, S e i.';
    document.getElementById('conversionDiametroCilindro').textContent = '';
    return;
  }

  const d = Math.sqrt((VH * 4) / (Math.PI * S * i));
  diametroCilindroGlobal = d;

  document.getElementById('resultadoDiametroCilindro').textContent = `El diámetro del cilindro es ${d.toFixed(2)} cm`;
  document.getElementById('conversionDiametroCilindro').textContent = '';
}

function mostrarConversionesDiametro() {
  if (diametroCilindroGlobal === 0) {
    document.getElementById('conversionDiametroCilindro').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const pulgadas = diametroCilindroGlobal / 2.54;

  const conversionTexto =
    `Diámetro en otras unidades:\n` +
    `${diametroCilindroGlobal.toFixed(2)} cm\n` +
    `${pulgadas.toFixed(2)} in`;

  document.getElementById('conversionDiametroCilindro').textContent = conversionTexto;
}



/*----------------------------------------------------------------------------------------------------*/


let ultimoVolumenCm3 = null; // Guardamos el valor para convertirlo después

function calcularCilindrada() {
  const D = parseFloat(document.getElementById("diametroCilindro").value);
  const L = parseFloat(document.getElementById("longitud").value);

  if (isNaN(D) || D <= 0 || isNaN(L) || L <= 0) {
    document.getElementById("resultadoVolumen").innerText = "Por favor, introduce valores válidos para D y L.";
    document.getElementById("conversionVolumen").innerHTML = "";
    return;
  }

  const volumenCm3 = (Math.PI * Math.pow(D, 2) / 4) * L;
  ultimoVolumenCm3 = volumenCm3; // Lo guardamos para convertir después

  document.getElementById("resultadoVolumen").innerText = `Cilindrada unitaria: ${volumenCm3.toFixed(2)} cm³`;

  // Mostrar botón de conversión
  document.getElementById("conversionVolumen").innerHTML = `
    <button onclick="mostrarConversionVolumen()">Mostrar conversiones</button>
    <div id="conversionDatosVolumen"></div>
  `;
}

function mostrarConversionVolumen() {
  if (ultimoVolumenCm3 === null) return;

  const volumenM3 = ultimoVolumenCm3 / 1e6;
  const volumenIn3 = ultimoVolumenCm3 / 16.387;

  document.getElementById("conversionDatosVolumen").innerHTML = `
    <strong>Conversiones:</strong><br>
    - ${volumenM3.toExponential(4)} m³<br>
    - ${volumenIn3.toFixed(2)} in³
  `;
}

/*----------------------------------------------------------------------------------------------------*/


let ultimoVolumenTotal = null;

function calcularTotal() {
  const D = parseFloat(document.getElementById("diametroTotal").value);
  const L = parseFloat(document.getElementById("longitudTotal").value);
  const n = parseInt(document.getElementById("cilindros").value);

  if (isNaN(D) || D <= 0 || isNaN(L) || L <= 0 || isNaN(n) || n <= 0) {
    document.getElementById("resultadoTotal").innerText = "Introduce valores válidos para D, L y n.";
    document.getElementById("conversionTotal").innerHTML = "";
    return;
  }

  const Vu = (Math.PI * Math.pow(D, 2) / 4) * L;
  const Vt = Vu * n;
  ultimoVolumenTotal = Vt;

  document.getElementById("resultadoTotal").innerText = `Cilindrada total: ${Vt.toFixed(2)} cm³`;

  document.getElementById("conversionTotal").innerHTML = `
    <button onclick="mostrarConversionTotal()">Mostrar conversiones</button>
    <div id="conversionDatosTotal"></div>
  `;
}

function mostrarConversionTotal() {
  if (ultimoVolumenTotal === null) return;

  const volumenM3 = ultimoVolumenTotal / 1e6;
  const volumenIn3 = ultimoVolumenTotal / 16.387;

  document.getElementById("conversionDatosTotal").innerHTML = `
    <strong>Conversiones:</strong><br>
    - ${volumenM3.toExponential(4)} m³<br>
    - ${volumenIn3.toFixed(2)} in³
  `;
}
/*----------------------------------------------------------------------------------------------------*/

let relacionAFGlobal = 0;

function calcularRelacionAF() {
  const aire = parseFloat(document.getElementById('aire').value);
  const combustible = parseFloat(document.getElementById('combustible').value);

  if (isNaN(aire) || isNaN(combustible) || aire <= 0 || combustible <= 0) {
    document.getElementById('resultadoAF').textContent = 'Introduce valores válidos. Las masas deben ser mayores que 0.';
    document.getElementById('conversionAF').textContent = '';
    return;
  }

  const relacionAF = aire / combustible;
  relacionAFGlobal = relacionAF;

  document.getElementById('resultadoAF').textContent = `Relación Aire/Combustible: ${relacionAF.toFixed(2)} (A/F)`;
  document.getElementById('conversionAF').textContent = '';
}

function mostrarConversionAF() {
  if (relacionAFGlobal === 0) {
    document.getElementById('conversionAF').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const lambda = relacionAFGlobal / 14.7; // Mezcla estequiométrica para gasolina

  const conversionTexto =
    `Conversión y análisis:\n` +
    `A/F: ${relacionAFGlobal.toFixed(2)}\n` +
    `λ (Lambda): ${lambda.toFixed(2)}\n` +
    (lambda > 1
      ? '→ Mezcla pobre (exceso de aire)'
      : lambda < 1
      ? '→ Mezcla rica (exceso de combustible)'
      : '→ Mezcla estequiométrica');

  document.getElementById('conversionAF').textContent = conversionTexto;
}


/*----------------------------------------------------------------------------------------------------*/
        function calcularRelacion() {
      const aire = parseFloat(document.getElementById("aire").value);
      const combustible = parseFloat(document.getElementById("combustible").value);

      if (isNaN(aire) || aire <= 0 || isNaN(combustible) || combustible <= 0) {
        document.getElementById("resultadoRelacion").innerText = "Introduce valores válidos para aire y combustible.";
        return;
      }

      const R = aire / combustible;
      document.getElementById("resultadoRelacion").innerText = `Relación aire-combustible: ${R.toFixed(2)} : 1`;
    }
/*----------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------*/

let valoresLD = { L: null, D: null };

function calcularRelacionLD() {
  const L = parseFloat(document.getElementById("relacionLD_L").value);
  const D = parseFloat(document.getElementById("relacionLD_D").value);

  if (isNaN(L) || L <= 0 || isNaN(D) || D <= 0) {
    document.getElementById("resultadoLD").innerText = "Introduce valores válidos para L y D.";
    document.getElementById("conversionLD").innerHTML = "";
    return;
  }

  const relacion = L / D;
  valoresLD = { L, D }; // guardar para conversión

  document.getElementById("resultadoLD").innerText = `Relación L/D: ${relacion.toFixed(2)}`;

  document.getElementById("conversionLD").innerHTML = `
    <button onclick="mostrarConversionLD()">Mostrar conversiones</button>
    <div id="conversionDatosLD"></div>
  `;
}

function mostrarConversionLD() {
  if (valoresLD.L === null || valoresLD.D === null) return;

  const L_in = valoresLD.L / 2.54;
  const D_in = valoresLD.D / 2.54;

  document.getElementById("conversionDatosLD").innerHTML = `
    <strong>Valores convertidos:</strong><br>
    - Longitud L: ${L_in.toFixed(2)} in<br>
    - Diámetro D: ${D_in.toFixed(2)} in<br>
    - Relación L/D (sin cambio): ${(valoresLD.L / valoresLD.D).toFixed(2)}
  `;
}

/*----------------------------------------------------------------------------------------------------*/
let valoresLPM = { Vt: null, RPM: null };

function calcularLPM() {
  const Vt = parseFloat(document.getElementById("vt_lpm").value);
  const RPM = parseFloat(document.getElementById("rpm").value);

  if (isNaN(Vt) || Vt <= 0 || isNaN(RPM) || RPM <= 0) {
    document.getElementById("resultadoLPM").innerText = "Introduce valores válidos para Vt y RPM.";
    document.getElementById("conversionLPM").innerHTML = "";
    return;
  }

  const Vt_litros = Vt / 1000; // cm³ a litros
  const LPM = Vt_litros * (RPM / 2);

  valoresLPM = { Vt, RPM, LPM };

  document.getElementById("resultadoLPM").innerText = `Litros aspirados por minuto: ${LPM.toFixed(2)} LPM`;

  document.getElementById("conversionLPM").innerHTML = `
    <button onclick="mostrarConversionLPM()">Mostrar conversiones</button>
    <div id="conversionDatosLPM"></div>
  `;
}

function mostrarConversionLPM() {
  const { Vt, RPM, LPM } = valoresLPM;
  if (Vt === null || RPM === null || LPM === null) return;

  const Vt_pulgadasCubicas = Vt / 16.387; // 1 in³ = 16.387 cm³
  const CFM = LPM / 28.317; // 1 CFM = 28.317 L/min

  document.getElementById("conversionDatosLPM").innerHTML = `
    <strong>Valores convertidos:</strong><br>
    - Cilindrada total: ${Vt_pulgadasCubicas.toFixed(2)} in³<br>
    - Caudal volumétrico: ${CFM.toFixed(2)} CFM (pies³/min)
  `;
}

/*----------------------------------------------------------------------------------------------------*/


let aplanadoCulataGlobal = 0;

function calcularAplanadoCulata() {
  const S = parseFloat(document.getElementById('sCulata').value);
  const eOriginal = parseFloat(document.getElementById('eOriginal').value);
  const eNueva = parseFloat(document.getElementById('eNueva').value);

  if (
    isNaN(S) || isNaN(eOriginal) || isNaN(eNueva) ||
    S <= 0 || eOriginal <= 1 || eNueva <= 1
  ) {
    document.getElementById('resultadoAplanado').textContent = 'Introduce valores válidos. ε debe ser mayor que 1.';
    document.getElementById('conversionAplanado').textContent = '';
    return;
  }

  const X = (S / (eOriginal - 1)) - (S / (eNueva - 1));
  aplanadoCulataGlobal = X;

  document.getElementById('resultadoAplanado').textContent = `El aplanado de culata es ${X.toFixed(2)} cm`;
  document.getElementById('conversionAplanado').textContent = '';
}

function mostrarConversionAplanado() {
  if (aplanadoCulataGlobal === 0) {
    document.getElementById('conversionAplanado').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const pulgadas = aplanadoCulataGlobal / 2.54;

  const conversionTexto =
    `Aplanado en otras unidades:\n` +
    `${aplanadoCulataGlobal.toFixed(2)} cm\n` +
    `${pulgadas.toFixed(2)} in`;

  document.getElementById('conversionAplanado').textContent = conversionTexto;
}


/*----------------------------------------------------------------------------------------------------*/


let longitudCarreraGlobal = 0;

function calcularLongitudCarrera() {
  const vh = parseFloat(document.getElementById('vhCarrera').value);
  const area = parseFloat(document.getElementById('areaCarrera').value);

  if (isNaN(vh) || isNaN(area) || vh <= 0 || area <= 0) {
    document.getElementById('resultadoCarrera').textContent = 'Por favor, ingresa valores válidos.';
    document.getElementById('conversionCarrera').textContent = '';
    return;
  }

  const S = vh / area;
  longitudCarreraGlobal = S;

  document.getElementById('resultadoCarrera').textContent = `La longitud de carrera es ${S.toFixed(2)} cm`;
  document.getElementById('conversionCarrera').textContent = '';
}

function mostrarConversionCarrera() {
  if (longitudCarreraGlobal === 0) {
    document.getElementById('conversionCarrera').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const pulgadas = longitudCarreraGlobal / 2.54;

  const conversionTexto =
    `Longitud en otras unidades:\n` +
    `${longitudCarreraGlobal.toFixed(2)} cm\n` +
    `${pulgadas.toFixed(2)} in`;

  document.getElementById('conversionCarrera').textContent = conversionTexto;
}



/*----------------------------------------------------------------------------------------------------*/

let ultimoPerimetro = null;

function calcularPerimetro() {
  const r = parseFloat(document.getElementById("radio").value);

  if (isNaN(r) || r <= 0) {
    document.getElementById("resultadoPerimetro").innerText = "Introduce un valor válido para el radio.";
    document.getElementById("conversionPerimetro").innerHTML = "";
    return;
  }

  const P = 2 * Math.PI * r;
  ultimoPerimetro = P;

  document.getElementById("resultadoPerimetro").innerText = `Perímetro del cigüeñal: ${P.toFixed(2)} cm`;

  document.getElementById("conversionPerimetro").innerHTML = `
    <button onclick="mostrarConversionPerimetro()">Mostrar conversiones</button>
    <div id="conversionDatosPerimetro"></div>
  `;
}

function mostrarConversionPerimetro() {
  if (ultimoPerimetro === null) return;

  const pulgadas = ultimoPerimetro / 2.54; // 1 in = 2.54 cm

  document.getElementById("conversionDatosPerimetro").innerHTML = `
    <strong>Valores convertidos:</strong><br>
    - Perímetro: ${pulgadas.toFixed(2)} pulgadas
  `;
}

/*----------------------------------------------------------------------------------------------------*/

let ultimoRadio = null;

function calcularRadio() {
  const L = parseFloat(document.getElementById("carreraRadio").value);

  if (isNaN(L) || L <= 0) {
    document.getElementById("resultadoRadio").innerText = "Introduce un valor válido para la carrera.";
    document.getElementById("conversionRadio").innerHTML = "";
    return;
  }

  const r = L / 2;
  ultimoRadio = r;

  document.getElementById("resultadoRadio").innerText = `Radio del cigüeñal: ${r.toFixed(2)} cm`;

  document.getElementById("conversionRadio").innerHTML = `
    <button onclick="mostrarConversionRadio()">Mostrar conversiones</button>
    <div id="conversionDatosRadio"></div>
  `;
}

function mostrarConversionRadio() {
  if (ultimoRadio === null) return;

  const pulgadas = ultimoRadio / 2.54; // 1 in = 2.54 cm

  document.getElementById("conversionDatosRadio").innerHTML = `
    <strong>Valores convertidos:</strong><br>
    - Radio: ${pulgadas.toFixed(2)} pulgadas
  `;
}

/*----------------------------------------------------------------------------------------------------*/

   let ultimaPresionAbsoluta = null;

function calcularPresionAbsoluta() {
  const patm = parseFloat(document.getElementById("patm").value);
  const pman = parseFloat(document.getElementById("pman").value);

  if (isNaN(patm) || isNaN(pman)) {
    document.getElementById("resultadoPresionAbsoluta").innerText = "Introduce valores válidos para ambas presiones.";
    document.getElementById("conversionPresionAbsoluta").innerHTML = "";
    return;
  }

  const pabs = patm + pman;
  ultimaPresionAbsoluta = pabs;

  document.getElementById("resultadoPresionAbsoluta").innerText = `Presión absoluta: ${pabs.toFixed(2)} kPa`;

  document.getElementById("conversionPresionAbsoluta").innerHTML = `
    <button onclick="mostrarConversionPresionAbsoluta()">Mostrar conversiones</button>
    <div id="conversionDatosPresionAbsoluta"></div>
  `;
}

function mostrarConversionPresionAbsoluta() {
  if (ultimaPresionAbsoluta === null) return;

  const psi = ultimaPresionAbsoluta * 0.145038; // 1 kPa ≈ 0.145038 psi

  document.getElementById("conversionDatosPresionAbsoluta").innerHTML = `
    <strong>Valores convertidos:</strong><br>
    - Presión absoluta: ${psi.toFixed(2)} psi
  `;
}

/*----------------------------------------------------------------------------------------------------*/


function convertirAPa(valor, unidad) {
  switch (unidad) {
    case "Pa": return valor;
    case "kPa": return valor * 1000;
    case "bar": return valor * 100000;
    case "psi": return valor * 6894.76;
    default: return NaN;
  }
}

function calcularSobrepresion() {
  const pmanStr = document.getElementById('pman').value.trim();
  const patmStr = document.getElementById('patm').value.trim();
  const unidad = document.getElementById('unidadGeneral').value;
  const resultado = document.getElementById('resultadoSobrepresion');

  if (pmanStr === "" || patmStr === "") {
    resultado.textContent = "Por favor, ingresa valores en ambos campos.";
    return;
  }

  const pman = parseFloat(pmanStr);
  const patm = parseFloat(patmStr);

  if (isNaN(pman) || isNaN(patm)) {
    resultado.textContent = "Los valores ingresados no son válidos.";
    return;
  }

  // Convertimos ambos valores a Pa
  const pmanPa = convertirAPa(pman, unidad);
  const patmPa = convertirAPa(patm, unidad);

  const sobrepresion = pmanPa - patmPa;

  resultado.textContent = `La sobrepresión es: ${sobrepresion.toFixed(2)} Pa`;
}





/*----------------------------------------------------------------------------------------------------*/


let ultimaDepresion = null;

function calcularDepresion() {
  const pAtm = parseFloat(document.getElementById('patmDep').value);
  const pCilindro = parseFloat(document.getElementById('pcilindroDep').value);

  if (isNaN(pAtm) || isNaN(pCilindro)) {
    document.getElementById('resultadoDep').textContent = 'Por favor, ingresa valores numéricos válidos.';
    document.getElementById('conversionDepresion').innerHTML = '';
    return;
  }

  const depresion = pAtm - pCilindro;
  ultimaDepresion = depresion;

  document.getElementById('resultadoDep').textContent = `La depresión es ${depresion.toFixed(2)} kPa`;
  document.getElementById('conversionDepresion').innerHTML = `
    <button onclick="mostrarConversionDepresion()">Mostrar conversiones</button>
    <div id="conversionDatosDepresion"></div>
  `;
}

function mostrarConversionDepresion() {
  if (ultimaDepresion === null) return;

  const psi = ultimaDepresion * 0.145038;

  document.getElementById('conversionDatosDepresion').innerHTML = `
    <strong>Valores convertidos:</strong><br>
    - Depresión: ${psi.toFixed(2)} psi
  `;
}

/*----------------------------------------------------------------------------------------------------*/

let ultimaEficiencia = null;

function calcularEficiencia() {
  const pUtil = parseFloat(document.getElementById('pUtil').value);
  const pDesarrollada = parseFloat(document.getElementById('pDesarrollada').value);

  if (isNaN(pUtil) || isNaN(pDesarrollada) || pDesarrollada === 0) {
    document.getElementById('resultadoEficiencia').textContent = 'Por favor, ingresa valores numéricos válidos y que la potencia desarrollada no sea cero.';
    document.getElementById('conversionEficiencia').innerHTML = '';
    return;
  }

  const eficiencia = (pUtil / pDesarrollada) * 100;
  ultimaEficiencia = eficiencia;

  document.getElementById('resultadoEficiencia').textContent = `La eficiencia mecánica es ${eficiencia.toFixed(2)} %`;
  document.getElementById('conversionEficiencia').innerHTML = `
    <button onclick="mostrarConversionEficiencia()">Mostrar conversión a decimal</button>
    <div id="conversionDatosEficiencia"></div>
  `;
}

function mostrarConversionEficiencia() {
  if (ultimaEficiencia === null) return;

  const decimal = ultimaEficiencia / 100;

  document.getElementById('conversionDatosEficiencia').innerHTML = `
    <strong>Conversión:</strong><br>
    - Eficiencia decimal: ${decimal.toFixed(4)}
  `;
}

/*----------------------------------------------------------------------------------------------------*/
let parMotorGlobal = 0;

function calcularParMotor() {
  const P = parseFloat(document.getElementById('potencia').value);
  const omega = parseFloat(document.getElementById('omega').value);

  if (isNaN(P) || isNaN(omega) || P <= 0 || omega <= 0) {
    document.getElementById('resultadoPar').textContent = 'Introduce valores válidos. P y ω deben ser mayores que 0.';
    document.getElementById('conversionPar').textContent = '';
    return;
  }

  const M = P / omega;
  parMotorGlobal = M;

  document.getElementById('resultadoPar').textContent = `El par motor es ${M.toFixed(2)} N·m`;
  document.getElementById('conversionPar').textContent = '';
}

function mostrarConversionPar() {
  if (parMotorGlobal === 0) {
    document.getElementById('conversionPar').textContent = 'Primero realiza el cálculo.';
    return;
  }

  const lbft = parMotorGlobal * 0.737562; // 1 N·m = 0.737562 lb·ft

  const conversionTexto =
    `Par motor en otras unidades:\n` +
    `${parMotorGlobal.toFixed(2)} N·m\n` +
    `${lbft.toFixed(2)} lb·ft`;

  document.getElementById('conversionPar').textContent = conversionTexto;
}


/*----------------------------------------------------------------------------------------------------*/


let potenciaKWGlobal = 0;
let torqueNmGlobal = 0;
let rpmGlobal = 0;

function calcularPotencia() {
  const torque = parseFloat(document.getElementById('torquePotencia').value);
  const rpm = parseFloat(document.getElementById('rpmPotencia').value);

  if (isNaN(torque) || isNaN(rpm) || rpm === 0) {
    document.getElementById('resultadoPotencia').textContent = 'Por favor, ingresa valores numéricos válidos y que la velocidad no sea cero.';
    return;
  }

  const potenciaW = (torque * 2 * Math.PI * rpm) / 60;
  potenciaKWGlobal = potenciaW / 1000;
  torqueNmGlobal = torque;
  rpmGlobal = rpm;

  document.getElementById('resultadoPotencia').textContent = `La potencia es ${potenciaKWGlobal.toFixed(2)} kW`;
  document.getElementById('resultadoConversiones').textContent = ''; // limpiar conversiones previas
}

function mostrarConversiones() {
  if (potenciaKWGlobal === 0 || torqueNmGlobal === 0) {
    document.getElementById('resultadoConversiones').textContent = 'Calcula la potencia primero.';
    return;
  }

  // Conversiones:
  const potenciaHP = potenciaKWGlobal * 1.34102; // kW a HP
  const torqueLbFt = torqueNmGlobal * 0.73756;  // Nm a lb-ft

  const texto = 
    `Potencia: ${potenciaKWGlobal.toFixed(2)} kW = ${potenciaHP.toFixed(2)} HP\n` +
    `Torque: ${torqueNmGlobal.toFixed(2)} Nm = ${torqueLbFt.toFixed(2)} lb-ft`;

  document.getElementById('resultadoConversiones').textContent = texto;
}

/*----------------------------------------------------------------------------------------------------*/
let trabajoGlobal = 0;

function calcularTrabajo() {
  const presion = parseFloat(document.getElementById('presionTrabajo').value);
  const volumen = parseFloat(document.getElementById('volumenTrabajo').value);

  if (isNaN(presion) || isNaN(volumen)) {
    document.getElementById('resultadoTrabajo').textContent = 'Por favor, ingresa valores numéricos válidos.';
    return;
  }

  // Convertimos presión kPa a Pa y volumen litros a m³
  trabajoGlobal = presion * 1000 * volumen * 0.001; // en joules (J)

  document.getElementById('resultadoTrabajo').textContent = `El trabajo realizado es ${trabajoGlobal.toFixed(2)} J`;
  document.getElementById('resultadoConversionTrabajo').textContent = ''; // limpiar conversiones previas
}

function mostrarConversionesTrabajo() {
  if (trabajoGlobal === 0) {
    document.getElementById('resultadoConversionTrabajo').textContent = 'Calcula el trabajo primero.';
    return;
  }

  // Conversiones comunes:
  const trabajo_kJ = trabajoGlobal / 1000;               // Joules a kJ
  const trabajo_cal = trabajoGlobal / 4.184;             // Joules a calorías
  const trabajo_ft_lb = trabajoGlobal * 0.73756;         // Joules a ft-lb (pie-libra)

  const texto = 
    `Trabajo: ${trabajoGlobal.toFixed(2)} J\n` +
    `${trabajo_kJ.toFixed(3)} kJ\n` +
    `${trabajo_cal.toFixed(2)} cal\n` +
    `${trabajo_ft_lb.toFixed(2)} ft-lb`;

  document.getElementById('resultadoConversionTrabajo').textContent = texto;
}
/*----------------------------------------------------------------------------------------------------*/

let potenciaUtilGlobal = 0;

function calcularPotenciaUtil() {
  const torque = parseFloat(document.getElementById('torqueUtil').value);
  const rpm = parseFloat(document.getElementById('rpmUtil').value);

  if (isNaN(torque) || isNaN(rpm)) {
    document.getElementById('resultadoPotenciaUtil').textContent = 'Por favor, ingresa valores numéricos válidos.';
    document.getElementById('resultadoConversionPotenciaUtil').textContent = '';
    return;
  }

  const omega = (2 * Math.PI * rpm) / 60;
  potenciaUtilGlobal = torque * omega; // en watts

  document.getElementById('resultadoPotenciaUtil').textContent = `La potencia útil es ${potenciaUtilGlobal.toFixed(2)} W`;
  document.getElementById('resultadoConversionPotenciaUtil').textContent = ''; // limpiar conversiones previas
}

function mostrarConversionesPotenciaUtil() {
  if (potenciaUtilGlobal === 0) {
    document.getElementById('resultadoConversionPotenciaUtil').textContent = 'Primero calcula la potencia útil.';
    return;
  }

  const kW = potenciaUtilGlobal / 1000;
  const HP = potenciaUtilGlobal / 745.7;
  const BTU_h = potenciaUtilGlobal * 3.41214;

  const texto = 
    `Potencia útil:\n` +
    `${potenciaUtilGlobal.toFixed(2)} W\n` +
    `${kW.toFixed(2)} kW\n` +
    `${HP.toFixed(2)} HP\n` +
    `${BTU_h.toFixed(2)} BTU/h`;

  document.getElementById('resultadoConversionPotenciaUtil').textContent = texto;
}

/*----------------------------------------------------------------------------------------------------*/

let potenciaRealGlobal = 0;

function calcularPotenciaReal() {
  const torque = parseFloat(document.getElementById('torqueReal').value);
  const rpm = parseFloat(document.getElementById('rpmReal').value);

  if (isNaN(torque) || isNaN(rpm) || torque <= 0 || rpm <= 0) {
    document.getElementById('resultadoPotenciaReal').textContent = 'Ingresa valores válidos y positivos de torque (Nm) y RPM.';
    document.getElementById('resultadoConversionPotenciaReal').textContent = '';
    return;
  }

  const potenciaW = (torque * 2 * Math.PI * rpm) / 60;
  potenciaRealGlobal = potenciaW / 1000; // Convertimos a kW

  document.getElementById('resultadoPotenciaReal').textContent = `La potencia real es ${potenciaRealGlobal.toFixed(2)} kW`;
  document.getElementById('resultadoConversionPotenciaReal').textContent = ''; // limpiar resultado anterior
}


function mostrarConversionesPotenciaReal() {
  if (potenciaRealGlobal === 0) {
    document.getElementById('resultadoConversionPotenciaReal').textContent = 'Primero calcula la potencia real.';
    return;
  }

  const W = potenciaRealGlobal * 1000;
  const HP = W / 745.7;
  const BTU_h = W * 3.41214;

  const texto =
    `Potencia real:\n` +
    `${potenciaRealGlobal.toFixed(2)} kW\n` +
    `${W.toFixed(2)} W\n` +
    `${HP.toFixed(2)} HP\n` +
    `${BTU_h.toFixed(2)} BTU/h`;

  document.getElementById('resultadoConversionPotenciaReal').textContent = texto;
}

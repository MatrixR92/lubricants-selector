// ======= DATI =======
const data = [
  {
    tipologia: "RIDUTTORI<br>MOLTIPLICATORI<br>CAMBI",
    modello: "BA - BE - BV - BG - BE - BF<br>DJ - FB - FV - FG - LG - KG - IG<br>TB - TR - TL - TT",
    intensita: "Standard",
    viscosita: "ISO VG 320",
    descrizione: "Olio EP a base minerale per ingranaggi industriali",
    specifiche: "ISO 12925-1 CKD<br>DIN 51517-3 CLP<br>AGMA 9005 F-16<br>I.V. min.: 97",
    riferimenti: [
		{ brand: "Mobil", nome: "Mobilgear 600XP" },
		{ brand: "Pakelo", nome: "Erolube EP C F" },
		{ brand: "Eni", nome: "Blasia" },
		{ brand: "Shell", nome: "Omala S2 GX" },
		{ brand: "Castrol", nome: "Alpha SP" },
		{ brand: "Total", nome: "Carter EP" },
		{ brand: "Fuchs", nome: "Renolin CLP" },
		{ brand: "Petronas", nome: "Gear MEP" }
	],
    icon: "riduttori-standard.svg",
    // Valori "—" = segnaposto, da sostituire con i litri reali per ogni gruppo di sigle.
    oilConfig: {
      modelli: [
        { sigle: ["BA","BE","BV"], valori: { centrale: "1.6" } },
		{ sigle: ["BG"], valori: { centrale: "2.8" } },
		{ sigle: ["BF"], valori: { centrale: "1.6" } },
		{ sigle: ["DJ-360/400"], valori: { centrale: "3", laterale: "1.6" } },
		{ sigle: ["DJ-460/500"], valori: { centrale: "4.2", laterale: "1.6" } },
		{ sigle: ["FB", "FV"], valori: { centrale: "6" } },
		{ sigle: ["FG", "LG", "KG", "IG"], valori: { centrale: "9.2" } },
		{ sigle: ["TB2-140/160"], valori: { centrale: "1.5" } },
		{ sigle: ["TB2-180"], valori: { centrale: "1.8" } },
		{ sigle: ["TB2-200/220"], valori: { centrale: "2" } },
		{ sigle: ["TR27-140/160"], valori: { centrale: "1.5" } },
		{ sigle: ["TR27-180"], valori: { centrale: "1.8" } },
		{ sigle: ["TR27-200"], valori: { centrale: "2" } },
		{ sigle: ["TR36-160/180"], valori: { centrale: "1.3" } },
		{ sigle: ["TR36-200"], valori: { centrale: "1.4" } },
		{ sigle: ["TR56"], valori: { centrale: "2.1" } },
		{ sigle: ["TT97"], valori: { centrale: "5.5" } },
		{ sigle: ["TL35E"], valori: { centrale: "1.3" } },
		{ sigle: ["TL35I"], valori: { centrale: "1.3" } },
		{ sigle: ["TL50-180/200/220"], valori: { centrale: "2.9" } },
		{ sigle: ["TL50-240/260"], valori: { centrale: "3.3" } },
		
      ],
    },
    translations: {
      en: {
        tipologia: "GEARBOXES<br>MULTIPLIERS",
        descrizione: "Mineral EP oil for industrial gears",
      },
      fr: {
        tipologia: "RÉDUCTEURS<br>MULTIPLICATEURS",
        descrizione: "Huile EP à base minérale pour engrenages industriels",
      },
	  de: {
        tipologia: "GETRIEBE<br>VERVIELFÄLTIGER",
        descrizione: "Mineralisches EP-Öl für Industriegetriebe",
      },
	  es: {
        tipologia: "REDUCTORES<br>MULTIPLICADORES",
        descrizione: "Aceite mineral EP para engranajes industriales",
		intensita: "Estándar",
      },
    },
  },
  {
    tipologia: "RIDUTTORI<br>MOLTIPLICATORI<br>CAMBI",
    modello: "RM - RMT - RK - RTEK - RMAX - DP - DK - DTEK - DMAX<br>FZ - LZ - KZ - IZ - POKER - TYSON",
    intensita: "Elevata",
    viscosita: "ISO VG 220",
    descrizione: "Olio EP a base sintetica (PAO) per ingranaggi industriali",
    specifiche: "ISO 12925-1 CKD<br>DIN 51517-3 CLP<br>AGMA 9005 F-16<br>I.V. min.: 169",
    riferimenti: [
		{ brand: "Mobil", nome: "SHC 630" },
		{ brand: "Shell", nome: "Omala S4 GXV 220" },
		{ brand: "Castrol", nome: "Optigear PD 220 ES" },
		{ brand: "Fuchs", nome: "Renolin Unisyn XT 220" },
		{ brand: "Total", nome: "Carter SH 220" },
		{ brand: "Eni", nome: "Blasia SX 220" },
		{ brand: "Petronas", nome: "Gear Syn PAO 220" }
	],
    icon: "riduttori-hp.svg",
    // Valori "—" = segnaposto. Qui i gruppi hanno anche "laterale": comparirà
    // lo schema a tre riquadri (centrale + due laterali uguali fra loro).
    oilConfig: {
      modelli: [
        { sigle: ["RMT"], valori: { centrale: "2.8" } },
		{ sigle: ["RTEK", "RMAX"], valori: { centrale: "4.7" } },
		{ sigle: ["DP"], valori: { centrale: "6", laterale: "1.6" } },
		{ sigle: ["DTEK"], valori: { centrale: "6", laterale: "4" } },
		{ sigle: ["DTEK CS"], valori: { centrale: "8.5", laterale: "4" } },
		{ sigle: ["DMAX"], valori: { centrale: "7.3", laterale: "4.7" } },
		{ sigle: ["FZ","LZ","KZ", "IZ"], valori: { centrale: "12" } },
		{ sigle: ["POKER"], valori: { centrale: "6", laterale: "6.8" } },
		{ sigle: ["TYSON"], valori: { centrale: "7.3", laterale: "10" } },
		{ sigle: ["TYSON C"], valori: { centrale: "14", laterale: "10" } },
      ],
    },
	translations: {
      en: {
        tipologia: "GEARBOXES<br>MULTIPLIERS",
        descrizione: "Synthetic EP oil (PAO) for industrial gears",
		intensita: "High",
      },
      fr: {
        tipologia: "RÉDUCTEURS<br>MULTIPLICATEURS",
        descrizione: "Huile synthétique EP (PAO) pour engrenages industriels",
		intensita: "Élevé",
      },
	  de: {
        tipologia: "GETRIEBE<br>VERVIELFÄLTIGER",
        descrizione: "Synthetisches EP-Öl (PAO) für Industriegetriebe",
		intensita: "Hoch",
      },
	  es: {
        tipologia: "REDUCTORES<br>MULTIPLICADORES",
        descrizione: "Aceite sintético EP (PAO) para engranajes industriales",
		intensita: "Alto",
      },
    },
  },
  {
    tipologia: "VASCHE",
    modello: "Tutte le Macchine",
    intensita: "Standard<br>Elevata",
    viscosita: "NLGI 000",
    descrizione: "Grasso EP semifluido (idrossistearato di litio) per ingranaggi in vasca",
    specifiche: "DIN 51826<br>GP000G-20",
    riferimenti: [
		{ brand: "Mobil", nome: "Mobilux EP 023" },
		{ brand: "Total", nome: "Multis EP 000" },
		{ brand: "Fuchs", nome: "Renolit SF 7-041" },
	],
    icon: "vasche.svg",
    translations: {
      en: {
        tipologia: "TROUGHS",
        descrizione: "Semi-fluid EP grease (lithium) for crankcase gears",
		intensita: "Standard<br>High",
		modello: "All Machines",
      },
      fr: {
        tipologia: "VASQUES",
        descrizione: "Graisse EP semi-fluide (lithium) pour engrenages de carter",
		intensita: "Standard<br>Élevé",
		modello: "Toutes les Machines",
      },
	  de: {
        tipologia: "WANNEN",
        descrizione: "Halbflüssiges EP-Fett (Lithium) für Kurbelgehäusegetriebe",
		intensita: "Standard<br>Hoch",
		modello: "Alle Maschinen",
      },
	  es: {
        tipologia: "VASCHE",
        descrizione: "Grasa EP semifluida (litio) para engranajes del cárter",
		intensita: "Estándar<br>Alto",
		modello: "Todas las Máquinas",
      },
    },
  },
  {
    tipologia: "CIRCUITI IDRAULICI",
    modello: "AGILE",
    intensita: "Standard<br>Elevata",
    viscosita: "ISO VG 46",
    descrizione: "(OLIO NON CONDIVISO CON TRATTORE)<br>Olio minerale idraulico antiusura ad alto indice di viscosità",
    specifiche: "ISO L-HM L-HV (ISO 11158)<br>DENISON HF-0 HF-1 HF-2<br>ASTM D6158 (HVHP)<br>DIN 51524-3 HVLP",
    riferimenti: [
		{ brand: "Mobil", nome: "DTE 10 Excel 46" },
		{ brand: "Shell", nome: "Tellus S3 V 46" },
		{ brand: "Eni", nome: "Arnica 46" },
		{ brand: "Total", nome: "Equivis AF 46" },
		{ brand: "Pakelo", nome: "Hydraulic Fluid HVI 46" },
	],
    icon: "circuiti.svg",
    // Un solo modello ("AGILE") => nessun menu a tendina, valore fisso.
    oilConfig: {
	   modelli: [
        { sigle: ["AGILE"], valori: { centrale: "6" } },
      ],
    },
	translations: {
      en: {
        tipologia: "HYDRAULIC CIRCUITS",
        descrizione: "(OIL SEPARATE FROM THE TRACTOR)<br>Anti-wear hydraulic oil with high viscosity index",
		intensita: "Standard<br>High",
      },
      fr: {
        tipologia: "CIRCUITS HYDRAULIQUES",
        descrizione: "(HUILE SÉPARÉE DU TRACTEUR)<br>Huile hydraulique anti-usure à indice de viscosité élevé",
		intensita: "Standard<br>Élevé",
      },
	  de: {
        tipologia: "HYDRAULIKKREI-<br>SLÄUFE",
        descrizione: "(ÖL GETRENNT VOM TRAKTOR)<br>Verschleißfestes Hydrauliköl mit hohem Viskositätsindex",
		intensita: "Standard<br>Hoch",
      },
	  es: {
        tipologia: "CIRCUITOS HIDRÁULICOS",
        descrizione: "(ACEITE SEPARADO DEL TRACTOR)<br>Aceite hidráulico antidesgaste con alto índice de viscosidad",
		intensita: "Estándar<br>Alto",
      },
    },
  },
  {
    tipologia: "PERNI<br>SNODI<br>CUSCINETTI<br>SUPPORTI",
    modello: "Tutte le Macchine",
    intensita: "Standard<br>Elevata",
    viscosita: "NLGI 2",
    descrizione: "Grasso EP al litio complesso, adesivo, blu",
    specifiche: "DIN 51825 KP2N-20",
    riferimenti: [
		{ brand: "Mobil", nome: "Mobilgrease XHP 222" },
		{ brand: "Total", nome: "Multis Complex S2A" },
		{ brand: "Pakelo", nome: "Contact Grease EP 2" },
	],
    icon: "grasso.svg",
	translations: {
      en: {
        tipologia: "PIVOTS<br>JOINTS<br>BEARINGS<br>SUPPORTS",
        descrizione: "Lithium complex EP grease, blue adhesive",
		intensita: "Standard<br>High",
		modello: "All Machines",
      },
      fr: {
        tipologia: "PIVOTS<br>ARTICULATIONS<br>ROULEMENTS<br>SUPPORTS",
        descrizione: "Graisse EP au complexe de lithium, adhésif bleu",
		intensita: "Standard<br>Élevé",
		modello: "Toutes les Machines",
      },
	  de: {
        tipologia: "DREHPUNKTE<br>GELENKE<br>LAGER<br>STÜTZEN",
        descrizione: "Lithiumkomplex-EP-Fett, blau klebend",
		intensita: "Standard<br>Hoch",
		modello: "Alle Maschinen",
      },
	  es: {
        tipologia: "PERNI<br>ARTICULACIONES<br>COJINETES<br>SOPORTES",
        descrizione: "Aceite hidráulico antidesgaste con alto índice de viscosidad",
		intensita: "Estándar<br>Alto",
		modello: "Todas las Máquinas",
      },
    },
  },
];

function getBrandLogo(ref) {
  const name = ref.toLowerCase();
  if (name.includes('mobil')) return 'mobil.png';
  if (name.includes('pakelo')) return 'pakelo.png';
  if (name.includes('eni')) return 'eni.png';
  if (name.includes('shell')) return 'shell.png';
  if (name.includes('castrol')) return 'castrol.png';
  if (name.includes('total')) return 'total.png';
  if (name.includes('fuchs')) return 'fuchs.png';
  if (name.includes('petronas')) return 'petronas.png';
  return 'default.png';
}

// ======= TRADUZIONI STATICHE =======
const translations = {
  it: {
    back: "Torna alla lista",
    model: "Modello macchina",
    intensity: "Intensità utilizzo",
    viscosity: "Grado viscosità",
    specs: "Specifiche",
    refs: "Riferimenti commerciali",
	descr: "Descrizione",
    oilTitle: "Livello olio",
    oilPick: "Seleziona il modello macchina",
  },
  en: {
    back: "Back to list",
    model: "Machine model",
    intensity: "Usage intensity",
    viscosity: "Viscosity grade",
    specs: "Specifications",
    refs: "Commercial references",
	descr: "Description",
    oilTitle: "Oil level",
    oilPick: "Select the machine model",
  },
  fr: {
    back: "Retour à la liste",
    model: "Modèle de machine",
    intensity: "Intensité d’utilisation",
    viscosity: "Grade de viscosité",
    specs: "Spécifications",
    refs: "Références commerciales",
	descr: "Description",
    oilTitle: "Niveau d'huile",
    oilPick: "Sélectionnez le modèle de machine",
  },
  de: {
    back: "Zurück zur Liste",
    model: "Maschinenmodell",
    intensity: "Nutzungsintensität",
    viscosity: "Viskositätsklasse",
    specs: "Spezifikationen",
    refs: "Gewerbliche Referenzen",
	descr: "Beschreibung",
    oilTitle: "Ölstand",
    oilPick: "Maschinenmodell auswählen",
  },
  es: {
    back: "Volver a la lista",
    model: "Modelo de máquina",
    intensity: "Intensidad de uso",
    viscosity: "Índice de viscosidad",
    specs: "Especificaciones",
    refs: "Referencias comerciales",
	descr: "Descripción",
    oilTitle: "Nivel de aceite",
    oilPick: "Seleccione el modelo de máquina",
  },
};

// ======= LIVELLO OLIO (solo Riduttori/Moltiplicatori/Cambi e Circuiti idraulici) =======
//
// COME FUNZIONA (per chi deve solo inserire i dati, senza toccare il resto):
// Ogni voce dell'array "data" può avere in più un campo "oilConfig". Se manca
// del tutto, sulla pagina di quel prodotto non compare nessuno schema/olio:
// è il comportamento di default per tutto ciò che non è riduttore o circuito.
//
// Due situazioni possibili:
//
// 1) La quantità cambia in base al modello macchina => usare "modelli":
//      oilConfig: {
//        modelli: [
//          { sigle: ["BA","BE","BV"], valori: { centrale: 5.5 } },
//          { sigle: ["RM","RMT"],     valori: { centrale: 5.5, laterale: 2.1 } },
//        ]
//      }
//    Compare un menu a tendina con le sigle di ogni gruppo; scegliendone uno
//    si aggiornano i litri mostrati.
//
// 2) La quantità è UNICA per tutte le macchine (es. Circuiti idraulici, dove il
//    modello è solo "AGILE") => usare "valori" al posto di "modelli", così NON
//    compare nessun menu a tendina, solo lo schema con il valore fisso:
//      oilConfig: { valori: { centrale: 12 } }
//
// Regola dei riquadri: se "valori" contiene solo "centrale" viene disegnato UN
// riduttore singolo, centrato. Se contiene anche "laterale" vengono disegnati
// TRE riquadri (centrale + due laterali, sempre con lo stesso valore su
// entrambi i lati, collegati al centrale tramite cardano).
//
// I nomi che si leggono sopra i riquadri ("Centrale" / "Laterale") sono
// modificabili e tradotti: se un domani serve chiamarli diversamente SOLO per
// una voce specifica (es. "Vasca" invece di "Centrale"), si aggiunge "label"
// dentro quella stessa oilConfig, con le 5 lingue, così:
//      oilConfig: {
//        label: { centrale: { it:"Vasca", en:"Tank", fr:"Cuve", de:"Wanne", es:"Cuba" } },
//        valori: { centrale: 9 }
//      }
//    Se "label" non viene indicato, si usano i nomi di default qui sotto.

const oilLabelDefaults = {
  centrale: { it: "Centrale", en: "Central", fr: "Central", de: "Zentral", es: "Central" },
  laterale: { it: "Laterale", en: "Side", fr: "Latéral", de: "Seitlich", es: "Lateral" },
};

function oilBoxLabel(key, item) {
  const override = (item.oilConfig && item.oilConfig.label && item.oilConfig.label[key]) || null;
  const src = override || oilLabelDefaults[key] || {};
  return src[currentLang] || src.it || key;
}

let oilUid = 0;

// Disegna un'unica forma d'olio continua (nessuna cucitura/gap possibile),
// con una superficie leggermente ondulata: la forma riempie tutto lo spazio
// sotto la curva, quindi qualunque scorrimento orizzontale resta sempre
// "coperto" di giallo, senza mai far intravedere lo sfondo della card.
function oilWavePath(width, baseY, bottomY, amp, period) {
  let x = -period, d = `M ${x},${baseY}`, up = true;
  const endX = width + period;
  while (x < endX) {
    const cx = x + period / 2;
    const cy = up ? baseY - amp : baseY + amp;
    x += period;
    d += ` Q ${cx},${cy} ${x},${baseY}`;
    up = !up;
  }
  d += ` V ${bottomY} H ${-period} Z`;
  return d;
}

// Riquadro riduttore stilizzato: contorno blu, riempimento olio basso e fisso
// (il livello grafico è sempre lo stesso, volutamente non pieno: è solo la
// scritta in litri che cambia in base al modello scelto).
function gearboxSVG(w, h, litri, label, role) {
  const id = "oil" + (oilUid++);
  const bx = 4, by = 4, bw = w - 8, bh = h - 8, rx = Math.min(w, h) * 0.16;
  const level = 0.42; // riempimento grafico fisso, volutamente basso
  const oilTop = by + bh * (1 - level);
  const wave = oilWavePath(bw, 0, h, 2.2, 24);
  const fontSize = Math.max(15, Math.min(28, w * 0.22));
  const textY = by + (oilTop - by) / 2 + fontSize * 0.35;
  return `
  <div class="gbx gbx-${role}">
    <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
      <clipPath id="clip-${id}"><rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="${rx}"/></clipPath>
      <g clip-path="url(#clip-${id})">
        <g transform="translate(${bx},${oilTop})"><g class="bob"><g class="wave">
          <path d="${wave}" fill="var(--y)"/>
        </g></g></g>
      </g>
      <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="${rx}" fill="none" stroke="var(--blue)" stroke-width="2.4"/>
      <text x="${w / 2}" y="${textY}" text-anchor="middle" class="oil-litri" style="font-size:${fontSize}px">${litri} L</text>
    </svg>
    <div class="tag">${label}</div>
  </div>`;
}

// Linea di collegamento (cardano) tra riduttore centrale e laterale: una sola
// linea semplice, leggermente inclinata, niente giunti/cerchi.
function shaftConnector(mirror) {
  const y1 = mirror ? 11 : 5, y2 = mirror ? 5 : 11;
  return `<svg class="shaft" viewBox="0 0 34 16" preserveAspectRatio="none">
    <line x1="1" y1="${y1}" x2="33" y2="${y2}" stroke="var(--blue)" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`;
}

function renderOilVisual(valori, item) {
  const hasLaterale = valori.laterale !== undefined && valori.laterale !== null && valori.laterale !== "";
  if (!hasLaterale) {
    return `<div class="rig">${gearboxSVG(138, 116, valori.centrale, oilBoxLabel("centrale", item), "single")}</div>`;
  }
  return `<div class="rig triple">
    ${gearboxSVG(66, 66, valori.laterale, oilBoxLabel("laterale", item), "lateral")}
    ${shaftConnector(false)}
    ${gearboxSVG(106, 96, valori.centrale, oilBoxLabel("centrale", item), "central")}
    ${shaftConnector(true)}
    ${gearboxSVG(66, 66, valori.laterale, oilBoxLabel("laterale", item), "lateral")}
  </div>`;
}

function oilSectionHTML(item) {
  const cfg = item.oilConfig;
  if (!cfg) return "";
  const t = T();
  if (cfg.modelli && cfg.modelli.length) {
    const opts = cfg.modelli.map((m, i) => `<option value="${i}">${m.sigle.join(" - ")}</option>`).join("");
    return `<section class="card sec oil-card">
      <h2>${t.oilTitle}</h2>
      <select class="oil-select" id="oilSelect" aria-label="${t.oilPick}">${opts}</select>
      <div id="oilVisual">${renderOilVisual(cfg.modelli[0].valori, item)}</div>
    </section>`;
  }
  return `<section class="card sec oil-card">
    <h2>${t.oilTitle}</h2>
    <div id="oilVisual">${renderOilVisual(cfg.valori, item)}</div>
  </section>`;
}

function wireOilSection(item) {
  const sel = $("oilSelect");
  if (!sel) return;
  sel.onchange = () => {
    const m = item.oilConfig.modelli[sel.value];
    $("oilVisual").innerHTML = renderOilVisual(m.valori, item);
  };
}

// ======= UI (stile Tramline) =======
Object.entries({it:"Seleziona l'applicazione",en:"Select the application",fr:"Sélectionnez l'application",de:"Anwendung auswählen",es:"Seleccione la aplicación"}).forEach(([l,v])=>translations[l].pick=v);
// Sottotitolo fisso in header, sul modello di "Configuratore di tracciatura" della Tramline
Object.entries({it:"Selettore lubrificanti industriali",en:"Industrial lubricant selector",fr:"Sélecteur de lubrifiants industriels",de:"Industrieschmierstoff-Auswahl",es:"Selector de lubricantes industriales"}).forEach(([l,v])=>translations[l].subtitle=v);

let currentLang = 'it';
let currentItem = null;
const app = document.getElementById('app');
const $ = id => document.getElementById(id);
const T = () => translations[currentLang];
const L = (it,k) => (it.translations?.[currentLang]||{})[k] || it[k];
const clean = s => s.replace(/-?<br\s*\/?>/gi, m => m.startsWith('-') ? '' : ' - ');
const chips = s => s.split(/<br\s*\/?>/gi).flatMap(l => l.split(' - ')).map(v => v.trim()).filter(Boolean)
  .map(v => `<span class="chip">${v}</span>`).join('');
const SUN='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON='<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

// ======= LINGUE =======
function toggleLangMenu(){ $('langMenu').classList.toggle('show'); }
function setLang(lang){
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  $('currentLang').src = `img/${lang}.svg`;
  $('langMenu').classList.remove('show');
  currentItem ? showDetails(currentItem) : showHome();
}
window.addEventListener('click', e => { if(!e.target.closest('.lw')) $('langMenu').classList.remove('show'); });

function chrome(){
  $('sub').textContent = T().subtitle;
  $('bBackT').textContent = T().back;
}

// ======= HOME =======
function goHome(){ showHome(); }
function showHome(){
  window.scroll(0,0);
  currentItem = null;
  $('nav').hidden = true;
  chrome();
  app.innerHTML = `<section class="sec"><h2>${T().pick}</h2><div id="grid">${data.map((it,i)=>`
    <button class="card ap" data-i="${i}"><span class="tile big"><img src="img/${it.icon}" alt=""></span>
    <h3>${L(it,'tipologia')}</h3></button>`).join('')}</div></section>`;
  app.querySelectorAll('.ap').forEach(b => b.onclick = () => showDetails(data[b.dataset.i]));
}

// ======= DETTAGLI (master-detail su desktop) =======
function sideListHTML(activeItem){
  return data.map((it,i) => `
    <button class="side-i ${it===activeItem?'on':''}" data-i="${i}">
      <span class="tile"><img src="img/${it.icon}" alt=""></span>
      <span class="side-t">${L(it,'tipologia').replace(/<br\s*\/?>/gi,' ')}</span>
    </button>`).join('');
}

function showDetails(item){
  window.scroll(0,0);
  currentItem = item;
  $('nav').hidden = false;
  chrome();
  const t = T(), g = k => L(item,k);
  app.innerHTML = `
  <div class="detail-grid">
    <aside class="side-list" id="sideList">${sideListHTML(item)}</aside>
    <div class="detail-main">
      <section class="card sum">
        <div class="hero"><span class="tile big"><img src="img/${item.icon}" alt=""></span>
          <h2 class="ht">${clean(g('tipologia'))}</h2></div>
        <div><div class="lbl">${t.descr}</div><p class="desc">${g('descrizione')}</p></div>
      </section>
      <section class="kpis">
        ${item.oilConfig ? '' : `<div class="k wide"><span>${t.model}</span><div class="chips">${chips(g('modello'))}</div></div>`}
        <div class="k y"><span>${t.intensity}</span><div class="v">${g('intensita')}</div></div>
        <div class="k y"><span>${t.viscosity}</span><div class="v">${g('viscosita')}</div></div>
        <div class="k full"><span>${t.specs}</span><div class="chips">${chips(g('specifiche'))}</div></div>
      </section>
      ${oilSectionHTML(item)}
      <section class="card sec"><h2>${t.refs}</h2><div class="refs">${item.riferimenti.map(r=>`
        <div class="ref"><img src="img/loghi/${r.brand.toLowerCase()}.png" alt="${r.brand}"><span>${r.nome}</span></div>`).join('')}</div></section>
    </div>
  </div>`;
  app.querySelectorAll('.side-i').forEach(b => b.onclick = () => showDetails(data[b.dataset.i]));
  wireOilSection(item);
}

// ======= TEMA =======
const root = document.documentElement, mq = matchMedia('(prefers-color-scheme: light)');
const eff = () => root.dataset.theme || (mq.matches ? 'light' : 'dark');
const paintTheme = () => {
const dark = eff() === "dark";
 
$("bTheme").innerHTML = dark ? SUN : MOON;
 
$("bTheme").setAttribute(
"aria-label",
dark ? "Light theme" : "Dark theme"
);
 
const themeColor = document.getElementById("themeColor");
 
if (themeColor) {
themeColor.content = dark ? "#161d2a" : "#ffffff";
}
};
$('bTheme').onclick = () => { const n = eff()==='dark'?'light':'dark'; root.dataset.theme = n; try{localStorage.setItem('ls-theme',n)}catch(e){} paintTheme(); };
mq.addEventListener('change', paintTheme);
$('bBack').onclick = showHome;
$('bHome').onclick = goHome;
$('bPdf').onclick = () => currentItem && generaPDF(currentItem);

// ======= AVVIO =======
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) currentLang = savedLang;
  document.documentElement.lang = currentLang;
  $('currentLang').src = `img/${currentLang}.svg`;
  try{const th = localStorage.getItem('ls-theme'); if(th) root.dataset.theme = th}catch(e){}
  paintTheme();
  showHome();
});

// ======= IMMAGINI PER IL PDF =======
// Le versioni precedenti caricavano le immagini con <img crossOrigin="anonymous"> e le
// ridisegnavano su un <canvas>: se il browser considera quella richiesta "cross-origin"
// (capita spesso con GitHub Pages + Service Worker), il canvas diventa "tainted" e
// canvas.toDataURL() lancia un errore silenzioso, catturato dal try/catch: risultato,
// il logo semplicemente non compare nel PDF. Qui si aggira il problema:
// - i PNG (loghi marchi, logo piccolo) vengono scaricati con fetch() e convertiti in
//   base64 via FileReader, senza mai passare dal canvas.
// - l'icona di categoria (SVG) viene invece incapsulata in una data:URI e SOLO quella
//   viene disegnata su canvas: le data:URI non "sporcano" mai il canvas, quindi
//   toDataURL() funziona sempre, indipendentemente da dove è ospitato il sito.
// ======= IMMAGINI PER IL PDF =======
// Se sei arrivato qui perché il PDF continua a non mostrare i loghi: apri la Console
// del browser (F12) subito dopo aver generato il PDF. Ogni immagine che fallisce
// stampa un avviso con l'URL esatto tentato e l'errore dei DUE metodi provati,
// così si capisce subito se è un problema di percorso file o di hosting.
//
// Metodo 1 (fetch + FileReader): il più affidabile quando il sito è online
// (GitHub Pages, un server http/https qualsiasi).
// Metodo 2 (<img> + canvas): funziona anche aprendo index.html in locale con
// doppio clic (protocollo file://), dove fetch() viene bloccato dal browser.
// Si usa il primo che funziona, in automatico.
function rasterize(src, size) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = size || img.naturalWidth || img.width || 1;
        canvas.height = size || img.naturalHeight || img.height || 1;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve({ dataUrl: canvas.toDataURL('image/png'), w: canvas.width, h: canvas.height });
      } catch (err) { reject(err); }
    };
    img.onerror = () => reject(new Error(`Immagine non caricabile: ${src}`));
    img.src = src;
  });
}

async function loadImageAsDataURL(url) {
  let fetchErr = null;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('FileReader fallito'));
      reader.readAsDataURL(blob);
    });
    const { w, h } = await new Promise(resolve => {
      const im = new Image();
      im.onload = () => resolve({ w: im.naturalWidth || 1, h: im.naturalHeight || 1 });
      im.onerror = () => resolve({ w: 1, h: 1 });
      im.src = dataUrl;
    });
    return { dataUrl, w, h };
  } catch (err) {
    fetchErr = err;
  }
  try {
    const { dataUrl, w, h } = await rasterize(url);
    return { dataUrl, w, h };
  } catch (imgErr) {
    console.warn(`[PDF] Immagine non trovata: ${new URL(url, location.href).href}`, { fetch: fetchErr?.message, img: imgErr?.message });
    throw imgErr;
  }
}

async function loadSvgAsPngDataURL(url, size = 300) {
  try {
    const svgText = await fetch(url, { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); });
    const svgData = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgText)));
    const { dataUrl } = await rasterize(svgData, size);
    return dataUrl;
  } catch (err) {
    // fallback: carica l'SVG direttamente come immagine (utile anche in locale)
    const { dataUrl } = await rasterize(url, size);
    return dataUrl;
  }
}

// ======= PDF =======
// Recupera il modello e i valori olio attualmente selezionati nella pagina.
function getSelectedOilData(item) {
  const cfg = item.oilConfig;

  if (!cfg) return null;

  if (cfg.modelli && cfg.modelli.length) {
    const select = document.getElementById('oilSelect');
    let index = 0;

    if (select) {
      const parsedIndex = Number.parseInt(select.value, 10);
      if (
        Number.isInteger(parsedIndex) &&
        parsedIndex >= 0 &&
        parsedIndex < cfg.modelli.length
      ) {
        index = parsedIndex;
      }
    }

    const selected = cfg.modelli[index];
    return {
      modello: selected.sigle.join(' - '),
      valori: selected.valori,
    };
  }

  if (cfg.valori) {
    return {
      modello: null,
      valori: cfg.valori,
    };
  }

  return null;
}

// Aggiunge una nuova pagina se lo spazio disponibile non basta.
function ensurePdfSpace(doc, y, requiredHeight) {
  // Il layout PDF e progettato per rimanere sempre in una sola pagina A4.
  // La funzione resta per compatibilita con il resto del codice, ma non aggiunge pagine.
  return y;
}

// Disegna un singolo riduttore/serbatoio stilizzato nel PDF.
function drawPdfGearbox(doc, x, y, width, height, liters, label) {
  const oilHeight = height * 0.42;
  const oilY = y + height - oilHeight;

  // Sfondo bianco del riquadro.
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(x, y, width, height, 3, 3, 'F');

  // Olio giallo nella parte inferiore.
  doc.setFillColor(252, 193, 51);
  doc.rect(x + 0.7, oilY, width - 1.4, oilHeight - 0.7, 'F');

  // Contorno blu.
  doc.setDrawColor(0, 149, 216);
  doc.setLineWidth(0.7);
  doc.roundedRect(x, y, width, height, 3, 3, 'S');

  // Quantita in litri.
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(
    String(liters) + ' L',
    x + width / 2,
    y + height * 0.34,
    { align: 'center' }
  );

  // Etichetta Centrale/Laterale.
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(90, 102, 120);
  doc.text(
    label,
    x + width / 2,
    y + height + 5,
    { align: 'center' }
  );
}

function drawPdfShaft(doc, x1, y1, x2, y2) {
  doc.setDrawColor(0, 149, 216);
  doc.setLineWidth(0.8);
  doc.line(x1, y1, x2, y2);
}

// Disegna lo schema olio, singolo oppure con centrale e due laterali.
function drawPdfOilDiagram(doc, item, selectedOil, startY) {
  if (!selectedOil || !selectedOil.valori) return startY;

  const valori = selectedOil.valori;
  const hasLaterale =
    valori.laterale !== undefined &&
    valori.laterale !== null &&
    valori.laterale !== '';

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0, 75, 135);
  doc.text(
    (translations[currentLang].oilTitle || 'Livello olio') + ':',
    15,
    startY
  );

  const diagramY = startY + 8;

  if (!hasLaterale) {
    const boxWidth = 36;
    const boxHeight = 28;
    const pageWidth = doc.internal.pageSize.getWidth();
    const boxX = (pageWidth - boxWidth) / 2;

    drawPdfGearbox(
      doc,
      boxX,
      diagramY,
      boxWidth,
      boxHeight,
      valori.centrale,
      oilBoxLabel('centrale', item)
    );

    return diagramY + boxHeight + 12;
  }

  const lateralWidth = 24;
  const lateralHeight = 22;
  const centralWidth = 34;
  const centralHeight = 28;
  const leftX = 39;
  const centralX = 88;
  const rightX = 149;
  const lateralY = diagramY + 5;
  const centralY = diagramY;

  drawPdfGearbox(
    doc,
    leftX,
    lateralY,
    lateralWidth,
    lateralHeight,
    valori.laterale,
    oilBoxLabel('laterale', item)
  );

  drawPdfGearbox(
    doc,
    centralX,
    centralY,
    centralWidth,
    centralHeight,
    valori.centrale,
    oilBoxLabel('centrale', item)
  );

  drawPdfGearbox(
    doc,
    rightX,
    lateralY,
    lateralWidth,
    lateralHeight,
    valori.laterale,
    oilBoxLabel('laterale', item)
  );

  drawPdfShaft(
    doc,
    leftX + lateralWidth,
    lateralY + lateralHeight / 2,
    centralX,
    centralY + centralHeight / 2
  );

  drawPdfShaft(
    doc,
    centralX + centralWidth,
    centralY + centralHeight / 2,
    rightX,
    lateralY + lateralHeight / 2
  );

  return centralY + centralHeight + 12;
}

function addPdfFooterText(doc, pageNumber, totalPages) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(150);
  doc.text('© Alpego | Generato automaticamente', 15, pageHeight - 10);
  doc.text(
    `${pageNumber} / ${totalPages}`,
    pageWidth / 2,
    pageHeight - 10,
    { align: 'center' }
  );
}

async function generaPDF(item) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const left = 15;
  const labelWidth = 50;
  const valueX = left + labelWidth;
  let y = 20;

  const langData = item.translations?.[currentLang] || {};
  const selectedOil = getSelectedOilData(item);

  const titolo = (
    langData.tipologia ||
    item.tipologia ||
    ''
  ).replace(
    /-?<br\s*\/?>/gi,
    match => match.startsWith('-') ? '' : ' - '
  );

  // Se esiste il menu olio, usa il modello selezionato.
  // Altrimenti usa il normale campo modello dell'elemento.
  const selectedModel =
    selectedOil?.modello ||
    langData.modello ||
    item.modello ||
    '';

  // Titolo.
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(0, 75, 135);
  doc.text(titolo, left, y);

  // Icona principale.
  try {
    const iconData = await loadSvgAsPngDataURL(`img/${item.icon}`);
    doc.addImage(iconData, 'PNG', 174, 10, 20, 20);
  } catch (err) {
    console.warn('Logo principale non trovato:', err);
  }

  y += 12;
  doc.setDrawColor(252, 193, 51);
  doc.setLineWidth(0.8);
  doc.line(left, y, 195, y);
  y += 6;

  // Dati principali.
  doc.setFontSize(10);
  const info = [
    [translations[currentLang].model, selectedModel],
    [
      translations[currentLang].intensity,
      langData.intensita || item.intensita || '',
    ],
    [
      translations[currentLang].viscosity,
      langData.viscosita || item.viscosita || '',
    ],
    [
      translations[currentLang].specs,
      langData.specifiche || item.specifiche || '',
    ],
  ];

  for (const [label, value] of info) {
    y = ensurePdfSpace(doc, y, 18);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 75, 135);
    doc.text(label + ':', left, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);

    const cleanValue = String(value || '').replace(/<br\s*\/?>/gi, '\n');
    const lines = doc.splitTextToSize(cleanValue, 140);
    doc.text(lines, valueX, y);
    y += lines.length * 4.8 + 2;
  }

  doc.setDrawColor(220, 220, 220);
  doc.line(left, y, 195, y);
  y += 7;

  // Descrizione.
  y = ensurePdfSpace(doc, y, 30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 75, 135);
  doc.text(
    (translations[currentLang].descr || 'Descrizione') + ':',
    left,
    y
  );

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 40, 40);

  const descr = (
    langData.descrizione ||
    item.descrizione ||
    ''
  ).replace(/<br\s*\/?>/gi, '\n');

  doc.setFontSize(9.5);
  const descrLines = doc.splitTextToSize(descr, 180);
  doc.text(descrLines, left, y);
  y += descrLines.length * 4.8 + 5;

  // Schema olio e quantita.
  if (selectedOil) {
    const diagramHeight =
      selectedOil.valori?.laterale !== undefined ? 47 : 43;

    y = ensurePdfSpace(doc, y, diagramHeight);
    y = drawPdfOilDiagram(doc, item, selectedOil, y);

    doc.setDrawColor(220, 220, 220);
    doc.line(left, y, 195, y);
    y += 6;
  }

  // Riferimenti commerciali, disposti su due colonne per mantenere una sola pagina.
  y = ensurePdfSpace(doc, y, 25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 75, 135);
  doc.text(
    (translations[currentLang].refs || 'Riferimenti commerciali') + ':',
    left,
    y
  );
  y += 6;

  const refsPerColumn = Math.ceil(item.riferimenti.length / 2);
  const columnX = [left, 108];
  const rowHeight = 11;
  const refsStartY = y;

  for (let i = 0; i < item.riferimenti.length; i++) {
    const ref = item.riferimenti[i];
    const column = Math.floor(i / refsPerColumn);
    const row = i % refsPerColumn;
    const x = columnX[column];
    const rowY = refsStartY + row * rowHeight;

    try {
      const { dataUrl: imgData, w, h } = await loadImageAsDataURL(
        `img/loghi/${ref.brand.toLowerCase()}.png`
      );
      const targetHeight = 6;
      const targetWidth = Math.min((w / h) * targetHeight, 19);
      doc.addImage(imgData, 'PNG', x, rowY - 3.5, targetWidth, targetHeight);
    } catch (err) {
      console.warn('Logo riferimento non trovato:', ref.brand, err);
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(40, 40, 40);
    const refLines = doc.splitTextToSize(ref.nome, 67);
    doc.text(refLines, x + 22, rowY + 1.5);
  }

  y = refsStartY + refsPerColumn * rowHeight;

  // Logo del footer, caricato una volta sola.
  let footerLogo = null;
  try {
    footerLogo = await loadImageAsDataURL('img/logo-piccolo.png');
  } catch (err) {
    console.warn('Logo footer non trovato:', err);
  }

  // Footer e numerazione su tutte le pagine.
  const totalPages = doc.getNumberOfPages();
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    doc.setPage(pageNumber);
    addPdfFooterText(doc, pageNumber, totalPages);

    if (footerLogo) {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const targetHeight = 12;
      const targetWidth = (footerLogo.w / footerLogo.h) * targetHeight;

      doc.addImage(
        footerLogo.dataUrl,
        'PNG',
        pageWidth - 15 - targetWidth,
        pageHeight - 16,
        targetWidth,
        targetHeight
      );
    }
  }

  // Nome file: categoria + modello selezionato, se disponibile.
  const safeTitle = titolo
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, '_');

  const safeModel = selectedOil?.modello
    ? '_' + selectedOil.modello
        .replace(/[\\/:*?"<>|]/g, '')
        .replace(/\s+/g, '_')
    : '';

  doc.save(`${safeTitle}${safeModel}.pdf`);
}

const topEl = document.querySelector('.top');
const setTopH = () => document.documentElement.style.setProperty('--topH', topEl.offsetHeight + 'px');
setTopH();
new ResizeObserver(setTopH).observe(topEl);
addEventListener('resize', setTopH);
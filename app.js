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
    modello: "RM - RMT - RK - RTEK - RMAX - DP - DK - DTEK - DMAX<br>FZ - LZ - KZ - POKER - TYSON",
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
  },
  en: {
    back: "Back to list",
    model: "Machine model",
    intensity: "Usage intensity",
    viscosity: "Viscosity grade",
    specs: "Specifications",
    refs: "Commercial references",
	descr: "Description",
  },
  fr: {
    back: "Retour à la liste",
    model: "Modèle de machine",
    intensity: "Intensité d’utilisation",
    viscosity: "Grade de viscosité",
    specs: "Spécifications",
    refs: "Références commerciales",
	descr: "Description",
  },
  de: {
    back: "Zurück zur Liste",
    model: "Maschinenmodell",
    intensity: "Nutzungsintensität",
    viscosity: "Viskositätsklasse",
    specs: "Spezifikationen",
    refs: "Gewerbliche Referenzen",
	descr: "Beschreibung",
  },
  es: {
    back: "Volver a la lista",
    model: "Modelo de máquina",
    intensity: "Intensidad de uso",
    viscosity: "Índice de viscosidad",
    specs: "Especificaciones",
    refs: "Referencias comerciales",
	descr: "Descripción",
  },
};

let currentLang = 'it';
let currentItem = null;

const app = document.getElementById('app');

// ======= LINGUE =======
function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  if (menu) menu.classList.toggle('show');
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const current = document.getElementById('currentLang');
  if (current) current.src = `img/${lang}.png`;

  const menu = document.getElementById('langMenu');
  if (menu) menu.classList.remove('show');

  if (currentItem) showDetails(currentItem);
  else showHome();
}

// Chiude menu se clicchi fuori
window.addEventListener('click', (e) => {
  const menu = document.getElementById('langMenu');
  const icon = document.querySelector('.lang-icon');
  if (!menu || !icon) return;
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// ======= HEADER / HOME =======
function goHome() {
  showHome();
}

function showHome() {
  window.scroll(0, 0);
  
  currentItem = null;
  app.innerHTML = '';

  const grid = document.createElement('div');
  grid.id = 'grid';

  data.forEach(item => {
    const langData = item.translations?.[currentLang] || {};
    const titolo = langData.tipologia || item.tipologia;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="img/${item.icon}" class="card-logo" alt="${titolo}">
      <h2>${titolo}</h2>
    `;
    card.onclick = () => showDetails(item);
    grid.appendChild(card);
  });

  app.appendChild(grid);
}

// ======= DETTAGLI =======
function showDetails(item) {
  window.scroll(0, 0);  
  
  currentItem = item;
  app.innerHTML = '';

  const langData = item.translations?.[currentLang] || {};
  const titolo = langData.tipologia || item.tipologia;
  const descr = langData.descrizione || item.descrizione;
  const modello = langData.modello || item.modello;
  const intensita = langData.intensita || item.intensita;
  const titolomod = titolo.replace (/-?<br\s*\/?>/gi, (match) => {
	  if (match.startsWith('-')) {
	  // Caso: "-<br>" → elimina completamente
	  return '';
    } else {
      // Caso: "<br>" → sostituisci con trattino e spazio
    return ' - ';
	}
  });
  
  const details = document.createElement('div');
  details.className = 'details';

  const logo = document.createElement('img');
  logo.src = `img/${item.icon}`;
  logo.alt = titolo;
  logo.className = 'details-logo';
  details.appendChild(logo);

  const h2 = document.createElement('h2');
  h2.textContent = titolomod;
  details.appendChild(h2);

  const descrizione = document.createElement('p');
  descrizione.innerHTML = descr;
  details.appendChild(descrizione);

  const table = document.createElement('table');
  table.className = 'table-info';
  table.innerHTML = `
    <tr><th>${translations[currentLang].model}</th><td>${modello}</td></tr>
    <tr><th>${translations[currentLang].intensity}</th><td>${intensita}</td></tr>
    <tr><th>${translations[currentLang].viscosity}</th><td>${item.viscosita}</td></tr>
    <tr><th>${translations[currentLang].specs}</th><td>${item.specifiche}</td></tr>
    <tr>
<tr>
  <th>${translations[currentLang].refs}</th>
  <td>
    <div class="refs-list">
      ${item.riferimenti.map(ref => `
        <div class="ref-item">
          <img src="img/loghi/${ref.brand.toLowerCase()}.png" alt="${ref.brand}">
          <span>${ref.nome}</span>
        </div>
      `).join('')}
    </div>
  </td>
</tr>
  `;
  details.appendChild(table);

  const backBtn = document.createElement('a');
  backBtn.href = '#';
  backBtn.className = 'back-btn';
  backBtn.textContent = translations[currentLang].back;
  backBtn.onclick = (e) => {
    e.preventDefault();
    showHome();
  };
  details.appendChild(backBtn);

  const pdfBtn = document.createElement('a');
  pdfBtn.href = '#';
  pdfBtn.className = 'back-btn';
  pdfBtn.style.display = 'inline-flex';
  pdfBtn.style.alignItems = 'center';
  pdfBtn.style.gap = '5px'; // distanza tra icona e testo
  pdfBtn.style.marginLeft = '10px';
  pdfBtn.onclick = (e) => {
	  e.preventDefault();
	  generaPDF(item);
  };
    
  // Testo
  const text = document.createTextNode('PDF');
  
  // Inserisci icona e testo nel pulsante
  pdfBtn.appendChild(text);
  
  // Aggiungi il pulsante alla pagina
  details.appendChild(pdfBtn);

  app.appendChild(details);
}

// ======= PDF ======= 

async function generaPDF(item) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Margini e stili base
  const left = 15;
  let y = 20;
  const labelWidth = 50;     // larghezza riservata alle etichette
  const valueX = left + labelWidth; // inizio colonna valori
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);

  // Titolo
  const langData = item.translations?.[currentLang] || {};
  const titolo = (langData.tipologia || item.tipologia || "").replace (/-?<br\s*\/?>/gi, (match) => {
	  if (match.startsWith('-')) {
	  // Caso: "-<br>" → elimina completamente
	  return '';
    } else {
      // Caso: "<br>" → sostituisci con trattino e spazio
    return ' - ';
	}
  });
  doc.setTextColor(0, 75, 135);
  doc.setFont("helvetica", "bold");
  doc.text(titolo, left, y);
  y += 15;

  // Logo principale (se esiste)
  try {
    const img = await caricaImmagine(`img/${item.icon}`);
    doc.addImage(img, "PNG", 170, 10, 25, 25);
  } catch (err) {
    console.warn("Logo principale non trovato:", err);
  }

  // Linea separatrice
  doc.setDrawColor(252, 193, 51);
  doc.setLineWidth(0.8);
  doc.line(left, y, 195, y);
  y += 8;

  // Info principali
  doc.setFont("helvetica", "normal");
  doc.setTextColor(40, 40, 40)
  doc.setFontSize(12);
    
  const info = [
  [translations[currentLang].model, langData.modello || item.modello || ""],
  [translations[currentLang].intensity, langData.intensita || item.intensita || ""],
  [translations[currentLang].viscosity, langData.viscosita || item.viscosita || ""],
  [translations[currentLang].specs, langData.specifiche || item.specifiche || ""],
];

  info.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
	doc.setTextColor(0, 75, 135);
    doc.text(label + ":", left, y);

    doc.setFont("helvetica", "normal");
	doc.setTextColor(40, 40, 40)
    const cleanValue = (value || "").replace(/<br\s*\/?>/gi, "\n");
    const lines = doc.splitTextToSize(cleanValue, 140); // larghezza valore

    doc.text(lines, valueX, y);

    y += lines.length * 6 + 3; // aumenta y in base a quante righe occupa il valore
});

  doc.line(left, y, 195, y);
  y += 10;

  // Descrizione
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 75, 135);
  doc.text(translations[currentLang].descr || "Descrizione" + ":", left, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(40, 40, 40)
  const descr = (langData.descrizione || item.descrizione || "").replace(/<br\s*\/?>/gi, "\n");
  const descrLines = doc.splitTextToSize(descr, 180);
  doc.text(descrLines, left, y);
  y += descrLines.length * 6 + 6;

  // Riferimenti commerciali
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 75, 135);
  doc.text(translations[currentLang].refs || "Riferimenti commerciali" + ":", left, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(40, 40, 40)

  for (const ref of item.riferimenti) {
  try {
    const imgData = await caricaImmagine(`img/loghi/${ref.brand.toLowerCase()}.png`);

    // Crea un elemento Image temporaneo per leggere larghezza/altezza reali
    const tempImg = new Image();
    tempImg.src = imgData;
    await new Promise(resolve => tempImg.onload = resolve);

    const targetHeight = 8; // altezza desiderata
    const targetWidth = (tempImg.width / tempImg.height) * targetHeight;

    doc.addImage(imgData, "PNG", left, y - 4, targetWidth, targetHeight);
  } catch(err) {
    console.warn("Logo riferimento non trovato:", err);
  }
  doc.text(ref.nome, left + 25, y + 3);
  y += 14; // spazio verticale tra riferimenti
}

  // Footer
doc.setFontSize(10);
doc.setTextColor(150);

const footerText = "© Alpego | Generato automaticamente";
const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 15;

// Testo a sinistra
doc.text(footerText, margin, pageHeight - 10);

// Logo a destra
try {
  const footerLogo = await caricaImmagine("img/logo-piccolo.png");
  const tempImg = new Image();
  tempImg.src = footerLogo;
  await new Promise(resolve => tempImg.onload = resolve);

  const targetHeight = 12;
  const targetWidth = (tempImg.width / tempImg.height) * targetHeight;

  doc.addImage(
    footerLogo,
    "PNG",
    pageWidth - margin - targetWidth,
    pageHeight - 10 - targetHeight / 2, // centra verticalmente rispetto al testo
    targetWidth,
    targetHeight
  );
} catch(err) {
  console.warn("Logo footer non trovato:", err);
}

  // Salva PDF
  doc.save(`${titolo.replace(/\s+/g, "_")}.pdf`);
}

// Funzione helper per convertire immagine in base64
function caricaImmagine(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = url;
  });
}

// ======= AVVIO =======
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) currentLang = savedLang;

  const current = document.getElementById('currentLang');
  if (current) current.src = `img/${currentLang}.png`;

  showHome();
});

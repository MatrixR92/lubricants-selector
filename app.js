// ======= DATI =======
const data = [
  {
    tipologia: "RIDUTTORI-MOLTIPLICATORI-CAMBI",
    modello: "BA - BE - BV - BG - BE - BF - DJ - FB - FV - FG - LG - KG - IG - TB - TR - TL - TT",
    intensita: "Standard",
    viscosita: "ISO VG 320",
    descrizione: "Olio EP a base minerale per ingranaggi industriali",
    specifiche: "ISO 12925-1 CKD - DIN 51517-3 CLP - AGMA 9005 F-16 - I.V. minimo: 97",
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
        tipologia: "GEARBOXES-MULTIPLIERS",
        descrizione: "Mineral EP oil for industrial gears",
		intensita: "",
      },
      fr: {
        tipologia: "RÉDUCTEURS ET MULTIPLICATEURS DE VITESSE",
        descrizione: "Huile EP à base minérale pour engrenages industriels",
		intensita: "",
      },
	  de: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
	  es: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
    },
  },
  {
    tipologia: "RIDUTTORI-MOLTIPLICATORI-CAMBI",
    modello: "RM - RMT - RK - RTEK - RMAX DP - DK - DTEK - DMAX - FZ - LZ - KZ - POKER - TYSON",
    intensita: "Elevata",
    viscosita: "ISO VG 220",
    descrizione: "Olio EP a base sintetica (PAO) per ingranaggi industriali",
    specifiche: "ISO 12925-1 CKD - DIN 51517-3 CLP - AGMA 9005 F-16 - I.V. minimo: 169",
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
        tipologia: "GEARBOXES-MULTIPLIERS",
        descrizione: "Synthetic EP oil (PAO) for industrial gears",
		intensita: "",
      },
      fr: {
        tipologia: "RÉDUCTEURS ET MULTIPLICATEURS DE VITESSE",
        descrizione: "Huile EP à base minérale pour engrenages industriels",
		intensita: "",
      },
	  de: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
	  es: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
    },
  },
  {
    tipologia: "VASCHE",
    modello: "Tutte",
    intensita: "Standard - Elevata",
    viscosita: "NLGI 000",
    descrizione: "Grasso EP semifluido (idrossistearato di litio) per ingranaggi in vasca",
    specifiche: "DIN 51826 - GP000G-20",
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
		intensita: "",
      },
      fr: {
        tipologia: "BAINS D’ENGRENAGES",
        descrizione: "Graisse EP semi-fluide (hydroxystéarate de lithium) pour engrenages en cuve",
		intensita: "",
      },
	  de: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
	  es: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
    },
  },
  {
    tipologia: "CIRCUITI IDRAULICI",
    modello: "BA - BE - BV - BG - BE - BF - DJ - FB - FV - FG - LG - KG - IG - TB - TR - TL - TT",
    intensita: "Standard",
    viscosita: "ISO VG 320",
    descrizione: "(OLIO NON CONDIVISO CON TRATTORE) Olio EP a base minerale per ingranaggi industriali",
    specifiche: "ISO 12925-1 CKD - DIN 51517-3 CLP - AGMA 9005 F-16 - I.V. minimo: 97",
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
        descrizione: "(OIL SEPARATE FROM THE TRACTOR) Anti-wear hydraulic oil with high viscosity index",
		intensita: "",
      },
      fr: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
	  de: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
	  es: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
    },
  },
  {
    tipologia: "PERNI-SNODI-CUSCINETTI-SUPPORTI",
    modello: "BA - BE - BV - BG - BE - BF - DJ - FB - FV - FG - LG - KG - IG - TB - TR - TL - TT",
    intensita: "Standard",
    viscosita: "ISO VG 320",
    descrizioni: "Olio EP a base minerale per ingranaggi industriali",
    descrizione: "Olio EP a base minerale per ingranaggi industriali",
    specifiche: "ISO 12925-1 CKD - DIN 51517-3 CLP - AGMA 9005 F-16 - I.V. minimo: 97",
    riferimenti: [
		{ brand: "Mobil", nome: "Mobilgrease XHP 222" },
		{ brand: "Total", nome: "Multis Complex S2A" },
		{ brand: "Pakelo", nome: "Contact Grease EP 2" },
	],
    icon: "grasso.svg",
	translations: {
      en: {
        tipologia: "PIVOTS-JOINTS-BEARINGS-SUPPORTS",
        descrizione: "Lithium complex EP grease, blue adhesive",
		intensita: "",
      },
      fr: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
	  de: {
        tipologia: "",
        descrizione: "",
		intensita: "",
      },
	  es: {
        tipologia: "",
        descrizione: "",
		intensita: "",
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
  },
  en: {
    back: "Back to list",
    model: "Machine model",
    intensity: "Usage intensity",
    viscosity: "Viscosity grade",
    specs: "Specifications",
    refs: "Commercial references",
  },
  fr: {
    back: "Retour à la liste",
    model: "Modèle de machine",
    intensity: "Intensité d’utilisation",
    viscosity: "Grade de viscosité",
    specs: "Spécifications",
    refs: "Références commerciales",
  },
  de: {
    back: "Zurück zur Liste",
    model: "Maschinenmodell",
    intensity: "Nutzungsintensität",
    viscosity: "Viskositätsklasse",
    specs: "Spezifikationen",
    refs: "Gewerbliche Referenzen",
  },
  es: {
    back: "Volver a la lista",
    model: "Modelo de máquina",
    intensity: "Intensidad de uso",
    viscosity: "Índice de viscosidad",
    specs: "Especificaciones",
    refs: "Referencias comerciales",
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

  const details = document.createElement('div');
  details.className = 'details';

  const logo = document.createElement('img');
  logo.src = `img/${item.icon}`;
  logo.alt = titolo;
  logo.className = 'details-logo';
  details.appendChild(logo);

  const h2 = document.createElement('h2');
  h2.textContent = titolo;
  details.appendChild(h2);

  const descrizione = document.createElement('p');
  descrizione.textContent = descr;
  details.appendChild(descrizione);

  const table = document.createElement('table');
  table.className = 'table-info';
  table.innerHTML = `
    <tr><th>${translations[currentLang].model}</th><td>${item.modello}</td></tr>
    <tr><th>${translations[currentLang].intensity}</th><td>${item.intensita}</td></tr>
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

  app.appendChild(details);
}

// ======= AVVIO =======
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) currentLang = savedLang;

  const current = document.getElementById('currentLang');
  if (current) current.src = `img/${currentLang}.png`;

  showHome();
});

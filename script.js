// EspaFacil - Logique principale

const DATA = {
  nourriture: {
    nom: "Nourriture", icone: "🍎",
    niveaux: {
      debutant: [
        { es: "el agua", fr: "l'eau", exemple: "Quiero agua, por favor." },
        { es: "el pan", fr: "le pain", exemple: "El pan esta caliente." },
        { es: "la leche", fr: "le lait", exemple: "Me gusta la leche." },
        { es: "el cafe", fr: "le cafe", exemple: "Un cafe, por favor." },
        { es: "la manzana", fr: "la pomme", exemple: "La manzana es roja." },
        { es: "el huevo", fr: "l'oeuf", exemple: "Me gustan los huevos." },
        { es: "el queso", fr: "le fromage", exemple: "El queso es delicioso." },
        { es: "la naranja", fr: "l'orange", exemple: "La naranja es dulce." },
        { es: "el arroz", fr: "le riz", exemple: "El arroz esta listo." },
        { es: "el tomate", fr: "la tomate", exemple: "El tomate es rojo." },
      ],
      intermediaire: [
        { es: "la carne", fr: "la viande", exemple: "La carne esta bien cocinada." },
        { es: "el pescado", fr: "le poisson", exemple: "Me gusta el pescado fresco." },
        { es: "las verduras", fr: "les legumes", exemple: "Las verduras son sanas." },
        { es: "el postre", fr: "le dessert", exemple: "Hay postre hoy?" },
        { es: "la sopa", fr: "la soupe", exemple: "La sopa esta muy caliente." },
        { es: "el desayuno", fr: "le petit-dejeuner", exemple: "El desayuno es importante." },
        { es: "la cena", fr: "le diner", exemple: "La cena es a las nueve." },
        { es: "el almuerzo", fr: "le dejeuner", exemple: "El almuerzo esta listo." },
        { es: "el zumo", fr: "le jus", exemple: "Un zumo de naranja, por favor." },
        { es: "la mantequilla", fr: "le beurre", exemple: "Pan con mantequilla." },
      ],
      avance: [
        { es: "el aguacate", fr: "l'avocat", exemple: "El aguacate esta maduro." },
        { es: "la harina", fr: "la farine", exemple: "Necesito harina para el pastel." },
        { es: "el vinagre", fr: "le vinaigre", exemple: "Una ensalada con vinagre." },
        { es: "la mostaza", fr: "la moutarde", exemple: "Me pasas la mostaza?" },
        { es: "el cordero", fr: "l'agneau", exemple: "El cordero esta tierno." },
        { es: "las gambas", fr: "les crevettes", exemple: "Las gambas a la plancha." },
        { es: "el pimiento", fr: "le poivron", exemple: "El pimiento rojo es dulce." },
        { es: "el ajo", fr: "l'ail", exemple: "Anade ajo a la salsa." },
        { es: "la berenjena", fr: "l'aubergine", exemple: "La berenjena a la brasa." },
        { es: "el caldo", fr: "le bouillon", exemple: "Un caldo de pollo caliente." },
      ],
    },
  },
  maison: {
    nom: "Maison", icone: "🏠",
    niveaux: {
      debutant: [
        { es: "la casa", fr: "la maison", exemple: "Mi casa es grande." },
        { es: "la puerta", fr: "la porte", exemple: "Abre la puerta." },
        { es: "la ventana", fr: "la fenetre", exemple: "La ventana esta abierta." },
        { es: "la silla", fr: "la chaise", exemple: "Sientate en la silla." },
        { es: "la mesa", fr: "la table", exemple: "La mesa es de madera." },
        { es: "la cama", fr: "le lit", exemple: "La cama es comoda." },
        { es: "el bano", fr: "la salle de bain", exemple: "El bano esta limpio." },
        { es: "la cocina", fr: "la cuisine", exemple: "La cocina es moderna." },
        { es: "el suelo", fr: "le sol", exemple: "El suelo esta frio." },
        { es: "la pared", fr: "le mur", exemple: "La pared es blanca." },
      ],
      intermediaire: [
        { es: "el armario", fr: "l'armoire", exemple: "La ropa esta en el armario." },
        { es: "el espejo", fr: "le miroir", exemple: "Me miro en el espejo." },
        { es: "la lampara", fr: "la lampe", exemple: "La lampara da buena luz." },
        { es: "el sofa", fr: "le canape", exemple: "Me siento en el sofa." },
        { es: "el frigorifico", fr: "le refrigerateur", exemple: "El frigorifico esta vacio." },
        { es: "la ducha", fr: "la douche", exemple: "Me doy una ducha." },
        { es: "el tejado", fr: "le toit", exemple: "El tejado es rojo." },
        { es: "el garaje", fr: "le garage", exemple: "El coche esta en el garaje." },
        { es: "el pasillo", fr: "le couloir", exemple: "El pasillo es largo." },
        { es: "la estanteria", fr: "l'etagere", exemple: "Los libros estan en la estanteria." },
      ],
      avance: [
        { es: "el interruptor", fr: "l'interrupteur", exemple: "Apaga el interruptor." },
        { es: "el grifo", fr: "le robinet", exemple: "El grifo gotea." },
        { es: "la persiana", fr: "le volet", exemple: "Baja la persiana." },
        { es: "el enchufe", fr: "la prise", exemple: "El enchufe no funciona." },
        { es: "la calefaccion", fr: "le chauffage", exemple: "Enciende la calefaccion." },
        { es: "el sotano", fr: "la cave", exemple: "El sotano esta oscuro." },
        { es: "el desvan", fr: "le grenier", exemple: "Hay cajas en el desvan." },
        { es: "la baldosa", fr: "le carrelage", exemple: "La baldosa esta rota." },
        { es: "el umbral", fr: "le seuil", exemple: "Espera en el umbral." },
        { es: "el buzon", fr: "la boite aux lettres", exemple: "Hay carta en el buzon." },
      ],
    },
  },
  transport: {
    nom: "Transport", icone: "🚗",
    niveaux: {
      debutant: [
        { es: "el coche", fr: "la voiture", exemple: "Mi coche es azul." },
        { es: "el bus", fr: "le bus", exemple: "El bus llega tarde." },
        { es: "el tren", fr: "le train", exemple: "El tren sale a las ocho." },
        { es: "el avion", fr: "l'avion", exemple: "El avion esta en el cielo." },
        { es: "la bici", fr: "le velo", exemple: "Me voy en bici." },
        { es: "el barco", fr: "le bateau", exemple: "El barco es grande." },
        { es: "la calle", fr: "la rue", exemple: "Cruza la calle." },
        { es: "el aeropuerto", fr: "l'aeroport", exemple: "El aeropuerto esta lejos." },
        { es: "la estacion", fr: "la gare", exemple: "La estacion es nueva." },
        { es: "el taxi", fr: "le taxi", exemple: "Llamo un taxi." },
      ],
      intermediaire: [
        { es: "el semaforo", fr: "le feu tricolore", exemple: "Para en el semaforo rojo." },
        { es: "la autopista", fr: "l'autoroute", exemple: "La autopista esta cortada." },
        { es: "el desvio", fr: "la deviation", exemple: "Hay un desvio aqui." },
        { es: "el aparcamiento", fr: "le parking", exemple: "Busco un aparcamiento." },
        { es: "el tranvia", fr: "le tramway", exemple: "El tranvia es rapido." },
        { es: "el metro", fr: "le metro", exemple: "Cojo el metro cada dia." },
        { es: "la gasolina", fr: "l'essence", exemple: "El coche necesita gasolina." },
        { es: "el billete", fr: "le billet", exemple: "Compra el billete online." },
        { es: "el puente", fr: "le pont", exemple: "El puente es muy largo." },
        { es: "el anden", fr: "le quai", exemple: "El tren sale del anden 3." },
      ],
      avance: [
        { es: "el embrague", fr: "l'embrayage", exemple: "Suelta el embrague despacio." },
        { es: "el retrovisor", fr: "le retroviseur", exemple: "Mira el retrovisor." },
        { es: "el maletero", fr: "le coffre", exemple: "Las maletas van en el maletero." },
        { es: "la rotonda", fr: "le rond-point", exemple: "Gira en la rotonda." },
        { es: "el peaje", fr: "le peage", exemple: "Paga el peaje." },
        { es: "la averia", fr: "la panne", exemple: "Tengo una averia en la autopista." },
        { es: "el remolque", fr: "la remorque", exemple: "El camion lleva remolque." },
        { es: "el carril", fr: "la voie", exemple: "Circula por el carril derecho." },
        { es: "el arcen", fr: "l'accotement", exemple: "Para en el arcen." },
        { es: "la senal", fr: "le panneau", exemple: "Respeta las senales." },
      ],
    },
  },
  famille: {
    nom: "Famille", icone: "👨‍👩‍👧",
    niveaux: {
      debutant: [
        { es: "la madre", fr: "la mere", exemple: "Mi madre es simpatica." },
        { es: "el padre", fr: "le pere", exemple: "Mi padre trabaja mucho." },
        { es: "el hermano", fr: "le frere", exemple: "Tengo un hermano." },
        { es: "la hermana", fr: "la soeur", exemple: "Mi hermana es pequena." },
        { es: "el abuelo", fr: "le grand-pere", exemple: "El abuelo cuenta historias." },
        { es: "la abuela", fr: "la grand-mere", exemple: "La abuela cocina bien." },
        { es: "el hijo", fr: "le fils", exemple: "Mi hijo tiene cinco anos." },
        { es: "la hija", fr: "la fille", exemple: "La hija estudia mucho." },
        { es: "el bebe", fr: "le bebe", exemple: "El bebe duerme." },
        { es: "la familia", fr: "la famille", exemple: "Me encanta mi familia." },
      ],
      intermediaire: [
        { es: "el tio", fr: "l'oncle", exemple: "Mi tio vive en Madrid." },
        { es: "la tia", fr: "la tante", exemple: "La tia viene manana." },
        { es: "el primo", fr: "le cousin", exemple: "Mi primo es mayor." },
        { es: "la prima", fr: "la cousine", exemple: "La prima es divertida." },
        { es: "el sobrino", fr: "le neveu", exemple: "El sobrino tiene dos anos." },
        { es: "la sobrina", fr: "la niece", exemple: "La sobrina es adorable." },
        { es: "el marido", fr: "le mari", exemple: "Su marido es medico." },
        { es: "la mujer", fr: "la femme", exemple: "Su mujer es profesora." },
        { es: "los gemelos", fr: "les jumeaux", exemple: "Los gemelos son identicos." },
        { es: "el padrino", fr: "le parrain", exemple: "El padrino es generoso." },
      ],
      avance: [
        { es: "el suegro", fr: "le beau-pere", exemple: "Mi suegro es simpatico." },
        { es: "la suegra", fr: "la belle-mere", exemple: "La suegra cocina bien." },
        { es: "el cunado", fr: "le beau-frere", exemple: "Mi cunado es ingeniero." },
        { es: "la nuera", fr: "la belle-fille", exemple: "La nuera llego ayer." },
        { es: "el yerno", fr: "le gendre", exemple: "El yerno es muy amable." },
        { es: "el bisabuelo", fr: "l'arriere-grand-pere", exemple: "El bisabuelo tiene 95 anos." },
        { es: "el heredero", fr: "l'heritier", exemple: "Es el heredero de la empresa." },
        { es: "el huerfano", fr: "l'orphelin", exemple: "El nino es huerfano." },
        { es: "el tutor", fr: "le tuteur", exemple: "El tutor firma los papeles." },
        { es: "el conyuge", fr: "le conjoint", exemple: "El conyuge debe firmar." },
      ],
    },
  },
  couleurs: {
    nom: "Couleurs & Chiffres", icone: "🎨",
    niveaux: {
      debutant: [
        { es: "rojo", fr: "rouge", exemple: "El tomate es rojo." },
        { es: "azul", fr: "bleu", exemple: "El cielo es azul." },
        { es: "verde", fr: "vert", exemple: "La hierba es verde." },
        { es: "amarillo", fr: "jaune", exemple: "El sol es amarillo." },
        { es: "blanco", fr: "blanc", exemple: "La nieve es blanca." },
        { es: "negro", fr: "noir", exemple: "La noche es negra." },
        { es: "uno", fr: "un", exemple: "Tengo un gato." },
        { es: "dos", fr: "deux", exemple: "Dos mas dos son cuatro." },
        { es: "tres", fr: "trois", exemple: "Hay tres personas." },
        { es: "cuatro", fr: "quatre", exemple: "Una mesa tiene cuatro patas." },
      ],
      intermediaire: [
        { es: "naranja", fr: "orange", exemple: "La naranja es naranja." },
        { es: "morado", fr: "violet", exemple: "Las uvas son moradas." },
        { es: "rosa", fr: "rose", exemple: "Las flores son rosas." },
        { es: "gris", fr: "gris", exemple: "El elefante es gris." },
        { es: "marron", fr: "marron", exemple: "El oso es marron." },
        { es: "diez", fr: "dix", exemple: "Tengo diez dedos." },
        { es: "veinte", fr: "vingt", exemple: "Veinte euros, por favor." },
        { es: "cincuenta", fr: "cinquante", exemple: "Cincuenta personas." },
        { es: "cien", fr: "cent", exemple: "Cien kilometros." },
        { es: "mil", fr: "mille", exemple: "Mil personas en el estadio." },
      ],
      avance: [
        { es: "turquesa", fr: "turquoise", exemple: "El mar es turquesa." },
        { es: "burdeos", fr: "bordeaux", exemple: "Una camisa burdeos." },
        { es: "dorado", fr: "dore", exemple: "Un anillo dorado." },
        { es: "plateado", fr: "argente", exemple: "Un collar plateado." },
        { es: "beige", fr: "beige", exemple: "Un abrigo beige." },
        { es: "un millon", fr: "un million", exemple: "Un millon de personas." },
        { es: "el doble", fr: "le double", exemple: "El doble de lo esperado." },
        { es: "la mitad", fr: "la moitie", exemple: "La mitad del pastel." },
        { es: "ambos", fr: "les deux", exemple: "Ambos tienen razon." },
        { es: "el triple", fr: "le triple", exemple: "Cuesta el triple." },
      ],
    },
  },
  expressions: {
    nom: "Expressions courantes", icone: "💬",
    niveaux: {
      debutant: [
        { es: "hola", fr: "bonjour / salut", exemple: "Hola! Como estas?" },
        { es: "gracias", fr: "merci", exemple: "Muchas gracias." },
        { es: "por favor", fr: "s'il vous plait", exemple: "Un cafe, por favor." },
        { es: "adios", fr: "au revoir", exemple: "Adios! Hasta luego." },
        { es: "si", fr: "oui", exemple: "Si, claro." },
        { es: "no", fr: "non", exemple: "No, gracias." },
        { es: "como estas?", fr: "comment vas-tu ?", exemple: "Hola, como estas?" },
        { es: "bien", fr: "bien", exemple: "Estoy muy bien." },
        { es: "lo siento", fr: "je suis desole", exemple: "Lo siento mucho." },
        { es: "de nada", fr: "de rien", exemple: "Gracias. De nada." },
      ],
      intermediaire: [
        { es: "donde esta?", fr: "ou est-ce ?", exemple: "Donde esta el bano?" },
        { es: "cuanto cuesta?", fr: "combien ca coute ?", exemple: "Cuanto cuesta esto?" },
        { es: "no entiendo", fr: "je ne comprends pas", exemple: "No entiendo, puede repetir?" },
        { es: "mas despacio", fr: "plus lentement", exemple: "Hable mas despacio, por favor." },
        { es: "habla frances?", fr: "parlez-vous francais ?", exemple: "Habla frances, por favor?" },
        { es: "me llamo...", fr: "je m'appelle...", exemple: "Me llamo Maria." },
        { es: "como se llama?", fr: "comment vous appelez-vous ?", exemple: "Como se llama usted?" },
        { es: "tengo hambre", fr: "j'ai faim", exemple: "Tengo mucha hambre." },
        { es: "tengo sed", fr: "j'ai soif", exemple: "Tengo sed, hay agua?" },
        { es: "estoy perdido", fr: "je suis perdu", exemple: "Estoy perdido, puede ayudarme?" },
      ],
      avance: [
        { es: "a ver si nos vemos", fr: "on se voit bientot j'espere", exemple: "A ver si nos vemos pronto!" },
        { es: "no hay de que", fr: "il n'y a pas de quoi", exemple: "Gracias. No hay de que." },
        { es: "que tal!", fr: "ca va ?", exemple: "Eh! Que tal todo?" },
        { es: "ahora mismo", fr: "tout de suite", exemple: "Voy ahora mismo." },
        { es: "a proposito", fr: "a propos", exemple: "A proposito, viste la pelicula?" },
        { es: "sin embargo", fr: "cependant", exemple: "Es dificil, sin embargo posible." },
        { es: "desde luego", fr: "bien sur", exemple: "Desde luego que vengo." },
        { es: "en cuanto a", fr: "en ce qui concerne", exemple: "En cuanto a tu pregunta..." },
        { es: "mas o menos", fr: "plus ou moins", exemple: "Son mas o menos iguales." },
        { es: "por supuesto", fr: "bien sur", exemple: "Por supuesto que si!" },
      ],
    },
  },
};

const NIVEAUX_CONFIG = {
  debutant:      { nom: "Debutant",      icone: "🌱", classe: "easy",   desc: "Vocabulaire essentiel" },
  intermediaire: { nom: "Intermediaire", icone: "🔥", classe: "medium", desc: "Elargissez votre vocabulaire" },
  avance:        { nom: "Avance",        icone: "⚡", classe: "hard",   desc: "Expressions complexes" },
};

const PREREQUIS = {
  debutant:      null,
  intermediaire: "debutant",
  avance:        "intermediaire",
};

let state = {
  themeActuel: null,
  niveauActuel: null,
  cartes: [],
  indexActuel: 0,
  scoreOui: 0,
  scoreNon: 0,
  estRetournee: false,
};

const STORAGE_KEY = "espafacil_progress";

function chargerProgression() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function sauvegarderProgression(theme, niveau, bon, total) {
  const prog = chargerProgression();
  if (!prog[theme]) prog[theme] = {};
  prog[theme][niveau] = { bon, total, date: new Date().toLocaleDateString("fr-FR") };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prog));
}

function estDebloque(themeCle, niveauCle) {
  const prerequis = PREREQUIS[niveauCle];
  if (!prerequis) return true;
  const prog = chargerProgression();
  return !!(prog[themeCle]?.[prerequis]);
}

function afficherEcran(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function initAccueil() {
  const prog = chargerProgression();
  const grid = document.getElementById("theme-grid");
  grid.innerHTML = "";

  const summaryEl = document.getElementById("progress-summary");
  const themes = Object.keys(prog);
  if (themes.length > 0) {
    summaryEl.classList.add("visible");
    const tags = Object.entries(prog).map(([theme, niveaux]) => {
      const total = Object.values(niveaux).reduce((a, n) => a + n.total, 0);
      const bon   = Object.values(niveaux).reduce((a, n) => a + n.bon, 0);
      const pct   = Math.round((bon / total) * 100);
      return `<span class="progress-tag">${DATA[theme].icone} ${DATA[theme].nom} - ${pct}%</span>`;
    }).join("");
    summaryEl.innerHTML = `<h3>Votre progression</h3><div class="progress-tags">${tags}</div>`;
  } else {
    summaryEl.classList.remove("visible");
  }

  Object.entries(DATA).forEach(([cle, theme]) => {
    const progTheme  = prog[cle] || {};
    const totalCartes = Object.values(theme.niveaux).reduce((a, n) => a + n.length, 0);
    const cartesVues  = Object.values(progTheme).reduce((a, n) => a + n.total, 0);
    const pct = totalCartes > 0 ? Math.round((cartesVues / totalCartes) * 100) : 0;

    const card = document.createElement("div");
    card.className = "theme-card";
    card.innerHTML = `
      <span class="theme-card-icon">${theme.icone}</span>
      <p class="theme-card-name">${theme.nom}</p>
      <p class="theme-card-count">${totalCartes} cartes</p>
      <div class="theme-card-progress">
        <div class="theme-card-progress-fill" style="width:${pct}%"></div>
      </div>`;
    card.addEventListener("click", () => ouvrirNiveaux(cle));
    grid.appendChild(card);
  });
}

function ouvrirNiveaux(themeCle) {
  state.themeActuel = themeCle;
  const theme = DATA[themeCle];
  const prog  = chargerProgression();

  document.getElementById("level-theme-icon").textContent = theme.icone;
  document.getElementById("level-theme-name").textContent = theme.nom;

  const container = document.getElementById("level-cards");
  container.innerHTML = "";

  Object.entries(NIVEAUX_CONFIG).forEach(([cle, config]) => {
    const saved    = prog[themeCle]?.[cle];
    const nbCartes = theme.niveaux[cle].length;
    const debloque = estDebloque(themeCle, cle);

    let metaHtml;
    if (!debloque) {
      const prerequisNom = NIVEAUX_CONFIG[PREREQUIS[cle]].nom;
      metaHtml = `<div class="level-card-locked-msg">Terminez "${prerequisNom}"</div>`;
    } else if (saved) {
      metaHtml = `<div class="level-card-score">${saved.bon}/${saved.total} correctes</div>
                  <div class="level-card-cards">Derniere session : ${saved.date}</div>`;
    } else {
      metaHtml = `<div class="level-card-cards">${nbCartes} cartes</div>`;
    }

    const card = document.createElement("div");
    card.className = "level-card" + (debloque ? "" : " level-card--locked");
    card.innerHTML = `
      <div class="level-card-left">
        <div class="level-badge ${config.classe}">${debloque ? config.icone : "🔒"}</div>
        <div>
          <div class="level-card-name">${config.nom}</div>
          <div class="level-card-desc">${config.desc}</div>
        </div>
      </div>
      <div class="level-card-meta">${metaHtml}</div>`;
    if (debloque) card.addEventListener("click", () => demarrerSession(cle));
    container.appendChild(card);
  });

  afficherEcran("screen-level");
}

function demarrerSession(niveauCle) {
  state.niveauActuel = niveauCle;
  const theme  = DATA[state.themeActuel];
  const cartes = [...theme.niveaux[niveauCle]];

  for (let i = cartes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartes[i], cartes[j]] = [cartes[j], cartes[i]];
  }

  state.cartes       = cartes;
  state.indexActuel  = 0;
  state.scoreOui     = 0;
  state.scoreNon     = 0;
  state.estRetournee = false;

  document.getElementById("session-theme-label").textContent = theme.icone + " " + theme.nom;
  document.getElementById("session-level-badge").textContent = NIVEAUX_CONFIG[niveauCle].nom;

  afficherEcran("screen-session");
  afficherCarte();
}

function afficherCarte() {
  const carte = state.cartes[state.indexActuel];
  const total = state.cartes.length;
  const index = state.indexActuel;

  document.getElementById("flashcard").classList.remove("is-flipped");
  state.estRetournee = false;
  document.getElementById("answer-buttons").classList.remove("visible");

  document.getElementById("card-word-front").textContent = carte.es;
  document.getElementById("card-word-back").textContent  = carte.fr;
  document.getElementById("card-example").textContent    = carte.exemple;
  document.getElementById("card-counter").textContent    = "Carte " + (index + 1) + " / " + total;
  document.getElementById("progress-bar").style.width    = ((index / total) * 100) + "%";
  document.getElementById("score-good").textContent      = "✓ " + state.scoreOui;
  document.getElementById("score-bad").textContent       = "✗ " + state.scoreNon;
}

function retournerCarte() {
  if (state.estRetournee) return;
  state.estRetournee = true;
  document.getElementById("flashcard").classList.add("is-flipped");
  setTimeout(() => {
    document.getElementById("answer-buttons").classList.add("visible");
  }, 300);
}

function repondre(savait) {
  if (savait) state.scoreOui++;
  else state.scoreNon++;
  state.indexActuel++;
  if (state.indexActuel >= state.cartes.length) terminerSession();
  else afficherCarte();
}

function terminerSession() {
  const total = state.cartes.length;
  const bon   = state.scoreOui;
  const pct   = Math.round((bon / total) * 100);

  sauvegarderProgression(state.themeActuel, state.niveauActuel, bon, total);

  let emoji, titre, sous;
  if (pct >= 90)      { emoji = "🏆"; titre = "Excellent !";     sous = "Vous maitrisez parfaitement ce niveau."; }
  else if (pct >= 70) { emoji = "🌟"; titre = "Tres bien !";     sous = "Encore un peu de pratique et ce sera parfait."; }
  else if (pct >= 50) { emoji = "💪"; titre = "Bon effort !";    sous = "Continuez, vous progressez."; }
  else                { emoji = "📚"; titre = "A retravailler";  sous = "Recommencez ce niveau pour consolider les bases."; }

  document.getElementById("results-emoji").textContent    = emoji;
  document.getElementById("results-title").textContent    = titre;
  document.getElementById("results-subtitle").textContent = sous;
  document.getElementById("result-good").textContent      = bon;
  document.getElementById("result-bad").textContent       = total - bon;
  document.getElementById("result-score").textContent     = pct + "%";
  document.getElementById("progress-bar").style.width     = "100%";

  afficherEcran("screen-results");
}

document.addEventListener("DOMContentLoaded", () => {
  initAccueil();

  document.getElementById("back-to-home").addEventListener("click", () => {
    afficherEcran("screen-home");
    initAccueil();
  });

  document.getElementById("back-to-level").addEventListener("click", () => {
    ouvrirNiveaux(state.themeActuel);
  });

  document.getElementById("flashcard-scene").addEventListener("click", retournerCarte);

  document.getElementById("btn-knew").addEventListener("click",  () => repondre(true));
  document.getElementById("btn-didnt").addEventListener("click", () => repondre(false));

  document.getElementById("btn-retry").addEventListener("click", () => {
    demarrerSession(state.niveauActuel);
  });

  document.getElementById("btn-home").addEventListener("click", () => {
    afficherEcran("screen-home");
    initAccueil();
  });
});

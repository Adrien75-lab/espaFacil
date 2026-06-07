
// =============================================
// DONNÉES - 10 thèmes x 3 niveaux x 10 cartes
// =============================================
const DATA = {
  nourriture: {
    nom: "Nourriture",
    icone: "🍕",
    debutant: [
      { es: "el pan", fr: "le pain", ex: "Quiero pan, por favor." },
      { es: "el agua", fr: "l'eau", ex: "El agua esta fria." },
      { es: "la leche", fr: "le lait", ex: "Me gusta la leche." },
      { es: "el cafe", fr: "le cafe", ex: "Un cafe, por favor." },
      { es: "la fruta", fr: "le fruit", ex: "La fruta es sana." },
      { es: "el arroz", fr: "le riz", ex: "Me gusta el arroz." },
      { es: "el huevo", fr: "l'oeuf", ex: "Dos huevos, por favor." },
      { es: "la carne", fr: "la viande", ex: "La carne esta rica." },
      { es: "el queso", fr: "le fromage", ex: "Me encanta el queso." },
      { es: "la sopa", fr: "la soupe", ex: "La sopa esta caliente." }
    ],
    intermediaire: [
      { es: "el desayuno", fr: "le petit-dejeuner", ex: "El desayuno es importante." },
      { es: "la cena", fr: "le diner", ex: "La cena es a las nueve." },
      { es: "el almuerzo", fr: "le dejeuner", ex: "El almuerzo es a mediodia." },
      { es: "la ensalada", fr: "la salade", ex: "Una ensalada mixta." },
      { es: "el postre", fr: "le dessert", ex: "Quiero postre." },
      { es: "la bebida", fr: "la boisson", ex: "Que bebida quieres?" },
      { es: "el jugo", fr: "le jus", ex: "Jugo de naranja, por favor." },
      { es: "el helado", fr: "la glace", ex: "El helado es delicioso." },
      { es: "la pizza", fr: "la pizza", ex: "La pizza esta buenisima." },
      { es: "el sandwich", fr: "le sandwich", ex: "Un sandwich de jamon." }
    ],
    avance: [
      { es: "los mariscos", fr: "les fruits de mer", ex: "Los mariscos son frescos." },
      { es: "el cordero", fr: "l'agneau", ex: "El cordero asado es exquisito." },
      { es: "la salchicha", fr: "la saucisse", ex: "La salchicha con mostaza." },
      { es: "la mantequilla", fr: "le beurre", ex: "Pan con mantequilla." },
      { es: "la harina", fr: "la farine", ex: "Necesito harina para el pastel." },
      { es: "el vinagre", fr: "le vinaigre", ex: "Vinagre balsamico." },
      { es: "el aceite", fr: "l'huile", ex: "Aceite de oliva virgen." },
      { es: "la crema", fr: "la creme", ex: "Crema de champiñones." },
      { es: "el mejillon", fr: "la moule", ex: "Mejillones al vapor." },
      { es: "el salmon", fr: "le saumon", ex: "Salmon a la plancha." }
    ]
  },
  maison: {
    nom: "Maison",
    icone: "🏠",
    debutant: [
      { es: "la casa", fr: "la maison", ex: "Mi casa es grande." },
      { es: "la puerta", fr: "la porte", ex: "Abre la puerta." },
      { es: "la ventana", fr: "la fenetre", ex: "La ventana esta abierta." },
      { es: "la mesa", fr: "la table", ex: "La mesa es de madera." },
      { es: "la silla", fr: "la chaise", ex: "Siéntate en la silla." },
      { es: "la cama", fr: "le lit", ex: "La cama es comoda." },
      { es: "el bano", fr: "la salle de bain", ex: "El bano esta aqui." },
      { es: "la cocina", fr: "la cuisine", ex: "Me gusta cocinar." },
      { es: "el salon", fr: "le salon", ex: "Vemos TV en el salon." },
      { es: "el suelo", fr: "le sol", ex: "El suelo esta limpio." }
    ],
    intermediaire: [
      { es: "el dormitorio", fr: "la chambre", ex: "El dormitorio es tranquilo." },
      { es: "el armario", fr: "l'armoire", ex: "La ropa esta en el armario." },
      { es: "la lampara", fr: "la lampe", ex: "Enciende la lampara." },
      { es: "el espejo", fr: "le miroir", ex: "Me miro en el espejo." },
      { es: "la alfombra", fr: "le tapis", ex: "La alfombra roja." },
      { es: "el sotano", fr: "le sous-sol", ex: "El sotano esta oscuro." },
      { es: "el tejado", fr: "le toit", ex: "El tejado tiene goteras." },
      { es: "el pasillo", fr: "le couloir", ex: "El pasillo es largo." },
      { es: "el jardin", fr: "le jardin", ex: "El jardin es bonito." },
      { es: "el garaje", fr: "le garage", ex: "El coche esta en el garaje." }
    ],
    avance: [
      { es: "la chimenea", fr: "la cheminee", ex: "La chimenea da calor." },
      { es: "el umbral", fr: "le seuil", ex: "Parate en el umbral." },
      { es: "la barandilla", fr: "la rampe", ex: "Agarra la barandilla." },
      { es: "el tabique", fr: "la cloison", ex: "El tabique es delgado." },
      { es: "la cerradura", fr: "la serrure", ex: "La cerradura esta rota." },
      { es: "el interruptor", fr: "l'interrupteur", ex: "Pulsa el interruptor." },
      { es: "el enchufe", fr: "la prise", ex: "El enchufe no funciona." },
      { es: "el tragaluz", fr: "le velux", ex: "El tragaluz deja pasar luz." },
      { es: "el radiador", fr: "le radiateur", ex: "Pon el radiador al maximo." },
      { es: "la persiana", fr: "le volet", ex: "Baja la persiana." }
    ]
  },
  transport: {
    nom: "Transport",
    icone: "🚗",
    debutant: [
      { es: "el coche", fr: "la voiture", ex: "Mi coche es rapido." },
      { es: "el bus", fr: "le bus", ex: "Cojo el bus cada dia." },
      { es: "el tren", fr: "le train", ex: "El tren llega tarde." },
      { es: "el avion", fr: "l'avion", ex: "El avion vuela alto." },
      { es: "la bici", fr: "le velo", ex: "Voy en bici al trabajo." },
      { es: "el metro", fr: "le metro", ex: "El metro es rapido." },
      { es: "el taxi", fr: "le taxi", ex: "Llama un taxi." },
      { es: "el barco", fr: "le bateau", ex: "El barco navega." },
      { es: "la moto", fr: "la moto", ex: "Me gusta la moto." },
      { es: "el camion", fr: "le camion", ex: "El camion es grande." }
    ],
    intermediaire: [
      { es: "el aeropuerto", fr: "l'aeroport", ex: "Vamos al aeropuerto." },
      { es: "la estacion", fr: "la gare", ex: "La estacion esta lejos." },
      { es: "el billete", fr: "le billet", ex: "Compra el billete." },
      { es: "el semaforo", fr: "le feu tricolore", ex: "Para en el semaforo." },
      { es: "la autopista", fr: "l'autoroute", ex: "La autopista esta llena." },
      { es: "el volante", fr: "le volant", ex: "Agarra el volante." },
      { es: "la gasolina", fr: "l'essence", ex: "Necesito gasolina." },
      { es: "el puente", fr: "le pont", ex: "Cruzamos el puente." },
      { es: "el tunel", fr: "le tunnel", ex: "El tunel es oscuro." },
      { es: "el parking", fr: "le parking", ex: "Busco parking." }
    ],
    avance: [
      { es: "la rotonda", fr: "le rond-point", ex: "Gira en la rotonda." },
      { es: "el carril bici", fr: "la piste cyclable", ex: "Hay un carril bici nuevo." },
      { es: "el peaje", fr: "le peage", ex: "Paga el peaje." },
      { es: "el velocimetro", fr: "le compteur de vitesse", ex: "Mira el velocimetro." },
      { es: "el retrovisior", fr: "le retroviseur", ex: "Ajusta el retrovisor." },
      { es: "el embrague", fr: "l'embrayage", ex: "Suelta el embrague." },
      { es: "el intermitente", fr: "le clignotant", ex: "Pon el intermitente." },
      { es: "el freno", fr: "le frein", ex: "Pisa el freno." },
      { es: "el acelerador", fr: "l'accelerateur", ex: "Pisa el acelerador." },
      { es: "la grua", fr: "la depanneuse", ex: "Llama a la grua." }
    ]
  },
  famille: {
    nom: "Famille",
    icone: "👨‍👩‍👧",
    debutant: [
      { es: "la madre", fr: "la mere", ex: "Mi madre es profesora." },
      { es: "el padre", fr: "le pere", ex: "Mi padre trabaja mucho." },
      { es: "el hijo", fr: "le fils", ex: "Tengo un hijo." },
      { es: "la hija", fr: "la fille", ex: "Mi hija es lista." },
      { es: "el hermano", fr: "le frere", ex: "Tengo dos hermanos." },
      { es: "la hermana", fr: "la soeur", ex: "Mi hermana vive lejos." },
      { es: "el abuelo", fr: "le grand-pere", ex: "Mi abuelo es mayor." },
      { es: "la abuela", fr: "la grand-mere", ex: "La abuela cocina bien." },
      { es: "el bebe", fr: "le bebe", ex: "El bebe llora." },
      { es: "el nino", fr: "l'enfant", ex: "El nino juega." }
    ],
    intermediaire: [
      { es: "el primo", fr: "le cousin", ex: "Mi primo vive en Madrid." },
      { es: "el tio", fr: "l'oncle", ex: "Mi tio es medico." },
      { es: "la tia", fr: "la tante", ex: "Mi tia es divertida." },
      { es: "el sobrino", fr: "le neveu", ex: "Mi sobrino es travieso." },
      { es: "los gemelos", fr: "les jumeaux", ex: "Son gemelos identicos." },
      { es: "el novio", fr: "le petit ami", ex: "Mi novio es guapo." },
      { es: "la novia", fr: "la petite amie", ex: "Mi novia es inteligente." },
      { es: "el marido", fr: "le mari", ex: "Mi marido cocina bien." },
      { es: "la esposa", fr: "l'epouse", ex: "Mi esposa es medica." },
      { es: "los padres", fr: "les parents", ex: "Mis padres son mayores." }
    ],
    avance: [
      { es: "el yerno", fr: "le gendre", ex: "El yerno es simpatico." },
      { es: "la nuera", fr: "la belle-fille", ex: "La nuera es encantadora." },
      { es: "el cuñado", fr: "le beau-frere", ex: "El cuñado es generoso." },
      { es: "el padrino", fr: "le parrain", ex: "El padrino es rico." },
      { es: "la madrina", fr: "la marraine", ex: "La madrina es buena." },
      { es: "el ahijado", fr: "le filleul", ex: "Mi ahijado es listo." },
      { es: "el bisabuelo", fr: "l'arriere grand-pere", ex: "El bisabuelo vive aqui." },
      { es: "el heredero", fr: "l'heritier", ex: "El heredero del trono." },
      { es: "los antepasados", fr: "les ancetres", ex: "Mis antepasados son españoles." },
      { es: "la descendencia", fr: "la descendance", ex: "La descendencia real." }
    ]
  },
  couleurs: {
    nom: "Couleurs",
    icone: "🎨",
    debutant: [
      { es: "rojo", fr: "rouge", ex: "El cielo es rojo." },
      { es: "azul", fr: "bleu", ex: "El mar es azul." },
      { es: "verde", fr: "vert", ex: "La hierba es verde." },
      { es: "amarillo", fr: "jaune", ex: "El sol es amarillo." },
      { es: "blanco", fr: "blanc", ex: "La nieve es blanca." },
      { es: "negro", fr: "noir", ex: "El carbon es negro." },
      { es: "naranja", fr: "orange", ex: "La naranja es naranja." },
      { es: "rosa", fr: "rose", ex: "Las flores son rosas." },
      { es: "morado", fr: "violet", ex: "Las uvas son moradas." },
      { es: "gris", fr: "gris", ex: "El elefante es gris." }
    ],
    intermediaire: [
      { es: "celeste", fr: "bleu ciel", ex: "El cielo es celeste." },
      { es: "marron", fr: "marron", ex: "El oso es marron." },
      { es: "dorado", fr: "dore", ex: "El anillo es dorado." },
      { es: "plateado", fr: "argente", ex: "La luna es plateada." },
      { es: "turquesa", fr: "turquoise", ex: "El mar turquesa." },
      { es: "carmesi", fr: "cramoisi", ex: "Una rosa carmesi." },
      { es: "beige", fr: "beige", ex: "Las paredes son beige." },
      { es: "malva", fr: "mauve", ex: "Una blusa malva." },
      { es: "ocre", fr: "ocre", ex: "Paredes de color ocre." },
      { es: "escarlata", fr: "ecarlate", ex: "Una bufanda escarlata." }
    ],
    avance: [
      { es: "azul marino", fr: "bleu marine", ex: "Un traje azul marino." },
      { es: "verde oliva", fr: "vert olive", ex: "Una chaqueta verde oliva." },
      { es: "burdeos", fr: "bordeaux", ex: "Un vestido burdeos." },
      { es: "champan", fr: "champagne", ex: "Color champan elegante." },
      { es: "cobalto", fr: "cobalt", ex: "Azul cobalto intenso." },
      { es: "magenta", fr: "magenta", ex: "Rosa magenta brillante." },
      { es: "añil", fr: "indigo", ex: "Un añil profundo." },
      { es: "terracota", fr: "terre cuite", ex: "Jarron de terracota." },
      { es: "alabastro", fr: "albatre", ex: "Blanco alabastro puro." },
      { es: "cobre", fr: "cuivre", ex: "Lamparitas de cobre." }
    ]
  },
  expressions: {
    nom: "Expressions",
    icone: "💬",
    debutant: [
      { es: "hola", fr: "bonjour / salut", ex: "Hola, ¿como estas?" },
      { es: "adios", fr: "au revoir", ex: "Adios, hasta luego." },
      { es: "gracias", fr: "merci", ex: "Muchas gracias." },
      { es: "por favor", fr: "s'il vous plait", ex: "Un cafe, por favor." },
      { es: "si", fr: "oui", ex: "Si, me gusta." },
      { es: "no", fr: "non", ex: "No, gracias." },
      { es: "buenos dias", fr: "bonjour (matin)", ex: "Buenos dias, señor." },
      { es: "buenas noches", fr: "bonne nuit", ex: "Buenas noches, hasta mañana." },
      { es: "lo siento", fr: "je suis desole", ex: "Lo siento mucho." },
      { es: "de nada", fr: "de rien", ex: "De nada, con gusto." }
    ],
    intermediaire: [
      { es: "¿como estas?", fr: "comment vas-tu?", ex: "Hola, ¿como estas hoy?" },
      { es: "muy bien", fr: "tres bien", ex: "Estoy muy bien, gracias." },
      { es: "¿donde esta?", fr: "où est?", ex: "¿Donde esta el banco?" },
      { es: "no entiendo", fr: "je ne comprends pas", ex: "No entiendo la pregunta." },
      { es: "habla mas despacio", fr: "parlez plus lentement", ex: "Por favor, habla mas despacio." },
      { es: "¿cuanto cuesta?", fr: "combien ca coute?", ex: "¿Cuanto cuesta este libro?" },
      { es: "me llamo", fr: "je m'appelle", ex: "Me llamo Carlos." },
      { es: "mucho gusto", fr: "enchante", ex: "Mucho gusto en conocerte." },
      { es: "¿que hora es?", fr: "quelle heure est-il?", ex: "¿Que hora es, por favor?" },
      { es: "tengo hambre", fr: "j'ai faim", ex: "Tengo hambre, ¿comemos?" }
    ],
    avance: [
      { es: "en cambio", fr: "en revanche", ex: "En cambio, el otro es mejor." },
      { es: "sin embargo", fr: "neanmoins", ex: "Sin embargo, hay esperanza." },
      { es: "a pesar de", fr: "malgre", ex: "A pesar del frio, salimos." },
      { es: "por lo tanto", fr: "par consequent", ex: "Por lo tanto, no vamos." },
      { es: "de hecho", fr: "en fait", ex: "De hecho, ya lo sabia." },
      { es: "en cuanto a", fr: "en ce qui concerne", ex: "En cuanto a eso, no se." },
      { es: "al fin y al cabo", fr: "en fin de compte", ex: "Al fin y al cabo, todo bien." },
      { es: "a grandes rasgos", fr: "en gros", ex: "A grandes rasgos, funciona." },
      { es: "en resumidas cuentas", fr: "en resume", ex: "En resumidas cuentas, perfecto." },
      { es: "si no me equivoco", fr: "si je ne me trompe pas", ex: "Si no me equivoco, tiene razon." }
    ]
  },
  corps: {
    nom: "Corps",
    icone: "💪",
    debutant: [
      { es: "la cabeza", fr: "la tete", ex: "Me duele la cabeza." },
      { es: "el ojo", fr: "l'oeil", ex: "Tiene los ojos azules." },
      { es: "la mano", fr: "la main", ex: "Dame la mano." },
      { es: "el pie", fr: "le pied", ex: "Me duele el pie." },
      { es: "la boca", fr: "la bouche", ex: "Abre la boca." },
      { es: "la nariz", fr: "le nez", ex: "Tienes la nariz roja." },
      { es: "la oreja", fr: "l'oreille", ex: "Habla en mi oreja." },
      { es: "el pelo", fr: "les cheveux", ex: "Tiene el pelo largo." },
      { es: "el brazo", fr: "le bras", ex: "El brazo me duele." },
      { es: "la pierna", fr: "la jambe", ex: "Me rompí la pierna." }
    ],
    intermediaire: [
      { es: "el hombro", fr: "l'epaule", ex: "Me duele el hombro." },
      { es: "el codo", fr: "le coude", ex: "Se golpeo el codo." },
      { es: "la rodilla", fr: "le genou", ex: "Me duele la rodilla." },
      { es: "el tobillo", fr: "la cheville", ex: "Me torci el tobillo." },
      { es: "la espalda", fr: "le dos", ex: "Me duele la espalda." },
      { es: "el pecho", fr: "la poitrine", ex: "Siento presion en el pecho." },
      { es: "el cuello", fr: "le cou", ex: "Tengo el cuello rigido." },
      { es: "la mejilla", fr: "la joue", ex: "Tiene las mejillas rojas." },
      { es: "la frente", fr: "le front", ex: "Tiene la frente caliente." },
      { es: "el dedo", fr: "le doigt", ex: "Se corto el dedo." }
    ],
    avance: [
      { es: "el pulmon", fr: "le poumon", ex: "Los pulmones respiran." },
      { es: "el corazon", fr: "le coeur", ex: "El corazon late fuerte." },
      { es: "el higado", fr: "le foie", ex: "El higado filtra toxinas." },
      { es: "el rinon", fr: "le rein", ex: "Tiene problemas de rinon." },
      { es: "la columna", fr: "la colonne vertebrale", ex: "Cuida tu columna." },
      { es: "el tendón", fr: "le tendon", ex: "Se rompió el tendon." },
      { es: "la arteria", fr: "l'artere", ex: "La arteria principal." },
      { es: "el pancreas", fr: "le pancreas", ex: "El pancreas regula el azucar." },
      { es: "el musculo", fr: "le muscle", ex: "Tiene muchos musculos." },
      { es: "el esqueleto", fr: "le squelette", ex: "El esqueleto humano." }
    ]
  },
  animaux: {
    nom: "Animaux",
    icone: "🐾",
    debutant: [
      { es: "el perro", fr: "le chien", ex: "El perro ladra." },
      { es: "el gato", fr: "le chat", ex: "El gato ronronea." },
      { es: "el pajaro", fr: "l'oiseau", ex: "El pajaro canta." },
      { es: "el caballo", fr: "le cheval", ex: "El caballo galopa." },
      { es: "el pez", fr: "le poisson", ex: "El pez nada rapido." },
      { es: "la vaca", fr: "la vache", ex: "La vaca da leche." },
      { es: "el cerdo", fr: "le cochon", ex: "El cerdo come mucho." },
      { es: "la oveja", fr: "le mouton", ex: "La oveja tiene lana." },
      { es: "el conejo", fr: "le lapin", ex: "El conejo salta." },
      { es: "la gallina", fr: "la poule", ex: "La gallina pone huevos." }
    ],
    intermediaire: [
      { es: "el leon", fr: "le lion", ex: "El leon ruge fuerte." },
      { es: "el elefante", fr: "l'elephant", ex: "El elefante es enorme." },
      { es: "el delfin", fr: "le dauphin", ex: "El delfin es inteligente." },
      { es: "la serpiente", fr: "le serpent", ex: "La serpiente es peligrosa." },
      { es: "el aguila", fr: "l'aigle", ex: "El aguila vuela alto." },
      { es: "el oso", fr: "l'ours", ex: "El oso hiberna." },
      { es: "el lobo", fr: "le loup", ex: "El lobo aulla." },
      { es: "la tortuga", fr: "la tortue", ex: "La tortuga es lenta." },
      { es: "el mono", fr: "le singe", ex: "El mono trepa arboles." },
      { es: "el tigre", fr: "le tigre", ex: "El tigre es feroz." }
    ],
    avance: [
      { es: "el murcielago", fr: "la chauve-souris", ex: "El murcielago vuela de noche." },
      { es: "el pulpo", fr: "la pieuvre", ex: "El pulpo tiene ocho brazos." },
      { es: "la medusa", fr: "la meduse", ex: "La medusa flota." },
      { es: "el ciervo", fr: "le cerf", ex: "El ciervo tiene cuernos." },
      { es: "la nutria", fr: "la loutre", ex: "La nutria nada bien." },
      { es: "el flamenco", fr: "le flamant rose", ex: "El flamenco es rosado." },
      { es: "el cocodrilo", fr: "le crocodile", ex: "El cocodrilo abre la boca." },
      { es: "el loro", fr: "le perroquet", ex: "El loro habla y habla." },
      { es: "el jabalí", fr: "le sanglier", ex: "El jabali es salvaje." },
      { es: "el canguro", fr: "le kangourou", ex: "El canguro salta lejos." }
    ]
  },
  meteo: {
    nom: "Meteo",
    icone: "⛅",
    debutant: [
      { es: "el sol", fr: "le soleil", ex: "Hace sol hoy." },
      { es: "la lluvia", fr: "la pluie", ex: "Hay mucha lluvia." },
      { es: "el viento", fr: "le vent", ex: "Hace mucho viento." },
      { es: "la nieve", fr: "la neige", ex: "Cae la nieve." },
      { es: "el calor", fr: "la chaleur", ex: "Que calor hace." },
      { es: "el frio", fr: "le froid", ex: "Tengo mucho frio." },
      { es: "la nube", fr: "le nuage", ex: "Hay muchas nubes." },
      { es: "la tormenta", fr: "la tempete", ex: "Viene una tormenta." },
      { es: "el cielo", fr: "le ciel", ex: "El cielo esta despejado." },
      { es: "la niebla", fr: "le brouillard", ex: "Hay niebla esta mañana." }
    ],
    intermediaire: [
      { es: "el trueno", fr: "le tonnerre", ex: "El trueno asusta." },
      { es: "el relampago", fr: "l'eclair", ex: "Vi un relampago." },
      { es: "el granizo", fr: "la grele", ex: "Cayeron piedras de granizo." },
      { es: "la humedad", fr: "l'humidite", ex: "Hay mucha humedad." },
      { es: "el arcoiris", fr: "l'arc-en-ciel", ex: "Que bonito arcoiris." },
      { es: "la sequia", fr: "la secheresse", ex: "La sequia es grave." },
      { es: "la inundacion", fr: "l'inondation", ex: "La inundacion fue fuerte." },
      { es: "el rocion", fr: "la rosee", ex: "El rocio de la mañana." },
      { es: "la helada", fr: "le gel", ex: "Esta noche hay helada." },
      { es: "el temporal", fr: "la tempete", ex: "Un temporal de verano." }
    ],
    avance: [
      { es: "la presion atmosferica", fr: "la pression atmospherique", ex: "La presion baja." },
      { es: "el ciclon", fr: "le cyclone", ex: "Se acerca un ciclon." },
      { es: "el tornado", fr: "la tornade", ex: "Un tornado devastador." },
      { es: "el monzon", fr: "la mousson", ex: "La temporada del monzon." },
      { es: "el deshielo", fr: "la fonte des glaces", ex: "El deshielo glacial." },
      { es: "la ola de calor", fr: "la canicule", ex: "Una ola de calor record." },
      { es: "la borrasca", fr: "la depression", ex: "Una borrasca lluviosa." },
      { es: "la ventisca", fr: "la tempete de neige", ex: "Una ventisca sorpresa." },
      { es: "el calido", fr: "le temps chaud", ex: "Tiempo calido y seco." },
      { es: "el microclima", fr: "le microclimat", ex: "Un microclima especial." }
    ]
  },
  sport: {
    nom: "Sport",
    icone: "⚽",
    debutant: [
      { es: "el futbol", fr: "le football", ex: "Me gusta el futbol." },
      { es: "el tenis", fr: "le tennis", ex: "Juego al tenis." },
      { es: "la natacion", fr: "la natation", ex: "Practico la natacion." },
      { es: "correr", fr: "courir", ex: "Salgo a correr cada dia." },
      { es: "el balon", fr: "le ballon", ex: "Chuta el balon." },
      { es: "ganar", fr: "gagner", ex: "Quiero ganar." },
      { es: "perder", fr: "perdre", ex: "No me gusta perder." },
      { es: "el equipo", fr: "l'equipe", ex: "Mi equipo es el mejor." },
      { es: "jugar", fr: "jouer", ex: "Vamos a jugar." },
      { es: "el partido", fr: "le match", ex: "Vi el partido ayer." }
    ],
    intermediaire: [
      { es: "el arbitro", fr: "l'arbitre", ex: "El arbitro pito falta." },
      { es: "el campeon", fr: "le champion", ex: "Es el campeon del mundo." },
      { es: "el entrenador", fr: "l'entraineur", ex: "El entrenador da ordenes." },
      { es: "el estadio", fr: "le stade", ex: "El estadio esta lleno." },
      { es: "la cancha", fr: "le terrain", ex: "La cancha de baloncesto." },
      { es: "el gol", fr: "le but", ex: "Metio un gol increible." },
      { es: "la carrera", fr: "la course", ex: "La carrera de 100 metros." },
      { es: "el ciclismo", fr: "le cyclisme", ex: "El ciclismo es duro." },
      { es: "el boxeo", fr: "la boxe", ex: "El boxeo requiere fuerza." },
      { es: "el torneo", fr: "le tournoi", ex: "Clasificamos al torneo." }
    ],
    avance: [
      { es: "la gimnasia ritmica", fr: "la gymnastique rythmique", ex: "La gimnasia ritmica es elegante." },
      { es: "el eslalon", fr: "le slalom", ex: "Un eslalon dificil." },
      { es: "el pentathlon", fr: "le pentathlon", ex: "El pentathlon moderno." },
      { es: "la esgrima", fr: "l'escrime", ex: "La esgrima es un arte." },
      { es: "el remo", fr: "l'aviron", ex: "El remo es agotador." },
      { es: "el waterpolo", fr: "le water-polo", ex: "Juego al waterpolo." },
      { es: "el triatlón", fr: "le triathlon", ex: "El triatlon es extremo." },
      { es: "el esqui acuatico", fr: "le ski nautique", ex: "Practico esqui acuatico." },
      { es: "la halterofilia", fr: "l'halterophilie", ex: "La halterofilia exige fuerza." },
      { es: "el tiro con arco", fr: "le tir a l'arc", ex: "El tiro con arco requiere precision." }
    ]
  }
};

const NIVEAUX_CONFIG = {
  debutant:      { nom: "Debutant",      icone: "🌱", classe: "easy",   desc: "Vocabulaire de base" },
  intermediaire: { nom: "Intermediaire", icone: "🔥", classe: "medium", desc: "Vocabulaire courant" },
  avance:        { nom: "Avance",        icone: "⚡", classe: "hard",   desc: "Vocabulaire avance" }
};

const PREREQUIS = {
  debutant: null,
  intermediaire: "debutant",
  avance: "intermediaire"
};

const STORAGE_KEY = "espafacil_progress";

// =============================================
// STATE
// =============================================
let modeJeu = "flip"; // "flip" ou "write"

let state = {
  themeActuel: null,
  niveauActuel: null,
  cartes: [],
  indexActuel: 0,
  scoreOui: 0,
  scoreNon: 0,
  estRetournee: false,
  cartesRatees: [],
  modeRevision: false
};

let writeState = {
  themeActuel: null,
  niveauActuel: null,
  cartes: [],
  indexActuel: 0,
  scoreOui: 0,
  scoreNon: 0,
  cartesRatees: [],
  reponduActuel: false
};

// =============================================
// STOCKAGE
// =============================================
function chargerProgression() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch(e) { return {}; }
}

function sauvegarderProgression(theme, niveau, bon, total) {
  const prog = chargerProgression();
  if (!prog[theme]) prog[theme] = {};
  const ancien = prog[theme][niveau] || { meilleur: 0, totalVu: 0 };
  const pct = Math.round((bon / total) * 100);
  prog[theme][niveau] = {
    meilleur: Math.max(ancien.meilleur, pct),
    totalVu: ancien.totalVu + total,
    derniereSession: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prog));
}

function estDebloque(themeCle, niveauCle) {
  const prerequis = PREREQUIS[niveauCle];
  if (!prerequis) return true;
  const prog = chargerProgression();
  return prog[themeCle] && prog[themeCle][prerequis] && prog[themeCle][prerequis].meilleur >= 50;
}

// =============================================
// NAVIGATION
// =============================================
function afficherEcran(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// =============================================
// ACCUEIL
// =============================================
function initAccueil() {
  const prog = chargerProgression();
  const grid = document.getElementById('theme-grid');
  grid.innerHTML = '';

  Object.entries(DATA).forEach(([cle, theme]) => {
    const niveaux = Object.keys(NIVEAUX_CONFIG);
    const completes = niveaux.filter(n => prog[cle] && prog[cle][n] && prog[cle][n].meilleur >= 50).length;
    const pct = Math.round((completes / niveaux.length) * 100);

    const div = document.createElement('div');
    div.className = 'theme-card';
    div.innerHTML = `
      <span class="theme-card-icon">${theme.icone}</span>
      <div class="theme-card-name">${theme.nom}</div>
      <div class="theme-card-count">30 cartes · 3 niveaux</div>
      <div class="theme-card-progress">
        <div class="theme-card-progress-fill" style="width:${pct}%"></div>
      </div>`;
    div.addEventListener('click', () => ouvrirNiveaux(cle));
    grid.appendChild(div);
  });

  // Résumé progression
  const summary = document.getElementById('progress-summary');
  const touches = Object.entries(prog).filter(([,v]) => Object.keys(v).length > 0);
  if (touches.length > 0) {
    summary.innerHTML = '<h3>Ma progression</h3><div class="progress-tags">' +
      touches.map(([cle, niveaux]) => {
        const best = Object.entries(niveaux).map(([n, d]) => `${NIVEAUX_CONFIG[n].icone} ${d.meilleur}%`).join(' ');
        return `<span class="progress-tag">${DATA[cle].icone} ${DATA[cle].nom}: ${best}</span>`;
      }).join('') + '</div>';
    summary.classList.add('visible');
  } else {
    summary.classList.remove('visible');
  }
}

// =============================================
// NIVEAUX
// =============================================
function ouvrirNiveaux(themeCle) {
  const theme = DATA[themeCle];
  const prog = chargerProgression();
  state.themeActuel = themeCle;

  document.getElementById('level-theme-icon').textContent = theme.icone;
  document.getElementById('level-theme-name').textContent = theme.nom;

  const container = document.getElementById('level-cards');
  container.innerHTML = '';

  Object.entries(NIVEAUX_CONFIG).forEach(([niveauCle, cfg]) => {
    const debloque = estDebloque(themeCle, niveauCle);
    const stats = prog[themeCle] && prog[themeCle][niveauCle];
    const div = document.createElement('div');
    div.className = 'level-card' + (debloque ? '' : ' level-card--locked');

    div.innerHTML = `
      <div class="level-card-left">
        <div class="level-badge ${cfg.classe}">${debloque ? cfg.icone : '🔒'}</div>
        <div>
          <div class="level-card-name">${cfg.nom}</div>
          <div class="level-card-desc">${cfg.desc}</div>
        </div>
      </div>
      <div class="level-card-meta">
        ${debloque
          ? `<div class="level-card-score">${stats ? stats.meilleur + '%' : '--'}</div>
             <div class="level-card-cards">10 cartes</div>`
          : `<div class="level-card-locked-msg">Finissez le niveau precedent</div>`
        }
      </div>`;

    if (debloque) {
      div.addEventListener('click', () => {
        if (modeJeu === 'write') demarrerSessionEcriture(niveauCle);
        else demarrerSession(niveauCle);
      });
    }
    container.appendChild(div);
  });

  afficherEcran('screen-level');
}

// =============================================
// SESSION FLIP
// =============================================
function melanger(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function demarrerSession(niveauCle, cartesRevision) {
  const theme = DATA[state.themeActuel];
  state.niveauActuel = niveauCle;
  state.modeRevision = !!cartesRevision;

  // Répétition espacée : les cartes ratées (sans révision forcée) ont 2 occurrences
  if (cartesRevision) {
    state.cartes = melanger(cartesRevision);
  } else {
    const base = melanger(theme[niveauCle]);
    state.cartes = base;
  }

  state.indexActuel = 0;
  state.scoreOui = 0;
  state.scoreNon = 0;
  state.estRetournee = false;
  state.cartesRatees = [];

  document.getElementById('session-theme-label').textContent = theme.icone + ' ' + theme.nom;
  document.getElementById('session-level-badge').textContent = NIVEAUX_CONFIG[niveauCle].nom;

  afficherEcran('screen-session');
  afficherCarte();
}

function afficherCarte() {
  const carte = state.cartes[state.indexActuel];
  const total = state.cartes.length;

  document.getElementById('card-word-front').textContent = carte.es;
  document.getElementById('card-word-back').textContent = carte.fr;
  document.getElementById('card-example').textContent = carte.ex;
  document.getElementById('card-counter').textContent = 'Carte ' + (state.indexActuel + 1) + ' / ' + total;
  document.getElementById('progress-bar').style.width = (state.indexActuel / total * 100) + '%';
  document.getElementById('score-good').textContent = '✓ ' + state.scoreOui;
  document.getElementById('score-bad').textContent  = '✗ ' + state.scoreNon;

  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('is-flipped');
  state.estRetournee = false;
  document.getElementById('answer-buttons').classList.remove('visible');
}

function retournerCarte() {
  if (state.estRetournee) return;
  state.estRetournee = true;

  const flashcard = document.getElementById('flashcard');
  flashcard.classList.add('is-flipped');
  document.getElementById('answer-buttons').classList.add('visible');

  // Prononciation via Web Speech API
  const carte = state.cartes[state.indexActuel];
  prononcer(carte.es);
}

function prononcer(texte) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(texte);
  utter.lang = 'es-ES';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

function repondre(savait) {
  if (savait) {
    state.scoreOui++;
  } else {
    state.scoreNon++;
    state.cartesRatees.push(state.cartes[state.indexActuel]);
  }

  state.indexActuel++;

  if (state.indexActuel < state.cartes.length) {
    afficherCarte();
  } else {
    terminerSession();
  }
}

function terminerSession() {
  const total = state.cartes.length;
  const bon = state.scoreOui;
  const pct = Math.round((bon / total) * 100);

  if (!state.modeRevision) {
    sauvegarderProgression(state.themeActuel, state.niveauActuel, bon, total);
  }

  document.getElementById('result-good').textContent = bon;
  document.getElementById('result-bad').textContent  = total - bon;
  document.getElementById('result-score').textContent = pct + '%';

  let emoji, titre, sous;
  if (pct >= 90) {
    emoji = '🏆'; titre = 'Excellent !'; sous = 'Parfait, vous maitrisez ce niveau !';
    lancerConfettis();
  } else if (pct >= 70) {
    emoji = '🌟'; titre = 'Tres bien !'; sous = 'Encore un peu d\'entrainement !';
  } else if (pct >= 50) {
    emoji = '💪'; titre = 'Pas mal !'; sous = 'Continuez a pratiquer !';
  } else {
    emoji = '📚'; titre = 'A revoir !'; sous = 'Revoyez le vocabulaire et recommencez.';
  }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-title').textContent = titre;
  document.getElementById('results-subtitle').textContent = sous;

  const btnReview = document.getElementById('btn-review');
  if (state.cartesRatees.length > 0 && !state.modeRevision) {
    btnReview.style.display = 'flex';
    btnReview.textContent = 'Revoir les ' + state.cartesRatees.length + ' ratees';
  } else {
    btnReview.style.display = 'none';
  }

  afficherEcran('screen-results');
}

function lancerConfettis() {
  if (typeof confetti !== 'undefined') {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => confetti({ particleCount: 80, spread: 100, origin: { y: 0.5 } }), 500);
  }
}

// =============================================
// SESSION ÉCRITURE
// =============================================
function demarrerSessionEcriture(niveauCle) {
  const theme = DATA[state.themeActuel];
  writeState.themeActuel = state.themeActuel;
  writeState.niveauActuel = niveauCle;
  writeState.cartes = melanger(theme[niveauCle]);
  writeState.indexActuel = 0;
  writeState.scoreOui = 0;
  writeState.scoreNon = 0;
  writeState.cartesRatees = [];
  writeState.reponduActuel = false;

  document.getElementById('write-theme-label').textContent = theme.icone + ' ' + theme.nom;
  document.getElementById('write-level-badge').textContent = NIVEAUX_CONFIG[niveauCle].nom;

  afficherEcran('screen-write');
  afficherCarteEcriture();
}

function afficherCarteEcriture() {
  const carte = writeState.cartes[writeState.indexActuel];
  const total = writeState.cartes.length;

  document.getElementById('write-word').textContent = carte.es;
  document.getElementById('write-card-counter').textContent = 'Carte ' + (writeState.indexActuel + 1) + ' / ' + total;
  document.getElementById('write-progress-bar').style.width = (writeState.indexActuel / total * 100) + '%';
  document.getElementById('write-score-good').textContent = '✓ ' + writeState.scoreOui;
  document.getElementById('write-score-bad').textContent  = '✗ ' + writeState.scoreNon;

  const input = document.getElementById('write-input');
  input.value = '';
  input.className = 'write-input';
  input.disabled = false;
  input.focus();

  document.getElementById('write-feedback').textContent = '';
  document.getElementById('write-feedback').className = 'write-feedback';
  document.getElementById('btn-next-write').style.display = 'none';
  document.getElementById('btn-validate').style.display = 'flex';
  writeState.reponduActuel = false;
}

function normaliserReponse(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ']/g, '')
    .trim();
}

function validerEcriture() {
  if (writeState.reponduActuel) return;
  const carte = writeState.cartes[writeState.indexActuel];
  const input = document.getElementById('write-input');
  const reponse = normaliserReponse(input.value);
  const attendu = normaliserReponse(carte.fr);

  // Accepter aussi les variantes (ex: "le pain" et "pain")
  const variantes = [attendu];
  const sanArticle = attendu.replace(/^(le |la |l'|les |un |une |des )/, '');
  if (sanArticle !== attendu) variantes.push(sanArticle);

  const correct = variantes.some(v => reponse === v || reponse.includes(v) || v.includes(reponse));

  writeState.reponduActuel = true;
  document.getElementById('btn-validate').style.display = 'none';
  document.getElementById('btn-next-write').style.display = 'inline-flex';

  const feedback = document.getElementById('write-feedback');
  if (correct) {
    writeState.scoreOui++;
    input.className = 'write-input correct';
    feedback.textContent = '✓ Correct ! ' + carte.fr;
    feedback.className = 'write-feedback ok';
    prononcer(carte.es);
  } else {
    writeState.scoreNon++;
    input.className = 'write-input incorrect';
    feedback.textContent = '✗ La bonne reponse : ' + carte.fr;
    feedback.className = 'write-feedback ko';
    writeState.cartesRatees.push(carte);
    prononcer(carte.es);
  }
  input.disabled = true;
}

function suivantEcriture() {
  writeState.indexActuel++;
  if (writeState.indexActuel < writeState.cartes.length) {
    afficherCarteEcriture();
  } else {
    terminerSessionEcriture();
  }
}

function terminerSessionEcriture() {
  const total = writeState.cartes.length;
  const bon = writeState.scoreOui;
  const pct = Math.round((bon / total) * 100);

  sauvegarderProgression(writeState.themeActuel, writeState.niveauActuel, bon, total);

  state.themeActuel = writeState.themeActuel;
  state.niveauActuel = writeState.niveauActuel;
  state.scoreOui = bon;
  state.scoreNon = total - bon;
  state.cartesRatees = writeState.cartesRatees;
  state.modeRevision = false;

  document.getElementById('result-good').textContent = bon;
  document.getElementById('result-bad').textContent  = total - bon;
  document.getElementById('result-score').textContent = pct + '%';

  let emoji, titre, sous;
  if (pct >= 90) {
    emoji = '🏆'; titre = 'Excellent !'; sous = 'Vous ecrivez parfaitement !';
    lancerConfettis();
  } else if (pct >= 70) {
    emoji = '🌟'; titre = 'Tres bien !'; sous = 'Votre orthographe s\'ameliore !';
  } else if (pct >= 50) {
    emoji = '💪'; titre = 'Pas mal !'; sous = 'Continuez a pratiquer l\'ecriture !';
  } else {
    emoji = '📚'; titre = 'A revoir !'; sous = 'Essayez d\'abord le mode retournement.';
  }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-title').textContent = titre;
  document.getElementById('results-subtitle').textContent = sous;

  const btnReview = document.getElementById('btn-review');
  if (writeState.cartesRatees.length > 0) {
    btnReview.style.display = 'flex';
    btnReview.textContent = 'Revoir les ' + writeState.cartesRatees.length + ' ratees';
  } else {
    btnReview.style.display = 'none';
  }

  afficherEcran('screen-results');
}

// =============================================
// THÈME SOMBRE
// =============================================
function setMode(mode) {
  modeJeu = mode;
  document.getElementById('mode-flip').classList.toggle('active', mode === 'flip');
  document.getElementById('mode-write').classList.toggle('active', mode === 'write');
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('btn-theme').textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('espafacil_theme', isDark ? 'light' : 'dark');
}

// =============================================
// PAGE STATISTIQUES
// =============================================
function afficherStats() {
  const prog = chargerProgression();

  // Globales
  let totalCartes = 0, totalBonnes = 0, niveauxCompletes = 0;
  Object.entries(prog).forEach(([themeCle, niveaux]) => {
    Object.entries(niveaux).forEach(([niveauCle, stats]) => {
      totalCartes += stats.totalVu || 0;
      totalBonnes += Math.round((stats.meilleur / 100) * 10);
      if (stats.meilleur >= 50) niveauxCompletes++;
    });
  });
  const txReussite = totalCartes > 0 ? Math.round((totalBonnes / totalCartes) * 100) : 0;

  document.getElementById('stats-global').innerHTML = `
    <div class="stats-global-card">
      <span class="stats-global-number">${totalCartes}</span>
      <span class="stats-global-label">Cartes vues</span>
    </div>
    <div class="stats-global-card">
      <span class="stats-global-number">${niveauxCompletes}</span>
      <span class="stats-global-label">Niveaux OK</span>
    </div>
    <div class="stats-global-card">
      <span class="stats-global-number">${txReussite}%</span>
      <span class="stats-global-label">Meilleur score</span>
    </div>`;

  // Par thème
  const themesDiv = document.getElementById('stats-themes');
  themesDiv.innerHTML = '';

  const totalNiveaux = Object.keys(NIVEAUX_CONFIG).length;

  Object.entries(DATA).forEach(([cle, theme]) => {
    const niveauxData = prog[cle] || {};
    const niveauxFaits = Object.keys(niveauxData).length;
    const meilleur = niveauxFaits > 0
      ? Math.max(...Object.values(niveauxData).map(d => d.meilleur))
      : 0;
    const pct = Math.round((niveauxFaits / totalNiveaux) * 100);

    const detail = niveauxFaits > 0
      ? Object.entries(niveauxData).map(([n,d]) => NIVEAUX_CONFIG[n].icone + ' ' + d.meilleur + '%').join(' · ')
      : 'Aucune session';

    themesDiv.innerHTML += `
      <div class="stats-theme-row">
        <span class="stats-theme-icon">${theme.icone}</span>
        <div class="stats-theme-info">
          <div class="stats-theme-name">${theme.nom}</div>
          <div class="stats-theme-detail">${detail}</div>
        </div>
        <div class="stats-theme-bar-wrap"><div class="stats-theme-bar" style="width:${pct}%"></div></div>
        <span class="stats-theme-pct">${meilleur > 0 ? meilleur + '%' : '--'}</span>
      </div>`;
  });

  afficherEcran('screen-stats');
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // Restaurer thème
  const savedTheme = localStorage.getItem('espafacil_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('btn-theme').textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  initAccueil();

  // Navigation accueil
  document.getElementById('back-to-home').addEventListener('click', () => {
    afficherEcran('screen-home');
    initAccueil();
  });
  document.getElementById('back-to-level').addEventListener('click', () => ouvrirNiveaux(state.themeActuel));
  document.getElementById('back-to-level-write').addEventListener('click', () => ouvrirNiveaux(state.themeActuel));
  document.getElementById('back-from-stats').addEventListener('click', () => {
    afficherEcran('screen-home');
    initAccueil();
  });

  // Session flip
  document.getElementById('flashcard-scene').addEventListener('click', retournerCarte);
  document.getElementById('btn-knew').addEventListener('click', () => repondre(true));
  document.getElementById('btn-didnt').addEventListener('click', () => repondre(false));

  // Session écriture
  document.getElementById('btn-validate').addEventListener('click', validerEcriture);
  document.getElementById('btn-next-write').addEventListener('click', suivantEcriture);
  document.getElementById('write-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (!writeState.reponduActuel) validerEcriture();
      else suivantEcriture();
    }
  });

  // Résultats
  document.getElementById('btn-retry').addEventListener('click', () => {
    if (modeJeu === 'write') demarrerSessionEcriture(writeState.niveauActuel);
    else demarrerSession(state.niveauActuel);
  });
  document.getElementById('btn-review').addEventListener('click', () => {
    const ratees = modeJeu === 'write' ? writeState.cartesRatees : state.cartesRatees;
    if (modeJeu === 'write') {
      writeState.cartes = melanger(ratees);
      writeState.indexActuel = 0;
      writeState.scoreOui = 0;
      writeState.scoreNon = 0;
      writeState.cartesRatees = [];
      afficherEcran('screen-write');
      afficherCarteEcriture();
    } else {
      demarrerSession(state.niveauActuel, ratees);
    }
  });
  document.getElementById('btn-home').addEventListener('click', () => {
    afficherEcran('screen-home');
    initAccueil();
  });

  // Stats et thème
  document.getElementById('btn-open-stats').addEventListener('click', afficherStats);
  document.getElementById('btn-theme').addEventListener('click', toggleTheme);
});

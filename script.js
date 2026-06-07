
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
      { es: "la silla", fr: "la chaise", ex: "Sientate en la silla." },
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
      { es: "el retrovisor", fr: "le retroviseur", ex: "Ajusta el retrovisor." },
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
      { es: "el cunado", fr: "le beau-frere", ex: "El cunado es generoso." },
      { es: "el padrino", fr: "le parrain", ex: "El padrino es rico." },
      { es: "la madrina", fr: "la marraine", ex: "La madrina es buena." },
      { es: "el ahijado", fr: "le filleul", ex: "Mi ahijado es listo." },
      { es: "el bisabuelo", fr: "l'arriere grand-pere", ex: "El bisabuelo vive aqui." },
      { es: "el heredero", fr: "l'heritier", ex: "El heredero del trono." },
      { es: "los antepasados", fr: "les ancetres", ex: "Mis antepasados son espanoles." },
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
      { es: "anil", fr: "indigo", ex: "Un anil profundo." },
      { es: "terracota", fr: "terre cuite", ex: "Jarron de terracota." },
      { es: "alabastro", fr: "albatre", ex: "Blanco alabastro puro." },
      { es: "cobre", fr: "cuivre", ex: "Lamparitas de cobre." }
    ]
  },
  expressions: {
    nom: "Expressions",
    icone: "💬",
    debutant: [
      { es: "hola", fr: "bonjour / salut", ex: "Hola, como estas?" },
      { es: "adios", fr: "au revoir", ex: "Adios, hasta luego." },
      { es: "gracias", fr: "merci", ex: "Muchas gracias." },
      { es: "por favor", fr: "s'il vous plait", ex: "Un cafe, por favor." },
      { es: "si", fr: "oui", ex: "Si, me gusta." },
      { es: "no", fr: "non", ex: "No, gracias." },
      { es: "buenos dias", fr: "bonjour (matin)", ex: "Buenos dias, senor." },
      { es: "buenas noches", fr: "bonne nuit", ex: "Buenas noches, hasta manana." },
      { es: "lo siento", fr: "je suis desole", ex: "Lo siento mucho." },
      { es: "de nada", fr: "de rien", ex: "De nada, con gusto." }
    ],
    intermediaire: [
      { es: "como estas", fr: "comment vas-tu?", ex: "Hola, como estas hoy?" },
      { es: "muy bien", fr: "tres bien", ex: "Estoy muy bien, gracias." },
      { es: "donde esta", fr: "ou est?", ex: "Donde esta el banco?" },
      { es: "no entiendo", fr: "je ne comprends pas", ex: "No entiendo la pregunta." },
      { es: "habla mas despacio", fr: "parlez plus lentement", ex: "Por favor, habla mas despacio." },
      { es: "cuanto cuesta", fr: "combien ca coute?", ex: "Cuanto cuesta este libro?" },
      { es: "me llamo", fr: "je m'appelle", ex: "Me llamo Carlos." },
      { es: "mucho gusto", fr: "enchante", ex: "Mucho gusto en conocerte." },
      { es: "que hora es", fr: "quelle heure est-il?", ex: "Que hora es, por favor?" },
      { es: "tengo hambre", fr: "j'ai faim", ex: "Tengo hambre, comemos?" }
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
      { es: "la pierna", fr: "la jambe", ex: "Me rompi la pierna." }
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
      { es: "el tendon", fr: "le tendon", ex: "Se rompio el tendon." },
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
      { es: "el jabali", fr: "le sanglier", ex: "El jabali es salvaje." },
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
      { es: "la niebla", fr: "le brouillard", ex: "Hay niebla esta manana." }
    ],
    intermediaire: [
      { es: "el trueno", fr: "le tonnerre", ex: "El trueno asusta." },
      { es: "el relampago", fr: "l'eclair", ex: "Vi un relampago." },
      { es: "el granizo", fr: "la grele", ex: "Cayeron piedras de granizo." },
      { es: "la humedad", fr: "l'humidite", ex: "Hay mucha humedad." },
      { es: "el arcoiris", fr: "l'arc-en-ciel", ex: "Que bonito arcoiris." },
      { es: "la sequia", fr: "la secheresse", ex: "La sequia es grave." },
      { es: "la inundacion", fr: "l'inondation", ex: "La inundacion fue fuerte." },
      { es: "el rocio", fr: "la rosee", ex: "El rocio de la manana." },
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
      { es: "el tiempo calido", fr: "le temps chaud", ex: "Tiempo calido y seco." },
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
      { es: "el triatlon", fr: "le triathlon", ex: "El triatlon es extremo." },
      { es: "el esqui acuatico", fr: "le ski nautique", ex: "Practico esqui acuatico." },
      { es: "la halterofilia", fr: "l'halterophilie", ex: "La halterofilia exige fuerza." },
      { es: "el tiro con arco", fr: "le tir a l'arc", ex: "El tiro con arco requiere precision." }
    ]
  }
};

// =============================================
// CLONE ESPAGNOL + CONFIG LANGUES
// =============================================
const DATA_ES_ORIGINAL = JSON.parse(JSON.stringify(DATA));

const LANG_CONFIGS = {
  'es': { nom: 'Espagnol',    flag: '🇪🇸', bcp47: 'es-ES',
          variantes: [{code:'es-ES',nom:'🇪🇸 Castillan'},{code:'es-MX',nom:'🇲🇽 Mexicain'},{code:'es-AR',nom:'🇦🇷 Argentin'}] },
  'en': { nom: 'Anglais',     flag: '🇬🇧', bcp47: 'en-US', variantes: [] },
  'it': { nom: 'Italien',     flag: '🇮🇹', bcp47: 'it-IT', variantes: [] },
  'de': { nom: 'Allemand',    flag: '🇩🇪', bcp47: 'de-DE', variantes: [] },
  'pt': { nom: 'Portugais',   flag: '🇵🇹', bcp47: 'pt-PT', variantes: [] },
  'nl': { nom: 'Néerlandais', flag: '🇳🇱', bcp47: 'nl-NL', variantes: [] },
  'ru': { nom: 'Russe',       flag: '🇷🇺', bcp47: 'ru-RU', variantes: [] },
  'ja': { nom: 'Japonais',    flag: '🇯🇵', bcp47: 'ja-JP', variantes: [] },
  'ko': { nom: 'Coréen',      flag: '🇰🇷', bcp47: 'ko-KR', variantes: [] },
  'zh': { nom: 'Mandarin',    flag: '🇨🇳', bcp47: 'zh-CN', variantes: [] },
  'ar': { nom: 'Arabe',       flag: '🇸🇦', bcp47: 'ar-SA', variantes: [] },
  'pl': { nom: 'Polonais',    flag: '🇵🇱', bcp47: 'pl-PL', variantes: [] },
  'tr': { nom: 'Turc',        flag: '🇹🇷', bcp47: 'tr-TR', variantes: [] },
  'hi': { nom: 'Hindi',       flag: '🇮🇳', bcp47: 'hi-IN', variantes: [] }
};

// =============================================
// VOCABULAIRE MULTI-LANGUES
// =============================================
const LANG_THEMES = {
  'es': DATA_ES_ORIGINAL,
  'en': {
    vocabulaire: { nom: 'Vocabulary', icone: '📚',
      debutant: [
        { es: 'hello', fr: 'bonjour', ex: 'Hello, how are you?' },
        { es: 'goodbye', fr: 'au revoir', ex: 'Goodbye, see you soon!' },
        { es: 'yes', fr: 'oui', ex: 'Yes, please.' },
        { es: 'no', fr: 'non', ex: 'No, thank you.' },
        { es: 'water', fr: "l'eau", ex: 'I drink water every day.' },
        { es: 'bread', fr: 'le pain', ex: 'I eat bread for breakfast.' },
        { es: 'house', fr: 'la maison', ex: 'My house is very big.' },
        { es: 'cat', fr: 'le chat', ex: 'The cat sleeps on the sofa.' },
        { es: 'book', fr: 'le livre', ex: 'I read a book every night.' },
        { es: 'friend', fr: "l'ami", ex: 'My friend is very kind.' }
      ],
      intermediaire: [
        { es: 'city', fr: 'la ville', ex: 'The city is very lively.' },
        { es: 'school', fr: "l'école", ex: 'I go to school every morning.' },
        { es: 'money', fr: "l'argent", ex: 'I need money to travel.' },
        { es: 'car', fr: 'la voiture', ex: 'My car is red.' },
        { es: 'beautiful', fr: 'beau', ex: 'The sunset is beautiful.' },
        { es: 'happy', fr: 'heureux', ex: 'I am happy today.' },
        { es: 'work', fr: 'le travail', ex: 'Work is important.' },
        { es: 'time', fr: 'le temps', ex: 'Time flies quickly.' },
        { es: 'eat', fr: 'manger', ex: 'I eat lunch at noon.' },
        { es: 'sleep', fr: 'dormir', ex: 'I sleep eight hours a night.' }
      ],
      avance: [
        { es: 'journey', fr: 'le voyage', ex: 'A long journey awaits us.' },
        { es: 'freedom', fr: 'la liberté', ex: 'Freedom is a fundamental right.' },
        { es: 'dream', fr: 'le rêve', ex: 'I have a dream for the future.' },
        { es: 'challenge', fr: 'le défi', ex: 'This challenge is very difficult.' },
        { es: 'success', fr: 'le succès', ex: 'Success requires hard work.' },
        { es: 'experience', fr: "l'expérience", ex: 'Experience is the best teacher.' },
        { es: 'discover', fr: 'découvrir', ex: 'I discover new places every day.' },
        { es: 'understand', fr: 'comprendre', ex: 'I understand the problem now.' },
        { es: 'love', fr: "l'amour", ex: 'Love is a wonderful feeling.' },
        { es: 'music', fr: 'la musique', ex: 'Music brings people together.' }
      ]
    }
  },
  'it': {
    vocabulaire: { nom: 'Vocabolario', icone: '📚',
      debutant: [
        { es: 'ciao', fr: 'salut/bonjour', ex: 'Ciao, come stai oggi?' },
        { es: 'arrivederci', fr: 'au revoir', ex: 'Arrivederci, a presto!' },
        { es: 'sì', fr: 'oui', ex: 'Sì, grazie mille.' },
        { es: 'no', fr: 'non', ex: 'No, grazie.' },
        { es: 'acqua', fr: "l'eau", ex: "Bevo acqua ogni giorno." },
        { es: 'pane', fr: 'le pain', ex: 'Il pane è molto fresco.' },
        { es: 'casa', fr: 'la maison', ex: 'La mia casa è grande.' },
        { es: 'gatto', fr: 'le chat', ex: 'Il gatto dorme sul divano.' },
        { es: 'libro', fr: 'le livre', ex: 'Leggo un libro ogni sera.' },
        { es: 'amico', fr: "l'ami", ex: 'Il mio amico è gentile.' }
      ],
      intermediaire: [
        { es: 'città', fr: 'la ville', ex: 'La città è molto vivace.' },
        { es: 'scuola', fr: "l'école", ex: 'Vado a scuola ogni mattina.' },
        { es: 'soldi', fr: "l'argent", ex: 'Ho bisogno di soldi.' },
        { es: 'macchina', fr: 'la voiture', ex: 'La mia macchina è rossa.' },
        { es: 'bello', fr: 'beau', ex: 'Il tramonto è bello.' },
        { es: 'felice', fr: 'heureux', ex: 'Sono molto felice oggi.' },
        { es: 'lavoro', fr: 'le travail', ex: 'Il lavoro è importante.' },
        { es: 'tempo', fr: 'le temps', ex: 'Il tempo vola.' },
        { es: 'mangiare', fr: 'manger', ex: 'Mi piace mangiare la pasta.' },
        { es: 'dormire', fr: 'dormir', ex: 'Devo dormire otto ore.' }
      ],
      avance: [
        { es: 'viaggio', fr: 'le voyage', ex: 'Un lungo viaggio ci aspetta.' },
        { es: 'libertà', fr: 'la liberté', ex: 'La libertà è un diritto.' },
        { es: 'sogno', fr: 'le rêve', ex: 'Ho un sogno per il futuro.' },
        { es: 'sfida', fr: 'le défi', ex: 'Questa sfida è difficile.' },
        { es: 'successo', fr: 'le succès', ex: 'Il successo richiede impegno.' },
        { es: 'esperienza', fr: "l'expérience", ex: "L'esperienza insegna molto." },
        { es: 'scoprire', fr: 'découvrir', ex: 'Mi piace scoprire nuovi posti.' },
        { es: 'capire', fr: 'comprendre', ex: 'Ora capisco il problema.' },
        { es: 'amore', fr: "l'amour", ex: "L'amore è meraviglioso." },
        { es: 'musica', fr: 'la musique', ex: 'La musica unisce le persone.' }
      ]
    }
  },
  'de': {
    vocabulaire: { nom: 'Wortschatz', icone: '📚',
      debutant: [
        { es: 'Hallo', fr: 'bonjour', ex: 'Hallo, wie geht es dir?' },
        { es: 'Tschüss', fr: 'au revoir', ex: 'Tschüss, bis bald!' },
        { es: 'ja', fr: 'oui', ex: 'Ja, bitte.' },
        { es: 'nein', fr: 'non', ex: 'Nein, danke.' },
        { es: 'Wasser', fr: "l'eau", ex: 'Ich trinke Wasser jeden Tag.' },
        { es: 'Brot', fr: 'le pain', ex: 'Das Brot ist sehr frisch.' },
        { es: 'Haus', fr: 'la maison', ex: 'Mein Haus ist sehr groß.' },
        { es: 'Katze', fr: 'le chat', ex: 'Die Katze schläft auf dem Sofa.' },
        { es: 'Buch', fr: 'le livre', ex: 'Ich lese jeden Abend ein Buch.' },
        { es: 'Freund', fr: "l'ami", ex: 'Mein Freund ist sehr nett.' }
      ],
      intermediaire: [
        { es: 'Stadt', fr: 'la ville', ex: 'Die Stadt ist sehr lebendig.' },
        { es: 'Schule', fr: "l'école", ex: 'Ich gehe jeden Morgen zur Schule.' },
        { es: 'Geld', fr: "l'argent", ex: 'Ich brauche Geld zum Reisen.' },
        { es: 'Auto', fr: 'la voiture', ex: 'Mein Auto ist rot.' },
        { es: 'schön', fr: 'beau', ex: 'Der Sonnenuntergang ist schön.' },
        { es: 'glücklich', fr: 'heureux', ex: 'Ich bin heute glücklich.' },
        { es: 'Arbeit', fr: 'le travail', ex: 'Die Arbeit ist wichtig.' },
        { es: 'Zeit', fr: 'le temps', ex: 'Die Zeit vergeht schnell.' },
        { es: 'essen', fr: 'manger', ex: 'Ich möchte jetzt essen.' },
        { es: 'schlafen', fr: 'dormir', ex: 'Ich muss schlafen gehen.' }
      ],
      avance: [
        { es: 'Reise', fr: 'le voyage', ex: 'Eine lange Reise wartet auf uns.' },
        { es: 'Freiheit', fr: 'la liberté', ex: 'Freiheit ist ein Grundrecht.' },
        { es: 'Traum', fr: 'le rêve', ex: 'Ich habe einen Traum für die Zukunft.' },
        { es: 'Herausforderung', fr: 'le défi', ex: 'Diese Herausforderung ist schwierig.' },
        { es: 'Erfolg', fr: 'le succès', ex: 'Erfolg erfordert harte Arbeit.' },
        { es: 'Erfahrung', fr: "l'expérience", ex: 'Erfahrung ist der beste Lehrer.' },
        { es: 'entdecken', fr: 'découvrir', ex: 'Ich entdecke gerne neue Orte.' },
        { es: 'verstehen', fr: 'comprendre', ex: 'Ich verstehe das Problem jetzt.' },
        { es: 'Liebe', fr: "l'amour", ex: 'Liebe ist ein wunderbares Gefühl.' },
        { es: 'Musik', fr: 'la musique', ex: 'Musik verbindet die Menschen.' }
      ]
    }
  },
  'pt': {
    vocabulaire: { nom: 'Vocabulário', icone: '📚',
      debutant: [
        { es: 'olá', fr: 'bonjour', ex: 'Olá, como vai você?' },
        { es: 'adeus', fr: 'au revoir', ex: 'Adeus, até logo!' },
        { es: 'sim', fr: 'oui', ex: 'Sim, por favor.' },
        { es: 'não', fr: 'non', ex: 'Não, obrigado.' },
        { es: 'água', fr: "l'eau", ex: 'Bebo água todos os dias.' },
        { es: 'pão', fr: 'le pain', ex: 'O pão está muito fresco.' },
        { es: 'casa', fr: 'la maison', ex: 'A minha casa é grande.' },
        { es: 'gato', fr: 'le chat', ex: 'O gato dorme no sofá.' },
        { es: 'livro', fr: 'le livre', ex: 'Leio um livro toda noite.' },
        { es: 'amigo', fr: "l'ami", ex: 'O meu amigo é muito gentil.' }
      ],
      intermediaire: [
        { es: 'cidade', fr: 'la ville', ex: 'A cidade é muito animada.' },
        { es: 'escola', fr: "l'école", ex: 'Vou à escola toda manhã.' },
        { es: 'dinheiro', fr: "l'argent", ex: 'Preciso de dinheiro para viajar.' },
        { es: 'carro', fr: 'la voiture', ex: 'O meu carro é vermelho.' },
        { es: 'bonito', fr: 'beau', ex: 'O pôr do sol é bonito.' },
        { es: 'feliz', fr: 'heureux', ex: 'Estou muito feliz hoje.' },
        { es: 'trabalho', fr: 'le travail', ex: 'O trabalho é importante.' },
        { es: 'tempo', fr: 'le temps', ex: 'O tempo passa rápido.' },
        { es: 'comer', fr: 'manger', ex: 'Quero comer agora.' },
        { es: 'dormir', fr: 'dormir', ex: 'Preciso dormir oito horas.' }
      ],
      avance: [
        { es: 'viagem', fr: 'le voyage', ex: 'Uma longa viagem nos aguarda.' },
        { es: 'liberdade', fr: 'la liberté', ex: 'A liberdade é um direito.' },
        { es: 'sonho', fr: 'le rêve', ex: 'Tenho um sonho para o futuro.' },
        { es: 'desafio', fr: 'le défi', ex: 'Este desafio é muito difícil.' },
        { es: 'sucesso', fr: 'le succès', ex: 'O sucesso exige esforço.' },
        { es: 'experiência', fr: "l'expérience", ex: 'A experiência é a melhor professora.' },
        { es: 'descobrir', fr: 'découvrir', ex: 'Gosto de descobrir novos lugares.' },
        { es: 'entender', fr: 'comprendre', ex: 'Agora entendo o problema.' },
        { es: 'amor', fr: "l'amour", ex: 'O amor é maravilhoso.' },
        { es: 'música', fr: 'la musique', ex: 'A música une as pessoas.' }
      ]
    }
  },
  'nl': {
    vocabulaire: { nom: 'Woordenschat', icone: '📚',
      debutant: [
        { es: 'hallo', fr: 'bonjour', ex: 'Hallo, hoe gaat het?' },
        { es: 'tot ziens', fr: 'au revoir', ex: 'Tot ziens, tot snel!' },
        { es: 'ja', fr: 'oui', ex: 'Ja, graag.' },
        { es: 'nee', fr: 'non', ex: 'Nee, dank je wel.' },
        { es: 'water', fr: "l'eau", ex: 'Ik drink elke dag water.' },
        { es: 'brood', fr: 'le pain', ex: 'Het brood is heel vers.' },
        { es: 'huis', fr: 'la maison', ex: 'Mijn huis is groot.' },
        { es: 'kat', fr: 'le chat', ex: 'De kat slaapt op de bank.' },
        { es: 'boek', fr: 'le livre', ex: 'Ik lees elke avond een boek.' },
        { es: 'vriend', fr: "l'ami", ex: 'Mijn vriend is heel aardig.' }
      ],
      intermediaire: [
        { es: 'stad', fr: 'la ville', ex: 'De stad is zeer levendig.' },
        { es: 'school', fr: "l'école", ex: 'Ik ga elke ochtend naar school.' },
        { es: 'geld', fr: "l'argent", ex: 'Ik heb geld nodig om te reizen.' },
        { es: 'auto', fr: 'la voiture', ex: 'Mijn auto is rood.' },
        { es: 'mooi', fr: 'beau', ex: 'De zonsondergang is mooi.' },
        { es: 'gelukkig', fr: 'heureux', ex: 'Ik ben vandaag gelukkig.' },
        { es: 'werk', fr: 'le travail', ex: 'Het werk is belangrijk.' },
        { es: 'tijd', fr: 'le temps', ex: 'De tijd vliegt snel.' },
        { es: 'eten', fr: 'manger', ex: 'Ik wil nu eten.' },
        { es: 'slapen', fr: 'dormir', ex: 'Ik moet goed slapen.' }
      ],
      avance: [
        { es: 'reis', fr: 'le voyage', ex: 'Een lange reis wacht op ons.' },
        { es: 'vrijheid', fr: 'la liberté', ex: 'Vrijheid is een grondrecht.' },
        { es: 'droom', fr: 'le rêve', ex: 'Ik heb een droom voor de toekomst.' },
        { es: 'uitdaging', fr: 'le défi', ex: 'Deze uitdaging is moeilijk.' },
        { es: 'succes', fr: 'le succès', ex: 'Succes vereist hard werken.' },
        { es: 'ervaring', fr: "l'expérience", ex: 'Ervaring is de beste leraar.' },
        { es: 'ontdekken', fr: 'découvrir', ex: 'Ik hou van nieuwe plaatsen ontdekken.' },
        { es: 'begrijpen', fr: 'comprendre', ex: 'Ik begrijp het probleem nu.' },
        { es: 'liefde', fr: "l'amour", ex: 'Liefde is een prachtig gevoel.' },
        { es: 'muziek', fr: 'la musique', ex: 'Muziek verbindt de mensen.' }
      ]
    }
  },
  'ru': {
    vocabulaire: { nom: 'Словарь', icone: '📚',
      debutant: [
        { es: 'привет', fr: 'bonjour/salut', ex: 'Привет, как дела?' },
        { es: 'пока', fr: 'au revoir', ex: 'Пока, до скорого!' },
        { es: 'да', fr: 'oui', ex: 'Да, пожалуйста.' },
        { es: 'нет', fr: 'non', ex: 'Нет, спасибо.' },
        { es: 'вода', fr: "l'eau", ex: 'Я пью воду каждый день.' },
        { es: 'хлеб', fr: 'le pain', ex: 'Хлеб очень свежий.' },
        { es: 'дом', fr: 'la maison', ex: 'Мой дом большой.' },
        { es: 'кот', fr: 'le chat', ex: 'Кот спит на диване.' },
        { es: 'книга', fr: 'le livre', ex: 'Я читаю книгу каждый вечер.' },
        { es: 'друг', fr: "l'ami", ex: 'Мой друг очень добрый.' }
      ],
      intermediaire: [
        { es: 'город', fr: 'la ville', ex: 'Город очень оживлённый.' },
        { es: 'школа', fr: "l'école", ex: 'Я иду в школу каждое утро.' },
        { es: 'деньги', fr: "l'argent", ex: 'Мне нужны деньги для путешествия.' },
        { es: 'машина', fr: 'la voiture', ex: 'Моя машина красная.' },
        { es: 'красивый', fr: 'beau', ex: 'Закат очень красивый.' },
        { es: 'счастливый', fr: 'heureux', ex: 'Я сегодня счастливый.' },
        { es: 'работа', fr: 'le travail', ex: 'Работа важна.' },
        { es: 'время', fr: 'le temps', ex: 'Время летит быстро.' },
        { es: 'есть', fr: 'manger', ex: 'Хочу есть прямо сейчас.' },
        { es: 'спать', fr: 'dormir', ex: 'Мне нужно спать восемь часов.' }
      ],
      avance: [
        { es: 'путешествие', fr: 'le voyage', ex: 'Долгое путешествие ждёт нас.' },
        { es: 'свобода', fr: 'la liberté', ex: 'Свобода — основное право.' },
        { es: 'мечта', fr: 'le rêve', ex: 'У меня есть мечта о будущем.' },
        { es: 'вызов', fr: 'le défi', ex: 'Этот вызов очень сложный.' },
        { es: 'успех', fr: 'le succès', ex: 'Успех требует упорного труда.' },
        { es: 'опыт', fr: "l'expérience", ex: 'Опыт — лучший учитель.' },
        { es: 'открывать', fr: 'découvrir', ex: 'Я люблю открывать новые места.' },
        { es: 'понимать', fr: 'comprendre', ex: 'Теперь я понимаю проблему.' },
        { es: 'любовь', fr: "l'amour", ex: 'Любовь — прекрасное чувство.' },
        { es: 'музыка', fr: 'la musique', ex: 'Музыка объединяет людей.' }
      ]
    }
  },
  'ja': {
    vocabulaire: { nom: '語彙', icone: '📚',
      debutant: [
        { es: 'こんにちは', fr: 'bonjour', ex: 'こんにちは、お元気ですか？' },
        { es: 'さようなら', fr: 'au revoir', ex: 'さようなら、またね！' },
        { es: 'はい', fr: 'oui', ex: 'はい、お願いします。' },
        { es: 'いいえ', fr: 'non', ex: 'いいえ、けっこうです。' },
        { es: 'みず', fr: "l'eau", ex: 'まいにちみずをのみます。' },
        { es: 'パン', fr: 'le pain', ex: 'パンをたべます。' },
        { es: 'いえ', fr: 'la maison', ex: 'わたしのいえはおおきい。' },
        { es: 'ねこ', fr: 'le chat', ex: 'ねこがソファでねています。' },
        { es: 'ほん', fr: 'le livre', ex: 'まいばんほんをよみます。' },
        { es: 'ともだち', fr: "l'ami", ex: 'わたしのともだちはやさしい。' }
      ],
      intermediaire: [
        { es: 'まち', fr: 'la ville', ex: 'まちはにぎやかです。' },
        { es: 'がっこう', fr: "l'école", ex: 'まいあさがっこうへいきます。' },
        { es: 'おかね', fr: "l'argent", ex: 'りょこうにおかねがひつようです。' },
        { es: 'くるま', fr: 'la voiture', ex: 'わたしのくるまはあかい。' },
        { es: 'きれい', fr: 'beau/joli', ex: 'ゆうやけはきれいです。' },
        { es: 'しあわせ', fr: 'heureux', ex: 'きょうはしあわせです。' },
        { es: 'しごと', fr: 'le travail', ex: 'しごとはたいせつです。' },
        { es: 'じかん', fr: 'le temps', ex: 'じかんははやくたちます。' },
        { es: 'たべる', fr: 'manger', ex: 'いましたべたいです。' },
        { es: 'ねる', fr: 'dormir', ex: 'はちじかんねるひつようがあります。' }
      ],
      avance: [
        { es: 'たび', fr: 'le voyage', ex: 'ながいたびがまっています。' },
        { es: 'じゆう', fr: 'la liberté', ex: 'じゆうはきほんてきなけんりです。' },
        { es: 'ゆめ', fr: 'le rêve', ex: 'しょうらいのゆめがあります。' },
        { es: 'ちょうせん', fr: 'le défi', ex: 'このちょうせんはむずかしい。' },
        { es: 'せいこう', fr: 'le succès', ex: 'せいこうにはどりょくがひつよう。' },
        { es: 'けいけん', fr: "l'expérience", ex: 'けいけんはいちばんのせんせいです。' },
        { es: 'はっけん', fr: 'découvrir', ex: 'あたらしいばしょをはっけんします。' },
        { es: 'りかい', fr: 'comprendre', ex: 'もんだいをりかいしました。' },
        { es: 'あい', fr: "l'amour", ex: 'あいはすばらしいきもちです。' },
        { es: 'おんがく', fr: 'la musique', ex: 'おんがくはひとをつなぎます。' }
      ]
    }
  },
  'ko': {
    vocabulaire: { nom: '어휘', icone: '📚',
      debutant: [
        { es: '안녕하세요', fr: 'bonjour', ex: '안녕하세요, 어떻게 지내세요?' },
        { es: '안녕히 가세요', fr: 'au revoir', ex: '안녕히 가세요, 또 봐요!' },
        { es: '네', fr: 'oui', ex: '네, 감사합니다.' },
        { es: '아니요', fr: 'non', ex: '아니요, 괜찮아요.' },
        { es: '물', fr: "l'eau", ex: '매일 물을 마십니다.' },
        { es: '빵', fr: 'le pain', ex: '아침에 빵을 먹습니다.' },
        { es: '집', fr: 'la maison', ex: '우리 집이 정말 큽니다.' },
        { es: '고양이', fr: 'le chat', ex: '고양이가 소파에서 잡니다.' },
        { es: '책', fr: 'le livre', ex: '매일 저녁 책을 읽습니다.' },
        { es: '친구', fr: "l'ami", ex: '제 친구는 정말 친절합니다.' }
      ],
      intermediaire: [
        { es: '도시', fr: 'la ville', ex: '도시는 매우 활기찹니다.' },
        { es: '학교', fr: "l'école", ex: '매일 아침 학교에 갑니다.' },
        { es: '돈', fr: "l'argent", ex: '여행하려면 돈이 필요합니다.' },
        { es: '자동차', fr: 'la voiture', ex: '제 자동차는 빨간색입니다.' },
        { es: '아름다워요', fr: 'beau', ex: '노을이 정말 아름다워요.' },
        { es: '행복해요', fr: 'heureux', ex: '오늘 저는 행복해요.' },
        { es: '일', fr: 'le travail', ex: '일이 중요합니다.' },
        { es: '시간', fr: 'le temps', ex: '시간이 빨리 갑니다.' },
        { es: '먹다', fr: 'manger', ex: '지금 먹다 싶어요.' },
        { es: '자다', fr: 'dormir', ex: '여덟 시간 자다 해요.' }
      ],
      avance: [
        { es: '여행', fr: 'le voyage', ex: '긴 여행이 우리를 기다립니다.' },
        { es: '자유', fr: 'la liberté', ex: '자유는 기본 권리입니다.' },
        { es: '꿈', fr: 'le rêve', ex: '미래에 대한 꿈이 있습니다.' },
        { es: '도전', fr: 'le défi', ex: '이 도전은 정말 어렵습니다.' },
        { es: '성공', fr: 'le succès', ex: '성공에는 노력이 필요합니다.' },
        { es: '경험', fr: "l'expérience", ex: '경험은 최고의 선생님입니다.' },
        { es: '발견하다', fr: 'découvrir', ex: '새로운 장소를 발견하다 합니다.' },
        { es: '이해하다', fr: 'comprendre', ex: '이제 문제를 이해하다 했어요.' },
        { es: '사랑', fr: "l'amour", ex: '사랑은 아름다운 감정입니다.' },
        { es: '음악', fr: 'la musique', ex: '음악은 사람들을 하나로 만듭니다.' }
      ]
    }
  },
  'zh': {
    vocabulaire: { nom: '词汇', icone: '📚',
      debutant: [
        { es: '你好', fr: 'bonjour', ex: '你好，你怎么样？' },
        { es: '再见', fr: 'au revoir', ex: '再见，一会儿见！' },
        { es: '是', fr: 'oui', ex: '是，请。' },
        { es: '不', fr: 'non', ex: '不，谢谢。' },
        { es: '水', fr: "l'eau", ex: '我每天喝水。' },
        { es: '面包', fr: 'le pain', ex: '我早饭吃面包。' },
        { es: '家', fr: 'la maison', ex: '我的家很大。' },
        { es: '猫', fr: 'le chat', ex: '猫在沙发上睡觉。' },
        { es: '书', fr: 'le livre', ex: '我每天晚上看书。' },
        { es: '朋友', fr: "l'ami", ex: '我的朋友非常好。' }
      ],
      intermediaire: [
        { es: '城市', fr: 'la ville', ex: '城市非常热闹。' },
        { es: '学校', fr: "l'école", ex: '我每天早上去学校。' },
        { es: '钱', fr: "l'argent", ex: '我需要钱来旅行。' },
        { es: '汽车', fr: 'la voiture', ex: '我的汽车是红色的。' },
        { es: '漂亮', fr: 'beau/joli', ex: '日落很漂亮。' },
        { es: '快乐', fr: 'heureux', ex: '今天我很快乐。' },
        { es: '工作', fr: 'le travail', ex: '工作很重要。' },
        { es: '时间', fr: 'le temps', ex: '时间过得很快。' },
        { es: '吃', fr: 'manger', ex: '我想现在吃。' },
        { es: '睡觉', fr: 'dormir', ex: '我需要睡觉八个小时。' }
      ],
      avance: [
        { es: '旅行', fr: 'le voyage', ex: '一段长途旅行等着我们。' },
        { es: '自由', fr: 'la liberté', ex: '自由是基本权利。' },
        { es: '梦想', fr: 'le rêve', ex: '我有一个关于未来的梦想。' },
        { es: '挑战', fr: 'le défi', ex: '这个挑战很难。' },
        { es: '成功', fr: 'le succès', ex: '成功需要努力工作。' },
        { es: '经验', fr: "l'expérience", ex: '经验是最好的老师。' },
        { es: '发现', fr: 'découvrir', ex: '我喜欢发现新的地方。' },
        { es: '理解', fr: 'comprendre', ex: '我现在理解这个问题。' },
        { es: '爱', fr: "l'amour", ex: '爱是美好的感情。' },
        { es: '音乐', fr: 'la musique', ex: '音乐把人们聚在一起。' }
      ]
    }
  },
  'ar': {
    vocabulaire: { nom: 'مفردات', icone: '📚',
      debutant: [
        { es: 'مرحبا', fr: 'bonjour', ex: 'مرحبا، كيف حالك؟' },
        { es: 'مع السلامة', fr: 'au revoir', ex: 'مع السلامة، إلى اللقاء!' },
        { es: 'نعم', fr: 'oui', ex: 'نعم، من فضلك.' },
        { es: 'لا', fr: 'non', ex: 'لا، شكرا.' },
        { es: 'ماء', fr: "l'eau", ex: 'أشرب الماء كل يوم.' },
        { es: 'خبز', fr: 'le pain', ex: 'الخبز طازج جدا.' },
        { es: 'بيت', fr: 'la maison', ex: 'بيتي كبير.' },
        { es: 'قطة', fr: 'le chat', ex: 'القطة تنام على الأريكة.' },
        { es: 'كتاب', fr: 'le livre', ex: 'أقرأ كتابا كل مساء.' },
        { es: 'صديق', fr: "l'ami", ex: 'صديقي لطيف جدا.' }
      ],
      intermediaire: [
        { es: 'مدينة', fr: 'la ville', ex: 'المدينة حيوية جدا.' },
        { es: 'مدرسة', fr: "l'école", ex: 'أذهب إلى المدرسة كل صباح.' },
        { es: 'مال', fr: "l'argent", ex: 'أحتاج مالا للسفر.' },
        { es: 'سيارة', fr: 'la voiture', ex: 'سيارتي حمراء.' },
        { es: 'جميل', fr: 'beau', ex: 'الغروب جميل.' },
        { es: 'سعيد', fr: 'heureux', ex: 'أنا سعيد اليوم.' },
        { es: 'عمل', fr: 'le travail', ex: 'العمل مهم.' },
        { es: 'وقت', fr: 'le temps', ex: 'الوقت يمر بسرعة.' },
        { es: 'يأكل', fr: 'manger', ex: 'أريد أن يأكل الآن.' },
        { es: 'ينام', fr: 'dormir', ex: 'أحتاج أن ينام ثماني ساعات.' }
      ],
      avance: [
        { es: 'رحلة', fr: 'le voyage', ex: 'رحلة طويلة تنتظرنا.' },
        { es: 'حرية', fr: 'la liberté', ex: 'الحرية حق أساسي.' },
        { es: 'حلم', fr: 'le rêve', ex: 'لدي حلم للمستقبل.' },
        { es: 'تحدٍّ', fr: 'le défi', ex: 'هذا التحدي صعب جدا.' },
        { es: 'نجاح', fr: 'le succès', ex: 'النجاح يتطلب عملا شاقا.' },
        { es: 'خبرة', fr: "l'expérience", ex: 'الخبرة خير معلم.' },
        { es: 'اكتشاف', fr: 'découvrir', ex: 'أحب اكتشاف أماكن جديدة.' },
        { es: 'فهم', fr: 'comprendre', ex: 'أفهم المشكلة الآن.' },
        { es: 'حب', fr: "l'amour", ex: 'الحب شعور رائع.' },
        { es: 'موسيقى', fr: 'la musique', ex: 'الموسيقى تجمع الناس.' }
      ]
    }
  },
  'pl': {
    vocabulaire: { nom: 'Słownictwo', icone: '📚',
      debutant: [
        { es: 'cześć', fr: 'bonjour/salut', ex: 'Cześć, jak się masz?' },
        { es: 'do widzenia', fr: 'au revoir', ex: 'Do widzenia, do zobaczenia!' },
        { es: 'tak', fr: 'oui', ex: 'Tak, proszę.' },
        { es: 'nie', fr: 'non', ex: 'Nie, dziękuję.' },
        { es: 'woda', fr: "l'eau", ex: 'Piję wodę każdego dnia.' },
        { es: 'chleb', fr: 'le pain', ex: 'Chleb jest bardzo świeży.' },
        { es: 'dom', fr: 'la maison', ex: 'Mój dom jest duży.' },
        { es: 'kot', fr: 'le chat', ex: 'Kot śpi na kanapie.' },
        { es: 'książka', fr: 'le livre', ex: 'Czytam książkę każdy wieczór.' },
        { es: 'przyjaciel', fr: "l'ami", ex: 'Mój przyjaciel jest bardzo miły.' }
      ],
      intermediaire: [
        { es: 'miasto', fr: 'la ville', ex: 'Miasto jest bardzo tętniące życiem.' },
        { es: 'szkoła', fr: "l'école", ex: 'Chodzę do szkoły każdego ranka.' },
        { es: 'pieniądze', fr: "l'argent", ex: 'Potrzebuję pieniądze na podróż.' },
        { es: 'samochód', fr: 'la voiture', ex: 'Mój samochód jest czerwony.' },
        { es: 'piękny', fr: 'beau', ex: 'Zachód słońca jest piękny.' },
        { es: 'szczęśliwy', fr: 'heureux', ex: 'Jestem dzisiaj szczęśliwy.' },
        { es: 'praca', fr: 'le travail', ex: 'Praca jest ważna.' },
        { es: 'czas', fr: 'le temps', ex: 'Czas leci szybko.' },
        { es: 'jeść', fr: 'manger', ex: 'Chcę teraz jeść.' },
        { es: 'spać', fr: 'dormir', ex: 'Muszę teraz spać.' }
      ],
      avance: [
        { es: 'podróż', fr: 'le voyage', ex: 'Długa podróż na nas czeka.' },
        { es: 'wolność', fr: 'la liberté', ex: 'Wolność jest prawem podstawowym.' },
        { es: 'marzenie', fr: 'le rêve', ex: 'Mam marzenie o przyszłości.' },
        { es: 'wyzwanie', fr: 'le défi', ex: 'To wyzwanie jest trudne.' },
        { es: 'sukces', fr: 'le succès', ex: 'Sukces wymaga ciężkiej pracy.' },
        { es: 'doświadczenie', fr: "l'expérience", ex: 'Doświadczenie jest najlepszym nauczycielem.' },
        { es: 'odkryć', fr: 'découvrir', ex: 'Lubię odkryć nowe miejsca.' },
        { es: 'rozumieć', fr: 'comprendre', ex: 'Teraz rozumieć problem.' },
        { es: 'miłość', fr: "l'amour", ex: 'Miłość jest pięknym uczuciem.' },
        { es: 'muzyka', fr: 'la musique', ex: 'Muzyka łączy ludzi.' }
      ]
    }
  },
  'tr': {
    vocabulaire: { nom: 'Kelime Hazinesi', icone: '📚',
      debutant: [
        { es: 'merhaba', fr: 'bonjour', ex: 'Merhaba, nasılsın?' },
        { es: 'hoşça kal', fr: 'au revoir', ex: 'Hoşça kal, görüşürüz!' },
        { es: 'evet', fr: 'oui', ex: 'Evet, lütfen.' },
        { es: 'hayır', fr: 'non', ex: 'Hayır, teşekkürler.' },
        { es: 'su', fr: "l'eau", ex: 'Her gün su içiyorum.' },
        { es: 'ekmek', fr: 'le pain', ex: 'Ekmek çok taze.' },
        { es: 'ev', fr: 'la maison', ex: 'Evim çok büyük.' },
        { es: 'kedi', fr: 'le chat', ex: 'Kedi kanepede uyuyor.' },
        { es: 'kitap', fr: 'le livre', ex: 'Her akşam kitap okuyorum.' },
        { es: 'arkadaş', fr: "l'ami", ex: 'Arkadaşım çok nazik.' }
      ],
      intermediaire: [
        { es: 'şehir', fr: 'la ville', ex: 'Şehir çok canlı.' },
        { es: 'okul', fr: "l'école", ex: 'Her sabah okula gidiyorum.' },
        { es: 'para', fr: "l'argent", ex: 'Seyahat için para lazım.' },
        { es: 'araba', fr: 'la voiture', ex: 'Arabam kırmızı.' },
        { es: 'güzel', fr: 'beau', ex: 'Gün batımı çok güzel.' },
        { es: 'mutlu', fr: 'heureux', ex: 'Bugün çok mutluyum.' },
        { es: 'iş', fr: 'le travail', ex: 'İş çok önemli.' },
        { es: 'zaman', fr: 'le temps', ex: 'Zaman çabuk geçiyor.' },
        { es: 'yemek', fr: 'manger', ex: 'Şimdi yemek istiyorum.' },
        { es: 'uyumak', fr: 'dormir', ex: 'Sekiz saat uyumak gerekiyor.' }
      ],
      avance: [
        { es: 'yolculuk', fr: 'le voyage', ex: 'Uzun bir yolculuk bizi bekliyor.' },
        { es: 'özgürlük', fr: 'la liberté', ex: 'Özgürlük temel bir haktır.' },
        { es: 'rüya', fr: 'le rêve', ex: 'Geleceğe dair bir rüyam var.' },
        { es: 'zorluk', fr: 'le défi', ex: 'Bu zorluk çok zor.' },
        { es: 'başarı', fr: 'le succès', ex: 'Başarı çok çalışmayı gerektirir.' },
        { es: 'deneyim', fr: "l'expérience", ex: 'Deneyim en iyi öğretmendir.' },
        { es: 'keşfetmek', fr: 'découvrir', ex: 'Yeni yerler keşfetmeyi severim.' },
        { es: 'anlamak', fr: 'comprendre', ex: 'Artık problemi anlamak istiyorum.' },
        { es: 'aşk', fr: "l'amour", ex: 'Aşk güzel bir duygudur.' },
        { es: 'müzik', fr: 'la musique', ex: 'Müzik insanları bir araya getirir.' }
      ]
    }
  },
  'hi': {
    vocabulaire: { nom: 'शब्द भंडार', icone: '📚',
      debutant: [
        { es: 'नमस्ते', fr: 'bonjour', ex: 'नमस्ते, आप कैसे हैं?' },
        { es: 'अलविदा', fr: 'au revoir', ex: 'अलविदा, जल्दी मिलते हैं!' },
        { es: 'हाँ', fr: 'oui', ex: 'हाँ, कृपया।' },
        { es: 'नहीं', fr: 'non', ex: 'नहीं, धन्यवाद।' },
        { es: 'पानी', fr: "l'eau", ex: 'मैं हर दिन पानी पीता हूँ।' },
        { es: 'रोटी', fr: 'le pain', ex: 'रोटी बहुत ताज़ी है।' },
        { es: 'घर', fr: 'la maison', ex: 'मेरा घर बड़ा है।' },
        { es: 'बिल्ली', fr: 'le chat', ex: 'बिल्ली सोफे पर सोती है।' },
        { es: 'किताब', fr: 'le livre', ex: 'मैं हर शाम किताब पढ़ता हूँ।' },
        { es: 'दोस्त', fr: "l'ami", ex: 'मेरा दोस्त बहुत अच्छा है।' }
      ],
      intermediaire: [
        { es: 'शहर', fr: 'la ville', ex: 'शहर बहुत जीवंत है।' },
        { es: 'स्कूल', fr: "l'école", ex: 'मैं हर सुबह स्कूल जाता हूँ।' },
        { es: 'पैसा', fr: "l'argent", ex: 'मुझे यात्रा के लिए पैसा चाहिए।' },
        { es: 'गाड़ी', fr: 'la voiture', ex: 'मेरी गाड़ी लाल है।' },
        { es: 'सुंदर', fr: 'beau', ex: 'सूर्यास्त बहुत सुंदर है।' },
        { es: 'खुश', fr: 'heureux', ex: 'मैं आज बहुत खुश हूँ।' },
        { es: 'काम', fr: 'le travail', ex: 'काम बहुत ज़रूरी है।' },
        { es: 'समय', fr: 'le temps', ex: 'समय बहुत जल्दी बीतता है।' },
        { es: 'खाना', fr: 'manger', ex: 'मैं अभी खाना चाहता हूँ।' },
        { es: 'सोना', fr: 'dormir', ex: 'मुझे आठ घंटे सोना है।' }
      ],
      avance: [
        { es: 'यात्रा', fr: 'le voyage', ex: 'एक लंबी यात्रा हमारा इंतजार कर रही है।' },
        { es: 'आज़ादी', fr: 'la liberté', ex: 'आज़ादी एक मौलिक अधिकार है।' },
        { es: 'सपना', fr: 'le rêve', ex: 'मेरे भविष्य के लिए एक सपना है।' },
        { es: 'चुनौती', fr: 'le défi', ex: 'यह चुनौती बहुत कठिन है।' },
        { es: 'सफलता', fr: 'le succès', ex: 'सफलता के लिए मेहनत ज़रूरी है।' },
        { es: 'अनुभव', fr: "l'expérience", ex: 'अनुभव सबसे अच्छा शिक्षक है।' },
        { es: 'खोज', fr: 'découvrir', ex: 'मुझे नई जगहें खोज करना पसंद है।' },
        { es: 'समझना', fr: 'comprendre', ex: 'मैं अब समस्या समझना समझ गया।' },
        { es: 'प्यार', fr: "l'amour", ex: 'प्यार एक सुंदर भावना है।' },
        { es: 'संगीत', fr: 'la musique', ex: 'संगीत लोगों को एकजुट करता है।' }
      ]
    }
  }
};

// Fonction principale de changement de langue
function changerLangue(code) {
  if (!LANG_CONFIGS[code]) return;
  langCible = code;
  localStorage.setItem('linguafacil_lang', code);

  // Variante TTS : personnalisable pour ES, sinon bcp47 par défaut
  if (code === 'es') {
    varianteRegionale = localStorage.getItem('linguafacil_variante_es') || 'es-ES';
  } else {
    varianteRegionale = LANG_CONFIGS[code].bcp47;
  }

  // Remplacer les données actives (DATA est const mais mutable)
  Object.keys(DATA).forEach(k => delete DATA[k]);
  Object.assign(DATA, LANG_THEMES[code] || LANG_THEMES['es']);

  // Mettre à jour les éléments visuels
  const cfg = LANG_CONFIGS[code];
  const logoIcon = document.getElementById('logo-icon');
  if (logoIcon) logoIcon.textContent = cfg.flag;
  const tagline = document.getElementById('tagline');
  if (tagline) tagline.textContent = 'Apprenez ' + cfg.nom + ', carte par carte';
  const writeCardLang = document.getElementById('write-card-lang');
  if (writeCardLang) writeCardLang.textContent = cfg.flag + ' ' + cfg.nom;

  // Afficher/masquer le sélecteur de variante régionale
  const varSel = document.getElementById('variante-select');
  if (varSel) {
    varSel.style.display = (code === 'es') ? '' : 'none';
    if (code === 'es') varSel.value = varianteRegionale;
  }

  // Synchroniser le sélecteur de langue
  const langSel = document.getElementById('lang-select');
  if (langSel) langSel.value = code;

  // Réinitialiser l'accueil
  initAccueil();
}


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

// Langue active + clé de stockage par langue
let langCible = localStorage.getItem('linguafacil_lang') || 'es';

function storageKey(base) {
  return 'linguafacil_' + base + '_' + langCible;
}

// Migration automatique des anciennes clés espafacil → linguafacil_*_es
(function migrateStorage() {
  var map = {
    'espafacil_progress': 'linguafacil_progress_es',
    'espafacil_user':     'linguafacil_user_es',
    'espafacil_mnemo':    'linguafacil_mnemo_es',
    'espafacil_custom':   'linguafacil_custom_es'
  };
  Object.keys(map).forEach(function(o) {
    var n = map[o];
    if (!localStorage.getItem(n) && localStorage.getItem(o)) {
      localStorage.setItem(n, localStorage.getItem(o));
    }
  });
})();

// Compat (non utilisé directement - garder pour éviter erreurs de ref)
const STORAGE_KEY = 'linguafacil_progress_legacy';
const STORAGE_XP  = 'linguafacil_user_legacy';
const STORAGE_VARIANTE = 'linguafacil_variante_es';

let varianteRegionale = (langCible === 'es')
  ? (localStorage.getItem('linguafacil_variante_es') || 'es-ES')
  : (LANG_CONFIGS[langCible] ? LANG_CONFIGS[langCible].bcp47 : langCible);

// Niveaux de progression
const LEVELS = [
  { niveau: 1, nom: 'Principiante', xpMin: 0,   xpNext: 15,  icon: '🌱' },
  { niveau: 2, nom: 'Aprendiz',     xpMin: 15,  xpNext: 40,  icon: '📚' },
  { niveau: 3, nom: 'Estudiante',   xpMin: 40,  xpNext: 80,  icon: '✏️' },
  { niveau: 4, nom: 'Avanzado',     xpMin: 80,  xpNext: 150, icon: '🎓' },
  { niveau: 5, nom: 'Experto',      xpMin: 150, xpNext: 250, icon: '⭐' },
  { niveau: 6, nom: 'Maestro',      xpMin: 250, xpNext: null, icon: '🏆' }
];

// Définition des badges
const BADGES_DEF = [
  { id: 'first_correct',    icon: '🎯', nom: 'Premier pas',  desc: '1ère bonne réponse',          cond: u => u.xp >= 1 },
  { id: 'serie_3',          icon: '🔥', nom: 'En feu',       desc: 'Série de 3',                  cond: u => u.maxSerie >= 3 },
  { id: 'serie_5',          icon: '💥', nom: 'Explosif',     desc: 'Série de 5',                  cond: u => u.maxSerie >= 5 },
  { id: 'perfect',          icon: '⭐', nom: 'Parfait',      desc: 'Session 10/10',               cond: u => u.sessionParfaites >= 1 },
  { id: 'sessions_5',       icon: '💪', nom: 'Assidu',       desc: '5 sessions terminées',        cond: u => u.sessions >= 5 },
  { id: 'niveau_3',         icon: '🎓', nom: 'Étudiant',     desc: 'Niveau Estudiante atteint',   cond: u => u.xp >= 40 },
  { id: 'niveau_5',         icon: '🏆', nom: 'Expert',       desc: 'Niveau Experto atteint',      cond: u => u.xp >= 150 },
  { id: 'phrases_ok',       icon: '📝', nom: 'Grammairien',  desc: 'Session Phrases terminée',    cond: u => u.phrasesSessions >= 1 }
];

// =============================================
// STATE
// =============================================
let modeJeu = "flip";

let state = {
  themeActuel: null,
  niveauActuel: null,
  cartes: [],
  indexActuel: 0,
  scoreOui: 0,
  scoreNon: 0,
  serie: 0,
  maxSerie: 0,
  estRetournee: false,
  cartesRatees: [],
  modeRevision: false
};

let phraseState = {
  themeActuel: null,
  niveauActuel: null,
  phrases: [],
  indexActuel: 0,
  scoreOui: 0,
  scoreNon: 0,
  serie: 0,
  maxSerie: 0,
  estRepondu: false,
  cartesRatees: []
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
    const raw = localStorage.getItem(storageKey('progress'));
    if (!raw) return {};
    const data = JSON.parse(raw);
    // Migration : ancien format sans cle "meilleur"
    Object.values(data).forEach(theme => {
      Object.values(theme).forEach(niveau => {
        if (niveau.meilleur === undefined) {
          niveau.meilleur = niveau.meilleurScore || niveau.score || niveau.pourcentage || 0;
          if (!niveau.totalVu) niveau.totalVu = 10;
        }
      });
    });
    return data;
  } catch(e) { return {}; }
}

function sauvegarderProgression(theme, niveau, bon, total) {
  const prog = chargerProgression();
  if (!prog[theme]) prog[theme] = {};
  const ancien = prog[theme][niveau] || { meilleur: 0, totalVu: 0 };
  const pct = Math.round((bon / total) * 100);
  prog[theme][niveau] = {
    meilleur: Math.max(ancien.meilleur || 0, pct),
    totalVu: (ancien.totalVu || 0) + total,
    derniereSession: new Date().toISOString()
  };
  localStorage.setItem(storageKey('progress'), JSON.stringify(prog));
}

// =============================================
// XP · NIVEAUX · BADGES
// =============================================
function chargerUser() {
  try {
    const raw = localStorage.getItem(storageKey('user'));
    const def = { xp: 0, sessions: 0, badges: [], maxSerie: 0, sessionParfaites: 0, phrasesSessions: 0, activityDays: [] };
    if (!raw) return def;
    const u = JSON.parse(raw);
    if (!u.activityDays) u.activityDays = [];
    return Object.assign(def, u);
  } catch(e) {
    return { xp: 0, sessions: 0, badges: [], maxSerie: 0, sessionParfaites: 0, phrasesSessions: 0 };
  }
}
function sauvegarderUser(u) { localStorage.setItem(storageKey('user'), JSON.stringify(u)); }

function obtenirNiveau(xp) {
  let lv = LEVELS[0];
  for (const l of LEVELS) { if (xp >= l.xpMin) lv = l; else break; }
  return lv;
}

function verifierBadges(user) {
  const nouveaux = [];
  BADGES_DEF.forEach(b => {
    if (!user.badges.includes(b.id) && b.cond(user)) {
      user.badges.push(b.id);
      nouveaux.push(b);
    }
  });
  return nouveaux;
}

function montrerToast(texte) {
  const el = document.getElementById('level-up-toast');
  document.getElementById('toast-content').textContent = texte;
  el.classList.add('visible');
  setTimeout(() => el.classList.remove('visible'), 3000);
}

function accorderXPSession(bon, total, maxSerieSession, isPhrases) {
  const user = chargerUser();
  let xp = bon;
  if (bon === total && total >= 5) { xp += 3; user.sessionParfaites++; }
  if (maxSerieSession >= 5) xp += 2;
  user.sessions++;
  marquerJourActif(user);
  if (isPhrases) user.phrasesSessions = (user.phrasesSessions || 0) + 1;
  if (maxSerieSession > (user.maxSerie || 0)) user.maxSerie = maxSerieSession;

  const nvAvant = obtenirNiveau(user.xp);
  user.xp += xp;
  const nvApres = obtenirNiveau(user.xp);
  const levelUp = nvApres.niveau > nvAvant.niveau;
  const nouveauxBadges = verifierBadges(user);
  sauvegarderUser(user);

  let delay = 800;
  if (levelUp) {
    setTimeout(() => montrerToast(nvApres.icon + ' Niveau ' + nvApres.niveau + ' — ' + nvApres.nom + ' !'), delay);
    delay += 3400;
  }
  nouveauxBadges.forEach(b => {
    setTimeout(() => montrerToast(b.icon + ' Badge débloqué : ' + b.nom), delay);
    delay += 3400;
  });
  return xp;
}

function afficherNiveauHome() {
  const user = chargerUser();
  const lv = obtenirNiveau(user.xp);
  document.getElementById('level-icon').textContent = lv.icon;
  document.getElementById('level-name').textContent = lv.nom;
  if (lv.xpNext) {
    const pct = Math.round(((user.xp - lv.xpMin) / (lv.xpNext - lv.xpMin)) * 100);
    document.getElementById('level-xp-bar').style.width = pct + '%';
    const j = (user.activityDays || []).length;
    document.getElementById('level-xp-text').textContent = user.xp + ' / ' + lv.xpNext + ' XP · 🗓 ' + j + ' jour' + (j > 1 ? 's' : '');
  } else {
    document.getElementById('level-xp-bar').style.width = '100%';
    const j2 = (user.activityDays || []).length;
    document.getElementById('level-xp-text').textContent = user.xp + ' XP · 🗓 ' + j2 + ' jour' + (j2 > 1 ? 's' : '') + ' · Niveau max 🏆';
  }
}

function afficherBadges() {
  const user = chargerUser();
  const grid = document.getElementById('badges-grid');
  grid.innerHTML = '';
  BADGES_DEF.forEach(b => {
    const earned = user.badges.includes(b.id);
    grid.innerHTML += '<div class="badge-item ' + (earned ? 'earned' : 'locked') + '">' +
      '<span class="badge-icon">' + b.icon + '</span>' +
      '<span class="badge-nom">' + b.nom + '</span>' +
      '<span class="badge-desc">' + b.desc + '</span>' +
    '</div>';
  });
}


function estDebloque(themeCle, niveauCle) {
  const prerequis = PREREQUIS[niveauCle];
  if (!prerequis) return true;
  const prog = chargerProgression();
  return prog[themeCle] && prog[themeCle][prerequis] && (prog[themeCle][prerequis].meilleur || 0) >= 50;
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
  afficherNiveauHome();
  const grid = document.getElementById('theme-grid');
  grid.innerHTML = '';

  Object.entries(DATA).forEach(([cle, theme]) => {
    const niveaux = Object.keys(NIVEAUX_CONFIG);
    const completes = niveaux.filter(n => prog[cle] && prog[cle][n] && (prog[cle][n].meilleur || 0) >= 50).length;
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

  // Resume progression
  const summary = document.getElementById('progress-summary');
  const touches = Object.entries(prog).filter(([,v]) => Object.keys(v).length > 0);
  if (touches.length > 0) {
    summary.innerHTML = '<h3>Ma progression</h3><div class="progress-tags">' +
      touches.map(([cle, niveaux]) => {
        const themeData = DATA[cle];
        if (!themeData) return '';
        const best = Object.entries(niveaux).map(([n, d]) => {
          const cfg = NIVEAUX_CONFIG[n];
          if (!cfg) return '';
          return cfg.icone + ' ' + (d.meilleur || 0) + '%';
        }).filter(Boolean).join(' ');
        return `<span class="progress-tag">${themeData.icone} ${themeData.nom}: ${best}</span>`;
      }).filter(Boolean).join('') + '</div>';
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
          ? `<div class="level-card-score">${stats ? (stats.meilleur || 0) + '%' : '--'}</div>
             <div class="level-card-cards">10 cartes</div>`
          : `<div class="level-card-locked-msg">Finissez le niveau precedent</div>`
        }
      </div>`;

    if (debloque) {
      div.addEventListener('click', () => {
        if (modeJeu === 'write') demarrerSessionEcriture(niveauCle);
        else if (modeJeu === 'phrases') demarrerSessionPhrases(niveauCle);
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

  if (cartesRevision) {
    state.cartes = melanger(cartesRevision);
  } else {
    state.cartes = melanger(theme[niveauCle]);
  }

  state.indexActuel = 0;
  state.scoreOui = 0;
  state.scoreNon = 0;
  state.serie = 0;
  state.maxSerie = 0;
  state.estRetournee = false;
  state.cartesRatees = [];

  document.getElementById('session-theme-label').textContent = theme.icone + ' ' + theme.nom;
  document.getElementById('session-level-badge').textContent = NIVEAUX_CONFIG[niveauCle].nom;

  afficherEcran('screen-session');
  afficherCarte();
}

function getDistractors(correctFr, count) {
  const pool = [];
  Object.values(DATA).forEach(theme => {
    ['debutant', 'intermediaire', 'avance'].forEach(niv => {
      theme[niv].forEach(c => {
        if (c.fr !== correctFr) pool.push(c.fr);
      });
    });
  });
  return melanger(pool).slice(0, count);
}

function afficherCarte() {
  const carte = state.cartes[state.indexActuel];
  const total = state.cartes.length;

  document.getElementById('card-counter').textContent = 'Carte ' + (state.indexActuel + 1) + ' / ' + total;
  document.getElementById('progress-bar').style.width = (state.indexActuel / total * 100) + '%';
  document.getElementById('score-good').textContent = '✓ ' + state.scoreOui;
  document.getElementById('score-bad').textContent  = '✗ ' + state.scoreNon;
  document.getElementById('score-serie').textContent = '🔥 ' + state.serie;

  // Afficher le mot espagnol
  document.getElementById('es-word-display').textContent = carte.es;

  // 3 options: 1 correct + 2 distracteurs
  const distractors = getDistractors(carte.fr, 2);
  const options = melanger([
    { fr: carte.fr, correct: true },
    { fr: distractors[0], correct: false },
    { fr: distractors[1], correct: false }
  ]);

  const trio = document.getElementById('cards-trio');
  trio.innerHTML = '';
  options.forEach((opt, i) => {
    const scene = document.createElement('div');
    scene.className = 'option-scene';
    const icon = opt.correct ? '✓' : '✗';
    scene.innerHTML =
      '<div class="option-card" id="option-' + i + '" data-correct="' + opt.correct + '">' +
        '<div class="option-face option-front">' +
          '<p class="option-lang">FR · Français</p>' +
          '<p class="option-word">' + opt.fr + '</p>' +
        '</div>' +
        '<div class="option-face option-back">' +
          '<p class="option-result-icon">' + icon + '</p>' +
          '<p class="option-word">' + opt.fr + '</p>' +
        '</div>' +
      '</div>';
    scene.addEventListener('click', () => choisirOption(opt.correct, carte));
    trio.appendChild(scene);
  });

  state.estRetournee = false;
  const mz = document.getElementById('mnemo-zone');
  if (mz) mz.style.display = 'none';
}

// =============================================
// RECONNAISSANCE VOCALE
// =============================================
function lancerReconnaissance(motCible, bouton) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    montrerToast('🎤 Non disponible — utilisez Chrome ou Edge');
    return;
  }
  if (bouton.classList.contains('listening')) return;

  const rec = new SR();
  rec.lang = varianteRegionale;
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 5;

  bouton.textContent = '⏺';
  bouton.classList.add('listening');

  const reset = () => { bouton.classList.remove('listening'); bouton.textContent = '🎤'; };

  rec.onresult = (e) => {
    const transcripts = Array.from(e.results[0]).map(r => normaliserReponse(r.transcript));
    const cible = normaliserReponse(motCible);
    const cibleNue = cible.replace(/^(el|la|los|las|un|una)\s+/, '').trim();
    const correct = transcripts.some(t => t === cible || t === cibleNue || t.includes(cibleNue));

    bouton.textContent = correct ? '✅' : '❌';
    bouton.classList.remove('listening');

    if (correct) {
      montrerToast('¡Muy bien! Prononciation correcte 👏');
    } else {
      montrerToast('🎤 Entendu : "' + transcripts[0] + '" — Attendu : "' + motCible + '"');
      prononcer(motCible);
    }
    setTimeout(reset, 2000);
  };

  rec.onerror = (e) => {
    reset();
    if (e.error !== 'aborted') {
      montrerToast('🎤 ' + (e.error === 'no-speech' ? 'Rien entendu...' : 'Erreur : ' + e.error));
    }
  };

  rec.onend = () => { if (bouton.classList.contains('listening')) reset(); };

  try { rec.start(); } catch(err) { reset(); }
}


function prononcer(texte) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(texte);
  utter.lang = varianteRegionale;
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

function choisirOption(correct, carte) {
  if (state.estRetournee) return;
  state.estRetournee = true;

  // Prononcer le mot espagnol
  prononcer(carte.es);

  // Retourner toutes les cartes avec couleur correct/wrong
  const trio = document.getElementById('cards-trio');
  trio.querySelectorAll('.option-scene').forEach(scene => {
    const card = scene.querySelector('.option-card');
    card.classList.add(card.dataset.correct === 'true' ? 'correct' : 'wrong');
    setTimeout(() => card.classList.add('is-flipped'), 50);
    scene.style.cursor = 'default';
    scene.style.pointerEvents = 'none';
  });

  if (correct) {
    state.scoreOui++;
    state.serie++;
    if (state.serie > state.maxSerie) state.maxSerie = state.serie;
    const elSerie = document.getElementById('score-serie');
    if (state.serie >= 3) { elSerie.classList.remove('hot'); void elSerie.offsetWidth; elSerie.classList.add('hot'); }
    encouragerUtilisateur(state.serie);
  } else {
    state.scoreNon++;
    state.serie = 0; // reset silencieux — pas de notification négative
    state.cartesRatees.push(carte);
  }

  // Afficher la mnémotechnique après le retournement
  setTimeout(() => afficherMnemo(carte.es), 300);

  setTimeout(() => {
    state.indexActuel++;
    if (state.indexActuel < state.cartes.length) {
      afficherCarte();
    } else {
      terminerSession();
    }
  }, 1500);
}

function terminerSession() {
  const total = state.cartes.length;
  const bon = state.scoreOui;
  const pct = Math.round((bon / total) * 100);

  if (!state.modeRevision && state.themeActuel !== '_custom') {
    sauvegarderProgression(state.themeActuel, state.niveauActuel, bon, total);
  }
  if (!state.modeRevision) {
    accorderXPSession(bon, total, state.maxSerie, false);
  }

  document.getElementById('result-good').textContent = bon;
  document.getElementById('result-bad').textContent  = total - bon;
  document.getElementById('result-score').textContent = pct + '%';

  let emoji, titre, sous;
  if (pct >= 90) {
    emoji = '🏆'; titre = 'Excellent !'; sous = 'Parfait, vous maitrisez ce niveau !';
    lancerConfettis();
  } else if (pct >= 70) {
    emoji = '🌟'; titre = 'Tres bien !'; sous = "Encore un peu d'entrainement !";
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
// SESSION ECRITURE
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
  document.getElementById('btn-validate').style.display = '';
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

  // Accepter aussi sans article
  const variantes = [attendu];
  const sanArticle = attendu.replace(/^(le |la |l |les |un |une |des )/, '');
  if (sanArticle !== attendu) variantes.push(sanArticle);

  const correct = variantes.some(v => reponse === v || reponse.includes(v) || v.includes(reponse));

  writeState.reponduActuel = true;
  document.getElementById('btn-validate').style.display = 'none';
  document.getElementById('btn-next-write').style.display = 'inline-block';

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
  accorderXPSession(bon, total, 0, false);

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
    emoji = '🌟'; titre = 'Tres bien !'; sous = "Votre orthographe s'ameliore !";
  } else if (pct >= 50) {
    emoji = '💪'; titre = 'Pas mal !'; sous = "Continuez a pratiquer l'ecriture !";
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
// GAMIFICATION SAINE
// =============================================
const ENCOURAGEMENTS = [
  '¡Vamos! 💪', '¡Excelente! 🌟', 'Continue comme ça !',
  '¡Genial! 🎉', 'Tu progresses bien !', '¡Muy bien! ✨',
  'En pleine forme !', '¡Fantástico! 🚀'
];

function marquerJourActif(user) {
  const today = new Date().toISOString().slice(0, 10);
  if (!user.activityDays.includes(today)) {
    user.activityDays.push(today);
    if (user.activityDays.length > 365) user.activityDays = user.activityDays.slice(-365);
  }
}

// Encouragement positif aux paliers de série (3, 5, 10) — pas à chaque réponse
function encouragerUtilisateur(serie) {
  const paliers = [3, 5, 10, 15, 20];
  if (paliers.includes(serie)) {
    const msg = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
    montrerToast(msg + ' ' + serie + " d'affilée !");
  }
}


// =============================================
// MNÉMOTECHNIQUES
// =============================================
function chargerMnemos() {
  try { return JSON.parse(localStorage.getItem(storageKey('mnemo')) || '{}'); } catch(e) { return {}; }
}
function sauvegarderMnemo(esWord, texte) {
  const m = chargerMnemos();
  if (texte) m[esWord] = texte; else delete m[esWord];
  localStorage.setItem(storageKey('mnemo'), JSON.stringify(m));
}

function afficherMnemo(esWord) {
  const zone = document.getElementById('mnemo-zone');
  if (!zone) return;
  const astuce = chargerMnemos()[esWord] || '';

  zone.innerHTML =
    '<div class="mnemo-content">' +
      (astuce
        ? '<p class="mnemo-text">💡 ' + astuce + '</p>'
        : '<p class="mnemo-empty">Aucune astuce — ajoutez-en une !</p>') +
      '<button class="btn-mnemo-edit" id="btn-mnemo-edit">' + (astuce ? '✏️ Modifier' : '＋ Astuce') + '</button>' +
    '</div>' +
    '<div class="mnemo-edit-form" id="mnemo-edit-form">' +
      '<input type="text" class="mnemo-input" id="mnemo-input" placeholder="Ex: ressemble à un mot français..." value="' + astuce.replace(/"/g, '&quot;') + '">' +
      '<button class="btn-mnemo-save" id="btn-mnemo-save">✓</button>' +
    '</div>';

  zone.style.display = 'block';

  document.getElementById('btn-mnemo-edit').addEventListener('click', () => {
    const form = document.getElementById('mnemo-edit-form');
    form.classList.toggle('visible');
    if (form.classList.contains('visible')) document.getElementById('mnemo-input').focus();
  });

  const sauvegarder = () => {
    const val = document.getElementById('mnemo-input').value.trim();
    sauvegarderMnemo(esWord, val);
    afficherMnemo(esWord);
  };
  document.getElementById('btn-mnemo-save').addEventListener('click', sauvegarder);
  document.getElementById('mnemo-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sauvegarder();
  });
}


// =============================================
// LISTE DE MOTS PERSO
// =============================================
function chargerListePerso() {
  try { return JSON.parse(localStorage.getItem(storageKey('custom')) || '[]'); } catch(e) { return []; }
}
function sauvegarderListePerso(liste) { localStorage.setItem(storageKey('custom'), JSON.stringify(liste)); }

function afficherListePerso() {
  const liste = chargerListePerso();
  const container = document.getElementById('custom-list');
  const countEl = document.getElementById('custom-count');
  countEl.textContent = liste.length + ' mot(s)';
  const playBtn = document.getElementById('btn-custom-play');
  playBtn.disabled = liste.length < 3;

  container.innerHTML = '';
  if (liste.length === 0) {
    container.innerHTML = '<p style="color:var(--text-light);text-align:center;font-size:0.85rem;padding:12px">Aucun mot ajouté</p>';
    return;
  }
  liste.forEach((mot, i) => {
    const div = document.createElement('div');
    div.className = 'custom-word-item';
    div.innerHTML =
      '<span class="custom-word-es">' + mot.es + '</span>' +
      '<span class="custom-word-sep">→</span>' +
      '<span class="custom-word-fr">' + mot.fr + '</span>' +
      '<button class="btn-custom-delete" data-idx="' + i + '" title="Supprimer">✕</button>';
    div.querySelector('.btn-custom-delete').addEventListener('click', () => {
      const l = chargerListePerso();
      l.splice(i, 1);
      sauvegarderListePerso(l);
      afficherListePerso();
    });
    container.appendChild(div);
  });
}

function ajouterMotPerso(es, fr) {
  es = es.trim(); fr = fr.trim();
  if (!es || !fr) { montrerToast('Remplissez les deux champs'); return false; }
  const liste = chargerListePerso();
  if (liste.some(m => m.es.toLowerCase() === es.toLowerCase())) {
    montrerToast('Ce mot existe déjà'); return false;
  }
  liste.push({ id: Date.now(), es, fr });
  sauvegarderListePerso(liste);
  return true;
}

function importerMotsPerso(texte) {
  const lignes = texte.split('\n').map(l => l.trim()).filter(Boolean);
  let ajoutes = 0;
  lignes.forEach(ligne => {
    const parts = ligne.split(',');
    if (parts.length >= 2) {
      const es = parts[0].trim(), fr = parts.slice(1).join(',').trim();
      if (ajouterMotPerso(es, fr)) ajoutes++;
    }
  });
  return ajoutes;
}

function demarrerSessionCustom() {
  const liste = chargerListePerso();
  if (liste.length < 3) { montrerToast('Ajoutez au moins 3 mots !'); return; }

  const cartes = liste.map(m => ({ es: m.es, fr: m.fr, ex: '' }));

  state.themeActuel = '_custom';
  state.niveauActuel = 'perso';
  state.modeRevision = false;
  state.cartes = melanger(cartes);
  state.indexActuel = 0;
  state.scoreOui = 0;
  state.scoreNon = 0;
  state.serie = 0;
  state.maxSerie = 0;
  state.estRetournee = false;
  state.cartesRatees = [];

  document.getElementById('session-theme-label').textContent = '📝 Ma liste';
  document.getElementById('session-level-badge').textContent = 'Perso';

  afficherEcran('screen-session');
  afficherCarte();
}

function ouvrirListePerso() {
  afficherListePerso();
  afficherEcran('screen-custom');
}


// =============================================
// SESSION PHRASES À TROUS
// =============================================
function genererPhrases(themeCle, niveauCle) {
  const cartes = DATA[themeCle][niveauCle];
  const result = [];
  cartes.forEach(carte => {
    const mot = carte.es.replace(/^(el|la|los|las|un|una)\s+/i, '').trim();
    const ex = carte.ex;
    // Essai avec délimiteur de mot (scripts latins + cyrillique)
    try {
      const re   = new RegExp('\\b' + mot.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b', 'i');
      const repl = new RegExp('\\b' + mot.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b', 'gi');
      const repl2= new RegExp('\\b' + mot.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + 's\\b', 'gi');
      if (re.test(ex)) {
        result.push({ sentence: ex.replace(repl, '___'), answer: mot, fr: carte.fr, es: carte.es });
        return;
      } else if (new RegExp('\\b' + mot.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + 's\\b','i').test(ex)) {
        result.push({ sentence: ex.replace(repl2, '___'), answer: mot, fr: carte.fr, es: carte.es });
        return;
      }
    } catch(e) {}
    // Fallback : remplacement simple de sous-chaîne (CJK, arabe, hindi...)
    if (ex.includes(mot)) {
      result.push({ sentence: ex.replace(mot, '___'), answer: mot, fr: carte.fr, es: carte.es });
    }
  });
  return melanger(result);
}

function demarrerSessionPhrases(niveauCle) {
  const theme = DATA[state.themeActuel];
  phraseState.themeActuel = state.themeActuel;
  phraseState.niveauActuel = niveauCle;
  phraseState.phrases = genererPhrases(state.themeActuel, niveauCle);
  phraseState.indexActuel = 0;
  phraseState.scoreOui = 0;
  phraseState.scoreNon = 0;
  phraseState.serie = 0;
  phraseState.maxSerie = 0;
  phraseState.estRepondu = false;
  phraseState.cartesRatees = [];

  document.getElementById('phrases-theme-label').textContent = theme.icone + ' ' + theme.nom;
  document.getElementById('phrases-level-badge').textContent = NIVEAUX_CONFIG[niveauCle].nom;

  if (phraseState.phrases.length === 0) {
    alert('Pas de phrases disponibles pour ce niveau.');
    return;
  }
  afficherEcran('screen-phrases');
  afficherPhrase();
}

function afficherPhrase() {
  const ph = phraseState.phrases[phraseState.indexActuel];
  const total = phraseState.phrases.length;

  document.getElementById('phrases-card-counter').textContent = 'Phrase ' + (phraseState.indexActuel + 1) + ' / ' + total;
  document.getElementById('phrases-progress-bar').style.width = (phraseState.indexActuel / total * 100) + '%';
  document.getElementById('phrases-score-good').textContent = '✓ ' + phraseState.scoreOui;
  document.getElementById('phrases-score-bad').textContent  = '✗ ' + phraseState.scoreNon;
  document.getElementById('phrases-score-serie').textContent = '🔥 ' + phraseState.serie;

  // Phrase avec trou mis en valeur
  document.getElementById('phrase-sentence').innerHTML =
    ph.sentence.replace('___', '<span class="phrase-blank" id="phrase-blank">___</span>');

  // Bouton prononciation lit la phrase complète
  document.getElementById('btn-prononcer-phrases').onclick = () =>
    prononcer(ph.sentence.replace('___', ph.answer));

  // 3 options : 1 correcte + 2 distracteurs du même thème/niveau
  const pool = DATA[phraseState.themeActuel][phraseState.niveauActuel]
    .map(c => c.es.replace(/^(el|la|los|las|un|una)\s+/i, '').trim())
    .filter(m => m !== ph.answer);
  const distractors = melanger(pool).slice(0, 2);
  while (distractors.length < 2) distractors.push('?');

  const options = melanger([
    { mot: ph.answer, correct: true },
    { mot: distractors[0], correct: false },
    { mot: distractors[1], correct: false }
  ]);

  const trio = document.getElementById('phrases-trio');
  trio.innerHTML = '';
  options.forEach((opt, i) => {
    const scene = document.createElement('div');
    scene.className = 'option-scene';
    const icon = opt.correct ? '✓' : '✗';
    scene.innerHTML =
      '<div class="option-card" id="popt-' + i + '" data-correct="' + opt.correct + '">' +
        '<div class="option-face option-front">' +
          '<p class="option-lang">ES · Mot</p>' +
          '<p class="option-word">' + opt.mot + '</p>' +
        '</div>' +
        '<div class="option-face option-back">' +
          '<p class="option-result-icon">' + icon + '</p>' +
          '<p class="option-word">' + opt.mot + '</p>' +
        '</div>' +
      '</div>';
    scene.addEventListener('click', () => choisirMotPhrase(opt.correct, ph));
    trio.appendChild(scene);
  });

  phraseState.estRepondu = false;
}

function choisirMotPhrase(correct, ph) {
  if (phraseState.estRepondu) return;
  phraseState.estRepondu = true;

  prononcer(ph.answer);

  // Remplir le trou avec la bonne réponse
  const blank = document.getElementById('phrase-blank');
  if (blank) {
    blank.textContent = ph.answer;
    blank.classList.add(correct ? 'filled-correct' : 'filled-wrong');
  }

  // Retourner les cartes
  document.getElementById('phrases-trio').querySelectorAll('.option-scene').forEach(scene => {
    const card = scene.querySelector('.option-card');
    card.classList.add(card.dataset.correct === 'true' ? 'correct' : 'wrong');
    setTimeout(() => card.classList.add('is-flipped'), 50);
    scene.style.cursor = 'default';
    scene.style.pointerEvents = 'none';
  });

  if (correct) {
    phraseState.scoreOui++;
    phraseState.serie++;
    if (phraseState.serie > phraseState.maxSerie) phraseState.maxSerie = phraseState.serie;
    const el = document.getElementById('phrases-score-serie');
    if (phraseState.serie >= 3) { el.classList.remove('hot'); void el.offsetWidth; el.classList.add('hot'); }
    encouragerUtilisateur(phraseState.serie);
  } else {
    phraseState.scoreNon++;
    phraseState.serie = 0; // reset silencieux
  }

  setTimeout(() => {
    phraseState.indexActuel++;
    if (phraseState.indexActuel < phraseState.phrases.length) afficherPhrase();
    else terminerSessionPhrases();
  }, 1500);
}

function terminerSessionPhrases() {
  const total = phraseState.phrases.length;
  const bon = phraseState.scoreOui;
  const pct = Math.round((bon / total) * 100);

  sauvegarderProgression(phraseState.themeActuel, phraseState.niveauActuel, bon, total);
  accorderXPSession(bon, total, phraseState.maxSerie, true);

  // Réutiliser l'écran résultats existant
  state.themeActuel = phraseState.themeActuel;
  state.niveauActuel = phraseState.niveauActuel;
  state.scoreOui = bon;
  state.scoreNon = total - bon;
  state.cartesRatees = [];
  state.modeRevision = false;

  document.getElementById('result-good').textContent = bon;
  document.getElementById('result-bad').textContent  = total - bon;
  document.getElementById('result-score').textContent = pct + '%';
  document.getElementById('btn-review').style.display = 'none';

  let emoji, titre, sous;
  if (pct >= 90) { emoji = '🏆'; titre = 'Excellent !'; sous = 'Grammaire parfaite !'; lancerConfettis(); }
  else if (pct >= 70) { emoji = '🌟'; titre = 'Très bien !'; sous = 'Vos phrases progressent !'; }
  else if (pct >= 50) { emoji = '💪'; titre = 'Pas mal !'; sous = 'Continuez à pratiquer !'; }
  else { emoji = '📚'; titre = 'À revoir !'; sous = "Révisez d'abord le vocabulaire."; }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-title').textContent = titre;
  document.getElementById('results-subtitle').textContent = sous;

  afficherEcran('screen-results');
}


// =============================================
// THEME SOMBRE
// =============================================
function setMode(mode) {
  modeJeu = mode;
  document.getElementById('mode-flip').classList.toggle('active', mode === 'flip');
  document.getElementById('mode-write').classList.toggle('active', mode === 'write');
  document.getElementById('mode-phrases').classList.toggle('active', mode === 'phrases');
}
// Alias pour l'HTML onclick
window.setMode = setMode;

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('btn-theme').textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('linguafacil_theme', isDark ? 'light' : 'dark');
}

// =============================================
// PAGE STATISTIQUES
// =============================================
function afficherStats() {
  const prog = chargerProgression();

  let totalCartes = 0, niveauxCompletes = 0, meilleurGlobal = 0;
  Object.entries(prog).forEach(([themeCle, niveaux]) => {
    Object.entries(niveaux).forEach(([niveauCle, stats]) => {
      totalCartes += stats.totalVu || 0;
      if ((stats.meilleur || 0) >= 50) niveauxCompletes++;
      if ((stats.meilleur || 0) > meilleurGlobal) meilleurGlobal = stats.meilleur || 0;
    });
  });

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
      <span class="stats-global-number">${meilleurGlobal > 0 ? meilleurGlobal + '%' : '--'}</span>
      <span class="stats-global-label">Meilleur score</span>
    </div>`;

  const themesDiv = document.getElementById('stats-themes');
  themesDiv.innerHTML = '';
  const totalNiveaux = Object.keys(NIVEAUX_CONFIG).length;

  Object.entries(DATA).forEach(([cle, theme]) => {
    const niveauxData = prog[cle] || {};
    const niveauxFaits = Object.keys(niveauxData).length;
    const meilleur = niveauxFaits > 0
      ? Math.max(...Object.values(niveauxData).map(d => d.meilleur || 0))
      : 0;
    const pct = Math.round((niveauxFaits / totalNiveaux) * 100);
    const detail = niveauxFaits > 0
      ? Object.entries(niveauxData).map(([n, d]) => NIVEAUX_CONFIG[n].icone + ' ' + (d.meilleur || 0) + '%').join(' · ')
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

  afficherBadges();
  afficherEcran('screen-stats');
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser la langue active
  const langSelectEl = document.getElementById('lang-select');
  if (langSelectEl) {
    langSelectEl.value = langCible;
    langSelectEl.addEventListener('change', () => {
      changerLangue(langSelectEl.value);
    });
  }

  // Variante régionale (espagnol seulement)
  const selectVariante = document.getElementById('variante-select');
  if (selectVariante) {
    selectVariante.value = varianteRegionale;
    selectVariante.style.display = (langCible === 'es') ? '' : 'none';
    selectVariante.addEventListener('change', () => {
      varianteRegionale = selectVariante.value;
      localStorage.setItem('linguafacil_variante_es', varianteRegionale);
      const noms = { 'es-ES': 'Castillan 🇪🇸', 'es-MX': 'Mexicain 🇲🇽', 'es-AR': 'Argentin 🇦🇷' };
      montrerToast('Variante : ' + (noms[varianteRegionale] || varianteRegionale));
    });
  }

  // Appliquer la langue persistée (met à jour DATA + visuel)
  changerLangue(langCible);

  // Restaurer theme
  const savedTheme = localStorage.getItem('linguafacil_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('btn-theme').textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  initAccueil();

  document.getElementById('back-to-home').addEventListener('click', () => {
    afficherEcran('screen-home');
    initAccueil();
  });
  document.getElementById('back-to-level').addEventListener('click', () => ouvrirNiveaux(state.themeActuel));
  document.getElementById('back-to-level-write').addEventListener('click', () => ouvrirNiveaux(state.themeActuel));
  document.getElementById('back-to-level-phrases').addEventListener('click', () => ouvrirNiveaux(phraseState.themeActuel || state.themeActuel));
  document.getElementById('back-from-custom').addEventListener('click', () => {
    afficherEcran('screen-home');
    initAccueil();
  });
  document.getElementById('btn-open-custom').addEventListener('click', ouvrirListePerso);
  document.getElementById('btn-custom-add').addEventListener('click', () => {
    const es = document.getElementById('custom-input-es').value;
    const fr = document.getElementById('custom-input-fr').value;
    if (ajouterMotPerso(es, fr)) {
      document.getElementById('custom-input-es').value = '';
      document.getElementById('custom-input-fr').value = '';
      afficherListePerso();
    }
  });
  document.getElementById('custom-input-fr').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('btn-custom-add').click();
  });
  document.getElementById('btn-custom-import').addEventListener('click', () => {
    const texte = document.getElementById('custom-import-area').value;
    const n = importerMotsPerso(texte);
    document.getElementById('custom-import-area').value = '';
    afficherListePerso();
    montrerToast(n > 0 ? n + ' mot(s) importé(s) ✓' : 'Aucun mot valide trouvé');
  });
  document.getElementById('btn-custom-clear').addEventListener('click', () => {
    if (confirm('Effacer toute la liste ?')) {
      sauvegarderListePerso([]);
      afficherListePerso();
    }
  });
  document.getElementById('btn-custom-play').addEventListener('click', () => {
    demarrerSessionCustom();
  });
  document.getElementById('back-from-stats').addEventListener('click', () => {
    afficherEcran('screen-home');
    initAccueil();
  });

  // Bouton prononciation
  document.getElementById('btn-prononcer').addEventListener('click', () => {
    const mot = document.getElementById('es-word-display').textContent;
    if (mot) prononcer(mot);
  });

  // Session ecriture
  document.getElementById('btn-validate').addEventListener('click', validerEcriture);
  document.getElementById('btn-next-write').addEventListener('click', suivantEcriture);
  document.getElementById('write-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (!writeState.reponduActuel) validerEcriture();
      else suivantEcriture();
    }
  });

  // Resultats
  document.getElementById('btn-retry').addEventListener('click', () => {
    if (modeJeu === 'write') demarrerSessionEcriture(writeState.niveauActuel);
    else if (modeJeu === 'phrases') demarrerSessionPhrases(phraseState.niveauActuel);
    else demarrerSession(state.niveauActuel);
  });
  // Note: btn-review pour QCM utilise state.cartesRatees
  document.getElementById('btn-review').addEventListener('click', () => {
    if (modeJeu === 'write') {
      writeState.cartes = melanger(writeState.cartesRatees);
      writeState.indexActuel = 0;
      writeState.scoreOui = 0;
      writeState.scoreNon = 0;
      writeState.cartesRatees = [];
      afficherEcran('screen-write');
      afficherCarteEcriture();
    } else {
      demarrerSession(state.niveauActuel, state.cartesRatees);
    }
  });
  document.getElementById('btn-home').addEventListener('click', () => {
    afficherEcran('screen-home');
    initAccueil();
  });

  // Bouton micro — flip session
  document.getElementById('btn-mic').addEventListener('click', () => {
    const mot = document.getElementById('es-word-display').textContent;
    if (mot) lancerReconnaissance(mot, document.getElementById('btn-mic'));
  });
  // Bouton micro — phrases session
  document.getElementById('btn-mic-phrases').addEventListener('click', () => {
    const ph = phraseState.phrases[phraseState.indexActuel];
    if (ph) lancerReconnaissance(ph.answer, document.getElementById('btn-mic-phrases'));
  });

  // Stats et theme
  document.getElementById('btn-open-stats').addEventListener('click', afficherStats);
  document.getElementById('btn-theme').addEventListener('click', toggleTheme);
});

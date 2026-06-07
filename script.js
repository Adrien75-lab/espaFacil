
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
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'hello', fr: 'bonjour', ex: 'Hello, how are you?' },
        { es: 'goodbye', fr: 'au revoir', ex: 'Goodbye, see you soon!' },
        { es: 'please', fr: "s'il vous plaît", ex: 'Please help me.' },
        { es: 'thank you', fr: 'merci', ex: 'Thank you very much!' },
        { es: 'yes', fr: 'oui', ex: 'Yes, I understand.' },
        { es: 'no', fr: 'non', ex: 'No, thank you.' },
        { es: 'excuse me', fr: 'excusez-moi', ex: 'Excuse me, where is the station?' },
        { es: 'sorry', fr: 'désolé', ex: 'I am sorry for being late.' },
        { es: 'help', fr: "l'aide", ex: 'I need help, please.' },
        { es: 'friend', fr: "l'ami", ex: 'She is my best friend.' }
      ],
      intermediaire: [
        { es: 'understand', fr: 'comprendre', ex: 'Do you understand me?' },
        { es: 'speak', fr: 'parler', ex: 'I speak a little English.' },
        { es: 'learn', fr: 'apprendre', ex: 'I want to learn English.' },
        { es: 'repeat', fr: 'répéter', ex: 'Can you repeat that, please?' },
        { es: 'slowly', fr: 'lentement', ex: 'Please speak slowly.' },
        { es: 'know', fr: 'savoir', ex: 'I do not know the answer.' },
        { es: 'need', fr: 'avoir besoin de', ex: 'I need a moment.' },
        { es: 'want', fr: 'vouloir', ex: 'I want to try.' }
      ],
      avance: [
        { es: 'opportunity', fr: "l'opportunité", ex: 'This is a great opportunity.' },
        { es: 'challenge', fr: 'le défi', ex: 'Every challenge makes us stronger.' },
        { es: 'achieve', fr: 'accomplir', ex: 'I will achieve my goals.' },
        { es: 'responsibility', fr: 'la responsabilité', ex: 'We share the responsibility.' },
        { es: 'curious', fr: 'curieux', ex: 'She is very curious about science.' },
        { es: 'determined', fr: 'déterminé', ex: 'He is determined to succeed.' },
        { es: 'improve', fr: 'améliorer', ex: 'I improve my skills every day.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'apple', fr: 'la pomme', ex: 'I eat an apple every morning.' },
        { es: 'bread', fr: 'le pain', ex: 'The bread is fresh and warm.' },
        { es: 'water', fr: "l'eau", ex: 'I drink water all day long.' },
        { es: 'milk', fr: 'le lait', ex: 'I put milk in my coffee.' },
        { es: 'egg', fr: "l'œuf", ex: 'I eat an egg for breakfast.' },
        { es: 'chicken', fr: 'le poulet', ex: 'The chicken is delicious.' },
        { es: 'rice', fr: 'le riz', ex: 'I cook rice for dinner.' },
        { es: 'fish', fr: 'le poisson', ex: 'I like to eat fish on Fridays.' },
        { es: 'cheese', fr: 'le fromage', ex: 'England has many fine cheeses.' },
        { es: 'soup', fr: 'la soupe', ex: 'This soup is very hot.' }
      ],
      intermediaire: [
        { es: 'strawberry', fr: 'la fraise', ex: 'The strawberries are perfectly ripe.' },
        { es: 'orange juice', fr: "le jus d'orange", ex: 'I drink orange juice every morning.' },
        { es: 'mushroom', fr: 'le champignon', ex: 'I add mushrooms to my pasta.' },
        { es: 'butter', fr: 'le beurre', ex: 'I spread butter on my toast.' },
        { es: 'sugar', fr: 'le sucre', ex: 'Do you take sugar in your tea?' },
        { es: 'pepper', fr: 'le poivre', ex: 'Add a little pepper to the dish.' },
        { es: 'dessert', fr: 'le dessert', ex: 'What would you like for dessert?' },
        { es: 'recipe', fr: 'la recette', ex: "This is my grandmother's recipe." }
      ],
      avance: [
        { es: 'ingredients', fr: 'les ingrédients', ex: 'The ingredients are all fresh.' },
        { es: 'seasoning', fr: "l'assaisonnement", ex: 'The seasoning is perfect.' },
        { es: 'nutritious', fr: 'nutritif', ex: 'This meal is very nutritious.' },
        { es: 'appetite', fr: "l'appétit", ex: 'The smell gives me an appetite.' },
        { es: 'cuisine', fr: 'la cuisine', ex: 'I love Asian cuisine.' },
        { es: 'flavour', fr: 'la saveur', ex: 'The flavour of this dish is unique.' },
        { es: 'portion', fr: 'la portion', ex: 'The portion is very generous.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'airport', fr: "l'aéroport", ex: 'We arrive at the airport at eight.' },
        { es: 'hotel', fr: "l'hôtel", ex: 'The hotel is near the beach.' },
        { es: 'ticket', fr: 'le billet', ex: 'I bought a plane ticket.' },
        { es: 'passport', fr: 'le passeport', ex: 'Do not forget your passport.' },
        { es: 'map', fr: 'la carte', ex: 'I use a map to find my way.' },
        { es: 'train', fr: 'le train', ex: 'The train leaves at nine.' },
        { es: 'bus', fr: 'le bus', ex: 'I take the bus every day.' },
        { es: 'station', fr: 'la gare', ex: 'The station is in the city centre.' },
        { es: 'luggage', fr: 'les bagages', ex: 'My luggage is very heavy.' },
        { es: 'beach', fr: 'la plage', ex: 'We relax on the beach.' }
      ],
      intermediaire: [
        { es: 'booking', fr: 'la réservation', ex: 'I made a booking online.' },
        { es: 'departure', fr: 'le départ', ex: 'The departure is at noon.' },
        { es: 'arrival', fr: "l'arrivée", ex: 'Our arrival is delayed.' },
        { es: 'customs', fr: 'la douane', ex: 'We pass through customs.' },
        { es: 'currency', fr: 'la devise', ex: 'I exchange my currency at the bank.' },
        { es: 'souvenir', fr: 'le souvenir', ex: 'I buy a souvenir for my family.' },
        { es: 'guide', fr: 'le guide', ex: 'The guide shows us the city.' },
        { es: 'adventure', fr: "l'aventure", ex: 'Every trip is a new adventure.' }
      ],
      avance: [
        { es: 'itinerary', fr: "l'itinéraire", ex: 'Our itinerary includes five cities.' },
        { es: 'destination', fr: 'la destination', ex: 'Paris is my dream destination.' },
        { es: 'accommodation', fr: "l'hébergement", ex: 'The accommodation is excellent.' },
        { es: 'explore', fr: 'explorer', ex: 'I explore the old town on foot.' },
        { es: 'landmark', fr: 'le monument', ex: 'Big Ben is a famous landmark.' },
        { es: 'culture', fr: 'la culture', ex: 'I am fascinated by local culture.' },
        { es: 'landscape', fr: 'le paysage', ex: 'The landscape is breathtaking.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'mother', fr: 'la mère', ex: 'My mother cooks very well.' },
        { es: 'father', fr: 'le père', ex: 'My father works in London.' },
        { es: 'sister', fr: 'la sœur', ex: 'My sister is very funny.' },
        { es: 'brother', fr: 'le frère', ex: 'My brother plays football.' },
        { es: 'grandmother', fr: 'la grand-mère', ex: 'My grandmother tells great stories.' },
        { es: 'grandfather', fr: 'le grand-père', ex: 'My grandfather is very wise.' },
        { es: 'baby', fr: 'le bébé', ex: 'The baby sleeps peacefully.' },
        { es: 'child', fr: "l'enfant", ex: 'The child plays in the garden.' },
        { es: 'family', fr: 'la famille', ex: 'My family is very close.' },
        { es: 'home', fr: 'le foyer', ex: 'Home is where the heart is.' }
      ],
      intermediaire: [
        { es: 'cousin', fr: 'le cousin', ex: 'My cousin lives in Scotland.' },
        { es: 'aunt', fr: 'la tante', ex: 'My aunt bakes delicious cakes.' },
        { es: 'uncle', fr: "l'oncle", ex: 'My uncle is a doctor.' },
        { es: 'nephew', fr: 'le neveu', ex: 'My nephew is two years old.' },
        { es: 'niece', fr: 'la nièce', ex: 'My niece loves drawing.' },
        { es: 'husband', fr: 'le mari', ex: 'Her husband is very caring.' },
        { es: 'wife', fr: 'la femme', ex: 'His wife is a teacher.' },
        { es: 'marriage', fr: 'le mariage', ex: 'Their marriage is a success.' }
      ],
      avance: [
        { es: 'relationship', fr: 'la relation', ex: 'A good relationship takes effort.' },
        { es: 'heritage', fr: "l'héritage", ex: 'We share a rich cultural heritage.' },
        { es: 'generation', fr: 'la génération', ex: 'Each generation learns from the last.' },
        { es: 'upbringing', fr: "l'éducation", ex: 'A good upbringing shapes character.' },
        { es: 'tradition', fr: 'la tradition', ex: 'We keep our family traditions alive.' },
        { es: 'bond', fr: 'le lien', ex: 'The bond between siblings is strong.' },
        { es: 'reunion', fr: 'les retrouvailles', ex: 'The family reunion was wonderful.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'red', fr: 'rouge', ex: 'The apple is bright red.' },
        { es: 'blue', fr: 'bleu', ex: 'The sky is clear and blue.' },
        { es: 'green', fr: 'vert', ex: 'The grass is green after the rain.' },
        { es: 'yellow', fr: 'jaune', ex: 'The sun is yellow and warm.' },
        { es: 'black', fr: 'noir', ex: 'I wear a black jacket today.' },
        { es: 'white', fr: 'blanc', ex: 'The snow is completely white.' },
        { es: 'orange', fr: 'orange', ex: 'Her dress is bright orange.' },
        { es: 'pink', fr: 'rose', ex: 'The roses are pale pink.' },
        { es: 'purple', fr: 'violet', ex: 'The sky turns purple at dusk.' },
        { es: 'brown', fr: 'marron', ex: 'The tree trunk is brown.' }
      ],
      intermediaire: [
        { es: 'grey', fr: 'gris', ex: 'The clouds are dark grey.' },
        { es: 'dark', fr: 'foncé', ex: 'I prefer dark colours in winter.' },
        { es: 'light', fr: 'clair', ex: 'She wears light blue in summer.' },
        { es: 'bright', fr: 'vif', ex: 'The painting uses bright colours.' },
        { es: 'pale', fr: 'pâle', ex: 'He looks pale today.' },
        { es: 'colourful', fr: 'coloré', ex: 'The market is very colourful.' },
        { es: 'shade', fr: 'la teinte', ex: 'I like this shade of blue.' },
        { es: 'transparent', fr: 'transparent', ex: 'The glass is transparent.' }
      ],
      avance: [
        { es: 'contrast', fr: 'le contraste', ex: 'The contrast between the colours is striking.' },
        { es: 'vivid', fr: 'éclatant', ex: 'The vivid colours caught my eye.' },
        { es: 'hue', fr: 'la nuance', ex: 'The hue changes in different lights.' },
        { es: 'monochrome', fr: 'monochrome', ex: 'The photo is in monochrome.' },
        { es: 'pigment', fr: 'le pigment', ex: 'Natural pigments are used in this paint.' },
        { es: 'spectrum', fr: 'le spectre', ex: 'A rainbow shows the full spectrum.' },
        { es: 'tint', fr: 'la teinte claire', ex: 'Add a tint of yellow to the mix.' }
      ]
    }
  },
  'it': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'ciao', fr: 'bonjour / salut', ex: 'Ciao, come stai?' },
        { es: 'arrivederci', fr: 'au revoir', ex: 'Arrivederci, a presto!' },
        { es: 'per favore', fr: "s'il vous plaît", ex: 'Per favore, puoi aiutarmi?' },
        { es: 'grazie', fr: 'merci', ex: 'Grazie mille!' },
        { es: 'sì', fr: 'oui', ex: 'Sì, capisco.' },
        { es: 'no', fr: 'non', ex: 'No, grazie.' },
        { es: 'scusa', fr: 'excuse-moi', ex: 'Scusa, dov è la stazione?' },
        { es: 'mi dispiace', fr: 'je suis désolé', ex: 'Mi dispiace per il ritardo.' },
        { es: 'aiuto', fr: "l'aide", ex: 'Ho bisogno di aiuto.' },
        { es: 'amico', fr: "l'ami", ex: 'Lei è la mia migliore amica.' }
      ],
      intermediaire: [
        { es: 'capire', fr: 'comprendre', ex: 'Non capisco questa parola.' },
        { es: 'parlare', fr: 'parler', ex: 'Parlo un po italiano.' },
        { es: 'imparare', fr: 'apprendre', ex: 'Voglio imparare l italiano.' },
        { es: 'ripetere', fr: 'répéter', ex: 'Puoi ripetere, per favore?' },
        { es: 'lentamente', fr: 'lentement', ex: 'Parla più lentamente, ti prego.' },
        { es: 'sapere', fr: 'savoir', ex: 'Non so la risposta.' },
        { es: 'avere bisogno', fr: 'avoir besoin', ex: 'Ho bisogno di un momento.' },
        { es: 'volere', fr: 'vouloir', ex: 'Voglio provare.' }
      ],
      avance: [
        { es: 'opportunità', fr: "l'opportunité", ex: 'Questa è una grande opportunità.' },
        { es: 'sfida', fr: 'le défi', ex: 'Ogni sfida ci rende più forti.' },
        { es: 'raggiungere', fr: 'atteindre', ex: 'Raggiungerò i miei obiettivi.' },
        { es: 'responsabilità', fr: 'la responsabilité', ex: 'Condividiamo la responsabilità.' },
        { es: 'curioso', fr: 'curieux', ex: 'È molto curiosa riguardo alla scienza.' },
        { es: 'determinato', fr: 'déterminé', ex: 'È determinato ad avere successo.' },
        { es: 'migliorare', fr: 'améliorer', ex: 'Miglioro le mie competenze ogni giorno.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'pizza', fr: 'la pizza', ex: 'La pizza margherita è la mia preferita.' },
        { es: 'pasta', fr: 'les pâtes', ex: 'Mangio la pasta ogni domenica.' },
        { es: 'pane', fr: 'le pain', ex: 'Il pane è ancora caldo.' },
        { es: 'acqua', fr: "l'eau", ex: 'Bevo acqua tutto il giorno.' },
        { es: 'vino', fr: 'le vin', ex: 'Il vino rosso italiano è famoso.' },
        { es: 'formaggio', fr: 'le fromage', ex: 'Il parmigiano è un formaggio eccellente.' },
        { es: 'pollo', fr: 'le poulet', ex: 'Il pollo arrosto è delizioso.' },
        { es: 'pesce', fr: 'le poisson', ex: 'Il pesce fresco è ottimo.' },
        { es: 'gelato', fr: 'la glace', ex: 'Il gelato italiano è il migliore del mondo.' },
        { es: 'caffè', fr: 'le café', ex: 'Prendo un caffè ogni mattina.' }
      ],
      intermediaire: [
        { es: 'fragola', fr: 'la fraise', ex: 'Le fragole sono mature e dolci.' },
        { es: 'olio d oliva', fr: "l'huile d'olive", ex: "L'olio d'oliva è essenziale in cucina." },
        { es: 'funghi', fr: 'les champignons', ex: 'I funghi porcini sono deliziosi.' },
        { es: 'burro', fr: 'le beurre', ex: 'Aggiungo il burro alla pasta.' },
        { es: 'zucchero', fr: 'le sucre', ex: 'Vuoi dello zucchero nel caffè?' },
        { es: 'pepe', fr: 'le poivre', ex: 'Aggiungi un po di pepe.' },
        { es: 'dolce', fr: 'le dessert', ex: 'Cosa vuoi come dolce?' },
        { es: 'ricetta', fr: 'la recette', ex: 'Questa è la ricetta di mia nonna.' }
      ],
      avance: [
        { es: 'ingredienti', fr: 'les ingrédients', ex: 'Gli ingredienti sono tutti freschi.' },
        { es: 'condimento', fr: "l'assaisonnement", ex: 'Il condimento è perfetto.' },
        { es: 'nutriente', fr: 'nutritif', ex: 'Questo pasto è molto nutriente.' },
        { es: 'appetito', fr: "l'appétit", ex: "L'odore mi mette appetito." },
        { es: 'cucina', fr: 'la cuisine', ex: 'Adoro la cucina asiatica.' },
        { es: 'sapore', fr: 'la saveur', ex: 'Il sapore di questo piatto è unico.' },
        { es: 'porzione', fr: 'la portion', ex: 'La porzione è molto generosa.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'aeroporto', fr: "l'aéroport", ex: "Arriviamo all'aeroporto alle otto." },
        { es: 'albergo', fr: "l'hôtel", ex: "L'albergo è vicino alla spiaggia." },
        { es: 'biglietto', fr: 'le billet', ex: 'Ho comprato un biglietto aereo.' },
        { es: 'passaporto', fr: 'le passeport', ex: 'Non dimenticare il passaporto.' },
        { es: 'mappa', fr: 'la carte', ex: 'Uso una mappa per orientarmi.' },
        { es: 'treno', fr: 'le train', ex: 'Il treno parte alle nove.' },
        { es: 'autobus', fr: 'le bus', ex: 'Prendo l autobus ogni giorno.' },
        { es: 'stazione', fr: 'la gare', ex: 'La stazione è in centro città.' },
        { es: 'bagaglio', fr: 'les bagages', ex: 'Il mio bagaglio è molto pesante.' },
        { es: 'spiaggia', fr: 'la plage', ex: 'Ci rilassiamo in spiaggia.' }
      ],
      intermediaire: [
        { es: 'prenotazione', fr: 'la réservation', ex: 'Ho fatto una prenotazione online.' },
        { es: 'partenza', fr: 'le départ', ex: 'La partenza è a mezzogiorno.' },
        { es: 'arrivo', fr: "l'arrivée", ex: 'Il nostro arrivo è in ritardo.' },
        { es: 'dogana', fr: 'la douane', ex: 'Passiamo dalla dogana.' },
        { es: 'valuta', fr: 'la devise', ex: 'Cambio la valuta in banca.' },
        { es: 'souvenir', fr: 'le souvenir', ex: 'Compro un souvenir per la famiglia.' },
        { es: 'guida', fr: 'le guide', ex: 'La guida ci mostra la città.' },
        { es: 'avventura', fr: "l'aventure", ex: 'Ogni viaggio è una nuova avventura.' }
      ],
      avance: [
        { es: 'itinerario', fr: "l'itinéraire", ex: "L'itinerario prevede cinque città." },
        { es: 'destinazione', fr: 'la destination', ex: 'Parigi è la mia destinazione dei sogni.' },
        { es: 'alloggio', fr: "l'hébergement", ex: "L'alloggio è eccellente." },
        { es: 'esplorare', fr: 'explorer', ex: 'Esploro il centro storico a piedi.' },
        { es: 'monumento', fr: 'le monument', ex: 'Il Colosseo è un monumento famoso.' },
        { es: 'cultura', fr: 'la culture', ex: 'Sono affascinato dalla cultura locale.' },
        { es: 'paesaggio', fr: 'le paysage', ex: 'Il paesaggio è mozzafiato.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'madre', fr: 'la mère', ex: 'Mia madre cucina molto bene.' },
        { es: 'padre', fr: 'le père', ex: 'Mio padre lavora a Roma.' },
        { es: 'sorella', fr: 'la sœur', ex: 'Mia sorella è molto divertente.' },
        { es: 'fratello', fr: 'le frère', ex: 'Mio fratello gioca a calcio.' },
        { es: 'nonna', fr: 'la grand-mère', ex: 'La nonna racconta storie bellissime.' },
        { es: 'nonno', fr: 'le grand-père', ex: 'Il nonno è molto saggio.' },
        { es: 'bambino', fr: "l'enfant", ex: 'Il bambino gioca in giardino.' },
        { es: 'famiglia', fr: 'la famille', ex: 'La mia famiglia è molto unita.' },
        { es: 'figlio', fr: 'le fils', ex: 'Il figlio studia all università.' },
        { es: 'figlia', fr: 'la fille', ex: 'La figlia ama la musica.' }
      ],
      intermediaire: [
        { es: 'cugino', fr: 'le cousin', ex: 'Mio cugino vive a Milano.' },
        { es: 'zia', fr: 'la tante', ex: 'Mia zia prepara dolci deliziosi.' },
        { es: 'zio', fr: "l'oncle", ex: 'Mio zio è medico.' },
        { es: 'nipote', fr: 'le neveu / la nièce', ex: 'Il nipote ha due anni.' },
        { es: 'marito', fr: 'le mari', ex: 'Il marito è molto premuroso.' },
        { es: 'moglie', fr: 'la femme', ex: 'La moglie è insegnante.' },
        { es: 'matrimonio', fr: 'le mariage', ex: 'Il matrimonio è stato bellissimo.' },
        { es: 'genitori', fr: 'les parents', ex: 'I miei genitori sono in vacanza.' }
      ],
      avance: [
        { es: 'relazione', fr: 'la relation', ex: 'Una buona relazione richiede impegno.' },
        { es: 'eredità', fr: "l'héritage", ex: 'Condividiamo una ricca eredità culturale.' },
        { es: 'generazione', fr: 'la génération', ex: 'Ogni generazione impara dalla precedente.' },
        { es: 'educazione', fr: "l'éducation", ex: "Una buona educazione forma il carattere." },
        { es: 'tradizione', fr: 'la tradition', ex: 'Manteniamo vive le tradizioni di famiglia.' },
        { es: 'legame', fr: 'le lien', ex: 'Il legame tra fratelli è forte.' },
        { es: 'riunione', fr: 'la réunion', ex: 'La riunione di famiglia è stata splendida.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'rosso', fr: 'rouge', ex: 'La mela è di un rosso brillante.' },
        { es: 'blu', fr: 'bleu', ex: 'Il cielo è limpido e blu.' },
        { es: 'verde', fr: 'vert', ex: "L'erba è verde dopo la pioggia." },
        { es: 'giallo', fr: 'jaune', ex: 'Il sole è giallo e caldo.' },
        { es: 'nero', fr: 'noir', ex: 'Indosso una giacca nera oggi.' },
        { es: 'bianco', fr: 'blanc', ex: 'La neve è completamente bianca.' },
        { es: 'arancione', fr: 'orange', ex: 'Il suo vestito è arancione acceso.' },
        { es: 'rosa', fr: 'rose', ex: 'Le rose sono di un rosa pallido.' },
        { es: 'viola', fr: 'violet', ex: 'Il cielo diventa viola al tramonto.' },
        { es: 'marrone', fr: 'marron', ex: 'Il tronco dell albero è marrone.' }
      ],
      intermediaire: [
        { es: 'grigio', fr: 'gris', ex: 'Le nuvole sono grigio scuro.' },
        { es: 'scuro', fr: 'foncé', ex: 'Preferisco i colori scuri in inverno.' },
        { es: 'chiaro', fr: 'clair', ex: "Indossa il blu chiaro d'estate." },
        { es: 'vivace', fr: 'vif', ex: 'Il dipinto usa colori vivaci.' },
        { es: 'pallido', fr: 'pâle', ex: 'Sembra pallido oggi.' },
        { es: 'colorato', fr: 'coloré', ex: 'Il mercato è molto colorato.' },
        { es: 'tonalità', fr: 'la teinte', ex: 'Mi piace questa tonalità di blu.' },
        { es: 'trasparente', fr: 'transparent', ex: 'Il vetro è trasparente.' }
      ],
      avance: [
        { es: 'contrasto', fr: 'le contraste', ex: 'Il contrasto tra i colori è notevole.' },
        { es: 'brillante', fr: 'éclatant', ex: 'I colori brillanti hanno attirato la mia attenzione.' },
        { es: 'sfumatura', fr: 'la nuance', ex: 'La sfumatura cambia con la luce.' },
        { es: 'monocromo', fr: 'monochrome', ex: 'La foto è in monocromo.' },
        { es: 'pigmento', fr: 'le pigment', ex: 'In questa vernice si usano pigmenti naturali.' },
        { es: 'spettro', fr: 'le spectre', ex: 'Un arcobaleno mostra lo spettro completo.' },
        { es: 'tinta', fr: 'la tinte', ex: 'Aggiungi una tinta di giallo al mix.' }
      ]
    }
  },
  'de': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'hallo', fr: 'bonjour', ex: 'Hallo, wie geht es dir?' },
        { es: 'auf Wiedersehen', fr: 'au revoir', ex: 'Auf Wiedersehen, bis bald!' },
        { es: 'bitte', fr: "s'il vous plaît", ex: 'Bitte hilf mir.' },
        { es: 'danke', fr: 'merci', ex: 'Danke schön!' },
        { es: 'ja', fr: 'oui', ex: 'Ja, ich verstehe.' },
        { es: 'nein', fr: 'non', ex: 'Nein, danke.' },
        { es: 'Entschuldigung', fr: 'excusez-moi', ex: 'Entschuldigung, wo ist der Bahnhof?' },
        { es: 'Es tut mir leid', fr: 'je suis désolé', ex: 'Es tut mir leid für die Verspätung.' },
        { es: 'Hilfe', fr: "l'aide", ex: 'Ich brauche Hilfe, bitte.' },
        { es: 'Freund', fr: "l'ami", ex: 'Sie ist meine beste Freundin.' }
      ],
      intermediaire: [
        { es: 'verstehen', fr: 'comprendre', ex: 'Verstehst du mich?' },
        { es: 'sprechen', fr: 'parler', ex: 'Ich spreche ein bisschen Deutsch.' },
        { es: 'lernen', fr: 'apprendre', ex: 'Ich möchte Deutsch lernen.' },
        { es: 'wiederholen', fr: 'répéter', ex: 'Können Sie das bitte wiederholen?' },
        { es: 'langsam', fr: 'lentement', ex: 'Bitte sprechen Sie langsamer.' },
        { es: 'wissen', fr: 'savoir', ex: 'Ich weiß die Antwort nicht.' },
        { es: 'brauchen', fr: 'avoir besoin de', ex: 'Ich brauche einen Moment.' },
        { es: 'wollen', fr: 'vouloir', ex: 'Ich will es versuchen.' }
      ],
      avance: [
        { es: 'Möglichkeit', fr: "l'opportunité", ex: 'Das ist eine großartige Möglichkeit.' },
        { es: 'Herausforderung', fr: 'le défi', ex: 'Jede Herausforderung macht uns stärker.' },
        { es: 'erreichen', fr: 'atteindre', ex: 'Ich werde meine Ziele erreichen.' },
        { es: 'Verantwortung', fr: 'la responsabilité', ex: 'Wir teilen die Verantwortung.' },
        { es: 'neugierig', fr: 'curieux', ex: 'Sie ist sehr neugierig auf die Wissenschaft.' },
        { es: 'entschlossen', fr: 'déterminé', ex: 'Er ist entschlossen zu gewinnen.' },
        { es: 'verbessern', fr: 'améliorer', ex: 'Ich verbessere meine Fähigkeiten täglich.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'Brot', fr: 'le pain', ex: 'Das Brot ist noch warm.' },
        { es: 'Wasser', fr: "l'eau", ex: 'Ich trinke den ganzen Tag Wasser.' },
        { es: 'Milch', fr: 'le lait', ex: 'Ich gebe Milch in meinen Kaffee.' },
        { es: 'Ei', fr: "l'œuf", ex: 'Ich esse morgens ein Ei.' },
        { es: 'Fleisch', fr: 'la viande', ex: 'Das Fleisch ist sehr zart.' },
        { es: 'Käse', fr: 'le fromage', ex: 'Deutschland hat viele Käsesorten.' },
        { es: 'Suppe', fr: 'la soupe', ex: 'Die Suppe ist sehr heiß.' },
        { es: 'Apfel', fr: 'la pomme', ex: 'Ich esse jeden Morgen einen Apfel.' },
        { es: 'Kuchen', fr: 'le gâteau', ex: 'Der Kuchen schmeckt ausgezeichnet.' },
        { es: 'Kaffee', fr: 'le café', ex: 'Ich trinke jeden Morgen Kaffee.' }
      ],
      intermediaire: [
        { es: 'Erdbeere', fr: 'la fraise', ex: 'Die Erdbeeren sind reif und süß.' },
        { es: 'Saft', fr: 'le jus', ex: 'Ich trinke morgens Orangensaft.' },
        { es: 'Pilze', fr: 'les champignons', ex: 'Ich gebe Pilze in die Soße.' },
        { es: 'Butter', fr: 'le beurre', ex: 'Ich streiche Butter auf mein Brot.' },
        { es: 'Zucker', fr: 'le sucre', ex: 'Nimmst du Zucker in deinen Tee?' },
        { es: 'Pfeffer', fr: 'le poivre', ex: 'Gib etwas Pfeffer dazu.' },
        { es: 'Nachtisch', fr: 'le dessert', ex: 'Was möchtest du als Nachtisch?' },
        { es: 'Rezept', fr: 'la recette', ex: 'Das ist das Rezept meiner Oma.' }
      ],
      avance: [
        { es: 'Zutaten', fr: 'les ingrédients', ex: 'Die Zutaten sind alle frisch.' },
        { es: 'Würzung', fr: "l'assaisonnement", ex: 'Die Würzung ist perfekt.' },
        { es: 'nahrhaft', fr: 'nutritif', ex: 'Diese Mahlzeit ist sehr nahrhaft.' },
        { es: 'Appetit', fr: "l'appétit", ex: 'Der Geruch macht mir Appetit.' },
        { es: 'Küche', fr: 'la cuisine', ex: 'Ich liebe die asiatische Küche.' },
        { es: 'Geschmack', fr: 'la saveur', ex: 'Der Geschmack dieses Gerichts ist einzigartig.' },
        { es: 'Portion', fr: 'la portion', ex: 'Die Portion ist sehr großzügig.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'Flughafen', fr: "l'aéroport", ex: 'Wir kommen um acht am Flughafen an.' },
        { es: 'Hotel', fr: "l'hôtel", ex: 'Das Hotel liegt am Strand.' },
        { es: 'Ticket', fr: 'le billet', ex: 'Ich habe ein Flugticket gekauft.' },
        { es: 'Reisepass', fr: 'le passeport', ex: 'Vergiss deinen Reisepass nicht.' },
        { es: 'Karte', fr: 'la carte', ex: 'Ich benutze eine Karte zur Orientierung.' },
        { es: 'Zug', fr: 'le train', ex: 'Der Zug fährt um neun ab.' },
        { es: 'Bus', fr: 'le bus', ex: 'Ich nehme jeden Tag den Bus.' },
        { es: 'Bahnhof', fr: 'la gare', ex: 'Der Bahnhof liegt im Stadtzentrum.' },
        { es: 'Gepäck', fr: 'les bagages', ex: 'Mein Gepäck ist sehr schwer.' },
        { es: 'Strand', fr: 'la plage', ex: 'Wir entspannen uns am Strand.' }
      ],
      intermediaire: [
        { es: 'Reservierung', fr: 'la réservation', ex: 'Ich habe eine Reservierung online gemacht.' },
        { es: 'Abfahrt', fr: 'le départ', ex: 'Die Abfahrt ist um Mittag.' },
        { es: 'Ankunft', fr: "l'arrivée", ex: 'Unsere Ankunft verzögert sich.' },
        { es: 'Zoll', fr: 'la douane', ex: 'Wir passieren den Zoll.' },
        { es: 'Währung', fr: 'la devise', ex: 'Ich wechsle meine Währung bei der Bank.' },
        { es: 'Souvenir', fr: 'le souvenir', ex: 'Ich kaufe ein Souvenir für die Familie.' },
        { es: 'Reiseführer', fr: 'le guide', ex: 'Der Reiseführer zeigt uns die Stadt.' },
        { es: 'Abenteuer', fr: "l'aventure", ex: 'Jede Reise ist ein neues Abenteuer.' }
      ],
      avance: [
        { es: 'Reiseroute', fr: "l'itinéraire", ex: 'Unsere Reiseroute umfasst fünf Städte.' },
        { es: 'Reiseziel', fr: 'la destination', ex: 'Paris ist mein Traumreiseziel.' },
        { es: 'Unterkunft', fr: "l'hébergement", ex: 'Die Unterkunft ist ausgezeichnet.' },
        { es: 'erkunden', fr: 'explorer', ex: 'Ich erkunde die Altstadt zu Fuß.' },
        { es: 'Sehenswürdigkeit', fr: 'le monument', ex: 'Das Brandenburger Tor ist eine bekannte Sehenswürdigkeit.' },
        { es: 'Kultur', fr: 'la culture', ex: 'Ich bin von der lokalen Kultur fasziniert.' },
        { es: 'Landschaft', fr: 'le paysage', ex: 'Die Landschaft ist atemberaubend.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'Mutter', fr: 'la mère', ex: 'Meine Mutter kocht sehr gut.' },
        { es: 'Vater', fr: 'le père', ex: 'Mein Vater arbeitet in Berlin.' },
        { es: 'Schwester', fr: 'la sœur', ex: 'Meine Schwester ist sehr lustig.' },
        { es: 'Bruder', fr: 'le frère', ex: 'Mein Bruder spielt Fußball.' },
        { es: 'Oma', fr: 'la grand-mère', ex: 'Die Oma erzählt tolle Geschichten.' },
        { es: 'Opa', fr: 'le grand-père', ex: 'Der Opa ist sehr weise.' },
        { es: 'Baby', fr: 'le bébé', ex: 'Das Baby schläft friedlich.' },
        { es: 'Kind', fr: "l'enfant", ex: 'Das Kind spielt im Garten.' },
        { es: 'Familie', fr: 'la famille', ex: 'Meine Familie ist sehr eng.' },
        { es: 'Zuhause', fr: 'le foyer', ex: 'Zuhause ist es am schönsten.' }
      ],
      intermediaire: [
        { es: 'Cousin', fr: 'le cousin', ex: 'Mein Cousin lebt in München.' },
        { es: 'Tante', fr: 'la tante', ex: 'Meine Tante backt köstliche Kuchen.' },
        { es: 'Onkel', fr: "l'oncle", ex: 'Mein Onkel ist Arzt.' },
        { es: 'Neffe', fr: 'le neveu', ex: 'Mein Neffe ist zwei Jahre alt.' },
        { es: 'Nichte', fr: 'la nièce', ex: 'Meine Nichte liebt das Malen.' },
        { es: 'Ehemann', fr: 'le mari', ex: 'Ihr Ehemann ist sehr fürsorglich.' },
        { es: 'Ehefrau', fr: 'la femme', ex: 'Seine Ehefrau ist Lehrerin.' },
        { es: 'Hochzeit', fr: 'le mariage', ex: 'Die Hochzeit war wunderschön.' }
      ],
      avance: [
        { es: 'Beziehung', fr: 'la relation', ex: 'Eine gute Beziehung braucht Einsatz.' },
        { es: 'Erbe', fr: "l'héritage", ex: 'Wir teilen ein reiches kulturelles Erbe.' },
        { es: 'Generation', fr: 'la génération', ex: 'Jede Generation lernt von der vorherigen.' },
        { es: 'Erziehung', fr: "l'éducation", ex: 'Eine gute Erziehung prägt den Charakter.' },
        { es: 'Tradition', fr: 'la tradition', ex: 'Wir pflegen unsere Familientraditionen.' },
        { es: 'Verbindung', fr: 'le lien', ex: 'Die Verbindung unter Geschwistern ist stark.' },
        { es: 'Wiedersehen', fr: 'les retrouvailles', ex: 'Das Familientreffen war wunderbar.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'rot', fr: 'rouge', ex: 'Der Apfel ist leuchtend rot.' },
        { es: 'blau', fr: 'bleu', ex: 'Der Himmel ist klar und blau.' },
        { es: 'grün', fr: 'vert', ex: 'Das Gras ist nach dem Regen grün.' },
        { es: 'gelb', fr: 'jaune', ex: 'Die Sonne ist gelb und warm.' },
        { es: 'schwarz', fr: 'noir', ex: 'Ich trage heute eine schwarze Jacke.' },
        { es: 'weiß', fr: 'blanc', ex: 'Der Schnee ist vollständig weiß.' },
        { es: 'orange', fr: 'orange', ex: 'Ihr Kleid ist leuchtendes Orange.' },
        { es: 'rosa', fr: 'rose', ex: 'Die Rosen sind blass rosa.' },
        { es: 'lila', fr: 'violet', ex: 'Der Himmel wird in der Dämmerung lila.' },
        { es: 'braun', fr: 'marron', ex: 'Der Baumstamm ist braun.' }
      ],
      intermediaire: [
        { es: 'grau', fr: 'gris', ex: 'Die Wolken sind dunkelgrau.' },
        { es: 'dunkel', fr: 'foncé', ex: 'Ich bevorzuge im Winter dunkle Farben.' },
        { es: 'hell', fr: 'clair', ex: 'Sie trägt im Sommer Hellblau.' },
        { es: 'leuchtend', fr: 'vif', ex: 'Das Bild verwendet leuchtende Farben.' },
        { es: 'blass', fr: 'pâle', ex: 'Er sieht heute blass aus.' },
        { es: 'farbenfroh', fr: 'coloré', ex: 'Der Markt ist sehr farbenfroh.' },
        { es: 'Farbton', fr: 'la teinte', ex: 'Ich mag diesen Farbton von Blau.' },
        { es: 'transparent', fr: 'transparent', ex: 'Das Glas ist transparent.' }
      ],
      avance: [
        { es: 'Kontrast', fr: 'le contraste', ex: 'Der Kontrast zwischen den Farben ist auffällig.' },
        { es: 'leuchtend', fr: 'éclatant', ex: 'Die leuchtenden Farben haben mich angezogen.' },
        { es: 'Farbstich', fr: 'la nuance', ex: 'Der Farbstich ändert sich im Licht.' },
        { es: 'einfarbig', fr: 'monochrome', ex: 'Das Foto ist einfarbig.' },
        { es: 'Pigment', fr: 'le pigment', ex: 'In dieser Farbe werden natürliche Pigmente verwendet.' },
        { es: 'Spektrum', fr: 'le spectre', ex: 'Ein Regenbogen zeigt das vollständige Spektrum.' },
        { es: 'Tönung', fr: 'la teinte', ex: 'Füge eine Tönung von Gelb hinzu.' }
      ]
    }
  },
  'pt': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'olá', fr: 'bonjour', ex: 'Olá, como está?' },
        { es: 'adeus', fr: 'au revoir', ex: 'Adeus, até logo!' },
        { es: 'por favor', fr: "s'il vous plaît", ex: 'Por favor, pode ajudar-me?' },
        { es: 'obrigado', fr: 'merci', ex: 'Obrigado muito!' },
        { es: 'sim', fr: 'oui', ex: 'Sim, eu percebo.' },
        { es: 'não', fr: 'non', ex: 'Não, obrigado.' },
        { es: 'desculpe', fr: 'excusez-moi', ex: 'Desculpe, onde fica a estação?' },
        { es: 'lamento', fr: 'je suis désolé', ex: 'Lamento o atraso.' },
        { es: 'ajuda', fr: "l'aide", ex: 'Preciso de ajuda, por favor.' },
        { es: 'amigo', fr: "l'ami", ex: 'Ela é a minha melhor amiga.' }
      ],
      intermediaire: [
        { es: 'entender', fr: 'comprendre', ex: 'Você me entende?' },
        { es: 'falar', fr: 'parler', ex: 'Falo um pouco de português.' },
        { es: 'aprender', fr: 'apprendre', ex: 'Quero aprender português.' },
        { es: 'repetir', fr: 'répéter', ex: 'Pode repetir, por favor?' },
        { es: 'devagar', fr: 'lentement', ex: 'Fale mais devagar, por favor.' },
        { es: 'saber', fr: 'savoir', ex: 'Não sei a resposta.' },
        { es: 'precisar', fr: 'avoir besoin de', ex: 'Preciso de um momento.' },
        { es: 'querer', fr: 'vouloir', ex: 'Quero tentar.' }
      ],
      avance: [
        { es: 'oportunidade', fr: "l'opportunité", ex: 'Esta é uma grande oportunidade.' },
        { es: 'desafio', fr: 'le défi', ex: 'Cada desafio torna-nos mais fortes.' },
        { es: 'alcançar', fr: 'atteindre', ex: 'Vou alcançar os meus objetivos.' },
        { es: 'responsabilidade', fr: 'la responsabilité', ex: 'Partilhamos a responsabilidade.' },
        { es: 'curioso', fr: 'curieux', ex: 'Ela é muito curiosa sobre ciência.' },
        { es: 'determinado', fr: 'déterminé', ex: 'Ele está determinado a ter sucesso.' },
        { es: 'melhorar', fr: 'améliorer', ex: 'Melhoro as minhas competências todos os dias.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'pão', fr: 'le pain', ex: 'O pão ainda está quente.' },
        { es: 'água', fr: "l'eau", ex: 'Bebo água durante todo o dia.' },
        { es: 'leite', fr: 'le lait', ex: 'Ponho leite no café.' },
        { es: 'ovo', fr: "l'œuf", ex: 'Como um ovo ao pequeno-almoço.' },
        { es: 'frango', fr: 'le poulet', ex: 'O frango assado é delicioso.' },
        { es: 'peixe', fr: 'le poisson', ex: 'Gosto de comer peixe.' },
        { es: 'arroz', fr: 'le riz', ex: 'Cozinho arroz ao jantar.' },
        { es: 'queijo', fr: 'le fromage', ex: 'Portugal tem queijos excelentes.' },
        { es: 'sopa', fr: 'la soupe', ex: 'A sopa está muito quente.' },
        { es: 'café', fr: 'le café', ex: 'Tomo um café todas as manhãs.' }
      ],
      intermediaire: [
        { es: 'morango', fr: 'la fraise', ex: 'Os morangos estão maduros e doces.' },
        { es: 'sumo de laranja', fr: "le jus d'orange", ex: 'Bebo sumo de laranja de manhã.' },
        { es: 'cogumelos', fr: 'les champignons', ex: 'Adiciono cogumelos à massa.' },
        { es: 'manteiga', fr: 'le beurre', ex: 'Barro manteiga na torrada.' },
        { es: 'açúcar', fr: 'le sucre', ex: 'Toma açúcar no chá?' },
        { es: 'pimenta', fr: 'le poivre', ex: 'Adiciona um pouco de pimenta.' },
        { es: 'sobremesa', fr: 'le dessert', ex: 'O que queres de sobremesa?' },
        { es: 'receita', fr: 'la recette', ex: 'Esta é a receita da minha avó.' }
      ],
      avance: [
        { es: 'ingredientes', fr: 'les ingrédients', ex: 'Os ingredientes são todos frescos.' },
        { es: 'tempero', fr: "l'assaisonnement", ex: 'O tempero está perfeito.' },
        { es: 'nutritivo', fr: 'nutritif', ex: 'Esta refeição é muito nutritiva.' },
        { es: 'apetite', fr: "l'appétit", ex: 'O cheiro dá-me apetite.' },
        { es: 'cozinha', fr: 'la cuisine', ex: 'Adoro a cozinha asiática.' },
        { es: 'sabor', fr: 'la saveur', ex: 'O sabor deste prato é único.' },
        { es: 'porção', fr: 'la portion', ex: 'A porção é muito generosa.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'aeroporto', fr: "l'aéroport", ex: 'Chegamos ao aeroporto às oito.' },
        { es: 'hotel', fr: "l'hôtel", ex: 'O hotel fica perto da praia.' },
        { es: 'bilhete', fr: 'le billet', ex: 'Comprei um bilhete de avião.' },
        { es: 'passaporte', fr: 'le passeport', ex: 'Não te esqueças do passaporte.' },
        { es: 'mapa', fr: 'la carte', ex: 'Uso um mapa para me orientar.' },
        { es: 'comboio', fr: 'le train', ex: 'O comboio parte às nove.' },
        { es: 'autocarro', fr: 'le bus', ex: 'Apanho o autocarro todos os dias.' },
        { es: 'estação', fr: 'la gare', ex: 'A estação fica no centro.' },
        { es: 'bagagem', fr: 'les bagages', ex: 'A minha bagagem é muito pesada.' },
        { es: 'praia', fr: 'la plage', ex: 'Descansamos na praia.' }
      ],
      intermediaire: [
        { es: 'reserva', fr: 'la réservation', ex: 'Fiz uma reserva online.' },
        { es: 'partida', fr: 'le départ', ex: 'A partida é ao meio-dia.' },
        { es: 'chegada', fr: "l'arrivée", ex: 'A nossa chegada está atrasada.' },
        { es: 'alfândega', fr: 'la douane', ex: 'Passamos pela alfândega.' },
        { es: 'moeda', fr: 'la devise', ex: 'Troco a minha moeda no banco.' },
        { es: 'lembrança', fr: 'le souvenir', ex: 'Compro uma lembrança para a família.' },
        { es: 'guia', fr: 'le guide', ex: 'O guia mostra-nos a cidade.' },
        { es: 'aventura', fr: "l'aventure", ex: 'Cada viagem é uma nova aventura.' }
      ],
      avance: [
        { es: 'itinerário', fr: "l'itinéraire", ex: 'O itinerário inclui cinco cidades.' },
        { es: 'destino', fr: 'la destination', ex: 'Paris é o meu destino de sonho.' },
        { es: 'alojamento', fr: "l'hébergement", ex: 'O alojamento é excelente.' },
        { es: 'explorar', fr: 'explorer', ex: 'Exploro a cidade antiga a pé.' },
        { es: 'monumento', fr: 'le monument', ex: 'A Torre de Belém é um monumento famoso.' },
        { es: 'cultura', fr: 'la culture', ex: 'Estou fascinado pela cultura local.' },
        { es: 'paisagem', fr: 'le paysage', ex: 'A paisagem é deslumbrante.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'mãe', fr: 'la mère', ex: 'A minha mãe cozinha muito bem.' },
        { es: 'pai', fr: 'le père', ex: 'O meu pai trabalha em Lisboa.' },
        { es: 'irmã', fr: 'la sœur', ex: 'A minha irmã é muito engraçada.' },
        { es: 'irmão', fr: 'le frère', ex: 'O meu irmão joga futebol.' },
        { es: 'avó', fr: 'la grand-mère', ex: 'A avó conta histórias fantásticas.' },
        { es: 'avô', fr: 'le grand-père', ex: 'O avô é muito sábio.' },
        { es: 'bebé', fr: 'le bébé', ex: 'O bebé dorme tranquilamente.' },
        { es: 'criança', fr: "l'enfant", ex: 'A criança brinca no jardim.' },
        { es: 'família', fr: 'la famille', ex: 'A minha família é muito unida.' },
        { es: 'filho', fr: 'le fils / la fille', ex: 'O filho estuda na universidade.' }
      ],
      intermediaire: [
        { es: 'primo', fr: 'le cousin', ex: 'O meu primo vive no Porto.' },
        { es: 'tia', fr: 'la tante', ex: 'A minha tia faz bolos deliciosos.' },
        { es: 'tio', fr: "l'oncle", ex: 'O meu tio é médico.' },
        { es: 'sobrinho', fr: 'le neveu', ex: 'O meu sobrinho tem dois anos.' },
        { es: 'sobrinha', fr: 'la nièce', ex: 'A minha sobrinha adora desenhar.' },
        { es: 'marido', fr: 'le mari', ex: 'O marido é muito atencioso.' },
        { es: 'esposa', fr: 'la femme', ex: 'A esposa é professora.' },
        { es: 'casamento', fr: 'le mariage', ex: 'O casamento foi maravilhoso.' }
      ],
      avance: [
        { es: 'relação', fr: 'la relation', ex: 'Uma boa relação exige esforço.' },
        { es: 'herança', fr: "l'héritage", ex: 'Partilhamos uma rica herança cultural.' },
        { es: 'geração', fr: 'la génération', ex: 'Cada geração aprende com a anterior.' },
        { es: 'educação', fr: "l'éducation", ex: 'Uma boa educação forma o caráter.' },
        { es: 'tradição', fr: 'la tradition', ex: 'Mantemos as tradições de família vivas.' },
        { es: 'laço', fr: 'le lien', ex: 'O laço entre irmãos é forte.' },
        { es: 'reunião', fr: 'les retrouvailles', ex: 'A reunião de família foi maravilhosa.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'vermelho', fr: 'rouge', ex: 'A maçã é de um vermelho brilhante.' },
        { es: 'azul', fr: 'bleu', ex: 'O céu está limpo e azul.' },
        { es: 'verde', fr: 'vert', ex: 'A erva está verde depois da chuva.' },
        { es: 'amarelo', fr: 'jaune', ex: 'O sol é amarelo e quente.' },
        { es: 'preto', fr: 'noir', ex: 'Uso um casaco preto hoje.' },
        { es: 'branco', fr: 'blanc', ex: 'A neve é completamente branca.' },
        { es: 'laranja', fr: 'orange', ex: 'O vestido dela é laranja.' },
        { es: 'rosa', fr: 'rose', ex: 'As rosas são de um rosa suave.' },
        { es: 'roxo', fr: 'violet', ex: 'O céu fica roxo ao entardecer.' },
        { es: 'castanho', fr: 'marron', ex: 'O tronco da árvore é castanho.' }
      ],
      intermediaire: [
        { es: 'cinzento', fr: 'gris', ex: 'As nuvens estão cinzentas.' },
        { es: 'escuro', fr: 'foncé', ex: 'Prefiro cores escuras no inverno.' },
        { es: 'claro', fr: 'clair', ex: 'Ela usa azul claro no verão.' },
        { es: 'vivo', fr: 'vif', ex: 'O quadro usa cores vivas.' },
        { es: 'pálido', fr: 'pâle', ex: 'Ele parece pálido hoje.' },
        { es: 'colorido', fr: 'coloré', ex: 'O mercado é muito colorido.' },
        { es: 'tom', fr: 'la teinte', ex: 'Gosto deste tom de azul.' },
        { es: 'transparente', fr: 'transparent', ex: 'O vidro é transparente.' }
      ],
      avance: [
        { es: 'contraste', fr: 'le contraste', ex: 'O contraste entre as cores é marcante.' },
        { es: 'vívido', fr: 'éclatant', ex: 'As cores vívidas chamaram a minha atenção.' },
        { es: 'matiz', fr: 'la nuance', ex: 'A matiz muda com a luz.' },
        { es: 'monocromático', fr: 'monochrome', ex: 'A foto é monocromática.' },
        { es: 'pigmento', fr: 'le pigment', ex: 'Esta tinta usa pigmentos naturais.' },
        { es: 'espectro', fr: 'le spectre', ex: 'O arco-íris mostra o espectro completo.' },
        { es: 'tonalidade', fr: 'la tonalité', ex: 'Adiciona uma tonalidade de amarelo.' }
      ]
    }
  },
  'nl': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'hallo', fr: 'bonjour', ex: 'Hallo, hoe gaat het?' },
        { es: 'tot ziens', fr: 'au revoir', ex: 'Tot ziens, tot snel!' },
        { es: 'alstublieft', fr: "s'il vous plaît", ex: 'Alstublieft, kunt u mij helpen?' },
        { es: 'dank u', fr: 'merci', ex: 'Dank u wel!' },
        { es: 'ja', fr: 'oui', ex: 'Ja, ik begrijp het.' },
        { es: 'nee', fr: 'non', ex: 'Nee, dank u.' },
        { es: 'excuseer mij', fr: 'excusez-moi', ex: 'Excuseer mij, waar is het station?' },
        { es: 'het spijt mij', fr: 'je suis désolé', ex: 'Het spijt mij voor de vertraging.' },
        { es: 'hulp', fr: "l'aide", ex: 'Ik heb hulp nodig, alstublieft.' },
        { es: 'vriend', fr: "l'ami", ex: 'Zij is mijn beste vriendin.' }
      ],
      intermediaire: [
        { es: 'begrijpen', fr: 'comprendre', ex: 'Begrijpt u mij?' },
        { es: 'spreken', fr: 'parler', ex: 'Ik spreek een beetje Nederlands.' },
        { es: 'leren', fr: 'apprendre', ex: 'Ik wil Nederlands leren.' },
        { es: 'herhalen', fr: 'répéter', ex: 'Kunt u dat herhalen, alstublieft?' },
        { es: 'langzaam', fr: 'lentement', ex: 'Spreek alstublieft langzamer.' },
        { es: 'weten', fr: 'savoir', ex: 'Ik weet het antwoord niet.' },
        { es: 'nodig hebben', fr: 'avoir besoin de', ex: 'Ik heb een moment nodig.' },
        { es: 'willen', fr: 'vouloir', ex: 'Ik wil het proberen.' }
      ],
      avance: [
        { es: 'kans', fr: "l'opportunité", ex: 'Dit is een geweldige kans.' },
        { es: 'uitdaging', fr: 'le défi', ex: 'Elke uitdaging maakt ons sterker.' },
        { es: 'bereiken', fr: 'atteindre', ex: 'Ik zal mijn doelen bereiken.' },
        { es: 'verantwoordelijkheid', fr: 'la responsabilité', ex: 'We delen de verantwoordelijkheid.' },
        { es: 'nieuwsgierig', fr: 'curieux', ex: 'Ze is erg nieuwsgierig naar wetenschap.' },
        { es: 'vastberaden', fr: 'déterminé', ex: 'Hij is vastberaden te slagen.' },
        { es: 'verbeteren', fr: 'améliorer', ex: 'Ik verbeter mijn vaardigheden elke dag.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'brood', fr: 'le pain', ex: 'Het brood is nog warm.' },
        { es: 'water', fr: "l'eau", ex: 'Ik drink de hele dag water.' },
        { es: 'melk', fr: 'le lait', ex: 'Ik doe melk in mijn koffie.' },
        { es: 'ei', fr: "l'œuf", ex: "Ik eet 's ochtends een ei." },
        { es: 'kip', fr: 'le poulet', ex: 'De kip is heerlijk.' },
        { es: 'vis', fr: 'le poisson', ex: 'Ik eet graag vis op vrijdag.' },
        { es: 'rijst', fr: 'le riz', ex: 'Ik kook rijst voor het avondeten.' },
        { es: 'kaas', fr: 'le fromage', ex: 'Nederland heeft veel lekkere kazen.' },
        { es: 'soep', fr: 'la soupe', ex: 'Deze soep is erg heet.' },
        { es: 'appel', fr: 'la pomme', ex: "Ik eet elke ochtend een appel." }
      ],
      intermediaire: [
        { es: 'aardbei', fr: 'la fraise', ex: 'De aardbeien zijn rijp en zoet.' },
        { es: 'sinaasappelsap', fr: "le jus d'orange", ex: "Ik drink 's ochtends sinaasappelsap." },
        { es: 'champignons', fr: 'les champignons', ex: 'Ik voeg champignons toe aan de saus.' },
        { es: 'boter', fr: 'le beurre', ex: 'Ik smeer boter op mijn brood.' },
        { es: 'suiker', fr: 'le sucre', ex: 'Neem je suiker in je thee?' },
        { es: 'peper', fr: 'le poivre', ex: 'Voeg een beetje peper toe.' },
        { es: 'dessert', fr: 'le dessert', ex: 'Wat wil je als dessert?' },
        { es: 'recept', fr: 'la recette', ex: 'Dit is het recept van mijn oma.' }
      ],
      avance: [
        { es: 'ingrediënten', fr: 'les ingrédients', ex: 'De ingrediënten zijn allemaal vers.' },
        { es: 'kruiding', fr: "l'assaisonnement", ex: 'De kruiding is perfect.' },
        { es: 'voedzaam', fr: 'nutritif', ex: 'Dit gerecht is erg voedzaam.' },
        { es: 'eetlust', fr: "l'appétit", ex: 'De geur geeft me eetlust.' },
        { es: 'keuken', fr: 'la cuisine', ex: 'Ik hou van de Aziatische keuken.' },
        { es: 'smaak', fr: 'la saveur', ex: 'De smaak van dit gerecht is uniek.' },
        { es: 'portie', fr: 'la portion', ex: 'De portie is erg royaal.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'luchthaven', fr: "l'aéroport", ex: 'We komen om acht uur aan op de luchthaven.' },
        { es: 'hotel', fr: "l'hôtel", ex: 'Het hotel ligt vlak bij het strand.' },
        { es: 'ticket', fr: 'le billet', ex: 'Ik heb een vliegticket gekocht.' },
        { es: 'paspoort', fr: 'le passeport', ex: 'Vergeet je paspoort niet.' },
        { es: 'kaart', fr: 'la carte', ex: 'Ik gebruik een kaart om de weg te vinden.' },
        { es: 'trein', fr: 'le train', ex: 'De trein vertrekt om negen uur.' },
        { es: 'bus', fr: 'le bus', ex: 'Ik neem elke dag de bus.' },
        { es: 'station', fr: 'la gare', ex: 'Het station ligt in het stadscentrum.' },
        { es: 'bagage', fr: 'les bagages', ex: 'Mijn bagage is erg zwaar.' },
        { es: 'strand', fr: 'la plage', ex: 'We ontspannen op het strand.' }
      ],
      intermediaire: [
        { es: 'reservering', fr: 'la réservation', ex: 'Ik heb online een reservering gemaakt.' },
        { es: 'vertrek', fr: 'le départ', ex: 'Het vertrek is om twaalf uur.' },
        { es: 'aankomst', fr: "l'arrivée", ex: 'Onze aankomst is vertraagd.' },
        { es: 'douane', fr: 'la douane', ex: 'We passeren de douane.' },
        { es: 'valuta', fr: 'la devise', ex: 'Ik wissel mijn valuta bij de bank.' },
        { es: 'souvenir', fr: 'le souvenir', ex: 'Ik koop een souvenir voor mijn familie.' },
        { es: 'gids', fr: 'le guide', ex: 'De gids laat ons de stad zien.' },
        { es: 'avontuur', fr: "l'aventure", ex: 'Elke reis is een nieuw avontuur.' }
      ],
      avance: [
        { es: 'reisplan', fr: "l'itinéraire", ex: 'Ons reisplan omvat vijf steden.' },
        { es: 'bestemming', fr: 'la destination', ex: 'Parijs is mijn droombestemming.' },
        { es: 'accommodatie', fr: "l'hébergement", ex: 'De accommodatie is uitstekend.' },
        { es: 'verkennen', fr: 'explorer', ex: 'Ik verken de oude stad te voet.' },
        { es: 'monument', fr: 'le monument', ex: 'De Eiffeltoren is een beroemd monument.' },
        { es: 'cultuur', fr: 'la culture', ex: 'Ik ben gefascineerd door de lokale cultuur.' },
        { es: 'landschap', fr: 'le paysage', ex: 'Het landschap is adembenemend.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'moeder', fr: 'la mère', ex: 'Mijn moeder kookt erg lekker.' },
        { es: 'vader', fr: 'le père', ex: 'Mijn vader werkt in Amsterdam.' },
        { es: 'zus', fr: 'la sœur', ex: 'Mijn zus is erg grappig.' },
        { es: 'broer', fr: 'le frère', ex: 'Mijn broer speelt voetbal.' },
        { es: 'oma', fr: 'la grand-mère', ex: 'Oma vertelt prachtige verhalen.' },
        { es: 'opa', fr: 'le grand-père', ex: 'Opa is erg wijs.' },
        { es: 'baby', fr: 'le bébé', ex: 'De baby slaapt vredig.' },
        { es: 'kind', fr: "l'enfant", ex: 'Het kind speelt in de tuin.' },
        { es: 'familie', fr: 'la famille', ex: 'Mijn familie is erg hecht.' },
        { es: 'thuis', fr: 'le foyer', ex: 'Thuis is het fijnst.' }
      ],
      intermediaire: [
        { es: 'neef', fr: 'le cousin', ex: 'Mijn neef woont in Rotterdam.' },
        { es: 'tante', fr: 'la tante', ex: 'Mijn tante bakt heerlijke taarten.' },
        { es: 'oom', fr: "l'oncle", ex: 'Mijn oom is dokter.' },
        { es: 'neefje', fr: 'le neveu', ex: 'Mijn neefje is twee jaar oud.' },
        { es: 'nichtje', fr: 'la nièce', ex: 'Mijn nichtje houdt van tekenen.' },
        { es: 'man', fr: 'le mari', ex: 'Haar man is erg zorgzaam.' },
        { es: 'vrouw', fr: 'la femme', ex: 'Zijn vrouw is lerares.' },
        { es: 'huwelijk', fr: 'le mariage', ex: 'Het huwelijk was prachtig.' }
      ],
      avance: [
        { es: 'relatie', fr: 'la relation', ex: 'Een goede relatie vergt inspanning.' },
        { es: 'erfenis', fr: "l'héritage", ex: 'We delen een rijke culturele erfenis.' },
        { es: 'generatie', fr: 'la génération', ex: 'Elke generatie leert van de vorige.' },
        { es: 'opvoeding', fr: "l'éducation", ex: 'Een goede opvoeding vormt het karakter.' },
        { es: 'traditie', fr: 'la tradition', ex: 'We houden onze familietradities levend.' },
        { es: 'band', fr: 'le lien', ex: 'De band tussen broers en zussen is sterk.' },
        { es: 'reünie', fr: 'les retrouvailles', ex: 'De familiereünie was geweldig.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'rood', fr: 'rouge', ex: 'De appel is heldere rood.' },
        { es: 'blauw', fr: 'bleu', ex: 'De lucht is helder en blauw.' },
        { es: 'groen', fr: 'vert', ex: 'Het gras is groen na de regen.' },
        { es: 'geel', fr: 'jaune', ex: 'De zon is geel en warm.' },
        { es: 'zwart', fr: 'noir', ex: 'Ik draag vandaag een zwart jasje.' },
        { es: 'wit', fr: 'blanc', ex: 'De sneeuw is volledig wit.' },
        { es: 'oranje', fr: 'orange', ex: 'Haar jurk is fel oranje.' },
        { es: 'roze', fr: 'rose', ex: 'De rozen zijn lichtroze.' },
        { es: 'paars', fr: 'violet', ex: 'De lucht wordt paars bij zonsondergang.' },
        { es: 'bruin', fr: 'marron', ex: 'De boomstam is bruin.' }
      ],
      intermediaire: [
        { es: 'grijs', fr: 'gris', ex: 'De wolken zijn donkergrijs.' },
        { es: 'donker', fr: 'foncé', ex: 'Ik geef in de winter de voorkeur aan donkere kleuren.' },
        { es: 'licht', fr: 'clair', ex: 'Ze draagt lichtblauw in de zomer.' },
        { es: 'helder', fr: 'vif', ex: 'Het schilderij gebruikt heldere kleuren.' },
        { es: 'bleek', fr: 'pâle', ex: 'Hij ziet er vandaag bleek uit.' },
        { es: 'kleurrijk', fr: 'coloré', ex: 'De markt is erg kleurrijk.' },
        { es: 'tint', fr: 'la teinte', ex: 'Ik hou van deze tint blauw.' },
        { es: 'transparant', fr: 'transparent', ex: 'Het glas is transparant.' }
      ],
      avance: [
        { es: 'contrast', fr: 'le contraste', ex: 'Het contrast tussen de kleuren is opvallend.' },
        { es: 'levendig', fr: 'éclatant', ex: 'De levendige kleuren trokken mijn aandacht.' },
        { es: 'toon', fr: 'la nuance', ex: 'De toon verandert in ander licht.' },
        { es: 'monochroom', fr: 'monochrome', ex: "De foto is in monochroom." },
        { es: 'pigment', fr: 'le pigment', ex: 'In deze verf worden natuurlijke pigmenten gebruikt.' },
        { es: 'spectrum', fr: 'le spectre', ex: 'Een regenboog toont het volledige spectrum.' },
        { es: 'tint toevoegen', fr: 'la teinte', ex: 'Voeg een tint geel toe aan het mengsel.' }
      ]
    }
  },
  'ru': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'привет', rom: 'privet', fr: 'bonjour', ex: 'Привет, как дела?' },
        { es: 'до свидания', rom: 'do svidaniya', fr: 'au revoir', ex: 'До свидания, до скорой встречи!' },
        { es: 'пожалуйста', rom: 'pozhaluysta', fr: "s'il vous plaît", ex: 'Пожалуйста, помогите мне.' },
        { es: 'спасибо', rom: 'spasibo', fr: 'merci', ex: 'Большое спасибо!' },
        { es: 'да', rom: 'da', fr: 'oui', ex: 'Да, я понимаю.' },
        { es: 'нет', rom: 'net', fr: 'non', ex: 'Нет, спасибо.' },
        { es: 'извините', rom: 'izvinite', fr: 'excusez-moi', ex: 'Извините, где находится вокзал?' },
        { es: 'простите', rom: 'prostite', fr: 'je suis désolé', ex: 'Простите за опоздание.' },
        { es: 'помощь', rom: 'pomoshch',  fr: "l'aide", ex: 'Мне нужна помощь, пожалуйста.' },
        { es: 'друг', rom: 'drug', fr: "l'ami", ex: 'Она моя лучшая подруга.' }
      ],
      intermediaire: [
        { es: 'понимать', rom: 'ponimat',  fr: 'comprendre', ex: 'Вы меня понимаете?' },
        { es: 'говорить', rom: 'govorit',  fr: 'parler', ex: 'Я говорю немного по-русски.' },
        { es: 'учить', rom: 'uchit',  fr: 'apprendre', ex: 'Я хочу учить русский язык.' },
        { es: 'повторить', rom: 'povtorit',  fr: 'répéter', ex: 'Можете повторить, пожалуйста?' },
        { es: 'медленно', rom: 'medlenno', fr: 'lentement', ex: 'Говорите, пожалуйста, медленнее.' },
        { es: 'знать', rom: 'znat',  fr: 'savoir', ex: 'Я не знаю ответа.' },
        { es: 'нуждаться', rom: 'nuzhdatsya', fr: 'avoir besoin de', ex: 'Мне нужна минута.' },
        { es: 'хотеть', rom: 'khotet',  fr: 'vouloir', ex: 'Я хочу попробовать.' }
      ],
      avance: [
        { es: 'возможность', rom: 'vozmozhnost',  fr: "l'opportunité", ex: 'Это замечательная возможность.' },
        { es: 'вызов', rom: 'vyzov', fr: 'le défi', ex: 'Каждый вызов делает нас сильнее.' },
        { es: 'достигать', rom: 'dostigat',  fr: 'atteindre', ex: 'Я достигну своих целей.' },
        { es: 'ответственность', rom: 'otvetstvennost',  fr: 'la responsabilité', ex: 'Мы разделяем ответственность.' },
        { es: 'любопытный', rom: 'lyubopytnyy', fr: 'curieux', ex: 'Она очень любопытна в науке.' },
        { es: 'решительный', rom: 'reshitelnyy', fr: 'déterminé', ex: 'Он решительно настроен на успех.' },
        { es: 'улучшать', rom: 'uluchshat',  fr: 'améliorer', ex: 'Я совершенствую свои навыки каждый день.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'хлеб', rom: 'khleb', fr: 'le pain', ex: 'Хлеб ещё тёплый.' },
        { es: 'вода', rom: 'voda', fr: "l'eau", ex: 'Я пью воду весь день.' },
        { es: 'молоко', rom: 'moloko', fr: 'le lait', ex: 'Я добавляю молоко в кофе.' },
        { es: 'яйцо', rom: 'yaytso', fr: "l'œuf", ex: 'Я ем яйцо на завтрак.' },
        { es: 'курица', rom: 'kuritsa', fr: 'le poulet', ex: 'Курица очень вкусная.' },
        { es: 'рыба', rom: 'ryba', fr: 'le poisson', ex: 'Я люблю есть рыбу.' },
        { es: 'суп', rom: 'sup', fr: 'la soupe', ex: 'Этот суп очень горячий.' },
        { es: 'яблоко', rom: 'yabloko', fr: 'la pomme', ex: 'Я ем яблоко каждое утро.' },
        { es: 'сыр', rom: 'syr', fr: 'le fromage', ex: 'Россия производит много видов сыра.' },
        { es: 'чай', rom: 'chay', fr: 'le thé', ex: 'Я пью чай каждое утро.' }
      ],
      intermediaire: [
        { es: 'клубника', rom: 'klubnika', fr: 'la fraise', ex: 'Клубника спелая и сладкая.' },
        { es: 'апельсиновый сок', rom: 'apelsinovyy sok', fr: "le jus d'orange", ex: 'Я пью апельсиновый сок утром.' },
        { es: 'грибы', rom: 'griby', fr: 'les champignons', ex: 'Я добавляю грибы в соус.' },
        { es: 'масло', rom: 'maslo', fr: 'le beurre', ex: 'Я мажу масло на хлеб.' },
        { es: 'сахар', rom: 'sakhar', fr: 'le sucre', ex: 'Вы берёте сахар в чай?' },
        { es: 'перец', rom: 'perets', fr: 'le poivre', ex: 'Добавьте немного перца.' },
        { es: 'десерт', rom: 'desert', fr: 'le dessert', ex: 'Что вы хотите на десерт?' },
        { es: 'рецепт', rom: 'retsept', fr: 'la recette', ex: 'Это рецепт моей бабушки.' }
      ],
      avance: [
        { es: 'ингредиенты', rom: 'ingrediyenty', fr: 'les ingrédients', ex: 'Все ингредиенты свежие.' },
        { es: 'приправа', rom: 'priprava', fr: "l'assaisonnement", ex: 'Приправа идеальная.' },
        { es: 'питательный', rom: 'pitatelnyy', fr: 'nutritif', ex: 'Это блюдо очень питательное.' },
        { es: 'аппетит', rom: 'appetit', fr: "l'appétit", ex: 'Запах возбуждает аппетит.' },
        { es: 'кухня', rom: 'kukhnya', fr: 'la cuisine', ex: 'Я люблю азиатскую кухню.' },
        { es: 'вкус', rom: 'vkus', fr: 'la saveur', ex: 'Вкус этого блюда уникален.' },
        { es: 'порция', rom: 'portsiya', fr: 'la portion', ex: 'Порция очень щедрая.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'аэропорт', rom: 'aeroport', fr: "l'aéroport", ex: 'Мы прибываем в аэропорт в восемь.' },
        { es: 'гостиница', rom: 'gostinitsa', fr: "l'hôtel", ex: 'Гостиница находится рядом с пляжем.' },
        { es: 'билет', rom: 'bilet', fr: 'le billet', ex: 'Я купил авиабилет.' },
        { es: 'паспорт', rom: 'pasport', fr: 'le passeport', ex: 'Не забудьте паспорт.' },
        { es: 'карта', rom: 'karta', fr: 'la carte', ex: 'Я пользуюсь картой, чтобы найти дорогу.' },
        { es: 'поезд', rom: 'poyezd', fr: 'le train', ex: 'Поезд отправляется в девять.' },
        { es: 'автобус', rom: 'avtobus', fr: 'le bus', ex: 'Я каждый день езжу на автобусе.' },
        { es: 'вокзал', rom: 'vokzal', fr: 'la gare', ex: 'Вокзал находится в центре города.' },
        { es: 'багаж', rom: 'bagazh', fr: 'les bagages', ex: 'Мой багаж очень тяжёлый.' },
        { es: 'пляж', rom: 'plyazh', fr: 'la plage', ex: 'Мы отдыхаем на пляже.' }
      ],
      intermediaire: [
        { es: 'бронирование', rom: 'bronirovaniye', fr: 'la réservation', ex: 'Я сделал бронирование онлайн.' },
        { es: 'отправление', rom: 'otpravleniye', fr: 'le départ', ex: 'Отправление в полдень.' },
        { es: 'прибытие', rom: 'pribyitiye', fr: "l'arrivée", ex: 'Наше прибытие задерживается.' },
        { es: 'таможня', rom: 'tamozhnya', fr: 'la douane', ex: 'Мы проходим таможню.' },
        { es: 'валюта', rom: 'valyuta', fr: 'la devise', ex: 'Я меняю валюту в банке.' },
        { es: 'сувенир', rom: 'suvenir', fr: 'le souvenir', ex: 'Я покупаю сувенир для семьи.' },
        { es: 'гид', rom: 'gid', fr: 'le guide', ex: 'Гид показывает нам город.' },
        { es: 'приключение', rom: 'priklyucheniye', fr: "l'aventure", ex: 'Каждая поездка — новое приключение.' }
      ],
      avance: [
        { es: 'маршрут', rom: 'marshrut', fr: "l'itinéraire", ex: 'Наш маршрут включает пять городов.' },
        { es: 'пункт назначения', rom: 'punkt naznacheniya', fr: 'la destination', ex: 'Париж — мой город мечты.' },
        { es: 'жильё', rom: 'zhilyo', fr: "l'hébergement", ex: 'Жильё отличное.' },
        { es: 'исследовать', rom: 'issledovat',  fr: 'explorer', ex: 'Я исследую старый город пешком.' },
        { es: 'достопримечательность', rom: 'dostoprimechatelnost', fr: 'le monument', ex: 'Красная площадь — знаменитая достопримечательность.' },
        { es: 'культура', rom: 'kultura', fr: 'la culture', ex: 'Я восхищаюсь местной культурой.' },
        { es: 'пейзаж', rom: 'peyzazh', fr: 'le paysage', ex: 'Пейзаж захватывает дух.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'мама', rom: 'mama', fr: 'la mère', ex: 'Моя мама очень хорошо готовит.' },
        { es: 'папа', rom: 'papa', fr: 'le père', ex: 'Мой папа работает в Москве.' },
        { es: 'сестра', rom: 'sestra', fr: 'la sœur', ex: 'Моя сестра очень смешная.' },
        { es: 'брат', rom: 'brat', fr: 'le frère', ex: 'Мой брат играет в футбол.' },
        { es: 'бабушка', rom: 'babushka', fr: 'la grand-mère', ex: 'Бабушка рассказывает замечательные истории.' },
        { es: 'дедушка', rom: 'dedushka', fr: 'le grand-père', ex: 'Дедушка очень мудрый.' },
        { es: 'ребёнок', rom: 'rebyonok', fr: "l'enfant", ex: 'Ребёнок играет в саду.' },
        { es: 'семья', rom: 'semya', fr: 'la famille', ex: 'Моя семья очень дружная.' },
        { es: 'дом', rom: 'dom', fr: 'le foyer', ex: 'В гостях хорошо, а дома лучше.' },
        { es: 'дочь', rom: 'doch',  fr: 'la fille', ex: 'Дочь учится в университете.' }
      ],
      intermediaire: [
        { es: 'двоюродный брат', rom: 'dvoyurodnyy brat', fr: 'le cousin', ex: 'Мой двоюродный брат живёт в Санкт-Петербурге.' },
        { es: 'тётя', rom: 'tyotya', fr: 'la tante', ex: 'Тётя печёт вкусные пироги.' },
        { es: 'дядя', rom: 'dyadya', fr: "l'oncle", ex: 'Дядя врач.' },
        { es: 'племянник', rom: 'plemyannik', fr: 'le neveu', ex: 'Племяннику два года.' },
        { es: 'муж', rom: 'muzh', fr: 'le mari', ex: 'Её муж очень заботливый.' },
        { es: 'жена', rom: 'zhena', fr: 'la femme', ex: 'Его жена учительница.' },
        { es: 'свадьба', rom: 'svadba', fr: 'le mariage', ex: 'Свадьба была прекрасной.' },
        { es: 'родители', rom: 'roditeli', fr: 'les parents', ex: 'Мои родители в отпуске.' }
      ],
      avance: [
        { es: 'отношения', rom: 'otnosheniya', fr: 'la relation', ex: 'Хорошие отношения требуют усилий.' },
        { es: 'наследие', rom: 'naslediye', fr: "l'héritage", ex: 'Мы разделяем богатое культурное наследие.' },
        { es: 'поколение', rom: 'pokoleniye', fr: 'la génération', ex: 'Каждое поколение учится у предыдущего.' },
        { es: 'воспитание', rom: 'vospitaniye', fr: "l'éducation", ex: 'Хорошее воспитание формирует характер.' },
        { es: 'традиция', rom: 'traditsiya', fr: 'la tradition', ex: 'Мы храним семейные традиции.' },
        { es: 'связь', rom: 'svyaz',  fr: 'le lien', ex: 'Связь между братьями и сёстрами крепкая.' },
        { es: 'воссоединение', rom: 'vossoyedineniye', fr: 'les retrouvailles', ex: 'Встреча семьи была замечательной.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'красный', rom: 'krasnyy', fr: 'rouge', ex: 'Яблоко ярко-красное.' },
        { es: 'синий', rom: 'siniy', fr: 'bleu', ex: 'Небо ясное и синее.' },
        { es: 'зелёный', rom: 'zelonyy', fr: 'vert', ex: 'Трава зелёная после дождя.' },
        { es: 'жёлтый', rom: 'zholtyy', fr: 'jaune', ex: 'Солнце жёлтое и тёплое.' },
        { es: 'чёрный', rom: 'chornyy', fr: 'noir', ex: 'Сегодня я ношу чёрную куртку.' },
        { es: 'белый', rom: 'belyy', fr: 'blanc', ex: 'Снег полностью белый.' },
        { es: 'оранжевый', rom: 'oranzhevyy', fr: 'orange', ex: 'Её платье ярко-оранжевое.' },
        { es: 'розовый', rom: 'rozovyy', fr: 'rose', ex: 'Розы бледно-розовые.' },
        { es: 'фиолетовый', rom: 'fioletovyy', fr: 'violet', ex: 'Небо становится фиолетовым на закате.' },
        { es: 'коричневый', rom: 'korichnevyy', fr: 'marron', ex: 'Ствол дерева коричневый.' }
      ],
      intermediaire: [
        { es: 'серый', rom: 'seryy', fr: 'gris', ex: 'Тучи тёмно-серые.' },
        { es: 'тёмный', rom: 'tyomnyy', fr: 'foncé', ex: 'Зимой я предпочитаю тёмные цвета.' },
        { es: 'светлый', rom: 'svetlyy', fr: 'clair', ex: 'Летом она носит светло-голубой.' },
        { es: 'яркий', rom: 'yarkiy', fr: 'vif', ex: 'На картине яркие цвета.' },
        { es: 'бледный', rom: 'blednyy', fr: 'pâle', ex: 'Он сегодня выглядит бледным.' },
        { es: 'красочный', rom: 'krasochnyy', fr: 'coloré', ex: 'Рынок очень красочный.' },
        { es: 'оттенок', rom: 'ottenok', fr: 'la teinte', ex: 'Мне нравится этот оттенок синего.' },
        { es: 'прозрачный', rom: 'prozrachnyy', fr: 'transparent', ex: 'Стекло прозрачное.' }
      ],
      avance: [
        { es: 'контраст', rom: 'kontrast', fr: 'le contraste', ex: 'Контраст между цветами разительный.' },
        { es: 'насыщенный', rom: 'nasyshchennyy', fr: 'éclatant', ex: 'Насыщенные цвета привлекли моё внимание.' },
        { es: 'нюанс', rom: 'nyuans', fr: 'la nuance', ex: 'Нюанс меняется при разном освещении.' },
        { es: 'монохромный', rom: 'monokhromnyy', fr: 'monochrome', ex: 'Фотография монохромная.' },
        { es: 'пигмент', rom: 'pigment', fr: 'le pigment', ex: 'В этой краске используются натуральные пигменты.' },
        { es: 'спектр', rom: 'spektr', fr: 'le spectre', ex: 'Радуга показывает полный спектр.' },
        { es: 'тон', rom: 'ton', fr: 'la teinte', ex: 'Добавьте тон жёлтого в смесь.' }
      ]
    }
  },
  'ja': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'こんにちは', rom: 'konnichiwa', fr: 'bonjour', ex: 'こんにちは、お元気ですか？' },
        { es: 'さようなら', rom: 'sayounara', fr: 'au revoir', ex: 'さようなら、またすぐに！' },
        { es: 'おねがいします', rom: 'onegaishimasu', fr: "s'il vous plaît", ex: 'おねがいします、助けてください。' },
        { es: 'ありがとう', rom: 'arigatou', fr: 'merci', ex: 'ありがとうございます！' },
        { es: 'はい', rom: 'hai', fr: 'oui', ex: 'はい、わかりました。' },
        { es: 'いいえ', rom: 'iie', fr: 'non', ex: 'いいえ、けっこうです。' },
        { es: 'すみません', rom: 'sumimasen', fr: 'excusez-moi', ex: 'すみません、駅はどこですか？' },
        { es: 'ごめんなさい', rom: 'gomennasai', fr: 'je suis désolé', ex: 'ごめんなさい、遅れました。' },
        { es: 'たすけて', rom: 'tasukete', fr: "l'aide", ex: 'たすけてください。' },
        { es: 'ともだち', rom: 'tomodachi', fr: "l'ami", ex: '彼女は私の親友です。' }
      ],
      intermediaire: [
        { es: 'わかる', rom: 'wakaru', fr: 'comprendre', ex: 'わかりますか？' },
        { es: 'はなす', rom: 'hanasu', fr: 'parler', ex: '私は少し日本語を話します。' },
        { es: 'まなぶ', rom: 'manabu', fr: 'apprendre', ex: '日本語を学びたいです。' },
        { es: 'もういちど', rom: 'mouichido', fr: 'répéter', ex: 'もう一度言ってください。' },
        { es: 'ゆっくり', rom: 'yukkuri', fr: 'lentement', ex: 'ゆっくり話してください。' },
        { es: 'しる', rom: 'shiru', fr: 'savoir', ex: '答えを知りません。' },
        { es: 'ひつよう', rom: 'hitsuyou', fr: 'avoir besoin de', ex: '少し時間が必要です。' },
        { es: 'したい', rom: 'shitai', fr: 'vouloir', ex: 'やってみたいです。' }
      ],
      avance: [
        { es: 'きかい', rom: 'kikai', fr: "l'opportunité", ex: 'これは素晴らしい機会です。' },
        { es: 'ちょうせん', rom: 'chousen', fr: 'le défi', ex: 'すべての挑戦が私たちを強くします。' },
        { es: 'たっせいする', rom: 'tasseisuru', fr: 'atteindre', ex: '目標を達成します。' },
        { es: 'せきにん', rom: 'sekinin', fr: 'la responsabilité', ex: '私たちは責任を共有しています。' },
        { es: 'こうきしん', rom: 'koukishin', fr: 'curiosité', ex: '彼女は科学にとても好奇心旺盛です。' },
        { es: 'けつい', rom: 'ketsui', fr: 'détermination', ex: '彼は成功しようと決意しています。' },
        { es: 'むきりょく', rom: 'mukiryoku', fr: 'améliorer', ex: '毎日スキルを向上させています。' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'ごはん', rom: 'gohan', fr: 'le riz / repas', ex: 'ごはんを毎日食べます。' },
        { es: 'みず', rom: 'mizu', fr: "l'eau", ex: '一日中水を飲みます。' },
        { es: 'パン', rom: 'pan', fr: 'le pain', ex: 'パンはまだ温かいです。' },
        { es: 'たまご', rom: 'tamago', fr: "l'œuf", ex: '朝ごはんにたまごを食べます。' },
        { es: 'さかな', rom: 'sakana', fr: 'le poisson', ex: 'さかなが大好きです。' },
        { es: 'とりにく', rom: 'toriniku', fr: 'le poulet', ex: 'とりにくはおいしいです。' },
        { es: 'みそしる', rom: 'misoshiru', fr: 'la soupe miso', ex: '毎朝みそしるを飲みます。' },
        { es: 'すし', rom: 'sushi', fr: 'les sushis', ex: 'すしは日本の有名な料理です。' },
        { es: 'ラーメン', rom: 'raamen', fr: 'les ramen', ex: 'このラーメンはとてもおいしい。' },
        { es: 'おちゃ', rom: 'ocha', fr: 'le thé', ex: '毎晩おちゃを飲みます。' }
      ],
      intermediaire: [
        { es: 'いちご', rom: 'ichigo', fr: 'la fraise', ex: 'いちごは甘くて熟しています。' },
        { es: 'だいこん', rom: 'daikon', fr: 'le radis blanc', ex: 'だいこんを料理に入れます。' },
        { es: 'とうふ', rom: 'toufu', fr: 'le tofu', ex: 'とうふは栄養があります。' },
        { es: 'しょうゆ', rom: 'shouyu', fr: 'la sauce soja', ex: 'しょうゆで味付けします。' },
        { es: 'さとう', rom: 'satou', fr: 'le sucre', ex: 'さとうを少し加えます。' },
        { es: 'デザート', rom: 'dezaato', fr: 'le dessert', ex: 'デザートは何にしますか？' },
        { es: 'レシピ', rom: 'reshipi', fr: 'la recette', ex: 'これはおばあちゃんのレシピです。' },
        { es: 'ぎゅうにゅう', rom: 'gyuunyuu', fr: 'le lait', ex: 'コーヒーにぎゅうにゅうを入れます。' }
      ],
      avance: [
        { es: 'ざいりょう', rom: 'zairyou', fr: 'les ingrédients', ex: '材料はすべて新鮮です。' },
        { es: 'ちょうみりょう', rom: 'choumiryou', fr: "l'assaisonnement", ex: '調味料は完璧です。' },
        { es: 'えいようがある', rom: 'eiyougaaru', fr: 'nutritif', ex: 'この料理はとても栄養があります。' },
        { es: 'しょくよく', rom: 'shokuyoku', fr: "l'appétit", ex: 'においで食欲が増します。' },
        { es: 'りょうり', rom: 'ryouri', fr: 'la cuisine', ex: 'アジア料理が大好きです。' },
        { es: 'あじ', rom: 'aji', fr: 'la saveur', ex: 'この料理の味は独特です。' },
        { es: 'いちにんまえ', rom: 'ichininmae', fr: 'la portion', ex: '一人前はとても多いです。' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'くうこう', rom: 'kuukou', fr: "l'aéroport", ex: '8時に空港に着きます。' },
        { es: 'ホテル', rom: 'hoteru', fr: "l'hôtel", ex: 'ホテルはビーチの近くにあります。' },
        { es: 'きっぷ', rom: 'kippu', fr: 'le billet', ex: '飛行機のきっぷを買いました。' },
        { es: 'パスポート', rom: 'pasupooto', fr: 'le passeport', ex: 'パスポートを忘れないでください。' },
        { es: 'ちず', rom: 'chizu', fr: 'la carte', ex: '道を探すためにちずを使います。' },
        { es: 'でんしゃ', rom: 'densha', fr: 'le train', ex: 'でんしゃは9時に出発します。' },
        { es: 'バス', rom: 'basu', fr: 'le bus', ex: '毎日バスに乗ります。' },
        { es: 'えき', rom: 'eki', fr: 'la gare', ex: 'えきは市の中心にあります。' },
        { es: 'にもつ', rom: 'nimotsu', fr: 'les bagages', ex: 'にもつはとても重いです。' },
        { es: 'うみ', rom: 'umi', fr: 'la plage', ex: 'うみでリラックスします。' }
      ],
      intermediaire: [
        { es: 'よやく', rom: 'yoyaku', fr: 'la réservation', ex: 'オンラインでよやくしました。' },
        { es: 'しゅっぱつ', rom: 'shuppatsu', fr: 'le départ', ex: 'しゅっぱつは正午です。' },
        { es: 'とうちゃく', rom: 'touchaku', fr: "l'arrivée", ex: 'とうちゃくが遅れています。' },
        { es: 'ぜいかん', rom: 'zeikan', fr: 'la douane', ex: 'ぜいかんを通過します。' },
        { es: 'つうか', rom: 'tsuuka', fr: 'la devise', ex: '銀行でつうかを両替します。' },
        { es: 'おみやげ', rom: 'omiyage', fr: 'le souvenir', ex: '家族のためにおみやげを買います。' },
        { es: 'ガイド', rom: 'gaido', fr: 'le guide', ex: 'ガイドが町を案内してくれます。' },
        { es: 'ぼうけん', rom: 'bouken', fr: "l'aventure", ex: '旅はいつも新しいぼうけんです。' }
      ],
      avance: [
        { es: 'いてぃねらりー', rom: 'itinerary', fr: "l'itinéraire", ex: '旅程には5つの都市が含まれています。' },
        { es: 'もくてきち', rom: 'mokutekichi', fr: 'la destination', ex: 'パリは私の夢の目的地です。' },
        { es: 'しゅくはく', rom: 'shukuhaku', fr: "l'hébergement", ex: '宿泊施設は素晴らしいです。' },
        { es: 'たんけんする', rom: 'tankensuru', fr: 'explorer', ex: '旧市街を徒歩で探検します。' },
        { es: 'めいしょ', rom: 'meisho', fr: 'le monument', ex: '富士山は有名な名所です。' },
        { es: 'ぶんか', rom: 'bunka', fr: 'la culture', ex: '地元の文化に魅了されています。' },
        { es: 'けしき', rom: 'keshiki', fr: 'le paysage', ex: '景色は息をのむほど美しいです。' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'おかあさん', rom: 'okaasan', fr: 'la mère', ex: 'おかあさんはとても料理が上手です。' },
        { es: 'おとうさん', rom: 'otousan', fr: 'le père', ex: 'おとうさんは東京で働いています。' },
        { es: 'いもうと', rom: 'imouto', fr: 'la sœur cadette', ex: 'いもうとはとても面白いです。' },
        { es: 'おにいさん', rom: 'oniisan', fr: 'le grand frère', ex: 'おにいさんはサッカーをします。' },
        { es: 'おばあさん', rom: 'obaasan', fr: 'la grand-mère', ex: 'おばあさんは素敵な話をしてくれます。' },
        { es: 'おじいさん', rom: 'ojiisan', fr: 'le grand-père', ex: 'おじいさんはとても賢いです。' },
        { es: 'あかちゃん', rom: 'akachan', fr: 'le bébé', ex: 'あかちゃんは静かに眠っています。' },
        { es: 'こども', rom: 'kodomo', fr: "l'enfant", ex: 'こどもは庭で遊んでいます。' },
        { es: 'かぞく', rom: 'kazoku', fr: 'la famille', ex: 'かぞくはとても仲良しです。' },
        { es: 'いえ', rom: 'ie', fr: 'le foyer', ex: 'いえが一番落ち着きます。' }
      ],
      intermediaire: [
        { es: 'いとこ', rom: 'itoko', fr: 'le cousin', ex: 'いとこは大阪に住んでいます。' },
        { es: 'おばさん', rom: 'obasan', fr: 'la tante', ex: 'おばさんはおいしいお菓子を作ります。' },
        { es: 'おじさん', rom: 'ojisan', fr: "l'oncle", ex: 'おじさんはお医者さんです。' },
        { es: 'おい', rom: 'oi', fr: 'le neveu', ex: 'おいは2歳です。' },
        { es: 'めい', rom: 'mei', fr: 'la nièce', ex: 'めいは絵を描くのが大好きです。' },
        { es: 'だんな', rom: 'danna', fr: 'le mari', ex: 'だんなはとても優しいです。' },
        { es: 'つま', rom: 'tsuma', fr: 'la femme', ex: 'つまは先生です。' },
        { es: 'けっこん', rom: 'kekkon', fr: 'le mariage', ex: 'けっこん式はとても美しかったです。' }
      ],
      avance: [
        { es: 'かんけい', rom: 'kankei', fr: 'la relation', ex: 'よい関係には努力が必要です。' },
        { es: 'ぶんかいさん', rom: 'bunkkaisan', fr: "l'héritage", ex: '私たちは豊かな文化遺産を共有しています。' },
        { es: 'せだい', rom: 'sedai', fr: 'la génération', ex: '世代ごとに前の世代から学びます。' },
        { es: 'きょういく', rom: 'kyouiku', fr: "l'éducation", ex: 'よい教育が人格を形成します。' },
        { es: 'でんとう', rom: 'dentou', fr: 'la tradition', ex: '家族の伝統を守っています。' },
        { es: 'きずな', rom: 'kizuna', fr: 'le lien', ex: '兄弟のきずなは強いです。' },
        { es: 'さいかい', rom: 'saikai', fr: 'les retrouvailles', ex: '家族の再会はとても素晴らしかったです。' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'あか', rom: 'aka', fr: 'rouge', ex: 'りんごは真っ赤です。' },
        { es: 'あお', rom: 'ao', fr: 'bleu', ex: 'そらは澄んで青いです。' },
        { es: 'みどり', rom: 'midori', fr: 'vert', ex: '雨の後、草は緑です。' },
        { es: 'き', rom: 'ki', fr: 'jaune', ex: 'たいようは黄色くて温かいです。' },
        { es: 'くろ', rom: 'kuro', fr: 'noir', ex: '今日は黒いジャケットを着ています。' },
        { es: 'しろ', rom: 'shiro', fr: 'blanc', ex: '雪は真っ白です。' },
        { es: 'オレンジ', rom: 'orenji', fr: 'orange', ex: '彼女のドレスは明るいオレンジです。' },
        { es: 'ピンク', rom: 'pinku', fr: 'rose', ex: 'バラは淡いピンクです。' },
        { es: 'むらさき', rom: 'murasaki', fr: 'violet', ex: '夕暮れ時、空は紫になります。' },
        { es: 'ちゃいろ', rom: 'chairo', fr: 'marron', ex: '木の幹は茶色です。' }
      ],
      intermediaire: [
        { es: 'はいいろ', rom: 'haiiro', fr: 'gris', ex: '雲はだいだいはいいろです。' },
        { es: 'こい', rom: 'koi', fr: 'foncé', ex: '冬は濃い色が好きです。' },
        { es: 'うすい', rom: 'usui', fr: 'clair', ex: '夏には薄い青を着ます。' },
        { es: 'あざやか', rom: 'azayaka', fr: 'vif', ex: '絵は鮮やかな色を使っています。' },
        { es: 'あおざめた', rom: 'aozameta', fr: 'pâle', ex: '今日は顔色が青ざめています。' },
        { es: 'いろとりどり', rom: 'irotoridori', fr: 'coloré', ex: 'いちばはとてもいろとりどりです。' },
        { es: 'いろあい', rom: 'iroai', fr: 'la teinte', ex: 'この色合いの青が好きです。' },
        { es: 'とうめい', rom: 'toumei', fr: 'transparent', ex: 'ガラスは透明です。' }
      ],
      avance: [
        { es: 'たいひ', rom: 'taihi', fr: 'le contraste', ex: '色のたいひが印象的です。' },
        { es: 'あざやかな', rom: 'azayakana', fr: 'éclatant', ex: '鮮やかな色が目を引きました。' },
        { es: 'ニュアンス', rom: 'nyuansu', fr: 'la nuance', ex: '光によってニュアンスが変わります。' },
        { es: 'モノクロ', rom: 'monokuro', fr: 'monochrome', ex: '写真はモノクロです。' },
        { es: 'がんりょう', rom: 'ganryou', fr: 'le pigment', ex: 'この絵の具は天然顔料を使っています。' },
        { es: 'スペクトル', rom: 'supekutoru', fr: 'le spectre', ex: '虹はスペクトル全体を示します。' },
        { es: 'いろみ', rom: 'iromi', fr: 'la teinte', ex: '混合物に黄色の色みを加えます。' }
      ]
    }
  },
  'ko': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: '안녕하세요', rom: 'annyeonghaseyo', fr: 'bonjour', ex: '안녕하세요, 어떻게 지내세요?' },
        { es: '안녕히 가세요', rom: 'annyeonghi gaseyo', fr: 'au revoir', ex: '안녕히 가세요, 곧 봐요!' },
        { es: '부탁합니다', rom: 'butakamnida', fr: "s'il vous plaît", ex: '부탁합니다, 도와주세요.' },
        { es: '감사합니다', rom: 'gamsahamnida', fr: 'merci', ex: '정말 감사합니다!' },
        { es: '네', rom: 'ne', fr: 'oui', ex: '네, 이해했습니다.' },
        { es: '아니요', rom: 'aniyo', fr: 'non', ex: '아니요, 괜찮습니다.' },
        { es: '실례합니다', rom: 'sillyehamnida', fr: 'excusez-moi', ex: '실례합니다, 역이 어디 있나요?' },
        { es: '죄송합니다', rom: 'joesonghamnida', fr: 'je suis désolé', ex: '늦어서 죄송합니다.' },
        { es: '도움', rom: 'doum', fr: "l'aide", ex: '도움이 필요합니다, 부탁합니다.' },
        { es: '친구', rom: 'chingu', fr: "l'ami", ex: '그녀는 제 가장 친한 친구예요.' }
      ],
      intermediaire: [
        { es: '이해하다', rom: 'ihaehada', fr: 'comprendre', ex: '이해하시겠어요?' },
        { es: '말하다', rom: 'malhada', fr: 'parler', ex: '저는 한국어를 조금 합니다.' },
        { es: '배우다', rom: 'baeuda', fr: 'apprendre', ex: '한국어를 배우고 싶어요.' },
        { es: '다시 말하다', rom: 'dasi malhada', fr: 'répéter', ex: '다시 한번 말씀해 주세요.' },
        { es: '천천히', rom: 'cheoncheonhi', fr: 'lentement', ex: '천천히 말씀해 주세요.' },
        { es: '알다', rom: 'alda', fr: 'savoir', ex: '답을 모르겠어요.' },
        { es: '필요하다', rom: 'piryohada', fr: 'avoir besoin de', ex: '잠깐 시간이 필요해요.' },
        { es: '원하다', rom: 'wonhada', fr: 'vouloir', ex: '시도해 보고 싶어요.' }
      ],
      avance: [
        { es: '기회', rom: 'gihoe', fr: "l'opportunité", ex: '이것은 훌륭한 기회입니다.' },
        { es: '도전', rom: 'dojeon', fr: 'le défi', ex: '모든 도전은 우리를 더 강하게 만듭니다.' },
        { es: '목표달성', rom: 'mokpyo dalseong', fr: 'atteindre', ex: '목표를 달성할 것입니다.' },
        { es: '책임', rom: 'chaegim', fr: 'la responsabilité', ex: '우리는 책임을 공유합니다.' },
        { es: '호기심', rom: 'hogisim', fr: 'curiosité', ex: '그녀는 과학에 매우 호기심이 많습니다.' },
        { es: '결단력', rom: 'gyeoldannyeok', fr: 'détermination', ex: '그는 성공하기로 결심했습니다.' },
        { es: '개선하다', rom: 'gaeseonhada', fr: 'améliorer', ex: '매일 실력을 향상시키고 있습니다.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: '밥', rom: 'bap', fr: 'le riz / repas', ex: '매일 밥을 먹어요.' },
        { es: '물', rom: 'mul', fr: "l'eau", ex: '하루 종일 물을 마셔요.' },
        { es: '빵', rom: 'ppang', fr: 'le pain', ex: '빵이 아직 따뜻해요.' },
        { es: '달걀', rom: 'dalgyal', fr: "l'œuf", ex: '아침에 달걀을 먹어요.' },
        { es: '닭고기', rom: 'dakgogi', fr: 'le poulet', ex: '닭고기가 맛있어요.' },
        { es: '생선', rom: 'saengseon', fr: 'le poisson', ex: '생선을 좋아해요.' },
        { es: '김치', rom: 'gimchi', fr: 'le kimchi', ex: '김치는 한국의 전통 음식이에요.' },
        { es: '불고기', rom: 'bulgogi', fr: 'le bœuf mariné', ex: '불고기는 매우 맛있어요.' },
        { es: '차', rom: 'cha', fr: 'le thé', ex: '매일 저녁 차를 마셔요.' },
        { es: '치즈', rom: 'chijeu', fr: 'le fromage', ex: '치즈를 좋아해요.' }
      ],
      intermediaire: [
        { es: '딸기', rom: 'ttalgi', fr: 'la fraise', ex: '딸기가 익고 달콤해요.' },
        { es: '오렌지 주스', rom: 'orenji juseu', fr: "le jus d'orange", ex: '아침에 오렌지 주스를 마셔요.' },
        { es: '버섯', rom: 'beoseot', fr: 'les champignons', ex: '소스에 버섯을 넣어요.' },
        { es: '버터', rom: 'beoteo', fr: 'le beurre', ex: '빵에 버터를 발라요.' },
        { es: '설탕', rom: 'seoltang', fr: 'le sucre', ex: '차에 설탕을 넣을까요?' },
        { es: '후추', rom: 'huchu', fr: 'le poivre', ex: '후추를 조금 넣어요.' },
        { es: '디저트', rom: 'dijeoteu', fr: 'le dessert', ex: '디저트는 무엇으로 드실래요?' },
        { es: '레시피', rom: 'resipi', fr: 'la recette', ex: '할머니 레시피예요.' }
      ],
      avance: [
        { es: '재료', rom: 'jaeryo', fr: 'les ingrédients', ex: '재료가 모두 신선해요.' },
        { es: '양념', rom: 'yangnyeom', fr: "l'assaisonnement", ex: '양념이 완벽해요.' },
        { es: '영양가 있는', rom: 'yeongyang-ga inneun', fr: 'nutritif', ex: '이 음식은 매우 영양가 있어요.' },
        { es: '식욕', rom: 'sigyok', fr: "l'appétit", ex: '냄새가 식욕을 자극해요.' },
        { es: '요리', rom: 'yori', fr: 'la cuisine', ex: '아시아 요리를 좋아해요.' },
        { es: '맛', rom: 'mat', fr: 'la saveur', ex: '이 요리의 맛은 독특해요.' },
        { es: '1인분', rom: 'irinbun', fr: 'la portion', ex: '1인분이 매우 많아요.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: '공항', rom: 'gonghang', fr: "l'aéroport", ex: '8시에 공항에 도착해요.' },
        { es: '호텔', rom: 'hotel', fr: "l'hôtel", ex: '호텔은 해변 근처에 있어요.' },
        { es: '표', rom: 'pyo', fr: 'le billet', ex: '비행기 표를 샀어요.' },
        { es: '여권', rom: 'yeogwon', fr: 'le passeport', ex: '여권을 잊지 마세요.' },
        { es: '지도', rom: 'jido', fr: 'la carte', ex: '길을 찾기 위해 지도를 써요.' },
        { es: '기차', rom: 'gicha', fr: 'le train', ex: '기차는 9시에 출발해요.' },
        { es: '버스', rom: 'beoseu', fr: 'le bus', ex: '매일 버스를 타요.' },
        { es: '역', rom: 'yeok', fr: 'la gare', ex: '역은 시내 중심에 있어요.' },
        { es: '짐', rom: 'jim', fr: 'les bagages', ex: '짐이 매우 무거워요.' },
        { es: '해변', rom: 'haebyeon', fr: 'la plage', ex: '해변에서 쉬어요.' }
      ],
      intermediaire: [
        { es: '예약', rom: 'yeyak', fr: 'la réservation', ex: '온라인으로 예약했어요.' },
        { es: '출발', rom: 'chulbal', fr: 'le départ', ex: '출발은 정오예요.' },
        { es: '도착', rom: 'dochak', fr: "l'arrivée", ex: '도착이 늦어지고 있어요.' },
        { es: '세관', rom: 'segwan', fr: 'la douane', ex: '세관을 통과해요.' },
        { es: '환전', rom: 'hwanjeon', fr: 'la devise', ex: '은행에서 환전해요.' },
        { es: '기념품', rom: 'ginyeompum', fr: 'le souvenir', ex: '가족을 위해 기념품을 사요.' },
        { es: '가이드', rom: 'gaideu', fr: 'le guide', ex: '가이드가 도시를 안내해줘요.' },
        { es: '모험', rom: 'moheom', fr: "l'aventure", ex: '모든 여행은 새로운 모험이에요.' }
      ],
      avance: [
        { es: '일정', rom: 'iljeong', fr: "l'itinéraire", ex: '일정에는 다섯 도시가 포함돼요.' },
        { es: '목적지', rom: 'mokjeokji', fr: 'la destination', ex: '파리는 제 꿈의 목적지예요.' },
        { es: '숙박', rom: 'sukbak', fr: "l'hébergement", ex: '숙박 시설이 훌륭해요.' },
        { es: '탐험하다', rom: 'tamheomhada', fr: 'explorer', ex: '구시가를 걸어서 탐험해요.' },
        { es: '명소', rom: 'myeongso', fr: 'le monument', ex: '경복궁은 유명한 명소예요.' },
        { es: '문화', rom: 'munhwa', fr: 'la culture', ex: '현지 문화에 매료되었어요.' },
        { es: '풍경', rom: 'punggyeong', fr: 'le paysage', ex: '풍경이 숨막히게 아름다워요.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: '어머니', rom: 'eomeoni', fr: 'la mère', ex: '어머니는 요리를 아주 잘하세요.' },
        { es: '아버지', rom: 'abeoji', fr: 'le père', ex: '아버지는 서울에서 일하세요.' },
        { es: '언니/누나', rom: 'eonni/nuna', fr: 'la grande sœur', ex: '언니는 매우 재미있어요.' },
        { es: '오빠/형', rom: 'oppa/hyeong', fr: 'le grand frère', ex: '오빠는 축구를 해요.' },
        { es: '할머니', rom: 'halmeoni', fr: 'la grand-mère', ex: '할머니는 멋진 이야기를 해주세요.' },
        { es: '할아버지', rom: 'harabeoji', fr: 'le grand-père', ex: '할아버지는 매우 지혜로우세요.' },
        { es: '아기', rom: 'agi', fr: 'le bébé', ex: '아기가 평화롭게 자고 있어요.' },
        { es: '아이', rom: 'ai', fr: "l'enfant", ex: '아이가 정원에서 놀고 있어요.' },
        { es: '가족', rom: 'gajok', fr: 'la famille', ex: '우리 가족은 매우 가까워요.' },
        { es: '집', rom: 'jip', fr: 'le foyer', ex: '집이 가장 편안해요.' }
      ],
      intermediaire: [
        { es: '사촌', rom: 'sachon', fr: 'le cousin', ex: '사촌은 부산에 살아요.' },
        { es: '이모/고모', rom: 'imo/gomo', fr: 'la tante', ex: '이모는 맛있는 케이크를 만들어요.' },
        { es: '삼촌', rom: 'samchon', fr: "l'oncle", ex: '삼촌은 의사예요.' },
        { es: '조카', rom: 'joka', fr: 'le neveu / la nièce', ex: '조카는 두 살이에요.' },
        { es: '남편', rom: 'nampyeon', fr: 'le mari', ex: '남편은 매우 다정해요.' },
        { es: '아내', rom: 'anae', fr: 'la femme', ex: '아내는 선생님이에요.' },
        { es: '결혼', rom: 'gyeolhon', fr: 'le mariage', ex: '결혼식이 아름다웠어요.' },
        { es: '부모님', rom: 'bumonim', fr: 'les parents', ex: '부모님은 휴가 중이에요.' }
      ],
      avance: [
        { es: '관계', rom: 'gwangye', fr: 'la relation', ex: '좋은 관계는 노력이 필요해요.' },
        { es: '문화유산', rom: 'munhwa yusan', fr: "l'héritage", ex: '우리는 풍부한 문화유산을 공유해요.' },
        { es: '세대', rom: 'sedae', fr: 'la génération', ex: '각 세대는 이전 세대에서 배워요.' },
        { es: '교육', rom: 'gyoyuk', fr: "l'éducation", ex: '좋은 교육이 성품을 형성해요.' },
        { es: '전통', rom: 'jeontong', fr: 'la tradition', ex: '가족 전통을 지키고 있어요.' },
        { es: '유대', rom: 'yudae', fr: 'le lien', ex: '형제자매의 유대는 강해요.' },
        { es: '재결합', rom: 'jaegyeolhap', fr: 'les retrouvailles', ex: '가족 모임이 훌륭했어요.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: '빨간색', rom: 'ppalgansaek', fr: 'rouge', ex: '사과는 밝은 빨간색이에요.' },
        { es: '파란색', rom: 'paransaek', fr: 'bleu', ex: '하늘은 맑고 파란색이에요.' },
        { es: '초록색', rom: 'choroksaek', fr: 'vert', ex: '비 온 뒤 잔디가 초록색이에요.' },
        { es: '노란색', rom: 'noransaek', fr: 'jaune', ex: '태양은 노란색이고 따뜻해요.' },
        { es: '검은색', rom: 'geomeunsaek', fr: 'noir', ex: '오늘 검은색 재킷을 입었어요.' },
        { es: '흰색', rom: 'huinsaek', fr: 'blanc', ex: '눈이 완전히 흰색이에요.' },
        { es: '주황색', rom: 'juhwangsaek', fr: 'orange', ex: '그녀의 드레스는 밝은 주황색이에요.' },
        { es: '분홍색', rom: 'bunhongsaek', fr: 'rose', ex: '장미는 연한 분홍색이에요.' },
        { es: '보라색', rom: 'borasaek', fr: 'violet', ex: '해질녘에 하늘이 보라색이 돼요.' },
        { es: '갈색', rom: 'galsaek', fr: 'marron', ex: '나무 줄기는 갈색이에요.' }
      ],
      intermediaire: [
        { es: '회색', rom: 'hoesaek', fr: 'gris', ex: '구름이 짙은 회색이에요.' },
        { es: '어두운', rom: 'eoduun', fr: 'foncé', ex: '겨울에는 어두운 색을 선호해요.' },
        { es: '밝은', rom: 'balgeun', fr: 'clair', ex: '여름에는 밝은 파란색을 입어요.' },
        { es: '선명한', rom: 'seonmyeonghan', fr: 'vif', ex: '그림은 선명한 색을 사용해요.' },
        { es: '창백한', rom: 'changbaekhan', fr: 'pâle', ex: '오늘 그가 창백해 보여요.' },
        { es: '알록달록한', rom: 'allokdalrokhan', fr: 'coloré', ex: '시장이 매우 알록달록해요.' },
        { es: '색조', rom: 'saekjo', fr: 'la teinte', ex: '이 파란색 색조가 좋아요.' },
        { es: '투명한', rom: 'tumyeonghan', fr: 'transparent', ex: '유리가 투명해요.' }
      ],
      avance: [
        { es: '대비', rom: 'daebi', fr: 'le contraste', ex: '색의 대비가 인상적이에요.' },
        { es: '생생한', rom: 'saengsaenghan', fr: 'éclatant', ex: '생생한 색이 눈길을 끌었어요.' },
        { es: '뉘앙스', rom: 'nuiangseu', fr: 'la nuance', ex: '빛에 따라 뉘앙스가 바뀌어요.' },
        { es: '단색', rom: 'dansaek', fr: 'monochrome', ex: '사진이 단색이에요.' },
        { es: '색소', rom: 'saekso', fr: 'le pigment', ex: '이 페인트에는 천연 색소를 사용해요.' },
        { es: '스펙트럼', rom: 'seupekteureom', fr: 'le spectre', ex: '무지개는 전체 스펙트럼을 보여줘요.' },
        { es: '색감', rom: 'saekgam', fr: 'la teinte', ex: '혼합물에 노란색 색감을 더해요.' }
      ]
    }
  },
  'zh': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: '你好', rom: 'nǐ hǎo', fr: 'bonjour', ex: '你好，你好吗？' },
        { es: '再见', rom: 'zàijiàn', fr: 'au revoir', ex: '再见，很快见！' },
        { es: '请', rom: 'qǐng', fr: "s'il vous plaît", ex: '请帮帮我。' },
        { es: '谢谢', rom: 'xièxie', fr: 'merci', ex: '非常谢谢！' },
        { es: '是', rom: 'shì', fr: 'oui', ex: '是，我明白。' },
        { es: '不', rom: 'bù', fr: 'non', ex: '不，谢谢。' },
        { es: '对不起', rom: 'duìbuqǐ', fr: 'excusez-moi', ex: '对不起，车站在哪里？' },
        { es: '抱歉', rom: 'bàoqiàn', fr: 'je suis désolé', ex: '抱歉我迟到了。' },
        { es: '帮助', rom: 'bāngzhù', fr: "l'aide", ex: '我需要帮助，请。' },
        { es: '朋友', rom: 'péngyǒu', fr: "l'ami", ex: '她是我最好的朋友。' }
      ],
      intermediaire: [
        { es: '理解', rom: 'lǐjiě', fr: 'comprendre', ex: '你理解我吗？' },
        { es: '说话', rom: 'shuōhuà', fr: 'parler', ex: '我说一点中文。' },
        { es: '学习', rom: 'xuéxí', fr: 'apprendre', ex: '我想学习中文。' },
        { es: '再说一次', rom: 'zài shuō yīcì', fr: 'répéter', ex: '请再说一次。' },
        { es: '慢慢说', rom: 'màn màn shuō', fr: 'lentement', ex: '请慢慢说。' },
        { es: '知道', rom: 'zhīdào', fr: 'savoir', ex: '我不知道答案。' },
        { es: '需要', rom: 'xūyào', fr: 'avoir besoin de', ex: '我需要一点时间。' },
        { es: '想要', rom: 'xiǎngyào', fr: 'vouloir', ex: '我想试试。' }
      ],
      avance: [
        { es: '机会', rom: 'jīhuì', fr: "l'opportunité", ex: '这是一个很好的机会。' },
        { es: '挑战', rom: 'tiǎozhàn', fr: 'le défi', ex: '每一个挑战都使我们更强大。' },
        { es: '实现目标', rom: 'shíxiàn mùbiāo', fr: 'atteindre', ex: '我会实现我的目标。' },
        { es: '责任', rom: 'zérèn', fr: 'la responsabilité', ex: '我们共同承担责任。' },
        { es: '好奇', rom: 'hàoqí', fr: 'curieux', ex: '她对科学非常好奇。' },
        { es: '坚定', rom: 'jiāndìng', fr: 'déterminé', ex: '他坚定地要成功。' },
        { es: '进步', rom: 'jìnbù', fr: 'améliorer', ex: '我每天都在提高我的技能。' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: '米饭', rom: 'mǐfàn', fr: 'le riz', ex: '我每天吃米饭。' },
        { es: '水', rom: 'shuǐ', fr: "l'eau", ex: '我整天喝水。' },
        { es: '面包', rom: 'miànbāo', fr: 'le pain', ex: '面包还是热的。' },
        { es: '鸡蛋', rom: 'jīdàn', fr: "l'œuf", ex: '我早饭吃鸡蛋。' },
        { es: '鸡肉', rom: 'jīròu', fr: 'le poulet', ex: '鸡肉很好吃。' },
        { es: '鱼', rom: 'yú', fr: 'le poisson', ex: '我喜欢吃鱼。' },
        { es: '饺子', rom: 'jiǎozi', fr: 'les raviolis', ex: '饺子是中国的传统食物。' },
        { es: '汤', rom: 'tāng', fr: 'la soupe', ex: '这碗汤很热。' },
        { es: '茶', rom: 'chá', fr: 'le thé', ex: '我每天喝茶。' },
        { es: '苹果', rom: 'píngguǒ', fr: 'la pomme', ex: '我每天早上吃苹果。' }
      ],
      intermediaire: [
        { es: '草莓', rom: 'cǎoméi', fr: 'la fraise', ex: '草莓熟了，很甜。' },
        { es: '橙汁', rom: 'chéngzhī', fr: "le jus d'orange", ex: '我早上喝橙汁。' },
        { es: '蘑菇', rom: 'mógu', fr: 'les champignons', ex: '我在酱料里加蘑菇。' },
        { es: '黄油', rom: 'huángyóu', fr: 'le beurre', ex: '我在面包上抹黄油。' },
        { es: '糖', rom: 'táng', fr: 'le sucre', ex: '你喝茶加糖吗？' },
        { es: '胡椒', rom: 'hújiāo', fr: 'le poivre', ex: '加一点胡椒。' },
        { es: '甜点', rom: 'tiándiǎn', fr: 'le dessert', ex: '你想要什么甜点？' },
        { es: '食谱', rom: 'shípǔ', fr: 'la recette', ex: '这是我奶奶的食谱。' }
      ],
      avance: [
        { es: '食材', rom: 'shícái', fr: 'les ingrédients', ex: '食材都很新鲜。' },
        { es: '调味', rom: 'tiáowèi', fr: "l'assaisonnement", ex: '调味很完美。' },
        { es: '营养丰富', rom: 'yíngyǎng fēngfù', fr: 'nutritif', ex: '这道菜很有营养。' },
        { es: '食欲', rom: 'shíyù', fr: "l'appétit", ex: '气味让我食欲大开。' },
        { es: '烹饪', rom: 'pēngrèn', fr: 'la cuisine', ex: '我喜欢亚洲烹饪。' },
        { es: '味道', rom: 'wèidào', fr: 'la saveur', ex: '这道菜的味道独特。' },
        { es: '份量', rom: 'fènliàng', fr: 'la portion', ex: '份量非常大。' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: '机场', rom: 'jīchǎng', fr: "l'aéroport", ex: '我们八点到机场。' },
        { es: '酒店', rom: 'jiǔdiàn', fr: "l'hôtel", ex: '酒店在海滩附近。' },
        { es: '票', rom: 'piào', fr: 'le billet', ex: '我买了一张飞机票。' },
        { es: '护照', rom: 'hùzhào', fr: 'le passeport', ex: '不要忘记你的护照。' },
        { es: '地图', rom: 'dìtú', fr: 'la carte', ex: '我用地图找路。' },
        { es: '火车', rom: 'huǒchē', fr: 'le train', ex: '火车九点出发。' },
        { es: '公共汽车', rom: 'gōnggòng qìchē', fr: 'le bus', ex: '我每天坐公共汽车。' },
        { es: '车站', rom: 'chēzhàn', fr: 'la gare', ex: '车站在市中心。' },
        { es: '行李', rom: 'xíngli', fr: 'les bagages', ex: '我的行李很重。' },
        { es: '海滩', rom: 'hǎitān', fr: 'la plage', ex: '我们在海滩上放松。' }
      ],
      intermediaire: [
        { es: '预订', rom: 'yùdìng', fr: 'la réservation', ex: '我在网上预订了。' },
        { es: '出发', rom: 'chūfā', fr: 'le départ', ex: '出发时间是中午。' },
        { es: '到达', rom: 'dàodá', fr: "l'arrivée", ex: '我们的到达延误了。' },
        { es: '海关', rom: 'hǎiguān', fr: 'la douane', ex: '我们过海关。' },
        { es: '货币', rom: 'huòbì', fr: 'la devise', ex: '我在银行兑换货币。' },
        { es: '纪念品', rom: 'jìniànpǐn', fr: 'le souvenir', ex: '我给家人买纪念品。' },
        { es: '导游', rom: 'dǎoyóu', fr: 'le guide', ex: '导游带我们游览城市。' },
        { es: '冒险', rom: 'màoxiǎn', fr: "l'aventure", ex: '每次旅行都是一次新冒险。' }
      ],
      avance: [
        { es: '行程', rom: 'xíngchéng', fr: "l'itinéraire", ex: '我们的行程包括五个城市。' },
        { es: '目的地', rom: 'mùdìdì', fr: 'la destination', ex: '巴黎是我的梦想目的地。' },
        { es: '住宿', rom: 'zhùsù', fr: "l'hébergement", ex: '住宿非常好。' },
        { es: '探索', rom: 'tànsuǒ', fr: 'explorer', ex: '我步行探索古城。' },
        { es: '名胜', rom: 'míngshèng', fr: 'le monument', ex: '长城是著名的名胜。' },
        { es: '文化', rom: 'wénhuà', fr: 'la culture', ex: '我对当地文化着迷。' },
        { es: '风景', rom: 'fēngjǐng', fr: 'le paysage', ex: '风景令人叹为观止。' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: '妈妈', rom: 'māma', fr: 'la mère', ex: '我妈妈做饭做得很好。' },
        { es: '爸爸', rom: 'bàba', fr: 'le père', ex: '我爸爸在北京工作。' },
        { es: '姐姐', rom: 'jiějie', fr: 'la grande sœur', ex: '我姐姐很有趣。' },
        { es: '哥哥', rom: 'gēge', fr: 'le grand frère', ex: '我哥哥踢足球。' },
        { es: '奶奶', rom: 'nǎinai', fr: 'la grand-mère', ex: '奶奶讲的故事很好听。' },
        { es: '爷爷', rom: 'yéye', fr: 'le grand-père', ex: '爷爷非常智慧。' },
        { es: '宝宝', rom: 'bǎobao', fr: 'le bébé', ex: '宝宝安静地睡着了。' },
        { es: '孩子', rom: 'háizi', fr: "l'enfant", ex: '孩子在花园里玩。' },
        { es: '家庭', rom: 'jiātíng', fr: 'la famille', ex: '我的家庭非常亲密。' },
        { es: '家', rom: 'jiā', fr: 'le foyer', ex: '家是最舒适的地方。' }
      ],
      intermediaire: [
        { es: '表哥', rom: 'biǎogē', fr: 'le cousin', ex: '我表哥住在上海。' },
        { es: '阿姨', rom: 'āyí', fr: 'la tante', ex: '我阿姨做很好吃的蛋糕。' },
        { es: '叔叔', rom: 'shūshu', fr: "l'oncle", ex: '我叔叔是医生。' },
        { es: '侄子', rom: 'zhízi', fr: 'le neveu', ex: '我侄子两岁了。' },
        { es: '丈夫', rom: 'zhàngfu', fr: 'le mari', ex: '她丈夫非常体贴。' },
        { es: '妻子', rom: 'qīzi', fr: 'la femme', ex: '他妻子是老师。' },
        { es: '婚礼', rom: 'hūnlǐ', fr: 'le mariage', ex: '婚礼非常美丽。' },
        { es: '父母', rom: 'fùmǔ', fr: 'les parents', ex: '我父母在度假。' }
      ],
      avance: [
        { es: '关系', rom: 'guānxi', fr: 'la relation', ex: '好的关系需要努力。' },
        { es: '文化遗产', rom: 'wénhuà yíchǎn', fr: "l'héritage", ex: '我们共享丰富的文化遗产。' },
        { es: '代', rom: 'dài', fr: 'la génération', ex: '每一代人都从上一代学习。' },
        { es: '教育', rom: 'jiàoyù', fr: "l'éducation", ex: '良好的教育塑造品格。' },
        { es: '传统', rom: 'chuántǒng', fr: 'la tradition', ex: '我们保持家庭传统。' },
        { es: '纽带', rom: 'niǔdài', fr: 'le lien', ex: '兄弟姐妹之间的纽带很强。' },
        { es: '团聚', rom: 'tuánjù', fr: 'les retrouvailles', ex: '家庭团聚非常美好。' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: '红色', rom: 'hóngsè', fr: 'rouge', ex: '苹果是鲜红色的。' },
        { es: '蓝色', rom: 'lánsè', fr: 'bleu', ex: '天空晴朗，是蓝色的。' },
        { es: '绿色', rom: 'lǜsè', fr: 'vert', ex: '雨后草地是绿色的。' },
        { es: '黄色', rom: 'huángsè', fr: 'jaune', ex: '太阳是黄色的，很温暖。' },
        { es: '黑色', rom: 'hēisè', fr: 'noir', ex: '我今天穿了一件黑色夹克。' },
        { es: '白色', rom: 'báisè', fr: 'blanc', ex: '雪是完全白色的。' },
        { es: '橙色', rom: 'chéngsè', fr: 'orange', ex: '她的裙子是鲜橙色的。' },
        { es: '粉红色', rom: 'fěnhóngsè', fr: 'rose', ex: '玫瑰是淡粉红色的。' },
        { es: '紫色', rom: 'zǐsè', fr: 'violet', ex: '黄昏时天空变成紫色。' },
        { es: '棕色', rom: 'zōngsè', fr: 'marron', ex: '树干是棕色的。' }
      ],
      intermediaire: [
        { es: '灰色', rom: 'huīsè', fr: 'gris', ex: '云是深灰色的。' },
        { es: '深色', rom: 'shēnsè', fr: 'foncé', ex: '冬天我喜欢深色。' },
        { es: '浅色', rom: 'qiǎnsè', fr: 'clair', ex: '夏天她穿浅蓝色。' },
        { es: '鲜艳', rom: 'xiānyàn', fr: 'vif', ex: '这幅画用了鲜艳的颜色。' },
        { es: '苍白', rom: 'cāngbái', fr: 'pâle', ex: '他今天看起来苍白。' },
        { es: '五颜六色', rom: 'wǔyán liùsè', fr: 'coloré', ex: '市场非常五颜六色。' },
        { es: '色调', rom: 'sèdiào', fr: 'la teinte', ex: '我喜欢这种蓝色色调。' },
        { es: '透明', rom: 'tòumíng', fr: 'transparent', ex: '玻璃是透明的。' }
      ],
      avance: [
        { es: '对比', rom: 'duìbǐ', fr: 'le contraste', ex: '颜色之间的对比很显著。' },
        { es: '鲜明', rom: 'xiānmíng', fr: 'éclatant', ex: '鲜明的颜色吸引了我的注意。' },
        { es: '色彩细微差别', rom: 'sècǎi xìwēi chābié', fr: 'la nuance', ex: '色彩的细微差别随光线变化。' },
        { es: '单色', rom: 'dānsè', fr: 'monochrome', ex: '这张照片是单色的。' },
        { es: '颜料', rom: 'yánliào', fr: 'le pigment', ex: '这种涂料使用天然颜料。' },
        { es: '光谱', rom: 'guāngpǔ', fr: 'le spectre', ex: '彩虹显示完整的光谱。' },
        { es: '色彩', rom: 'sècǎi', fr: 'la teinte', ex: '在混合物中加入黄色色彩。' }
      ]
    }
  },
  'ar': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'مرحبا', rom: 'marhaba', fr: 'bonjour', ex: 'مرحبا، كيف حالك؟' },
        { es: 'مع السلامة', rom: 'maa al-salama', fr: 'au revoir', ex: 'مع السلامة، إلى اللقاء!' },
        { es: 'من فضلك', rom: 'min fadlak', fr: "s'il vous plaît", ex: 'من فضلك، ساعدني.' },
        { es: 'شكرا', rom: 'shukran', fr: 'merci', ex: 'شكرا جزيلا!' },
        { es: 'نعم', rom: 'naam', fr: 'oui', ex: 'نعم، أفهم.' },
        { es: 'لا', rom: 'la', fr: 'non', ex: 'لا، شكرا.' },
        { es: 'عفوا', rom: 'afwan', fr: 'excusez-moi', ex: 'عفوا، أين المحطة؟' },
        { es: 'آسف', rom: 'aasif', fr: 'je suis désolé', ex: 'آسف على التأخير.' },
        { es: 'مساعدة', rom: 'musaada', fr: "l'aide", ex: 'أحتاج مساعدة، من فضلك.' },
        { es: 'صديق', rom: 'sadiq', fr: "l'ami", ex: 'هي صديقتي المفضلة.' }
      ],
      intermediaire: [
        { es: 'يفهم', rom: 'yafham', fr: 'comprendre', ex: 'هل تفهمني؟' },
        { es: 'يتكلم', rom: 'yatakallam', fr: 'parler', ex: 'أتكلم القليل من العربية.' },
        { es: 'يتعلم', rom: 'yataalim', fr: 'apprendre', ex: 'أريد أن أتعلم العربية.' },
        { es: 'يكرر', rom: 'yukarrir', fr: 'répéter', ex: 'هل يمكنك تكرار ذلك، من فضلك؟' },
        { es: 'ببطء', rom: 'bibuti', fr: 'lentement', ex: 'تكلم ببطء من فضلك.' },
        { es: 'يعرف', rom: 'yarif', fr: 'savoir', ex: 'لا أعرف الجواب.' },
        { es: 'يحتاج', rom: 'yahtaj', fr: 'avoir besoin de', ex: 'أحتاج لحظة.' },
        { es: 'يريد', rom: 'yurid', fr: 'vouloir', ex: 'أريد المحاولة.' }
      ],
      avance: [
        { es: 'فرصة', rom: 'fursa', fr: "l'opportunité", ex: 'هذه فرصة رائعة.' },
        { es: 'تحدي', rom: 'tahadi', fr: 'le défi', ex: 'كل تحدٍّ يجعلنا أقوى.' },
        { es: 'يحقق', rom: 'yuhaqqiq', fr: 'atteindre', ex: 'سأحقق أهدافي.' },
        { es: 'مسؤولية', rom: 'masuliyya', fr: 'la responsabilité', ex: 'نتقاسم المسؤولية.' },
        { es: 'فضولي', rom: 'fuduli', fr: 'curieux', ex: 'إنها فضولية جدا تجاه العلوم.' },
        { es: 'مصمم', rom: 'musammim', fr: 'déterminé', ex: 'هو مصمم على النجاح.' },
        { es: 'يتحسن', rom: 'yatahassan', fr: 'améliorer', ex: 'أحسّن مهاراتي كل يوم.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'خبز', rom: 'khubz', fr: 'le pain', ex: 'الخبز لا يزال دافئا.' },
        { es: 'ماء', rom: 'maa', fr: "l'eau", ex: 'أشرب الماء طوال اليوم.' },
        { es: 'حليب', rom: 'halib', fr: 'le lait', ex: 'أضع الحليب في القهوة.' },
        { es: 'بيضة', rom: 'bayda', fr: "l'œuf", ex: 'آكل بيضة على الإفطار.' },
        { es: 'دجاج', rom: 'dajaj', fr: 'le poulet', ex: 'الدجاج لذيذ.' },
        { es: 'سمك', rom: 'samak', fr: 'le poisson', ex: 'أحب أكل السمك.' },
        { es: 'أرز', rom: 'aruzz', fr: 'le riz', ex: 'أطبخ الأرز على العشاء.' },
        { es: 'شوربة', rom: 'shurba', fr: 'la soupe', ex: 'هذه الشوربة ساخنة جدا.' },
        { es: 'تفاحة', rom: 'tuffaha', fr: 'la pomme', ex: 'آكل تفاحة كل صباح.' },
        { es: 'شاي', rom: 'shay', fr: 'le thé', ex: 'أشرب الشاي كل يوم.' }
      ],
      intermediaire: [
        { es: 'فراولة', rom: 'farawila', fr: 'la fraise', ex: 'الفراولة ناضجة وحلوة.' },
        { es: 'عصير برتقال', rom: 'asir burtuqal', fr: "le jus d'orange", ex: 'أشرب عصير البرتقال صباحا.' },
        { es: 'فطر', rom: 'futr', fr: 'les champignons', ex: 'أضيف الفطر إلى الصلصة.' },
        { es: 'زبدة', rom: 'zubda', fr: 'le beurre', ex: 'أضع الزبدة على الخبز.' },
        { es: 'سكر', rom: 'sukkar', fr: 'le sucre', ex: 'هل تأخذ سكرا في الشاي؟' },
        { es: 'فلفل', rom: 'fulful', fr: 'le poivre', ex: 'أضف قليلا من الفلفل.' },
        { es: 'حلوى', rom: 'halwa', fr: 'le dessert', ex: 'ماذا تريد للحلوى؟' },
        { es: 'وصفة', rom: 'wasfa', fr: 'la recette', ex: 'هذه وصفة جدتي.' }
      ],
      avance: [
        { es: 'مكونات', rom: 'mukawwinat', fr: 'les ingrédients', ex: 'المكونات كلها طازجة.' },
        { es: 'تتبيل', rom: 'tatbil', fr: "l'assaisonnement", ex: 'التتبيل مثالي.' },
        { es: 'مغذي', rom: 'mughdhhi', fr: 'nutritif', ex: 'هذه الوجبة مغذية جدا.' },
        { es: 'شهية', rom: 'shahiyya', fr: "l'appétit", ex: 'الرائحة تفتح الشهية.' },
        { es: 'مطبخ', rom: 'matbakh', fr: 'la cuisine', ex: 'أحب المطبخ الآسيوي.' },
        { es: 'نكهة', rom: 'nakha', fr: 'la saveur', ex: 'نكهة هذا الطبق فريدة.' },
        { es: 'حصة', rom: 'hissa', fr: 'la portion', ex: 'الحصة كبيرة جدا.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'مطار', rom: 'matar', fr: "l'aéroport", ex: 'نصل إلى المطار الساعة الثامنة.' },
        { es: 'فندق', rom: 'funduq', fr: "l'hôtel", ex: 'الفندق قريب من الشاطئ.' },
        { es: 'تذكرة', rom: 'tadhkira', fr: 'le billet', ex: 'اشتريت تذكرة طائرة.' },
        { es: 'جواز سفر', rom: 'jawaz safar', fr: 'le passeport', ex: 'لا تنس جواز سفرك.' },
        { es: 'خريطة', rom: 'kharita', fr: 'la carte', ex: 'أستخدم الخريطة للتنقل.' },
        { es: 'قطار', rom: 'qitar', fr: 'le train', ex: 'القطار يغادر الساعة التاسعة.' },
        { es: 'حافلة', rom: 'hafila', fr: 'le bus', ex: 'أركب الحافلة كل يوم.' },
        { es: 'محطة', rom: 'mahatta', fr: 'la gare', ex: 'المحطة في وسط المدينة.' },
        { es: 'أمتعة', rom: 'amtia', fr: 'les bagages', ex: 'أمتعتي ثقيلة جدا.' },
        { es: 'شاطئ', rom: 'shati', fr: 'la plage', ex: 'نستريح على الشاطئ.' }
      ],
      intermediaire: [
        { es: 'حجز', rom: 'hajz', fr: 'la réservation', ex: 'قمت بحجز عبر الإنترنت.' },
        { es: 'مغادرة', rom: 'mughadara', fr: 'le départ', ex: 'المغادرة عند الظهر.' },
        { es: 'وصول', rom: 'wusul', fr: "l'arrivée", ex: 'وصولنا متأخر.' },
        { es: 'جمارك', rom: 'jamarik', fr: 'la douane', ex: 'نمر عبر الجمارك.' },
        { es: 'عملة', rom: 'umla', fr: 'la devise', ex: 'أصرف العملة في البنك.' },
        { es: 'هدية تذكارية', rom: 'hadiyya tadhkariyya', fr: 'le souvenir', ex: 'أشتري هدية تذكارية للعائلة.' },
        { es: 'مرشد سياحي', rom: 'murshid siyahi', fr: 'le guide', ex: 'المرشد يريكنا المدينة.' },
        { es: 'مغامرة', rom: 'mughamara', fr: "l'aventure", ex: 'كل رحلة مغامرة جديدة.' }
      ],
      avance: [
        { es: 'خط سير', rom: 'khatt sayr', fr: "l'itinéraire", ex: 'خط سيرنا يشمل خمس مدن.' },
        { es: 'وجهة', rom: 'wijha', fr: 'la destination', ex: 'باريس هي وجهة أحلامي.' },
        { es: 'إقامة', rom: 'iqama', fr: "l'hébergement", ex: 'الإقامة ممتازة.' },
        { es: 'يستكشف', rom: 'yastatashif', fr: 'explorer', ex: 'أستكشف المدينة القديمة سيرا.' },
        { es: 'معلم', rom: 'maalim', fr: 'le monument', ex: 'الأهرامات معلم شهير.' },
        { es: 'ثقافة', rom: 'thaqafa', fr: 'la culture', ex: 'أنا مفتون بالثقافة المحلية.' },
        { es: 'منظر', rom: 'manzar', fr: 'le paysage', ex: 'المنظر رائع.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'أم', rom: 'umm', fr: 'la mère', ex: 'أمي تطبخ جيدا جدا.' },
        { es: 'أب', rom: 'ab', fr: 'le père', ex: 'أبي يعمل في الرياض.' },
        { es: 'أخت', rom: 'ukht', fr: 'la sœur', ex: 'أختي مضحكة جدا.' },
        { es: 'أخ', rom: 'akh', fr: 'le frère', ex: 'أخي يلعب كرة القدم.' },
        { es: 'جدة', rom: 'jadda', fr: 'la grand-mère', ex: 'جدتي تحكي قصصا رائعة.' },
        { es: 'جد', rom: 'jadd', fr: 'le grand-père', ex: 'جدي حكيم جدا.' },
        { es: 'طفل', rom: 'tifl', fr: "l'enfant", ex: 'الطفل يلعب في الحديقة.' },
        { es: 'عائلة', rom: 'aila', fr: 'la famille', ex: 'عائلتي متقاربة جدا.' },
        { es: 'منزل', rom: 'manzil', fr: 'le foyer', ex: 'لا مكان مثل المنزل.' },
        { es: 'رضيع', rom: 'radi', fr: 'le bébé', ex: 'الرضيع ينام بهدوء.' }
      ],
      intermediaire: [
        { es: 'ابن عم', rom: 'ibn amm', fr: 'le cousin', ex: 'ابن عمي يسكن في القاهرة.' },
        { es: 'عمة', rom: 'amma', fr: 'la tante', ex: 'عمتي تصنع حلويات لذيذة.' },
        { es: 'عم', rom: 'amm', fr: "l'oncle", ex: 'عمي طبيب.' },
        { es: 'ابن أخ', rom: 'ibn akh', fr: 'le neveu', ex: 'ابن أخي عمره سنتان.' },
        { es: 'زوج', rom: 'zawj', fr: 'le mari', ex: 'زوجها عطوف جدا.' },
        { es: 'زوجة', rom: 'zawja', fr: 'la femme', ex: 'زوجته معلمة.' },
        { es: 'زفاف', rom: 'zifaf', fr: 'le mariage', ex: 'كان حفل الزفاف جميلا.' },
        { es: 'والدان', rom: 'walidaan', fr: 'les parents', ex: 'والداي في إجازة.' }
      ],
      avance: [
        { es: 'علاقة', rom: 'alaqa', fr: 'la relation', ex: 'العلاقة الجيدة تحتاج جهدا.' },
        { es: 'إرث ثقافي', rom: 'irth thaqafi', fr: "l'héritage", ex: 'نتشارك إرثا ثقافيا غنيا.' },
        { es: 'جيل', rom: 'jil', fr: 'la génération', ex: 'كل جيل يتعلم من السابق.' },
        { es: 'تربية', rom: 'tarbiyya', fr: "l'éducation", ex: 'التربية الجيدة تشكل الشخصية.' },
        { es: 'تقاليد', rom: 'taqalid', fr: 'la tradition', ex: 'نحافظ على تقاليد العائلة.' },
        { es: 'رابطة', rom: 'rabita', fr: 'le lien', ex: 'الرابطة بين الأخوة قوية.' },
        { es: 'لمّ الشمل', rom: 'lamm al-shaml', fr: 'les retrouvailles', ex: 'كان لمّ شمل العائلة رائعا.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'أحمر', rom: 'ahmar', fr: 'rouge', ex: 'التفاحة حمراء ساطعة.' },
        { es: 'أزرق', rom: 'azraq', fr: 'bleu', ex: 'السماء صافية وزرقاء.' },
        { es: 'أخضر', rom: 'akhdar', fr: 'vert', ex: 'العشب أخضر بعد المطر.' },
        { es: 'أصفر', rom: 'asfar', fr: 'jaune', ex: 'الشمس صفراء ودافئة.' },
        { es: 'أسود', rom: 'aswad', fr: 'noir', ex: 'أرتدي اليوم جاكيتا أسود.' },
        { es: 'أبيض', rom: 'abyad', fr: 'blanc', ex: 'الثلج أبيض تماما.' },
        { es: 'برتقالي', rom: 'burtuqali', fr: 'orange', ex: 'فستانها برتقالي ساطع.' },
        { es: 'وردي', rom: 'wardi', fr: 'rose', ex: 'الورود وردية شاحبة.' },
        { es: 'بنفسجي', rom: 'banafsaji', fr: 'violet', ex: 'السماء تتحول إلى بنفسجي عند الغروب.' },
        { es: 'بني', rom: 'bunni', fr: 'marron', ex: 'جذع الشجرة بني.' }
      ],
      intermediaire: [
        { es: 'رمادي', rom: 'ramadi', fr: 'gris', ex: 'الغيوم رمادية داكنة.' },
        { es: 'داكن', rom: 'dakin', fr: 'foncé', ex: 'أفضل الألوان الداكنة في الشتاء.' },
        { es: 'فاتح', rom: 'fatih', fr: 'clair', ex: 'ترتدي الأزرق الفاتح في الصيف.' },
        { es: 'زاهي', rom: 'zahi', fr: 'vif', ex: 'اللوحة تستخدم ألوانا زاهية.' },
        { es: 'شاحب', rom: 'shahib', fr: 'pâle', ex: 'يبدو شاحبا اليوم.' },
        { es: 'ملون', rom: 'mulawwan', fr: 'coloré', ex: 'السوق ملون جدا.' },
        { es: 'درجة لونية', rom: 'daraja lawniyya', fr: 'la teinte', ex: 'أحب هذه الدرجة من الأزرق.' },
        { es: 'شفاف', rom: 'shaffaf', fr: 'transparent', ex: 'الزجاج شفاف.' }
      ],
      avance: [
        { es: 'تباين', rom: 'tabayun', fr: 'le contraste', ex: 'التباين بين الألوان لافت.' },
        { es: 'زاهي جدا', rom: 'zahi jiddan', fr: 'éclatant', ex: 'الألوان الزاهية جذبت انتباهي.' },
        { es: 'فارق دقيق', rom: 'fariq daqiq', fr: 'la nuance', ex: 'الفارق الدقيق يتغير مع الضوء.' },
        { es: 'أحادي اللون', rom: 'uhadi al-lawn', fr: 'monochrome', ex: 'الصورة أحادية اللون.' },
        { es: 'صبغة', rom: 'sabgha', fr: 'le pigment', ex: 'تُستخدم صبغات طبيعية في هذا الطلاء.' },
        { es: 'طيف', rom: 'tayf', fr: 'le spectre', ex: 'قوس قزح يعرض الطيف كاملا.' },
        { es: 'مسحة', rom: 'massha', fr: 'la teinte', ex: 'أضف مسحة من الأصفر إلى المزيج.' }
      ]
    }
  },
  'pl': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'cześć', fr: 'bonjour / salut', ex: 'Cześć, jak się masz?' },
        { es: 'do widzenia', fr: 'au revoir', ex: 'Do widzenia, do zobaczenia!' },
        { es: 'proszę', fr: "s'il vous plaît", ex: 'Proszę, pomoż mi.' },
        { es: 'dziękuję', fr: 'merci', ex: 'Dziękuję bardzo!' },
        { es: 'tak', fr: 'oui', ex: 'Tak, rozumiem.' },
        { es: 'nie', fr: 'non', ex: 'Nie, dziękuję.' },
        { es: 'przepraszam', fr: 'excusez-moi', ex: 'Przepraszam, gdzie jest stacja?' },
        { es: 'przykro mi', fr: 'je suis désolé', ex: 'Przykro mi za spóźnienie.' },
        { es: 'pomoc', fr: "l'aide", ex: 'Potrzebuję pomocy, proszę.' },
        { es: 'przyjaciel', fr: "l'ami", ex: 'Ona jest moją najlepszą przyjaciółką.' }
      ],
      intermediaire: [
        { es: 'rozumieć', fr: 'comprendre', ex: 'Czy mnie rozumiesz?' },
        { es: 'mówić', fr: 'parler', ex: 'Mówię trochę po polsku.' },
        { es: 'uczyć się', fr: 'apprendre', ex: 'Chcę się uczyć polskiego.' },
        { es: 'powtórzyć', fr: 'répéter', ex: 'Czy możesz powtórzyć, proszę?' },
        { es: 'wolno', fr: 'lentement', ex: 'Proszę mówić wolniej.' },
        { es: 'wiedzieć', fr: 'savoir', ex: 'Nie wiem odpowiedzi.' },
        { es: 'potrzebować', fr: 'avoir besoin de', ex: 'Potrzebuję chwili.' },
        { es: 'chcieć', fr: 'vouloir', ex: 'Chcę spróbować.' }
      ],
      avance: [
        { es: 'okazja', fr: "l'opportunité", ex: 'To jest świetna okazja.' },
        { es: 'wyzwanie', fr: 'le défi', ex: 'Każde wyzwanie czyni nas silniejszymi.' },
        { es: 'osiągnąć', fr: 'atteindre', ex: 'Osiągnę swoje cele.' },
        { es: 'odpowiedzialność', fr: 'la responsabilité', ex: 'Dzielimy odpowiedzialność.' },
        { es: 'ciekawy', fr: 'curieux', ex: 'Ona jest bardzo ciekawa nauki.' },
        { es: 'zdeterminowany', fr: 'déterminé', ex: 'On jest zdeterminowany, by odnieść sukces.' },
        { es: 'poprawiać', fr: 'améliorer', ex: 'Poprawiam swoje umiejętności każdego dnia.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'chleb', fr: 'le pain', ex: 'Chleb jest jeszcze ciepły.' },
        { es: 'woda', fr: "l'eau", ex: 'Piję wodę przez cały dzień.' },
        { es: 'mleko', fr: 'le lait', ex: 'Dodaję mleko do kawy.' },
        { es: 'jajko', fr: "l'œuf", ex: 'Jem jajko na śniadanie.' },
        { es: 'kurczak', fr: 'le poulet', ex: 'Kurczak jest pyszny.' },
        { es: 'ryba', fr: 'le poisson', ex: 'Lubię jeść rybę.' },
        { es: 'zupa', fr: 'la soupe', ex: 'Ta zupa jest bardzo gorąca.' },
        { es: 'jabłko', fr: 'la pomme', ex: 'Jem jabłko każdego ranka.' },
        { es: 'ser', fr: 'le fromage', ex: 'Polska ma wiele rodzajów serów.' },
        { es: 'herbata', fr: 'le thé', ex: 'Piję herbatę każdego dnia.' }
      ],
      intermediaire: [
        { es: 'truskawka', fr: 'la fraise', ex: 'Truskawki są dojrzałe i słodkie.' },
        { es: 'sok pomarańczowy', fr: "le jus d'orange", ex: 'Piję sok pomarańczowy rano.' },
        { es: 'grzyby', fr: 'les champignons', ex: 'Dodaję grzyby do sosu.' },
        { es: 'masło', fr: 'le beurre', ex: 'Smaruję masłem chleb.' },
        { es: 'cukier', fr: 'le sucre', ex: 'Czy bierzesz cukier do herbaty?' },
        { es: 'pieprz', fr: 'le poivre', ex: 'Dodaj trochę pieprzu.' },
        { es: 'deser', fr: 'le dessert', ex: 'Co chcesz na deser?' },
        { es: 'przepis', fr: 'la recette', ex: 'To przepis mojej babci.' }
      ],
      avance: [
        { es: 'składniki', fr: 'les ingrédients', ex: 'Składniki są wszystkie świeże.' },
        { es: 'przyprawy', fr: "l'assaisonnement", ex: 'Przyprawy są idealne.' },
        { es: 'pożywny', fr: 'nutritif', ex: 'Ten posiłek jest bardzo pożywny.' },
        { es: 'apetyt', fr: "l'appétit", ex: 'Zapach pobudza apetyt.' },
        { es: 'kuchnia', fr: 'la cuisine', ex: 'Uwielbiam kuchnię azjatycką.' },
        { es: 'smak', fr: 'la saveur', ex: 'Smak tej potrawy jest wyjątkowy.' },
        { es: 'porcja', fr: 'la portion', ex: 'Porcja jest bardzo duża.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'lotnisko', fr: "l'aéroport", ex: 'Przylatujemy na lotnisko o ósmej.' },
        { es: 'hotel', fr: "l'hôtel", ex: 'Hotel jest blisko plaży.' },
        { es: 'bilet', fr: 'le billet', ex: 'Kupiłem bilet lotniczy.' },
        { es: 'paszport', fr: 'le passeport', ex: 'Nie zapomnij paszportu.' },
        { es: 'mapa', fr: 'la carte', ex: 'Używam mapy, żeby znaleźć drogę.' },
        { es: 'pociąg', fr: 'le train', ex: 'Pociąg odjeżdża o dziewiątej.' },
        { es: 'autobus', fr: 'le bus', ex: 'Jeżdżę autobusem każdego dnia.' },
        { es: 'dworzec', fr: 'la gare', ex: 'Dworzec jest w centrum miasta.' },
        { es: 'bagaż', fr: 'les bagages', ex: 'Mój bagaż jest bardzo ciężki.' },
        { es: 'plaża', fr: 'la plage', ex: 'Odpoczywamy na plaży.' }
      ],
      intermediaire: [
        { es: 'rezerwacja', fr: 'la réservation', ex: 'Zrobiłem rezerwację online.' },
        { es: 'odjazd', fr: 'le départ', ex: 'Odjazd jest w południe.' },
        { es: 'przyjazd', fr: "l'arrivée", ex: 'Nasz przyjazd się opóźnia.' },
        { es: 'odprawa celna', fr: 'la douane', ex: 'Przechodzimy odprawę celną.' },
        { es: 'waluta', fr: 'la devise', ex: 'Wymieniam walutę w banku.' },
        { es: 'pamiątka', fr: 'le souvenir', ex: 'Kupuję pamiątkę dla rodziny.' },
        { es: 'przewodnik', fr: 'le guide', ex: 'Przewodnik oprowadza nas po mieście.' },
        { es: 'przygoda', fr: "l'aventure", ex: 'Każda podróż to nowa przygoda.' }
      ],
      avance: [
        { es: 'plan podróży', fr: "l'itinéraire", ex: 'Nasz plan podróży obejmuje pięć miast.' },
        { es: 'cel podróży', fr: 'la destination', ex: 'Paryż to moje wymarzone miejsce.' },
        { es: 'zakwaterowanie', fr: "l'hébergement", ex: 'Zakwaterowanie jest doskonałe.' },
        { es: 'zwiedzać', fr: 'explorer', ex: 'Zwiedzam stare miasto pieszo.' },
        { es: 'zabytek', fr: 'le monument', ex: 'Zamek Królewski to sławny zabytek.' },
        { es: 'kultura', fr: 'la culture', ex: 'Jestem zafascynowany lokalną kulturą.' },
        { es: 'krajobraz', fr: 'le paysage', ex: 'Krajobraz zapiera dech w piersiach.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'mama', fr: 'la mère', ex: 'Moja mama bardzo dobrze gotuje.' },
        { es: 'tata', fr: 'le père', ex: 'Mój tata pracuje w Warszawie.' },
        { es: 'siostra', fr: 'la sœur', ex: 'Moja siostra jest bardzo zabawna.' },
        { es: 'brat', fr: 'le frère', ex: 'Mój brat gra w piłkę nożną.' },
        { es: 'babcia', fr: 'la grand-mère', ex: 'Babcia opowiada wspaniałe historie.' },
        { es: 'dziadek', fr: 'le grand-père', ex: 'Dziadek jest bardzo mądry.' },
        { es: 'niemowlę', fr: 'le bébé', ex: 'Niemowlę śpi spokojnie.' },
        { es: 'dziecko', fr: "l'enfant", ex: 'Dziecko bawi się w ogrodzie.' },
        { es: 'rodzina', fr: 'la famille', ex: 'Moja rodzina jest bardzo bliska.' },
        { es: 'dom', fr: 'le foyer', ex: 'W domu jest najlepiej.' }
      ],
      intermediaire: [
        { es: 'kuzyn', fr: 'le cousin', ex: 'Mój kuzyn mieszka w Krakowie.' },
        { es: 'ciotka', fr: 'la tante', ex: 'Ciotka piecze pyszne ciasta.' },
        { es: 'wujek', fr: "l'oncle", ex: 'Wujek jest lekarzem.' },
        { es: 'siostrzeniec', fr: 'le neveu', ex: 'Siostrzeniec ma dwa lata.' },
        { es: 'mąż', fr: 'le mari', ex: 'Jej mąż jest bardzo troskliwy.' },
        { es: 'żona', fr: 'la femme', ex: 'Jego żona jest nauczycielką.' },
        { es: 'ślub', fr: 'le mariage', ex: 'Ślub był piękny.' },
        { es: 'rodzice', fr: 'les parents', ex: 'Moi rodzice są na wakacjach.' }
      ],
      avance: [
        { es: 'relacja', fr: 'la relation', ex: 'Dobra relacja wymaga wysiłku.' },
        { es: 'dziedzictwo', fr: "l'héritage", ex: 'Dzielimy bogate dziedzictwo kulturowe.' },
        { es: 'pokolenie', fr: 'la génération', ex: 'Każde pokolenie uczy się od poprzedniego.' },
        { es: 'wychowanie', fr: "l'éducation", ex: 'Dobre wychowanie kształtuje charakter.' },
        { es: 'tradycja', fr: 'la tradition', ex: 'Pielęgnujemy tradycje rodzinne.' },
        { es: 'więź', fr: 'le lien', ex: 'Więź między rodzeństwem jest silna.' },
        { es: 'zjazd rodzinny', fr: 'les retrouvailles', ex: 'Zjazd rodzinny był wspaniały.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'czerwony', fr: 'rouge', ex: 'Jabłko jest jaskrawoczerwone.' },
        { es: 'niebieski', fr: 'bleu', ex: 'Niebo jest czyste i niebieskie.' },
        { es: 'zielony', fr: 'vert', ex: 'Trawa jest zielona po deszczu.' },
        { es: 'żółty', fr: 'jaune', ex: 'Słońce jest żółte i ciepłe.' },
        { es: 'czarny', fr: 'noir', ex: 'Dziś noszę czarną kurtkę.' },
        { es: 'biały', fr: 'blanc', ex: 'Śnieg jest całkowicie biały.' },
        { es: 'pomarańczowy', fr: 'orange', ex: 'Jej sukienka jest jaskrawopomarańczowa.' },
        { es: 'różowy', fr: 'rose', ex: 'Róże są bladoróżowe.' },
        { es: 'fioletowy', fr: 'violet', ex: 'Niebo staje się fioletowe o zmierzchu.' },
        { es: 'brązowy', fr: 'marron', ex: 'Pień drzewa jest brązowy.' }
      ],
      intermediaire: [
        { es: 'szary', fr: 'gris', ex: 'Chmury są ciemnoszare.' },
        { es: 'ciemny', fr: 'foncé', ex: 'Zimą preferuję ciemne kolory.' },
        { es: 'jasny', fr: 'clair', ex: 'Latem nosi jasnoniebieski.' },
        { es: 'jaskrawy', fr: 'vif', ex: 'Obraz używa jaskrawych kolorów.' },
        { es: 'blady', fr: 'pâle', ex: 'Wygląda dziś blado.' },
        { es: 'kolorowy', fr: 'coloré', ex: 'Rynek jest bardzo kolorowy.' },
        { es: 'odcień', fr: 'la teinte', ex: 'Lubię ten odcień niebieskiego.' },
        { es: 'przezroczysty', fr: 'transparent', ex: 'Szkło jest przezroczyste.' }
      ],
      avance: [
        { es: 'kontrast', fr: 'le contraste', ex: 'Kontrast między kolorami jest uderzający.' },
        { es: 'intensywny', fr: 'éclatant', ex: 'Intensywne kolory przyciągnęły moją uwagę.' },
        { es: 'niuans', fr: 'la nuance', ex: 'Niuans zmienia się w różnym świetle.' },
        { es: 'monochromatyczny', fr: 'monochrome', ex: 'Zdjęcie jest monochromatyczne.' },
        { es: 'pigment', fr: 'le pigment', ex: 'Ta farba używa naturalnych pigmentów.' },
        { es: 'widmo', fr: 'le spectre', ex: 'Tęcza pokazuje pełne widmo.' },
        { es: 'odcień koloru', fr: 'la teinte', ex: 'Dodaj odcień żółtego do mieszanki.' }
      ]
    }
  },
  'tr': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'merhaba', fr: 'bonjour', ex: 'Merhaba, nasılsın?' },
        { es: 'güle güle', fr: 'au revoir', ex: 'Güle güle, yakında görüşürüz!' },
        { es: 'lütfen', fr: "s'il vous plaît", ex: 'Lütfen bana yardım eder misin?' },
        { es: 'teşekkür ederim', fr: 'merci', ex: 'Çok teşekkür ederim!' },
        { es: 'evet', fr: 'oui', ex: 'Evet, anlıyorum.' },
        { es: 'hayır', fr: 'non', ex: 'Hayır, teşekkürler.' },
        { es: 'özür dilerim', fr: 'excusez-moi', ex: 'Özür dilerim, istasyon nerede?' },
        { es: 'üzgünüm', fr: 'je suis désolé', ex: 'Geç kaldığım için üzgünüm.' },
        { es: 'yardım', fr: "l'aide", ex: 'Lütfen yardıma ihtiyacım var.' },
        { es: 'arkadaş', fr: "l'ami", ex: 'O benim en iyi arkadaşım.' }
      ],
      intermediaire: [
        { es: 'anlamak', fr: 'comprendre', ex: 'Beni anlıyor musun?' },
        { es: 'konuşmak', fr: 'parler', ex: 'Biraz Türkçe konuşuyorum.' },
        { es: 'öğrenmek', fr: 'apprendre', ex: 'Türkçe öğrenmek istiyorum.' },
        { es: 'tekrarlamak', fr: 'répéter', ex: 'Lütfen tekrar eder misin?' },
        { es: 'yavaş', fr: 'lentement', ex: 'Lütfen daha yavaş konuş.' },
        { es: 'bilmek', fr: 'savoir', ex: 'Cevabı bilmiyorum.' },
        { es: 'ihtiyaç duymak', fr: 'avoir besoin de', ex: 'Bir dakikaya ihtiyacım var.' },
        { es: 'istemek', fr: 'vouloir', ex: 'Denemek istiyorum.' }
      ],
      avance: [
        { es: 'fırsat', fr: "l'opportunité", ex: 'Bu harika bir fırsat.' },
        { es: 'meydan okuma', fr: 'le défi', ex: 'Her meydan okuma bizi güçlendirir.' },
        { es: 'başarmak', fr: 'atteindre', ex: 'Hedeflerimi başaracağım.' },
        { es: 'sorumluluk', fr: 'la responsabilité', ex: 'Sorumluluğu paylaşıyoruz.' },
        { es: 'meraklı', fr: 'curieux', ex: 'O bilim konusunda çok meraklı.' },
        { es: 'kararlı', fr: 'déterminé', ex: 'O başarmaya kararlı.' },
        { es: 'geliştirmek', fr: 'améliorer', ex: 'Her gün becerilerimi geliştiriyorum.' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'ekmek', fr: 'le pain', ex: 'Ekmek hâlâ sıcak.' },
        { es: 'su', fr: "l'eau", ex: 'Bütün gün su içiyorum.' },
        { es: 'süt', fr: 'le lait', ex: 'Kahveye süt ekliyorum.' },
        { es: 'yumurta', fr: "l'œuf", ex: 'Kahvaltıda yumurta yiyorum.' },
        { es: 'tavuk', fr: 'le poulet', ex: 'Tavuk çok lezzetli.' },
        { es: 'balık', fr: 'le poisson', ex: 'Balık yemeyi seviyorum.' },
        { es: 'çorba', fr: 'la soupe', ex: 'Bu çorba çok sıcak.' },
        { es: 'elma', fr: 'la pomme', ex: 'Her sabah elma yerim.' },
        { es: 'peynir', fr: 'le fromage', ex: "Türkiye'nin pek çok peynir çeşidi var." },
        { es: 'çay', fr: 'le thé', ex: 'Her gün çay içerim.' }
      ],
      intermediaire: [
        { es: 'çilek', fr: 'la fraise', ex: 'Çilekler olgun ve tatlı.' },
        { es: 'portakal suyu', fr: "le jus d'orange", ex: 'Sabahları portakal suyu içiyorum.' },
        { es: 'mantar', fr: 'les champignons', ex: 'Sosuna mantar ekliyorum.' },
        { es: 'tereyağı', fr: 'le beurre', ex: 'Ekmeğe tereyağı sürüyorum.' },
        { es: 'şeker', fr: 'le sucre', ex: 'Çayına şeker alıyor musun?' },
        { es: 'karabiber', fr: 'le poivre', ex: 'Biraz karabiber ekle.' },
        { es: 'tatlı', fr: 'le dessert', ex: 'Tatlı olarak ne istersin?' },
        { es: 'tarif', fr: 'la recette', ex: 'Bu büyükannemin tarifi.' }
      ],
      avance: [
        { es: 'malzemeler', fr: 'les ingrédients', ex: 'Malzemelerin hepsi taze.' },
        { es: 'baharat', fr: "l'assaisonnement", ex: 'Baharat mükemmel.' },
        { es: 'besleyici', fr: 'nutritif', ex: 'Bu yemek çok besleyici.' },
        { es: 'iştah', fr: "l'appétit", ex: 'Koku iştahımı açıyor.' },
        { es: 'mutfak', fr: 'la cuisine', ex: 'Asya mutfağını seviyorum.' },
        { es: 'lezzet', fr: 'la saveur', ex: 'Bu yemeğin lezzeti eşsiz.' },
        { es: 'porsiyon', fr: 'la portion', ex: 'Porsiyon çok cömert.' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'havalimanı', fr: "l'aéroport", ex: 'Saat sekizde havalimanına varıyoruz.' },
        { es: 'otel', fr: "l'hôtel", ex: 'Otel sahile yakın.' },
        { es: 'bilet', fr: 'le billet', ex: 'Bir uçak bileti aldım.' },
        { es: 'pasaport', fr: 'le passeport', ex: 'Pasaportunu unutma.' },
        { es: 'harita', fr: 'la carte', ex: 'Yol bulmak için harita kullanıyorum.' },
        { es: 'tren', fr: 'le train', ex: 'Tren saat dokuzda kalkıyor.' },
        { es: 'otobüs', fr: 'le bus', ex: 'Her gün otobüse biniyorum.' },
        { es: 'istasyon', fr: 'la gare', ex: 'İstasyon şehir merkezinde.' },
        { es: 'bagaj', fr: 'les bagages', ex: 'Bagajım çok ağır.' },
        { es: 'plaj', fr: 'la plage', ex: 'Plajda dinleniyoruz.' }
      ],
      intermediaire: [
        { es: 'rezervasyon', fr: 'la réservation', ex: 'Online rezervasyon yaptım.' },
        { es: 'kalkış', fr: 'le départ', ex: 'Kalkış öğlen.' },
        { es: 'varış', fr: "l'arrivée", ex: 'Varışımız gecikiyor.' },
        { es: 'gümrük', fr: 'la douane', ex: 'Gümrükten geçiyoruz.' },
        { es: 'döviz', fr: 'la devise', ex: 'Bankada döviz bozuyorum.' },
        { es: 'hediyelik eşya', fr: 'le souvenir', ex: 'Aile için hediyelik eşya alıyorum.' },
        { es: 'rehber', fr: 'le guide', ex: 'Rehber bize şehri gösteriyor.' },
        { es: 'macera', fr: "l'aventure", ex: 'Her yolculuk yeni bir macera.' }
      ],
      avance: [
        { es: 'güzergah', fr: "l'itinéraire", ex: 'Güzergahımız beş şehir içeriyor.' },
        { es: 'destinasyon', fr: 'la destination', ex: "Paris hayalimdeki destinasyon." },
        { es: 'konaklama', fr: "l'hébergement", ex: 'Konaklama mükemmel.' },
        { es: 'keşfetmek', fr: 'explorer', ex: 'Eski şehri yürüyerek keşfediyorum.' },
        { es: 'anıt', fr: 'le monument', ex: 'Ayasofya ünlü bir anıt.' },
        { es: 'kültür', fr: 'la culture', ex: 'Yerel kültüre büyüleniyorum.' },
        { es: 'manzara', fr: 'le paysage', ex: 'Manzara nefes kesici.' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'anne', fr: 'la mère', ex: 'Annem çok iyi yemek pişirir.' },
        { es: 'baba', fr: 'le père', ex: "Babam İstanbul'da çalışıyor." },
        { es: 'kız kardeş', fr: 'la sœur', ex: 'Kız kardeşim çok komik.' },
        { es: 'erkek kardeş', fr: 'le frère', ex: 'Erkek kardeşim futbol oynuyor.' },
        { es: 'büyükanne', fr: 'la grand-mère', ex: 'Büyükannem harika hikayeler anlatır.' },
        { es: 'büyükbaba', fr: 'le grand-père', ex: 'Büyükbabam çok bilgeli.' },
        { es: 'bebek', fr: 'le bébé', ex: 'Bebek huzurla uyuyor.' },
        { es: 'çocuk', fr: "l'enfant", ex: 'Çocuk bahçede oynuyor.' },
        { es: 'aile', fr: 'la famille', ex: 'Ailem çok yakın.' },
        { es: 'ev', fr: 'le foyer', ex: 'Ev en güzel yerdir.' }
      ],
      intermediaire: [
        { es: 'kuzen', fr: 'le cousin', ex: 'Kuzenim Ankara da yaşıyor.' },
        { es: 'hala', fr: 'la tante', ex: 'Halam lezzetli kekler yapar.' },
        { es: 'amca', fr: "l'oncle", ex: 'Amcam doktor.' },
        { es: 'yeğen', fr: 'le neveu / la nièce', ex: 'Yeğenim iki yaşında.' },
        { es: 'koca', fr: 'le mari', ex: 'Kocası çok şefkatli.' },
        { es: 'eş', fr: 'la femme', ex: 'Eşi öğretmen.' },
        { es: 'düğün', fr: 'le mariage', ex: 'Düğün çok güzeldi.' },
        { es: 'ebeveynler', fr: 'les parents', ex: 'Ebeveynlerim tatilde.' }
      ],
      avance: [
        { es: 'ilişki', fr: 'la relation', ex: 'İyi bir ilişki çaba gerektirir.' },
        { es: 'kültürel miras', fr: "l'héritage", ex: 'Zengin bir kültürel mirası paylaşıyoruz.' },
        { es: 'nesil', fr: 'la génération', ex: 'Her nesil bir öncekinden öğrenir.' },
        { es: 'eğitim', fr: "l'éducation", ex: 'İyi bir eğitim karakter oluşturur.' },
        { es: 'gelenek', fr: 'la tradition', ex: 'Aile geleneklerimizi yaşatıyoruz.' },
        { es: 'bağ', fr: 'le lien', ex: 'Kardeşler arasındaki bağ güçlüdür.' },
        { es: 'yeniden birleşme', fr: 'les retrouvailles', ex: 'Aile buluşması harikaydı.' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'kırmızı', fr: 'rouge', ex: 'Elma parlak kırmızı.' },
        { es: 'mavi', fr: 'bleu', ex: 'Gökyüzü açık ve mavi.' },
        { es: 'yeşil', fr: 'vert', ex: 'Çimen yağmurdan sonra yeşil.' },
        { es: 'sarı', fr: 'jaune', ex: 'Güneş sarı ve sıcak.' },
        { es: 'siyah', fr: 'noir', ex: 'Bugün siyah ceket giyiyorum.' },
        { es: 'beyaz', fr: 'blanc', ex: 'Kar tamamen beyaz.' },
        { es: 'turuncu', fr: 'orange', ex: 'Elbisesi parlak turuncu.' },
        { es: 'pembe', fr: 'rose', ex: 'Güller soluk pembe.' },
        { es: 'mor', fr: 'violet', ex: 'Alacakaranlıkta gökyüzü mora döner.' },
        { es: 'kahverengi', fr: 'marron', ex: 'Ağaç gövdesi kahverengi.' }
      ],
      intermediaire: [
        { es: 'gri', fr: 'gris', ex: 'Bulutlar koyu gri.' },
        { es: 'koyu', fr: 'foncé', ex: 'Kışın koyu renkleri tercih ederim.' },
        { es: 'açık', fr: 'clair', ex: 'Yazın açık mavi giyer.' },
        { es: 'canlı', fr: 'vif', ex: 'Resim canlı renkler kullanıyor.' },
        { es: 'solgun', fr: 'pâle', ex: 'Bugün solgun görünüyor.' },
        { es: 'renkli', fr: 'coloré', ex: 'Pazar yeri çok renkli.' },
        { es: 'ton', fr: 'la teinte', ex: 'Bu mavi tonu seviyorum.' },
        { es: 'şeffaf', fr: 'transparent', ex: 'Cam şeffaf.' }
      ],
      avance: [
        { es: 'kontrast', fr: 'le contraste', ex: 'Renkler arasındaki kontrast çarpıcı.' },
        { es: 'canlı renk', fr: 'éclatant', ex: 'Canlı renkler dikkatimi çekti.' },
        { es: 'nüans', fr: 'la nuance', ex: 'Nüans farklı ışıklarda değişiyor.' },
        { es: 'tek renkli', fr: 'monochrome', ex: 'Fotoğraf tek renkli.' },
        { es: 'pigment', fr: 'le pigment', ex: 'Bu boyada doğal pigmentler kullanılıyor.' },
        { es: 'spektrum', fr: 'le spectre', ex: 'Gökkuşağı tam spektrumu gösterir.' },
        { es: 'renk tonu', fr: 'la teinte', ex: 'Karışıma sarı renk tonu ekle.' }
      ]
    }
  },
  'hi': {
    essentiel: { nom: 'Essentiel', icone: '🌟',
      debutant: [
        { es: 'नमस्ते', rom: 'namaste', fr: 'bonjour', ex: 'नमस्ते, आप कैसे हैं?' },
        { es: 'अलविदा', rom: 'alvida', fr: 'au revoir', ex: 'अलविदा, जल्दी मिलते हैं!' },
        { es: 'कृपया', rom: 'kripaya', fr: "s'il vous plaît", ex: 'कृपया मेरी मदद करें।' },
        { es: 'धन्यवाद', rom: 'dhanyavad', fr: 'merci', ex: 'बहुत धन्यवाद!' },
        { es: 'हाँ', rom: 'haan', fr: 'oui', ex: 'हाँ, मैं समझता हूँ।' },
        { es: 'नहीं', rom: 'nahin', fr: 'non', ex: 'नहीं, धन्यवाद।' },
        { es: 'माफ़ कीजिए', rom: 'maaf kijiye', fr: 'excusez-moi', ex: 'माफ़ कीजिए, स्टेशन कहाँ है?' },
        { es: 'मुझे खेद है', rom: 'mujhe khed hai', fr: 'je suis désolé', ex: 'देर के लिए मुझे खेद है।' },
        { es: 'मदद', rom: 'madad', fr: "l'aide", ex: 'मुझे मदद चाहिए, कृपया।' },
        { es: 'दोस्त', rom: 'dost', fr: "l'ami", ex: 'वह मेरी सबसे अच्छी दोस्त है।' }
      ],
      intermediaire: [
        { es: 'समझना', rom: 'samajhna', fr: 'comprendre', ex: 'क्या आप मुझे समझते हैं?' },
        { es: 'बोलना', rom: 'bolna', fr: 'parler', ex: 'मैं थोड़ी हिंदी बोलता हूँ।' },
        { es: 'सीखना', rom: 'sikhna', fr: 'apprendre', ex: 'मैं हिंदी सीखना चाहता हूँ।' },
        { es: 'दोहराना', rom: 'dohrana', fr: 'répéter', ex: 'क्या आप कृपया दोहरा सकते हैं?' },
        { es: 'धीरे', rom: 'dhire', fr: 'lentement', ex: 'कृपया धीरे बोलें।' },
        { es: 'जानना', rom: 'janna', fr: 'savoir', ex: 'मुझे जवाब नहीं पता।' },
        { es: 'ज़रूरत होना', rom: 'zarurat hona', fr: 'avoir besoin de', ex: 'मुझे एक पल चाहिए।' },
        { es: 'चाहना', rom: 'chahna', fr: 'vouloir', ex: 'मैं कोशिश करना चाहता हूँ।' }
      ],
      avance: [
        { es: 'अवसर', rom: 'avsar', fr: "l'opportunité", ex: 'यह एक बेहतरीन अवसर है।' },
        { es: 'चुनौती', rom: 'chunauti', fr: 'le défi', ex: 'हर चुनौती हमें मज़बूत बनाती है।' },
        { es: 'हासिल करना', rom: 'hasil karna', fr: 'atteindre', ex: 'मैं अपने लक्ष्य हासिल करूँगा।' },
        { es: 'ज़िम्मेदारी', rom: 'zimmedari', fr: 'la responsabilité', ex: 'हम ज़िम्मेदारी साझा करते हैं।' },
        { es: 'जिज्ञासु', rom: 'jigyasu', fr: 'curieux', ex: 'वह विज्ञान के बारे में बहुत जिज्ञासु है।' },
        { es: 'दृढ़निश्चयी', rom: 'dridhnishchayi', fr: 'déterminé', ex: 'वह सफल होने के लिए दृढ़निश्चयी है।' },
        { es: 'सुधारना', rom: 'sudharna', fr: 'améliorer', ex: 'मैं हर दिन अपने कौशल सुधारता हूँ।' }
      ]
    },
    nourriture: { nom: 'Nourriture', icone: '🍕',
      debutant: [
        { es: 'रोटी', rom: 'roti', fr: 'le pain', ex: 'रोटी अभी भी गरम है।' },
        { es: 'पानी', rom: 'pani', fr: "l'eau", ex: 'मैं पूरे दिन पानी पीता हूँ।' },
        { es: 'दूध', rom: 'dudh', fr: 'le lait', ex: 'मैं चाय में दूध डालता हूँ।' },
        { es: 'अंडा', rom: 'anda', fr: "l'œuf", ex: 'मैं नाश्ते में अंडा खाता हूँ।' },
        { es: 'चिकन', rom: 'chikan', fr: 'le poulet', ex: 'चिकन बहुत स्वादिष्ट है।' },
        { es: 'मछली', rom: 'machli', fr: 'le poisson', ex: 'मुझे मछली खाना पसंद है।' },
        { es: 'चावल', rom: 'chaval', fr: 'le riz', ex: 'मैं रात के खाने में चावल पकाता हूँ।' },
        { es: 'दाल', rom: 'dal', fr: 'les lentilles', ex: 'दाल बहुत पौष्टिक होती है।' },
        { es: 'चाय', rom: 'chay', fr: 'le thé', ex: 'मैं हर दिन चाय पीता हूँ।' },
        { es: 'सेब', rom: 'seb', fr: 'la pomme', ex: 'मैं हर सुबह एक सेब खाता हूँ।' }
      ],
      intermediaire: [
        { es: 'स्ट्रॉबेरी', rom: 'strawberi', fr: 'la fraise', ex: 'स्ट्रॉबेरी पकी हुई और मीठी हैं।' },
        { es: 'संतरे का रस', rom: 'santare ka ras', fr: "le jus d'orange", ex: 'मैं सुबह संतरे का रस पीता हूँ।' },
        { es: 'मशरूम', rom: 'mashrum', fr: 'les champignons', ex: 'मैं सब्ज़ी में मशरूम डालता हूँ।' },
        { es: 'मक्खन', rom: 'makkhan', fr: 'le beurre', ex: 'मैं रोटी पर मक्खन लगाता हूँ।' },
        { es: 'चीनी', rom: 'chini', fr: 'le sucre', ex: 'क्या आप चाय में चीनी लेते हैं?' },
        { es: 'काली मिर्च', rom: 'kali mirch', fr: 'le poivre', ex: 'थोड़ी काली मिर्च डालें।' },
        { es: 'मिठाई', rom: 'mithai', fr: 'le dessert', ex: 'मिठाई में क्या लेंगे?' },
        { es: 'नुस्खा', rom: 'nuskha', fr: 'la recette', ex: 'यह मेरी दादी का नुस्खा है।' }
      ],
      avance: [
        { es: 'सामग्री', rom: 'samagri', fr: 'les ingrédients', ex: 'सभी सामग्री ताज़ी है।' },
        { es: 'मसाले', rom: 'masale', fr: "l'assaisonnement", ex: 'मसाले एकदम सही हैं।' },
        { es: 'पौष्टिक', rom: 'paushtik', fr: 'nutritif', ex: 'यह खाना बहुत पौष्टिक है।' },
        { es: 'भूख', rom: 'bhukh', fr: "l'appétit", ex: 'खुशबू से भूख बढ़ जाती है।' },
        { es: 'व्यंजन', rom: 'vyanjan', fr: 'la cuisine', ex: 'मुझे एशियाई व्यंजन पसंद है।' },
        { es: 'स्वाद', rom: 'swad', fr: 'la saveur', ex: 'इस व्यंजन का स्वाद अनोखा है।' },
        { es: 'हिस्सा', rom: 'hissa', fr: 'la portion', ex: 'हिस्सा बहुत बड़ा है।' }
      ]
    },
    voyage: { nom: 'Voyage', icone: '✈️',
      debutant: [
        { es: 'हवाई अड्डा', rom: 'havai adda', fr: "l'aéroport", ex: 'हम आठ बजे हवाई अड्डे पर पहुँचते हैं।' },
        { es: 'होटल', rom: 'hotel', fr: "l'hôtel", ex: 'होटल समुद्र तट के पास है।' },
        { es: 'टिकट', rom: 'tikat', fr: 'le billet', ex: 'मैंने हवाई जहाज़ का टिकट खरीदा।' },
        { es: 'पासपोर्ट', rom: 'pasport', fr: 'le passeport', ex: 'अपना पासपोर्ट मत भूलें।' },
        { es: 'नक्शा', rom: 'naksha', fr: 'la carte', ex: 'मैं रास्ता खोजने के लिए नक्शा इस्तेमाल करता हूँ।' },
        { es: 'ट्रेन', rom: 'tren', fr: 'le train', ex: 'ट्रेन नौ बजे रवाना होती है।' },
        { es: 'बस', rom: 'bas', fr: 'le bus', ex: 'मैं हर दिन बस लेता हूँ।' },
        { es: 'स्टेशन', rom: 'steshan', fr: 'la gare', ex: 'स्टेशन शहर के केंद्र में है।' },
        { es: 'सामान', rom: 'saman', fr: 'les bagages', ex: 'मेरा सामान बहुत भारी है।' },
        { es: 'समुद्र तट', rom: 'samudra tat', fr: 'la plage', ex: 'हम समुद्र तट पर आराम करते हैं।' }
      ],
      intermediaire: [
        { es: 'बुकिंग', rom: 'buking', fr: 'la réservation', ex: 'मैंने ऑनलाइन बुकिंग की।' },
        { es: 'प्रस्थान', rom: 'prasthan', fr: 'le départ', ex: 'प्रस्थान दोपहर को है।' },
        { es: 'आगमन', rom: 'agman', fr: "l'arrivée", ex: 'हमारा आगमन देर से हो रहा है।' },
        { es: 'सीमा शुल्क', rom: 'sima shulk', fr: 'la douane', ex: 'हम सीमा शुल्क से गुज़रते हैं।' },
        { es: 'मुद्रा', rom: 'mudra', fr: 'la devise', ex: 'मैं बैंक में मुद्रा बदलता हूँ।' },
        { es: 'यादगार', rom: 'yadgar', fr: 'le souvenir', ex: 'मैं परिवार के लिए यादगार खरीदता हूँ।' },
        { es: 'गाइड', rom: 'gayd', fr: 'le guide', ex: 'गाइड हमें शहर दिखाता है।' },
        { es: 'साहसिक कार्य', rom: 'sahasik karya', fr: "l'aventure", ex: 'हर यात्रा एक नया साहसिक कार्य है।' }
      ],
      avance: [
        { es: 'यात्रा कार्यक्रम', rom: 'yatra karyakram', fr: "l'itinéraire", ex: 'हमारे यात्रा कार्यक्रम में पाँच शहर हैं।' },
        { es: 'मंज़िल', rom: 'manzil', fr: 'la destination', ex: 'पेरिस मेरी सपनों की मंज़िल है।' },
        { es: 'आवास', rom: 'avas', fr: "l'hébergement", ex: 'आवास बेहतरीन है।' },
        { es: 'खोजना', rom: 'khojna', fr: 'explorer', ex: 'मैं पैदल पुराने शहर की खोज करता हूँ।' },
        { es: 'ऐतिहासिक स्थल', rom: 'aitihasik sthal', fr: 'le monument', ex: 'ताजमहल एक प्रसिद्ध ऐतिहासिक स्थल है।' },
        { es: 'संस्कृति', rom: 'sanskriti', fr: 'la culture', ex: 'मैं स्थानीय संस्कृति से मोहित हूँ।' },
        { es: 'दृश्य', rom: 'drishya', fr: 'le paysage', ex: 'दृश्य मनमोहक है।' }
      ]
    },
    famille: { nom: 'Famille', icone: '👨‍👩‍👧',
      debutant: [
        { es: 'माँ', rom: 'maan', fr: 'la mère', ex: 'मेरी माँ बहुत अच्छा खाना बनाती है।' },
        { es: 'पिता', rom: 'pita', fr: 'le père', ex: 'मेरे पिता दिल्ली में काम करते हैं।' },
        { es: 'बहन', rom: 'bahan', fr: 'la sœur', ex: 'मेरी बहन बहुत मज़ेदार है।' },
        { es: 'भाई', rom: 'bhai', fr: 'le frère', ex: 'मेरा भाई फ़ुटबॉल खेलता है।' },
        { es: 'दादी', rom: 'dadi', fr: 'la grand-mère', ex: 'दादी अच्छी कहानियाँ सुनाती हैं।' },
        { es: 'दादा', rom: 'dada', fr: 'le grand-père', ex: 'दादा जी बहुत बुद्धिमान हैं।' },
        { es: 'बच्चा', rom: 'bachcha', fr: "l'enfant", ex: 'बच्चा बगीचे में खेल रहा है।' },
        { es: 'परिवार', rom: 'parivar', fr: 'la famille', ex: 'मेरा परिवार बहुत करीब है।' },
        { es: 'घर', rom: 'ghar', fr: 'le foyer', ex: 'घर जैसी कोई जगह नहीं।' },
        { es: 'बेटी', rom: 'beti', fr: 'la fille', ex: 'बेटी विश्वविद्यालय में पढ़ती है।' }
      ],
      intermediaire: [
        { es: 'चचेरा भाई', rom: 'chachera bhai', fr: 'le cousin', ex: 'मेरा चचेरा भाई मुंबई में रहता है।' },
        { es: 'चाची', rom: 'chachi', fr: 'la tante', ex: 'चाची स्वादिष्ट मिठाइयाँ बनाती हैं।' },
        { es: 'चाचा', rom: 'chacha', fr: "l'oncle", ex: 'चाचा जी डॉक्टर हैं।' },
        { es: 'भतीजा', rom: 'bhatija', fr: 'le neveu', ex: 'मेरा भतीजा दो साल का है।' },
        { es: 'पति', rom: 'pati', fr: 'le mari', ex: 'उनके पति बहुत देखभाल करने वाले हैं।' },
        { es: 'पत्नी', rom: 'patni', fr: 'la femme', ex: 'उनकी पत्नी शिक्षिका हैं।' },
        { es: 'शादी', rom: 'shadi', fr: 'le mariage', ex: 'शादी बहुत सुंदर थी।' },
        { es: 'माता-पिता', rom: 'mata-pita', fr: 'les parents', ex: 'मेरे माता-पिता छुट्टी पर हैं।' }
      ],
      avance: [
        { es: 'रिश्ता', rom: 'rishta', fr: 'la relation', ex: 'अच्छे रिश्ते के लिए मेहनत चाहिए।' },
        { es: 'सांस्कृतिक विरासत', rom: 'sanskritik virasat', fr: "l'héritage", ex: 'हम एक समृद्ध सांस्कृतिक विरासत साझा करते हैं।' },
        { es: 'पीढ़ी', rom: 'pidhi', fr: 'la génération', ex: 'हर पीढ़ी पिछली पीढ़ी से सीखती है।' },
        { es: 'परवरिश', rom: 'parvarish', fr: "l'éducation", ex: 'अच्छी परवरिश चरित्र बनाती है।' },
        { es: 'परंपरा', rom: 'parampara', fr: 'la tradition', ex: 'हम पारिवारिक परंपराओं को जीवित रखते हैं।' },
        { es: 'बंधन', rom: 'bandhan', fr: 'le lien', ex: 'भाई-बहनों का बंधन मज़बूत होता है।' },
        { es: 'पुनर्मिलन', rom: 'punarmilan', fr: 'les retrouvailles', ex: 'पारिवारिक पुनर्मिलन शानदार था।' }
      ]
    },
    couleurs: { nom: 'Couleurs', icone: '🎨',
      debutant: [
        { es: 'लाल', rom: 'lal', fr: 'rouge', ex: 'सेब चमकीला लाल है।' },
        { es: 'नीला', rom: 'nila', fr: 'bleu', ex: 'आसमान साफ़ और नीला है।' },
        { es: 'हरा', rom: 'hara', fr: 'vert', ex: 'बारिश के बाद घास हरी है।' },
        { es: 'पीला', rom: 'pila', fr: 'jaune', ex: 'सूरज पीला और गर्म है।' },
        { es: 'काला', rom: 'kala', fr: 'noir', ex: 'आज मैं काली जैकेट पहन रहा हूँ।' },
        { es: 'सफ़ेद', rom: 'safed', fr: 'blanc', ex: 'बर्फ़ पूरी तरह सफ़ेद है।' },
        { es: 'नारंगी', rom: 'narangi', fr: 'orange', ex: 'उसकी ड्रेस चमकीली नारंगी है।' },
        { es: 'गुलाबी', rom: 'gulabi', fr: 'rose', ex: 'गुलाब हल्के गुलाबी हैं।' },
        { es: 'बैंगनी', rom: 'baingani', fr: 'violet', ex: 'शाम को आसमान बैंगनी हो जाता है।' },
        { es: 'भूरा', rom: 'bhura', fr: 'marron', ex: 'पेड़ का तना भूरा है।' }
      ],
      intermediaire: [
        { es: 'भूरा-सलेटी', rom: 'bhura-saleti', fr: 'gris', ex: 'बादल गहरे सलेटी हैं।' },
        { es: 'गहरा', rom: 'gahra', fr: 'foncé', ex: 'सर्दियों में मुझे गहरे रंग पसंद हैं।' },
        { es: 'हल्का', rom: 'halka', fr: 'clair', ex: 'वह गर्मियों में हल्का नीला पहनती है।' },
        { es: 'चमकीला', rom: 'chamkila', fr: 'vif', ex: 'पेंटिंग में चमकीले रंग हैं।' },
        { es: 'पीला पड़ना', rom: 'pila parna', fr: 'pâle', ex: 'वह आज पीला दिख रहा है।' },
        { es: 'रंग-बिरंगा', rom: 'rang-biranga', fr: 'coloré', ex: 'बाज़ार बहुत रंग-बिरंगा है।' },
        { es: 'रंगत', rom: 'rangat', fr: 'la teinte', ex: 'मुझे नीले का यह रंगत पसंद है।' },
        { es: 'पारदर्शी', rom: 'pardarshi', fr: 'transparent', ex: 'शीशा पारदर्शी है।' }
      ],
      avance: [
        { es: 'विपरीतता', rom: 'viparitata', fr: 'le contraste', ex: 'रंगों के बीच विपरीतता प्रभावशाली है।' },
        { es: 'जीवंत', rom: 'jivant', fr: 'éclatant', ex: 'जीवंत रंगों ने मेरा ध्यान खींचा।' },
        { es: 'बारीकता', rom: 'barikta', fr: 'la nuance', ex: 'रोशनी में बारीकता बदलती है।' },
        { es: 'एकरंगी', rom: 'ekarangi', fr: 'monochrome', ex: 'तस्वीर एकरंगी है।' },
        { es: 'रंगद्रव्य', rom: 'rangdravya', fr: 'le pigment', ex: 'इस रंग में प्राकृतिक रंगद्रव्य इस्तेमाल होते हैं।' },
        { es: 'वर्णक्रम', rom: 'varnakram', fr: 'le spectre', ex: 'इंद्रधनुष पूरा वर्णक्रम दिखाता है।' },
        { es: 'रंग का आभास', rom: 'rang ka abhas', fr: 'la teinte', ex: 'मिश्रण में पीले का आभास जोड़ें।' }
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
  const _romEl = document.getElementById('es-word-rom');
  const _NON_LATIN = ['ru','ja','ko','zh','ar','hi'];
  if (_romEl) {
    if (carte.rom && _NON_LATIN.includes(langCible)) {
      _romEl.textContent = carte.rom;
      _romEl.style.display = '';
    } else {
      _romEl.style.display = 'none';
    }
  }

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
  const _wRomEl = document.getElementById('write-word-rom');
  if (_wRomEl) {
    if (carte.rom && ['ru','ja','ko','zh','ar','hi'].includes(langCible)) {
      _wRomEl.textContent = carte.rom;
      _wRomEl.style.display = '';
    } else {
      _wRomEl.style.display = 'none';
    }
  }
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

  // Bouton grammaire
  document.getElementById('btn-open-gram').addEventListener('click', () => afficherFicheGrammaire(langCible));
  document.getElementById('gram-close').addEventListener('click', () => {
    document.getElementById('gram-overlay').style.display = 'none';
  });
  document.getElementById('gram-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('gram-overlay'))
      document.getElementById('gram-overlay').style.display = 'none';
  });
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
});

// =============================================
// FICHES DE GRAMMAIRE
// =============================================
const GRAM_TIPS = {};

// --- RUSSE ---
GRAM_TIPS['ru'] = {
  nom: 'Russe',
  sections: [
    { titre: 'Écriture', items: [
      'Alphabet cyrillique : 33 lettres. Certaines ressemblent au latin mais se prononcent différemment (P = R, H = N, C = S).',
      'Apprendre le cyrillique prend ~1 semaine, ça vaut le coup avant de mémoriser du vocabulaire.'
    ]},
    { titre: 'Ordre des mots', items: [
      'Ordre de base : Sujet–Verbe–Objet, mais très flexible grâce aux cas grammaticaux.',
      "Exemple : «Я люблю кофе» et «Кофе я люблю» signifient tous les deux «J'aime le café» (nuance d'emphase)."
    ]},
    { titre: 'Articles', items: [
      "Pas d'articles définis ni indéfinis en russe.",
      '«Кот» peut signifier «un chat» ou «le chat» selon le contexte.'
    ]},
    { titre: 'Particularités clés', items: [
      '6 cas grammaticaux (nominatif, génitif, datif, accusatif, instrumental, prépositionnel) — les terminaisons changent selon la fonction du mot.',
      'Le verbe «être» (быть) est souvent omis au présent : «Я студент» = Je (suis) étudiant.',
      'Deux aspects verbaux : imperfectif (action en cours) et perfectif (action complète).',
      'Accent tonique variable et non marqué — à apprendre mot par mot.'
    ]}
  ]
};

// --- JAPONAIS ---
GRAM_TIPS['ja'] = {
  nom: 'Japonais',
  sections: [
    { titre: 'Écriture', items: [
      '3 systèmes : hiragana (46 syllabes natives), katakana (46 syllabes pour mots étrangers), kanji (idéogrammes chinois adaptés).',
      'Hiragana et katakana sont phonétiques et s\'apprennent en 1-2 semaines chacun.',
      'Un texte courant mélange les 3 systèmes simultanément.'
    ]},
    { titre: 'Ordre des mots', items: [
      'SOV : Sujet – Objet – Verbe. Le verbe est toujours en fin de phrase.',
      '«私はコーヒーを飲みます» = Moi (wa) café (wo) bois → "Je bois du café".',
      'Les particules (は、が、を、に…) indiquent la fonction grammaticale de chaque mot.'
    ]},
    { titre: 'Articles', items: [
      "Pas d'articles. Le contexte et les particules suffisent.",
    ]},
    { titre: 'Particularités clés', items: [
      'Le sujet est souvent omis quand il est clair : «飲みます» peut suffire pour "je bois".',
      'Niveaux de politesse : forme polie (ます/です) pour les inconnus, forme courte entre amis.',
      'Les adjectifs se conjuguent comme des verbes (い-adjectifs et な-adjectifs).',
      'Pas de pluriel grammatical obligatoire : «猫» = un chat ou des chats.'
    ]}
  ]
};

// --- CORÉEN ---
GRAM_TIPS['ko'] = {
  nom: 'Coréen',
  sections: [
    { titre: 'Écriture', items: [
      "Hangul : alphabet syllabique de 24 lettres combinées en blocs. Créé en 1443, c'est l'un des systèmes les plus logiques du monde.",
      "Chaque bloc représente une syllabe : 한 = han. Lisible en ~2-3 jours d'apprentissage."
    ]},
    { titre: 'Ordre des mots', items: [
      'SOV : Sujet – Objet – Verbe. Comme le japonais, le verbe est toujours en dernier.',
      '«저는 커피를 마셔요» = Moi (neun) café (reul) bois → "Je bois du café".',
      'Des particules suffixes indiquent le rôle de chaque nom (sujet, objet, lieu…).'
    ]},
    { titre: 'Articles', items: [
      "Pas d'articles. Le contexte détermine le nombre et la définition."
    ]},
    { titre: 'Particularités clés', items: [
      "Deux niveaux de politesse principaux : forme formelle (합니다) et forme polie standard (해요).",
      'Les verbes et adjectifs se terminent toujours en 다 à la forme de base.',
      "Le sujet est souvent omis quand il est évident.",
      "Nombreux mots d'emprunt au japonais (époque coloniale) et à l'anglais (modern)."
    ]}
  ]
};

// --- MANDARIN (CHINOIS) ---
GRAM_TIPS['zh'] = {
  nom: 'Mandarin',
  sections: [
    { titre: 'Écriture', items: [
      'Caractères Han : ~3000 pour la lecture courante, ~7000 pour la presse. Pas d\'alphabet — chaque caractère est un morphème.',
      'Pinyin : transcription phonétique en lettres latines avec tons, utilisée pour apprendre la prononciation.',
      'Écriture simplifiée (Chine continentale) vs. traditionnelle (Taïwan, Hong Kong).'
    ]},
    { titre: 'Tons', items: [
      '4 tons + un ton neutre : mā (1er), má (2e), mǎ (3e), mà (4e), ma (neutre).',
      'Le même son avec un ton différent = mot totalement différent : 妈 (mère) vs 马 (cheval).'
    ]},
    { titre: 'Ordre des mots', items: [
      'SVO : Sujet–Verbe–Objet, proche du français.',
      'Les modificateurs (adjectifs, propositions relatives) se placent AVANT le nom.'
    ]},
    { titre: 'Particularités clés', items: [
      "Pas de conjugaison verbale : le temps est indiqué par des marqueurs (了, 过, 在…) ou le contexte.",
      "Pas de genre grammatical, pas de pluriel obligatoire, pas d'articles.",
      "Classificateurs obligatoires : on ne dit pas «un livre» mais «一本书» (un [classificateur-livre] livre).",
      "Langue tonale isolante : la grammaire est relativement simple une fois les tons maîtrisés."
    ]}
  ]
};

// --- ARABE ---
GRAM_TIPS['ar'] = {
  nom: 'Arabe',
  sections: [
    { titre: 'Écriture', items: [
      "28 lettres, s'écrit de droite à gauche. Chaque lettre a 4 formes selon sa position dans le mot.",
      "Les voyelles courtes (signes diacritiques) sont souvent omises dans les textes courants — contexte essentiel.",
      "L'arabe standard moderne (MSA) est compris partout ; les dialectes régionaux varient fortement."
    ]},
    { titre: 'Ordre des mots', items: [
      'VSO traditionnel (Verbe–Sujet–Objet) en arabe littéraire, mais SVO fréquent en arabe moderne.',
      "L'adjectif suit toujours le nom et s'accorde en genre, nombre et état (défini/indéfini)."
    ]},
    { titre: 'Articles', items: [
      "Un seul article défini : ال (al-), préfixé au nom. Pas d'article indéfini.",
      "«كتاب» = un livre / «الكتاب» = le livre."
    ]},
    { titre: 'Particularités clés', items: [
      'Système triconsonantique : la plupart des mots dérivent de racines à 3 consonnes (k-t-b → écrire, livre, bureau…).',
      'Duel grammatical : forme spéciale pour exactement deux choses.',
      'Genre grammatical (masculin/féminin) pour tous les noms ; le féminin se forme souvent avec ة (ta marbuta).',
      "Accord sujet-verbe : si le sujet est pluriel non-humain, le verbe est au féminin singulier."
    ]}
  ]
};

// --- HINDI ---
GRAM_TIPS['hi'] = {
  nom: 'Hindi',
  sections: [
    { titre: 'Écriture', items: [
      "Devanagari : écriture syllabique de 48 signes de base (voyelles + consonnes). Les lettres sont suspendues à une ligne horizontale.",
      "Phonétique : chaque signe a un son précis et constant. Apprendre le script facilite grandement la prononciation."
    ]},
    { titre: 'Ordre des mots', items: [
      'SOV : Sujet–Objet–Verbe. Le verbe est en fin de phrase.',
      '«मैं चाय पीता हूँ» = Moi thé bois → "Je bois du thé".',
      'Les postpositions (équivalents des prépositions) se placent APRÈS le nom.'
    ]},
    { titre: 'Articles', items: [
      "Pas d'articles définis ni indéfinis. Le contexte suffit.",
      "«एक» (ek = un) peut jouer le rôle d'article indéfini informellement."
    ]},
    { titre: 'Particularités clés', items: [
      'Genre grammatical (masculin/féminin) pour tous les noms — affecte les adjectifs et les verbes.',
      'Le verbe s\'accorde avec le sujet ET parfois avec l\'objet (construction ergative au passé).',
      "Niveaux de politesse : «तू» (très familier), «तुम» (familier), «आप» (formel/respectueux).",
      "Vocabulaire : mots sanskrits pour le registre soutenu, mots arabes/persans dans le vocabulaire courant (legs de l'ère moghole)."
    ]}
  ]
};

// --- ANGLAIS ---
GRAM_TIPS['en'] = {
  nom: 'Anglais',
  sections: [
    { titre: 'Ordre des mots', items: [
      'SVO strict : Sujet–Verbe–Objet. Contrairement au français, l\'ordre est rarement flexible.',
      'Les adjectifs se placent toujours AVANT le nom : "a big red car" (jamais *"une voiture rouge grande").'
    ]},
    { titre: 'Articles', items: [
      '"the" = article défini (le/la/les). "a/an" = article indéfini.',
      '"a" devant consonne, "an" devant voyelle : "a cat", "an apple".'
    ]},
    { titre: 'Particularités clés', items: [
      'Pas de genre grammatical : tous les noms sont neutres, les pronoms he/she/it dépendent du sexe ou de la nature.',
      'Conjugaison très simple : une seule terminaison à l\'indicatif présent (-s à la 3e pers. sing.).',
      'Aspect progressif : "I am eating" (en train de) vs "I eat" (habitude).',
      'Phrasal verbs : "give up", "look after", "turn on" — le sens change complètement avec la particule.'
    ]}
  ]
};

// --- ITALIEN ---
GRAM_TIPS['it'] = {
  nom: 'Italien',
  sections: [
    { titre: 'Ordre des mots', items: [
      'SVO de base, mais flexible. Le sujet peut être omis car la terminaison verbale l\'indique.',
      '«Mangio la pizza» ou «La pizza la mangio io» (avec emphase) — les deux sont corrects.'
    ]},
    { titre: 'Articles', items: [
      'Articles définis : il (m. sg.), la (f. sg.), i (m. pl.), le (f. pl.), + lo/gli devant s+consonne, z, gn.',
      'Articles indéfinis : un/uno (m.), una/un\' (f.).'
    ]},
    { titre: 'Particularités clés', items: [
      'Genre grammatical pour tous les noms : -o généralement masculin, -a généralement féminin.',
      'Double consonnes importantes : "penna" (stylo) ≠ "pena" (peine) — prononciation distincte.',
      'Subjonctif très utilisé dans la langue parlée (contrairement au français qui le fuit).',
      'Le conditionnel avec "vorrei" (je voudrais) est essentiel pour la politesse.'
    ]}
  ]
};

// --- ALLEMAND ---
GRAM_TIPS['de'] = {
  nom: 'Allemand',
  sections: [
    { titre: 'Ordre des mots', items: [
      'Le verbe conjugué est toujours en 2e position dans une proposition principale.',
      'En subordonnée, le verbe va en DERNIÈRE position : "Ich weiß, dass er kommt" (…qu\'il vient).',
      'Inversion sujet-verbe si un autre élément commence la phrase : "Heute gehe ich" (Aujourd\'hui vais-je).'
    ]},
    { titre: 'Articles', items: [
      '3 genres : masculin (der), féminin (die), neutre (das). À apprendre avec chaque nom.',
      'Les articles changent selon le cas (nominatif, accusatif, datif, génitif).'
    ]},
    { titre: 'Particularités clés', items: [
      '4 cas grammaticaux : ils modifient les articles, adjectifs et parfois les noms.',
      'Noms toujours avec majuscule : "der Hund" (le chien), "die Freiheit" (la liberté).',
      'Mots composés illimités : "Donaudampfschifffahrtsgesellschaft" est un vrai mot.',
      'Séparation des verbes à préfixe : "anrufen" → "Ich rufe dich an" (je t\'appelle).'
    ]}
  ]
};

// --- PORTUGAIS ---
GRAM_TIPS['pt'] = {
  nom: 'Portugais',
  sections: [
    { titre: 'Ordre des mots', items: [
      'SVO, proche du français et de l\'espagnol.',
      'Les pronoms objets se placent différemment selon le pays : après le verbe au Portugal ("dá-me"), avant au Brésil ("me dá").'
    ]},
    { titre: 'Articles', items: [
      'Définis : o (m. sg.), a (f. sg.), os (m. pl.), as (f. pl.).',
      'Se contractent avec les prépositions : de + o = do, em + a = na, a + o = ao.'
    ]},
    { titre: 'Particularités clés', items: [
      'Deux variantes majeures : portugais européen (PT) et brésilien (BR) — prononciation très différente, vocabulaire partiellement divergent.',
      'Infinitif personnel : conjugué avec un sujet, spécificité rare dans les langues romanes ("para eu fazer" = pour que je fasse).',
      'Subjonctif futur encore utilisé au quotidien en portugais européen.',
      'Nasales complexes : ão, ã, em — sons n\'existant pas en français standard.'
    ]}
  ]
};

// --- NÉERLANDAIS ---
GRAM_TIPS['nl'] = {
  nom: 'Néerlandais',
  sections: [
    { titre: 'Ordre des mots', items: [
      'Comme l\'allemand : verbe en 2e position en principale, en dernière en subordonnée.',
      '«Ik ga morgen naar Amsterdam» (Je vais demain à Amsterdam) — verbe en 2e position.'
    ]},
    { titre: 'Articles', items: [
      '2 genres : commun (de, pour anciens masc./fém.) et neutre (het). ~75% des noms sont de-woorden.',
      'Article indéfini : een (un/une), invariable.'
    ]},
    { titre: 'Particularités clés', items: [
      'Proche de l\'anglais et de l\'allemand : beaucoup de vocabulaire familier pour les anglophones.',
      'Diminutifs en -je très courants et affectifs : "huisje" (petite maison/maisonnette).',
      'Verbes à particules séparables comme l\'allemand : "ophellen" → "Ik bel je op" (je te rappelle).',
      'Prononciation du "g" gutturale, caractéristique du néerlandais.'
    ]}
  ]
};

// --- POLONAIS ---
GRAM_TIPS['pl'] = {
  nom: 'Polonais',
  sections: [
    { titre: 'Écriture', items: [
      'Alphabet latin enrichi de signes diacritiques : ą, ć, ę, ł, ń, ó, ś, ź, ż.',
      '«Ł» se prononce comme un "w" anglais, «cz» = tch, «sz» = ch français.'
    ]},
    { titre: 'Ordre des mots', items: [
      'Très flexible grâce aux 7 cas grammaticaux — l\'ordre exprime l\'emphase plutôt que la structure.',
      'SOV, SVO, VSO… tous possibles selon le contexte.'
    ]},
    { titre: 'Particularités clés', items: [
      '7 cas grammaticaux : nominatif, génitif, datif, accusatif, instrumental, locatif, vocatif.',
      '3 genres (masculin animé, masculin inanimé, féminin, neutre) — avec distinctions spéciales au pluriel.',
      'Pas d\'articles (ni définis ni indéfinis) — contexte essentiel.',
      'Aspect verbal perfectif/imperfectif comme en russe, omniprésent.'
    ]}
  ]
};

// --- TURC ---
GRAM_TIPS['tr'] = {
  nom: 'Turc',
  sections: [
    { titre: 'Ordre des mots', items: [
      'SOV strict : Sujet–Objet–Verbe. Le verbe est toujours en dernière position.',
      '«Ben kahve içiyorum» = Moi café bois → "Je bois du café".'
    ]},
    { titre: 'Articles', items: [
      "Pas d'articles définis. L'accusatif défini -(y)ı/i/u/ü joue ce rôle pour les objets directs.",
      '"bir" (un) est l\'équivalent de l\'article indéfini.'
    ]},
    { titre: 'Particularités clés', items: [
      'Langue agglutinante : les suffixes s\'accumulent sur un radical pour exprimer temps, personne, négation, etc.',
      '«Gidebilmeyecektim» = "je n\'allais pas pouvoir y aller" — un seul mot !',
      'Harmonie vocalique : les suffixes adaptent leurs voyelles à la voyelle du radical (8 voyelles, 2 séries).',
      'Pas de genre grammatical — aucun accord féminin/masculin.',
      'Réforme alphabétique 1928 : passage de l\'arabe au latin sous Atatürk — alphabet de 29 lettres phonétiques.'
    ]}
  ]
};

// --- ESPAGNOL ---
GRAM_TIPS['es'] = {
  nom: 'Espagnol',
  sections: [
    { titre: 'Ordre des mots', items: [
      'SVO de base, mais flexible. Le sujet peut être omis ("Como" = je mange).',
      'Les questions s\'inversent : "¿Hablas español?" (parles-tu espagnol ?).'
    ]},
    { titre: 'Articles', items: [
      'Définis : el (m. sg.), la (f. sg.), los (m. pl.), las (f. pl.).',
      '"el" remplace "la" devant voyelle accentuée : "el agua" (l\'eau, féminin !).'
    ]},
    { titre: 'Particularités clés', items: [
      'Genre grammatical (masc./fém.) pour tous les noms — les adjectifs s\'accordent.',
      '2 verbes "être" : ser (permanent/identité) vs estar (temporaire/état/lieu).',
      'Subjonctif très vivant — indispensable pour exprimer doute, désir, hypothèse.',
      'Pronoms d\'objet clitiques : "Me lo da" (Il me le donne) — ordre et position stricts.',
      '¡ et ¿ en début de phrase — marque distinctive de la typographie espagnole.'
    ]}
  ]
};

// =============================================
// LOGIQUE MODAL GRAMMAIRE
// =============================================
function afficherFicheGrammaire(lang) {
  const overlay = document.getElementById('gram-overlay');
  const title   = document.getElementById('gram-title');
  const body    = document.getElementById('gram-body');
  if (!overlay || !title || !body) return;

  const fiche = GRAM_TIPS[lang];
  if (!fiche) {
    title.textContent = '📖 Grammaire';
    body.innerHTML = '<p class="gram-empty">Fiche non disponible pour cette langue.</p>';
    overlay.style.display = 'flex';
    return;
  }

  title.textContent = '📖 ' + fiche.nom + ' — Grammaire';
  body.innerHTML = fiche.sections.map(s =>
    '<div class="gram-section"><h3>' + s.titre + '</h3><ul>' +
    s.items.map(i => '<li>' + i + '</li>').join('') +
    '</ul></div>'
  ).join('');
  overlay.style.display = 'flex';
}

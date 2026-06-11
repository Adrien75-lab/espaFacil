export interface DialogueLine {
  type: 'line'
  speaker: 'A' | 'B'
  text: string
  fr: string
}

export interface DialogueChoice {
  type: 'choice'
  text: string
  fr: string
  options: { text: string; fr: string }[]
  correctIndex: number
}

export type DialogueStep = DialogueLine | DialogueChoice

export interface Dialogue {
  id: string
  emoji: string
  title: string
  steps: DialogueStep[]
}

const line = (speaker: 'A' | 'B', text: string, fr: string): DialogueLine =>
  ({ type: 'line', speaker, text, fr })
const choice = (text: string, fr: string, options: { text: string; fr: string }[], correctIndex: number): DialogueChoice =>
  ({ type: 'choice', text, fr, options, correctIndex })

export const DIALOGUES: Record<string, Dialogue[]> = {

  es: [
    {
      id: 'es-cafe', emoji: '☕', title: 'Au café',
      steps: [
        line('A', '¡Buenos días! ¿Qué desea tomar?', 'Bonjour ! Que désirez-vous prendre ?'),
        choice('¿Qué desea tomar?', 'Que désirez-vous prendre ?', [
          { text: 'Quiero un café con leche, por favor.', fr: 'Je voudrais un café au lait, s\'il vous plaît.' },
          { text: 'Me llamo Carlos.', fr: 'Je m\'appelle Carlos.' },
          { text: 'El baño está allí.', fr: 'Les toilettes sont là.' },
          { text: 'Hasta luego.', fr: 'Au revoir.' },
        ], 0),
        line('A', 'Muy bien. ¿Algo más?', 'Très bien. Quelque chose d\'autre ?'),
        choice('¿Algo más?', 'Autre chose ?', [
          { text: 'Sí, una tostada también, por favor.', fr: 'Oui, un toast aussi, s\'il vous plaît.' },
          { text: 'Me duele la cabeza.', fr: 'J\'ai mal à la tête.' },
          { text: 'El tren sale a las tres.', fr: 'Le train part à trois heures.' },
          { text: 'No tengo hambre.', fr: 'Je n\'ai pas faim.' },
        ], 0),
        line('A', 'Perfecto. Son cuatro euros con cincuenta.', 'Parfait. Ça fait quatre euros cinquante.'),
        choice('Son cuatro euros con cincuenta.', 'Ça fait quatre euros cinquante.', [
          { text: 'Aquí tiene. Gracias.', fr: 'Voilà. Merci.' },
          { text: 'Hace mucho frío hoy.', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'No hablo español.', fr: 'Je ne parle pas espagnol.' },
          { text: '¿Dónde está el hotel?', fr: 'Où est l\'hôtel ?' },
        ], 0),
      ],
    },
    {
      id: 'es-calle', emoji: '🗺️', title: 'Dans la rue',
      steps: [
        line('B', 'Perdona, ¿puedes ayudarme?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'Claro, ¿qué necesitas?', 'Bien sûr, qu\'est-ce qu\'il te faut ?'),
        choice('¿Qué necesitas?', 'De quoi as-tu besoin ?', [
          { text: '¿Sabes dónde está la estación de metro?', fr: 'Sais-tu où est la station de métro ?' },
          { text: 'Tengo mucho calor.', fr: 'J\'ai très chaud.' },
          { text: 'Me gusta tu camisa.', fr: 'J\'aime ta chemise.' },
          { text: 'Estoy cansado.', fr: 'Je suis fatigué.' },
        ], 0),
        line('A', 'Sí. Sigue todo recto y gira a la izquierda.', 'Oui. Continue tout droit et tourne à gauche.'),
        choice('¿Está muy lejos?', 'C\'est loin ?', [
          { text: '¿Cuánto tiempo se tarda?', fr: 'Combien de temps faut-il ?' },
          { text: 'Mi perro es muy simpático.', fr: 'Mon chien est très sympa.' },
          { text: 'Llueve mucho en Madrid.', fr: 'Il pleut beaucoup à Madrid.' },
          { text: 'Me llamo Ana.', fr: 'Je m\'appelle Ana.' },
        ], 0),
        line('A', 'Unos cinco minutos a pie.', 'Environ cinq minutes à pied.'),
        choice('¿Entendiste?', 'Tu as compris ?', [
          { text: 'Sí, muchas gracias. ¡Hasta luego!', fr: 'Oui, merci beaucoup. Au revoir !' },
          { text: 'No me gusta caminar.', fr: 'Je n\'aime pas marcher.' },
          { text: 'El metro es caro.', fr: 'Le métro est cher.' },
          { text: 'No tengo tiempo.', fr: 'Je n\'ai pas le temps.' },
        ], 0),
      ],
    },
  ],

  en: [
    {
      id: 'en-cafe', emoji: '☕', title: 'At the café',
      steps: [
        line('A', 'Hi there! What can I get you?', 'Bonjour ! Qu\'est-ce que je vous sers ?'),
        choice('What can I get you?', 'Qu\'est-ce que je vous sers ?', [
          { text: 'Could I have a flat white, please?', fr: 'Je pourrais avoir un flat white, s\'il vous plaît ?' },
          { text: 'I live in Paris.', fr: 'J\'habite à Paris.' },
          { text: 'The bus is late.', fr: 'Le bus est en retard.' },
          { text: 'Goodbye!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Sure! Anything to eat?', 'Bien sûr ! Quelque chose à manger ?'),
        choice('Anything to eat?', 'Quelque chose à manger ?', [
          { text: 'Yes, I\'ll have a croissant as well, please.', fr: 'Oui, je prendrai aussi un croissant, s\'il vous plaît.' },
          { text: 'It\'s raining outside.', fr: 'Il pleut dehors.' },
          { text: 'I need to call a doctor.', fr: 'J\'ai besoin d\'appeler un médecin.' },
          { text: 'My name is Sophie.', fr: 'Je m\'appelle Sophie.' },
        ], 0),
        line('A', 'That\'ll be four pounds fifty, please.', 'Ça fait quatre livres cinquante, s\'il vous plaît.'),
        choice('That\'ll be four fifty.', 'Ça fait quatre livres cinquante.', [
          { text: 'Here you go. Keep the change.', fr: 'Voilà. Gardez la monnaie.' },
          { text: 'I don\'t understand.', fr: 'Je ne comprends pas.' },
          { text: 'Where is the airport?', fr: 'Où est l\'aéroport ?' },
          { text: 'It\'s very cold today.', fr: 'Il fait très froid aujourd\'hui.' },
        ], 0),
      ],
    },
    {
      id: 'en-street', emoji: '🗺️', title: 'Asking for directions',
      steps: [
        line('B', 'Excuse me, could you help me?', 'Excusez-moi, pourriez-vous m\'aider ?'),
        line('A', 'Of course! What do you need?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('What do you need?', 'De quoi avez-vous besoin ?', [
          { text: 'Do you know where the nearest pharmacy is?', fr: 'Savez-vous où est la pharmacie la plus proche ?' },
          { text: 'I love your jacket.', fr: 'J\'adore votre veste.' },
          { text: 'It\'s a beautiful day.', fr: 'C\'est une belle journée.' },
          { text: 'I\'m very tired.', fr: 'Je suis très fatigué.' },
        ], 0),
        line('A', 'Yes, go straight ahead and turn right at the traffic lights.', 'Oui, allez tout droit et tournez à droite aux feux.'),
        choice('Is it far?', 'C\'est loin ?', [
          { text: 'How long does it take to walk?', fr: 'Combien de temps faut-il pour y aller à pied ?' },
          { text: 'I prefer taking the bus.', fr: 'Je préfère prendre le bus.' },
          { text: 'The weather is nice.', fr: 'Le temps est agréable.' },
          { text: 'I am a tourist.', fr: 'Je suis touriste.' },
        ], 0),
        line('A', 'About three minutes on foot.', 'Environ trois minutes à pied.'),
        choice('Got it?', 'C\'est bon ?', [
          { text: 'Perfect, thank you so much!', fr: 'Parfait, merci beaucoup !' },
          { text: 'I don\'t like walking.', fr: 'Je n\'aime pas marcher.' },
          { text: 'The pharmacy is closed.', fr: 'La pharmacie est fermée.' },
          { text: 'I need a map.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  de: [
    {
      id: 'de-cafe', emoji: '☕', title: 'Im Café',
      steps: [
        line('A', 'Guten Morgen! Was darf es sein?', 'Bonjour ! Que puis-je vous servir ?'),
        choice('Was darf es sein?', 'Que puis-je vous servir ?', [
          { text: 'Ich hätte gerne einen Kaffee, bitte.', fr: 'Je voudrais un café, s\'il vous plaît.' },
          { text: 'Ich heiße Thomas.', fr: 'Je m\'appelle Thomas.' },
          { text: 'Der Zug ist zu spät.', fr: 'Le train est en retard.' },
          { text: 'Auf Wiedersehen!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Sehr gern. Möchten Sie auch etwas essen?', 'Volontiers. Voulez-vous aussi manger quelque chose ?'),
        choice('Möchten Sie auch etwas essen?', 'Voulez-vous aussi manger quelque chose ?', [
          { text: 'Ja, ein Stück Kuchen, bitte.', fr: 'Oui, un morceau de gâteau, s\'il vous plaît.' },
          { text: 'Es ist heute sehr kalt.', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'Wo ist die Toilette?', fr: 'Où sont les toilettes ?' },
          { text: 'Ich bin müde.', fr: 'Je suis fatigué.' },
        ], 0),
        line('A', 'Das macht sechs Euro zwanzig.', 'Ça fait six euros vingt.'),
        choice('Das macht sechs Euro zwanzig.', 'Ça fait six euros vingt.', [
          { text: 'Hier, bitte. Stimmt so.', fr: 'Voilà. Gardez la monnaie.' },
          { text: 'Ich spreche kein Deutsch.', fr: 'Je ne parle pas allemand.' },
          { text: 'Das ist zu teuer.', fr: 'C\'est trop cher.' },
          { text: 'Wo ist der Bahnhof?', fr: 'Où est la gare ?' },
        ], 0),
      ],
    },
    {
      id: 'de-strasse', emoji: '🗺️', title: 'Auf der Straße',
      steps: [
        line('B', 'Entschuldigung, können Sie mir helfen?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'Ja, natürlich. Was brauchen Sie?', 'Oui, bien sûr. De quoi avez-vous besoin ?'),
        choice('Was brauchen Sie?', 'De quoi avez-vous besoin ?', [
          { text: 'Wo ist der nächste Supermarkt?', fr: 'Où est le supermarché le plus proche ?' },
          { text: 'Ich liebe Deutschland.', fr: 'J\'adore l\'Allemagne.' },
          { text: 'Das Wetter ist schön.', fr: 'Le temps est beau.' },
          { text: 'Ich bin Tourist.', fr: 'Je suis touriste.' },
        ], 0),
        line('A', 'Gehen Sie geradeaus und dann links an der Ampel.', 'Allez tout droit puis à gauche aux feux.'),
        choice('Wie weit ist das?', 'C\'est loin ?', [
          { text: 'Wie lange dauert es zu Fuß?', fr: 'Combien de temps faut-il à pied ?' },
          { text: 'Ich fahre lieber mit dem Bus.', fr: 'Je préfère prendre le bus.' },
          { text: 'Das ist sehr interessant.', fr: 'C\'est très intéressant.' },
          { text: 'Ich habe keine Zeit.', fr: 'Je n\'ai pas le temps.' },
        ], 0),
        line('A', 'Ungefähr fünf Minuten zu Fuß.', 'Environ cinq minutes à pied.'),
        choice('Alles klar?', 'C\'est bon ?', [
          { text: 'Vielen Dank! Auf Wiedersehen!', fr: 'Merci beaucoup ! Au revoir !' },
          { text: 'Das ist zu weit.', fr: 'C\'est trop loin.' },
          { text: 'Ich bin verloren.', fr: 'Je suis perdu.' },
          { text: 'Ich verstehe nicht.', fr: 'Je ne comprends pas.' },
        ], 0),
      ],
    },
  ],

  it: [
    {
      id: 'it-cafe', emoji: '☕', title: 'Al bar',
      steps: [
        line('A', 'Buongiorno! Cosa prende?', 'Bonjour ! Qu\'est-ce que vous prenez ?'),
        choice('Cosa prende?', 'Qu\'est-ce que vous prenez ?', [
          { text: 'Vorrei un cappuccino, per favore.', fr: 'Je voudrais un cappuccino, s\'il vous plaît.' },
          { text: 'Mi chiamo Marco.', fr: 'Je m\'appelle Marco.' },
          { text: 'Dov\'è la stazione?', fr: 'Où est la gare ?' },
          { text: 'Arrivederci!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Subito. Vuole anche qualcosa da mangiare?', 'Tout de suite. Voulez-vous aussi quelque chose à manger ?'),
        choice('Vuole anche qualcosa da mangiare?', 'Voulez-vous aussi manger quelque chose ?', [
          { text: 'Sì, un cornetto, grazie.', fr: 'Oui, un croissant, merci.' },
          { text: 'Fa molto caldo oggi.', fr: 'Il fait très chaud aujourd\'hui.' },
          { text: 'Il treno è in ritardo.', fr: 'Le train est en retard.' },
          { text: 'Non ho fame.', fr: 'Je n\'ai pas faim.' },
        ], 0),
        line('A', 'Fanno tre euro e cinquanta.', 'Ça fait trois euros cinquante.'),
        choice('Fanno tre euro e cinquanta.', 'Ça fait trois euros cinquante.', [
          { text: 'Ecco a lei. Grazie mille!', fr: 'Voilà. Merci beaucoup !' },
          { text: 'Non capisco l\'italiano.', fr: 'Je ne comprends pas l\'italien.' },
          { text: 'È troppo caro.', fr: 'C\'est trop cher.' },
          { text: 'Non ho soldi.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'it-strada', emoji: '🗺️', title: 'Per strada',
      steps: [
        line('B', 'Scusi, mi può aiutare?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'Certo! Di cosa ha bisogno?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('Di cosa ha bisogno?', 'De quoi avez-vous besoin ?', [
          { text: 'Sa dov\'è la fermata del bus?', fr: 'Savez-vous où est l\'arrêt de bus ?' },
          { text: 'Mi piace l\'Italia.', fr: 'J\'aime l\'Italie.' },
          { text: 'Sono molto stanco.', fr: 'Je suis très fatigué.' },
          { text: 'Il tempo è bello.', fr: 'Le temps est beau.' },
        ], 0),
        line('A', 'Sì, vada dritto e poi giri a destra.', 'Oui, allez tout droit puis tournez à droite.'),
        choice('È lontano?', 'C\'est loin ?', [
          { text: 'Quanto tempo ci vuole a piedi?', fr: 'Combien de temps faut-il à pied ?' },
          { text: 'Preferisco il taxi.', fr: 'Je préfère le taxi.' },
          { text: 'Non mi piace camminare.', fr: 'Je n\'aime pas marcher.' },
          { text: 'Sono un turista.', fr: 'Je suis touriste.' },
        ], 0),
        line('A', 'Circa quattro minuti a piedi.', 'Environ quatre minutes à pied.'),
        choice('Ha capito?', 'Vous avez compris ?', [
          { text: 'Sì, grazie mille! Arrivederci!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'È troppo lontano.', fr: 'C\'est trop loin.' },
          { text: 'Non capisco.', fr: 'Je ne comprends pas.' },
          { text: 'Ho bisogno di una mappa.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  pt: [
    {
      id: 'pt-cafe', emoji: '☕', title: 'No café',
      steps: [
        line('A', 'Bom dia! O que vai ser?', 'Bonjour ! Qu\'est-ce que ce sera ?'),
        choice('O que vai ser?', 'Qu\'est-ce que ce sera ?', [
          { text: 'Gostaria de um café, por favor.', fr: 'Je voudrais un café, s\'il vous plaît.' },
          { text: 'Chamo-me João.', fr: 'Je m\'appelle João.' },
          { text: 'O comboio está atrasado.', fr: 'Le train est en retard.' },
          { text: 'Até logo!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Com certeza. Quer também alguma coisa para comer?', 'Bien sûr. Voulez-vous aussi quelque chose à manger ?'),
        choice('Quer também alguma coisa para comer?', 'Voulez-vous aussi manger quelque chose ?', [
          { text: 'Sim, um pastel de nata, por favor.', fr: 'Oui, un pastel de nata, s\'il vous plaît.' },
          { text: 'Está muito calor hoje.', fr: 'Il fait très chaud aujourd\'hui.' },
          { text: 'Não tenho fome.', fr: 'Je n\'ai pas faim.' },
          { text: 'Onde é o hotel?', fr: 'Où est l\'hôtel ?' },
        ], 0),
        line('A', 'São dois euros e oitenta.', 'Ça fait deux euros quatre-vingts.'),
        choice('São dois euros e oitenta.', 'Ça fait deux euros quatre-vingts.', [
          { text: 'Aqui está. Obrigado!', fr: 'Voilà. Merci !' },
          { text: 'Não falo português.', fr: 'Je ne parle pas portugais.' },
          { text: 'É muito caro.', fr: 'C\'est trop cher.' },
          { text: 'Não tenho dinheiro.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'pt-rua', emoji: '🗺️', title: 'Na rua',
      steps: [
        line('B', 'Com licença, pode ajudar-me?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'Claro! Do que precisa?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('Do que precisa?', 'De quoi avez-vous besoin ?', [
          { text: 'Sabe onde fica o museu?', fr: 'Savez-vous où se trouve le musée ?' },
          { text: 'Adoro Portugal.', fr: 'J\'adore le Portugal.' },
          { text: 'Estou muito cansado.', fr: 'Je suis très fatigué.' },
          { text: 'O tempo está bom.', fr: 'Le temps est beau.' },
        ], 0),
        line('A', 'Sim. Siga em frente e vire à esquerda.', 'Oui. Continuez tout droit et tournez à gauche.'),
        choice('Fica longe?', 'C\'est loin ?', [
          { text: 'Quanto tempo demora a pé?', fr: 'Combien de temps faut-il à pied ?' },
          { text: 'Prefiro ir de táxi.', fr: 'Je préfère prendre un taxi.' },
          { text: 'Não gosto de andar.', fr: 'Je n\'aime pas marcher.' },
          { text: 'Sou turista.', fr: 'Je suis touriste.' },
        ], 0),
        line('A', 'Cerca de seis minutos a pé.', 'Environ six minutes à pied.'),
        choice('Percebeu?', 'Vous avez compris ?', [
          { text: 'Sim, muito obrigado! Até logo!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'É demasiado longe.', fr: 'C\'est trop loin.' },
          { text: 'Não percebi.', fr: 'Je n\'ai pas compris.' },
          { text: 'Preciso de um mapa.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  nl: [
    {
      id: 'nl-cafe', emoji: '☕', title: 'In het café',
      steps: [
        line('A', 'Goedemorgen! Wat mag het zijn?', 'Bonjour ! Qu\'est-ce que ce sera ?'),
        choice('Wat mag het zijn?', 'Qu\'est-ce que ce sera ?', [
          { text: 'Ik wil graag een koffie, alstublieft.', fr: 'Je voudrais un café, s\'il vous plaît.' },
          { text: 'Mijn naam is Jan.', fr: 'Je m\'appelle Jan.' },
          { text: 'De trein is te laat.', fr: 'Le train est en retard.' },
          { text: 'Tot ziens!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Natuurlijk. Wilt u ook iets eten?', 'Bien sûr. Voulez-vous aussi manger quelque chose ?'),
        choice('Wilt u ook iets eten?', 'Voulez-vous aussi manger quelque chose ?', [
          { text: 'Ja, een stuk appeltaart graag.', fr: 'Oui, une part de tarte aux pommes, s\'il vous plaît.' },
          { text: 'Het is heel koud vandaag.', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'Ik heb geen honger.', fr: 'Je n\'ai pas faim.' },
          { text: 'Waar is het toilet?', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', 'Dat is dan vijf euro tachtig.', 'Ça fait cinq euros quatre-vingts.'),
        choice('Dat is dan vijf euro tachtig.', 'Ça fait cinq euros quatre-vingts.', [
          { text: 'Alstublieft. Dank u wel!', fr: 'Voilà. Merci beaucoup !' },
          { text: 'Ik spreek geen Nederlands.', fr: 'Je ne parle pas néerlandais.' },
          { text: 'Dat is te duur.', fr: 'C\'est trop cher.' },
          { text: 'Ik heb geen geld.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'nl-straat', emoji: '🗺️', title: 'Op straat',
      steps: [
        line('B', 'Pardon, kunt u mij helpen?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'Ja, natuurlijk! Wat heeft u nodig?', 'Oui, bien sûr ! De quoi avez-vous besoin ?'),
        choice('Wat heeft u nodig?', 'De quoi avez-vous besoin ?', [
          { text: 'Weet u waar het treinstation is?', fr: 'Savez-vous où est la gare ?' },
          { text: 'Ik hou van Nederland.', fr: 'J\'adore les Pays-Bas.' },
          { text: 'Ik ben erg moe.', fr: 'Je suis très fatigué.' },
          { text: 'Het weer is mooi.', fr: 'Le temps est beau.' },
        ], 0),
        line('A', 'Ja, ga rechtdoor en sla dan rechts af.', 'Oui, allez tout droit puis tournez à droite.'),
        choice('Is het ver?', 'C\'est loin ?', [
          { text: 'Hoe lang duurt het lopen?', fr: 'Combien de temps faut-il à pied ?' },
          { text: 'Ik neem liever de bus.', fr: 'Je préfère prendre le bus.' },
          { text: 'Ik ben een toerist.', fr: 'Je suis touriste.' },
          { text: 'Ik houd niet van lopen.', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', 'Ongeveer zeven minuten lopen.', 'Environ sept minutes à pied.'),
        choice('Begrepen?', 'Vous avez compris ?', [
          { text: 'Ja, heel erg bedankt! Tot ziens!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'Het is te ver.', fr: 'C\'est trop loin.' },
          { text: 'Ik begrijp het niet.', fr: 'Je ne comprends pas.' },
          { text: 'Ik heb een kaart nodig.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  pl: [
    {
      id: 'pl-kawiarnia', emoji: '☕', title: 'W kawiarni',
      steps: [
        line('A', 'Dzień dobry! Czym mogę służyć?', 'Bonjour ! En quoi puis-je vous aider ?'),
        choice('Czym mogę służyć?', 'En quoi puis-je vous aider ?', [
          { text: 'Poproszę kawę z mlekiem.', fr: 'Je voudrais un café au lait, s\'il vous plaît.' },
          { text: 'Mam na imię Marek.', fr: 'Je m\'appelle Marek.' },
          { text: 'Pociąg się spóźnia.', fr: 'Le train est en retard.' },
          { text: 'Do widzenia!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Oczywiście. Czy życzy sobie pan/pani coś do jedzenia?', 'Bien sûr. Voulez-vous aussi manger quelque chose ?'),
        choice('Czy życzy sobie coś do jedzenia?', 'Voulez-vous manger quelque chose ?', [
          { text: 'Tak, poproszę rogalika.', fr: 'Oui, je voudrais un croissant, s\'il vous plaît.' },
          { text: 'Jest bardzo zimno dzisiaj.', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'Nie jestem głodny.', fr: 'Je n\'ai pas faim.' },
          { text: 'Gdzie jest toaleta?', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', 'To będzie jedenaście złotych.', 'Ça fait onze zlotys.'),
        choice('To będzie jedenaście złotych.', 'Ça fait onze zlotys.', [
          { text: 'Proszę bardzo. Dziękuję!', fr: 'Voilà. Merci !' },
          { text: 'Nie mówię po polsku.', fr: 'Je ne parle pas polonais.' },
          { text: 'To za drogo.', fr: 'C\'est trop cher.' },
          { text: 'Nie mam pieniędzy.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'pl-ulica', emoji: '🗺️', title: 'Na ulicy',
      steps: [
        line('B', 'Przepraszam, czy może mi pan/pani pomóc?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'Oczywiście! Czego potrzebuje pan/pani?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('Czego potrzebuje pan/pani?', 'De quoi avez-vous besoin ?', [
          { text: 'Czy wie pan/pani, gdzie jest apteka?', fr: 'Savez-vous où est la pharmacie ?' },
          { text: 'Lubię Polskę.', fr: 'J\'aime la Pologne.' },
          { text: 'Jestem bardzo zmęczony.', fr: 'Je suis très fatigué.' },
          { text: 'Ładna pogoda dzisiaj.', fr: 'Il fait beau aujourd\'hui.' },
        ], 0),
        line('A', 'Tak, proszę iść prosto, a potem skręcić w lewo.', 'Oui, allez tout droit puis tournez à gauche.'),
        choice('Czy to daleko?', 'C\'est loin ?', [
          { text: 'Ile czasu zajmie droga piechotą?', fr: 'Combien de temps faut-il à pied ?' },
          { text: 'Wolę jechać autobusem.', fr: 'Je préfère prendre le bus.' },
          { text: 'Jestem turystą.', fr: 'Je suis touriste.' },
          { text: 'Nie lubię chodzić pieszo.', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', 'Około pięciu minut pieszo.', 'Environ cinq minutes à pied.'),
        choice('Rozumie pan/pani?', 'Vous avez compris ?', [
          { text: 'Tak, bardzo dziękuję! Do widzenia!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'To za daleko.', fr: 'C\'est trop loin.' },
          { text: 'Nie rozumiem.', fr: 'Je ne comprends pas.' },
          { text: 'Potrzebuję mapy.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  tr: [
    {
      id: 'tr-kafe', emoji: '☕', title: 'Kafede',
      steps: [
        line('A', 'Günaydın! Ne istersiniz?', 'Bonjour ! Que désirez-vous ?'),
        choice('Ne istersiniz?', 'Que désirez-vous ?', [
          { text: 'Bir çay, lütfen.', fr: 'Un thé, s\'il vous plaît.' },
          { text: 'Adım Mehmet.', fr: 'Je m\'appelle Mehmet.' },
          { text: 'Tren geç kaldı.', fr: 'Le train est en retard.' },
          { text: 'Güle güle!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Tabii. Bir şey yemek ister misiniz?', 'Bien sûr. Voulez-vous aussi manger quelque chose ?'),
        choice('Bir şey yemek ister misiniz?', 'Voulez-vous aussi manger quelque chose ?', [
          { text: 'Evet, bir simit de alayım.', fr: 'Oui, je vais aussi prendre un simit.' },
          { text: 'Bugün çok soğuk.', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'Acıkmadım.', fr: 'Je n\'ai pas faim.' },
          { text: 'Tuvalet nerede?', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', 'Toplam yirmi beş lira.', 'Au total vingt-cinq liras.'),
        choice('Toplam yirmi beş lira.', 'Au total vingt-cinq liras.', [
          { text: 'Buyurun. Teşekkür ederim!', fr: 'Voilà. Merci !' },
          { text: 'Türkçe bilmiyorum.', fr: 'Je ne parle pas turc.' },
          { text: 'Çok pahalı.', fr: 'C\'est trop cher.' },
          { text: 'Param yok.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'tr-sokak', emoji: '🗺️', title: 'Sokakta',
      steps: [
        line('B', 'Affedersiniz, yardım edebilir misiniz?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'Tabii ki! Ne lazım?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('Ne lazım?', 'De quoi avez-vous besoin ?', [
          { text: 'En yakın metro istasyonu nerede?', fr: 'Où est la station de métro la plus proche ?' },
          { text: 'Türkiye\'yi seviyorum.', fr: 'J\'adore la Turquie.' },
          { text: 'Çok yorgunum.', fr: 'Je suis très fatigué.' },
          { text: 'Hava güzel.', fr: 'Il fait beau.' },
        ], 0),
        line('A', 'Evet, düz gidin ve sonra sola dönün.', 'Oui, allez tout droit puis tournez à gauche.'),
        choice('Uzak mı?', 'C\'est loin ?', [
          { text: 'Yürüyerek ne kadar sürer?', fr: 'Combien de temps faut-il à pied ?' },
          { text: 'Otobüsü tercih ederim.', fr: 'Je préfère le bus.' },
          { text: 'Turistim.', fr: 'Je suis touriste.' },
          { text: 'Yürümekten hoşlanmam.', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', 'Yürüyerek yaklaşık altı dakika.', 'Environ six minutes à pied.'),
        choice('Anladınız mı?', 'Vous avez compris ?', [
          { text: 'Evet, çok teşekkür ederim! Hoşça kalın!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'Çok uzak.', fr: 'C\'est trop loin.' },
          { text: 'Anlamadım.', fr: 'Je n\'ai pas compris.' },
          { text: 'Haritaya ihtiyacım var.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  ru: [
    {
      id: 'ru-kafe', emoji: '☕', title: 'В кафе',
      steps: [
        line('A', 'Добрый день! Что будете заказывать?', 'Bonjour ! Que voulez-vous commander ?'),
        choice('Что будете заказывать?', 'Que voulez-vous commander ?', [
          { text: 'Один кофе, пожалуйста.', fr: 'Un café, s\'il vous plaît.' },
          { text: 'Меня зовут Иван.', fr: 'Je m\'appelle Ivan.' },
          { text: 'Поезд опаздывает.', fr: 'Le train est en retard.' },
          { text: 'До свидания!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'Хорошо. Желаете что-нибудь поесть?', 'Bien. Voulez-vous manger quelque chose ?'),
        choice('Желаете что-нибудь поесть?', 'Voulez-vous manger quelque chose ?', [
          { text: 'Да, пожалуйста, кусочек торта.', fr: 'Oui, un morceau de gâteau, s\'il vous plaît.' },
          { text: 'Сегодня очень холодно.', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'Я не голоден.', fr: 'Je n\'ai pas faim.' },
          { text: 'Где туалет?', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', 'С вас триста рублей.', 'Ça fait trois cents roubles.'),
        choice('С вас триста рублей.', 'Ça fait trois cents roubles.', [
          { text: 'Вот, пожалуйста. Спасибо!', fr: 'Voilà. Merci !' },
          { text: 'Я не говорю по-русски.', fr: 'Je ne parle pas russe.' },
          { text: 'Это слишком дорого.', fr: 'C\'est trop cher.' },
          { text: 'У меня нет денег.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'ru-ulitsa', emoji: '🗺️', title: 'На улице',
      steps: [
        line('B', 'Извините, вы не могли бы мне помочь?', 'Excusez-moi, pourriez-vous m\'aider ?'),
        line('A', 'Конечно! Что вам нужно?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('Что вам нужно?', 'De quoi avez-vous besoin ?', [
          { text: 'Вы не знаете, где ближайшая аптека?', fr: 'Savez-vous où est la pharmacie la plus proche ?' },
          { text: 'Мне нравится Россия.', fr: 'J\'aime la Russie.' },
          { text: 'Я очень устал.', fr: 'Je suis très fatigué.' },
          { text: 'Хорошая погода сегодня.', fr: 'Il fait beau aujourd\'hui.' },
        ], 0),
        line('A', 'Да, идите прямо, потом поверните налево.', 'Oui, allez tout droit puis tournez à gauche.'),
        choice('Это далеко?', 'C\'est loin ?', [
          { text: 'Сколько минут идти пешком?', fr: 'Combien de minutes à pied ?' },
          { text: 'Я предпочитаю автобус.', fr: 'Je préfère le bus.' },
          { text: 'Я турист.', fr: 'Je suis touriste.' },
          { text: 'Я не люблю ходить пешком.', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', 'Около пяти минут пешком.', 'Environ cinq minutes à pied.'),
        choice('Понятно?', 'C\'est clair ?', [
          { text: 'Да, большое спасибо! До свидания!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'Это слишком далеко.', fr: 'C\'est trop loin.' },
          { text: 'Я не понимаю.', fr: 'Je ne comprends pas.' },
          { text: 'Мне нужна карта.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  ja: [
    {
      id: 'ja-kafe', emoji: '☕', title: 'カフェで',
      steps: [
        line('A', 'いらっしゃいませ！ご注文はお決まりですか？', 'Bienvenue ! Avez-vous choisi ?'),
        choice('ご注文はお決まりですか？', 'Avez-vous choisi ?', [
          { text: 'コーヒーをひとつお願いします。', fr: 'Un café, s\'il vous plaît.' },
          { text: '私の名前は田中です。', fr: 'Je m\'appelle Tanaka.' },
          { text: '電車が遅れています。', fr: 'Le train est en retard.' },
          { text: 'さようなら！', fr: 'Au revoir !' },
        ], 0),
        line('A', 'かしこまりました。お食事はいかがですか？', 'Bien sûr. Souhaitez-vous aussi manger quelque chose ?'),
        choice('お食事はいかがですか？', 'Souhaitez-vous manger quelque chose ?', [
          { text: 'はい、クロワッサンもください。', fr: 'Oui, un croissant aussi, s\'il vous plaît.' },
          { text: '今日はとても寒いです。', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'お腹が空いていません。', fr: 'Je n\'ai pas faim.' },
          { text: 'トイレはどこですか？', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', '合計で八百円になります。', 'Ça fait huit cents yens au total.'),
        choice('合計で八百円になります。', 'Ça fait huit cents yens.', [
          { text: 'はい、どうぞ。ありがとうございます！', fr: 'Voilà. Merci !' },
          { text: '日本語が話せません。', fr: 'Je ne parle pas japonais.' },
          { text: '高すぎます。', fr: 'C\'est trop cher.' },
          { text: 'お金がありません。', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'ja-michi', emoji: '🗺️', title: '道で',
      steps: [
        line('B', 'すみません、助けていただけますか？', 'Excusez-moi, pourriez-vous m\'aider ?'),
        line('A', 'もちろんです！何かお困りですか？', 'Bien sûr ! En quoi puis-je vous aider ?'),
        choice('何かお困りですか？', 'En quoi puis-je vous aider ?', [
          { text: '一番近い駅はどこですか？', fr: 'Où est la station la plus proche ?' },
          { text: '日本が好きです。', fr: 'J\'aime le Japon.' },
          { text: 'とても疲れました。', fr: 'Je suis très fatigué.' },
          { text: '今日はいい天気ですね。', fr: 'Il fait beau aujourd\'hui.' },
        ], 0),
        line('A', 'はい、まっすぐ行って、右に曲がってください。', 'Oui, allez tout droit puis tournez à droite.'),
        choice('遠いですか？', 'C\'est loin ?', [
          { text: '歩いて何分かかりますか？', fr: 'Combien de minutes à pied ?' },
          { text: 'バスの方が好きです。', fr: 'Je préfère le bus.' },
          { text: '私は観光客です。', fr: 'Je suis touriste.' },
          { text: '歩くのが好きではありません。', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', '歩いて約四分です。', 'Environ quatre minutes à pied.'),
        choice('わかりましたか？', 'Vous avez compris ?', [
          { text: 'はい、どうもありがとうございました！', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: '遠すぎます。', fr: 'C\'est trop loin.' },
          { text: 'わかりません。', fr: 'Je ne comprends pas.' },
          { text: '地図が必要です。', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  ko: [
    {
      id: 'ko-kape', emoji: '☕', title: '카페에서',
      steps: [
        line('A', '어서 오세요! 무엇을 드릴까요?', 'Bienvenue ! Que puis-je vous servir ?'),
        choice('무엇을 드릴까요?', 'Que puis-je vous servir ?', [
          { text: '아메리카노 한 잔 주세요.', fr: 'Un americano, s\'il vous plaît.' },
          { text: '제 이름은 민준이에요.', fr: 'Je m\'appelle Minjun.' },
          { text: '기차가 늦었어요.', fr: 'Le train est en retard.' },
          { text: '안녕히 가세요!', fr: 'Au revoir !' },
        ], 0),
        line('A', '네. 드실 것도 있으세요?', 'Oui. Voulez-vous aussi manger quelque chose ?'),
        choice('드실 것도 있으세요?', 'Voulez-vous aussi manger quelque chose ?', [
          { text: '네, 크루아상도 하나 주세요.', fr: 'Oui, un croissant aussi, s\'il vous plaît.' },
          { text: '오늘 정말 추워요.', fr: 'Il fait vraiment froid aujourd\'hui.' },
          { text: '배가 안 고파요.', fr: 'Je n\'ai pas faim.' },
          { text: '화장실이 어디에 있어요?', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', '총 오천 원입니다.', 'Ça fait cinq mille wons au total.'),
        choice('총 오천 원입니다.', 'Ça fait cinq mille wons.', [
          { text: '여기 있어요. 감사합니다!', fr: 'Voilà. Merci !' },
          { text: '한국어를 못 해요.', fr: 'Je ne parle pas coréen.' },
          { text: '너무 비싸요.', fr: 'C\'est trop cher.' },
          { text: '돈이 없어요.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'ko-geori', emoji: '🗺️', title: '길에서',
      steps: [
        line('B', '실례합니다, 도와주실 수 있어요?', 'Excusez-moi, pourriez-vous m\'aider ?'),
        line('A', '물론이죠! 무엇이 필요하세요?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('무엇이 필요하세요?', 'De quoi avez-vous besoin ?', [
          { text: '가장 가까운 지하철역이 어디에 있어요?', fr: 'Où est la station de métro la plus proche ?' },
          { text: '한국을 좋아해요.', fr: 'J\'aime la Corée.' },
          { text: '많이 피곤해요.', fr: 'Je suis très fatigué.' },
          { text: '오늘 날씨가 좋네요.', fr: 'Il fait beau aujourd\'hui.' },
        ], 0),
        line('A', '네, 직진하다가 왼쪽으로 돌아가세요.', 'Oui, allez tout droit puis tournez à gauche.'),
        choice('멀어요?', 'C\'est loin ?', [
          { text: '걸어서 몇 분 걸려요?', fr: 'Combien de minutes à pied ?' },
          { text: '버스 타는 게 더 좋아요.', fr: 'Je préfère prendre le bus.' },
          { text: '저는 관광객이에요.', fr: 'Je suis touriste.' },
          { text: '걷는 것을 좋아하지 않아요.', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', '걸어서 약 오 분이에요.', 'Environ cinq minutes à pied.'),
        choice('이해했어요?', 'Vous avez compris ?', [
          { text: '네, 정말 감사합니다! 안녕히 계세요!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: '너무 멀어요.', fr: 'C\'est trop loin.' },
          { text: '이해 못 했어요.', fr: 'Je n\'ai pas compris.' },
          { text: '지도가 필요해요.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  zh: [
    {
      id: 'zh-kafei', emoji: '☕', title: '在咖啡馆',
      steps: [
        line('A', '你好！请问要点什么？', 'Bonjour ! Que désirez-vous commander ?'),
        choice('请问要点什么？', 'Que désirez-vous commander ?', [
          { text: '请给我一杯咖啡。', fr: 'Un café, s\'il vous plaît.' },
          { text: '我叫李明。', fr: 'Je m\'appelle Li Ming.' },
          { text: '火车晚点了。', fr: 'Le train est en retard.' },
          { text: '再见！', fr: 'Au revoir !' },
        ], 0),
        line('A', '好的。您还需要吃点什么吗？', 'Bien. Voulez-vous aussi manger quelque chose ?'),
        choice('您还需要吃点什么吗？', 'Voulez-vous aussi manger quelque chose ?', [
          { text: '是的，再来一个可颂。', fr: 'Oui, un croissant aussi, s\'il vous plaît.' },
          { text: '今天非常冷。', fr: 'Il fait très froid aujourd\'hui.' },
          { text: '我不饿。', fr: 'Je n\'ai pas faim.' },
          { text: '洗手间在哪里？', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', '一共三十五元。', 'Ça fait trente-cinq yuans au total.'),
        choice('一共三十五元。', 'Ça fait trente-cinq yuans.', [
          { text: '给您。谢谢！', fr: 'Voilà. Merci !' },
          { text: '我不会说中文。', fr: 'Je ne parle pas chinois.' },
          { text: '太贵了。', fr: 'C\'est trop cher.' },
          { text: '我没有钱。', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'zh-jietou', emoji: '🗺️', title: '在街上',
      steps: [
        line('B', '打扰一下，您能帮我吗？', 'Excusez-moi, pourriez-vous m\'aider ?'),
        line('A', '当然可以！您需要什么？', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('您需要什么？', 'De quoi avez-vous besoin ?', [
          { text: '请问最近的地铁站在哪里？', fr: 'Où est la station de métro la plus proche ?' },
          { text: '我喜欢中国。', fr: 'J\'aime la Chine.' },
          { text: '我很累。', fr: 'Je suis très fatigué.' },
          { text: '今天天气很好。', fr: 'Il fait beau aujourd\'hui.' },
        ], 0),
        line('A', '一直走，然后左转。', 'Allez tout droit, puis tournez à gauche.'),
        choice('远吗？', 'C\'est loin ?', [
          { text: '步行需要多少分钟？', fr: 'Combien de minutes à pied ?' },
          { text: '我更喜欢坐公共汽车。', fr: 'Je préfère le bus.' },
          { text: '我是游客。', fr: 'Je suis touriste.' },
          { text: '我不喜欢走路。', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', '大约步行五分钟。', 'Environ cinq minutes à pied.'),
        choice('明白了吗？', 'Vous avez compris ?', [
          { text: '明白了，非常感谢！再见！', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: '太远了。', fr: 'C\'est trop loin.' },
          { text: '我听不懂。', fr: 'Je ne comprends pas.' },
          { text: '我需要一张地图。', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  ar: [
    {
      id: 'ar-maqha', emoji: '☕', title: 'في المقهى',
      steps: [
        line('A', 'صباح الخير! ماذا تريد أن تطلب؟', 'Bonjour ! Que voulez-vous commander ?'),
        choice('ماذا تريد أن تطلب؟', 'Que voulez-vous commander ?', [
          { text: 'أريد قهوة من فضلك.', fr: 'Je voudrais un café, s\'il vous plaît.' },
          { text: 'اسمي محمد.', fr: 'Je m\'appelle Mohammed.' },
          { text: 'القطار متأخر.', fr: 'Le train est en retard.' },
          { text: 'مع السلامة!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'بكل سرور. هل تريد أيضاً شيئاً تأكله؟', 'Avec plaisir. Voulez-vous aussi manger quelque chose ?'),
        choice('هل تريد أيضاً شيئاً تأكله؟', 'Voulez-vous aussi manger quelque chose ?', [
          { text: 'نعم، كرواسون من فضلك.', fr: 'Oui, un croissant s\'il vous plaît.' },
          { text: 'الطقس بارد جداً اليوم.', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'لست جائعاً.', fr: 'Je n\'ai pas faim.' },
          { text: 'أين الحمام؟', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', 'المجموع خمسة وعشرون درهماً.', 'Le total est de vingt-cinq dirhams.'),
        choice('المجموع خمسة وعشرون درهماً.', 'Le total est de vingt-cinq dirhams.', [
          { text: 'تفضل. شكراً جزيلاً!', fr: 'Voilà. Merci beaucoup !' },
          { text: 'لا أتكلم العربية.', fr: 'Je ne parle pas arabe.' },
          { text: 'هذا غالٍ جداً.', fr: 'C\'est trop cher.' },
          { text: 'لا أملك نقوداً.', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'ar-sharia', emoji: '🗺️', title: 'في الشارع',
      steps: [
        line('B', 'عفواً، هل يمكنك مساعدتي؟', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'بالتأكيد! ماذا تحتاج؟', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('ماذا تحتاج؟', 'De quoi avez-vous besoin ?', [
          { text: 'هل تعرف أين أقرب محطة مترو؟', fr: 'Savez-vous où est la station de métro la plus proche ?' },
          { text: 'أنا أحب العالم العربي.', fr: 'J\'aime le monde arabe.' },
          { text: 'أنا متعب جداً.', fr: 'Je suis très fatigué.' },
          { text: 'الجو جميل اليوم.', fr: 'Il fait beau aujourd\'hui.' },
        ], 0),
        line('A', 'نعم، اذهب مباشرة ثم اتجه يساراً.', 'Oui, allez tout droit puis tournez à gauche.'),
        choice('هل هو بعيد؟', 'C\'est loin ?', [
          { text: 'كم دقيقة مشياً؟', fr: 'Combien de minutes à pied ?' },
          { text: 'أفضل أخذ الحافلة.', fr: 'Je préfère prendre le bus.' },
          { text: 'أنا سائح.', fr: 'Je suis touriste.' },
          { text: 'لا أحب المشي.', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', 'حوالي خمس دقائق مشياً.', 'Environ cinq minutes à pied.'),
        choice('هل فهمت؟', 'Vous avez compris ?', [
          { text: 'نعم، شكراً جزيلاً! مع السلامة!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'هذا بعيد جداً.', fr: 'C\'est trop loin.' },
          { text: 'لم أفهم.', fr: 'Je n\'ai pas compris.' },
          { text: 'أحتاج إلى خريطة.', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

  hi: [
    {
      id: 'hi-cafe', emoji: '☕', title: 'कैफ़े में',
      steps: [
        line('A', 'नमस्ते! आप क्या लेंगे?', 'Bonjour ! Que prendrez-vous ?'),
        choice('आप क्या लेंगे?', 'Que prendrez-vous ?', [
          { text: 'एक चाय देना, कृपया।', fr: 'Un thé, s\'il vous plaît.' },
          { text: 'मेरा नाम राज है।', fr: 'Je m\'appelle Raj.' },
          { text: 'ट्रेन देर से आ रही है।', fr: 'Le train est en retard.' },
          { text: 'अलविदा!', fr: 'Au revoir !' },
        ], 0),
        line('A', 'ज़रूर। कुछ खाना भी चाहिए?', 'Bien sûr. Voulez-vous aussi manger quelque chose ?'),
        choice('कुछ खाना भी चाहिए?', 'Voulez-vous aussi manger quelque chose ?', [
          { text: 'हाँ, एक समोसा भी दे दो।', fr: 'Oui, un samosa aussi, s\'il vous plaît.' },
          { text: 'आज बहुत ठंड है।', fr: 'Il fait très froid aujourd\'hui.' },
          { text: 'मुझे भूख नहीं है।', fr: 'Je n\'ai pas faim.' },
          { text: 'टॉयलेट कहाँ है?', fr: 'Où sont les toilettes ?' },
        ], 0),
        line('A', 'कुल मिलाकर पचास रुपए होंगे।', 'Ça fait cinquante roupies au total.'),
        choice('कुल मिलाकर पचास रुपए होंगे।', 'Ça fait cinquante roupies.', [
          { text: 'लीजिए। बहुत धन्यवाद!', fr: 'Voilà. Merci beaucoup !' },
          { text: 'मुझे हिंदी नहीं आती।', fr: 'Je ne parle pas hindi.' },
          { text: 'यह बहुत महँगा है।', fr: 'C\'est trop cher.' },
          { text: 'मेरे पास पैसे नहीं हैं।', fr: 'Je n\'ai pas d\'argent.' },
        ], 0),
      ],
    },
    {
      id: 'hi-sadak', emoji: '🗺️', title: 'सड़क पर',
      steps: [
        line('B', 'माफ़ कीजिए, क्या आप मेरी मदद कर सकते हैं?', 'Excusez-moi, pouvez-vous m\'aider ?'),
        line('A', 'ज़रूर! आपको क्या चाहिए?', 'Bien sûr ! De quoi avez-vous besoin ?'),
        choice('आपको क्या चाहिए?', 'De quoi avez-vous besoin ?', [
          { text: 'सबसे पास का मेट्रो स्टेशन कहाँ है?', fr: 'Où est la station de métro la plus proche ?' },
          { text: 'मुझे भारत पसंद है।', fr: 'J\'aime l\'Inde.' },
          { text: 'मैं बहुत थका हुआ हूँ।', fr: 'Je suis très fatigué.' },
          { text: 'आज मौसम अच्छा है।', fr: 'Il fait beau aujourd\'hui.' },
        ], 0),
        line('A', 'हाँ, सीधे जाइए और फिर बाईं ओर मुड़ जाइए।', 'Oui, allez tout droit puis tournez à gauche.'),
        choice('क्या यह दूर है?', 'C\'est loin ?', [
          { text: 'पैदल चलने में कितना समय लगेगा?', fr: 'Combien de temps faut-il à pied ?' },
          { text: 'मैं बस लेना पसंद करूँगा।', fr: 'Je préfère prendre le bus.' },
          { text: 'मैं पर्यटक हूँ।', fr: 'Je suis touriste.' },
          { text: 'मुझे चलना पसंद नहीं।', fr: 'Je n\'aime pas marcher.' },
        ], 0),
        line('A', 'पैदल लगभग पाँच मिनट।', 'Environ cinq minutes à pied.'),
        choice('समझ गए?', 'Vous avez compris ?', [
          { text: 'हाँ, बहुत-बहुत धन्यवाद! नमस्ते!', fr: 'Oui, merci beaucoup ! Au revoir !' },
          { text: 'यह बहुत दूर है।', fr: 'C\'est trop loin.' },
          { text: 'मुझे समझ नहीं आया।', fr: 'Je n\'ai pas compris.' },
          { text: 'मुझे नक्शे की ज़रूरत है।', fr: 'J\'ai besoin d\'une carte.' },
        ], 0),
      ],
    },
  ],

}

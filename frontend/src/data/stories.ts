export interface StoryToken {
  text: string     // mot dans la langue cible
  fr: string       // traduction française (vide pour la ponctuation)
  punct?: boolean  // ponctuation, non cliquable
}

export interface Story {
  id: string
  emoji: string
  title_fr: string
  level: 1 | 2 | 3
  tokens: StoryToken[]
}

const w = (text: string, fr: string): StoryToken => ({ text, fr })
const p = (text: string): StoryToken => ({ text, fr: '', punct: true })

export const STORIES: Record<string, Story[]> = {

  es: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Lucía','Lucie'), w('entra','entre'), w('en','dans'), w('la','la'), w('cafetería','cafétéria'), p('.'),
        w('Se','elle'), w('sienta','s\'assoit'), w('en','à'), w('una','une'), w('mesa','table'), w('junto','près'), w('a','de'), w('la','la'), w('ventana','fenêtre'), p('.'),
        w('El','le'), w('camarero','serveur'), w('llega','arrive'), w('y','et'), w('sonríe','sourit'), p('.'),
        w('Quisiera','je voudrais'), w('un','un'), w('café','café'), w('y','et'), w('un','un'), w('croissant','croissant'), p(','), w('por favor','s\'il vous plaît'), p('.'),
        w('Ella','elle'), w('bebe','boit'), w('su','son'), w('café','café'), w('despacio','lentement'), w('y','et'), w('sonríe','sourit'), p('.'),
      ]
    },
    {
      id: 'parque', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Carlos','Carlos'), w('pasea','se promène'), w('por','dans'), w('el','le'), w('parque','parc'), w('con','avec'), w('su','son'), w('perro','chien'), p('.'),
        w('Los','les'), w('niños','enfants'), w('juegan','jouent'), w('en','dans'), w('la','la'), w('hierba','herbe'), p('.'),
        w('El','le'), w('cielo','ciel'), w('está','est'), w('azul','bleu'), w('y','et'), w('hace','il fait'), w('calor','chaud'), p('.'),
        w('Carlos','Carlos'), w('se sienta','s\'assoit'), w('en','sur'), w('un','un'), w('banco','banc'), w('y','et'), w('descansa','se repose'), p('.'),
      ]
    },
    {
      id: 'mercado', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Ana','Ana'), w('va','va'), w('al','au'), w('mercado','marché'), w('cada','chaque'), w('mañana','matin'), p('.'),
        w('Compra','elle achète'), w('frutas','fruits'), p(','), w('verduras','légumes'), w('y','et'), w('pan','pain'), w('fresco','frais'), p('.'),
        w('El','le'), w('vendedor','vendeur'), w('le','lui'), w('da','donne'), w('las','les'), w('manzanas','pommes'), w('más rojas','les plus rouges'), p('.'),
        w('Ana','Ana'), w('regresa','rentre'), w('a','chez'), w('casa','elle'), w('contenta','contente'), p('.'),
      ]
    },
  ],

  en: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Sofia','Sofia'), w('walks','entre'), w('into','dans'), w('the','le'), w('café','café'), p('.'),
        w('She','elle'), w('sits','s\'assoit'), w('at','à'), w('a','une'), w('table','table'), w('by','près de'), w('the','la'), w('window','fenêtre'), p('.'),
        w('The','le'), w('waiter','serveur'), w('comes','arrive'), w('and','et'), w('smiles','sourit'), p('.'),
        w('I\'d like','je voudrais'), w('a','un'), w('coffee','café'), w('and','et'), w('a','un'), w('croissant','croissant'), p(','), w('please','s\'il vous plaît'), p('.'),
        w('She','elle'), w('sips','boit'), w('her','son'), w('coffee','café'), w('slowly','lentement'), w('and','et'), w('smiles','sourit'), p('.'),
      ]
    },
    {
      id: 'park', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Tom','Tom'), w('walks','se promène'), w('in','dans'), w('the','le'), w('park','parc'), w('with','avec'), w('his','son'), w('dog','chien'), p('.'),
        w('Children','des enfants'), w('play','jouent'), w('on','dans'), w('the','la'), w('grass','herbe'), p('.'),
        w('The','le'), w('sky','ciel'), w('is','est'), w('blue','bleu'), w('and','et'), w('the','le'), w('sun','soleil'), w('shines','brille'), p('.'),
        w('Tom','Tom'), w('sits','s\'assoit'), w('on','sur'), w('a','un'), w('bench','banc'), w('and','et'), w('rests','se repose'), p('.'),
      ]
    },
    {
      id: 'market', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Anna','Anna'), w('goes','va'), w('to','au'), w('the','le'), w('market','marché'), w('every','chaque'), w('morning','matin'), p('.'),
        w('She','elle'), w('buys','achète'), w('fruits','fruits'), p(','), w('vegetables','légumes'), w('and','et'), w('fresh','frais'), w('bread','pain'), p('.'),
        w('The','le'), w('seller','vendeur'), w('gives','donne'), w('her','lui'), w('the','les'), w('reddest','les plus rouges'), w('apples','pommes'), p('.'),
        w('Anna','Anna'), w('goes','rentre'), w('home','chez elle'), w('happy','contente'), p('.'),
      ]
    },
  ],

  de: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Maria','Maria'), w('betritt','entre dans'), w('das','le'), w('Café','café'), p('.'),
        w('Sie','elle'), w('setzt sich','s\'assoit'), w('an','à'), w('einen','une'), w('Tisch','table'), w('am','près de la'), w('Fenster','fenêtre'), p('.'),
        w('Der','le'), w('Kellner','serveur'), w('kommt','arrive'), w('und','et'), w('lächelt','sourit'), p('.'),
        w('Ich hätte gerne','je voudrais'), w('einen','un'), w('Kaffee','café'), w('und','et'), w('ein','un'), w('Croissant','croissant'), p(','), w('bitte','s\'il vous plaît'), p('.'),
        w('Sie','elle'), w('trinkt','boit'), w('ihren','son'), w('Kaffee','café'), w('langsam','lentement'), w('und','et'), w('lächelt','sourit'), p('.'),
      ]
    },
    {
      id: 'park', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Felix','Felix'), w('spaziert','se promène'), w('im','dans le'), w('Park','parc'), w('mit','avec'), w('seinem','son'), w('Hund','chien'), p('.'),
        w('Kinder','des enfants'), w('spielen','jouent'), w('auf','dans'), w('dem','la'), w('Rasen','herbe'), p('.'),
        w('Der','le'), w('Himmel','ciel'), w('ist','est'), w('blau','bleu'), w('und','et'), w('die','le'), w('Sonne','soleil'), w('scheint','brille'), p('.'),
        w('Felix','Felix'), w('setzt sich','s\'assoit'), w('auf','sur'), w('eine','un'), w('Bank','banc'), w('und','et'), w('erholt sich','se repose'), p('.'),
      ]
    },
    {
      id: 'markt', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Laura','Laura'), w('geht','va'), w('jeden','chaque'), w('Morgen','matin'), w('auf','au'), w('den','le'), w('Markt','marché'), p('.'),
        w('Sie','elle'), w('kauft','achète'), w('Obst','fruits'), p(','), w('Gemüse','légumes'), w('und','et'), w('frisches','frais'), w('Brot','pain'), p('.'),
        w('Der','le'), w('Händler','vendeur'), w('gibt','donne'), w('ihr','lui'), w('die','les'), w('rötesten','les plus rouges'), w('Äpfel','pommes'), p('.'),
        w('Laura','Laura'), w('geht','rentre'), w('zufrieden','contente'), w('nach Hause','chez elle'), p('.'),
      ]
    },
  ],

  it: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Giulia','Giulia'), w('entra','entre dans'), w('nel','dans le'), w('bar','café'), p('.'),
        w('Si siede','elle s\'assoit'), w('a','à'), w('un','une'), w('tavolo','table'), w('vicino','près de'), w('alla','la'), w('finestra','fenêtre'), p('.'),
        w('Il','le'), w('cameriere','serveur'), w('arriva','arrive'), w('e','et'), w('sorride','sourit'), p('.'),
        w('Vorrei','je voudrais'), w('un','un'), w('caffè','café'), w('e','et'), w('un','un'), w('croissant','croissant'), p(','), w('per favore','s\'il vous plaît'), p('.'),
        w('Lei','elle'), w('beve','boit'), w('il','son'), w('caffè','café'), w('lentamente','lentement'), w('e','et'), w('sorride','sourit'), p('.'),
      ]
    },
    {
      id: 'parco', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Marco','Marco'), w('passeggia','se promène'), w('nel','dans le'), w('parco','parc'), w('con','avec'), w('il suo','son'), w('cane','chien'), p('.'),
        w('I bambini','les enfants'), w('giocano','jouent'), w('sull\'erba','dans l\'herbe'), p('.'),
        w('Il','le'), w('cielo','ciel'), w('è','est'), w('blu','bleu'), w('e','et'), w('il','le'), w('sole','soleil'), w('splende','brille'), p('.'),
        w('Marco','Marco'), w('si siede','s\'assoit'), w('su','sur'), w('una','un'), w('panchina','banc'), w('e','et'), w('si riposa','se repose'), p('.'),
      ]
    },
    {
      id: 'mercato', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Sofia','Sofia'), w('va','va'), w('al','au'), w('mercato','marché'), w('ogni','chaque'), w('mattina','matin'), p('.'),
        w('Compra','elle achète'), w('frutta','fruits'), p(','), w('verdura','légumes'), w('e','et'), w('pane','pain'), w('fresco','frais'), p('.'),
        w('Il','le'), w('venditore','vendeur'), w('le','lui'), w('dà','donne'), w('le mele','les pommes'), w('più rosse','les plus rouges'), p('.'),
        w('Sofia','Sofia'), w('torna','rentre'), w('a casa','chez elle'), w('contenta','contente'), p('.'),
      ]
    },
  ],

  pt: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Mariana','Mariana'), w('entra','entre dans'), w('no','dans le'), w('café','café'), p('.'),
        w('Ela','elle'), w('senta','s\'assoit'), w('numa','à une'), w('mesa','table'), w('perto','près de'), w('da','la'), w('janela','fenêtre'), p('.'),
        w('O','le'), w('garçom','serveur'), w('chega','arrive'), w('e','et'), w('sorri','sourit'), p('.'),
        w('Queria','je voudrais'), w('um','un'), w('café','café'), w('e','et'), w('um','un'), w('croissant','croissant'), p(','), w('por favor','s\'il vous plaît'), p('.'),
        w('Ela','elle'), w('bebe','boit'), w('o','son'), w('café','café'), w('devagar','lentement'), w('e','et'), w('sorri','sourit'), p('.'),
      ]
    },
    {
      id: 'parque', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Pedro','Pedro'), w('passeia','se promène'), w('no','dans le'), w('parque','parc'), w('com','avec'), w('o seu','son'), w('cão','chien'), p('.'),
        w('As crianças','les enfants'), w('brincam','jouent'), w('na','dans la'), w('relva','herbe'), p('.'),
        w('O','le'), w('céu','ciel'), w('está','est'), w('azul','bleu'), w('e','et'), w('faz','il fait'), w('calor','chaud'), p('.'),
        w('Pedro','Pedro'), w('senta-se','s\'assoit'), w('num','sur un'), w('banco','banc'), w('e','et'), w('descansa','se repose'), p('.'),
      ]
    },
    {
      id: 'mercado', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Ana','Ana'), w('vai','va'), w('ao','au'), w('mercado','marché'), w('todas as manhãs','chaque matin'), p('.'),
        w('Compra','elle achète'), w('frutas','fruits'), p(','), w('legumes','légumes'), w('e','et'), w('pão','pain'), w('fresco','frais'), p('.'),
        w('O','le'), w('vendedor','vendeur'), w('dá-lhe','lui donne'), w('as','les'), w('maçãs','pommes'), w('mais vermelhas','les plus rouges'), p('.'),
        w('Ana','Ana'), w('regressa','rentre'), w('a casa','chez elle'), w('feliz','contente'), p('.'),
      ]
    },
  ],

  nl: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Emma','Emma'), w('stapt','entre'), w('het','le'), w('café','café'), w('binnen','dans'), p('.'),
        w('Ze','elle'), w('gaat','va'), w('zitten','s\'asseoir'), w('aan','à'), w('een','une'), w('tafel','table'), w('bij','près de'), w('het','la'), w('raam','fenêtre'), p('.'),
        w('De','le'), w('ober','serveur'), w('komt','arrive'), w('en','et'), w('glimlacht','sourit'), p('.'),
        w('Ik wil graag','je voudrais'), w('een','un'), w('koffie','café'), w('en','et'), w('een','un'), w('croissant','croissant'), p(','), w('alstublieft','s\'il vous plaît'), p('.'),
        w('Ze','elle'), w('drinkt','boit'), w('haar','son'), w('koffie','café'), w('langzaam','lentement'), w('en','et'), w('glimlacht','sourit'), p('.'),
      ]
    },
    {
      id: 'park', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Lars','Lars'), w('wandelt','se promène'), w('in','dans'), w('het','le'), w('park','parc'), w('met','avec'), w('zijn','son'), w('hond','chien'), p('.'),
        w('Kinderen','des enfants'), w('spelen','jouent'), w('op','dans'), w('het','la'), w('gras','herbe'), p('.'),
        w('De','le'), w('lucht','ciel'), w('is','est'), w('blauw','bleu'), w('en','et'), w('de','le'), w('zon','soleil'), w('schijnt','brille'), p('.'),
        w('Lars','Lars'), w('zit','s\'assoit'), w('op','sur'), w('een','un'), w('bankje','banc'), w('en','et'), w('rust uit','se repose'), p('.'),
      ]
    },
    {
      id: 'markt', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Lena','Lena'), w('gaat','va'), w('elke','chaque'), w('ochtend','matin'), w('naar','au'), w('de','le'), w('markt','marché'), p('.'),
        w('Ze','elle'), w('koopt','achète'), w('fruit','fruits'), p(','), w('groenten','légumes'), w('en','et'), w('vers','frais'), w('brood','pain'), p('.'),
        w('De','le'), w('verkoper','vendeur'), w('geeft','donne'), w('haar','lui'), w('de','les'), w('roodste','les plus rouges'), w('appels','pommes'), p('.'),
        w('Lena','Lena'), w('gaat','rentre'), w('tevreden','contente'), w('naar huis','chez elle'), p('.'),
      ]
    },
  ],

  pl: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Kasia','Kasia'), w('wchodzi','entre dans'), w('do','dans le'), w('kawiarni','café'), p('.'),
        w('Siada','elle s\'assoit'), w('przy','à'), w('stoliku','table'), w('przy','près de'), w('oknie','fenêtre'), p('.'),
        w('Kelner','le serveur'), w('podchodzi','arrive'), w('i','et'), w('uśmiecha się','sourit'), p('.'),
        w('Poproszę','je voudrais'), w('kawę','café'), w('i','et'), w('croissanta','croissant'), p(','), w('proszę','s\'il vous plaît'), p('.'),
        w('Ona','elle'), w('pije','boit'), w('kawę','café'), w('powoli','lentement'), w('i','et'), w('uśmiecha się','sourit'), p('.'),
      ]
    },
    {
      id: 'park', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Marek','Marek'), w('spaceruje','se promène'), w('w','dans'), w('parku','parc'), w('z','avec'), w('psem','chien'), p('.'),
        w('Dzieci','les enfants'), w('bawią się','jouent'), w('na','dans la'), w('trawie','herbe'), p('.'),
        w('Niebo','le ciel'), w('jest','est'), w('niebieskie','bleu'), w('i','et'), w('słońce','le soleil'), w('świeci','brille'), p('.'),
        w('Marek','Marek'), w('siada','s\'assoit'), w('na','sur'), w('ławce','banc'), w('i','et'), w('odpoczywa','se repose'), p('.'),
      ]
    },
    {
      id: 'rynek', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Ania','Ania'), w('chodzi','va'), w('na','au'), w('rynek','marché'), w('każdego','chaque'), w('ranka','matin'), p('.'),
        w('Kupuje','elle achète'), w('owoce','fruits'), p(','), w('warzywa','légumes'), w('i','et'), w('świeży','frais'), w('chleb','pain'), p('.'),
        w('Sprzedawca','le vendeur'), w('daje','donne'), w('jej','lui'), w('najczerwoniejsze','les plus rouges'), w('jabłka','pommes'), p('.'),
        w('Ania','Ania'), w('wraca','rentre'), w('do domu','chez elle'), w('zadowolona','contente'), p('.'),
      ]
    },
  ],

  tr: [
    {
      id: 'kafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Ayşe','Ayşe'), w('kafeye','dans le café'), w('girer','entre'), p('.'),
        w('Pencere','fenêtre'), w('kenarındaki','près de la'), w('bir masaya','une table'), w('oturur','s\'assoit'), p('.'),
        w('Garson','le serveur'), w('gelir','arrive'), w('ve','et'), w('gülümser','sourit'), p('.'),
        w('Bir','un'), w('kahve','café'), w('ve','et'), w('bir','un'), w('kruasan','croissant'), w('istiyorum','je voudrais'), p(','), w('lütfen','s\'il vous plaît'), p('.'),
        w('Kahvesini','son café'), w('yavaşça','lentement'), w('içer','boit'), w('ve','et'), w('gülümser','sourit'), p('.'),
      ]
    },
    {
      id: 'park', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Can','Can'), w('köpeğiyle','avec son chien'), w('parkta','dans le parc'), w('yürür','se promène'), p('.'),
        w('Çocuklar','les enfants'), w('çimenlerde','dans l\'herbe'), w('oynar','jouent'), p('.'),
        w('Gökyüzü','le ciel'), w('mavi','bleu'), w('ve','et'), w('güneş','le soleil'), w('parlıyor','brille'), p('.'),
        w('Can','Can'), w('bir bankta','sur un banc'), w('oturur','s\'assoit'), w('ve','et'), w('dinlenir','se repose'), p('.'),
      ]
    },
    {
      id: 'pazar', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Fatma','Fatma'), w('her sabah','chaque matin'), w('pazara','au marché'), w('gider','va'), p('.'),
        w('Meyve','fruits'), p(','), w('sebze','légumes'), w('ve','et'), w('taze','frais'), w('ekmek','pain'), w('alır','achète'), p('.'),
        w('Satıcı','le vendeur'), w('ona','lui'), w('en kırmızı','les plus rouges'), w('elmaları','pommes'), w('verir','donne'), p('.'),
        w('Fatma','Fatma'), w('mutlu','contente'), w('şekilde','avec joie'), w('eve','chez elle'), w('döner','rentre'), p('.'),
      ]
    },
  ],

  ru: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('Маша','Masha'), w('входит','entre dans'), w('в','dans'), w('кафе','café'), p('.'),
        w('Она','elle'), w('садится','s\'assoit'), w('за столик','à une table'), w('у','près de'), w('окна','fenêtre'), p('.'),
        w('Официант','le serveur'), w('подходит','arrive'), w('и','et'), w('улыбается','sourit'), p('.'),
        w('Мне хотелось бы','je voudrais'), w('кофе','café'), w('и','et'), w('круассан','croissant'), p(','), w('пожалуйста','s\'il vous plaît'), p('.'),
        w('Она','elle'), w('пьёт','boit'), w('кофе','café'), w('медленно','lentement'), w('и','et'), w('улыбается','sourit'), p('.'),
      ]
    },
    {
      id: 'park', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('Антон','Anton'), w('гуляет','se promène'), w('в','dans'), w('парке','parc'), w('с','avec'), w('собакой','chien'), p('.'),
        w('Дети','les enfants'), w('играют','jouent'), w('на','dans la'), w('траве','herbe'), p('.'),
        w('Небо','le ciel'), w('голубое','bleu'), w('и','et'), w('солнце','le soleil'), w('светит','brille'), p('.'),
        w('Антон','Anton'), w('садится','s\'assoit'), w('на','sur'), w('скамейку','banc'), w('и','et'), w('отдыхает','se repose'), p('.'),
      ]
    },
    {
      id: 'rynok', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('Наташа','Natasha'), w('ходит','va'), w('на','au'), w('рынок','marché'), w('каждое','chaque'), w('утро','matin'), p('.'),
        w('Она','elle'), w('покупает','achète'), w('фрукты','fruits'), p(','), w('овощи','légumes'), w('и','et'), w('свежий','frais'), w('хлеб','pain'), p('.'),
        w('Продавец','le vendeur'), w('даёт','donne'), w('ей','lui'), w('самые красные','les plus rouges'), w('яблоки','pommes'), p('.'),
        w('Наташа','Natasha'), w('возвращается','rentre'), w('домой','chez elle'), w('довольная','contente'), p('.'),
      ]
    },
  ],

  ja: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('さくら','Sakura'), w('は','(sujet)'), w('カフェ','café'), w('に','(direction)'), w('入ります','entre dans'), p('。'),
        w('窓','fenêtre'), w('の近く','près de'), w('の','(particule)'), w('テーブル','table'), w('に','à'), w('座ります','s\'assoit'), p('。'),
        w('ウェイター','serveur'), w('が','(sujet)'), w('来て','arrive'), w('微笑みます','sourit'), p('。'),
        w('コーヒー','café'), w('と','et'), w('クロワッサン','croissant'), w('を','(objet)'), w('ください','s\'il vous plaît'), p('。'),
        w('ゆっくり','lentement'), w('コーヒー','café'), w('を','(objet)'), w('飲んで','boit'), w('微笑みます','sourit'), p('。'),
      ]
    },
    {
      id: 'kouen', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('けんじ','Kenji'), w('は','(sujet)'), w('犬','chien'), w('と','avec'), w('公園','parc'), w('を','(objet)'), w('散歩します','se promène'), p('。'),
        w('子どもたち','les enfants'), w('が','(sujet)'), w('芝生','herbe'), w('で','dans'), w('遊んでいます','jouent'), p('。'),
        w('空','ciel'), w('は','(particule)'), w('青い','bleu'), w('し','et'), w('太陽','soleil'), w('が','(sujet)'), w('輝いています','brille'), p('。'),
        w('けんじ','Kenji'), w('は','(particule)'), w('ベンチ','banc'), w('に','sur'), w('座って','s\'assoit'), w('休みます','se repose'), p('。'),
      ]
    },
    {
      id: 'ichiba', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('はなこ','Hanako'), w('は','(particule)'), w('毎朝','chaque matin'), w('市場','marché'), w('に','(direction)'), w('行きます','va'), p('。'),
        w('くだもの','fruits'), w('と','et'), w('やさい','légumes'), w('と','et'), w('新鮮な','frais'), w('パン','pain'), w('を','(objet)'), w('買います','achète'), p('。'),
        w('売り手','vendeur'), w('が','(sujet)'), w('一番赤い','les plus rouges'), w('りんご','pommes'), w('をくれます','donne'), p('。'),
        w('はなこ','Hanako'), w('は','(particule)'), w('満足して','contente'), w('家に帰ります','rentre chez elle'), p('。'),
      ]
    },
  ],

  ko: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('지민','Jimin'), w('이','(sujet)'), w('카페에','dans le café'), w('들어갑니다','entre'), p('.'),
        w('창가','près de la fenêtre'), w('테이블에','à la table'), w('앉습니다','s\'assoit'), p('.'),
        w('웨이터가','le serveur'), w('와서','arrive et'), w('웃습니다','sourit'), p('.'),
        w('커피','café'), w('한 잔','une tasse de'), w('하고','et'), w('크루아상','croissant'), w('주세요','s\'il vous plaît'), p('.'),
        w('천천히','lentement'), w('커피를','café'), w('마시며','boit'), w('웃습니다','sourit'), p('.'),
      ]
    },
    {
      id: 'gongwon', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('준호','Junho'), w('는','(particule)'), w('강아지와','avec son chien'), w('공원에서','dans le parc'), w('산책합니다','se promène'), p('.'),
        w('아이들이','les enfants'), w('잔디밭에서','dans l\'herbe'), w('놀고 있습니다','jouent'), p('.'),
        w('하늘이','le ciel'), w('파랗고','est bleu et'), w('해가','le soleil'), w('빛납니다','brille'), p('.'),
        w('준호는','Junho'), w('벤치에','sur un banc'), w('앉아서','s\'assoit et'), w('쉽니다','se repose'), p('.'),
      ]
    },
    {
      id: 'sijang', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('수진','Sujin'), w('은','(particule)'), w('매일 아침','chaque matin'), w('시장에','au marché'), w('갑니다','va'), p('.'),
        w('과일','fruits'), p(','), w('채소','légumes'), w('와','et'), w('신선한','frais'), w('빵을','pain'), w('삽니다','achète'), p('.'),
        w('상인이','le vendeur'), w('가장 빨간','les plus rouges'), w('사과를','pommes'), w('줍니다','donne'), p('.'),
        w('수진은','Sujin'), w('만족하며','contente'), w('집에','chez elle'), w('돌아갑니다','rentre'), p('.'),
      ]
    },
  ],

  zh: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('小红','Xiaohong'), w('走进','entre dans'), w('咖啡馆','café'), p('。'),
        w('她','elle'), w('坐在','s\'assoit à'), w('靠窗','près de la fenêtre'), w('的桌子旁','côté de la table'), p('。'),
        w('服务员','le serveur'), w('走过来','arrive'), w('微笑','et sourit'), p('。'),
        w('我想要','je voudrais'), w('一杯','une tasse de'), w('咖啡','café'), w('和','et'), w('一个','un'), w('可颂','croissant'), p('，'), w('请','s\'il vous plaît'), p('。'),
        w('她','elle'), w('慢慢地','lentement'), w('喝着咖啡','boit son café'), w('微笑着','et sourit'), p('。'),
      ]
    },
    {
      id: 'gongyuan', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('明明','Mingming'), w('带着','avec'), w('他的狗','son chien'), w('在','dans'), w('公园','parc'), w('散步','se promène'), p('。'),
        w('孩子们','les enfants'), w('在','dans'), w('草地上','l\'herbe'), w('玩耍','jouent'), p('。'),
        w('天空','le ciel'), w('是蓝色的','est bleu'), w('阳光','le soleil'), w('灿烂','brille'), p('。'),
        w('明明','Mingming'), w('坐在','s\'assoit sur'), w('长椅上','un banc'), w('休息','se repose'), p('。'),
      ]
    },
    {
      id: 'shichang', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('小芳','Xiaofang'), w('每天早上','chaque matin'), w('去','va'), w('市场','marché'), p('。'),
        w('她','elle'), w('买','achète'), w('水果','fruits'), p('，'), w('蔬菜','légumes'), w('和','et'), w('新鲜','frais'), w('面包','pain'), p('。'),
        w('摊主','le vendeur'), w('给她','lui donne'), w('最红的','les plus rouges'), w('苹果','pommes'), p('。'),
        w('小芳','Xiaofang'), w('高兴地','contente'), w('回家了','rentre chez elle'), p('。'),
      ]
    },
  ],

  ar: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('سارة','Sara'), w('تدخل','entre dans'), w('المقهى','café'), p('.'),
        w('تجلس','elle s\'assoit'), w('على','à'), w('طاولة','table'), w('بجانب','près de'), w('النافذة','fenêtre'), p('.'),
        w('النادل','le serveur'), w('يأتي','arrive'), w('ويبتسم','et sourit'), p('.'),
        w('أريد','je voudrais'), w('قهوة','café'), w('وكرواسان','et croissant'), p(','), w('من فضلك','s\'il vous plaît'), p('.'),
        w('تشرب','elle boit'), w('قهوتها','son café'), w('ببطء','lentement'), w('وتبتسم','et sourit'), p('.'),
      ]
    },
    {
      id: 'hadiqua', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('أحمد','Ahmed'), w('يتنزه','se promène'), w('في','dans'), w('الحديقة','parc'), w('مع','avec'), w('كلبه','son chien'), p('.'),
        w('الأطفال','les enfants'), w('يلعبون','jouent'), w('على','dans'), w('العشب','herbe'), p('.'),
        w('السماء','le ciel'), w('زرقاء','bleu'), w('والشمس','et le soleil'), w('تسطع','brille'), p('.'),
        w('أحمد','Ahmed'), w('يجلس','s\'assoit'), w('على','sur'), w('مقعد','banc'), w('ويستريح','et se repose'), p('.'),
      ]
    },
    {
      id: 'souq', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('فاطمة','Fatima'), w('تذهب','va'), w('إلى','au'), w('السوق','marché'), w('كل صباح','chaque matin'), p('.'),
        w('تشتري','elle achète'), w('فواكه','fruits'), p(','), w('خضروات','légumes'), w('وخبز','et pain'), w('طازج','frais'), p('.'),
        w('البائع','le vendeur'), w('يعطيها','lui donne'), w('أحمر','les plus rouges'), w('التفاح','pommes'), p('.'),
        w('فاطمة','Fatima'), w('تعود','rentre'), w('إلى البيت','chez elle'), w('سعيدة','contente'), p('.'),
      ]
    },
  ],

  hi: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
      level: 1,
      tokens: [
        w('प्रिया','Priya'), w('कैफे','café'), w('में','dans'), w('आती है','entre'), p('।'),
        w('वह','elle'), w('खिड़की','fenêtre'), w('के पास','près de'), w('एक मेज','une table'), w('पर','à'), w('बैठती है','s\'assoit'), p('।'),
        w('वेटर','le serveur'), w('आता है','arrive'), w('और','et'), w('मुस्कुराता है','sourit'), p('।'),
        w('मुझे','je'), w('एक कॉफी','un café'), w('और','et'), w('क्रोइसां','croissant'), w('चाहिए','voudrais'), p(','), w('कृपया','s\'il vous plaît'), p('।'),
        w('वह','elle'), w('धीरे-धीरे','lentement'), w('कॉफी','café'), w('पीती है','boit'), w('और','et'), w('मुस्कुराती है','sourit'), p('।'),
      ]
    },
    {
      id: 'park', emoji: '🌳', title_fr: 'Le parc',
      level: 1,
      tokens: [
        w('रोहन','Rohan'), w('अपने कुत्ते','son chien'), w('के साथ','avec'), w('पार्क','parc'), w('में','dans'), w('घूमता है','se promène'), p('।'),
        w('बच्चे','les enfants'), w('घास','herbe'), w('पर','dans la'), w('खेलते हैं','jouent'), p('।'),
        w('आकाश','le ciel'), w('नीला है','est bleu'), w('और','et'), w('सूरज','le soleil'), w('चमकता है','brille'), p('।'),
        w('रोहन','Rohan'), w('एक बेंच','un banc'), w('पर','sur'), w('बैठता है','s\'assoit'), w('और','et'), w('आराम करता है','se repose'), p('।'),
      ]
    },
    {
      id: 'bazaar', emoji: '🛒', title_fr: 'Au marché',
      level: 1,
      tokens: [
        w('अनीता','Anita'), w('हर सुबह','chaque matin'), w('बाज़ार','marché'), w('जाती है','va au'), p('।'),
        w('वह','elle'), w('फल','fruits'), p(','), w('सब्जियाँ','légumes'), w('और','et'), w('ताज़ी','frais'), w('रोटी','pain'), w('खरीदती है','achète'), p('।'),
        w('विक्रेता','le vendeur'), w('उसे','lui'), w('सबसे लाल','les plus rouges'), w('सेब','pommes'), w('देता है','donne'), p('।'),
        w('अनीता','Anita'), w('खुश होकर','contente'), w('घर','chez elle'), w('लौटती है','rentre'), p('।'),
    
      ]
    },
  ],

}

// ═══════════════════════════════════════════════════════════════════════════
// HISTOIRES NIVEAU 2 & 3
// ═══════════════════════════════════════════════════════════════════════════

const STORIES_EXTRA: Record<string, Story[]> = {
  es: [
    {
      id: 'escuela', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Sofía','Sofia'),
        w('llega','arrive'),
        w('a','à'),
        w('la','la'),
        w('escuela',"l'école"),
        w('temprano','tôt'),
        p('.'),
        w('Saluda','elle salue'),
        w('a','à'),
        w('su','sa'),
        w('profesora','professeure'),
        p('.'),
        w('Abre','elle ouvre'),
        w('su','son'),
        w('cuaderno','cahier'),
        w('y','et'),
        w('escucha','écoute'),
        w('la lección','la leçon'),
        p('.'),
        w('Al final','à la fin'),
        w('recoge','elle range'),
        w('sus cosas','ses affaires'),
        w('y','et'),
        w('vuelve a casa','rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restaurante2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Miguel','Miguel'),
        w('entra','entre dans'),
        w('el restaurante','le restaurant'),
        w('hambriento','affamé'),
        p('.'),
        w('Elige','il choisit'),
        w('una mesa','une table'),
        w('junto a la ventana','près de la fenêtre'),
        p('.'),
        w('El camarero','le serveur'),
        w('recomienda','recommande'),
        w('el plato del día','le plat du jour'),
        p('.'),
        w('Miguel','Miguel'),
        w('pide','commande'),
        w('la paella','la paella'),
        w('y queda','et est'),
        w('satisfecho','satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'aeropuerto', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Laura','Laura'),
        w('llega','arrive'),
        w('al aeropuerto',"à l\'aéroport"),
        w('con su maleta','avec sa valise'),
        p('.'),
        w('Muestra','elle montre'),
        w('su pasaporte','son passeport'),
        w('en el control','au contrôle'),
        p('.'),
        w('Espera','elle attend'),
        w('su vuelo','son vol'),
        w('en la sala de embarque',"dans la salle d'embarquement"),
        p('.'),
        w('El avión',"l'avion"),
        w('despega','décolle'),
        w('puntualmente','ponctuellement'),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Carla','Carla'),
        w('llega al hotel por la noche',"arrive à l'hôtel le soir"),
        p('.'),
        w('La recepcionista','La réceptionniste'),
        w('sonríe y le da la llave','sourit et lui donne la clé'),
        p('.'),
        w('Sube a su habitación','elle monte dans sa chambre'),
        w('y abre su maleta','et ouvre sa valise'),
        p('.'),
        w('Por la noche','le soir'),
        w('duerme bien','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Carla','Carla'),
        w('camina hasta la playa con sus amigos',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('El sol brilla','le soleil brille'),
        w('y el mar está calmado','et la mer est calme'),
        p('.'),
        w('Nadan en el agua',"ils nagent dans l'eau"),
        w('y juegan con la pelota','et jouent avec le ballon'),
        p('.'),
        w('Por la noche','le soir'),
        w('miran juntos la puesta de sol','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Carla','Carla'),
        w('va al cine con su hermano','va au cinéma avec son frère'),
        p('.'),
        w('Compran entradas','ils achètent des billets'),
        w('y palomitas','et du pop-corn'),
        p('.'),
        w('La película empieza','le film commence'),
        w('y todos se callan','et tout le monde se tait'),
        p('.'),
        w('Al final','à la fin'),
        w('el público aplaude','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w('entra en la panadería por la mañana','entre dans la boulangerie le matin'),
        p('.'),
        w('Huele a pan recién hecho','Ça sent le pain frais'),
        p('.'),
        w('Pide una baguette y un croissant','Elle commande une baguette et un croissant'),
        p('.'),
        w('La panadera','La boulangère'),
        w('sonríe y le da el cambio','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('sale contenta con su bolsa de pan','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  en: [
    {
      id: 'school', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Emma','Emma'),
        w('arrives','arrive'),
        w('at school',"à l'école"),
        w('early','tôt'),
        p('.'),
        w('She greets','elle salue'),
        w('her teacher','sa professeure'),
        p('.'),
        w('She opens','elle ouvre'),
        w('her notebook','son cahier'),
        w('and listens','et écoute'),
        p('.'),
        w('At the end','à la fin'),
        w('she packs her things','elle range ses affaires'),
        w('and goes home','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restaurant2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Tom','Tom'),
        w('enters','entre dans'),
        w('the restaurant','le restaurant'),
        w('hungry','affamé'),
        p('.'),
        w('He chooses','il choisit'),
        w('a table','une table'),
        w('by the window','près de la fenêtre'),
        p('.'),
        w('The waiter','le serveur'),
        w('recommends','recommande'),
        w('the dish of the day','le plat du jour'),
        p('.'),
        w('Tom orders','Tom commande'),
        w('the fish','le poisson'),
        w('and feels satisfied','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'airport', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Sarah','Sarah'),
        w('arrives','arrive'),
        w('at the airport',"à l'aéroport"),
        w('with her suitcase','avec sa valise'),
        p('.'),
        w('She shows','elle montre'),
        w('her passport','son passeport'),
        w('at security','au contrôle'),
        p('.'),
        w('She waits','elle attend'),
        w('for her flight','son vol'),
        w('in the lounge',"dans la salle d'attente"),
        p('.'),
        w('The plane',"l'avion"),
        w('takes off','décolle'),
        w('on time',"à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Anna','Anna'),
        w('arrives at the hotel in the evening',"arrive à l'hôtel le soir"),
        p('.'),
        w('The receptionist','La réceptionniste'),
        w('smiles and gives her the key','sourit et lui donne la clé'),
        p('.'),
        w('She goes up to her room','elle monte dans sa chambre'),
        w('and opens her suitcase','et ouvre sa valise'),
        p('.'),
        w('At night','le soir'),
        w('she sleeps well','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('walks to the beach with her friends',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('The sun shines','le soleil brille'),
        w('and the sea is calm','et la mer est calme'),
        p('.'),
        w('They swim in the water',"ils nagent dans l'eau"),
        w('and play with the ball','et jouent avec le ballon'),
        p('.'),
        w('In the evening','le soir'),
        w('they watch the sunset together','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('goes to the cinema with her brother','va au cinéma avec son frère'),
        p('.'),
        w('They buy tickets','ils achètent des billets'),
        w('and popcorn','et du pop-corn'),
        p('.'),
        w('The film starts','le film commence'),
        w('and everyone goes quiet','et tout le monde se tait'),
        p('.'),
        w('At the end','à la fin'),
        w('the audience applauds','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w('enters the bakery in the morning','entre dans la boulangerie le matin'),
        p('.'),
        w('It smells of fresh bread','Ça sent le pain frais'),
        p('.'),
        w('She orders a baguette and a croissant','Elle commande une baguette et un croissant'),
        p('.'),
        w('The baker','La boulangère'),
        w('smiles and gives her the change','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('leaves happy with her bag of bread','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  de: [
    {
      id: 'schule', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Emma','Emma'),
        w('kommt','arrive'),
        w('früh','tôt'),
        w('in die Schule',"à l'école"),
        p('.'),
        w('Sie begrüßt','elle salue'),
        w('ihre Lehrerin','sa professeure'),
        p('.'),
        w('Sie öffnet','elle ouvre'),
        w('ihr Heft','son cahier'),
        w('und hört zu','et écoute'),
        p('.'),
        w('Am Ende','à la fin'),
        w('packt sie ihre Sachen','elle range ses affaires'),
        w('und geht nach Hause','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restaurant2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Max','Max'),
        w('betritt','entre dans'),
        w('das Restaurant','le restaurant'),
        w('hungrig','affamé'),
        p('.'),
        w('Er wählt','il choisit'),
        w('einen Tisch','une table'),
        w('am Fenster','près de la fenêtre'),
        p('.'),
        w('Der Kellner','le serveur'),
        w('empfiehlt','recommande'),
        w('das Tagesgericht','le plat du jour'),
        p('.'),
        w('Max bestellt','Max commande'),
        w('den Fisch','le poisson'),
        w('und ist zufrieden','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'flughafen', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Julia','Julia'),
        w('kommt','arrive'),
        w('mit ihrem Koffer','avec sa valise'),
        w('am Flughafen',"à l'aéroport"),
        w('an',''),
        p('.'),
        w('Sie zeigt','elle montre'),
        w('ihren Pass','son passeport'),
        w('beim Sicherheitscheck','au contrôle'),
        p('.'),
        w('Sie wartet','elle attend'),
        w('in der Abflughalle',"dans la salle d'embarquement"),
        p('.'),
        w('Das Flugzeug',"l'avion"),
        w('hebt pünktlich ab',"décolle à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Anna','Anna'),
        w('kommt abends im Hotel an','arrive le soir à l\'hôtel'),
        p('.'),
        w('Die Rezeptionistin','La réceptionniste'),
        w('lächelt und gibt ihr den Schlüssel','sourit et lui donne la clé'),
        p('.'),
        w('Sie geht in ihr Zimmer','elle monte dans sa chambre'),
        w('und öffnet ihren Koffer','et ouvre sa valise'),
        p('.'),
        w('Abends','le soir'),
        w('schläft sie gut','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('geht mit ihren Freunden zum Strand',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('Die Sonne scheint','le soleil brille'),
        w('und das Meer ist ruhig','et la mer est calme'),
        p('.'),
        w('Sie schwimmen im Wasser',"ils nagent dans l'eau"),
        w('und spielen mit dem Ball','et jouent avec le ballon'),
        p('.'),
        w('Abends','le soir'),
        w('schauen sie gemeinsam den Sonnenuntergang an','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('geht mit ihrem Bruder ins Kino','va au cinéma avec son frère'),
        p('.'),
        w('Sie kaufen Karten','ils achètent des billets'),
        w('und Popcorn','et du pop-corn'),
        p('.'),
        w('Der Film beginnt','le film commence'),
        w('und alle werden still','et tout le monde se tait'),
        p('.'),
        w('Am Ende','à la fin'),
        w('applaudiert das Publikum','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w('geht morgens in die Bäckerei','entre dans la boulangerie le matin'),
        p('.'),
        w('Es duftet nach frischem Brot','Ça sent le pain frais'),
        p('.'),
        w('Sie bestellt ein Baguette und ein Croissant','Elle commande une baguette et un croissant'),
        p('.'),
        w('Die Bäckerin','La boulangère'),
        w('lächelt und gibt ihr das Wechselgeld','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('geht glücklich mit ihrer Brottüte hinaus','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  it: [
    {
      id: 'scuola', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Emma','Emma'),
        w('arriva','arrive'),
        w('a scuola',"à l'école"),
        w('presto','tôt'),
        p('.'),
        w('Saluta','elle salue'),
        w('la sua professoressa','sa professeure'),
        p('.'),
        w('Apre','elle ouvre'),
        w('il suo quaderno','son cahier'),
        w('e ascolta la lezione','et écoute la leçon'),
        p('.'),
        w('Alla fine','à la fin'),
        w('mette via le sue cose','elle range ses affaires'),
        w('e torna a casa','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'ristorante2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Marco','Marco'),
        w('entra','entre dans'),
        w('nel ristorante','le restaurant'),
        w('affamato','affamé'),
        p('.'),
        w('Sceglie','il choisit'),
        w('un tavolo','une table'),
        w('vicino alla finestra','près de la fenêtre'),
        p('.'),
        w('Il cameriere','le serveur'),
        w('consiglia','recommande'),
        w('il piatto del giorno','le plat du jour'),
        p('.'),
        w('Marco ordina','Marco commande'),
        w('la pasta','les pâtes'),
        w('ed è soddisfatto','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'aeroporto', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Sofia','Sofia'),
        w('arriva','arrive'),
        w("all'aeroporto","à l'aéroport"),
        w('con la sua valigia','avec sa valise'),
        p('.'),
        w('Mostra','elle montre'),
        w('il passaporto','son passeport'),
        w('al controllo','au contrôle'),
        p('.'),
        w('Aspetta','elle attend'),
        w('il volo','son vol'),
        w("nella sala d'attesa","dans la salle d'attente"),
        p('.'),
        w("L'aereo","l'avion"),
        w('decolla','décolle'),
        w('puntuale',"à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Anna','Anna'),
        w('arriva in albergo di sera',"arrive à l'hôtel le soir"),
        p('.'),
        w('La receptionist','La réceptionniste'),
        w('sorride e le dà la chiave','sourit et lui donne la clé'),
        p('.'),
        w('Sale in camera sua','elle monte dans sa chambre'),
        w('e apre la valigia','et ouvre sa valise'),
        p('.'),
        w('Di sera','le soir'),
        w('dorme bene','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('cammina fino alla spiaggia con i suoi amici',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('Il sole splende','le soleil brille'),
        w('e il mare è calmo','et la mer est calme'),
        p('.'),
        w("Nuotano nell'acqua","ils nagent dans l'eau"),
        w('e giocano con il pallone','et jouent avec le ballon'),
        p('.'),
        w('Di sera','le soir'),
        w('guardano insieme il tramonto','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('va al cinema con suo fratello','va au cinéma avec son frère'),
        p('.'),
        w('Comprano i biglietti','ils achètent des billets'),
        w('e i popcorn','et du pop-corn'),
        p('.'),
        w('Il film inizia','le film commence'),
        w('e tutti fanno silenzio','et tout le monde se tait'),
        p('.'),
        w('Alla fine','à la fin'),
        w('il pubblico applaude','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w('entra in panetteria al mattino','entre dans la boulangerie le matin'),
        p('.'),
        w('Si sente il profumo di pane fresco','Ça sent le pain frais'),
        p('.'),
        w('Ordina una baguette e un croissant','Elle commande une baguette et un croissant'),
        p('.'),
        w('La panettiera','La boulangère'),
        w('sorride e le dà il resto','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('esce contenta con il suo sacchetto di pane','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  pt: [
    {
      id: 'escola', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Ana','Ana'),
        w('chega','arrive'),
        w('à escola',"à l'école"),
        w('cedo','tôt'),
        p('.'),
        w('Ela cumprimenta','elle salue'),
        w('a sua professora','sa professeure'),
        p('.'),
        w('Ela abre o seu caderno','elle ouvre son cahier'),
        w('e ouve','et écoute'),
        p('.'),
        w('No fim','à la fin'),
        w('ela arruma as suas coisas','elle range ses affaires'),
        w('e volta a casa','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restaurante2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('João','João'),
        w('entra','entre dans'),
        w('no restaurante','le restaurant'),
        w('com fome','affamé'),
        p('.'),
        w('Escolhe','il choisit'),
        w('uma mesa','une table'),
        w('perto da janela','près de la fenêtre'),
        p('.'),
        w('O empregado','le serveur'),
        w('recomenda','recommande'),
        w('o prato do dia','le plat du jour'),
        p('.'),
        w('João pede o peixe','João commande le poisson'),
        w('e fica satisfeito','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'aeroporto2', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Maria','Maria'),
        w('chega','arrive'),
        w('ao aeroporto',"à l'aéroport"),
        w('com a mala','avec sa valise'),
        p('.'),
        w('Mostra','elle montre'),
        w('o passaporte','son passeport'),
        w('no controlo','au contrôle'),
        p('.'),
        w('Espera','elle attend'),
        w('o voo','son vol'),
        w('na sala de embarque',"dans la salle d'embarquement"),
        p('.'),
        w('O avião',"l'avion"),
        w('descola','décolle'),
        w('pontualmente','ponctuellement'),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Ana','Ana'),
        w('chega ao hotel à noite',"arrive à l'hôtel le soir"),
        p('.'),
        w('A recepcionista','La réceptionniste'),
        w('sorri e dá-lhe a chave','sourit et lui donne la clé'),
        p('.'),
        w('Ela sobe ao seu quarto','elle monte dans sa chambre'),
        w('e abre a mala','et ouvre sa valise'),
        p('.'),
        w('À noite','le soir'),
        w('ela dorme bem','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Ana','Ana'),
        w('caminha até à praia com os amigos',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('O sol brilha','le soleil brille'),
        w('e o mar está calmo','et la mer est calme'),
        p('.'),
        w('Eles nadam na água',"ils nagent dans l'eau"),
        w('e jogam à bola','et jouent avec le ballon'),
        p('.'),
        w('À noite','le soir'),
        w('veem juntos o pôr do sol','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Ana','Ana'),
        w('vai ao cinema com o irmão','va au cinéma avec son frère'),
        p('.'),
        w('Compram bilhetes','ils achètent des billets'),
        w('e pipocas','et du pop-corn'),
        p('.'),
        w('O filme começa','le film commence'),
        w('e todos ficam em silêncio','et tout le monde se tait'),
        p('.'),
        w('No fim','à la fin'),
        w('o público aplaude','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w('entra na padaria de manhã','entre dans la boulangerie le matin'),
        p('.'),
        w('Sente-se o cheiro de pão fresco','Ça sent le pain frais'),
        p('.'),
        w('Pede uma baguete e um croissant','Elle commande une baguette et un croissant'),
        p('.'),
        w('A padeira','La boulangère'),
        w('sorri e dá-lhe o troco','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('sai contente com o saco de pão','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  nl: [
    {
      id: 'school', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Emma','Emma'),
        w('komt vroeg','arrive tôt'),
        w('op school aan',"à l'école"),
        p('.'),
        w('Ze begroet','elle salue'),
        w('haar lerares','sa professeure'),
        p('.'),
        w('Ze opent haar schrift','elle ouvre son cahier'),
        w('en luistert','et écoute'),
        p('.'),
        w('Aan het einde','à la fin'),
        w('pakt ze haar spullen','elle range ses affaires'),
        w('en gaat naar huis','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restaurant2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Pieter','Pieter'),
        w('stapt het restaurant in','entre dans le restaurant'),
        w('hongerig','affamé'),
        p('.'),
        w('Hij kiest','il choisit'),
        w('een tafel','une table'),
        w('bij het raam','près de la fenêtre'),
        p('.'),
        w('De ober','le serveur'),
        w('beveelt het dagmenu aan','recommande le plat du jour'),
        p('.'),
        w('Pieter bestelt','Pieter commande'),
        w('de vis','le poisson'),
        w('en is tevreden','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'luchthaven', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Sophie','Sophie'),
        w('komt aan','arrive'),
        w('op de luchthaven',"à l'aéroport"),
        w('met haar koffer','avec sa valise'),
        p('.'),
        w('Ze toont','elle montre'),
        w('haar paspoort','son passeport'),
        w('bij de controle','au contrôle'),
        p('.'),
        w('Ze wacht','elle attend'),
        w('op haar vlucht','son vol'),
        w('in de vertrekhal',"dans la salle d'embarquement"),
        p('.'),
        w('Het vliegtuig',"l'avion"),
        w('vertrekt stipt op tijd',"décolle à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Anna','Anna'),
        w("komt 's avonds aan in het hotel","arrive le soir à l'hôtel"),
        p('.'),
        w('De receptioniste','La réceptionniste'),
        w('glimlacht en geeft haar de sleutel','sourit et lui donne la clé'),
        p('.'),
        w('Ze gaat naar haar kamer','elle monte dans sa chambre'),
        w('en opent haar koffer','et ouvre sa valise'),
        p('.'),
        w("'s Avonds",'le soir'),
        w('slaapt ze goed','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('loopt met haar vrienden naar het strand',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('De zon schijnt','le soleil brille'),
        w('en de zee is rustig','et la mer est calme'),
        p('.'),
        w('Ze zwemmen in het water',"ils nagent dans l'eau"),
        w('en spelen met de bal','et jouent avec le ballon'),
        p('.'),
        w("'s Avonds",'le soir'),
        w('kijken ze samen naar de zonsondergang','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('gaat met haar broer naar de bioscoop','va au cinéma avec son frère'),
        p('.'),
        w('Ze kopen kaartjes','ils achètent des billets'),
        w('en popcorn','et du pop-corn'),
        p('.'),
        w('De film begint','le film commence'),
        w('en iedereen wordt stil','et tout le monde se tait'),
        p('.'),
        w('Aan het einde','à la fin'),
        w('applaudisseert het publiek','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w("gaat 's ochtends naar de bakkerij",'entre dans la boulangerie le matin'),
        p('.'),
        w('Het ruikt naar vers brood','Ça sent le pain frais'),
        p('.'),
        w('Ze bestelt een baguette en een croissant','Elle commande une baguette et un croissant'),
        p('.'),
        w('De bakker','La boulangère'),
        w('glimlacht en geeft haar het wisselgeld','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('gaat tevreden naar buiten met haar broodzak','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  pl: [
    {
      id: 'szkola', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Ania','Ania'),
        w('przybywa','arrive'),
        w('do szkoły',"à l'école"),
        w('wcześnie','tôt'),
        p('.'),
        w('Wita','elle salue'),
        w('swoją nauczycielkę','sa professeure'),
        p('.'),
        w('Otwiera zeszyt','elle ouvre son cahier'),
        w('i słucha lekcji','et écoute la leçon'),
        p('.'),
        w('Na końcu','à la fin'),
        w('pakuje rzeczy','elle range ses affaires'),
        w('i wraca do domu','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restauracja2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Piotr','Piotr'),
        w('wchodzi','entre dans'),
        w('do restauracji','le restaurant'),
        w('głodny','affamé'),
        p('.'),
        w('Wybiera','il choisit'),
        w('stolik','une table'),
        w('przy oknie','près de la fenêtre'),
        p('.'),
        w('Kelner','le serveur'),
        w('poleca','recommande'),
        w('danie dnia','le plat du jour'),
        p('.'),
        w('Piotr zamawia rybę','Piotr commande le poisson'),
        w('i jest zadowolony','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'lotnisko', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Kasia','Kasia'),
        w('przybywa','arrive'),
        w('na lotnisko',"à l'aéroport"),
        w('z walizką','avec sa valise'),
        p('.'),
        w('Pokazuje paszport','elle montre son passeport'),
        w('na kontroli','au contrôle'),
        p('.'),
        w('Czeka na lot','elle attend son vol'),
        w('w hali odlotów',"dans la salle d'embarquement"),
        p('.'),
        w('Samolot',"l'avion"),
        w('startuje punktualnie',"décolle à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Anna','Anna'),
        w('przyjeżdża do hotelu wieczorem','arrive le soir à l\'hôtel'),
        p('.'),
        w('Recepcjonistka','La réceptionniste'),
        w('uśmiecha się i daje jej klucz','sourit et lui donne la clé'),
        p('.'),
        w('Idzie do swojego pokoju','elle monte dans sa chambre'),
        w('i otwiera walizkę','et ouvre sa valise'),
        p('.'),
        w('Wieczorem','le soir'),
        w('śpi dobrze','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('idzie na plażę z przyjaciółmi',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('Słońce świeci','le soleil brille'),
        w('a morze jest spokojne','et la mer est calme'),
        p('.'),
        w('Pływają w wodzie',"ils nagent dans l'eau"),
        w('i grają piłką','et jouent avec le ballon'),
        p('.'),
        w('Wieczorem','le soir'),
        w('razem patrzą na zachód słońca','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Anna','Anna'),
        w('idzie do kina z bratem','va au cinéma avec son frère'),
        p('.'),
        w('Kupują bilety','ils achètent des billets'),
        w('i popcorn','et du pop-corn'),
        p('.'),
        w('Film zaczyna się','le film commence'),
        w('a wszyscy się uciszają','et tout le monde se tait'),
        p('.'),
        w('Na końcu','à la fin'),
        w('publiczność bije brawo','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w('wchodzi do piekarni rano','entre dans la boulangerie le matin'),
        p('.'),
        w('Pachnie świeżym chlebem','Ça sent le pain frais'),
        p('.'),
        w('Zamawia bagietkę i rogalik','Elle commande une baguette et un croissant'),
        p('.'),
        w('Piekarka','La boulangère'),
        w('uśmiecha się i daje jej resztę','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('wychodzi zadowolona z torbą chleba','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  tr: [
    {
      id: 'okul', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Ayşe','Ayşe'),
        w('okula',"à l'école"),
        w('erken','tôt'),
        w('geliyor','arrive'),
        p('.'),
        w('Öğretmenini selamlıyor','elle salue sa professeure'),
        p('.'),
        w('Defterini açıyor','elle ouvre son cahier'),
        w('ve dersi dinliyor','et écoute la leçon'),
        p('.'),
        w('Sonunda','à la fin'),
        w('eşyalarını topluyor','elle range ses affaires'),
        w('ve eve dönüyor','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restoran2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Mehmet','Mehmet'),
        w('restorana giriyor','entre dans le restaurant'),
        w('aç olarak','affamé'),
        p('.'),
        w('Pencere yanında','près de la fenêtre'),
        w('bir masa seçiyor','il choisit une table'),
        p('.'),
        w('Garson','le serveur'),
        w('günün yemeğini öneriyor','recommande le plat du jour'),
        p('.'),
        w('Mehmet balığı sipariş ediyor','Mehmet commande le poisson'),
        w('ve memnun kalıyor','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'havalimani', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Zeynep','Zeynep'),
        w('bavuluyla','avec sa valise'),
        w('havalimanına',"à l'aéroport"),
        w('geliyor','arrive'),
        p('.'),
        w('Pasaportunu','son passeport'),
        w('kontrolde gösteriyor','elle montre au contrôle'),
        p('.'),
        w('Uçuşunu bekliyor','elle attend son vol'),
        w('bekleme salonunda',"dans la salle d'attente"),
        p('.'),
        w("l'avion","l'avion"),
        w('zamanında kalkıyor',"décolle à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Ayşe','Ayşe'),
        w('akşam otele varıyor','arrive le soir à l\'hôtel'),
        p('.'),
        w('Resepsiyonist','La réceptionniste'),
        w('gülümsüyor ve ona anahtarı veriyor','sourit et lui donne la clé'),
        p('.'),
        w('Odasına çıkıyor','elle monte dans sa chambre'),
        w('ve valizini açıyor','et ouvre sa valise'),
        p('.'),
        w('Akşam','le soir'),
        w('iyi uyuyor','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Ayşe','Ayşe'),
        w('arkadaşlarıyla sahile yürüyor',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('Güneş parlıyor','le soleil brille'),
        w('ve deniz sakin','et la mer est calme'),
        p('.'),
        w('Suda yüzüyorlar',"ils nagent dans l'eau"),
        w('ve topla oynuyorlar','et jouent avec le ballon'),
        p('.'),
        w('Akşam','le soir'),
        w('birlikte gün batımını izliyorlar','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Ayşe','Ayşe'),
        w('kardeşiyle sinemaya gidiyor','va au cinéma avec son frère'),
        p('.'),
        w('Bilet alıyorlar','ils achètent des billets'),
        w('ve patlamış mısır','et du pop-corn'),
        p('.'),
        w('Film başlıyor','le film commence'),
        w('ve herkes susuyor','et tout le monde se tait'),
        p('.'),
        w('Sonunda','à la fin'),
        w('izleyiciler alkışlıyor','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Léa','Léa'),
        w('sabah fırına giriyor','entre dans la boulangerie le matin'),
        p('.'),
        w('Taze ekmek kokuyor','Ça sent le pain frais'),
        p('.'),
        w('Bir baget ve bir kruvasan sipariş ediyor','Elle commande une baguette et un croissant'),
        p('.'),
        w('Fırıncı','La boulangère'),
        w('gülümsüyor ve para üstünü veriyor','sourit et lui rend la monnaie'),
        p('.'),
        w('Léa','Léa'),
        w('ekmek torbasıyla mutlu çıkıyor','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  ru: [
    {
      id: 'shkola', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('Аня','Ania'),
        w('приходит','arrive'),
        w('в школу',"à l'école"),
        w('рано','tôt'),
        p('.'),
        w('Она здоровается','elle salue'),
        w('с учительницей','sa professeure'),
        p('.'),
        w('Она открывает тетрадь','elle ouvre son cahier'),
        w('и слушает урок','et écoute la leçon'),
        p('.'),
        w('В конце','à la fin'),
        w('она собирает вещи','elle range ses affaires'),
        w('и идёт домой','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'restoran2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('Иван','Ivan'),
        w('входит','entre dans'),
        w('в ресторан','le restaurant'),
        w('голодный','affamé'),
        p('.'),
        w('Он выбирает','il choisit'),
        w('столик у окна','une table près de la fenêtre'),
        p('.'),
        w('Официант','le serveur'),
        w('рекомендует','recommande'),
        w('блюдо дня','le plat du jour'),
        p('.'),
        w('Иван заказывает рыбу','Ivan commande le poisson'),
        w('и остаётся доволен','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'aeroport', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('Катя','Katia'),
        w('приезжает','arrive'),
        w('в аэропорт',"à l'aéroport"),
        w('с чемоданом','avec sa valise'),
        p('.'),
        w('Она показывает паспорт','elle montre son passeport'),
        w('на контроле','au contrôle'),
        p('.'),
        w('Она ждёт рейс','elle attend son vol'),
        w('в зале ожидания',"dans la salle d'attente"),
        p('.'),
        w('Самолёт',"l'avion"),
        w('взлетает вовремя',"décolle à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('Аня','Ania'),
        w('приезжает в отель вечером','arrive le soir à l\'hôtel'),
        p('.'),
        w('Администратор','La réceptionniste'),
        w('улыбается и даёт ей ключ','sourit et lui donne la clé'),
        p('.'),
        w('Она поднимается в свой номер','elle monte dans sa chambre'),
        w('и открывает чемодан','et ouvre sa valise'),
        p('.'),
        w('Вечером','le soir'),
        w('она хорошо спит','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('Аня','Ania'),
        w('идёт на пляж с друзьями',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('Солнце светит','le soleil brille'),
        w('а море спокойное','et la mer est calme'),
        p('.'),
        w('Они плавают в воде',"ils nagent dans l'eau"),
        w('и играют с мячом','et jouent avec le ballon'),
        p('.'),
        w('Вечером','le soir'),
        w('они вместе смотрят закат','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('Аня','Ania'),
        w('идёт в кино с братом','va au cinéma avec son frère'),
        p('.'),
        w('Они покупают билеты','ils achètent des billets'),
        w('и попкорн','et du pop-corn'),
        p('.'),
        w('Фильм начинается','le film commence'),
        w('и все замолкают','et tout le monde se tait'),
        p('.'),
        w('В конце','à la fin'),
        w('зрители аплодируют','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('Лея','Léa'),
        w('утром заходит в булочную','entre dans la boulangerie le matin'),
        p('.'),
        w('Пахнет свежим хлебом','Ça sent le pain frais'),
        p('.'),
        w('Она заказывает багет и круассан','Elle commande une baguette et un croissant'),
        p('.'),
        w('Булочница','La boulangère'),
        w('улыбается и даёт ей сдачу','sourit et lui rend la monnaie'),
        p('.'),
        w('Лея','Léa'),
        w('выходит довольная с пакетом хлеба','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  ja: [
    {
      id: 'gakko', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('エマは','Emma'),
        w('早く','tôt'),
        w('学校に来ます',"arrive à l'école"),
        p('。'),
        w('先生に挨拶します','elle salue sa professeure'),
        p('。'),
        w('ノートを開いて','elle ouvre son cahier'),
        w('授業を聞きます','et écoute la leçon'),
        p('。'),
        w('最後に','à la fin'),
        w('荷物をまとめて帰ります','elle range ses affaires et rentre'),
        p('。'),
      ]
    }
  ,
    {
      id: 'resutoran2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('ケンは','Ken'),
        w('お腹が空いて','affamé'),
        w('レストランに入ります','entre dans le restaurant'),
        p('。'),
        w('窓の近く','près de la fenêtre'),
        w('のテーブルを選びます','il choisit une table'),
        p('。'),
        w('ウェイターは','le serveur'),
        w('日替わり定食を勧めます','recommande le plat du jour'),
        p('。'),
        w('ケンは魚を注文して','Ken commande le poisson'),
        w('満足します','et est satisfait'),
        p('。'),
      ]
    }
  ,
    {
      id: 'kuko', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('サラは','Sarah'),
        w('スーツケースを持って','avec sa valise'),
        w('空港に着きます',"arrive à l'aéroport"),
        p('。'),
        w('セキュリティで','au contrôle'),
        w('パスポートを見せます','elle montre son passeport'),
        p('。'),
        w('搭乗ゲートで',"dans la salle d'embarquement"),
        w('フライトを待ちます','elle attend son vol'),
        p('。'),
        w('飛行機は',"l'avion"),
        w('時間通りに飛び立ちます',"décolle à l\'heure"),
        p('。'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('アナは','Anna'),
        w('夜にホテルに着きます','arrive le soir à l\'hôtel'),
        p('。'),
        w('受付の人は','La réceptionniste'),
        w('笑顔で鍵を渡します','sourit et donne la clé'),
        p('。'),
        w('彼女は部屋に上がって','elle monte dans sa chambre'),
        w('スーツケースを開けます','et ouvre sa valise'),
        p('。'),
        w('夜は','le soir'),
        w('よく眠ります','elle dort bien'),
        p('。'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('アナは','Anna'),
        w('友達とビーチまで歩きます',"marche jusqu'à la plage avec ses amis"),
        p('。'),
        w('太陽が輝いて','le soleil brille'),
        w('海は静かです','et la mer est calme'),
        p('。'),
        w('彼らは水の中で泳いで',"ils nagent dans l'eau"),
        w('ボールで遊びます','et jouent avec le ballon'),
        p('。'),
        w('夜は','le soir'),
        w('一緒に夕日を見ます','ils regardent ensemble le coucher de soleil'),
        p('。'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('アナは','Anna'),
        w('兄と映画館に行きます','va au cinéma avec son frère'),
        p('。'),
        w('チケットを買って','ils achètent des billets'),
        w('ポップコーンも買います','et du pop-corn'),
        p('。'),
        w('映画が始まって','le film commence'),
        w('みんな静かになります','et tout le monde se tait'),
        p('。'),
        w('最後に','à la fin'),
        w('観客は拍手します','le public applaudit'),
        p('。'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('レアは','Léa'),
        w('朝パン屋に入ります','entre dans la boulangerie le matin'),
        p('。'),
        w('新鮮なパンの香りがします','Ça sent le pain frais'),
        p('。'),
        w('バゲットとクロワッサンを注文します','Elle commande une baguette et un croissant'),
        p('。'),
        w('パン屋さんは','La boulangère'),
        w('笑顔でお釣りを渡します','sourit et lui rend la monnaie'),
        p('。'),
        w('レアは','Léa'),
        w('パンの袋を持って嬉しそうに出ます','sort contente avec son sac de pain'),
        p('。'),
      ]
    }
  ,
  ],

  ko: [
    {
      id: 'hakgyo', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('에마는','Emma'),
        w('일찍',"arrive tôt à l'école"),
        w('학교에 도착합니다',''),
        p('.'),
        w('선생님께 인사합니다','elle salue sa professeure'),
        p('.'),
        w('공책을 열고','elle ouvre son cahier'),
        w('수업을 듣습니다','et écoute la leçon'),
        p('.'),
        w('마지막에','à la fin'),
        w('짐을 챙겨서','elle range ses affaires'),
        w('집으로 돌아갑니다','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'sikdang2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('준호는','Jun-ho'),
        w('배가 고파서','affamé'),
        w('식당에 들어갑니다','entre dans le restaurant'),
        p('.'),
        w('창문 옆','près de la fenêtre'),
        w('자리를 고릅니다','il choisit une table'),
        p('.'),
        w('웨이터가','le serveur'),
        w('오늘의 요리를 추천합니다','recommande le plat du jour'),
        p('.'),
        w('준호는 생선을 주문하고','Jun-ho commande le poisson'),
        w('만족합니다','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'gonghang', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('수아는','Su-a'),
        w('캐리어를 들고','avec sa valise'),
        w('공항에 도착합니다',"arrive à l'aéroport"),
        p('.'),
        w('보안검색대에서','au contrôle'),
        w('여권을 보여줍니다','elle montre son passeport'),
        p('.'),
        w('탑승 대기실에서',"dans la salle d'embarquement"),
        w('비행기를 기다립니다','elle attend son vol'),
        p('.'),
        w('비행기가',"l'avion"),
        w('정시에 출발합니다',"décolle à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('안나는','Anna'),
        w('저녁에 호텔에 도착합니다','arrive le soir à l\'hôtel'),
        p('.'),
        w('안내원은','La réceptionniste'),
        w('웃으면서 열쇠를 줍니다','sourit et donne la clé'),
        p('.'),
        w('그녀는 방으로 올라가서','elle monte dans sa chambre'),
        w('가방을 엽니다','et ouvre sa valise'),
        p('.'),
        w('저녁에','le soir'),
        w('그녀는 잘 잡니다','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('안나는','Anna'),
        w('친구들과 해변까지 걸어갑니다',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('해가 빛나고','le soleil brille'),
        w('바다는 잔잔합니다','et la mer est calme'),
        p('.'),
        w('그들은 물에서 수영하고',"ils nagent dans l'eau"),
        w('공놀이를 합니다','et jouent avec le ballon'),
        p('.'),
        w('저녁에','le soir'),
        w('함께 일몰을 봅니다','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('안나는','Anna'),
        w('동생과 영화관에 갑니다','va au cinéma avec son frère'),
        p('.'),
        w('그들은 티켓을 사고','ils achètent des billets'),
        w('팝콘도 삽니다','et du pop-corn'),
        p('.'),
        w('영화가 시작되고','le film commence'),
        w('모두 조용해집니다','et tout le monde se tait'),
        p('.'),
        w('마지막에','à la fin'),
        w('관객들이 박수를 칩니다','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('레아는','Léa'),
        w('아침에 빵집에 들어갑니다','entre dans la boulangerie le matin'),
        p('.'),
        w('신선한 빵 냄새가 납니다','Ça sent le pain frais'),
        p('.'),
        w('바게트와 크루아상을 주문합니다','Elle commande une baguette et un croissant'),
        p('.'),
        w('빵집 주인은','La boulangère'),
        w('웃으면서 거스름돈을 줍니다','sourit et lui rend la monnaie'),
        p('.'),
        w('레아는','Léa'),
        w('빵 봉지를 들고 행복하게 나갑니다','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  zh: [
    {
      id: 'xuexiao', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('艾玛','Emma'),
        w('早早到达学校',"arrive tôt à l'école"),
        p('。'),
        w('她向老师问好','elle salue sa professeure'),
        p('。'),
        w('她打开笔记本','elle ouvre son cahier'),
        w('认真听课','et écoute la leçon'),
        p('。'),
        w('最后','à la fin'),
        w('她收拾东西回家了','elle range ses affaires et rentre'),
        p('。'),
      ]
    }
  ,
    {
      id: 'canting2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('小明','Xiaoming'),
        w('饿着走进餐厅','entre dans le restaurant affamé'),
        p('。'),
        w('他选了','il choisit'),
        w('一张靠窗的桌子','une table près de la fenêtre'),
        p('。'),
        w('服务员推荐','le serveur recommande'),
        w('今日特餐','le plat du jour'),
        p('。'),
        w('小明点了鱼','Xiaoming commande le poisson'),
        w('很满意','et est satisfait'),
        p('。'),
      ]
    }
  ,
    {
      id: 'jichang', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('小红','Xiaohong'),
        w('带着行李箱','avec sa valise'),
        w('到了机场',"arrive à l'aéroport"),
        p('。'),
        w('她在安检处','au contrôle'),
        w('出示护照','elle montre son passeport'),
        p('。'),
        w('她在候机室',"dans la salle d'embarquement"),
        w('等候航班','elle attend son vol'),
        p('。'),
        w('飞机',"l'avion"),
        w('准时起飞',"décolle à l\'heure"),
        p('。'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('安娜','Anna'),
        w('晚上到达酒店','arrive le soir à l\'hôtel'),
        p('。'),
        w('接待员','La réceptionniste'),
        w('微笑着把钥匙给她','sourit et lui donne la clé'),
        p('。'),
        w('她上楼到房间','elle monte dans sa chambre'),
        w('打开行李箱','et ouvre sa valise'),
        p('。'),
        w('晚上','le soir'),
        w('她睡得很好','elle dort bien'),
        p('。'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('安娜','Anna'),
        w('和朋友们走到海滩',"marche jusqu'à la plage avec ses amis"),
        p('。'),
        w('太阳照耀着','le soleil brille'),
        w('大海很平静','et la mer est calme'),
        p('。'),
        w('他们在水里游泳',"ils nagent dans l'eau"),
        w('一起玩球','et jouent avec le ballon'),
        p('。'),
        w('晚上','le soir'),
        w('他们一起看日落','ils regardent ensemble le coucher de soleil'),
        p('。'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('安娜','Anna'),
        w('和弟弟去电影院','va au cinéma avec son frère'),
        p('。'),
        w('他们买票','ils achètent des billets'),
        w('还买爆米花','et du pop-corn'),
        p('。'),
        w('电影开始了','le film commence'),
        w('大家都安静下来','et tout le monde se tait'),
        p('。'),
        w('最后','à la fin'),
        w('观众们鼓掌','le public applaudit'),
        p('。'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('莉亚','Léa'),
        w('早上走进面包店','entre dans la boulangerie le matin'),
        p('。'),
        w('闻到新鲜面包的香味','Ça sent le pain frais'),
        p('。'),
        w('她点了一个法棍和一个羊角面包','Elle commande une baguette et un croissant'),
        p('。'),
        w('面包师','La boulangère'),
        w('微笑着把找零给她','sourit et lui rend la monnaie'),
        p('。'),
        w('莉亚','Léa'),
        w('拿着面包袋开心地走出去','sort contente avec son sac de pain'),
        p('。'),
      ]
    }
  ,
  ],

  ar: [
    {
      id: 'madrasa', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('أمل','Amal'),
        w('تصل','arrive'),
        w('إلى المدرسة',"à l'école"),
        w('مبكرة','tôt'),
        p('.'),
        w('تحيي معلمتها','elle salue sa professeure'),
        p('.'),
        w('تفتح دفترها','elle ouvre son cahier'),
        w('وتستمع للدرس','et écoute la leçon'),
        p('.'),
        w('في النهاية','à la fin'),
        w('تجمع أشياءها','elle range ses affaires'),
        w('وتعود إلى البيت','et rentre'),
        p('.'),
      ]
    }
  ,
    {
      id: 'matam2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('محمد','Mohammed'),
        w('يدخل','entre dans'),
        w('المطعم','le restaurant'),
        w('جائعاً','affamé'),
        p('.'),
        w('يختار','il choisit'),
        w('طاولة قرب النافذة','une table près de la fenêtre'),
        p('.'),
        w('النادل','le serveur'),
        w('يوصي بطبق اليوم','recommande le plat du jour'),
        p('.'),
        w('محمد يطلب السمك','Mohammed commande le poisson'),
        w('ويشعر بالرضا','et est satisfait'),
        p('.'),
      ]
    }
  ,
    {
      id: 'matar', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('سارة','Sarah'),
        w('تصل','arrive'),
        w('إلى المطار',"à l'aéroport"),
        w('بحقيبتها','avec sa valise'),
        p('.'),
        w('تُري جواز سفرها','elle montre son passeport'),
        w('عند الجمارك','au contrôle'),
        p('.'),
        w('تنتظر رحلتها','elle attend son vol'),
        w('في صالة الانتظار',"dans la salle d'attente"),
        p('.'),
        w('الطائرة',"l'avion"),
        w('تقلع في الموعد',"décolle à l\'heure"),
        p('.'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('سارة','Sarah'),
        w('تصل إلى الفندق مساءً','arrive le soir à l\'hôtel'),
        p('.'),
        w('موظفة الاستقبال','La réceptionniste'),
        w('تبتسم وتعطيها المفتاح','sourit et lui donne la clé'),
        p('.'),
        w('تصعد إلى غرفتها','elle monte dans sa chambre'),
        w('وتفتح حقيبتها','et ouvre sa valise'),
        p('.'),
        w('في المساء','le soir'),
        w('تنام جيداً','elle dort bien'),
        p('.'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('سارة','Sarah'),
        w('تمشي إلى الشاطئ مع صديقاتها',"marche jusqu'à la plage avec ses amis"),
        p('.'),
        w('الشمس تشرق','le soleil brille'),
        w('والبحر هادئ','et la mer est calme'),
        p('.'),
        w('يسبحون في الماء',"ils nagent dans l'eau"),
        w('ويلعبون بالكرة','et jouent avec le ballon'),
        p('.'),
        w('في المساء','le soir'),
        w('يشاهدون غروب الشمس معاً','ils regardent ensemble le coucher de soleil'),
        p('.'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('سارة','Sarah'),
        w('تذهب إلى السينما مع أخيها','va au cinéma avec son frère'),
        p('.'),
        w('يشتريان التذاكر','ils achètent des billets'),
        w('والفشار','et du pop-corn'),
        p('.'),
        w('الفيلم يبدأ','le film commence'),
        w('ويصمت الجميع','et tout le monde se tait'),
        p('.'),
        w('في النهاية','à la fin'),
        w('يصفّق الجمهور','le public applaudit'),
        p('.'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('ليا','Léa'),
        w('تدخل المخبز في الصباح','entre dans la boulangerie le matin'),
        p('.'),
        w('تنبعث رائحة الخبز الطازج','Ça sent le pain frais'),
        p('.'),
        w('تطلب باغيت وكرواسون','Elle commande une baguette et un croissant'),
        p('.'),
        w('الخبازة','La boulangère'),
        w('تبتسم وتعطيها الباقي','sourit et lui rend la monnaie'),
        p('.'),
        w('ليا','Léa'),
        w('تخرج سعيدة بحقيبة الخبز','sort contente avec son sac de pain'),
        p('.'),
      ]
    }
  ,
  ],

  hi: [
    {
      id: 'vidyalay', emoji: '📚', title_fr: "À l'école", level: 2,
      tokens: [
        w('आया','Aya'),
        w('जल्दी',"arrive tôt à l'école"),
        w('विद्यालय पहुँचती है',''),
        p('।'),
        w('वह अपनी अध्यापिका को नमस्ते करती है','elle salue sa professeure'),
        p('।'),
        w('वह अपनी कॉपी खोलती है','elle ouvre son cahier'),
        w('और पाठ सुनती है','et écoute la leçon'),
        p('।'),
        w('अंत में','à la fin'),
        w('वह अपना सामान उठाती है','elle range ses affaires'),
        w('और घर लौटती है','et rentre'),
        p('।'),
      ]
    }
  ,
    {
      id: 'restaurant2', emoji: '🍽️', title_fr: 'Au restaurant', level: 2,
      tokens: [
        w('राज','Raj'),
        w('भूखा','affamé'),
        w('रेस्तराँ में जाता है','entre dans le restaurant'),
        p('।'),
        w('वह खिड़की के पास','près de la fenêtre'),
        w('एक मेज चुनता है','il choisit une table'),
        p('।'),
        w('वेटर','le serveur'),
        w('आज का खाना सुझाता है','recommande le plat du jour'),
        p('।'),
        w('राज मछली माँगता है','Raj commande le poisson'),
        w('और खुश होता है','et est satisfait'),
        p('।'),
      ]
    }
  ,
    {
      id: 'havai_adda', emoji: '✈️', title_fr: "À l'aéroport", level: 3,
      tokens: [
        w('प्रिया','Priya'),
        w('अपने सूटकेस के साथ','avec sa valise'),
        w('हवाई अड्डे पहुँचती है',"arrive à l'aéroport"),
        p('।'),
        w('वह जाँच पर','au contrôle'),
        w('अपना पासपोर्ट दिखाती है','elle montre son passeport'),
        p('।'),
        w('वह प्रतीक्षा कक्ष में',"dans la salle d'attente"),
        w('अपनी उड़ान का इंतज़ार करती है','elle attend son vol'),
        p('।'),
        w('हवाई जहाज',"l'avion"),
        w('समय पर उड़ान भरता है',"décolle à l\'heure"),
        p('।'),
      ]
    }
  ,
    {
      id: 'hotel', emoji: '🏨', title_fr: "À l'hôtel", level: 2,
      tokens: [
        w('सारा','Sara'),
        w('शाम को होटल पहुँचती है','arrive le soir à l\'hôtel'),
        p('।'),
        w('रिसेप्शनिस्ट','La réceptionniste'),
        w('मुस्कुराकर उसे चाबी देती है','sourit et lui donne la clé'),
        p('।'),
        w('वह अपने कमरे में जाती है','elle monte dans sa chambre'),
        w('और सूटकेस खोलती है','et ouvre sa valise'),
        p('।'),
        w('शाम को','le soir'),
        w('वह अच्छी नींद सोती है','elle dort bien'),
        p('।'),
      ]
    }
  ,
    {
      id: 'plage', emoji: '🏖️', title_fr: 'Une journée à la plage', level: 3,
      tokens: [
        w('सारा','Sara'),
        w('अपने दोस्तों के साथ समुद्र तट तक जाती है',"marche jusqu'à la plage avec ses amis"),
        p('।'),
        w('सूरज चमकता है','le soleil brille'),
        w('और समुद्र शांत है','et la mer est calme'),
        p('।'),
        w('वे पानी में तैरते हैं',"ils nagent dans l'eau"),
        w('और गेंद से खेलते हैं','et jouent avec le ballon'),
        p('।'),
        w('शाम को','le soir'),
        w('वे साथ सूर्यास्त देखते हैं','ils regardent ensemble le coucher de soleil'),
        p('।'),
      ]
    }
  ,
    {
      id: 'cinema', emoji: '🎬', title_fr: 'Au cinéma', level: 3,
      tokens: [
        w('सारा','Sara'),
        w('अपने भाई के साथ सिनेमा जाती है','va au cinéma avec son frère'),
        p('।'),
        w('वे टिकट खरीदते हैं','ils achètent des billets'),
        w('और पॉपकॉर्न भी','et du pop-corn'),
        p('।'),
        w('फ़िल्म शुरू होती है','le film commence'),
        w('और सब चुप हो जाते हैं','et tout le monde se tait'),
        p('।'),
        w('अंत में','à la fin'),
        w('दर्शक तालियाँ बजाते हैं','le public applaudit'),
        p('।'),
      ]
    }
  ,
    {
      id: 'boulangerie', emoji: '🥖', title_fr: 'À la boulangerie', level: 1,
      tokens: [
        w('लिया','Léa'),
        w('सुबह बेकरी में जाती है','entre dans la boulangerie le matin'),
        p('।'),
        w('ताज़ी रोटी की खुशबू आती है','Ça sent le pain frais'),
        p('।'),
        w('वह बैगेट और क्रोइसां मंगवाती है','Elle commande une baguette et un croissant'),
        p('।'),
        w('बेकर','La boulangère'),
        w('मुस्कुराकर उसे बाकी पैसे देता है','sourit et lui rend la monnaie'),
        p('।'),
        w('लिया','Léa'),
        w('रोटी का बैग लेकर खुश होकर निकलती है','sort contente avec son sac de pain'),
        p('।'),
      ]
    }
  ,
  ],

}

// Fusionner avec STORIES
for (const lang in STORIES_EXTRA) {
  if (STORIES[lang]) {
    STORIES[lang].push(...STORIES_EXTRA[lang])
  }
}

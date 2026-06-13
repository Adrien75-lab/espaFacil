export interface StoryToken {
  text: string     // mot dans la langue cible
  fr: string       // traduction française (vide pour la ponctuation)
  punct?: boolean  // ponctuation, non cliquable
}

export interface Story {
  id: string
  emoji: string
  title_fr: string
  tokens: StoryToken[]
}

const w = (text: string, fr: string): StoryToken => ({ text, fr })
const p = (text: string): StoryToken => ({ text, fr: '', punct: true })

export const STORIES: Record<string, Story[]> = {

  es: [
    {
      id: 'cafe', emoji: '☕', title_fr: 'Au café',
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
      tokens: [
        w('Carlos','Carlos'), w('pasea','se promène'), w('por','dans'), w('el','le'), w('parque','parc'), w('con','avec'), w('su','son'), w('perro','chien'), p('.'),
        w('Los','les'), w('niños','enfants'), w('juegan','jouent'), w('en','dans'), w('la','la'), w('hierba','herbe'), p('.'),
        w('El','le'), w('cielo','ciel'), w('está','est'), w('azul','bleu'), w('y','et'), w('hace','il fait'), w('calor','chaud'), p('.'),
        w('Carlos','Carlos'), w('se sienta','s\'assoit'), w('en','sur'), w('un','un'), w('banco','banc'), w('y','et'), w('descansa','se repose'), p('.'),
      ]
    },
    {
      id: 'mercado', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Tom','Tom'), w('walks','se promène'), w('in','dans'), w('the','le'), w('park','parc'), w('with','avec'), w('his','son'), w('dog','chien'), p('.'),
        w('Children','des enfants'), w('play','jouent'), w('on','dans'), w('the','la'), w('grass','herbe'), p('.'),
        w('The','le'), w('sky','ciel'), w('is','est'), w('blue','bleu'), w('and','et'), w('the','le'), w('sun','soleil'), w('shines','brille'), p('.'),
        w('Tom','Tom'), w('sits','s\'assoit'), w('on','sur'), w('a','un'), w('bench','banc'), w('and','et'), w('rests','se repose'), p('.'),
      ]
    },
    {
      id: 'market', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Felix','Felix'), w('spaziert','se promène'), w('im','dans le'), w('Park','parc'), w('mit','avec'), w('seinem','son'), w('Hund','chien'), p('.'),
        w('Kinder','des enfants'), w('spielen','jouent'), w('auf','dans'), w('dem','la'), w('Rasen','herbe'), p('.'),
        w('Der','le'), w('Himmel','ciel'), w('ist','est'), w('blau','bleu'), w('und','et'), w('die','le'), w('Sonne','soleil'), w('scheint','brille'), p('.'),
        w('Felix','Felix'), w('setzt sich','s\'assoit'), w('auf','sur'), w('eine','un'), w('Bank','banc'), w('und','et'), w('erholt sich','se repose'), p('.'),
      ]
    },
    {
      id: 'markt', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Marco','Marco'), w('passeggia','se promène'), w('nel','dans le'), w('parco','parc'), w('con','avec'), w('il suo','son'), w('cane','chien'), p('.'),
        w('I bambini','les enfants'), w('giocano','jouent'), w('sull\'erba','dans l\'herbe'), p('.'),
        w('Il','le'), w('cielo','ciel'), w('è','est'), w('blu','bleu'), w('e','et'), w('il','le'), w('sole','soleil'), w('splende','brille'), p('.'),
        w('Marco','Marco'), w('si siede','s\'assoit'), w('su','sur'), w('una','un'), w('panchina','banc'), w('e','et'), w('si riposa','se repose'), p('.'),
      ]
    },
    {
      id: 'mercato', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Pedro','Pedro'), w('passeia','se promène'), w('no','dans le'), w('parque','parc'), w('com','avec'), w('o seu','son'), w('cão','chien'), p('.'),
        w('As crianças','les enfants'), w('brincam','jouent'), w('na','dans la'), w('relva','herbe'), p('.'),
        w('O','le'), w('céu','ciel'), w('está','est'), w('azul','bleu'), w('e','et'), w('faz','il fait'), w('calor','chaud'), p('.'),
        w('Pedro','Pedro'), w('senta-se','s\'assoit'), w('num','sur un'), w('banco','banc'), w('e','et'), w('descansa','se repose'), p('.'),
      ]
    },
    {
      id: 'mercado', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Lars','Lars'), w('wandelt','se promène'), w('in','dans'), w('het','le'), w('park','parc'), w('met','avec'), w('zijn','son'), w('hond','chien'), p('.'),
        w('Kinderen','des enfants'), w('spelen','jouent'), w('op','dans'), w('het','la'), w('gras','herbe'), p('.'),
        w('De','le'), w('lucht','ciel'), w('is','est'), w('blauw','bleu'), w('en','et'), w('de','le'), w('zon','soleil'), w('schijnt','brille'), p('.'),
        w('Lars','Lars'), w('zit','s\'assoit'), w('op','sur'), w('een','un'), w('bankje','banc'), w('en','et'), w('rust uit','se repose'), p('.'),
      ]
    },
    {
      id: 'markt', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Marek','Marek'), w('spaceruje','se promène'), w('w','dans'), w('parku','parc'), w('z','avec'), w('psem','chien'), p('.'),
        w('Dzieci','les enfants'), w('bawią się','jouent'), w('na','dans la'), w('trawie','herbe'), p('.'),
        w('Niebo','le ciel'), w('jest','est'), w('niebieskie','bleu'), w('i','et'), w('słońce','le soleil'), w('świeci','brille'), p('.'),
        w('Marek','Marek'), w('siada','s\'assoit'), w('na','sur'), w('ławce','banc'), w('i','et'), w('odpoczywa','se repose'), p('.'),
      ]
    },
    {
      id: 'rynek', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Can','Can'), w('köpeğiyle','avec son chien'), w('parkta','dans le parc'), w('yürür','se promène'), p('.'),
        w('Çocuklar','les enfants'), w('çimenlerde','dans l\'herbe'), w('oynar','jouent'), p('.'),
        w('Gökyüzü','le ciel'), w('mavi','bleu'), w('ve','et'), w('güneş','le soleil'), w('parlıyor','brille'), p('.'),
        w('Can','Can'), w('bir bankta','sur un banc'), w('oturur','s\'assoit'), w('ve','et'), w('dinlenir','se repose'), p('.'),
      ]
    },
    {
      id: 'pazar', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('Антон','Anton'), w('гуляет','se promène'), w('в','dans'), w('парке','parc'), w('с','avec'), w('собакой','chien'), p('.'),
        w('Дети','les enfants'), w('играют','jouent'), w('на','dans la'), w('траве','herbe'), p('.'),
        w('Небо','le ciel'), w('голубое','bleu'), w('и','et'), w('солнце','le soleil'), w('светит','brille'), p('.'),
        w('Антон','Anton'), w('садится','s\'assoit'), w('на','sur'), w('скамейку','banc'), w('и','et'), w('отдыхает','se repose'), p('.'),
      ]
    },
    {
      id: 'rynok', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('けんじ','Kenji'), w('は','(sujet)'), w('犬','chien'), w('と','avec'), w('公園','parc'), w('を','(objet)'), w('散歩します','se promène'), p('。'),
        w('子どもたち','les enfants'), w('が','(sujet)'), w('芝生','herbe'), w('で','dans'), w('遊んでいます','jouent'), p('。'),
        w('空','ciel'), w('は','(particule)'), w('青い','bleu'), w('し','et'), w('太陽','soleil'), w('が','(sujet)'), w('輝いています','brille'), p('。'),
        w('けんじ','Kenji'), w('は','(particule)'), w('ベンチ','banc'), w('に','sur'), w('座って','s\'assoit'), w('休みます','se repose'), p('。'),
      ]
    },
    {
      id: 'ichiba', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('준호','Junho'), w('는','(particule)'), w('강아지와','avec son chien'), w('공원에서','dans le parc'), w('산책합니다','se promène'), p('.'),
        w('아이들이','les enfants'), w('잔디밭에서','dans l\'herbe'), w('놀고 있습니다','jouent'), p('.'),
        w('하늘이','le ciel'), w('파랗고','est bleu et'), w('해가','le soleil'), w('빛납니다','brille'), p('.'),
        w('준호는','Junho'), w('벤치에','sur un banc'), w('앉아서','s\'assoit et'), w('쉽니다','se repose'), p('.'),
      ]
    },
    {
      id: 'sijang', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('明明','Mingming'), w('带着','avec'), w('他的狗','son chien'), w('在','dans'), w('公园','parc'), w('散步','se promène'), p('。'),
        w('孩子们','les enfants'), w('在','dans'), w('草地上','l\'herbe'), w('玩耍','jouent'), p('。'),
        w('天空','le ciel'), w('是蓝色的','est bleu'), w('阳光','le soleil'), w('灿烂','brille'), p('。'),
        w('明明','Mingming'), w('坐在','s\'assoit sur'), w('长椅上','un banc'), w('休息','se repose'), p('。'),
      ]
    },
    {
      id: 'shichang', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('أحمد','Ahmed'), w('يتنزه','se promène'), w('في','dans'), w('الحديقة','parc'), w('مع','avec'), w('كلبه','son chien'), p('.'),
        w('الأطفال','les enfants'), w('يلعبون','jouent'), w('على','dans'), w('العشب','herbe'), p('.'),
        w('السماء','le ciel'), w('زرقاء','bleu'), w('والشمس','et le soleil'), w('تسطع','brille'), p('.'),
        w('أحمد','Ahmed'), w('يجلس','s\'assoit'), w('على','sur'), w('مقعد','banc'), w('ويستريح','et se repose'), p('.'),
      ]
    },
    {
      id: 'souq', emoji: '🛒', title_fr: 'Au marché',
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
      tokens: [
        w('रोहन','Rohan'), w('अपने कुत्ते','son chien'), w('के साथ','avec'), w('पार्क','parc'), w('में','dans'), w('घूमता है','se promène'), p('।'),
        w('बच्चे','les enfants'), w('घास','herbe'), w('पर','dans la'), w('खेलते हैं','jouent'), p('।'),
        w('आकाश','le ciel'), w('नीला है','est bleu'), w('और','et'), w('सूरज','le soleil'), w('चमकता है','brille'), p('।'),
        w('रोहन','Rohan'), w('एक बेंच','un banc'), w('पर','sur'), w('बैठता है','s\'assoit'), w('और','et'), w('आराम करता है','se repose'), p('।'),
      ]
    },
    {
      id: 'bazaar', emoji: '🛒', title_fr: 'Au marché',
      tokens: [
        w('अनीता','Anita'), w('हर सुबह','chaque matin'), w('बाज़ार','marché'), w('जाती है','va au'), p('।'),
        w('वह','elle'), w('फल','fruits'), p(','), w('सब्जियाँ','légumes'), w('और','et'), w('ताज़ी','frais'), w('रोटी','pain'), w('खरीदती है','achète'), p('।'),
        w('विक्रेता','le vendeur'), w('उसे','lui'), w('सबसे लाल','les plus rouges'), w('सेब','pommes'), w('देता है','donne'), p('।'),
        w('अनीता','Anita'), w('खुश होकर','contente'), w('घर','chez elle'), w('लौटती है','rentre'), p('।'),
      ]
    },
  ],

}

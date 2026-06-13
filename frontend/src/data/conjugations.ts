// Conjugation data — 14 languages × 6 verbs × 3 tenses
// Structure: pronouns defined once per language; forms are plain string arrays.

export interface ConjugationEntry { pronoun: string; form: string }
export interface Verb { infinitive: string; translation: string; tenses: Record<string, ConjugationEntry[]> }

const PRONOUNS: Record<string, string[]> = {
  es: ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'],
  en: ['I', 'you', 'he/she', 'we', 'you (pl.)', 'they'],
  de: ['ich', 'du', 'er/sie', 'wir', 'ihr', 'sie'],
  it: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
  pt: ['eu', 'tu', 'ele/ela', 'nós', 'vós', 'eles'],
  nl: ['ik', 'jij', 'hij/zij', 'wij', 'jullie', 'zij'],
  pl: ['ja', 'ty', 'on/ona', 'my', 'wy', 'oni'],
  tr: ['ben', 'sen', 'o', 'biz', 'siz', 'onlar'],
  ru: ['я', 'ты', 'он/она', 'мы', 'вы', 'они'],
  ja: ['私 (je)', 'あなた (tu)', '彼/彼女 (il/elle)', '私たち (nous)', 'あなたたち (vous)', '彼ら (ils)'],
  ko: ['저 (je)', '당신 (tu)', '그/그녀 (il/elle)', '우리 (nous)', '여러분 (vous)', '그들 (ils)'],
  zh: ['我 (je)', '你 (tu)', '他/她 (il/elle)', '我们 (nous)', '你们 (vous)', '他们 (ils)'],
  ar: ['أنا', 'أنتَ', 'هو/هي', 'نحن', 'أنتم', 'هم'],
  hi: ['मैं', 'तुम', 'वह', 'हम', 'आप', 'वे'],
}

const RAW: Record<string, { inf: string; fr: string; t: Record<string, string[]> }[]> = {
  es: [
    { inf: 'ser', fr: 'être', t: {
      'Présent': ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
      'Passé': ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      'Futur': ['seré', 'serás', 'será', 'seremos', 'seréis', 'serán'],
    } },
    { inf: 'tener', fr: 'avoir', t: {
      'Présent': ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
      'Passé': ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
      'Futur': ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'],
    } },
    { inf: 'ir', fr: 'aller', t: {
      'Présent': ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
      'Passé': ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      'Futur': ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán'],
    } },
    { inf: 'hacer', fr: 'faire', t: {
      'Présent': ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
      'Passé': ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
      'Futur': ['haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'],
    } },
    { inf: 'hablar', fr: 'parler', t: {
      'Présent': ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan'],
      'Passé': ['hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron'],
      'Futur': ['hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablaréis', 'hablarán'],
    } },
    { inf: 'querer', fr: 'vouloir', t: {
      'Présent': ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'],
      'Passé': ['quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'],
      'Futur': ['querré', 'querrás', 'querrá', 'querremos', 'querréis', 'querrán'],
    } },
  ],
  en: [
    { inf: 'to be', fr: 'être', t: {
      'Présent': ['am', 'are', 'is', 'are', 'are', 'are'],
      'Passé': ['was', 'were', 'was', 'were', 'were', 'were'],
      'Futur': ['will be', 'will be', 'will be', 'will be', 'will be', 'will be'],
    } },
    { inf: 'to have', fr: 'avoir', t: {
      'Présent': ['have', 'have', 'has', 'have', 'have', 'have'],
      'Passé': ['had', 'had', 'had', 'had', 'had', 'had'],
      'Futur': ['will have', 'will have', 'will have', 'will have', 'will have', 'will have'],
    } },
    { inf: 'to go', fr: 'aller', t: {
      'Présent': ['go', 'go', 'goes', 'go', 'go', 'go'],
      'Passé': ['went', 'went', 'went', 'went', 'went', 'went'],
      'Futur': ['will go', 'will go', 'will go', 'will go', 'will go', 'will go'],
    } },
    { inf: 'to do', fr: 'faire', t: {
      'Présent': ['do', 'do', 'does', 'do', 'do', 'do'],
      'Passé': ['did', 'did', 'did', 'did', 'did', 'did'],
      'Futur': ['will do', 'will do', 'will do', 'will do', 'will do', 'will do'],
    } },
    { inf: 'to speak', fr: 'parler', t: {
      'Présent': ['speak', 'speak', 'speaks', 'speak', 'speak', 'speak'],
      'Passé': ['spoke', 'spoke', 'spoke', 'spoke', 'spoke', 'spoke'],
      'Futur': ['will speak', 'will speak', 'will speak', 'will speak', 'will speak', 'will speak'],
    } },
    { inf: 'to want', fr: 'vouloir', t: {
      'Présent': ['want', 'want', 'wants', 'want', 'want', 'want'],
      'Passé': ['wanted', 'wanted', 'wanted', 'wanted', 'wanted', 'wanted'],
      'Futur': ['will want', 'will want', 'will want', 'will want', 'will want', 'will want'],
    } },
  ],
  de: [
    { inf: 'sein', fr: 'être', t: {
      'Présent': ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
      'Passé': ['war', 'warst', 'war', 'waren', 'wart', 'waren'],
      'Futur': ['werde sein', 'wirst sein', 'wird sein', 'werden sein', 'werdet sein', 'werden sein'],
    } },
    { inf: 'haben', fr: 'avoir', t: {
      'Présent': ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
      'Passé': ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'],
      'Futur': ['werde haben', 'wirst haben', 'wird haben', 'werden haben', 'werdet haben', 'werden haben'],
    } },
    { inf: 'gehen', fr: 'aller', t: {
      'Présent': ['gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'],
      'Passé': ['ging', 'gingst', 'ging', 'gingen', 'gingt', 'gingen'],
      'Futur': ['werde gehen', 'wirst gehen', 'wird gehen', 'werden gehen', 'werdet gehen', 'werden gehen'],
    } },
    { inf: 'machen', fr: 'faire', t: {
      'Présent': ['mache', 'machst', 'macht', 'machen', 'macht', 'machen'],
      'Passé': ['machte', 'machtest', 'machte', 'machten', 'machtet', 'machten'],
      'Futur': ['werde machen', 'wirst machen', 'wird machen', 'werden machen', 'werdet machen', 'werden machen'],
    } },
    { inf: 'sprechen', fr: 'parler', t: {
      'Présent': ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'],
      'Passé': ['sprach', 'sprachst', 'sprach', 'sprachen', 'spracht', 'sprachen'],
      'Futur': ['werde sprechen', 'wirst sprechen', 'wird sprechen', 'werden sprechen', 'werdet sprechen', 'werden sprechen'],
    } },
    { inf: 'wollen', fr: 'vouloir', t: {
      'Présent': ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
      'Passé': ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'],
      'Futur': ['werde wollen', 'wirst wollen', 'wird wollen', 'werden wollen', 'werdet wollen', 'werden wollen'],
    } },
  ],
  it: [
    { inf: 'essere', fr: 'être', t: {
      'Présent': ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
      'Passé': ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'],
      'Futur': ['sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno'],
    } },
    { inf: 'avere', fr: 'avoir', t: {
      'Présent': ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
      'Passé': ['avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano'],
      'Futur': ['avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno'],
    } },
    { inf: 'andare', fr: 'aller', t: {
      'Présent': ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
      'Passé': ['andavo', 'andavi', 'andava', 'andavamo', 'andavate', 'andavano'],
      'Futur': ['andrò', 'andrai', 'andrà', 'andremo', 'andrete', 'andranno'],
    } },
    { inf: 'fare', fr: 'faire', t: {
      'Présent': ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
      'Passé': ['facevo', 'facevi', 'faceva', 'facevamo', 'facevate', 'facevano'],
      'Futur': ['farò', 'farai', 'farà', 'faremo', 'farete', 'faranno'],
    } },
    { inf: 'parlare', fr: 'parler', t: {
      'Présent': ['parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano'],
      'Passé': ['parlavo', 'parlavi', 'parlava', 'parlavamo', 'parlavate', 'parlavano'],
      'Futur': ['parlerò', 'parlerai', 'parlerà', 'parleremo', 'parlerete', 'parleranno'],
    } },
    { inf: 'volere', fr: 'vouloir', t: {
      'Présent': ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'],
      'Passé': ['volevo', 'volevi', 'voleva', 'volevamo', 'volevate', 'volevano'],
      'Futur': ['vorrò', 'vorrai', 'vorrà', 'vorremo', 'vorrete', 'vorranno'],
    } },
  ],
  pt: [
    { inf: 'ser', fr: 'être', t: {
      'Présent': ['sou', 'és', 'é', 'somos', 'sois', 'são'],
      'Passé': ['era', 'eras', 'era', 'éramos', 'éreis', 'eram'],
      'Futur': ['serei', 'serás', 'será', 'seremos', 'sereis', 'serão'],
    } },
    { inf: 'ter', fr: 'avoir', t: {
      'Présent': ['tenho', 'tens', 'tem', 'temos', 'tendes', 'têm'],
      'Passé': ['tinha', 'tinhas', 'tinha', 'tínhamos', 'tínheis', 'tinham'],
      'Futur': ['terei', 'terás', 'terá', 'teremos', 'tereis', 'terão'],
    } },
    { inf: 'ir', fr: 'aller', t: {
      'Présent': ['vou', 'vais', 'vai', 'vamos', 'ides', 'vão'],
      'Passé': ['ia', 'ias', 'ia', 'íamos', 'íeis', 'iam'],
      'Futur': ['irei', 'irás', 'irá', 'iremos', 'ireis', 'irão'],
    } },
    { inf: 'fazer', fr: 'faire', t: {
      'Présent': ['faço', 'fazes', 'faz', 'fazemos', 'fazeis', 'fazem'],
      'Passé': ['fazia', 'fazias', 'fazia', 'fazíamos', 'fazíeis', 'faziam'],
      'Futur': ['farei', 'farás', 'fará', 'faremos', 'fareis', 'farão'],
    } },
    { inf: 'falar', fr: 'parler', t: {
      'Présent': ['falo', 'falas', 'fala', 'falamos', 'falais', 'falam'],
      'Passé': ['falava', 'falavas', 'falava', 'falávamos', 'faláveis', 'falavam'],
      'Futur': ['falarei', 'falarás', 'falará', 'falaremos', 'falareis', 'falarão'],
    } },
    { inf: 'querer', fr: 'vouloir', t: {
      'Présent': ['quero', 'queres', 'quer', 'queremos', 'quereis', 'querem'],
      'Passé': ['queria', 'querias', 'queria', 'queríamos', 'queríeis', 'queriam'],
      'Futur': ['quererei', 'quererás', 'quererá', 'quereremos', 'querereis', 'quererão'],
    } },
  ],
  nl: [
    { inf: 'zijn', fr: 'être', t: {
      'Présent': ['ben', 'bent', 'is', 'zijn', 'zijn', 'zijn'],
      'Passé': ['was', 'was', 'was', 'waren', 'waren', 'waren'],
      'Futur': ['zal zijn', 'zal zijn', 'zal zijn', 'zullen zijn', 'zullen zijn', 'zullen zijn'],
    } },
    { inf: 'hebben', fr: 'avoir', t: {
      'Présent': ['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben'],
      'Passé': ['had', 'had', 'had', 'hadden', 'hadden', 'hadden'],
      'Futur': ['zal hebben', 'zal hebben', 'zal hebben', 'zullen hebben', 'zullen hebben', 'zullen hebben'],
    } },
    { inf: 'gaan', fr: 'aller', t: {
      'Présent': ['ga', 'gaat', 'gaat', 'gaan', 'gaan', 'gaan'],
      'Passé': ['ging', 'ging', 'ging', 'gingen', 'gingen', 'gingen'],
      'Futur': ['zal gaan', 'zal gaan', 'zal gaan', 'zullen gaan', 'zullen gaan', 'zullen gaan'],
    } },
    { inf: 'maken', fr: 'faire', t: {
      'Présent': ['maak', 'maakt', 'maakt', 'maken', 'maken', 'maken'],
      'Passé': ['maakte', 'maakte', 'maakte', 'maakten', 'maakten', 'maakten'],
      'Futur': ['zal maken', 'zal maken', 'zal maken', 'zullen maken', 'zullen maken', 'zullen maken'],
    } },
    { inf: 'spreken', fr: 'parler', t: {
      'Présent': ['spreek', 'spreekt', 'spreekt', 'spreken', 'spreken', 'spreken'],
      'Passé': ['sprak', 'sprak', 'sprak', 'spraken', 'spraken', 'spraken'],
      'Futur': ['zal spreken', 'zal spreken', 'zal spreken', 'zullen spreken', 'zullen spreken', 'zullen spreken'],
    } },
    { inf: 'willen', fr: 'vouloir', t: {
      'Présent': ['wil', 'wilt', 'wil', 'willen', 'willen', 'willen'],
      'Passé': ['wilde', 'wilde', 'wilde', 'wilden', 'wilden', 'wilden'],
      'Futur': ['zal willen', 'zal willen', 'zal willen', 'zullen willen', 'zullen willen', 'zullen willen'],
    } },
  ],
  pl: [
    { inf: 'być', fr: 'être', t: {
      'Présent': ['jestem', 'jesteś', 'jest', 'jesteśmy', 'jesteście', 'są'],
      'Passé': ['byłem', 'byłeś', 'był', 'byliśmy', 'byliście', 'byli'],
      'Futur': ['będę', 'będziesz', 'będzie', 'będziemy', 'będziecie', 'będą'],
    } },
    { inf: 'mieć', fr: 'avoir', t: {
      'Présent': ['mam', 'masz', 'ma', 'mamy', 'macie', 'mają'],
      'Passé': ['miałem', 'miałeś', 'miał', 'mieliśmy', 'mieliście', 'mieli'],
      'Futur': ['będę mieć', 'będziesz mieć', 'będzie mieć', 'będziemy mieć', 'będziecie mieć', 'będą mieć'],
    } },
    { inf: 'iść', fr: 'aller', t: {
      'Présent': ['idę', 'idziesz', 'idzie', 'idziemy', 'idziecie', 'idą'],
      'Passé': ['szedłem', 'szedłeś', 'szedł', 'szliśmy', 'szliście', 'szli'],
      'Futur': ['pójdę', 'pójdziesz', 'pójdzie', 'pójdziemy', 'pójdziecie', 'pójdą'],
    } },
    { inf: 'robić', fr: 'faire', t: {
      'Présent': ['robię', 'robisz', 'robi', 'robimy', 'robicie', 'robią'],
      'Passé': ['robiłem', 'robiłeś', 'robił', 'robiliśmy', 'robiliście', 'robili'],
      'Futur': ['będę robić', 'będziesz robić', 'będzie robić', 'będziemy robić', 'będziecie robić', 'będą robić'],
    } },
    { inf: 'mówić', fr: 'parler', t: {
      'Présent': ['mówię', 'mówisz', 'mówi', 'mówimy', 'mówicie', 'mówią'],
      'Passé': ['mówiłem', 'mówiłeś', 'mówił', 'mówiliśmy', 'mówiliście', 'mówili'],
      'Futur': ['będę mówić', 'będziesz mówić', 'będzie mówić', 'będziemy mówić', 'będziecie mówić', 'będą mówić'],
    } },
    { inf: 'chcieć', fr: 'vouloir', t: {
      'Présent': ['chcę', 'chcesz', 'chce', 'chcemy', 'chcecie', 'chcą'],
      'Passé': ['chciałem', 'chciałeś', 'chciał', 'chcieliśmy', 'chcieliście', 'chcieli'],
      'Futur': ['będę chcieć', 'będziesz chcieć', 'będzie chcieć', 'będziemy chcieć', 'będziecie chcieć', 'będą chcieć'],
    } },
  ],
  tr: [
    { inf: 'olmak', fr: 'être', t: {
      'Présent': ['oluyorum', 'oluyorsun', 'oluyor', 'oluyoruz', 'oluyorsunuz', 'oluyorlar'],
      'Passé': ['oldum', 'oldun', 'oldu', 'olduk', 'oldunuz', 'oldular'],
      'Futur': ['olacağım', 'olacaksın', 'olacak', 'olacağız', 'olacaksınız', 'olacaklar'],
    } },
    { inf: 'gitmek', fr: 'aller', t: {
      'Présent': ['gidiyorum', 'gidiyorsun', 'gidiyor', 'gidiyoruz', 'gidiyorsunuz', 'gidiyorlar'],
      'Passé': ['gittim', 'gittin', 'gitti', 'gittik', 'gittiniz', 'gittiler'],
      'Futur': ['gideceğim', 'gideceksin', 'gidecek', 'gideceğiz', 'gideceksiniz', 'gidecekler'],
    } },
    { inf: 'yapmak', fr: 'faire', t: {
      'Présent': ['yapıyorum', 'yapıyorsun', 'yapıyor', 'yapıyoruz', 'yapıyorsunuz', 'yapıyorlar'],
      'Passé': ['yaptım', 'yaptın', 'yaptı', 'yaptık', 'yaptınız', 'yaptılar'],
      'Futur': ['yapacağım', 'yapacaksın', 'yapacak', 'yapacağız', 'yapacaksınız', 'yapacaklar'],
    } },
    { inf: 'konuşmak', fr: 'parler', t: {
      'Présent': ['konuşuyorum', 'konuşuyorsun', 'konuşuyor', 'konuşuyoruz', 'konuşuyorsunuz', 'konuşuyorlar'],
      'Passé': ['konuştum', 'konuştun', 'konuştu', 'konuştuk', 'konuştunuz', 'konuştular'],
      'Futur': ['konuşacağım', 'konuşacaksın', 'konuşacak', 'konuşacağız', 'konuşacaksınız', 'konuşacaklar'],
    } },
    { inf: 'istemek', fr: 'vouloir', t: {
      'Présent': ['istiyorum', 'istiyorsun', 'istiyor', 'istiyoruz', 'istiyorsunuz', 'istiyorlar'],
      'Passé': ['istedim', 'istedin', 'istedi', 'istedik', 'istediniz', 'istediler'],
      'Futur': ['isteyeceğim', 'isteyeceksin', 'isteyecek', 'isteyeceğiz', 'isteyeceksiniz', 'isteyecekler'],
    } },
    { inf: 'bilmek', fr: 'savoir', t: {
      'Présent': ['biliyorum', 'biliyorsun', 'biliyor', 'biliyoruz', 'biliyorsunuz', 'biliyorlar'],
      'Passé': ['bildim', 'bildin', 'bildi', 'bildik', 'bildiniz', 'bildiler'],
      'Futur': ['bileceğim', 'bileceksin', 'bilecek', 'bileceğiz', 'bileceksiniz', 'bilecekler'],
    } },
  ],
  ru: [
    { inf: 'быть', fr: 'être', t: {
      'Présent': ['есть', 'есть', 'есть', 'есть', 'есть', 'есть'],
      'Passé': ['был', 'была', 'был', 'были', 'были', 'были'],
      'Futur': ['буду', 'будешь', 'будет', 'будем', 'будете', 'будут'],
    } },
    { inf: 'идти', fr: 'aller', t: {
      'Présent': ['иду', 'идёшь', 'идёт', 'идём', 'идёте', 'идут'],
      'Passé': ['шёл', 'шла', 'шёл', 'шли', 'шли', 'шли'],
      'Futur': ['пойду', 'пойдёшь', 'пойдёт', 'пойдём', 'пойдёте', 'пойдут'],
    } },
    { inf: 'делать', fr: 'faire', t: {
      'Présent': ['делаю', 'делаешь', 'делает', 'делаем', 'делаете', 'делают'],
      'Passé': ['делал', 'делала', 'делал', 'делали', 'делали', 'делали'],
      'Futur': ['буду делать', 'будешь делать', 'будет делать', 'будем делать', 'будете делать', 'будут делать'],
    } },
    { inf: 'говорить', fr: 'parler', t: {
      'Présent': ['говорю', 'говоришь', 'говорит', 'говорим', 'говорите', 'говорят'],
      'Passé': ['говорил', 'говорила', 'говорил', 'говорили', 'говорили', 'говорили'],
      'Futur': ['буду говорить', 'будешь говорить', 'будет говорить', 'будем говорить', 'будете говорить', 'будут говорить'],
    } },
    { inf: 'хотеть', fr: 'vouloir', t: {
      'Présent': ['хочу', 'хочешь', 'хочет', 'хотим', 'хотите', 'хотят'],
      'Passé': ['хотел', 'хотела', 'хотел', 'хотели', 'хотели', 'хотели'],
      'Futur': ['буду хотеть', 'будешь хотеть', 'будет хотеть', 'будем хотеть', 'будете хотеть', 'будут хотеть'],
    } },
    { inf: 'знать', fr: 'savoir', t: {
      'Présent': ['знаю', 'знаешь', 'знает', 'знаем', 'знаете', 'знают'],
      'Passé': ['знал', 'знала', 'знал', 'знали', 'знали', 'знали'],
      'Futur': ['буду знать', 'будешь знать', 'будет знать', 'будем знать', 'будете знать', 'будут знать'],
    } },
  ],
  ja: [
    { inf: '行く (iku)', fr: 'aller', t: {
      'Présent (poli)': ['行きます', '行きます', '行きます', '行きます', '行きます', '行きます'],
      'Passé (poli)': ['行きました', '行きました', '行きました', '行きました', '行きました', '行きました'],
      'Présent (familier)': ['行く', '行く', '行く', '行く', '行く', '行く'],
    } },
    { inf: 'する (suru)', fr: 'faire', t: {
      'Présent (poli)': ['します', 'します', 'します', 'します', 'します', 'します'],
      'Passé (poli)': ['しました', 'しました', 'しました', 'しました', 'しました', 'しました'],
      'Présent (familier)': ['する', 'する', 'する', 'する', 'する', 'する'],
    } },
    { inf: '食べる (taberu)', fr: 'manger', t: {
      'Présent (poli)': ['食べます', '食べます', '食べます', '食べます', '食べます', '食べます'],
      'Passé (poli)': ['食べました', '食べました', '食べました', '食べました', '食べました', '食べました'],
      'Présent (familier)': ['食べる', '食べる', '食べる', '食べる', '食べる', '食べる'],
    } },
    { inf: '話す (hanasu)', fr: 'parler', t: {
      'Présent (poli)': ['話します', '話します', '話します', '話します', '話します', '話します'],
      'Passé (poli)': ['話しました', '話しました', '話しました', '話しました', '話しました', '話しました'],
      'Présent (familier)': ['話す', '話す', '話す', '話す', '話す', '話す'],
    } },
    { inf: '見る (miru)', fr: 'voir', t: {
      'Présent (poli)': ['見ます', '見ます', '見ます', '見ます', '見ます', '見ます'],
      'Passé (poli)': ['見ました', '見ました', '見ました', '見ました', '見ました', '見ました'],
      'Présent (familier)': ['見る', '見る', '見る', '見る', '見る', '見る'],
    } },
    { inf: '来る (kuru)', fr: 'venir', t: {
      'Présent (poli)': ['来ます', '来ます', '来ます', '来ます', '来ます', '来ます'],
      'Passé (poli)': ['来ました', '来ました', '来ました', '来ました', '来ました', '来ました'],
      'Présent (familier)': ['来る', '来る', '来る', '来る', '来る', '来る'],
    } },
  ],
  ko: [
    { inf: '가다 (gada)', fr: 'aller', t: {
      'Présent (poli)': ['가요', '가요', '가요', '가요', '가요', '가요'],
      'Passé (poli)': ['갔어요', '갔어요', '갔어요', '갔어요', '갔어요', '갔어요'],
      'Futur (poli)': ['갈 거예요', '갈 거예요', '갈 거예요', '갈 거예요', '갈 거예요', '갈 거예요'],
    } },
    { inf: '하다 (hada)', fr: 'faire', t: {
      'Présent (poli)': ['해요', '해요', '해요', '해요', '해요', '해요'],
      'Passé (poli)': ['했어요', '했어요', '했어요', '했어요', '했어요', '했어요'],
      'Futur (poli)': ['할 거예요', '할 거예요', '할 거예요', '할 거예요', '할 거예요', '할 거예요'],
    } },
    { inf: '먹다 (meokda)', fr: 'manger', t: {
      'Présent (poli)': ['먹어요', '먹어요', '먹어요', '먹어요', '먹어요', '먹어요'],
      'Passé (poli)': ['먹었어요', '먹었어요', '먹었어요', '먹었어요', '먹었어요', '먹었어요'],
      'Futur (poli)': ['먹을 거예요', '먹을 거예요', '먹을 거예요', '먹을 거예요', '먹을 거예요', '먹을 거예요'],
    } },
    { inf: '말하다 (malhada)', fr: 'parler', t: {
      'Présent (poli)': ['말해요', '말해요', '말해요', '말해요', '말해요', '말해요'],
      'Passé (poli)': ['말했어요', '말했어요', '말했어요', '말했어요', '말했어요', '말했어요'],
      'Futur (poli)': ['말할 거예요', '말할 거예요', '말할 거예요', '말할 거예요', '말할 거예요', '말할 거예요'],
    } },
    { inf: '있다 (itda)', fr: 'être/avoir', t: {
      'Présent (poli)': ['있어요', '있어요', '있어요', '있어요', '있어요', '있어요'],
      'Passé (poli)': ['있었어요', '있었어요', '있었어요', '있었어요', '있었어요', '있었어요'],
      'Futur (poli)': ['있을 거예요', '있을 거예요', '있을 거예요', '있을 거예요', '있을 거예요', '있을 거예요'],
    } },
    { inf: '오다 (oda)', fr: 'venir', t: {
      'Présent (poli)': ['와요', '와요', '와요', '와요', '와요', '와요'],
      'Passé (poli)': ['왔어요', '왔어요', '왔어요', '왔어요', '왔어요', '왔어요'],
      'Futur (poli)': ['올 거예요', '올 거예요', '올 거예요', '올 거예요', '올 거예요', '올 거예요'],
    } },
  ],
  zh: [
    { inf: '去 (qù)', fr: 'aller', t: {
      'Présent': ['去', '去', '去', '去', '去', '去'],
      'Passé': ['去了', '去了', '去了', '去了', '去了', '去了'],
      'Futur': ['要去', '要去', '要去', '要去', '要去', '要去'],
    } },
    { inf: '做 (zuò)', fr: 'faire', t: {
      'Présent': ['做', '做', '做', '做', '做', '做'],
      'Passé': ['做了', '做了', '做了', '做了', '做了', '做了'],
      'Futur': ['要做', '要做', '要做', '要做', '要做', '要做'],
    } },
    { inf: '吃 (chī)', fr: 'manger', t: {
      'Présent': ['吃', '吃', '吃', '吃', '吃', '吃'],
      'Passé': ['吃了', '吃了', '吃了', '吃了', '吃了', '吃了'],
      'Futur': ['要吃', '要吃', '要吃', '要吃', '要吃', '要吃'],
    } },
    { inf: '说 (shuō)', fr: 'parler', t: {
      'Présent': ['说', '说', '说', '说', '说', '说'],
      'Passé': ['说了', '说了', '说了', '说了', '说了', '说了'],
      'Futur': ['要说', '要说', '要说', '要说', '要说', '要说'],
    } },
    { inf: '是 (shì)', fr: 'être', t: {
      'Présent': ['是', '是', '是', '是', '是', '是'],
      'Passé': ['是', '是', '是', '是', '是', '是'],
      'Futur': ['是', '是', '是', '是', '是', '是'],
    } },
    { inf: '有 (yǒu)', fr: 'avoir', t: {
      'Présent': ['有', '有', '有', '有', '有', '有'],
      'Passé': ['有', '有', '有', '有', '有', '有'],
      'Futur': ['会有', '会有', '会有', '会有', '会有', '会有'],
    } },
  ],
  ar: [
    { inf: 'ذَهَبَ (dhahaba)', fr: 'aller', t: {
      'Présent': ['أَذْهَبُ', 'تَذْهَبُ', 'يَذْهَبُ', 'نَذْهَبُ', 'تَذْهَبُونَ', 'يَذْهَبُونَ'],
      'Passé': ['ذَهَبْتُ', 'ذَهَبْتَ', 'ذَهَبَ', 'ذَهَبْنَا', 'ذَهَبْتُمْ', 'ذَهَبُوا'],
      'Futur': ['سَأَذْهَبُ', 'سَتَذْهَبُ', 'سَيَذْهَبُ', 'سَنَذْهَبُ', 'سَتَذْهَبُونَ', 'سَيَذْهَبُونَ'],
    } },
    { inf: 'كَانَ (kana)', fr: 'être', t: {
      'Présent': ['أَكُونُ', 'تَكُونُ', 'يَكُونُ', 'نَكُونُ', 'تَكُونُونَ', 'يَكُونُونَ'],
      'Passé': ['كُنْتُ', 'كُنْتَ', 'كَانَ', 'كُنَّا', 'كُنْتُمْ', 'كَانُوا'],
      'Futur': ['سَأَكُونُ', 'سَتَكُونُ', 'سَيَكُونُ', 'سَنَكُونُ', 'سَتَكُونُونَ', 'سَيَكُونُونَ'],
    } },
    { inf: 'فَعَلَ (faʿala)', fr: 'faire', t: {
      'Présent': ['أَفْعَلُ', 'تَفْعَلُ', 'يَفْعَلُ', 'نَفْعَلُ', 'تَفْعَلُونَ', 'يَفْعَلُونَ'],
      'Passé': ['فَعَلْتُ', 'فَعَلْتَ', 'فَعَلَ', 'فَعَلْنَا', 'فَعَلْتُمْ', 'فَعَلُوا'],
      'Futur': ['سَأَفْعَلُ', 'سَتَفْعَلُ', 'سَيَفْعَلُ', 'سَنَفْعَلُ', 'سَتَفْعَلُونَ', 'سَيَفْعَلُونَ'],
    } },
    { inf: 'تَكَلَّمَ (takallama)', fr: 'parler', t: {
      'Présent': ['أَتَكَلَّمُ', 'تَتَكَلَّمُ', 'يَتَكَلَّمُ', 'نَتَكَلَّمُ', 'تَتَكَلَّمُونَ', 'يَتَكَلَّمُونَ'],
      'Passé': ['تَكَلَّمْتُ', 'تَكَلَّمْتَ', 'تَكَلَّمَ', 'تَكَلَّمْنَا', 'تَكَلَّمْتُمْ', 'تَكَلَّمُوا'],
      'Futur': ['سَأَتَكَلَّمُ', 'سَتَتَكَلَّمُ', 'سَيَتَكَلَّمُ', 'سَنَتَكَلَّمُ', 'سَتَتَكَلَّمُونَ', 'سَيَتَكَلَّمُونَ'],
    } },
    { inf: 'أَرَادَ (arada)', fr: 'vouloir', t: {
      'Présent': ['أُرِيدُ', 'تُرِيدُ', 'يُرِيدُ', 'نُرِيدُ', 'تُرِيدُونَ', 'يُرِيدُونَ'],
      'Passé': ['أَرَدْتُ', 'أَرَدْتَ', 'أَرَادَ', 'أَرَدْنَا', 'أَرَدْتُمْ', 'أَرَادُوا'],
      'Futur': ['سَأُرِيدُ', 'سَتُرِيدُ', 'سَيُرِيدُ', 'سَنُرِيدُ', 'سَتُرِيدُونَ', 'سَيُرِيدُونَ'],
    } },
    { inf: 'عَرَفَ (ʿarafa)', fr: 'savoir', t: {
      'Présent': ['أَعْرِفُ', 'تَعْرِفُ', 'يَعْرِفُ', 'نَعْرِفُ', 'تَعْرِفُونَ', 'يَعْرِفُونَ'],
      'Passé': ['عَرَفْتُ', 'عَرَفْتَ', 'عَرَفَ', 'عَرَفْنَا', 'عَرَفْتُمْ', 'عَرَفُوا'],
      'Futur': ['سَأَعْرِفُ', 'سَتَعْرِفُ', 'سَيَعْرِفُ', 'سَنَعْرِفُ', 'سَتَعْرِفُونَ', 'سَيَعْرِفُونَ'],
    } },
  ],
  hi: [
    { inf: 'जाना (jaanaa)', fr: 'aller', t: {
      'Présent': ['जाता हूँ', 'जाते हो', 'जाता है', 'जाते हैं', 'जाते हैं', 'जाते हैं'],
      'Passé': ['गया', 'गए', 'गया', 'गए', 'गए', 'गए'],
      'Futur': ['जाऊँगा', 'जाओगे', 'जाएगा', 'जाएँगे', 'जाएँगे', 'जाएँगे'],
    } },
    { inf: 'करना (karnaa)', fr: 'faire', t: {
      'Présent': ['करता हूँ', 'करते हो', 'करता है', 'करते हैं', 'करते हैं', 'करते हैं'],
      'Passé': ['किया', 'किए', 'किया', 'किए', 'किए', 'किए'],
      'Futur': ['करूँगा', 'करोगे', 'करेगा', 'करेंगे', 'करेंगे', 'करेंगे'],
    } },
    { inf: 'खाना (khaanaa)', fr: 'manger', t: {
      'Présent': ['खाता हूँ', 'खाते हो', 'खाता है', 'खाते हैं', 'खाते हैं', 'खाते हैं'],
      'Passé': ['खाया', 'खाए', 'खाया', 'खाए', 'खाए', 'खाए'],
      'Futur': ['खाऊँगा', 'खाओगे', 'खाएगा', 'खाएँगे', 'खाएँगे', 'खाएँगे'],
    } },
    { inf: 'बोलना (bolnaa)', fr: 'parler', t: {
      'Présent': ['बोलता हूँ', 'बोलते हो', 'बोलता है', 'बोलते हैं', 'बोलते हैं', 'बोलते हैं'],
      'Passé': ['बोला', 'बोले', 'बोला', 'बोले', 'बोले', 'बोले'],
      'Futur': ['बोलूँगा', 'बोलोगे', 'बोलेगा', 'बोलेंगे', 'बोलेंगे', 'बोलेंगे'],
    } },
    { inf: 'होना (honaa)', fr: 'être', t: {
      'Présent': ['हूँ', 'हो', 'है', 'हैं', 'हैं', 'हैं'],
      'Passé': ['था', 'थे', 'था', 'थे', 'थे', 'थे'],
      'Futur': ['होऊँगा', 'होगे', 'होगा', 'होंगे', 'होंगे', 'होंगे'],
    } },
    { inf: 'चाहना (chaahnaa)', fr: 'vouloir', t: {
      'Présent': ['चाहता हूँ', 'चाहते हो', 'चाहता है', 'चाहते हैं', 'चाहते हैं', 'चाहते हैं'],
      'Passé': ['चाहा', 'चाहे', 'चाहा', 'चाहे', 'चाहे', 'चाहे'],
      'Futur': ['चाहूँगा', 'चाहोगे', 'चाहेगा', 'चाहेंगे', 'चाहेंगे', 'चाहेंगे'],
    } },
  ],
}

export const CONJUGATIONS: Record<string, Verb[]> = Object.fromEntries(
  Object.entries(RAW).map(([lang, verbs]) => [
    lang,
    verbs.map(v => ({
      infinitive: v.inf,
      translation: v.fr,
      tenses: Object.fromEntries(
        Object.entries(v.t).map(([tname, forms]) => [
          tname,
          forms.map((form, i) => ({ pronoun: PRONOUNS[lang][i], form })),
        ])
      ),
    }))
  ])
)

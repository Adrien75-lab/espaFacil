import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const scenarios = [
  ['airport', '✈️', 'À l’aéroport'],
  ['station', '🚆', 'À la gare'],
  ['doctor', '🩺', 'Chez le médecin'],
  ['bank', '🏦', 'À la banque'],
  ['post-office', '📮', 'À la poste'],
  ['job-interview', '💼', 'Entretien d’embauche'],
  ['school', '🏫', 'À l’école'],
  ['phone', '📱', 'Au téléphone'],
  ['police', '👮', 'Au commissariat'],
  ['car-rental', '🚗', 'Location de voiture'],
  ['hairdresser', '💇', 'Chez le coiffeur'],
  ['cinema', '🎬', 'Au cinéma'],
]

// Chaque langue fournit, dans l’ordre des scénarios, un titre, une question et une réponse.
const content = {
  es: {
    titles: ['En el aeropuerto','En la estación','En el médico','En el banco','En correos','Entrevista de trabajo','En la escuela','Por teléfono','En la comisaría','Alquiler de coches','En la peluquería','En el cine'],
    prompts: ['¿Dónde está la puerta doce?','¿A qué hora sale el tren?','¿Qué le pasa?','¿En qué puedo ayudarle?','¿Qué desea enviar?','¿Por qué quiere este puesto?','¿Dónde está el aula cinco?','¿Puedo hablar con la señora García?','¿Qué ha pasado?','¿Qué tipo de coche desea?','¿Cómo quiere el corte?','¿Para qué película?'],
    responses: ['Está en la primera planta.','Sale a las nueve y cuarto.','Me duele la garganta.','Quiero abrir una cuenta.','Quiero enviar este paquete.','Tengo experiencia y muchas ganas.','Está al final del pasillo.','Sí, un momento por favor.','He perdido mi cartera.','Un coche pequeño por tres días.','Corto a los lados, por favor.','Dos entradas para la sesión de ocho.'],
    thanks: 'Perfecto, gracias.',
  },
  en: {
    titles: ['At the airport','At the station','At the doctor’s','At the bank','At the post office','Job interview','At school','On the phone','At the police station','Car rental','At the hairdresser’s','At the cinema'],
    prompts: ['Where is gate twelve?','What time does the train leave?','What seems to be the problem?','How can I help you?','What would you like to send?','Why do you want this position?','Where is classroom five?','May I speak to Mrs Garcia?','What happened?','What kind of car would you like?','How would you like your hair cut?','Which film would you like?'],
    responses: ['It is on the first floor.','It leaves at quarter past nine.','I have a sore throat.','I would like to open an account.','I would like to send this parcel.','I have experience and I am motivated.','It is at the end of the corridor.','Yes, one moment please.','I have lost my wallet.','A small car for three days.','Short on the sides, please.','Two tickets for the eight o’clock showing.'],
    thanks: 'Perfect, thank you.',
  },
  de: {
    titles: ['Am Flughafen','Am Bahnhof','Beim Arzt','Bei der Bank','Bei der Post','Vorstellungsgespräch','In der Schule','Am Telefon','Bei der Polizei','Autovermietung','Beim Friseur','Im Kino'],
    prompts: ['Wo ist Flugsteig zwölf?','Wann fährt der Zug ab?','Was fehlt Ihnen?','Wie kann ich Ihnen helfen?','Was möchten Sie versenden?','Warum möchten Sie diese Stelle?','Wo ist Klassenzimmer fünf?','Kann ich Frau Garcia sprechen?','Was ist passiert?','Was für ein Auto möchten Sie?','Wie möchten Sie die Haare?','Für welchen Film?'],
    responses: ['Er ist im ersten Stock.','Er fährt um Viertel nach neun ab.','Ich habe Halsschmerzen.','Ich möchte ein Konto eröffnen.','Ich möchte dieses Paket verschicken.','Ich habe Erfahrung und bin motiviert.','Es ist am Ende des Flurs.','Ja, einen Moment bitte.','Ich habe meine Brieftasche verloren.','Ein kleines Auto für drei Tage.','An den Seiten kurz, bitte.','Zwei Karten für die Vorstellung um acht.'],
    thanks: 'Perfekt, danke.',
  },
  it: {
    titles: ['All’aeroporto','Alla stazione','Dal medico','In banca','Alla posta','Colloquio di lavoro','A scuola','Al telefono','Alla polizia','Noleggio auto','Dal parrucchiere','Al cinema'],
    prompts: ['Dov’è il gate dodici?','A che ora parte il treno?','Che cosa si sente?','Come posso aiutarla?','Che cosa desidera spedire?','Perché vuole questo posto?','Dov’è l’aula cinque?','Posso parlare con la signora Garcia?','Che cosa è successo?','Che tipo di auto desidera?','Come vuole il taglio?','Per quale film?'],
    responses: ['È al primo piano.','Parte alle nove e un quarto.','Ho mal di gola.','Vorrei aprire un conto.','Vorrei spedire questo pacco.','Ho esperienza e sono motivato.','È in fondo al corridoio.','Sì, un momento per favore.','Ho perso il portafoglio.','Un’auto piccola per tre giorni.','Corti ai lati, per favore.','Due biglietti per lo spettacolo delle otto.'],
    thanks: 'Perfetto, grazie.',
  },
  pt: {
    titles: ['No aeroporto','Na estação','No médico','No banco','Nos correios','Entrevista de emprego','Na escola','Ao telefone','Na polícia','Aluguer de carros','No cabeleireiro','No cinema'],
    prompts: ['Onde fica a porta doze?','A que horas parte o comboio?','O que sente?','Como posso ajudá-lo?','O que deseja enviar?','Porque quer este emprego?','Onde fica a sala cinco?','Posso falar com a senhora Garcia?','O que aconteceu?','Que tipo de carro deseja?','Como quer o corte?','Para que filme?'],
    responses: ['Fica no primeiro andar.','Parte às nove e quinze.','Tenho dor de garganta.','Quero abrir uma conta.','Quero enviar este pacote.','Tenho experiência e estou motivado.','Fica no fim do corredor.','Sim, um momento por favor.','Perdi a minha carteira.','Um carro pequeno por três dias.','Curto dos lados, por favor.','Dois bilhetes para a sessão das oito.'],
    thanks: 'Perfeito, obrigado.',
  },
  nl: {
    titles: ['Op de luchthaven','Op het station','Bij de dokter','Bij de bank','Op het postkantoor','Sollicitatiegesprek','Op school','Aan de telefoon','Bij de politie','Autoverhuur','Bij de kapper','In de bioscoop'],
    prompts: ['Waar is gate twaalf?','Hoe laat vertrekt de trein?','Wat is er aan de hand?','Hoe kan ik u helpen?','Wat wilt u versturen?','Waarom wilt u deze baan?','Waar is lokaal vijf?','Kan ik mevrouw Garcia spreken?','Wat is er gebeurd?','Wat voor auto wilt u?','Hoe wilt u het geknipt hebben?','Voor welke film?'],
    responses: ['Die is op de eerste verdieping.','Hij vertrekt om kwart over negen.','Ik heb keelpijn.','Ik wil een rekening openen.','Ik wil dit pakket versturen.','Ik heb ervaring en ben gemotiveerd.','Het is aan het einde van de gang.','Ja, een ogenblik alstublieft.','Ik ben mijn portemonnee kwijt.','Een kleine auto voor drie dagen.','Kort aan de zijkanten, alstublieft.','Twee kaartjes voor de voorstelling van acht uur.'],
    thanks: 'Perfect, dank u.',
  },
  pl: {
    titles: ['Na lotnisku','Na dworcu','U lekarza','W banku','Na poczcie','Rozmowa o pracę','W szkole','Przez telefon','Na policji','Wypożyczalnia samochodów','U fryzjera','W kinie'],
    prompts: ['Gdzie jest bramka numer dwanaście?','O której odjeżdża pociąg?','Co panu dolega?','W czym mogę pomóc?','Co chce pan wysłać?','Dlaczego chce pan tę pracę?','Gdzie jest sala numer pięć?','Czy mogę rozmawiać z panią Garcia?','Co się stało?','Jaki samochód pan chce?','Jak mam obciąć włosy?','Na jaki film?'],
    responses: ['Jest na pierwszym piętrze.','Odjeżdża kwadrans po dziewiątej.','Boli mnie gardło.','Chcę otworzyć konto.','Chcę wysłać tę paczkę.','Mam doświadczenie i motywację.','Jest na końcu korytarza.','Tak, chwileczkę proszę.','Zgubiłem portfel.','Mały samochód na trzy dni.','Krótko po bokach, proszę.','Dwa bilety na seans o ósmej.'],
    thanks: 'Doskonale, dziękuję.',
  },
  tr: {
    titles: ['Havaalanında','Tren istasyonunda','Doktorda','Bankada','Postanede','İş görüşmesi','Okulda','Telefonda','Polis karakolunda','Araba kiralama','Kuaförde','Sinemada'],
    prompts: ['On ikinci kapı nerede?','Tren saat kaçta kalkıyor?','Şikâyetiniz nedir?','Size nasıl yardımcı olabilirim?','Ne göndermek istiyorsunuz?','Bu işi neden istiyorsunuz?','Beş numaralı sınıf nerede?','Bayan Garcia ile görüşebilir miyim?','Ne oldu?','Nasıl bir araba istersiniz?','Saçınızı nasıl keselim?','Hangi film için?'],
    responses: ['Birinci katta.','Dokuzu çeyrek geçe kalkıyor.','Boğazım ağrıyor.','Bir hesap açmak istiyorum.','Bu paketi göndermek istiyorum.','Deneyimliyim ve motiveyim.','Koridorun sonunda.','Evet, bir dakika lütfen.','Cüzdanımı kaybettim.','Üç günlüğüne küçük bir araba.','Yanlar kısa olsun, lütfen.','Saat sekiz seansı için iki bilet.'],
    thanks: 'Mükemmel, teşekkürler.',
  },
  ru: {
    titles: ['В аэропорту','На вокзале','У врача','В банке','На почте','Собеседование','В школе','По телефону','В полиции','Прокат автомобилей','В парикмахерской','В кино'],
    prompts: ['Где выход номер двенадцать?','Во сколько отправляется поезд?','Что вас беспокоит?','Чем я могу вам помочь?','Что вы хотите отправить?','Почему вы хотите эту работу?','Где кабинет номер пять?','Можно поговорить с госпожой Гарсия?','Что случилось?','Какую машину вы хотите?','Как вас подстричь?','На какой фильм?'],
    responses: ['Он на первом этаже.','Он отправляется в четверть десятого.','У меня болит горло.','Я хочу открыть счёт.','Я хочу отправить эту посылку.','У меня есть опыт и мотивация.','Он в конце коридора.','Да, одну минуту, пожалуйста.','Я потерял кошелёк.','Небольшую машину на три дня.','Покороче по бокам, пожалуйста.','Два билета на сеанс в восемь.'],
    thanks: 'Отлично, спасибо.',
  },
  ja: {
    titles: ['空港で','駅で','病院で','銀行で','郵便局で','就職面接','学校で','電話で','警察で','レンタカー','美容院で','映画館で'],
    prompts: ['12番ゲートはどこですか。','電車は何時に出ますか。','どうしましたか。','どのようなご用件ですか。','何を送りたいですか。','なぜこの仕事を希望しますか。','5番教室はどこですか。','ガルシアさんをお願いします。','何がありましたか。','どんな車がいいですか。','どのように切りますか。','どの映画ですか。'],
    responses: ['1階にあります。','9時15分に出ます。','喉が痛いです。','口座を開きたいです。','この小包を送りたいです。','経験があり、意欲もあります。','廊下の突き当たりです。','はい、少々お待ちください。','財布をなくしました。','小さい車を3日間お願いします。','横を短くしてください。','8時の回を2枚ください。'],
    thanks: '分かりました。ありがとうございます。',
  },
  ko: {
    titles: ['공항에서','기차역에서','병원에서','은행에서','우체국에서','취업 면접','학교에서','전화로','경찰서에서','자동차 대여','미용실에서','영화관에서'],
    prompts: ['12번 게이트는 어디예요?','기차는 몇 시에 출발해요?','어디가 불편하세요?','무엇을 도와드릴까요?','무엇을 보내시겠어요?','왜 이 직책을 원하세요?','5번 교실은 어디예요?','가르시아 씨와 통화할 수 있을까요?','무슨 일이 있었어요?','어떤 차를 원하세요?','어떻게 잘라 드릴까요?','어떤 영화예요?'],
    responses: ['1층에 있어요.','9시 15분에 출발해요.','목이 아파요.','계좌를 개설하고 싶어요.','이 소포를 보내고 싶어요.','경험이 있고 의욕적입니다.','복도 끝에 있어요.','네, 잠시만 기다려 주세요.','지갑을 잃어버렸어요.','작은 차를 3일 동안 빌리고 싶어요.','옆은 짧게 잘라 주세요.','8시 상영표 두 장 주세요.'],
    thanks: '좋습니다, 감사합니다.',
  },
  zh: {
    titles: ['在机场','在火车站','在医院','在银行','在邮局','工作面试','在学校','打电话','在警察局','租车','在理发店','在电影院'],
    prompts: ['十二号登机口在哪里？','火车几点出发？','您哪里不舒服？','我能帮您什么？','您想寄什么？','您为什么想要这份工作？','五号教室在哪里？','我可以和加西亚女士通话吗？','发生了什么事？','您想要什么样的车？','您想怎么剪？','您要看哪部电影？'],
    responses: ['在一楼。','九点十五分出发。','我嗓子疼。','我想开一个账户。','我想寄这个包裹。','我有经验，也很有动力。','在走廊尽头。','好的，请稍等。','我的钱包丢了。','一辆小车，租三天。','两边剪短一点，谢谢。','两张晚上八点的票。'],
    thanks: '好的，谢谢。',
  },
  ar: {
    titles: ['في المطار','في محطة القطار','عند الطبيب','في البنك','في مكتب البريد','مقابلة عمل','في المدرسة','على الهاتف','في مركز الشرطة','تأجير سيارة','عند الحلاق','في السينما'],
    prompts: ['أين البوابة رقم اثني عشر؟','متى يغادر القطار؟','ما المشكلة؟','كيف يمكنني مساعدتك؟','ماذا تريد أن ترسل؟','لماذا تريد هذه الوظيفة؟','أين الصف رقم خمسة؟','هل يمكنني التحدث مع السيدة غارسيا؟','ماذا حدث؟','ما نوع السيارة التي تريدها؟','كيف تريد قص شعرك؟','لأي فيلم؟'],
    responses: ['إنها في الطابق الأول.','يغادر في التاسعة والربع.','حلقي يؤلمني.','أريد فتح حساب.','أريد إرسال هذا الطرد.','لدي خبرة وحافز كبير.','إنه في نهاية الممر.','نعم، لحظة من فضلك.','لقد فقدت محفظتي.','سيارة صغيرة لمدة ثلاثة أيام.','قصير من الجانبين، من فضلك.','تذكرتان لعرض الساعة الثامنة.'],
    thanks: 'ممتاز، شكراً.',
  },
  hi: {
    titles: ['हवाई अड्डे पर','रेलवे स्टेशन पर','डॉक्टर के पास','बैंक में','डाकघर में','नौकरी का साक्षात्कार','स्कूल में','फ़ोन पर','पुलिस स्टेशन में','कार किराए पर','नाई के पास','सिनेमा में'],
    prompts: ['गेट नंबर बारह कहाँ है?','ट्रेन कितने बजे निकलती है?','आपको क्या परेशानी है?','मैं आपकी क्या मदद कर सकता हूँ?','आप क्या भेजना चाहते हैं?','आप यह नौकरी क्यों चाहते हैं?','कक्षा नंबर पाँच कहाँ है?','क्या मैं श्रीमती गार्सिया से बात कर सकता हूँ?','क्या हुआ?','आप किस तरह की कार चाहते हैं?','आप बाल कैसे कटवाना चाहते हैं?','कौन सी फ़िल्म के लिए?'],
    responses: ['वह पहली मंज़िल पर है।','वह सवा नौ बजे निकलती है।','मेरे गले में दर्द है।','मैं एक खाता खोलना चाहता हूँ।','मैं यह पार्सल भेजना चाहता हूँ।','मेरे पास अनुभव है और मैं उत्साहित हूँ।','वह गलियारे के अंत में है।','जी, कृपया एक क्षण रुकिए।','मेरा बटुआ खो गया है।','तीन दिनों के लिए एक छोटी कार।','किनारों से छोटे, कृपया।','आठ बजे के शो के दो टिकट।'],
    thanks: 'बहुत अच्छा, धन्यवाद।',
  },
}

const french = {
  prompts: ['Où se trouve la porte douze ?','À quelle heure part le train ?','Qu’est-ce qui vous arrive ?','Comment puis-je vous aider ?','Que souhaitez-vous envoyer ?','Pourquoi voulez-vous ce poste ?','Où se trouve la salle cinq ?','Puis-je parler à Madame Garcia ?','Que s’est-il passé ?','Quel type de voiture souhaitez-vous ?','Comment souhaitez-vous la coupe ?','Pour quel film ?'],
  responses: ['Elle se trouve au premier étage.','Il part à neuf heures et quart.','J’ai mal à la gorge.','Je voudrais ouvrir un compte.','Je voudrais envoyer ce colis.','J’ai de l’expérience et je suis motivé.','Elle se trouve au bout du couloir.','Oui, un instant s’il vous plaît.','J’ai perdu mon portefeuille.','Une petite voiture pour trois jours.','Court sur les côtés, s’il vous plaît.','Deux places pour la séance de vingt heures.'],
  thanks: 'Parfait, merci.',
}

const output = { scenarios, french, languages: content }
const destination = join(root, 'backend/database/data/dialogue_expansions.json')
await mkdir(dirname(destination), { recursive: true })
await writeFile(destination, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
console.log(`Catalogue compact généré : ${scenarios.length * Object.keys(content).length} dialogues`)

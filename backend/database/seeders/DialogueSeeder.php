<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DialogueSeeder extends Seeder
{
    public function run(): void
    {
        $driver = DB::connection()->getDriverName();
        if ($driver === 'sqlite') {
            DB::statement('PRAGMA foreign_keys = OFF');
            DB::table('dialogue_steps')->delete();
            DB::table('dialogues')->delete();
            DB::statement('PRAGMA foreign_keys = ON');
        } else {
            DB::statement('SET FOREIGN_KEY_CHECKS=0');
            DB::table('dialogue_steps')->truncate();
            DB::table('dialogues')->truncate();
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        }

        $now = now();

        // ── ES ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-cafe',
            'emoji'        => '☕',
            'title'        => 'En el café',
            'title_fr'     => 'Au café',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'¡Buenos días! ¿Qué desea tomar?','fr'=>'Bonjour ! Que désirez-vous prendre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'¿Qué desea?','fr'=>'Que désirez-vous ?','options'=>'[{"text":"Quiero un café con leche, por favor.","fr":"Je voudrais un café au lait, s.v.p."},{"text":"Me llamo Carlos.","fr":"Je m\'appelle Carlos."},{"text":"El baño está allí.","fr":"Les toilettes sont là."},{"text":"Hasta luego.","fr":"Au revoir."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Son tres euros.','fr'=>'Ça fait trois euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Son tres euros.','fr'=>'Ça fait trois euros.','options'=>'[{"text":"Aquí tiene. Gracias.","fr":"Voilà. Merci."},{"text":"No tengo hambre.","fr":"Je n\'ai pas faim."},{"text":"Hace frío.","fr":"Il fait froid."},{"text":"No hablo español.","fr":"Je ne parle pas espagnol."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-hotel',
            'emoji'        => '🏨',
            'title'        => 'En el hotel',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Tengo una reserva a nombre de Dupont.','fr'=>'J\'ai une réservation au nom de Dupont.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Habitación doble para dos noches.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'¿Está correcto?','fr'=>'C\'est correct ?','options'=>'[{"text":"Sí. ¿A qué hora es el desayuno?","fr":"Oui. À quelle heure est le petit-déjeuner ?"},{"text":"Me gusta el fútbol.","fr":"J\'aime le football."},{"text":"Hace calor aquí.","fr":"Il fait chaud ici."},{"text":"No tengo reserva.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'El desayuno se sirve de siete a diez.','fr'=>'Le petit-déjeuner est servi de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'¿Me puede dar la llave?','fr'=>'La clé, s.v.p. ?','options'=>'[{"text":"¿Me puede dar la llave, por favor?","fr":"La clé, s.v.p. ?"},{"text":"No me gusta el hotel.","fr":"Je n\'aime pas l\'hôtel."},{"text":"Quiero una pizza.","fr":"Je veux une pizza."},{"text":"El tren llega tarde.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Aquí tiene la llave. Habitación 304.','fr'=>'Voici la clé. Chambre 304.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-restaurante',
            'emoji'        => '🍽️',
            'title'        => 'En el restaurante',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Buenas noches. ¿Tienen reserva?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'¿Tienen reserva?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"No, pero somos dos personas.","fr":"Non, mais nous sommes deux."},{"text":"Me llamo María.","fr":"Je m\'appelle María."},{"text":"El museo está cerrado.","fr":"Le musée est fermé."},{"text":"Necesito un taxi.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'¿Qué van a tomar?','fr'=>'Qu\'allez-vous prendre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'¿Cuál es el plato del día?','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"¿Cuál es el plato del día?","fr":"Quel est le plat du jour ?"},{"text":"No me gusta la carne.","fr":"Je n\'aime pas la viande."},{"text":"Quiero agua mineral.","fr":"Je veux de l\'eau minérale."},{"text":"La cuenta, por favor.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'El plato del día es paella. Muy bueno.','fr'=>'Le plat du jour est la paella. Très bon.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'¿Qué van a pedir?','fr'=>'Que commandez-vous ?','options'=>'[{"text":"Tomaré la paella y agua, por favor.","fr":"Je prendrai la paella et de l\'eau, s.v.p."},{"text":"No me gusta el arroz.","fr":"Je n\'aime pas le riz."},{"text":"Tengo alergia al pescado.","fr":"Je suis allergique au poisson."},{"text":"El restaurante está lejos.","fr":"Le restaurant est loin."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-taxi',
            'emoji'        => '🚕',
            'title'        => 'En el taxi',
            'title_fr'     => 'En taxi',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Al aeropuerto, por favor.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'¿A qué terminal?','fr'=>'À quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'¿A qué terminal?','fr'=>'À quel terminal ?','options'=>'[{"text":"Terminal dos, vuelo a París.","fr":"Terminal deux, vol pour Paris."},{"text":"No sé dónde estoy.","fr":"Je ne sais pas où je suis."},{"text":"Me gusta Madrid.","fr":"J\'aime Madrid."},{"text":"El hotel está cerca.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Unos veinte minutos con este tráfico.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'¿Cuánto va a costar?','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"¿Cuánto va a costar aproximadamente?","fr":"Combien approximativement ?"},{"text":"No tengo prisa.","fr":"Je ne suis pas pressé."},{"text":"Hay mucho tráfico.","fr":"Il y a beaucoup de circulation."},{"text":"Prefiero el metro.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Unos veinticinco euros.','fr'=>'Environ vingt-cinq euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-farmacia',
            'emoji'        => '💊',
            'title'        => 'En la farmacia',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Necesito algo para el dolor de cabeza.','fr'=>'J\'ai besoin de quelque chose contre le mal de tête.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'¿Tiene fiebre también?','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'¿Tiene fiebre?','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"No, solo dolor de cabeza y estoy cansado.","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"Me gusta el deporte.","fr":"J\'aime le sport."},{"text":"El hospital está lejos.","fr":"L\'hôpital est loin."},{"text":"No hablo español.","fr":"Je ne parle pas espagnol."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Le recomiendo este ibuprofeno. Uno cada ocho horas.','fr'=>'Je vous recommande cet ibuprofène. Un toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'¿Necesita receta?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"¿Necesita receta médica?","fr":"Faut-il une ordonnance médicale ?"},{"text":"No me gustan los medicamentos.","fr":"Je n\'aime pas les médicaments."},{"text":"Tengo hambre.","fr":"J\'ai faim."},{"text":"El médico está ocupado.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'No, sin receta. Son cuatro euros.','fr'=>'Non, sans ordonnance. C\'est quatre euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-museo',
            'emoji'        => '🏛️',
            'title'        => 'En el museo',
            'title_fr'     => 'Au musée',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Una entrada, por favor. ¿Cuánto cuesta?','fr'=>'Un billet, s.v.p. C\'est combien ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Doce euros adultos, seis estudiantes.','fr'=>'Douze euros adultes, six pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'¿Puedo tener el descuento?','fr'=>'Puis-je avoir la réduction ?','options'=>'[{"text":"Tengo carné de estudiante. ¿Puedo tener el descuento?","fr":"J\'ai une carte étudiante. Puis-je avoir la réduction ?"},{"text":"No me gustan los museos.","fr":"Je n\'aime pas les musées."},{"text":"El cuadro es feo.","fr":"Le tableau est laid."},{"text":"Quiero ir al zoo.","fr":"Je veux aller au zoo."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Por supuesto. ¿Me muestra el carné?','fr'=>'Bien sûr. Montrez-moi votre carte.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'¿A qué hora cierra?','fr'=>'À quelle heure ferme-t-il ?','options'=>'[{"text":"Aquí tiene. ¿A qué hora cierra el museo?","fr":"La voici. À quelle heure ferme le musée ?"},{"text":"No tengo carné.","fr":"Je n\'ai pas de carte."},{"text":"El museo es aburrido.","fr":"Le musée est ennuyeux."},{"text":"Prefiero el teatro.","fr":"Je préfère le théâtre."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Cerramos a las siete. ¡Disfrute la visita!','fr'=>'Nous fermons à dix-neuf heures. Bonne visite !','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-compras',
            'emoji'        => '🛒',
            'title'        => 'De compras',
            'title_fr'     => 'En boutique',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'¿Tienen esta camiseta en talla mediana?','fr'=>'Avez-vous ce t-shirt en taille medium ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Sí, aquí tiene.','fr'=>'Oui, voici.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'¿Puedo probármela?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"¿Puedo probármela?","fr":"Puis-je l\'essayer ?"},{"text":"No me gusta el color.","fr":"Je n\'aime pas la couleur."},{"text":"Es muy cara.","fr":"C\'est très cher."},{"text":"No tengo dinero.","fr":"Je n\'ai pas d\'argent."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Los probadores están al fondo a la derecha.','fr'=>'Les cabines sont au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Me la llevo.','fr'=>'Je la prends.','options'=>'[{"text":"Me la llevo. ¿Aceptan tarjeta?","fr":"Je la prends. Acceptez-vous la carte ?"},{"text":"Me queda pequeña.","fr":"Elle est trop petite."},{"text":"El color no me gusta.","fr":"Je n\'aime pas la couleur."},{"text":"Es demasiado cara.","fr":"C\'est trop cher."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Sí, aceptamos tarjeta y efectivo.','fr'=>'Oui, nous acceptons la carte et les espèces.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'es',
            'scenario_key' => 'es-calle',
            'emoji'        => '🗺️',
            'title'        => 'Por las calles',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Perdona, ¿sabes dónde está la estación de metro?','fr'=>'Excusez-moi, où est la station de métro ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Sigue todo recto y gira a la izquierda.','fr'=>'Continue tout droit et tourne à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'¿Está muy lejos?','fr'=>'C\'est loin ?','options'=>'[{"text":"¿Cuánto tiempo se tarda?","fr":"Combien de temps faut-il ?"},{"text":"Me llamo Ana.","fr":"Je m\'appelle Ana."},{"text":"Llueve mucho.","fr":"Il pleut beaucoup."},{"text":"No me gusta caminar.","fr":"Je n\'aime pas marcher."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Unos cinco minutos a pie.','fr'=>'Environ cinq minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'¿Entendiste?','fr'=>'Tu as compris ?','options'=>'[{"text":"Sí, muchas gracias. ¡Hasta luego!","fr":"Oui, merci beaucoup. Au revoir !"},{"text":"No me gusta caminar.","fr":"Je n\'aime pas marcher."},{"text":"El metro es caro.","fr":"Le métro est cher."},{"text":"No tengo tiempo.","fr":"Je n\'ai pas le temps."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── EN ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-cafe',
            'emoji'        => '☕',
            'title'        => 'At the café',
            'title_fr'     => 'Au café',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Hi! What can I get you?','fr'=>'Bonjour ! Que puis-je vous servir ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'What can I get you?','fr'=>'Que puis-je vous servir ?','options'=>'[{"text":"Could I have a flat white, please?","fr":"Puis-je avoir un flat white, s.v.p. ?"},{"text":"I live in London.","fr":"J\'habite à Londres."},{"text":"The bus is late.","fr":"Le bus est en retard."},{"text":"Goodbye!","fr":"Au revoir !"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Sure! Anything to eat?','fr'=>'Quelque chose à manger ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Anything to eat?','fr'=>'Quelque chose à manger ?','options'=>'[{"text":"Yes, I\'ll have a croissant as well, please.","fr":"Oui, je prendrai aussi un croissant, s.v.p."},{"text":"It\'s raining outside.","fr":"Il pleut dehors."},{"text":"I need a doctor.","fr":"J\'ai besoin d\'un médecin."},{"text":"My name is Sophie.","fr":"Je m\'appelle Sophie."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'That\'ll be four pounds fifty.','fr'=>'Ça fait quatre livres cinquante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'How much?','fr'=>'C\'est combien ?','options'=>'[{"text":"Here you go. Keep the change.","fr":"Voilà. Gardez la monnaie."},{"text":"I don\'t understand.","fr":"Je ne comprends pas."},{"text":"Where is the airport?","fr":"Où est l\'aéroport ?"},{"text":"It\'s very cold.","fr":"Il fait très froid."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-hotel',
            'emoji'        => '🏨',
            'title'        => 'Checking in',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Hello, I have a reservation under Martin.','fr'=>'Bonjour, j\'ai une réservation au nom de Martin.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'A double room for three nights.','fr'=>'Chambre double pour trois nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Is that correct?','fr'=>'C\'est correct ?','options'=>'[{"text":"Yes, that\'s right. What time is breakfast?","fr":"Oui. Le petit-déjeuner est à quelle heure ?"},{"text":"I like football.","fr":"J\'aime le football."},{"text":"It\'s hot in here.","fr":"Il fait chaud ici."},{"text":"I don\'t have a reservation.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Breakfast is served from seven to ten.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Could I have the key card?','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"Could I have the key card, please?","fr":"La clé, s.v.p. ?"},{"text":"I don\'t like the hotel.","fr":"Je n\'aime pas l\'hôtel."},{"text":"I want a pizza.","fr":"Je veux une pizza."},{"text":"The train is late.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Here\'s your key card. Room 205, second floor.','fr'=>'Voici la clé. Chambre 205, deuxième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-restaurant',
            'emoji'        => '🍽️',
            'title'        => 'At the restaurant',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Good evening. Do you have a reservation?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Do you have a reservation?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"No, but there are two of us.","fr":"Non, mais nous sommes deux."},{"text":"My name is James.","fr":"Je m\'appelle James."},{"text":"The museum is closed.","fr":"Le musée est fermé."},{"text":"I need a taxi.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'No problem. Are you ready to order?','fr'=>'Pas de problème. Êtes-vous prêts ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'What do you recommend?','fr'=>'Qu\'est-ce que vous recommandez ?','options'=>'[{"text":"What\'s today\'s special?","fr":"Quel est le plat du jour ?"},{"text":"I don\'t like meat.","fr":"Je n\'aime pas la viande."},{"text":"I want mineral water.","fr":"Je veux de l\'eau minérale."},{"text":"The bill, please.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Today\'s special is grilled salmon. Excellent.','fr'=>'Le plat du jour est le saumon grillé. Excellent.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'What will you order?','fr'=>'Que commandez-vous ?','options'=>'[{"text":"Perfect, I\'ll have the salmon and a glass of water.","fr":"Parfait, je prendrai le saumon et un verre d\'eau."},{"text":"I don\'t like fish.","fr":"Je n\'aime pas le poisson."},{"text":"The restaurant is far.","fr":"Le restaurant est loin."},{"text":"I\'m allergic to nuts.","fr":"Je suis allergique aux noix."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-taxi',
            'emoji'        => '🚕',
            'title'        => 'Taking a taxi',
            'title_fr'     => 'En taxi',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'To the train station, please.','fr'=>'À la gare, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Which station?','fr'=>'Quelle gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Which station?','fr'=>'Quelle gare ?','options'=>'[{"text":"King\'s Cross, please. I have a train at six.","fr":"King\'s Cross, s.v.p. J\'ai un train à dix-huit heures."},{"text":"I don\'t know where I am.","fr":"Je ne sais pas où je suis."},{"text":"I like London.","fr":"J\'aime Londres."},{"text":"The hotel is nearby.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'About fifteen minutes from here.','fr'=>'Environ quinze minutes d\'ici.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'How much will it cost?','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"How much do you think it\'ll be?","fr":"Combien pensez-vous que ça coûtera ?"},{"text":"I\'m not in a hurry.","fr":"Je ne suis pas pressé."},{"text":"There\'s a lot of traffic.","fr":"Il y a beaucoup de circulation."},{"text":"I prefer the tube.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Around twelve pounds.','fr'=>'Environ douze livres.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-pharmacy',
            'emoji'        => '💊',
            'title'        => 'At the pharmacy',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Hi. I have a stomachache, do you have something?','fr'=>'Bonjour. J\'ai mal à l\'estomac, avez-vous quelque chose ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'How long have you had it?','fr'=>'Depuis combien de temps ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'How long?','fr'=>'Depuis combien de temps ?','options'=>'[{"text":"Since this morning. I also feel a bit nauseous.","fr":"Depuis ce matin. Je me sens aussi nauséeux."},{"text":"I like sports.","fr":"J\'aime le sport."},{"text":"The hospital is far.","fr":"L\'hôpital est loin."},{"text":"I don\'t speak English.","fr":"Je ne parle pas anglais."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'I\'d recommend this antacid. One tablet after each meal.','fr'=>'Je vous recommande cet antiacide. Un comprimé après chaque repas.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Do I need a prescription?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"Is it available without a prescription?","fr":"Est-ce disponible sans ordonnance ?"},{"text":"I don\'t like medication.","fr":"Je n\'aime pas les médicaments."},{"text":"I\'m hungry.","fr":"J\'ai faim."},{"text":"The doctor is busy.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'No prescription needed. That\'s six pounds fifty.','fr'=>'Pas d\'ordonnance nécessaire. C\'est six livres cinquante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-museum',
            'emoji'        => '🏛️',
            'title'        => 'At the museum',
            'title_fr'     => 'Au musée',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'One adult ticket, please. How much is it?','fr'=>'Un billet adulte, s.v.p. C\'est combien ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Twelve pounds. Students get in for eight.','fr'=>'Douze livres. Les étudiants: huit livres.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Are there discounts?','fr'=>'Y a-t-il des réductions ?','options'=>'[{"text":"I\'m a student, can I get the discount?","fr":"Je suis étudiant, puis-je avoir la réduction ?"},{"text":"I don\'t like museums.","fr":"Je n\'aime pas les musées."},{"text":"The painting is ugly.","fr":"Le tableau est laid."},{"text":"I want to go to the zoo.","fr":"Je veux aller au zoo."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Of course, I\'ll need to see your student ID.','fr'=>'Bien sûr, montrez-moi votre carte étudiante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'What time does it close?','fr'=>'À quelle heure ferme-t-il ?','options'=>'[{"text":"Here it is. What time does the museum close?","fr":"La voici. À quelle heure ferme le musée ?"},{"text":"I don\'t have an ID.","fr":"Je n\'ai pas de carte."},{"text":"The museum is boring.","fr":"Le musée est ennuyeux."},{"text":"I prefer the theatre.","fr":"Je préfère le théâtre."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'We close at six. Enjoy your visit!','fr'=>'Nous fermons à dix-huit heures. Bonne visite !','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-shopping',
            'emoji'        => '🛒',
            'title'        => 'Shopping',
            'title_fr'     => 'En boutique',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Do you have this jumper in size large?','fr'=>'Avez-vous ce pull en taille grande ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Let me check... Yes, here you go.','fr'=>'Laissez-moi vérifier... Oui, voici.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Can I try it on?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Can I try it on?","fr":"Puis-je l\'essayer ?"},{"text":"I don\'t like the colour.","fr":"Je n\'aime pas la couleur."},{"text":"It\'s too expensive.","fr":"C\'est trop cher."},{"text":"I don\'t have any cash.","fr":"Je n\'ai pas d\'espèces."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Of course, fitting rooms are at the back on the left.','fr'=>'Les cabines sont au fond à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'I\'ll take it.','fr'=>'Je le prends.','options'=>'[{"text":"I\'ll take it. Do you accept card?","fr":"Je le prends. Acceptez-vous la carte ?"},{"text":"It doesn\'t fit.","fr":"Ça ne me va pas."},{"text":"I don\'t like the colour.","fr":"Je n\'aime pas la couleur."},{"text":"It\'s too expensive.","fr":"C\'est trop cher."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Yes, we accept all major cards.','fr'=>'Oui, nous acceptons toutes les grandes cartes.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'en',
            'scenario_key' => 'en-street',
            'emoji'        => '🗺️',
            'title'        => 'Asking for directions',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Excuse me, could you help me?','fr'=>'Excusez-moi, pouvez-vous m\'aider ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Of course! What do you need?','fr'=>'Bien sûr ! De quoi avez-vous besoin ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'What do you need?','fr'=>'De quoi avez-vous besoin ?','options'=>'[{"text":"Do you know where the nearest pharmacy is?","fr":"Savez-vous où est la pharmacie la plus proche ?"},{"text":"I love your jacket.","fr":"J\'adore votre veste."},{"text":"It\'s a beautiful day.","fr":"C\'est une belle journée."},{"text":"I\'m very tired.","fr":"Je suis très fatigué."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Yes, go straight ahead and turn right at the lights.','fr'=>'Oui, allez tout droit et tournez à droite aux feux.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Is it far?','fr'=>'C\'est loin ?','options'=>'[{"text":"How long does it take on foot?","fr":"Combien de temps à pied ?"},{"text":"I prefer the bus.","fr":"Je préfère le bus."},{"text":"It\'s raining.","fr":"Il pleut."},{"text":"I\'m lost.","fr":"Je suis perdu."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'About ten minutes. You can\'t miss it.','fr'=>'Environ dix minutes. Vous ne pouvez pas le rater.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── DE ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-hotel',
            'emoji'        => '🏨',
            'title'        => 'Im Hotel',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Ich habe eine Reservierung auf den Namen Müller.','fr'=>'J\'ai une réservation au nom de Müller.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Ein Doppelzimmer für zwei Nächte, stimmt das?','fr'=>'Chambre double pour deux nuits, c\'est bien ça ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Stimmt das?','fr'=>'C\'est bien ça ?','options'=>'[{"text":"Ja, genau. Um wie viel Uhr gibt es Frühstück?","fr":"Oui, exactement. À quelle heure est le petit-déjeuner ?"},{"text":"Ich mag Fußball.","fr":"J\'aime le football."},{"text":"Es ist heiß hier.","fr":"Il fait chaud ici."},{"text":"Ich habe keine Reservierung.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Das Frühstück wird von sieben bis zehn serviert.','fr'=>'Le petit-déjeuner est servi de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Kann ich bitte den Schlüssel haben?','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"Kann ich bitte den Schlüssel haben?","fr":"Puis-je avoir la clé, s.v.p. ?"},{"text":"Ich mag das Hotel nicht.","fr":"Je n\'aime pas l\'hôtel."},{"text":"Ich möchte eine Pizza.","fr":"Je veux une pizza."},{"text":"Der Zug ist spät.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Hier ist Ihr Schlüssel. Zimmer 301, dritter Stock.','fr'=>'Voici votre clé. Chambre 301, troisième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-restaurant',
            'emoji'        => '🍽️',
            'title'        => 'Im Restaurant',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Guten Abend. Haben Sie eine Reservierung?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Haben Sie eine Reservierung?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"Nein, aber wir sind zu zweit.","fr":"Non, mais nous sommes deux."},{"text":"Ich heiße Thomas.","fr":"Je m\'appelle Thomas."},{"text":"Das Museum ist geschlossen.","fr":"Le musée est fermé."},{"text":"Ich brauche ein Taxi.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Was möchten Sie bestellen?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Was empfehlen Sie?','fr'=>'Qu\'est-ce que vous recommandez ?','options'=>'[{"text":"Was ist das Tagesgericht?","fr":"Quel est le plat du jour ?"},{"text":"Ich mag kein Fleisch.","fr":"Je n\'aime pas la viande."},{"text":"Ich möchte Mineralwasser.","fr":"Je veux de l\'eau minérale."},{"text":"Die Rechnung, bitte.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Das Tagesgericht ist Schnitzel mit Kartoffeln.','fr'=>'Le plat du jour est l\'escalope avec des pommes de terre.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'Wie bezahlt man?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"Ich nehme das Schnitzel.","fr":"Je prends l\'escalope."},{"text":"Ich mag kein Fleisch.","fr":"Je n\'aime pas la viande."},{"text":"Das Restaurant ist weit.","fr":"Le restaurant est loin."},{"text":"Ich bin allergisch gegen Nüsse.","fr":"Je suis allergique aux noix."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-taxi',
            'emoji'        => '🚕',
            'title'        => 'Im Taxi',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Zum Hauptbahnhof, bitte.','fr'=>'À la gare centrale, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Welcher Bahnhof?','fr'=>'Quelle gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Welcher Bahnhof?','fr'=>'Quelle gare ?','options'=>'[{"text":"Hauptbahnhof, bitte. Ich habe einen Zug um achtzehn Uhr.","fr":"Gare centrale, s.v.p. J\'ai un train à dix-huit heures."},{"text":"Ich weiß nicht, wo ich bin.","fr":"Je ne sais pas où je suis."},{"text":"Ich mag Berlin.","fr":"J\'aime Berlin."},{"text":"Das Hotel ist in der Nähe.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Etwa zwanzig Minuten von hier.','fr'=>'Environ vingt minutes d\'ici.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Was kostet das?','fr'=>'Combien ça coûte ?','options'=>'[{"text":"Was wird es ungefähr kosten?","fr":"Combien ça coûtera approximativement ?"},{"text":"Ich habe es nicht eilig.","fr":"Je ne suis pas pressé."},{"text":"Es gibt viel Verkehr.","fr":"Il y a beaucoup de circulation."},{"text":"Ich nehme lieber die U-Bahn.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Ungefähr fünfzehn Euro.','fr'=>'Environ quinze euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-einkaufen',
            'emoji'        => '🛒',
            'title'        => 'Einkaufen',
            'title_fr'     => 'En boutique',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Haben Sie dieses Hemd in Größe M?','fr'=>'Avez-vous cette chemise en taille M ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Ja, hier bitte.','fr'=>'Oui, voici.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Kann ich es anprobieren?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Kann ich es anprobieren?","fr":"Puis-je l\'essayer ?"},{"text":"Ich mag die Farbe nicht.","fr":"Je n\'aime pas la couleur."},{"text":"Es ist zu teuer.","fr":"C\'est trop cher."},{"text":"Ich habe kein Geld.","fr":"Je n\'ai pas d\'argent."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Die Umkleidekabinen sind hinten rechts.','fr'=>'Les cabines d\'essayage sont au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Ich nehme es.','fr'=>'Je le prends.','options'=>'[{"text":"Ich nehme es. Akzeptieren Sie Karte?","fr":"Je le prends. Acceptez-vous la carte ?"},{"text":"Es passt nicht.","fr":"Ça ne me va pas."},{"text":"Die Farbe gefällt mir nicht.","fr":"Je n\'aime pas la couleur."},{"text":"Es ist zu teuer.","fr":"C\'est trop cher."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Ja, wir akzeptieren alle gängigen Karten.','fr'=>'Oui, nous acceptons toutes les grandes cartes.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-cafe',
            'emoji'        => '☕',
            'title'        => 'Im Café',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Guten Tag! Was darf ich Ihnen bringen?','fr'=>'Bonjour ! Que puis-je vous apporter ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Was möchten Sie trinken?','fr'=>'Que souhaitez-vous boire ?','options'=>'[{"text":"Einen Kaffee und ein Stück Kuchen, bitte.","fr":"Un café et une part de gâteau, s.v.p."},{"text":"Ich spreche kein Deutsch.","fr":"Je ne parle pas allemand."},{"text":"Wo ist das Hotel?","fr":"Où est l\'hôtel ?"},{"text":"Ich suche den Bahnhof.","fr":"Je cherche la gare."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Möchten Sie Milch und Zucker?','fr'=>'Souhaitez-vous du lait et du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Milch oder schwarz?','fr'=>'Avec du lait ou noir ?','options'=>'[{"text":"Mit Milch, aber ohne Zucker, bitte.","fr":"Avec du lait mais sans sucre, s.v.p."},{"text":"Nein danke, ich mag keinen Kaffee.","fr":"Non merci, je n\'aime pas le café."},{"text":"Wo ist die Toilette?","fr":"Où sont les toilettes ?"},{"text":"Der Zug fährt ab.","fr":"Le train part."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Das macht vier Euro fünfzig.','fr'=>'Ça fait quatre euros cinquante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-apotheke',
            'emoji'        => '💊',
            'title'        => 'In der Apotheke',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Guten Tag. Ich habe Kopfschmerzen.','fr'=>'Bonjour. J\'ai des maux de tête.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Haben Sie Fieber oder andere Symptome?','fr'=>'Avez-vous de la fièvre ou d\'autres symptômes ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Welche Symptome haben Sie?','fr'=>'Quels symptômes avez-vous ?','options'=>'[{"text":"Nur Kopfschmerzen und etwas Müdigkeit.","fr":"Seulement des maux de tête et un peu de fatigue."},{"text":"Ich suche ein Restaurant.","fr":"Je cherche un restaurant."},{"text":"Mein Zug fährt um neun.","fr":"Mon train part à neuf heures."},{"text":"Ich habe keine Kopfschmerzen.","fr":"Je n\'ai pas de maux de tête."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Ich empfehle Ihnen diese Tabletten.','fr'=>'Je vous recommande ces comprimés.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Wie oft soll ich sie nehmen?','fr'=>'Combien de fois dois-je les prendre ?','options'=>'[{"text":"Wie oft soll ich sie einnehmen?","fr":"Combien de fois dois-je les prendre ?"},{"text":"Wie viel kostet das?","fr":"Combien ça coûte ?"},{"text":"Wo ist die nächste Apotheke?","fr":"Où est la pharmacie la plus proche ?"},{"text":"Ich mag keine Tabletten.","fr":"Je n\'aime pas les comprimés."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Zweimal täglich nach dem Essen.','fr'=>'Deux fois par jour après les repas.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-strasse',
            'emoji'        => '🗺️',
            'title'        => 'Nach dem Weg fragen',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Entschuldigung, wie komme ich zum Bahnhof?','fr'=>'Excusez-moi, comment puis-je aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Gehen Sie geradeaus, dann die zweite Straße links.','fr'=>'Allez tout droit, puis la deuxième rue à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Ist es weit?','fr'=>'C\'est loin ?','options'=>'[{"text":"Ist es weit von hier?","fr":"Est-ce loin d\'ici ?"},{"text":"Ich suche ein Taxi.","fr":"Je cherche un taxi."},{"text":"Wo ist das Museum?","fr":"Où est le musée ?"},{"text":"Danke, ich kenne den Weg.","fr":"Merci, je connais le chemin."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Ungefähr zehn Minuten zu Fuß.','fr'=>'Environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Gibt es eine U-Bahn?','fr'=>'Y a-t-il un métro ?','options'=>'[{"text":"Gibt es eine U-Bahn in der Nähe?","fr":"Y a-t-il un métro à proximité ?"},{"text":"Ich nehme immer ein Taxi.","fr":"Je prends toujours un taxi."},{"text":"Das Wetter ist schön heute.","fr":"Il fait beau aujourd\'hui."},{"text":"Ich fahre mit dem Bus.","fr":"Je prends le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Ja, die Haltestelle ist gleich um die Ecke.','fr'=>'Oui, la station est juste au coin de la rue.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'de',
            'scenario_key' => 'de-museum',
            'emoji'        => '🏛️',
            'title'        => 'Im Museum',
            'title_fr'     => 'Au musée',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Guten Tag. Was kostet der Eintritt?','fr'=>'Bonjour. Combien coûte l\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Zehn Euro für Erwachsene, fünf für Studenten.','fr'=>'Dix euros pour les adultes, cinq pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Haben Sie Ermäßigungen?','fr'=>'Avez-vous des réductions ?','options'=>'[{"text":"Ich bin Student. Habe ich eine Ermäßigung?","fr":"Je suis étudiant. Ai-je une réduction ?"},{"text":"Das Museum ist zu teuer.","fr":"Le musée est trop cher."},{"text":"Wann öffnet das Museum?","fr":"À quelle heure ouvre le musée ?"},{"text":"Ich mag kein Museum.","fr":"Je n\'aime pas les musées."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Ja, zeigen Sie bitte Ihren Studentenausweis.','fr'=>'Oui, montrez-moi votre carte étudiante, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Darf ich fotografieren?','fr'=>'Puis-je photographier ?','options'=>'[{"text":"Darf ich im Museum fotografieren?","fr":"Puis-je photographier dans le musée ?"},{"text":"Wo ist der Ausgang?","fr":"Où est la sortie ?"},{"text":"Ich mag keine Fotos.","fr":"Je n\'aime pas les photos."},{"text":"Das Museum schließt bald.","fr":"Le musée ferme bientôt."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Im Erdgeschoss ja, im ersten Stock leider nicht.','fr'=>'Au rez-de-chaussée oui, au premier étage malheureusement non.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── IT ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-hotel',
            'emoji'        => '🏨',
            'title'        => 'All\'hotel',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Ho una prenotazione a nome Rossi.','fr'=>'J\'ai une réservation au nom de Rossi.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Camera doppia per due notti.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'È corretto?','fr'=>'C\'est correct ?','options'=>'[{"text":"Sì, esatto. A che ora è la colazione?","fr":"Oui, exactement. À quelle heure est le petit-déjeuner ?"},{"text":"Mi piace il calcio.","fr":"J\'aime le football."},{"text":"Fa caldo qui.","fr":"Il fait chaud ici."},{"text":"Non ho la prenotazione.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'La colazione è servita dalle sette alle dieci.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Può darmi la chiave?','fr'=>'Pouvez-vous me donner la clé ?','options'=>'[{"text":"Può darmi la chiave, per favore?","fr":"La clé, s.v.p. ?"},{"text":"Non mi piace l\'hotel.","fr":"Je n\'aime pas l\'hôtel."},{"text":"Voglio una pizza.","fr":"Je veux une pizza."},{"text":"Il treno è in ritardo.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Ecco la chiave. Camera 210, secondo piano.','fr'=>'Voici la clé. Chambre 210, deuxième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-ristorante',
            'emoji'        => '🍽️',
            'title'        => 'Al ristorante',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Buonasera. Ha la prenotazione?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Ha la prenotazione?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"No, ma siamo in due.","fr":"Non, mais nous sommes deux."},{"text":"Mi chiamo Marco.","fr":"Je m\'appelle Marco."},{"text":"Il museo è chiuso.","fr":"Le musée est fermé."},{"text":"Ho bisogno di un taxi.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Cosa desidera ordinare?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Cosa consiglia?','fr'=>'Qu\'est-ce que vous recommandez ?','options'=>'[{"text":"Qual è il piatto del giorno?","fr":"Quel est le plat du jour ?"},{"text":"Non mi piace la carne.","fr":"Je n\'aime pas la viande."},{"text":"Vorrei dell\'acqua minerale.","fr":"Je voudrais de l\'eau minérale."},{"text":"Il conto, per favore.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Il piatto del giorno è risotto ai funghi.','fr'=>'Le plat du jour est le risotto aux champignons.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'Come si paga?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"Prendo il risotto.","fr":"Je prends le risotto."},{"text":"Non mi piace il riso.","fr":"Je n\'aime pas le riz."},{"text":"Il ristorante è lontano.","fr":"Le restaurant est loin."},{"text":"Sono allergico ai crostacei.","fr":"Je suis allergique aux crustacés."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-taxi',
            'emoji'        => '🚕',
            'title'        => 'In taxi',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'All\'aeroporto, per favore.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Quale terminal?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Quale terminal?','fr'=>'Quel terminal ?','options'=>'[{"text":"Terminal uno, volo per Parigi.","fr":"Terminal un, vol pour Paris."},{"text":"Non so dove sono.","fr":"Je ne sais pas où je suis."},{"text":"Mi piace Roma.","fr":"J\'aime Rome."},{"text":"L\'hotel è vicino.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Circa venti minuti con questo traffico.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Quanto costerà?','fr'=>'Combien ça coûtera ?','options'=>'[{"text":"Quanto costerà più o meno?","fr":"Combien ça coûtera approximativement ?"},{"text":"Non ho fretta.","fr":"Je ne suis pas pressé."},{"text":"C\'è molto traffico.","fr":"Il y a beaucoup de circulation."},{"text":"Preferisco la metropolitana.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Circa venticinque euro.','fr'=>'Environ vingt-cinq euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-farmacia',
            'emoji'        => '💊',
            'title'        => 'In farmacia',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Ho mal di testa, ha qualcosa?','fr'=>'J\'ai mal à la tête, avez-vous quelque chose ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Ha anche la febbre?','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Ha la febbre?','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"No, solo mal di testa e sono stanco.","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"Mi piace lo sport.","fr":"J\'aime le sport."},{"text":"L\'ospedale è lontano.","fr":"L\'hôpital est loin."},{"text":"Non parlo italiano.","fr":"Je ne parle pas italien."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Le consiglio questo ibuprofene. Uno ogni otto ore.','fr'=>'Je vous recommande cet ibuprofène. Un toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Serve la ricetta?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"Serve la ricetta medica?","fr":"Faut-il une ordonnance médicale ?"},{"text":"Non mi piacciono i farmaci.","fr":"Je n\'aime pas les médicaments."},{"text":"Ho fame.","fr":"J\'ai faim."},{"text":"Il medico è occupato.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'No, è senza ricetta. Sono quattro euro.','fr'=>'Non, sans ordonnance. C\'est quatre euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-caffe',
            'emoji'        => '☕',
            'title'        => 'Al caffè',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Buongiorno! Cosa desidera?','fr'=>'Bonjour ! Que désirez-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Cosa prende?','fr'=>'Qu\'allez-vous prendre ?','options'=>'[{"text":"Un cappuccino e un cornetto, per favore.","fr":"Un cappuccino et un croissant, s.v.p."},{"text":"Non parlo italiano.","fr":"Je ne parle pas italien."},{"text":"Dov\'è la stazione?","fr":"Où est la gare ?"},{"text":"Cerco un taxi.","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Vuole zucchero?','fr'=>'Voulez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Con o senza zucchero?','fr'=>'Avec ou sans sucre ?','options'=>'[{"text":"No grazie, senza zucchero.","fr":"Non merci, sans sucre."},{"text":"Sì, tanto zucchero.","fr":"Oui, beaucoup de sucre."},{"text":"Preferisco il tè.","fr":"Je préfère le thé."},{"text":"Non ho fame.","fr":"Je n\'ai pas faim."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Tutto insieme fa tre euro.','fr'=>'Tout ensemble ça fait trois euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-strada',
            'emoji'        => '🗺️',
            'title'        => 'Chiedere la strada',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Scusi, sa dove si trova il Colosseo?','fr'=>'Excusez-moi, savez-vous où se trouve le Colisée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Sì, vada dritto e poi giri a destra.','fr'=>'Oui, allez tout droit puis tournez à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Quanto è lontano?','fr'=>'C\'est loin ?','options'=>'[{"text":"Quanti minuti a piedi ci vogliono?","fr":"Combien de minutes faut-il à pied ?"},{"text":"Preferisco prendere il taxi.","fr":"Je préfère prendre le taxi."},{"text":"Non conosco la città.","fr":"Je ne connais pas la ville."},{"text":"Sono già stato al Colosseo.","fr":"Je suis déjà allé au Colisée."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Circa quindici minuti a piedi.','fr'=>'Environ quinze minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'C\'è un autobus?','fr'=>'Y a-t-il un bus ?','options'=>'[{"text":"C\'è un autobus diretto?","fr":"Y a-t-il un bus direct ?"},{"text":"Non prendo mai l\'autobus.","fr":"Je ne prends jamais le bus."},{"text":"Preferisco camminare.","fr":"Je préfère marcher."},{"text":"La fermata è lontana.","fr":"L\'arrêt est loin."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Sì, il 64 passa ogni dieci minuti.','fr'=>'Oui, le 64 passe toutes les dix minutes.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-museo',
            'emoji'        => '🏛️',
            'title'        => 'Al museo',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Buongiorno. Quanto costa il biglietto?','fr'=>'Bonjour. Combien coûte le billet ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Dodici euro intero, sei ridotto per studenti.','fr'=>'Douze euros plein tarif, six réduit pour étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Sconto studenti?','fr'=>'Réduction étudiants ?','options'=>'[{"text":"Ho la carta studenti. È valida qui?","fr":"J\'ai la carte étudiante. Est-elle valide ici ?"},{"text":"Il museo è troppo caro.","fr":"Le musée est trop cher."},{"text":"Non mi piacciono i musei.","fr":"Je n\'aime pas les musées."},{"text":"A che ora chiude?","fr":"À quelle heure ferme-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Certamente, posso vedere il documento?','fr'=>'Certainement, puis-je voir la pièce d\'identité ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Posso fotografare?','fr'=>'Puis-je photographier ?','options'=>'[{"text":"È permesso fotografare?","fr":"Est-il permis de photographier ?"},{"text":"Non ho una macchina fotografica.","fr":"Je n\'ai pas d\'appareil photo."},{"text":"Dove è l\'uscita?","fr":"Où est la sortie ?"},{"text":"Il museo chiude presto.","fr":"Le musée ferme bientôt."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Solo al piano terra, non al piano superiore.','fr'=>'Seulement au rez-de-chaussée, pas à l\'étage supérieur.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'it',
            'scenario_key' => 'it-negozio',
            'emoji'        => '🛒',
            'title'        => 'Al negozio',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Buongiorno. Sto cercando una maglietta.','fr'=>'Bonjour. Je cherche un t-shirt.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Che taglia porta?','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Che taglia cerca?','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"Taglia media, per favore.","fr":"Taille moyenne, s.v.p."},{"text":"Non conosco la mia taglia.","fr":"Je ne connais pas ma taille."},{"text":"Non mi piacciono le magliette.","fr":"Je n\'aime pas les t-shirts."},{"text":"Cerco un cappotto.","fr":"Je cherche un manteau."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Abbiamo questi modelli. Le piace il blu?','fr'=>'Nous avons ces modèles. Aimez-vous le bleu ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Posso provarla?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Posso provarla prima di comprare?","fr":"Puis-je l\'essayer avant d\'acheter ?"},{"text":"Non mi piace il colore.","fr":"Je n\'aime pas la couleur."},{"text":"È troppo cara.","fr":"Elle est trop chère."},{"text":"La compro subito.","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Certo! Il camerino è in fondo a destra.','fr'=>'Bien sûr ! La cabine d\'essayage est au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── PT ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-hotel',
            'emoji'        => '🏨',
            'title'        => 'No hotel',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Tenho uma reserva em nome de Silva.','fr'=>'J\'ai une réservation au nom de Silva.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Quarto duplo por duas noites.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Está correto?','fr'=>'C\'est correct ?','options'=>'[{"text":"Sim, exatamente. A que horas é o café da manhã?","fr":"Oui, exactement. Le petit-déjeuner est à quelle heure ?"},{"text":"Eu gosto de futebol.","fr":"J\'aime le football."},{"text":"Está quente aqui.","fr":"Il fait chaud ici."},{"text":"Não tenho reserva.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'O café da manhã é servido das sete às dez.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Pode me dar a chave?','fr'=>'Pouvez-vous me donner la clé ?','options'=>'[{"text":"Pode me dar a chave, por favor?","fr":"La clé, s.v.p. ?"},{"text":"Não gosto do hotel.","fr":"Je n\'aime pas l\'hôtel."},{"text":"Quero uma pizza.","fr":"Je veux une pizza."},{"text":"O trem está atrasado.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Aqui está a chave. Quarto 108, primeiro andar.','fr'=>'Voici la clé. Chambre 108, premier étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-restaurante',
            'emoji'        => '🍽️',
            'title'        => 'No restaurante',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Boa noite. Tem reserva?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Tem reserva?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"Não, mas somos duas pessoas.","fr":"Non, mais nous sommes deux."},{"text":"Meu nome é João.","fr":"Je m\'appelle João."},{"text":"O museu está fechado.","fr":"Le musée est fermé."},{"text":"Preciso de um táxi.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'O que vai querer?','fr'=>'Que souhaitez-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Qual é o prato do dia?','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"Qual é o prato do dia?","fr":"Quel est le plat du jour ?"},{"text":"Não gosto de carne.","fr":"Je n\'aime pas la viande."},{"text":"Quero água mineral.","fr":"Je veux de l\'eau minérale."},{"text":"A conta, por favor.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'O prato do dia é bacalhau com batatas.','fr'=>'Le plat du jour est la morue avec des pommes de terre.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'Como se paga?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"Vou pedir o bacalhau.","fr":"Je vais prendre la morue."},{"text":"Não gosto de peixe.","fr":"Je n\'aime pas le poisson."},{"text":"O restaurante é longe.","fr":"Le restaurant est loin."},{"text":"Sou alérgico a frutos do mar.","fr":"Je suis allergique aux fruits de mer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-taxi',
            'emoji'        => '🚕',
            'title'        => 'No táxi',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Para o aeroporto, por favor.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Qual terminal?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Qual terminal?','fr'=>'Quel terminal ?','options'=>'[{"text":"Terminal um, voo para Paris.","fr":"Terminal un, vol pour Paris."},{"text":"Não sei onde estou.","fr":"Je ne sais pas où je suis."},{"text":"Gosto de Lisboa.","fr":"J\'aime Lisbonne."},{"text":"O hotel é perto.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Cerca de vinte minutos com este trânsito.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Quanto vai custar?','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"Quanto vai custar aproximadamente?","fr":"Combien approximativement ?"},{"text":"Não tenho pressa.","fr":"Je ne suis pas pressé."},{"text":"Há muito trânsito.","fr":"Il y a beaucoup de circulation."},{"text":"Prefiro o metro.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Cerca de vinte euros.','fr'=>'Environ vingt euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-farmacia',
            'emoji'        => '💊',
            'title'        => 'Na farmácia',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Estou com dor de cabeça, tem alguma coisa?','fr'=>'J\'ai mal à la tête, avez-vous quelque chose ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Tem febre também?','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Tem febre?','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"Não, só dor de cabeça e estou cansado.","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"Gosto de esporte.","fr":"J\'aime le sport."},{"text":"O hospital é longe.","fr":"L\'hôpital est loin."},{"text":"Não falo português.","fr":"Je ne parle pas portugais."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Recomendo este ibuprofeno. Um comprimido de oito em oito horas.','fr'=>'Je vous recommande cet ibuprofène. Un comprimé toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Precisa de receita?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"Precisa de receita médica?","fr":"Faut-il une ordonnance médicale ?"},{"text":"Não gosto de remédios.","fr":"Je n\'aime pas les médicaments."},{"text":"Estou com fome.","fr":"J\'ai faim."},{"text":"O médico está ocupado.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Não, é sem receita. São quatro euros.','fr'=>'Non, sans ordonnance. C\'est quatre euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-cafe',
            'emoji'        => '☕',
            'title'        => 'No café',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Bom dia! O que vai querer?','fr'=>'Bonjour ! Que désirez-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'O que deseja?','fr'=>'Que désirez-vous ?','options'=>'[{"text":"Um café com leite e uma torrada, por favor.","fr":"Un café au lait et une toast, s.v.p."},{"text":"Não falo português.","fr":"Je ne parle pas portugais."},{"text":"Onde é a estação?","fr":"Où est la gare ?"},{"text":"Preciso de um táxi.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Quer açúcar?','fr'=>'Voulez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Com açúcar?','fr'=>'Avec du sucre ?','options'=>'[{"text":"Sim, um pacotinho só, obrigado.","fr":"Oui, un petit sachet seulement, merci."},{"text":"Não gosto de café.","fr":"Je n\'aime pas le café."},{"text":"Prefiro chá.","fr":"Je préfère le thé."},{"text":"Sem nada, obrigado.","fr":"Rien, merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'São dois euros e cinquenta.','fr'=>'Ça fait deux euros cinquante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-rua',
            'emoji'        => '🗺️',
            'title'        => 'Pedindo direções',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Com licença, sabe onde fica a estação?','fr'=>'Pardon, savez-vous où se trouve la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Sim, siga em frente e vire à esquerda.','fr'=>'Oui, allez tout droit et tournez à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'É longe?','fr'=>'C\'est loin ?','options'=>'[{"text":"É longe daqui?","fr":"C\'est loin d\'ici ?"},{"text":"Prefiro apanhar um táxi.","fr":"Je préfère prendre un taxi."},{"text":"Já conheço o caminho.","fr":"Je connais déjà le chemin."},{"text":"Vou de autocarro.","fr":"Je vais en bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'São uns dez minutos a pé.','fr'=>'C\'est environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Há autocarro?','fr'=>'Y a-t-il un bus ?','options'=>'[{"text":"Há um autocarro para a estação?","fr":"Y a-t-il un bus pour la gare ?"},{"text":"Não gosto de autocarros.","fr":"Je n\'aime pas les bus."},{"text":"Prefiro andar a pé.","fr":"Je préfère marcher."},{"text":"O táxi é mais rápido.","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Sim, o 15 para mesmo aqui em frente.','fr'=>'Oui, le 15 s\'arrête juste en face.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-museu',
            'emoji'        => '🏛️',
            'title'        => 'No museu',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Boa tarde. Quanto custa a entrada?','fr'=>'Bonjour. Combien coûte l\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Dez euros por adulto, grátis para menores de doze.','fr'=>'Dix euros par adulte, gratuit pour les moins de douze ans.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Desconto estudante?','fr'=>'Réduction étudiant ?','options'=>'[{"text":"Existe desconto para estudantes?","fr":"Y a-t-il une réduction pour étudiants ?"},{"text":"O museu é muito caro.","fr":"Le musée est très cher."},{"text":"Não gosto de museus.","fr":"Je n\'aime pas les musées."},{"text":"A que horas abre?","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Sim, com cartão de estudante, oito euros.','fr'=>'Oui, avec carte étudiante, huit euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'A que horas fecha?','fr'=>'À quelle heure ferme-t-il ?','options'=>'[{"text":"A que horas fecha o museu?","fr":"À quelle heure ferme le musée ?"},{"text":"Já é tarde.","fr":"Il est déjà tard."},{"text":"Quero sair agora.","fr":"Je veux partir maintenant."},{"text":"O museu é pequeno.","fr":"Le musée est petit."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Às dezoito horas todos os dias.','fr'=>'À dix-huit heures tous les jours.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pt',
            'scenario_key' => 'pt-loja',
            'emoji'        => '🛒',
            'title'        => 'Na loja',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Boa tarde. Estou à procura de um casaco.','fr'=>'Bonjour. Je cherche un manteau.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Que tamanho usa?','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Que tamanho precisa?','fr'=>'Quelle taille vous faut-il ?','options'=>'[{"text":"Tamanho médio, por favor.","fr":"Taille moyenne, s.v.p."},{"text":"Não sei a minha medida.","fr":"Je ne connais pas ma taille."},{"text":"Não preciso de casaco.","fr":"Je n\'ai pas besoin d\'un manteau."},{"text":"Quero uma camisa.","fr":"Je veux une chemise."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Este está em promoção. Gosta desta cor?','fr'=>'Celui-ci est en promotion. Aimez-vous cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Posso experimentar?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Posso experimentar antes de comprar?","fr":"Puis-je l\'essayer avant d\'acheter ?"},{"text":"Não gosto desta cor.","fr":"Je n\'aime pas cette couleur."},{"text":"É muito caro.","fr":"C\'est trop cher."},{"text":"Compro sem experimentar.","fr":"J\'achète sans essayer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Claro! O provador é ali ao fundo.','fr'=>'Bien sûr ! La cabine d\'essayage est au fond là-bas.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── NL ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-hotel',
            'emoji'        => '🏨',
            'title'        => 'In het hotel',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Ik heb een reservering op naam van Jansen.','fr'=>'J\'ai une réservation au nom de Jansen.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Een tweepersoonskamer voor twee nachten.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Klopt dat?','fr'=>'C\'est correct ?','options'=>'[{"text":"Ja, precies. Hoe laat is het ontbijt?","fr":"Oui, exactement. Le petit-déjeuner est à quelle heure ?"},{"text":"Ik hou van voetbal.","fr":"J\'aime le football."},{"text":"Het is warm hier.","fr":"Il fait chaud ici."},{"text":"Ik heb geen reservering.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Het ontbijt is van zeven tot tien uur.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Kunt u mij de sleutel geven?','fr'=>'Pouvez-vous me donner la clé ?','options'=>'[{"text":"Kunt u mij de sleutel geven, alstublieft?","fr":"La clé, s.v.p. ?"},{"text":"Ik hou niet van het hotel.","fr":"Je n\'aime pas l\'hôtel."},{"text":"Ik wil een pizza.","fr":"Je veux une pizza."},{"text":"De trein heeft vertraging.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Hier is uw sleutel. Kamer 112, eerste verdieping.','fr'=>'Voici votre clé. Chambre 112, premier étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-restaurant',
            'emoji'        => '🍽️',
            'title'        => 'In het restaurant',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Goedenavond. Heeft u een reservering?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Heeft u een reservering?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"Nee, maar we zijn met zijn tweeën.","fr":"Non, mais nous sommes deux."},{"text":"Ik heet Emma.","fr":"Je m\'appelle Emma."},{"text":"Het museum is gesloten.","fr":"Le musée est fermé."},{"text":"Ik heb een taxi nodig.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Wat wilt u bestellen?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Wat raadt u aan?','fr'=>'Qu\'est-ce que vous recommandez ?','options'=>'[{"text":"Wat is het dagmenu?","fr":"Quel est le menu du jour ?"},{"text":"Ik hou niet van vlees.","fr":"Je n\'aime pas la viande."},{"text":"Ik wil mineraalwater.","fr":"Je veux de l\'eau minérale."},{"text":"De rekening, alstublieft.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Het dagmenu is stamppot met worst.','fr'=>'Le plat du jour est la purée avec de la saucisse.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'Hoe betaalt men?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"Ik neem het dagmenu.","fr":"Je prends le menu du jour."},{"text":"Ik hou niet van worst.","fr":"Je n\'aime pas la saucisse."},{"text":"Het restaurant is ver.","fr":"Le restaurant est loin."},{"text":"Ik ben allergisch voor gluten.","fr":"Je suis allergique au gluten."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-taxi',
            'emoji'        => '🚕',
            'title'        => 'In de taxi',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Naar het vliegveld, alstublieft.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Welke terminal?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Welke terminal?','fr'=>'Quel terminal ?','options'=>'[{"text":"Terminal twee, vlucht naar Parijs.","fr":"Terminal deux, vol pour Paris."},{"text":"Ik weet niet waar ik ben.","fr":"Je ne sais pas où je suis."},{"text":"Ik hou van Amsterdam.","fr":"J\'aime Amsterdam."},{"text":"Het hotel is dichtbij.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Ongeveer twintig minuten met dit verkeer.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Hoeveel kost het?','fr'=>'Combien ça coûte ?','options'=>'[{"text":"Hoeveel zal het ongeveer kosten?","fr":"Combien approximativement ?"},{"text":"Ik heb geen haast.","fr":"Je ne suis pas pressé."},{"text":"Er is veel verkeer.","fr":"Il y a beaucoup de circulation."},{"text":"Ik neem liever de tram.","fr":"Je préfère prendre le tram."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Ongeveer vijfentwintig euro.','fr'=>'Environ vingt-cinq euros.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-straat',
            'emoji'        => '🗺️',
            'title'        => 'Op straat',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Pardon, kunt u mij helpen?','fr'=>'Excusez-moi, pouvez-vous m\'aider ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Natuurlijk! Wat heeft u nodig?','fr'=>'Bien sûr ! De quoi avez-vous besoin ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Wat heeft u nodig?','fr'=>'De quoi avez-vous besoin ?','options'=>'[{"text":"Weet u waar het dichtstbijzijnde postkantoor is?","fr":"Savez-vous où est le bureau de poste le plus proche ?"},{"text":"Ik hou van uw jas.","fr":"J\'adore votre veste."},{"text":"Het is mooi weer.","fr":"Il fait beau."},{"text":"Ik ben erg moe.","fr":"Je suis très fatigué."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Ga rechtdoor en sla links af bij de verkeerslichten.','fr'=>'Allez tout droit et tournez à gauche aux feux.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Is het ver?','fr'=>'C\'est loin ?','options'=>'[{"text":"Hoe lang duurt het lopen?","fr":"Combien de temps à pied ?"},{"text":"Ik neem liever de bus.","fr":"Je préfère le bus."},{"text":"Het regent.","fr":"Il pleut."},{"text":"Ik ben verdwaald.","fr":"Je suis perdu."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Ongeveer vijf minuten. U kunt het niet missen.','fr'=>'Environ cinq minutes. Vous ne pouvez pas le rater.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-cafe',
            'emoji'        => '☕',
            'title'        => 'In het café',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Goedemiddag! Wat mag het zijn?','fr'=>'Bonjour ! Que puis-je faire pour vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Wat wilt u drinken?','fr'=>'Que voulez-vous boire ?','options'=>'[{"text":"Een koffie met melk en een croissant, alstublieft.","fr":"Un café au lait et un croissant, s.v.p."},{"text":"Ik spreek geen Nederlands.","fr":"Je ne parle pas néerlandais."},{"text":"Waar is het station?","fr":"Où est la gare ?"},{"text":"Ik zoek een taxi.","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Wilt u suiker?','fr'=>'Voulez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Met of zonder suiker?','fr'=>'Avec ou sans sucre ?','options'=>'[{"text":"Met melk maar zonder suiker, graag.","fr":"Avec du lait mais sans sucre, s.v.p."},{"text":"Ik drink geen koffie.","fr":"Je ne bois pas de café."},{"text":"Ik wil thee.","fr":"Je veux du thé."},{"text":"Nee, dank u wel.","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Dat is dan drie euro tachtig.','fr'=>'Ça fait trois euros quatre-vingt.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-apotheek',
            'emoji'        => '💊',
            'title'        => 'Bij de apotheek',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Goedendag. Ik heb hoofdpijn.','fr'=>'Bonjour. J\'ai mal à la tête.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Heeft u koorts of andere klachten?','fr'=>'Avez-vous de la fièvre ou d\'autres symptômes ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Welke klachten heeft u?','fr'=>'Quels symptômes avez-vous ?','options'=>'[{"text":"Alleen hoofdpijn en wat vermoeidheid.","fr":"Seulement des maux de tête et un peu de fatigue."},{"text":"Ik zoek een restaurant.","fr":"Je cherche un restaurant."},{"text":"Mijn trein vertrekt om negen uur.","fr":"Mon train part à neuf heures."},{"text":"Ik heb geen pijn.","fr":"Je n\'ai pas mal."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Dan raad ik u deze tabletten aan.','fr'=>'Je vous recommande ces comprimés.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Hoe vaak innemen?','fr'=>'Combien de fois prendre ?','options'=>'[{"text":"Hoe vaak moet ik ze innemen?","fr":"Combien de fois dois-je les prendre ?"},{"text":"Hoeveel kosten ze?","fr":"Combien coûtent-ils ?"},{"text":"Ik slik geen tabletten.","fr":"Je ne prends pas de comprimés."},{"text":"Heeft u iets anders?","fr":"Avez-vous autre chose ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Tweemaal daags na de maaltijd.','fr'=>'Deux fois par jour après les repas.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-museum',
            'emoji'        => '🏛️',
            'title'        => 'In het museum',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Goedemiddag. Wat kost de toegang?','fr'=>'Bonjour. Combien coûte l\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Twaalf euro voor volwassenen, zes voor studenten.','fr'=>'Douze euros pour les adultes, six pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Studentenkorting?','fr'=>'Réduction étudiants ?','options'=>'[{"text":"Ik ben student. Heb ik korting?","fr":"Je suis étudiant. Ai-je une réduction ?"},{"text":"Het museum is te duur.","fr":"Le musée est trop cher."},{"text":"Ik ga liever naar buiten.","fr":"Je préfère aller dehors."},{"text":"Hoe laat gaat het open?","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Ja, laat uw studentenkaart zien.','fr'=>'Oui, montrez votre carte étudiante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Mag ik foto\'s nemen?','fr'=>'Puis-je prendre des photos ?','options'=>'[{"text":"Mag ik foto\'s nemen in het museum?","fr":"Puis-je prendre des photos dans le musée ?"},{"text":"Ik heb geen camera.","fr":"Je n\'ai pas d\'appareil photo."},{"text":"Waar is de uitgang?","fr":"Où est la sortie ?"},{"text":"Het museum sluit snel.","fr":"Le musée ferme bientôt."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Op de begane grond mag het, daarboven niet.','fr'=>'Au rez-de-chaussée oui, pas au-dessus.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'nl',
            'scenario_key' => 'nl-winkel',
            'emoji'        => '🛒',
            'title'        => 'In de winkel',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Goedemiddag. Ik zoek een jas.','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Welke maat heeft u?','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Welke maat zoekt u?','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"Maat medium, alstublieft.","fr":"Taille medium, s.v.p."},{"text":"Ik weet mijn maat niet.","fr":"Je ne connais pas ma taille."},{"text":"Ik zoek een broek.","fr":"Je cherche un pantalon."},{"text":"Ik heb geen jas nodig.","fr":"Je n\'ai pas besoin d\'une veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Deze staat in de aanbieding. Vindt u de kleur mooi?','fr'=>'Celle-ci est en promotion. Trouvez-vous la couleur jolie ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Kan ik het passen?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Mag ik hem passen?","fr":"Puis-je l\'essayer ?"},{"text":"Ik vind de kleur niet mooi.","fr":"Je ne trouve pas la couleur jolie."},{"text":"Het is te duur.","fr":"C\'est trop cher."},{"text":"Ik koop het direct.","fr":"Je l\'achète directement."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Natuurlijk! De paskamer is achteraan rechts.','fr'=>'Bien sûr ! La cabine d\'essayage est au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── PL ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-hotel',
            'emoji'        => '🏨',
            'title'        => 'W hotelu',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Mam rezerwację na nazwisko Kowalski.','fr'=>'J\'ai une réservation au nom de Kowalski.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Pokój dwuosobowy na dwie noce.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Czy to poprawne?','fr'=>'C\'est correct ?','options'=>'[{"text":"Tak, dokładnie. O której jest śniadanie?","fr":"Oui, exactement. Le petit-déjeuner est à quelle heure ?"},{"text":"Lubię piłkę nożną.","fr":"J\'aime le football."},{"text":"Jest tu gorąco.","fr":"Il fait chaud ici."},{"text":"Nie mam rezerwacji.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Śniadanie serwowane jest od siódmej do dziesiątej.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Czy mogę prosić o klucz?','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"Czy mogę prosić o klucz?","fr":"La clé, s.v.p. ?"},{"text":"Nie lubię tego hotelu.","fr":"Je n\'aime pas cet hôtel."},{"text":"Chcę pizzę.","fr":"Je veux une pizza."},{"text":"Pociąg jest opóźniony.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Proszę, oto klucz. Pokój 203, drugie piętro.','fr'=>'Voici la clé. Chambre 203, deuxième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-restauracja',
            'emoji'        => '🍽️',
            'title'        => 'W restauracji',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Dobry wieczór. Czy mają Państwo rezerwację?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Czy mają Państwo rezerwację?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"Nie, ale jesteśmy we dwoje.","fr":"Non, mais nous sommes deux."},{"text":"Mam na imię Anna.","fr":"Je m\'appelle Anna."},{"text":"Muzeum jest zamknięte.","fr":"Le musée est fermé."},{"text":"Potrzebuję taksówki.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Co będą Państwo zamawiać?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Jakie jest danie dnia?','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"Jakie jest danie dnia?","fr":"Quel est le plat du jour ?"},{"text":"Nie lubię mięsa.","fr":"Je n\'aime pas la viande."},{"text":"Chcę wodę mineralną.","fr":"Je veux de l\'eau minérale."},{"text":"Rachunek, proszę.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Danie dnia to bigos z chlebem.','fr'=>'Le plat du jour est le bigos avec du pain.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'Jak się płaci?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"Poproszę bigos.","fr":"Je prends le bigos, s.v.p."},{"text":"Nie lubię kapusty.","fr":"Je n\'aime pas le chou."},{"text":"Restauracja jest daleko.","fr":"Le restaurant est loin."},{"text":"Jestem uczulony na gluten.","fr":"Je suis allergique au gluten."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-taxi',
            'emoji'        => '🚕',
            'title'        => 'W taksówce',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Na lotnisko, proszę.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Który terminal?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Który terminal?','fr'=>'Quel terminal ?','options'=>'[{"text":"Terminal dwa, lot do Paryża.","fr":"Terminal deux, vol pour Paris."},{"text":"Nie wiem gdzie jestem.","fr":"Je ne sais pas où je suis."},{"text":"Lubię Warszawę.","fr":"J\'aime Varsovie."},{"text":"Hotel jest blisko.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Około dwudziestu minut przy tym ruchu.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Ile to będzie kosztować?','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"Ile to będzie mniej więcej kosztować?","fr":"Combien approximativement ?"},{"text":"Nie śpieszę się.","fr":"Je ne suis pas pressé."},{"text":"Jest duży ruch.","fr":"Il y a beaucoup de circulation."},{"text":"Wolę metro.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Około trzydziestu złotych.','fr'=>'Environ trente zlotys.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-ulica',
            'emoji'        => '🗺️',
            'title'        => 'Na ulicy',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Przepraszam, czy może mi Pan pomóc?','fr'=>'Excusez-moi, pouvez-vous m\'aider ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Oczywiście! Czego potrzebujesz?','fr'=>'Bien sûr ! De quoi avez-vous besoin ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Czego potrzebujesz?','fr'=>'De quoi avez-vous besoin ?','options'=>'[{"text":"Czy wiesz gdzie jest najbliższa apteka?","fr":"Sais-tu où est la pharmacie la plus proche ?"},{"text":"Lubię twój płaszcz.","fr":"J\'aime ton manteau."},{"text":"Ładna pogoda.","fr":"Il fait beau."},{"text":"Jestem bardzo zmęczony.","fr":"Je suis très fatigué."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Idź prosto i skręć w lewo przy świetle.','fr'=>'Allez tout droit et tournez à gauche aux feux.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Czy to daleko?','fr'=>'C\'est loin ?','options'=>'[{"text":"Jak długo idzie się piechotą?","fr":"Combien de temps à pied ?"},{"text":"Wolę jechać autobusem.","fr":"Je préfère le bus."},{"text":"Pada deszcz.","fr":"Il pleut."},{"text":"Zgubiłem się.","fr":"Je suis perdu."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Jakieś pięć minut. Nie sposób tego przeoczyć.','fr'=>'Environ cinq minutes. Vous ne pouvez pas le rater.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-kawiarnia',
            'emoji'        => '☕',
            'title'        => 'W kawiarni',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Dzień dobry! W czym mogę pomóc?','fr'=>'Bonjour ! Comment puis-je vous aider ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Co chce pan/pani zamówić?','fr'=>'Que souhaitez-vous commander ?','options'=>'[{"text":"Poproszę kawę z mlekiem i rogalika.","fr":"Je voudrais un café au lait et un croissant, s.v.p."},{"text":"Nie mówię po polsku.","fr":"Je ne parle pas polonais."},{"text":"Gdzie jest stacja?","fr":"Où est la gare ?"},{"text":"Szukam taksówki.","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Czy chce pan/pani cukier?','fr'=>'Souhaitez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Z cukrem czy bez?','fr'=>'Avec ou sans sucre ?','options'=>'[{"text":"Z mlekiem, ale bez cukru, dziękuję.","fr":"Avec du lait mais sans sucre, merci."},{"text":"Nie piję kawy.","fr":"Je ne bois pas de café."},{"text":"Wolę herbatę.","fr":"Je préfère le thé."},{"text":"Nie, dziękuję.","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'To będzie dziesięć złotych.','fr'=>'Ça fera dix zlotys.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-apteka',
            'emoji'        => '💊',
            'title'        => 'W aptece',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Dzień dobry. Boli mnie głowa.','fr'=>'Bonjour. J\'ai mal à la tête.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Czy ma pan/pani gorączkę lub inne objawy?','fr'=>'Avez-vous de la fièvre ou d\'autres symptômes ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Jakie ma pan/pani objawy?','fr'=>'Quels symptômes avez-vous ?','options'=>'[{"text":"Tylko ból głowy i trochę zmęczenia.","fr":"Seulement des maux de tête et un peu de fatigue."},{"text":"Szukam restauracji.","fr":"Je cherche un restaurant."},{"text":"Mój pociąg odjeżdża o dziewiątej.","fr":"Mon train part à neuf heures."},{"text":"Czuję się dobrze.","fr":"Je me sens bien."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Polecam te tabletki.','fr'=>'Je vous recommande ces comprimés.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Jak często brać?','fr'=>'Combien de fois prendre ?','options'=>'[{"text":"Jak często mam je brać?","fr":"Combien de fois dois-je les prendre ?"},{"text":"Ile to kosztuje?","fr":"Combien ça coûte ?"},{"text":"Nie lubię tabletek.","fr":"Je n\'aime pas les comprimés."},{"text":"Mam już leki.","fr":"J\'ai déjà des médicaments."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Dwa razy dziennie po posiłku.','fr'=>'Deux fois par jour après les repas.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-muzeum',
            'emoji'        => '🏛️',
            'title'        => 'W muzeum',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Dzień dobry. Ile kosztuje wstęp?','fr'=>'Bonjour. Combien coûte l\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Dwanaście złotych normalny, sześć ulgowy.','fr'=>'Douze zlotys plein tarif, six réduit.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Czy jest zniżka?','fr'=>'Y a-t-il une réduction ?','options'=>'[{"text":"Jestem studentem. Czy mam zniżkę?","fr":"Je suis étudiant. Ai-je une réduction ?"},{"text":"Muzeum jest za drogie.","fr":"Le musée est trop cher."},{"text":"Nie lubię muzeów.","fr":"Je n\'aime pas les musées."},{"text":"O której otwierają?","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Tak, proszę pokazać legitymację studencką.','fr'=>'Oui, montrez votre carte étudiante s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Czy wolno fotografować?','fr'=>'Peut-on photographier ?','options'=>'[{"text":"Czy wolno tu fotografować?","fr":"Est-il permis de photographier ici ?"},{"text":"Nie mam aparatu.","fr":"Je n\'ai pas d\'appareil photo."},{"text":"Gdzie jest wyjście?","fr":"Où est la sortie ?"},{"text":"Muzeum jest zamknięte.","fr":"Le musée est fermé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Na parterze tak, na piętrze nie.','fr'=>'Au rez-de-chaussée oui, à l\'étage non.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'pl',
            'scenario_key' => 'pl-sklep',
            'emoji'        => '🛒',
            'title'        => 'W sklepie',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Dzień dobry. Szukam kurtki.','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Jaki rozmiar?','fr'=>'Quelle taille ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Jakiego rozmiaru szuka pan/pani?','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"Rozmiar M, proszę.","fr":"Taille M, s.v.p."},{"text":"Nie znam swojego rozmiaru.","fr":"Je ne connais pas ma taille."},{"text":"Szukam spodni.","fr":"Je cherche un pantalon."},{"text":"Nie potrzebuję kurtki.","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Ta jest w promocji. Podoba się panu/pani ten kolor?','fr'=>'Celle-ci est en promotion. Aimez-vous cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Czy mogę przymierzyć?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Czy mogę to przymierzyć?","fr":"Puis-je l\'essayer ?"},{"text":"Nie lubię tego koloru.","fr":"Je n\'aime pas cette couleur."},{"text":"To za drogo.","fr":"C\'est trop cher."},{"text":"Kupię bez przymierzania.","fr":"J\'achète sans essayer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Oczywiście! Przymierzalnia jest na końcu po prawej.','fr'=>'Bien sûr ! La cabine d\'essayage est au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── TR ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-otel',
            'emoji'        => '🏨',
            'title'        => 'Otelde',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Yılmaz adına rezervasyonum var.','fr'=>'J\'ai une réservation au nom de Yılmaz.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'İki kişilik oda, iki gece.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Doğru mu?','fr'=>'C\'est correct ?','options'=>'[{"text":"Evet, aynen öyle. Kahvaltı saat kaçta?","fr":"Oui, exactement. Le petit-déjeuner est à quelle heure ?"},{"text":"Futbol seviyorum.","fr":"J\'aime le football."},{"text":"Burası çok sıcak.","fr":"Il fait très chaud ici."},{"text":"Rezervasyonum yok.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Kahvaltı yediden ona kadar servis edilir.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Anahtarı alabilir miyim?','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"Anahtarı alabilir miyim lütfen?","fr":"La clé, s.v.p. ?"},{"text":"Otel hoşuma gitmiyor.","fr":"Je n\'aime pas l\'hôtel."},{"text":"Pizza istiyorum.","fr":"Je veux une pizza."},{"text":"Tren gecikti.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'İşte anahtarınız. 215 numaralı oda, ikinci kat.','fr'=>'Voici votre clé. Chambre 215, deuxième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-restoran',
            'emoji'        => '🍽️',
            'title'        => 'Restoranda',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'İyi akşamlar. Rezervasyonunuz var mı?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Rezervasyonunuz var mı?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"Hayır, ama iki kişiyiz.","fr":"Non, mais nous sommes deux."},{"text":"Adım Fatma.","fr":"Je m\'appelle Fatma."},{"text":"Müze kapalı.","fr":"Le musée est fermé."},{"text":"Taksiye ihtiyacım var.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Ne sipariş etmek istersiniz?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Günün yemeği nedir?','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"Günün yemeği nedir?","fr":"Quel est le plat du jour ?"},{"text":"Et sevmiyorum.","fr":"Je n\'aime pas la viande."},{"text":"Maden suyu istiyorum.","fr":"Je veux de l\'eau minérale."},{"text":"Hesap lütfen.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Günün yemeği mercimek çorbası ve pilavdır.','fr'=>'Le plat du jour est la soupe de lentilles et le riz pilaf.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'Nasıl ödenir?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"Günün yemeğini alacağım.","fr":"Je prends le plat du jour."},{"text":"Pirinç sevmiyorum.","fr":"Je n\'aime pas le riz."},{"text":"Restoran uzak.","fr":"Le restaurant est loin."},{"text":"Deniz ürünlerine alerjim var.","fr":"Je suis allergique aux fruits de mer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-taksi',
            'emoji'        => '🚕',
            'title'        => 'Taksiye binmek',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Havalimanına lütfen.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Hangi terminal?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Hangi terminal?','fr'=>'Quel terminal ?','options'=>'[{"text":"İki numaralı terminal, Paris uçuşu.","fr":"Terminal deux, vol pour Paris."},{"text":"Nerede olduğumu bilmiyorum.","fr":"Je ne sais pas où je suis."},{"text":"İstanbul\'u seviyorum.","fr":"J\'aime Istanbul."},{"text":"Otel yakın.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Bu trafik ile yaklaşık yirmi dakika.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Ne kadar tutar?','fr'=>'Combien ça coûte ?','options'=>'[{"text":"Yaklaşık ne kadar tutacak?","fr":"Combien approximativement ?"},{"text":"Aceleden değilim.","fr":"Je ne suis pas pressé."},{"text":"Çok trafik var.","fr":"Il y a beaucoup de circulation."},{"text":"Metroyu tercih ediyorum.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Yaklaşık yüz elli lira.','fr'=>'Environ cent cinquante lires.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-eczane',
            'emoji'        => '💊',
            'title'        => 'Eczanede',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Baş ağrısı için bir şeyiniz var mı?','fr'=>'Avez-vous quelque chose contre le mal de tête ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Ateşiniz de var mı?','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Ateşiniz var mı?','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"Hayır, sadece baş ağrısı ve yorgunum.","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"Spor yapıyorum.","fr":"Je fais du sport."},{"text":"Hastane uzak.","fr":"L\'hôpital est loin."},{"text":"Türkçe bilmiyorum.","fr":"Je ne parle pas turc."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Bu ibuprofeni tavsiye ederim. Sekiz saatte bir bir tane alın.','fr'=>'Je vous recommande cet ibuprofène. Un toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Reçete gerekiyor mu?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"Reçetesiz satılıyor mu?","fr":"Est-ce vendu sans ordonnance ?"},{"text":"İlaç sevmiyorum.","fr":"Je n\'aime pas les médicaments."},{"text":"Açım.","fr":"J\'ai faim."},{"text":"Doktor meşgul.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Hayır, reçetesiz. Kırk lira.','fr'=>'Non, sans ordonnance. Quarante lires.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-kafe',
            'emoji'        => '☕',
            'title'        => 'Kafede',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Merhaba! Ne alırsınız?','fr'=>'Bonjour ! Que prendrez-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Ne içmek istersiniz?','fr'=>'Que souhaitez-vous boire ?','options'=>'[{"text":"Bir Türk kahvesi ve bir börek, lütfen.","fr":"Un café turc et un börek, s.v.p."},{"text":"Türkçe bilmiyorum.","fr":"Je ne parle pas turc."},{"text":"İstasyon nerede?","fr":"Où est la gare ?"},{"text":"Taksi arıyorum.","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Şekerli mi şekersiz mi?','fr'=>'Avec ou sans sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Şeker ister misiniz?','fr'=>'Voulez-vous du sucre ?','options'=>'[{"text":"Az şekerli olsun, teşekkürler.","fr":"Peu sucré, merci."},{"text":"Kahve sevmiyorum.","fr":"Je n\'aime pas le café."},{"text":"Çay tercih ederim.","fr":"Je préfère le thé."},{"text":"Şeker istemiyorum.","fr":"Je ne veux pas de sucre."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Yirmi beş lira olacak.','fr'=>'Ça fera vingt-cinq lires.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-yol',
            'emoji'        => '🗺️',
            'title'        => 'Yol sormak',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Affedersiniz, istasyona nasıl gidebilirim?','fr'=>'Excusez-moi, comment puis-je aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Düz gidin, sonra sola dönün.','fr'=>'Allez tout droit, puis tournez à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Uzak mı?','fr'=>'C\'est loin ?','options'=>'[{"text":"Buradan uzak mı?","fr":"Est-ce loin d\'ici ?"},{"text":"Taksi tercih ederim.","fr":"Je préfère le taxi."},{"text":"Yolu biliyorum.","fr":"Je connais le chemin."},{"text":"Otobüse bineceğim.","fr":"Je vais prendre le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Yaklaşık on dakika yürüyüş.','fr'=>'Environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Otobüs var mı?','fr'=>'Y a-t-il un bus ?','options'=>'[{"text":"Yakında otobüs durağı var mı?","fr":"Y a-t-il un arrêt de bus à proximité ?"},{"text":"Otobüs sevmiyorum.","fr":"Je n\'aime pas le bus."},{"text":"Yürümeyi tercih ederim.","fr":"Je préfère marcher."},{"text":"Taksi daha hızlı.","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Evet, köşede bir durak var.','fr'=>'Oui, il y a un arrêt au coin de la rue.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-muze',
            'emoji'        => '🏛️',
            'title'        => 'Müzede',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Merhaba. Giriş ücreti ne kadar?','fr'=>'Bonjour. Combien coûte l\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Yetişkinler için yüz lira, öğrenciler için elli.','fr'=>'Cent lires pour les adultes, cinquante pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'İndirim var mı?','fr'=>'Y a-t-il une réduction ?','options'=>'[{"text":"Öğrenci olarak indirim alabilir miyim?","fr":"Puis-je avoir une réduction en tant qu\'étudiant ?"},{"text":"Müze çok pahalı.","fr":"Le musée est trop cher."},{"text":"Müzeyi sevmiyorum.","fr":"Je n\'aime pas les musées."},{"text":"Saat kaçta açılıyor?","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Evet, öğrenci kartınızı gösterir misiniz?','fr'=>'Oui, pouvez-vous montrer votre carte étudiante ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Fotoğraf çekebilir miyim?','fr'=>'Puis-je prendre des photos ?','options'=>'[{"text":"Burada fotoğraf çekebilir miyim?","fr":"Puis-je prendre des photos ici ?"},{"text":"Fotoğraf makinam yok.","fr":"Je n\'ai pas d\'appareil photo."},{"text":"Çıkış nerede?","fr":"Où est la sortie ?"},{"text":"Müze kapanıyor.","fr":"Le musée ferme."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Zemin katta evet, üst katta hayır.','fr'=>'Au rez-de-chaussée oui, à l\'étage non.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'tr',
            'scenario_key' => 'tr-alisveris',
            'emoji'        => '🛒',
            'title'        => 'Alışverişte',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Merhaba. Bir ceket arıyorum.','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Kaç beden giyiyorsunuz?','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Kaç beden istiyorsunuz?','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"Orta beden olsun, lütfen.","fr":"Taille moyenne, s.v.p."},{"text":"Bedenimi bilmiyorum.","fr":"Je ne connais pas ma taille."},{"text":"Pantolon arıyorum.","fr":"Je cherche un pantalon."},{"text":"Cekete ihtiyacım yok.","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Bu indirimde. Bu rengi beğeniyor musunuz?','fr'=>'Celle-ci est en promotion. Aimez-vous cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Deneyebilir miyim?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Bunu deneyebilir miyim?","fr":"Puis-je l\'essayer ?"},{"text":"Bu rengi beğenmedim.","fr":"Je n\'aime pas cette couleur."},{"text":"Çok pahalı.","fr":"C\'est trop cher."},{"text":"Hemen alıyorum.","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Tabii! Soyunma kabinleri arkada sağda.','fr'=>'Bien sûr ! Les cabines d\'essayage sont au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── RU ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-hotel',
            'emoji'        => '🏨',
            'title'        => 'В отеле',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'У меня бронь на имя Иванов.','fr'=>'J\'ai une réservation au nom d\'Ivanov.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Двухместный номер на две ночи.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Всё верно?','fr'=>'C\'est correct ?','options'=>'[{"text":"Да, именно. В какое время завтрак?","fr":"Oui, exactement. Le petit-déjeuner est à quelle heure ?"},{"text":"Я люблю футбол.","fr":"J\'aime le football."},{"text":"Здесь жарко.","fr":"Il fait chaud ici."},{"text":"У меня нет брони.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Завтрак подаётся с семи до десяти.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Можно получить ключ?','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"Можно получить ключ, пожалуйста?","fr":"La clé, s.v.p. ?"},{"text":"Мне не нравится отель.","fr":"Je n\'aime pas l\'hôtel."},{"text":"Хочу пиццу.","fr":"Je veux une pizza."},{"text":"Поезд опаздывает.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Вот ваш ключ. Номер 305, третий этаж.','fr'=>'Voici votre clé. Chambre 305, troisième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-restoran',
            'emoji'        => '🍽️',
            'title'        => 'В ресторане',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Добрый вечер. У вас есть бронь?','fr'=>'Bonsoir. Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'У вас есть бронь?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"Нет, но нас двое.","fr":"Non, mais nous sommes deux."},{"text":"Меня зовут Наташа.","fr":"Je m\'appelle Natacha."},{"text":"Музей закрыт.","fr":"Le musée est fermé."},{"text":"Мне нужно такси.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Что будете заказывать?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'Какое блюдо дня?','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"Какое блюдо дня?","fr":"Quel est le plat du jour ?"},{"text":"Я не ем мясо.","fr":"Je ne mange pas de viande."},{"text":"Хочу минеральную воду.","fr":"Je veux de l\'eau minérale."},{"text":"Счёт, пожалуйста.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'Блюдо дня — борщ с хлебом.','fr'=>'Le plat du jour est le bortsch avec du pain.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'Как платить?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"Возьму борщ.","fr":"Je prends le bortsch."},{"text":"Не люблю свёклу.","fr":"Je n\'aime pas la betterave."},{"text":"Ресторан далеко.","fr":"Le restaurant est loin."},{"text":"У меня аллергия на морепродукты.","fr":"Je suis allergique aux fruits de mer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-taksi',
            'emoji'        => '🚕',
            'title'        => 'В такси',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'В аэропорт, пожалуйста.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'В какой терминал?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'В какой терминал?','fr'=>'Quel terminal ?','options'=>'[{"text":"Терминал два, рейс в Париж.","fr":"Terminal deux, vol pour Paris."},{"text":"Я не знаю где я.","fr":"Je ne sais pas où je suis."},{"text":"Я люблю Москву.","fr":"J\'aime Moscou."},{"text":"Отель рядом.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Примерно двадцать минут с этими пробками.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Сколько будет стоить?','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"Сколько приблизительно?","fr":"Combien approximativement ?"},{"text":"Я не тороплюсь.","fr":"Je ne suis pas pressé."},{"text":"Большие пробки.","fr":"Il y a beaucoup de circulation."},{"text":"Предпочитаю метро.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Около тысячи рублей.','fr'=>'Environ mille roubles.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-apteka',
            'emoji'        => '💊',
            'title'        => 'В аптеке',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'У меня болит голова, есть что-нибудь?','fr'=>'J\'ai mal à la tête, avez-vous quelque chose ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'У вас также есть температура?','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Есть температура?','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"Нет, только голова болит и я устал.","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"Я занимаюсь спортом.","fr":"Je fais du sport."},{"text":"Больница далеко.","fr":"L\'hôpital est loin."},{"text":"Я не говорю по-русски.","fr":"Je ne parle pas russe."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Рекомендую этот ибупрофен. По таблетке каждые восемь часов.','fr'=>'Je vous recommande cet ibuprofène. Un comprimé toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Нужен рецепт?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"Это без рецепта?","fr":"C\'est sans ordonnance ?"},{"text":"Не люблю лекарства.","fr":"Je n\'aime pas les médicaments."},{"text":"Я голоден.","fr":"J\'ai faim."},{"text":"Врач занят.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Нет, без рецепта. Двести рублей.','fr'=>'Non, sans ordonnance. Deux cents roubles.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-kafe',
            'emoji'        => '☕',
            'title'        => 'В кафе',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'Добрый день! Что будете заказывать?','fr'=>'Bonjour ! Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'Что вы хотите выпить?','fr'=>'Que souhaitez-vous boire ?','options'=>'[{"text":"Кофе с молоком и круассан, пожалуйста.","fr":"Un café au lait et un croissant, s.v.p."},{"text":"Я не говорю по-русски.","fr":"Je ne parle pas russe."},{"text":"Где находится вокзал?","fr":"Où se trouve la gare ?"},{"text":"Мне нужно такси.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'Вам сахар?','fr'=>'Du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'С сахаром или без?','fr'=>'Avec ou sans sucre ?','options'=>'[{"text":"С молоком, но без сахара, спасибо.","fr":"Avec du lait mais sans sucre, merci."},{"text":"Я не пью кофе.","fr":"Je ne bois pas de café."},{"text":"Предпочитаю чай.","fr":"Je préfère le thé."},{"text":"Нет, спасибо.","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'С вас двести рублей.','fr'=>'Ça fait deux cents roubles.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-ulica',
            'emoji'        => '🗺️',
            'title'        => 'На улице',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Извините, как пройти к вокзалу?','fr'=>'Excusez-moi, comment aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Идите прямо, потом поверните налево.','fr'=>'Allez tout droit, puis tournez à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Это далеко?','fr'=>'C\'est loin ?','options'=>'[{"text":"Это далеко отсюда?","fr":"Est-ce loin d\'ici ?"},{"text":"Я предпочитаю такси.","fr":"Je préfère le taxi."},{"text":"Я знаю дорогу.","fr":"Je connais le chemin."},{"text":"Я поеду на автобусе.","fr":"Je vais prendre le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Около десяти минут пешком.','fr'=>'Environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Есть ли метро рядом?','fr'=>'Y a-t-il un métro à proximité ?','options'=>'[{"text":"Здесь есть станция метро?","fr":"Y a-t-il une station de métro ici ?"},{"text":"Я не люблю метро.","fr":"Je n\'aime pas le métro."},{"text":"Лучше пойду пешком.","fr":"Je préfère marcher."},{"text":"Такси быстрее.","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Да, станция прямо за углом.','fr'=>'Oui, la station est juste au coin de la rue.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-muzej',
            'emoji'        => '🏛️',
            'title'        => 'В музее',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Добрый день. Сколько стоит билет?','fr'=>'Bonjour. Combien coûte le billet ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Пятьсот рублей для взрослых, двести пятьдесят для студентов.','fr'=>'Cinq cents roubles pour les adultes, deux cent cinquante pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Есть скидка для студентов?','fr'=>'Y a-t-il une réduction étudiants ?','options'=>'[{"text":"Я студент. Есть ли для меня скидка?","fr":"Je suis étudiant. Y a-t-il une réduction pour moi ?"},{"text":"Музей слишком дорогой.","fr":"Le musée est trop cher."},{"text":"Я не люблю музеи.","fr":"Je n\'aime pas les musées."},{"text":"Когда открывается музей?","fr":"Quand le musée ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Да, покажите студенческий билет.','fr'=>'Oui, montrez votre carte étudiante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Можно фотографировать?','fr'=>'Peut-on photographier ?','options'=>'[{"text":"Можно здесь фотографировать?","fr":"Peut-on photographier ici ?"},{"text":"У меня нет фотоаппарата.","fr":"Je n\'ai pas d\'appareil photo."},{"text":"Где выход?","fr":"Où est la sortie ?"},{"text":"Музей скоро закроется.","fr":"Le musée va bientôt fermer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'На первом этаже да, выше нельзя.','fr'=>'Au rez-de-chaussée oui, pas au-dessus.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ru',
            'scenario_key' => 'ru-magazin',
            'emoji'        => '🛒',
            'title'        => 'В магазине',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'Здравствуйте. Я ищу куртку.','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'Какой размер вам нужен?','fr'=>'Quelle taille vous faut-il ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'Какой размер ищете?','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"Средний размер, пожалуйста.","fr":"Taille moyenne, s.v.p."},{"text":"Я не знаю свой размер.","fr":"Je ne connais pas ma taille."},{"text":"Ищу брюки.","fr":"Je cherche un pantalon."},{"text":"Мне не нужна куртка.","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'Эта куртка со скидкой. Вам нравится цвет?','fr'=>'Cette veste est en promotion. Aimez-vous la couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'Можно примерить?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"Можно её примерить?","fr":"Puis-je l\'essayer ?"},{"text":"Мне не нравится цвет.","fr":"Je n\'aime pas la couleur."},{"text":"Слишком дорого.","fr":"C\'est trop cher."},{"text":"Возьму сразу.","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'Конечно! Примерочная в конце справа.','fr'=>'Bien sûr ! La cabine d\'essayage est au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── JA ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-hotel',
            'emoji'        => '🏨',
            'title'        => 'ホテルにて',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'田中という名前で予約しています。','fr'=>'J\'ai une réservation au nom de Tanaka.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'ツインルーム、2泊ですね。','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'お間違いないですか？','fr'=>'C\'est bien ça ?','options'=>'[{"text":"はい、そうです。朝食は何時からですか？","fr":"Oui, c\'est ça. Le petit-déjeuner est à quelle heure ?"},{"text":"サッカーが好きです。","fr":"J\'aime le football."},{"text":"ここは暑いですね。","fr":"Il fait chaud ici."},{"text":"予約していません。","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'朝食は7時から10時まででございます。','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'鍵をいただけますか？','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"鍵をいただけますか？","fr":"La clé, s.v.p. ?"},{"text":"このホテルは好きではありません。","fr":"Je n\'aime pas cet hôtel."},{"text":"ピザが食べたいです。","fr":"Je veux une pizza."},{"text":"電車が遅れています。","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'こちらが鍵です。305号室、3階でございます。','fr'=>'Voici votre clé. Chambre 305, troisième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-resutoran',
            'emoji'        => '🍽️',
            'title'        => 'レストランにて',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'ご予約はございますか？','fr'=>'Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'ご予約はございますか？','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"いいえ、2名です。","fr":"Non, mais nous sommes deux."},{"text":"田中と申します。","fr":"Je m\'appelle Tanaka."},{"text":"美術館は閉まっています。","fr":"Le musée est fermé."},{"text":"タクシーが必要です。","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'ご注文はお決まりですか？','fr'=>'Êtes-vous prêts à commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'本日のおすすめは何ですか？','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"本日のおすすめは何ですか？","fr":"Quel est le plat du jour ?"},{"text":"肉が好きではありません。","fr":"Je n\'aime pas la viande."},{"text":"ミネラルウォーターをください。","fr":"Je voudrais de l\'eau minérale."},{"text":"お会計をお願いします。","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'本日のおすすめはラーメンです。','fr'=>'Le plat du jour est le ramen.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'どうやって払いますか？','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"では、ラーメンをお願いします。","fr":"Alors, je prends le ramen, s.v.p."},{"text":"麺が好きではありません。","fr":"Je n\'aime pas les nouilles."},{"text":"レストランは遠いです。","fr":"Le restaurant est loin."},{"text":"海鮮アレルギーがあります。","fr":"Je suis allergique aux fruits de mer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-takushi',
            'emoji'        => '🚕',
            'title'        => 'タクシーにて',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'空港までお願いします。','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'何ターミナルですか？','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'何ターミナルですか？','fr'=>'Quel terminal ?','options'=>'[{"text":"第二ターミナル、パリ行きのフライトです。","fr":"Terminal deux, vol pour Paris."},{"text":"どこにいるかわかりません。","fr":"Je ne sais pas où je suis."},{"text":"東京が好きです。","fr":"J\'aime Tokyo."},{"text":"ホテルは近くにあります。","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'この渋滞では約20分かかります。','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'いくらかかりますか？','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"だいたいいくらかかりますか？","fr":"Combien approximativement ?"},{"text":"急いでいません。","fr":"Je ne suis pas pressé."},{"text":"渋滞がひどいですね。","fr":"Il y a beaucoup de circulation."},{"text":"地下鉄の方が好きです。","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'だいたい3,000円くらいです。','fr'=>'Environ trois mille yens.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-yakkyoku',
            'emoji'        => '💊',
            'title'        => '薬局にて',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'頭痛に効く薬はありますか？','fr'=>'Avez-vous quelque chose pour le mal de tête ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'熱もありますか？','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'熱もありますか？','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"いいえ、頭痛だけで疲れています。","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"スポーツが好きです。","fr":"J\'aime le sport."},{"text":"病院は遠いです。","fr":"L\'hôpital est loin."},{"text":"日本語が話せません。","fr":"Je ne parle pas japonais."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'このイブプロフェンをお勧めします。8時間ごとに1錠飲んでください。','fr'=>'Je vous recommande cet ibuprofène. Un comprimé toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'処方箋は必要ですか？','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"処方箋なしで買えますか？","fr":"Puis-je l\'acheter sans ordonnance ?"},{"text":"薬が好きではありません。","fr":"Je n\'aime pas les médicaments."},{"text":"おなかがすいています。","fr":"J\'ai faim."},{"text":"医者は忙しいです。","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'はい、処方箋は不要です。500円になります。','fr'=>'Oui, sans ordonnance. C\'est cinq cents yens.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-kafe',
            'emoji'        => '☕',
            'title'        => 'カフェにて',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'いらっしゃいませ！ご注文はお決まりですか？','fr'=>'Bienvenue ! Avez-vous choisi ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'何を飲みますか？','fr'=>'Que souhaitez-vous boire ?','options'=>'[{"text":"カフェラテとクロワッサンをください。","fr":"Un café latte et un croissant, s.v.p."},{"text":"日本語が話せません。","fr":"Je ne parle pas japonais."},{"text":"駅はどこですか？","fr":"Où est la gare ?"},{"text":"タクシーを探しています。","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'お砂糖はいかがですか？','fr'=>'Désirez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'砂糖は必要ですか？','fr'=>'Avez-vous besoin de sucre ?','options'=>'[{"text":"ミルクはお願いしますが、砂糖は結構です。","fr":"Du lait s.v.p., mais pas de sucre."},{"text":"コーヒーが飲めません。","fr":"Je ne peux pas boire de café."},{"text":"お茶が好きです。","fr":"J\'aime le thé."},{"text":"いいえ、けっこうです。","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'六百円になります。','fr'=>'Ça fait six cents yens.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-michi',
            'emoji'        => '🗺️',
            'title'        => '道を尋ねる',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'すみません、駅へはどうやって行けばいいですか？','fr'=>'Excusez-moi, comment puis-je aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'まっすぐ行って、次の角を左に曲がってください。','fr'=>'Allez tout droit et tournez à gauche au prochain coin.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'遠いですか？','fr'=>'C\'est loin ?','options'=>'[{"text":"ここから遠いですか？","fr":"Est-ce loin d\'ici ?"},{"text":"タクシーを使います。","fr":"Je vais prendre un taxi."},{"text":"道がわかります。","fr":"Je connais le chemin."},{"text":"バスに乗ります。","fr":"Je vais prendre le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'歩いて約十分です。','fr'=>'C\'est environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'地下鉄はありますか？','fr'=>'Y a-t-il un métro ?','options'=>'[{"text":"近くに地下鉄の駅はありますか？","fr":"Y a-t-il une station de métro à proximité ?"},{"text":"地下鉄は好きではありません。","fr":"Je n\'aime pas le métro."},{"text":"歩いた方がいいです。","fr":"Il vaut mieux marcher."},{"text":"タクシーの方が速いです。","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'はい、角を曲がったところに駅があります。','fr'=>'Oui, il y a une station au coin de la rue.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-bijutsukan',
            'emoji'        => '🏛️',
            'title'        => '博物館にて',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'こんにちは。入場料はいくらですか？','fr'=>'Bonjour. Combien coûte l\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'大人は千五百円、学生は八百円です。','fr'=>'Mille cinq cents yens pour les adultes, huit cents pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'学生割引はありますか？','fr'=>'Y a-t-il une réduction étudiants ?','options'=>'[{"text":"学生ですが、割引はありますか？","fr":"Je suis étudiant, y a-t-il une réduction ?"},{"text":"博物館は高すぎます。","fr":"Le musée est trop cher."},{"text":"博物館は好きではありません。","fr":"Je n\'aime pas les musées."},{"text":"何時に開きますか？","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'はい、学生証をご提示ください。','fr'=>'Oui, veuillez montrer votre carte étudiante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'写真を撮ってもいいですか？','fr'=>'Puis-je prendre des photos ?','options'=>'[{"text":"館内で写真を撮ってもいいですか？","fr":"Puis-je prendre des photos à l\'intérieur ?"},{"text":"カメラを持っていません。","fr":"Je n\'ai pas d\'appareil photo."},{"text":"出口はどこですか？","fr":"Où est la sortie ?"},{"text":"博物館はもうすぐ閉まります。","fr":"Le musée va bientôt fermer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'一階はよいですが、二階はお断りしています。','fr'=>'Au rez-de-chaussée oui, au deuxième étage non.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ja',
            'scenario_key' => 'ja-kaimono',
            'emoji'        => '🛒',
            'title'        => '買い物にて',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'こんにちは。ジャケットを探しているのですが。','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'サイズはいくつですか？','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'何サイズをお探しですか？','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"Mサイズをお願いします。","fr":"Taille M, s.v.p."},{"text":"サイズがわかりません。","fr":"Je ne connais pas ma taille."},{"text":"ズボンを探しています。","fr":"Je cherche un pantalon."},{"text":"ジャケットは要りません。","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'これはセール品です。この色はいかがですか？','fr'=>'Celui-ci est en promotion. Que pensez-vous de cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'試着できますか？','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"試着してもよいですか？","fr":"Puis-je l\'essayer ?"},{"text":"この色は好きではありません。","fr":"Je n\'aime pas cette couleur."},{"text":"高すぎます。","fr":"C\'est trop cher."},{"text":"すぐに買います。","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'もちろんです！試着室は奥の右手です。','fr'=>'Bien sûr ! Les cabines d\'essayage sont au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── KO ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-hotel',
            'emoji'        => '🏨',
            'title'        => '호텔에서',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'김이라는 이름으로 예약했습니다.','fr'=>'J\'ai une réservation au nom de Kim.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'2인실 2박이시죠.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'맞으신가요?','fr'=>'C\'est correct ?','options'=>'[{"text":"네, 맞아요. 아침 식사는 몇 시에 시작하나요?","fr":"Oui, c\'est ça. Le petit-déjeuner est à quelle heure ?"},{"text":"저는 축구를 좋아해요.","fr":"J\'aime le football."},{"text":"여기 더워요.","fr":"Il fait chaud ici."},{"text":"예약이 없어요.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'아침 식사는 7시부터 10시까지 제공됩니다.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'열쇠를 주시겠어요?','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"열쇠를 주시겠어요?","fr":"La clé, s.v.p. ?"},{"text":"이 호텔이 마음에 들지 않아요.","fr":"Je n\'aime pas cet hôtel."},{"text":"피자를 먹고 싶어요.","fr":"Je veux une pizza."},{"text":"기차가 늦었어요.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'여기 열쇠 드립니다. 305호실, 3층이에요.','fr'=>'Voici votre clé. Chambre 305, troisième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-restaurant',
            'emoji'        => '🍽️',
            'title'        => '식당에서',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'예약하셨나요?','fr'=>'Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'예약하셨나요?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"아니요, 두 명이에요.","fr":"Non, mais nous sommes deux."},{"text":"제 이름은 미나예요.","fr":"Je m\'appelle Mina."},{"text":"박물관이 문을 닫았어요.","fr":"Le musée est fermé."},{"text":"택시가 필요해요.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'무엇을 주문하시겠어요?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'오늘의 메뉴는 뭐예요?','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"오늘의 메뉴는 뭐예요?","fr":"Quel est le plat du jour ?"},{"text":"저는 고기를 안 먹어요.","fr":"Je ne mange pas de viande."},{"text":"생수 주세요.","fr":"Je voudrais de l\'eau minérale."},{"text":"계산서 주세요.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'오늘의 메뉴는 비빔밥이에요.','fr'=>'Le plat du jour est le bibimbap.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'어떻게 계산하나요?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"그럼 비빔밥으로 주세요.","fr":"Je prends le bibimbap, s.v.p."},{"text":"쌀을 좋아하지 않아요.","fr":"Je n\'aime pas le riz."},{"text":"식당이 멀어요.","fr":"Le restaurant est loin."},{"text":"해산물 알레르기가 있어요.","fr":"Je suis allergique aux fruits de mer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-taxi',
            'emoji'        => '🚕',
            'title'        => '택시에서',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'공항으로 가주세요.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'몇 번 터미널이에요?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'몇 번 터미널이에요?','fr'=>'Quel terminal ?','options'=>'[{"text":"2터미널이요. 파리행 비행기예요.","fr":"Terminal deux, vol pour Paris."},{"text":"어디에 있는지 모르겠어요.","fr":"Je ne sais pas où je suis."},{"text":"서울을 좋아해요.","fr":"J\'aime Séoul."},{"text":"호텔이 가까워요.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'이 교통 상황으로는 약 20분 걸려요.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'얼마나 나올까요?','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"대략 얼마 정도 나올까요?","fr":"Combien approximativement ?"},{"text":"급하지 않아요.","fr":"Je ne suis pas pressé."},{"text":"교통이 많이 막혀요.","fr":"Il y a beaucoup de circulation."},{"text":"지하철을 더 좋아해요.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'약 20,000원 정도예요.','fr'=>'Environ vingt mille wons.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-yakguk',
            'emoji'        => '💊',
            'title'        => '약국에서',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'두통에 좋은 약 있나요?','fr'=>'Avez-vous quelque chose pour le mal de tête ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'열도 있으신가요?','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'열도 있으신가요?','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"아니요, 두통만 있고 피곤해요.","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"저는 운동을 좋아해요.","fr":"J\'aime le sport."},{"text":"병원이 멀어요.","fr":"L\'hôpital est loin."},{"text":"한국어를 못 해요.","fr":"Je ne parle pas coréen."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'이 이부프로펜을 추천해요. 8시간마다 한 알 드세요.','fr'=>'Je vous recommande cet ibuprofène. Un comprimé toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'처방전이 필요한가요?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"처방전 없이 살 수 있나요?","fr":"Puis-je l\'acheter sans ordonnance ?"},{"text":"약을 좋아하지 않아요.","fr":"Je n\'aime pas les médicaments."},{"text":"배가 고파요.","fr":"J\'ai faim."},{"text":"의사가 바빠요.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'네, 처방전 없어도 돼요. 3,000원입니다.','fr'=>'Oui, sans ordonnance. C\'est trois mille wons.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-cafe',
            'emoji'        => '☕',
            'title'        => '카페에서',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'어서 오세요! 주문하시겠어요?','fr'=>'Bienvenue ! Souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'무엇을 드시겠어요?','fr'=>'Que souhaitez-vous ?','options'=>'[{"text":"카페라테 한 잔과 크루아상 주세요.","fr":"Un café latte et un croissant, s.v.p."},{"text":"한국어를 못해요.","fr":"Je ne parle pas coréen."},{"text":"역이 어디에 있어요?","fr":"Où est la gare ?"},{"text":"택시를 찾고 있어요.","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'설탕 드릴까요?','fr'=>'Voulez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'설탕 필요하세요?','fr'=>'Avez-vous besoin de sucre ?','options'=>'[{"text":"우유는 넣어주세요. 설탕은 괜찮아요.","fr":"Du lait s.v.p., mais pas de sucre."},{"text":"커피를 안 마셔요.","fr":"Je ne bois pas de café."},{"text":"차를 좋아해요.","fr":"J\'aime le thé."},{"text":"아니요, 괜찮아요.","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'오천 원입니다.','fr'=>'Ça fait cinq mille wons.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-gil',
            'emoji'        => '🗺️',
            'title'        => '길 묻기',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'실례합니다, 역에 어떻게 가나요?','fr'=>'Excusez-moi, comment puis-je aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'직진하다가 왼쪽으로 꺾으세요.','fr'=>'Allez tout droit puis tournez à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'멀어요?','fr'=>'C\'est loin ?','options'=>'[{"text":"여기서 멀어요?","fr":"Est-ce loin d\'ici ?"},{"text":"택시를 탈게요.","fr":"Je vais prendre un taxi."},{"text":"길을 알아요.","fr":"Je connais le chemin."},{"text":"버스를 탈게요.","fr":"Je vais prendre le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'걸어서 약 십 분 걸려요.','fr'=>'C\'est environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'지하철이 있나요?','fr'=>'Y a-t-il un métro ?','options'=>'[{"text":"근처에 지하철역이 있나요?","fr":"Y a-t-il une station de métro à proximité ?"},{"text":"지하철을 안 좋아해요.","fr":"Je n\'aime pas le métro."},{"text":"걷는 게 좋아요.","fr":"Je préfère marcher."},{"text":"택시가 더 빨라요.","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'네, 모퉁이 바로 지나서 역이 있어요.','fr'=>'Oui, la station est juste après le coin de la rue.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-museum',
            'emoji'        => '🏛️',
            'title'        => '박물관에서',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'안녕하세요. 입장료가 얼마예요?','fr'=>'Bonjour. Combien coûte l\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'어른은 만 원, 학생은 오천 원이에요.','fr'=>'Dix mille wons pour les adultes, cinq mille pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'학생 할인이 있나요?','fr'=>'Y a-t-il une réduction étudiants ?','options'=>'[{"text":"학생인데 할인받을 수 있나요?","fr":"Je suis étudiant, puis-je avoir une réduction ?"},{"text":"너무 비싸요.","fr":"C\'est trop cher."},{"text":"박물관을 안 좋아해요.","fr":"Je n\'aime pas les musées."},{"text":"몇 시에 열어요?","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'네, 학생증을 보여 주세요.','fr'=>'Oui, montrez votre carte étudiante s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'사진을 찍어도 돼요?','fr'=>'Puis-je prendre des photos ?','options'=>'[{"text":"안에서 사진 찍어도 되나요?","fr":"Puis-je prendre des photos à l\'intérieur ?"},{"text":"카메라가 없어요.","fr":"Je n\'ai pas d\'appareil photo."},{"text":"출구가 어디예요?","fr":"Où est la sortie ?"},{"text":"박물관이 곧 닫아요.","fr":"Le musée ferme bientôt."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'1층은 되는데 윗층은 안 돼요.','fr'=>'Au rez-de-chaussée oui, pas aux étages supérieurs.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ko',
            'scenario_key' => 'ko-shopping',
            'emoji'        => '🛒',
            'title'        => '쇼핑에서',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'안녕하세요. 자켓을 찾고 있어요.','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'어떤 사이즈 찾으세요?','fr'=>'Quelle taille cherchez-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'사이즈가 어떻게 되세요?','fr'=>'Quelle taille faites-vous ?','options'=>'[{"text":"M 사이즈 주세요.","fr":"Taille M, s.v.p."},{"text":"사이즈를 몰라요.","fr":"Je ne connais pas ma taille."},{"text":"바지를 찾고 있어요.","fr":"Je cherche un pantalon."},{"text":"자켓이 필요 없어요.","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'이게 세일 중이에요. 이 색 어때요?','fr'=>'Celle-ci est en promotion. Que pensez-vous de cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'입어봐도 될까요?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"입어봐도 될까요?","fr":"Puis-je l\'essayer ?"},{"text":"색이 마음에 안 들어요.","fr":"Je n\'aime pas la couleur."},{"text":"너무 비싸요.","fr":"C\'est trop cher."},{"text":"바로 살게요.","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'물론이죠! 피팅룸은 안쪽 오른편에 있어요.','fr'=>'Bien sûr ! Les cabines d\'essayage sont au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── ZH ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-hotel',
            'emoji'        => '🏨',
            'title'        => '在酒店',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'我用王先生的名字预订了房间。','fr'=>'J\'ai une réservation au nom de M. Wang.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'双人间，住两晚，是吗？','fr'=>'Chambre double pour deux nuits ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'是这样吗？','fr'=>'C\'est bien ça ?','options'=>'[{"text":"是的，就是这样。早餐是几点开始？","fr":"Oui, c\'est ça. Le petit-déjeuner est à quelle heure ?"},{"text":"我喜欢足球。","fr":"J\'aime le football."},{"text":"这里很热。","fr":"Il fait chaud ici."},{"text":"我没有预订。","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'早餐从七点到十点提供。','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'请给我房卡。','fr'=>'La clé, s.v.p. ?','options'=>'[{"text":"请给我房卡，好吗？","fr":"La clé, s.v.p. ?"},{"text":"我不喜欢这家酒店。","fr":"Je n\'aime pas cet hôtel."},{"text":"我想吃披萨。","fr":"Je veux une pizza."},{"text":"火车晚点了。","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'这是您的房卡。305号房，三楼。','fr'=>'Voici votre clé. Chambre 305, troisième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-restaurant',
            'emoji'        => '🍽️',
            'title'        => '在餐厅',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'请问有预订吗？','fr'=>'Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'请问有预订吗？','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"没有，但我们有两个人。","fr":"Non, mais nous sommes deux."},{"text":"我叫小红。","fr":"Je m\'appelle Xiaohong."},{"text":"博物馆关门了。","fr":"Le musée est fermé."},{"text":"我需要出租车。","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'您想点什么？','fr'=>'Que souhaitez-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'今天的特色菜是什么？','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"今天的特色菜是什么？","fr":"Quel est le plat du jour ?"},{"text":"我不吃肉。","fr":"Je ne mange pas de viande."},{"text":"我要矿泉水。","fr":"Je voudrais de l\'eau minérale."},{"text":"结账，谢谢。","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'今日特色菜是北京烤鸭。','fr'=>'Le plat du jour est le canard laqué de Pékin.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'怎么付款？','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"好的，我要北京烤鸭。","fr":"Bien, je prends le canard laqué."},{"text":"我不喜欢鸭肉。","fr":"Je n\'aime pas le canard."},{"text":"餐厅很远。","fr":"Le restaurant est loin."},{"text":"我对海鲜过敏。","fr":"Je suis allergique aux fruits de mer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-taxi',
            'emoji'        => '🚕',
            'title'        => '坐出租车',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'去机场，谢谢。','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'哪个航站楼？','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'哪个航站楼？','fr'=>'Quel terminal ?','options'=>'[{"text":"2号航站楼，去巴黎的航班。","fr":"Terminal deux, vol pour Paris."},{"text":"我不知道我在哪里。","fr":"Je ne sais pas où je suis."},{"text":"我喜欢北京。","fr":"J\'aime Pékin."},{"text":"酒店在附近。","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'这个交通大概要二十分钟。','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'大概要多少钱？','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"大概要多少钱？","fr":"Combien approximativement ?"},{"text":"我不着急。","fr":"Je ne suis pas pressé."},{"text":"堵车很严重。","fr":"Il y a beaucoup de circulation."},{"text":"我更喜欢地铁。","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'大概一百五十元左右。','fr'=>'Environ cent cinquante yuans.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-yaodian',
            'emoji'        => '💊',
            'title'        => '在药店',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'我头疼，有什么药吗？','fr'=>'J\'ai mal à la tête, avez-vous quelque chose ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'您也发烧吗？','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'您发烧吗？','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"不，只是头疼，而且我很累。","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"我喜欢运动。","fr":"J\'aime le sport."},{"text":"医院很远。","fr":"L\'hôpital est loin."},{"text":"我不会说中文。","fr":"Je ne parle pas chinois."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'推荐您用这个布洛芬，每八小时吃一片。','fr'=>'Je vous recommande cet ibuprofène. Un comprimé toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'需要处方吗？','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"不需要处方就能买吗？","fr":"Puis-je l\'acheter sans ordonnance ?"},{"text":"我不喜欢吃药。","fr":"Je n\'aime pas les médicaments."},{"text":"我饿了。","fr":"J\'ai faim."},{"text":"医生很忙。","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'不需要处方，二十元。','fr'=>'Sans ordonnance. C\'est vingt yuans.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-kafei',
            'emoji'        => '☕',
            'title'        => '在咖啡馆',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'欢迎光临！请问您要点什么？','fr'=>'Bienvenue ! Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'您想喝什么？','fr'=>'Que souhaitez-vous boire ?','options'=>'[{"text":"请给我一杯拿铁和一个可颂面包。","fr":"Un café latte et un croissant, s.v.p."},{"text":"我不会说中文。","fr":"Je ne parle pas chinois."},{"text":"火车站在哪里？","fr":"Où est la gare ?"},{"text":"我在找出租车。","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'需要加糖吗？','fr'=>'Voulez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'要糖吗？','fr'=>'Voulez-vous du sucre ?','options'=>'[{"text":"加牛奶，不加糖，谢谢。","fr":"Avec du lait mais sans sucre, merci."},{"text":"我不喝咖啡。","fr":"Je ne bois pas de café."},{"text":"我喜欢喝茶。","fr":"J\'aime le thé."},{"text":"不用，谢谢。","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'一共三十元。','fr'=>'Ça fait trente yuans.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-wenlu',
            'emoji'        => '🗺️',
            'title'        => '问路',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'打扰一下，请问火车站怎么走？','fr'=>'Excusez-moi, comment puis-je aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'一直走，然后向左转。','fr'=>'Allez tout droit, puis tournez à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'远吗？','fr'=>'C\'est loin ?','options'=>'[{"text":"从这里远吗？","fr":"Est-ce loin d\'ici ?"},{"text":"我打算坐出租车。","fr":"Je vais prendre un taxi."},{"text":"我知道路。","fr":"Je connais le chemin."},{"text":"我坐公共汽车。","fr":"Je vais prendre le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'步行大约十分钟。','fr'=>'Environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'有地铁吗？','fr'=>'Y a-t-il un métro ?','options'=>'[{"text":"附近有地铁站吗？","fr":"Y a-t-il une station de métro à proximité ?"},{"text":"我不喜欢地铁。","fr":"Je n\'aime pas le métro."},{"text":"我更喜欢走路。","fr":"Je préfère marcher."},{"text":"出租车更快。","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'有，地铁站就在拐角处。','fr'=>'Oui, la station de métro est juste au coin de la rue.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-bowuguan',
            'emoji'        => '🏛️',
            'title'        => '在博物馆',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'您好。请问门票多少钱？','fr'=>'Bonjour. Combien coûte le billet ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'成人票八十元，学生票四十元。','fr'=>'Quatre-vingts yuans pour les adultes, quarante pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'有学生折扣吗？','fr'=>'Y a-t-il une réduction étudiants ?','options'=>'[{"text":"我是学生，有折扣吗？","fr":"Je suis étudiant, y a-t-il une réduction ?"},{"text":"博物馆太贵了。","fr":"Le musée est trop cher."},{"text":"我不喜欢博物馆。","fr":"Je n\'aime pas les musées."},{"text":"几点开门？","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'有的，请出示您的学生证。','fr'=>'Oui, veuillez présenter votre carte étudiante.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'可以拍照吗？','fr'=>'Peut-on prendre des photos ?','options'=>'[{"text":"馆内可以拍照吗？","fr":"Peut-on prendre des photos à l\'intérieur ?"},{"text":"我没有相机。","fr":"Je n\'ai pas d\'appareil photo."},{"text":"出口在哪里？","fr":"Où est la sortie ?"},{"text":"博物馆快关门了。","fr":"Le musée va bientôt fermer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'一楼可以，二楼不可以。','fr'=>'Au rez-de-chaussée oui, au deuxième étage non.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'zh',
            'scenario_key' => 'zh-gouwu',
            'emoji'        => '🛒',
            'title'        => '购物',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'您好，我在找一件夹克。','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'您穿多大号？','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'您需要什么尺码？','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"中号，谢谢。","fr":"Taille moyenne, merci."},{"text":"我不知道我的尺码。","fr":"Je ne connais pas ma taille."},{"text":"我在找裤子。","fr":"Je cherche un pantalon."},{"text":"我不需要夹克。","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'这件正在打折。您喜欢这个颜色吗？','fr'=>'Celle-ci est en promotion. Aimez-vous cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'可以试穿吗？','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"我可以试穿吗？","fr":"Puis-je l\'essayer ?"},{"text":"我不喜欢这个颜色。","fr":"Je n\'aime pas cette couleur."},{"text":"太贵了。","fr":"C\'est trop cher."},{"text":"我直接买了。","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'当然！试衣间在里面右边。','fr'=>'Bien sûr ! Les cabines d\'essayage sont au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── AR ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-hotel',
            'emoji'        => '🏨',
            'title'        => 'في الفندق',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'لدي حجز باسم أحمد.','fr'=>'J\'ai une réservation au nom d\'Ahmad.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'غرفة مزدوجة لليلتين.','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'هل هذا صحيح؟','fr'=>'C\'est correct ?','options'=>'[{"text":"نعم، بالضبط. في أي وقت يكون الإفطار؟","fr":"Oui, exactement. Le petit-déjeuner est à quelle heure ?"},{"text":"أنا أحب كرة القدم.","fr":"J\'aime le football."},{"text":"الجو حار هنا.","fr":"Il fait chaud ici."},{"text":"ليس لدي حجز.","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'الإفطار يُقدَّم من الساعة السابعة حتى العاشرة.','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'هل يمكنني الحصول على المفتاح؟','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"هل يمكنني الحصول على المفتاح من فضلك؟","fr":"La clé, s.v.p. ?"},{"text":"لا أحب هذا الفندق.","fr":"Je n\'aime pas cet hôtel."},{"text":"أريد بيتزا.","fr":"Je veux une pizza."},{"text":"القطار متأخر.","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'تفضل مفتاحك. الغرفة 205، الطابق الثاني.','fr'=>'Voici votre clé. Chambre 205, deuxième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-matam',
            'emoji'        => '🍽️',
            'title'        => 'في المطعم',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'هل لديكم حجز؟','fr'=>'Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'هل لديكم حجز؟','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"لا، لكننا شخصان.","fr":"Non, mais nous sommes deux."},{"text":"اسمي فاطمة.","fr":"Je m\'appelle Fatima."},{"text":"المتحف مغلق.","fr":"Le musée est fermé."},{"text":"أحتاج سيارة أجرة.","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'ماذا تريدون أن تطلبوا؟','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'ما هو طبق اليوم؟','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"ما هو طبق اليوم؟","fr":"Quel est le plat du jour ?"},{"text":"لا أحب اللحم.","fr":"Je n\'aime pas la viande."},{"text":"أريد ماء معدنياً.","fr":"Je veux de l\'eau minérale."},{"text":"الحساب من فضلك.","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'طبق اليوم هو كبسة الدجاج.','fr'=>'Le plat du jour est le kabsa au poulet.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'كيف يتم الدفع؟','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"سآخذ الكبسة.","fr":"Je prends le kabsa."},{"text":"لا أحب الأرز.","fr":"Je n\'aime pas le riz."},{"text":"المطعم بعيد.","fr":"Le restaurant est loin."},{"text":"لدي حساسية من المأكولات البحرية.","fr":"Je suis allergique aux fruits de mer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-taxi',
            'emoji'        => '🚕',
            'title'        => 'في سيارة الأجرة',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'إلى المطار من فضلك.','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'أي صالة؟','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'أي صالة؟','fr'=>'Quel terminal ?','options'=>'[{"text":"الصالة الثانية، رحلة إلى باريس.","fr":"Terminal deux, vol pour Paris."},{"text":"لا أعرف أين أنا.","fr":"Je ne sais pas où je suis."},{"text":"أحب الرياض.","fr":"J\'aime Riyad."},{"text":"الفندق قريب.","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'حوالي عشرين دقيقة مع هذه الزحمة.','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'كم سيكلف؟','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"كم سيكون تقريباً؟","fr":"Combien approximativement ?"},{"text":"أنا لست مستعجلاً.","fr":"Je ne suis pas pressé."},{"text":"يوجد ازدحام كبير.","fr":"Il y a beaucoup de circulation."},{"text":"أفضل المترو.","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'حوالي خمسين ريالاً.','fr'=>'Environ cinquante riyals.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-saydaliya',
            'emoji'        => '💊',
            'title'        => 'في الصيدلية',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'أعاني من صداع، هل عندكم شيء؟','fr'=>'J\'ai mal à la tête, avez-vous quelque chose ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'هل عندك حمى أيضاً؟','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'هل عندك حمى؟','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"لا، فقط صداع وأنا متعب.","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"أنا أمارس الرياضة.","fr":"Je fais du sport."},{"text":"المستشفى بعيد.","fr":"L\'hôpital est loin."},{"text":"لا أتكلم العربية.","fr":"Je ne parle pas arabe."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'أنصحك بهذا الإيبوبروفين. حبة واحدة كل ثماني ساعات.','fr'=>'Je vous recommande cet ibuprofène. Un comprimé toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'هل يحتاج وصفة طبية؟','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"هل يُباع بدون وصفة طبية؟","fr":"Est-ce vendu sans ordonnance ?"},{"text":"لا أحب الأدوية.","fr":"Je n\'aime pas les médicaments."},{"text":"أنا جائع.","fr":"J\'ai faim."},{"text":"الطبيب مشغول.","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'لا، بدون وصفة. عشرون ريالاً.','fr'=>'Non, sans ordonnance. Vingt riyals.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-maqha',
            'emoji'        => '☕',
            'title'        => 'في المقهى',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'أهلاً وسهلاً! ماذا تريد أن تطلب؟','fr'=>'Bienvenue ! Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'ماذا تريد أن تشرب؟','fr'=>'Que souhaitez-vous boire ?','options'=>'[{"text":"قهوة بالحليب وكرواسان من فضلك.","fr":"Un café au lait et un croissant, s.v.p."},{"text":"لا أتحدث العربية.","fr":"Je ne parle pas arabe."},{"text":"أين المحطة؟","fr":"Où est la gare ?"},{"text":"أبحث عن سيارة أجرة.","fr":"Je cherche un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'هل تريد سكراً؟','fr'=>'Voulez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'مع أو بدون سكر؟','fr'=>'Avec ou sans sucre ?','options'=>'[{"text":"مع الحليب بدون سكر، شكراً.","fr":"Avec du lait mais sans sucre, merci."},{"text":"لا أشرب القهوة.","fr":"Je ne bois pas de café."},{"text":"أفضّل الشاي.","fr":"Je préfère le thé."},{"text":"لا، شكراً.","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'المجموع خمسة وعشرون درهماً.','fr'=>'Le total est vingt-cinq dirhams.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-ittijahat',
            'emoji'        => '🗺️',
            'title'        => 'طلب الاتجاهات',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'عفواً، كيف أصل إلى المحطة؟','fr'=>'Excusez-moi, comment puis-je aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'اذهب مباشرة ثم انعطف يساراً.','fr'=>'Allez tout droit puis tournez à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'هل هي بعيدة؟','fr'=>'C\'est loin ?','options'=>'[{"text":"هل هي بعيدة من هنا؟","fr":"Est-ce loin d\'ici ?"},{"text":"أفضّل سيارة الأجرة.","fr":"Je préfère le taxi."},{"text":"أعرف الطريق.","fr":"Je connais le chemin."},{"text":"سأركب الحافلة.","fr":"Je vais prendre le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'حوالي عشر دقائق سيراً على الأقدام.','fr'=>'Environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'هل هناك مترو؟','fr'=>'Y a-t-il un métro ?','options'=>'[{"text":"هل هناك محطة مترو قريبة؟","fr":"Y a-t-il une station de métro à proximité ?"},{"text":"لا أحب المترو.","fr":"Je n\'aime pas le métro."},{"text":"أفضّل المشي.","fr":"Je préfère marcher."},{"text":"سيارة الأجرة أسرع.","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'نعم، المحطة على بعد خطوات من هنا.','fr'=>'Oui, la station est à quelques pas d\'ici.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-mathaf',
            'emoji'        => '🏛️',
            'title'        => 'في المتحف',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'مرحباً. كم تكلف تذكرة الدخول؟','fr'=>'Bonjour. Combien coûte le billet d\'entrée ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'خمسون درهماً للبالغين، وعشرون للطلاب.','fr'=>'Cinquante dirhams pour les adultes, vingt pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'هل هناك خصم للطلاب؟','fr'=>'Y a-t-il une réduction étudiants ?','options'=>'[{"text":"أنا طالب، هل يوجد خصم لي؟","fr":"Je suis étudiant, y a-t-il une réduction pour moi ?"},{"text":"المتحف غالٍ جداً.","fr":"Le musée est trop cher."},{"text":"لا أحب المتاحف.","fr":"Je n\'aime pas les musées."},{"text":"متى يفتح المتحف؟","fr":"Quand le musée ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'نعم، أرني بطاقة الطالب من فضلك.','fr'=>'Oui, montrez-moi votre carte étudiante s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'هل يمكنني التصوير؟','fr'=>'Puis-je prendre des photos ?','options'=>'[{"text":"هل يمكنني التصوير داخل المتحف؟","fr":"Puis-je prendre des photos à l\'intérieur du musée ?"},{"text":"ليس معي كاميرا.","fr":"Je n\'ai pas d\'appareil photo."},{"text":"أين المخرج؟","fr":"Où est la sortie ?"},{"text":"المتحف سيغلق قريباً.","fr":"Le musée va bientôt fermer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'في الطابق الأرضي نعم، في الطابق العلوي لا.','fr'=>'Au rez-de-chaussée oui, à l\'étage supérieur non.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'ar',
            'scenario_key' => 'ar-tasawwuq',
            'emoji'        => '🛒',
            'title'        => 'في المتجر',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'مرحباً. أبحث عن جاكيت.','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'ما هو مقاسك؟','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'ما المقاس الذي تحتاجه؟','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"مقاس وسط من فضلك.","fr":"Taille moyenne, s.v.p."},{"text":"لا أعرف مقاسي.","fr":"Je ne connais pas ma taille."},{"text":"أبحث عن بنطال.","fr":"Je cherche un pantalon."},{"text":"لا أحتاج جاكيت.","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'هذه بسعر مخفّض. هل يعجبك هذا اللون؟','fr'=>'Celle-ci est en promotion. Aimez-vous cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'هل يمكنني تجربتها؟','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"هل يمكنني تجربتها قبل الشراء؟","fr":"Puis-je l\'essayer avant d\'acheter ?"},{"text":"لا يعجبني هذا اللون.","fr":"Je n\'aime pas cette couleur."},{"text":"هي غالية جداً.","fr":"C\'est trop cher."},{"text":"سأشتريها فوراً.","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'بالطبع! غرفة القياس في آخر الممر على اليمين.','fr'=>'Bien sûr ! La cabine d\'essayage est au fond du couloir à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        // ── HI ──
        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-hotel',
            'emoji'        => '🏨',
            'title'        => 'होटल में',
            'title_fr'     => 'À l\'hôtel',
            'sort_order'   => 0,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'शर्मा के नाम पर बुकिंग है।','fr'=>'J\'ai une réservation au nom de Sharma.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'दो रातों के लिए डबल रूम।','fr'=>'Chambre double pour deux nuits.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'क्या यह सही है?','fr'=>'C\'est correct ?','options'=>'[{"text":"हाँ, बिल्कुल। नाश्ता किस समय होता है?","fr":"Oui, exactement. Le petit-déjeuner est à quelle heure ?"},{"text":"मुझे फुटबॉल पसंद है।","fr":"J\'aime le football."},{"text":"यहाँ गर्मी है।","fr":"Il fait chaud ici."},{"text":"मेरी कोई बुकिंग नहीं है।","fr":"Je n\'ai pas de réservation."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'नाश्ता सात से दस बजे तक परोसा जाता है।','fr'=>'Le petit-déjeuner est de sept à dix heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'चाबी मिल सकती है?','fr'=>'Puis-je avoir la clé ?','options'=>'[{"text":"क्या मुझे चाबी मिल सकती है, कृपया?","fr":"La clé, s.v.p. ?"},{"text":"मुझे यह होटल पसंद नहीं है।","fr":"Je n\'aime pas cet hôtel."},{"text":"मुझे पिज्जा चाहिए।","fr":"Je veux une pizza."},{"text":"ट्रेन देरी से है।","fr":"Le train est en retard."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'यह रही आपकी चाबी। कमरा 205, दूसरी मंजिल।','fr'=>'Voici votre clé. Chambre 205, deuxième étage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-restaurant',
            'emoji'        => '🍽️',
            'title'        => 'रेस्टोरेंट में',
            'title_fr'     => 'Au restaurant',
            'sort_order'   => 1,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'क्या आपकी बुकिंग है?','fr'=>'Avez-vous une réservation ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'क्या आपकी बुकिंग है?','fr'=>'Avez-vous une réservation ?','options'=>'[{"text":"नहीं, लेकिन हम दो लोग हैं।","fr":"Non, mais nous sommes deux."},{"text":"मेरा नाम प्रिया है।","fr":"Je m\'appelle Priya."},{"text":"संग्रहालय बंद है।","fr":"Le musée est fermé."},{"text":"मुझे टैक्सी चाहिए।","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'आप क्या ऑर्डर करना चाहेंगे?','fr'=>'Que souhaitez-vous commander ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'आज का विशेष क्या है?','fr'=>'Quel est le plat du jour ?','options'=>'[{"text":"आज का विशेष क्या है?","fr":"Quel est le plat du jour ?"},{"text":"मुझे मांस पसंद नहीं है।","fr":"Je n\'aime pas la viande."},{"text":"मुझे मिनरल वाटर चाहिए।","fr":"Je veux de l\'eau minérale."},{"text":"बिल, कृपया।","fr":"L\'addition, s.v.p."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'आज का विशेष दाल मखनी और नान है।','fr'=>'Le plat du jour est le dal makhani avec du naan.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'choice','speaker'=>null,'text'=>'भुगतान कैसे होता है?','fr'=>'Comment paye-t-on ?','options'=>'[{"text":"बढ़िया, मैं दाल मखनी लूँगा।","fr":"Parfait, je prends le dal makhani."},{"text":"मुझे दाल पसंद नहीं है।","fr":"Je n\'aime pas les lentilles."},{"text":"रेस्टोरेंट दूर है।","fr":"Le restaurant est loin."},{"text":"मुझे मूंगफली से एलर्जी है।","fr":"Je suis allergique aux arachides."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-taxi',
            'emoji'        => '🚕',
            'title'        => 'टैक्सी में',
            'title_fr'     => 'En taxi',
            'sort_order'   => 2,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'एयरपोर्ट चलिए, कृपया।','fr'=>'À l\'aéroport, s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'कौन सा टर्मिनल?','fr'=>'Quel terminal ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'कौन सा टर्मिनल?','fr'=>'Quel terminal ?','options'=>'[{"text":"टर्मिनल दो, पेरिस की फ्लाइट है।","fr":"Terminal deux, vol pour Paris."},{"text":"मुझे नहीं पता मैं कहाँ हूँ।","fr":"Je ne sais pas où je suis."},{"text":"मुझे दिल्ली पसंद है।","fr":"J\'aime Delhi."},{"text":"होटल पास में है।","fr":"L\'hôtel est près d\'ici."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'इस ट्रैफिक में करीब बीस मिनट लगेंगे।','fr'=>'Environ vingt minutes avec ce trafic.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'कितना किराया होगा?','fr'=>'Combien ça va coûter ?','options'=>'[{"text":"लगभग कितना किराया होगा?","fr":"Combien approximativement ?"},{"text":"मुझे जल्दी नहीं है।","fr":"Je ne suis pas pressé."},{"text":"बहुत ट्रैफिक है।","fr":"Il y a beaucoup de circulation."},{"text":"मैं मेट्रो पसंद करता हूँ।","fr":"Je préfère le métro."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'करीब तीन सौ रुपये होंगे।','fr'=>'Environ trois cents roupies.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-dawakhana',
            'emoji'        => '💊',
            'title'        => 'दवाखाने में',
            'title_fr'     => 'À la pharmacie',
            'sort_order'   => 3,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'सिर में दर्द है, कुछ है क्या?','fr'=>'J\'ai mal à la tête, avez-vous quelque chose ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'क्या बुखार भी है?','fr'=>'Avez-vous aussi de la fièvre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'क्या बुखार भी है?','fr'=>'Avez-vous de la fièvre ?','options'=>'[{"text":"नहीं, सिर्फ सिरदर्द है और थका हुआ हूँ।","fr":"Non, juste mal à la tête et je suis fatigué."},{"text":"मुझे खेल पसंद है।","fr":"J\'aime le sport."},{"text":"अस्पताल दूर है।","fr":"L\'hôpital est loin."},{"text":"मैं हिंदी नहीं बोलता।","fr":"Je ne parle pas hindi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'यह इबुप्रोफेन लीजिए। हर आठ घंटे में एक गोली लें।','fr'=>'Je vous recommande cet ibuprofène. Un comprimé toutes les huit heures.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'क्या पर्चे की जरूरत है?','fr'=>'Faut-il une ordonnance ?','options'=>'[{"text":"क्या यह बिना पर्चे के मिलती है?","fr":"Puis-je l\'acheter sans ordonnance ?"},{"text":"मुझे दवाएँ पसंद नहीं हैं।","fr":"Je n\'aime pas les médicaments."},{"text":"मुझे भूख लगी है।","fr":"J\'ai faim."},{"text":"डॉक्टर व्यस्त हैं।","fr":"Le médecin est occupé."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'नहीं, बिना पर्चे के मिलती है। पचास रुपये।','fr'=>'Non, sans ordonnance. Cinquante roupies.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-cafe',
            'emoji'        => '☕',
            'title'        => 'कैफे में',
            'title_fr'     => 'Au café',
            'sort_order'   => 4,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'A','text'=>'नमस्ते! आप क्या लेंगे?','fr'=>'Bonjour ! Que prendrez-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'choice','speaker'=>null,'text'=>'आप क्या पीना चाहेंगे?','fr'=>'Que souhaitez-vous boire ?','options'=>'[{"text":"एक कॉफी और एक क्रोइसां, कृपया।","fr":"Un café et un croissant, s.v.p."},{"text":"मुझे हिंदी नहीं आती।","fr":"Je ne parle pas hindi."},{"text":"स्टेशन कहाँ है?","fr":"Où est la gare ?"},{"text":"मुझे टैक्सी चाहिए।","fr":"J\'ai besoin d\'un taxi."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'line','speaker'=>'A','text'=>'क्या आप चीनी लेंगे?','fr'=>'Voulez-vous du sucre ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'choice','speaker'=>null,'text'=>'चीनी चाहिए?','fr'=>'Voulez-vous du sucre ?','options'=>'[{"text":"दूध हाँ, चीनी नहीं। धन्यवाद।","fr":"Du lait oui, sans sucre. Merci."},{"text":"मुझे कॉफी पसंद नहीं।","fr":"Je n\'aime pas le café."},{"text":"मैं चाय पसंद करता हूँ।","fr":"Je préfère le thé."},{"text":"नहीं, धन्यवाद।","fr":"Non merci."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'line','speaker'=>'A','text'=>'कुल मिलाकर डेढ़ सौ रुपये होंगे।','fr'=>'Ça fera cent cinquante roupies.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-rasta',
            'emoji'        => '🗺️',
            'title'        => 'रास्ता पूछना',
            'title_fr'     => 'Dans la rue',
            'sort_order'   => 5,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'माफ़ कीजिए, स्टेशन कैसे जाएँ?','fr'=>'Excusez-moi, comment puis-je aller à la gare ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'सीधे जाइए, फिर बाएँ मुड़िए।','fr'=>'Allez tout droit, puis tournez à gauche.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'क्या यह दूर है?','fr'=>'C\'est loin ?','options'=>'[{"text":"क्या यहाँ से दूर है?","fr":"Est-ce loin d\'ici ?"},{"text":"मैं टैक्सी लेना पसंद करूँगा।","fr":"Je préfère prendre un taxi."},{"text":"मुझे रास्ता पता है।","fr":"Je connais le chemin."},{"text":"मैं बस लूँगा।","fr":"Je vais prendre le bus."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'पैदल लगभग दस मिनट लगेंगे।','fr'=>'Environ dix minutes à pied.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'क्या मेट्रो है?','fr'=>'Y a-t-il un métro ?','options'=>'[{"text":"क्या पास में मेट्रो स्टेशन है?","fr":"Y a-t-il une station de métro à proximité ?"},{"text":"मुझे मेट्रो पसंद नहीं।","fr":"Je n\'aime pas le métro."},{"text":"मैं पैदल जाना पसंद करता हूँ।","fr":"Je préfère marcher."},{"text":"टैक्सी तेज़ है।","fr":"Le taxi est plus rapide."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'हाँ, मोड़ के पास ही स्टेशन है।','fr'=>'Oui, la station est juste après le virage.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-museum',
            'emoji'        => '🏛️',
            'title'        => 'संग्रहालय में',
            'title_fr'     => 'Au musée',
            'sort_order'   => 6,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'नमस्ते। टिकट कितने का है?','fr'=>'Bonjour. Combien coûte le billet ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'वयस्कों के लिए एक सौ रुपये, छात्रों के लिए पचास।','fr'=>'Cent roupies pour les adultes, cinquante pour les étudiants.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'क्या छात्र छूट है?','fr'=>'Y a-t-il une réduction étudiants ?','options'=>'[{"text":"मैं छात्र हूँ, क्या मुझे छूट मिलेगी?","fr":"Je suis étudiant, puis-je avoir une réduction ?"},{"text":"संग्रहालय बहुत महँगा है।","fr":"Le musée est trop cher."},{"text":"मुझे संग्रहालय पसंद नहीं।","fr":"Je n\'aime pas les musées."},{"text":"यह कब खुलता है?","fr":"À quelle heure ouvre-t-il ?"}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'हाँ, कृपया अपना छात्र पहचान पत्र दिखाइए।','fr'=>'Oui, veuillez montrer votre carte étudiante s.v.p.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'क्या फ़ोटो ले सकते हैं?','fr'=>'Peut-on photographier ?','options'=>'[{"text":"क्या अंदर फ़ोटो लेना ठीक है?","fr":"Est-il permis de photographier à l\'intérieur ?"},{"text":"मेरे पास कैमरा नहीं है।","fr":"Je n\'ai pas d\'appareil photo."},{"text":"बाहर निकलना कहाँ है?","fr":"Où est la sortie ?"},{"text":"संग्रहालय जल्द बंद होगा।","fr":"Le musée va bientôt fermer."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'भूतल पर हाँ, ऊपरी मंजिल पर नहीं।','fr'=>'Au rez-de-chaussée oui, à l\'étage supérieur non.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

        $dialogue = DB::table('dialogues')->insertGetId([
            'lang'         => 'hi',
            'scenario_key' => 'hi-dukan',
            'emoji'        => '🛒',
            'title'        => 'दुकान में',
            'title_fr'     => 'En boutique',
            'sort_order'   => 7,
            'created_at'   => $now,
            'updated_at'   => $now,
        ]);
        DB::table('dialogue_steps')->insert([
            ['dialogue_id'=>$dialogue,'position'=>0,'type'=>'line','speaker'=>'B','text'=>'नमस्ते। मुझे एक जैकेट चाहिए।','fr'=>'Bonjour. Je cherche une veste.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>1,'type'=>'line','speaker'=>'A','text'=>'आपका साइज़ क्या है?','fr'=>'Quelle taille faites-vous ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>2,'type'=>'choice','speaker'=>null,'text'=>'कौन सा साइज़ चाहिए?','fr'=>'Quelle taille cherchez-vous ?','options'=>'[{"text":"मीडियम साइज़ दीजिए, कृपया।","fr":"Taille medium, s.v.p."},{"text":"मुझे अपना साइज़ नहीं पता।","fr":"Je ne connais pas ma taille."},{"text":"मुझे पैंट चाहिए।","fr":"Je cherche un pantalon."},{"text":"मुझे जैकेट नहीं चाहिए।","fr":"Je n\'ai pas besoin de veste."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>3,'type'=>'line','speaker'=>'A','text'=>'यह सेल पर है। आपको यह रंग पसंद है?','fr'=>'Celle-ci est en promotion. Aimez-vous cette couleur ?','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>4,'type'=>'choice','speaker'=>null,'text'=>'क्या पहनकर देख सकते हैं?','fr'=>'Puis-je l\'essayer ?','options'=>'[{"text":"क्या मैं इसे पहनकर देख सकता हूँ?","fr":"Puis-je l\'essayer ?"},{"text":"यह रंग मुझे पसंद नहीं।","fr":"Je n\'aime pas cette couleur."},{"text":"यह बहुत महँगी है।","fr":"C\'est trop cher."},{"text":"मैं अभी खरीदता हूँ।","fr":"Je l\'achète tout de suite."}]','correct_index'=>0,'created_at'=>$now,'updated_at'=>$now],
            ['dialogue_id'=>$dialogue,'position'=>5,'type'=>'line','speaker'=>'A','text'=>'बिल्कुल! ट्राइलिंग रूम अंदर दाहिनी तरफ है।','fr'=>'Bien sûr ! Les cabines d\'essayage sont au fond à droite.','options'=>null,'correct_index'=>null,'created_at'=>$now,'updated_at'=>$now],
        ]);

    }
}
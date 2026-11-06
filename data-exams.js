/* Deutsch A1 – Exam simulations in the Goethe-Zertifikat A1 (Start Deutsch 1) format
   Hören: Teil 1 (6 dialogues, MC 3), Teil 2 (4 announcements, true/false), Teil 3 (5 voicemails, MC 3) = 15 items
   Lesen: Teil 1 (2 texts, 5 true/false), Teil 2 (5 situations, ad a or b), Teil 3 (5 signs, true/false) = 15 items
   Schreiben: Teil 1 (form, 5 fields), Teil 2 (message ~30 words, 3 content points)
   Sprechen: Teil 1 (introduce + spell + number), Teil 2 (questions on a topic), Teil 3 (requests)
   Each part is scaled to 25 points; pass mark 60/100. */
window.EXAMS = [
{id:1,title:"Modelltest 1",
hoeren:{min:20,
 t1:[{audio:"Guten Tag, ich hätte gern ein Brot und vier Brötchen. – Gern. Das macht sechs Franken zwanzig.",q:"How much does the customer pay?",a:"6,20",w:["4,20","6,40"]},
     {audio:"Wann fängt der Film an? – Um Viertel nach acht. Wir treffen uns um acht vor dem Kino.",q:"When does the film start?",a:"8.15",w:["8.00","8.45"]},
     {audio:"Entschuldigung, wo ist die Post? – Gehen Sie geradeaus und dann rechts, neben der Bank.",q:"Where is the post office?",a:"Next to the bank",w:["Opposite the station","Behind the church"]},
     {audio:"Was machst du am Wochenende? – Ich fahre mit meiner Schwester nach Bern. Wir besuchen unsere Eltern.",q:"What does the woman do at the weekend?",a:"She visits her parents in Bern",w:["She works","She goes hiking"]},
     {audio:"Ich möchte einen Termin beim Zahnarzt. – Geht es am Dienstag um zehn? – Ja, das passt.",q:"When is the appointment?",a:"Tuesday at 10",w:["Thursday at 10","Tuesday at 2"]},
     {audio:"Nehmen Sie die S-Bahn Nummer vier bis Hauptbahnhof, dann den Bus zwölf.",q:"Which S-Bahn should the person take?",a:"Number 4",w:["Number 12","Number 14"]}],
 t2:[{audio:"Achtung, eine Durchsage: Der Zug nach Zürich, Abfahrt zehn Uhr fünfzehn, fährt heute von Gleis sieben.",s:"The train to Zurich leaves from platform 7.",ok:true},
     {audio:"Liebe Kundinnen und Kunden, heute im Angebot: Äpfel, ein Kilo nur zwei Franken. Die Kasse drei ist geschlossen.",s:"Checkout 3 is open.",ok:false},
     {audio:"Herr Müller, bitte kommen Sie zur Information im Erdgeschoss. Ihre Frau wartet dort.",s:"Mr Müller's wife is waiting at the information desk on the ground floor.",ok:true},
     {audio:"Der Flug nach Berlin hat vierzig Minuten Verspätung. Die Passagiere warten bitte am Ausgang B zwölf.",s:"The flight to Berlin leaves on time.",ok:false}],
 t3:[{audio:"Hallo Frau Tanaka, hier ist die Praxis Dr. Meier. Ihr Termin am Montag ist leider nicht möglich. Kommen Sie bitte am Dienstag um vierzehn Uhr.",q:"When is the new appointment?",a:"Tuesday at 14.00",w:["Monday at 14.00","Tuesday at 4.00"]},
     {audio:"Hi Momoko, hier ist Lisa. Wir treffen uns heute nicht im Café, sondern im Park. Bring bitte etwas zu trinken mit.",q:"Where do they meet?",a:"In the park",w:["In the café","At Lisa's"]},
     {audio:"Guten Tag, hier Sprachschule Lingua. Der Kurs am Donnerstag fällt aus. Der nächste Kurs ist am Montag um achtzehn Uhr.",q:"What about the course on Thursday?",a:"It is cancelled",w:["It starts at 18.00","It is in another room"]},
     {audio:"Hallo, hier ist Peter. Ich komme heute Abend später, so gegen neun. Fangt bitte ohne mich an zu essen.",q:"When does Peter come?",a:"Around 9 pm",w:["Around 7 pm","He does not come"]},
     {audio:"Guten Tag, hier ist das Reisebüro Sonne. Ihre Fahrkarten sind da. Sie können sie bis Freitag, achtzehn Uhr, abholen.",q:"Until when can the tickets be collected?",a:"Friday 18.00",w:["Friday 8.00","Thursday 18.00"]}]},
lesen:{min:25,
 t1:[{text:"Liebe Anna,\nich bin am Samstag in Zürich. Hast du Zeit? Wir können zusammen essen gehen, vielleicht um 13 Uhr im Restaurant «Seehof». Ruf mich bitte heute noch an!\nLiebe Grüße, Markus",
      items:[{s:"Markus is in Zurich on Sunday.",ok:false},{s:"Markus wants to eat with Anna at 1 pm.",ok:true},{s:"Anna should call Markus today.",ok:true}]},
     {text:"Hallo Tom,\nich kann morgen leider nicht zum Fußball kommen. Ich bin krank und muss im Bett bleiben. Vielleicht nächste Woche. Sag bitte dem Trainer Bescheid.\nViele Grüße, Jan",
      items:[{s:"Jan cannot come tomorrow because he has to work.",ok:false},{s:"Jan asks Tom to tell the coach.",ok:true}]}],
 t2:[{sit:"You want to learn German in the evening.",a:"Deutschkurs A1, Montag und Mittwoch 18.30–20.00 Uhr, kleine Gruppe, 450 Fr.",b:"Deutsch für Kinder, Samstag 10–12 Uhr, spielerisch lernen!",correct:"a"},
     {sit:"You are looking for a cheap bicycle for your daughter (8 years).",a:"Verkaufe Rennrad, Herren, 28 Zoll, 800 Fr.",b:"Kinderfahrrad, 20 Zoll, rot, gebraucht, nur 60 Fr.",correct:"b"},
     {sit:"You want to go to Berlin on Friday and come back on Sunday.",a:"Busreise nach Berlin: Abfahrt Freitag 7 Uhr, Rückfahrt Sonntag 18 Uhr, 120 Fr.",b:"Tagesausflug Berlin: Samstag, 6–23 Uhr, 70 Fr.",correct:"a"},
     {sit:"You need a flat with two rooms from 1 May.",a:"1-Zimmer-Wohnung, Zentrum, ab sofort, 900 Fr.",b:"2-Zimmer-Wohnung mit Balkon, frei ab 1. Mai, 1350 Fr.",correct:"b"},
     {sit:"You want to eat Italian food on Sunday evening.",a:"Ristorante Roma – täglich 11–23 Uhr, Pizza und Pasta",b:"Pizzeria Napoli – Mo–Sa 17–22 Uhr, Sonntag Ruhetag",correct:"a"}],
 t3:[{sign:"Supermarkt: Heute bis 20 Uhr geöffnet. Sonntag geschlossen.",s:"You can shop on Sunday.",ok:false},
     {sign:"Parkplatz nur für Kunden. Max. 1 Stunde.",s:"Customers may park for one hour.",ok:true},
     {sign:"Arztpraxis Dr. Huber: Vom 1.–15. August geschlossen. Vertretung: Dr. Lang, Seestraße 4.",s:"In August you can go to Dr Lang.",ok:true},
     {sign:"Schwimmbad: Kinder unter 8 Jahren nur mit Erwachsenen.",s:"Children under 8 may swim alone.",ok:false},
     {sign:"Bus 7: Wegen Bauarbeiten fährt der Bus nicht über Marktplatz. Bitte Haltestelle Bahnhof benutzen.",s:"Bus 7 does not stop at Marktplatz at the moment.",ok:true}]},
schreiben:{min:20,
 t1:{intro:"Your friend Kenji Sato (born 02.11.1990 in Osaka, Japanese, lives at Gartenweg 8, 9000 St. Gallen, phone 078 555 66 77, email kenji.sato@mail.ch) wants to register for a Pilates course at the sports centre on Tuesday evenings. Fill in the five missing fields.",
     fields:[["Familienname","Sato"],["Geburtsdatum","02.11.1990"],["Wohnort (PLZ, Ort)","9000 St. Gallen"],["Telefon","078 555 66 77"],["Kurstag","Dienstag"]],
     m:"Familienname: Sato · Geburtsdatum: 02.11.1990 · Wohnort: 9000 St. Gallen · Telefon: 078 555 66 77 · Kurstag: Dienstag"},
 t2:{p:"You cannot come to your German lesson tomorrow. Write to your teacher, Frau Weber (about 30 words): why you cannot come, when you can come again, ask for the homework.",min:25,
     req:[["Salutation",/\b(sehr geehrte frau weber|liebe frau weber)\b/i],["Reason",/\b(krank|arbeiten|termin|muss|kann nicht|bin|habe)\b/i],["When you come again",/\b(am (montag|dienstag|mittwoch|donnerstag|freitag)|nächste woche|übermorgen|wieder)\b/i],["Homework",/\bhausaufgabe/i],["Closing",/\b(mit freundlichen grüßen|viele grüße|liebe grüße)\b/i]],
     m:"Sehr geehrte Frau Weber,\nich kann morgen leider nicht zum Kurs kommen, denn ich habe einen Termin beim Arzt. Am Donnerstag komme ich wieder. Können Sie mir bitte die Hausaufgaben schicken?\nMit freundlichen Grüßen\nMomoko Tanaka"}},
sprechen:{min:15,parts:[
 {t:"Teil 1: Sich vorstellen (ca. 1 Min.)",p:"Introduce yourself: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby. Then spell your surname and say your phone number.",m:"Ich heiße Momoko Tanaka. Ich bin 34 Jahre alt. Ich komme aus Japan und wohne in St. Gallen. Ich spreche Japanisch, Englisch und ein bisschen Deutsch. Ich bin Grafikerin. Mein Hobby ist Kochen. T-A-N-A-K-A. Meine Telefonnummer ist null sieben neun, drei vier fünf, sechs sieben, acht neun."},
 {t:"Teil 2: Um Informationen bitten und Informationen geben (Thema: Essen und Trinken)",p:"Ask two questions and answer two questions with the key words: Frühstück, Restaurant, Lieblingsessen, Kaffee. (In the exam you get word cards.)",m:"Was essen Sie zum Frühstück? – Ich esse Brot mit Käse und trinke Tee. Gehen Sie oft ins Restaurant? – Ja, einmal pro Woche, am Freitag. Was ist Ihr Lieblingsessen? – Mein Lieblingsessen ist Sushi. Trinken Sie Kaffee? – Nein, ich trinke lieber Tee."},
 {t:"Teil 3: Bitten formulieren und darauf reagieren",p:"Formulate two requests and react to two requests with the picture words: Fenster, Telefon, Wasser, Stift. (e.g. «Machen Sie bitte das Fenster zu.» – «Ja, gern.»)",m:"Können Sie bitte das Fenster öffnen? – Ja, natürlich. Geben Sie mir bitte das Telefon. – Hier, bitte. Kann ich bitte ein Glas Wasser haben? – Ja, gern. Haben Sie einen Stift für mich? – Ja, hier ist ein Stift."}]}},

{id:2,title:"Modelltest 2",
hoeren:{min:20,
 t1:[{audio:"Wie viel kostet die Jacke? – Neunundvierzig Franken, heute im Angebot. Normal kostet sie siebzig.",q:"How much is the jacket today?",a:"49 francs",w:["70 francs","40 francs"]},
     {audio:"Wann hast du Geburtstag? – Am dreiundzwanzigsten Mai. Ich mache eine Party am Samstag.",q:"When is the birthday?",a:"23 May",w:["3 May","23 March"]},
     {audio:"Wie kommst du zur Arbeit? – Meistens mit dem Fahrrad, bei Regen mit dem Bus.",q:"How does he usually go to work?",a:"By bike",w:["By bus","On foot"]},
     {audio:"Ich möchte zwei Fahrkarten nach Basel, hin und zurück. – Das macht achtundsechzig Franken.",q:"What does the customer buy?",a:"Two return tickets to Basel",w:["One single ticket","Two tickets to Bern"]},
     {audio:"Wo ist Lisa? – Sie ist im Schwimmbad. Sie kommt um sechs nach Hause.",q:"Where is Lisa?",a:"At the swimming pool",w:["At home","At school"]},
     {audio:"Was möchten Sie trinken? – Ein Mineralwasser ohne Kohlensäure und einen Kaffee mit Milch.",q:"What does the guest order?",a:"Still water and coffee with milk",w:["Sparkling water and tea","Beer and coffee"]}],
 t2:[{audio:"Achtung am Gleis drei: Der Zug nach Bern fällt heute aus. Bitte nehmen Sie den Zug um elf Uhr zehn von Gleis fünf.",s:"The train to Bern is cancelled.",ok:true},
     {audio:"Liebe Fahrgäste, wegen Bauarbeiten endet die Linie acht heute am Hauptbahnhof.",s:"Line 8 goes all the way today.",ok:false},
     {audio:"Unser Geschäft schließt in zehn Minuten. Bitte gehen Sie zur Kasse. Vielen Dank und auf Wiedersehen.",s:"The shop closes in ten minutes.",ok:true},
     {audio:"Das Wetter morgen: am Vormittag Regen, am Nachmittag Sonne, bis zwanzig Grad.",s:"Tomorrow afternoon it will rain.",ok:false}],
 t3:[{audio:"Hallo Momoko, hier ist Sandra. Das Treffen morgen ist nicht um zehn, sondern um elf. Bis dann!",q:"When is the meeting?",a:"At 11",w:["At 10","At 1"]},
     {audio:"Guten Tag, hier Apotheke am Markt. Ihr Medikament ist da. Sie können es heute bis achtzehn Uhr dreißig abholen.",q:"Until when can the medicine be collected?",a:"18.30 today",w:["8.30 tomorrow","18.00 today"]},
     {audio:"Hi, hier ist Jonas. Ich habe meinen Schlüssel vergessen. Kannst du mich bitte um fünf vor dem Haus treffen?",q:"What does Jonas want?",a:"To meet at 5 in front of the house",w:["To get the key by post","To meet at 4 in the café"]},
     {audio:"Guten Tag, hier Hotel Seeblick. Ihr Zimmer ist ab vierzehn Uhr bereit. Das Frühstück gibt es von sieben bis zehn.",q:"From when is the room ready?",a:"From 14.00",w:["From 7.00","From 10.00"]},
     {audio:"Hallo Frau Tanaka, hier Frau Weber von der Sprachschule. Der Test ist nicht am Dienstag, sondern am Mittwoch, gleiche Zeit, Raum vier.",q:"When is the test?",a:"On Wednesday",w:["On Tuesday","On Thursday"]}]},
lesen:{min:25,
 t1:[{text:"Hallo Momoko,\ndanke für die Einladung! Ich komme gern am Samstag. Ich bringe einen Salat mit. Kann mein Freund Paul auch kommen? Er ist Vegetarier.\nBis Samstag, Lena",
      items:[{s:"Lena comes on Saturday.",ok:true},{s:"Lena brings a cake.",ok:false},{s:"Paul does not eat meat.",ok:true}]},
     {text:"Sehr geehrte Frau Tanaka,\nIhr Paket ist in der Postfiliale Bahnhofstraße. Sie können es von Montag bis Freitag zwischen 8 und 18 Uhr abholen. Bitte bringen Sie Ihren Ausweis mit.\nIhre Post",
      items:[{s:"The parcel can be collected on Saturday.",ok:false},{s:"She must bring her ID.",ok:true}]}],
 t2:[{sit:"You want to buy a used washing machine.",a:"Waschmaschine, 3 Jahre alt, funktioniert gut, 150 Fr., Abholung.",b:"Neue Waschmaschinen ab 899 Fr., Lieferung gratis.",correct:"a"},
     {sit:"You are looking for a job on Saturdays.",a:"Bäckerei sucht Verkäufer/in, Montag bis Freitag, 6–12 Uhr.",b:"Café sucht Hilfe für Samstag und Sonntag, 10–16 Uhr.",correct:"b"},
     {sit:"You want to visit a museum with children on Sunday.",a:"Kunstmuseum: Di–So 10–17 Uhr, Kinder bis 12 Jahre gratis.",b:"Technikmuseum: Mo–Fr 9–16 Uhr, Sonntag geschlossen.",correct:"a"},
     {sit:"You need a doctor who speaks English.",a:"Dr. Fischer, Hausarzt, Sprechstunde Mo–Fr. Wir sprechen Deutsch und Französisch.",b:"Dr. Meier, Hausärztin, Deutsch und Englisch, Termine online.",correct:"b"},
     {sit:"You want to learn to play the guitar.",a:"Klavierunterricht für Kinder und Erwachsene, 50 Fr./Std.",b:"Gitarrenunterricht für Anfänger, bei Ihnen zu Hause, 40 Fr./Std.",correct:"b"}],
 t3:[{sign:"Bitte nicht stören.",s:"You should not disturb.",ok:true},
     {sign:"Lift außer Betrieb – bitte Treppe benutzen.",s:"The lift works.",ok:false},
     {sign:"Bibliothek: Montag geschlossen. Di–Fr 10–19 Uhr.",s:"The library is open on Monday.",ok:false},
     {sign:"Restaurant: Wir machen Urlaub vom 5. bis 20. Juli.",s:"The restaurant is closed on 10 July.",ok:true},
     {sign:"Rauchen verboten. Ausgang hinten links.",s:"The exit is at the back on the left.",ok:true}]},
schreiben:{min:20,
 t1:{intro:"Your colleague Maria Rossi (Italian, born 15.03.1985 in Milan, lives at Via Verdi 10, 6900 Lugano, phone 091 234 56 78) wants to book a hotel room in Berlin: a single room from 3 to 6 October (3 nights), with breakfast. Fill in the five missing fields.",
     fields:[["Vorname","Maria"],["Nationalität","italienisch"],["Ankunft","03.10."],["Anzahl Nächte","3"],["Zimmer (Einzel/Doppel)","Einzelzimmer"]],
     m:"Vorname: Maria · Nationalität: italienisch · Ankunft: 03.10. · Anzahl Nächte: 3 · Zimmer: Einzelzimmer"},
 t2:{p:"Your friend Tom has invited you to his birthday party on Saturday. Write to him (about 30 words): thank him, say you come and at what time, ask what you can bring.",min:25,
     req:[["Salutation",/\b(lieber tom|hallo tom)\b/i],["Thanks",/\b(danke|vielen dank)\b/i],["Time",/\b(um \w+|gegen \w+|am abend|am nachmittag)\b/i],["Bring",/\b(mitbringen|bringe|soll ich)\b/i],["Closing",/\b(liebe grüße|viele grüße|bis samstag|bis bald)\b/i]],
     m:"Lieber Tom,\nvielen Dank für die Einladung! Ich komme gern am Samstag, so gegen acht Uhr. Soll ich etwas mitbringen, vielleicht einen Kuchen oder Getränke?\nBis Samstag und liebe Grüße\nMomoko"}},
sprechen:{min:15,parts:[
 {t:"Teil 1: Sich vorstellen",p:"Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby. Spell your first name, say your postcode.",m:"Mein Name ist Momoko Tanaka. Ich bin 34 Jahre alt und komme aus Japan. Ich wohne in St. Gallen in der Schweiz. Ich spreche Japanisch und Englisch und lerne Deutsch. Ich bin Grafikerin. Meine Hobbys sind Kochen und Schwimmen. M-O-M-O-K-O. Meine Postleitzahl ist neun null null null."},
 {t:"Teil 2: Informationen (Thema: Freizeit)",p:"Ask and answer with: Wochenende, Sport, Kino, Musik.",m:"Was machen Sie am Wochenende? – Ich mache oft einen Ausflug. Treiben Sie Sport? – Ja, ich gehe schwimmen. Gehen Sie gern ins Kino? – Ja, einmal im Monat. Welche Musik hören Sie? – Ich höre gern Jazz."},
 {t:"Teil 3: Bitten",p:"Requests and reactions with: Tür, Buch, Kaffee, Handy.",m:"Machen Sie bitte die Tür zu. – Ja, gern. Können Sie mir bitte das Buch geben? – Hier, bitte. Bringen Sie mir bitte einen Kaffee. – Natürlich. Darf ich bitte Ihr Handy benutzen? – Ja, kein Problem."}]}},

{id:3,title:"Modelltest 3",
hoeren:{min:20,
 t1:[{audio:"Wie spät ist es? – Es ist halb zehn. Der Bus kommt um Viertel vor zehn.",q:"What time is it?",a:"9.30",w:["10.30","9.45"]},
     {audio:"Was ist Ihr Beruf? – Ich bin Krankenschwester und arbeite im Kantonsspital.",q:"What is the woman's job?",a:"Nurse",w:["Doctor","Teacher"]},
     {audio:"Wo wohnst du jetzt? – In der Gartenstraße, im dritten Stock. Die Wohnung hat zwei Zimmer und einen Balkon.",q:"On which floor does he live?",a:"Third floor",w:["Second floor","Ground floor"]},
     {audio:"Ich hätte gern ein Kilo Tomaten und zweihundert Gramm Käse. – Sonst noch etwas? – Nein, danke.",q:"What does the customer buy?",a:"Tomatoes and cheese",w:["Potatoes and ham","Tomatoes and bread"]},
     {audio:"Wie ist das Wetter in Tokio? – Heute regnet es, aber morgen scheint die Sonne.",q:"What is the weather like in Tokyo today?",a:"Rainy",w:["Sunny","Snowing"]},
     {audio:"Kommst du mit ins Konzert am Freitag? – Tut mir leid, am Freitag muss ich arbeiten. Samstag habe ich Zeit.",q:"Why can't she come on Friday?",a:"She has to work",w:["She is ill","She has no money"]}],
 t2:[{audio:"Achtung, Durchsage: Das Kind Lara Meier, sechs Jahre, wartet an der Information im ersten Stock auf seine Eltern.",s:"Lara is waiting on the first floor.",ok:true},
     {audio:"Meine Damen und Herren, der ICE nach Hamburg hält heute nicht in Hannover.",s:"The train stops in Hannover.",ok:false},
     {audio:"Liebe Gäste, das Schwimmbad schließt heute wegen eines Unfalls um sechzehn Uhr.",s:"The pool closes at 16.00 today.",ok:true},
     {audio:"Nächster Halt: Marktplatz. Umsteigen zu den Linien zwei und sechs.",s:"At Marktplatz you can change to lines 2 and 6.",ok:true}],
 t3:[{audio:"Hallo Momoko, hier Eliseo. Ich komme heute erst um acht nach Hause. Kannst du bitte Brot und Milch kaufen?",q:"What should Momoko buy?",a:"Bread and milk",w:["Bread and butter","Milk and eggs"]},
     {audio:"Guten Tag, hier ist die Fahrschule Blitz. Ihre Fahrstunde morgen beginnt nicht um neun, sondern um zehn Uhr.",q:"When does the driving lesson start?",a:"At 10",w:["At 9","At 11"]},
     {audio:"Hallo, hier ist Nina. Das Kino heute Abend ist ausverkauft. Wollen wir stattdessen essen gehen? Ruf mich an!",q:"What does Nina suggest?",a:"Going out to eat instead",w:["Going to another cinema","Staying at home"]},
     {audio:"Guten Tag, hier Zahnarztpraxis Dr. Lang. Bitte kommen Sie morgen zehn Minuten früher und bringen Sie Ihre Versichertenkarte mit.",q:"What should the patient do?",a:"Come 10 minutes early with the insurance card",w:["Come 10 minutes later","Cancel the appointment"]},
     {audio:"Hi, hier ist Anna. Ich habe deinen Regenschirm im Café vergessen. Ich hole ihn morgen und bringe ihn dir am Donnerstag.",q:"When does Anna bring the umbrella?",a:"On Thursday",w:["Tomorrow","Today"]}]},
lesen:{min:25,
 t1:[{text:"Liebe Momoko,\nam Sonntag machen wir ein Picknick im Park, ab 12 Uhr. Jeder bringt etwas zu essen mit. Bei Regen treffen wir uns bei mir zu Hause.\nViele Grüße, Sandra",
      items:[{s:"The picnic starts at 12.",ok:true},{s:"If it rains, the picnic is cancelled.",ok:false},{s:"Everyone brings food.",ok:true}]},
     {text:"Hallo Herr Keller,\nder Computer im Büro 3 funktioniert nicht. Der Techniker kommt am Mittwoch um 9 Uhr. Bitte seien Sie dann im Büro.\nViele Grüße, Monika Braun",
      items:[{s:"The technician comes on Wednesday morning.",ok:true},{s:"The computer in office 9 is broken.",ok:false}]}],
 t2:[{sit:"You want to go swimming early in the morning before work.",a:"Hallenbad Ost: Mo–Fr 6.30–21 Uhr, Sa/So 9–18 Uhr.",b:"Freibad Süd: täglich 10–19 Uhr, nur im Sommer.",correct:"a"},
     {sit:"You want to sell your old sofa quickly.",a:"Möbelhaus Wagner: Neue Sofas ab 599 Fr.",b:"Kaufe gebrauchte Möbel, Abholung sofort, Barzahlung. Tel. 079 …",correct:"b"},
     {sit:"You want to travel to Vienna by train at the weekend.",a:"Bahnangebot: Zürich–Wien ab 59 Fr., jeden Tag, Reservierung online.",b:"Flug Zürich–Wien, nur Montag bis Freitag, ab 120 Fr.",correct:"a"},
     {sit:"You want to eat something small at 15.00.",a:"Restaurant Löwen: Mittagessen 11.30–14 Uhr, Abendessen ab 18 Uhr.",b:"Café Mozart: Kuchen, Sandwiches und Kaffee, durchgehend 8–19 Uhr.",correct:"b"},
     {sit:"You want to learn German for your job, in the morning.",a:"Deutsch für den Beruf, B1, Mo–Do 8–10 Uhr.",b:"Deutsch A1 Intensiv, Mo–Fr 9–12 Uhr, Start jeden Monat.",correct:"b"}],
 t3:[{sign:"Eingang nur mit Ticket. Kasse im Erdgeschoss.",s:"You need a ticket to enter.",ok:true},
     {sign:"Drücken",s:"You should pull the door.",ok:false},
     {sign:"Zimmer frei – 2 Zimmer, Küche, Bad, ab 1. September.",s:"The flat is available from September.",ok:true},
     {sign:"Fahrräder bitte nicht am Eingang abstellen.",s:"You may park bicycles at the entrance.",ok:false},
     {sign:"Praxis geschlossen. In dringenden Fällen: Notfall-Nummer 144.",s:"In an emergency you should call 144.",ok:true}]},
schreiben:{min:20,
 t1:{intro:"Your husband Eliseo Bernasconi (Swiss, born 20.07.1988 in Bern, lives at Bahnhofstraße 5, 9000 St. Gallen, phone 079 345 67 89) wants to order two train tickets Zurich–Munich, departure 14 May, return 16 May, second class. Fill in the five missing fields.",
     fields:[["Name","Bernasconi"],["Geburtsdatum","20.07.1988"],["Anzahl Personen","2"],["Rückfahrt","16.05."],["Klasse","2"]],
     m:"Name: Bernasconi · Geburtsdatum: 20.07.1988 · Anzahl Personen: 2 · Rückfahrt: 16.05. · Klasse: 2"},
 t2:{p:"You want to visit your friend Lena in Bern next weekend. Write to her (about 30 words): when you arrive, how you travel, ask whether you can stay at her place.",min:25,
     req:[["Salutation",/\b(liebe lena|hallo lena)\b/i],["Arrival time",/\b(am samstag|am freitag|um \w+|am \w+ um)\b/i],["Transport",/\b(mit dem (zug|auto|bus)|zug|bahn)\b/i],["Question about staying",/\b(schlafen|übernachten|bleiben|bei dir)\b.*\?/is],["Closing",/\b(liebe grüße|viele grüße|bis bald|bis samstag)\b/i]],
     m:"Liebe Lena,\nich möchte dich nächstes Wochenende besuchen. Ich komme am Samstag um 11 Uhr mit dem Zug in Bern an. Kann ich bei dir übernachten? Ich bleibe bis Sonntagabend.\nLiebe Grüße\nMomoko"}},
sprechen:{min:15,parts:[
 {t:"Teil 1: Sich vorstellen",p:"Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby. Spell the name of your town, say your house number.",m:"Ich heiße Momoko Tanaka und bin 34 Jahre alt. Ich komme aus Tokio in Japan. Ich wohne in St. Gallen. Ich spreche Japanisch, Englisch und etwas Deutsch. Ich arbeite als Grafikerin. In meiner Freizeit koche ich gern. S-T-period-G-A-L-L-E-N. Meine Hausnummer ist fünf."},
 {t:"Teil 2: Informationen (Thema: Wohnen)",p:"Ask and answer with: Wohnung, Zimmer, Miete, Nachbarn.",m:"Wo wohnen Sie? – Ich wohne in einer Wohnung in der Stadt. Wie viele Zimmer hat die Wohnung? – Drei Zimmer. Ist die Miete teuer? – Ja, 1500 Franken. Sind Ihre Nachbarn nett? – Ja, sehr nett."},
 {t:"Teil 3: Bitten",p:"Requests and reactions with: Licht, Rechnung, Adresse, Fahrkarte.",m:"Machen Sie bitte das Licht an. – Ja, gern. Bringen Sie mir bitte die Rechnung. – Sofort. Können Sie mir bitte Ihre Adresse geben? – Ja, Bahnhofstraße fünf. Zeigen Sie mir bitte Ihre Fahrkarte. – Hier, bitte."}]}}
];

window.EXAMINFO=`
<h3>Goethe-Zertifikat A1: Start Deutsch 1</h3>
<p>The exam has four parts. Each part counts 25 points; you pass with <b>60 of 100 points</b> and you must take all four parts. Grades: 90–100 sehr gut, 80–89 gut, 70–79 befriedigend, 60–69 ausreichend. If you fail, you repeat the whole exam. Minimum age 16. No dictionary.</p>
<table><tr><th>Part</th><th>Time</th><th>Tasks</th></tr>
<tr><td><b>Hören</b> (15 items)</td><td>ca. 20 min</td><td>Teil 1: 6 short dialogues, one question each with 3 (picture) options, played twice. Teil 2: 4 public announcements (station, airport, supermarket), true/false, played once. Teil 3: 5 answering-machine messages, one question each with 3 options, played twice.</td></tr>
<tr><td><b>Lesen</b> (15 items)</td><td>ca. 25 min</td><td>Teil 1: 2 short notes or emails, 5 true/false statements. Teil 2: 5 situations, each with 2 small ads – choose the one that fits. Teil 3: 5 signs or notices, true/false.</td></tr>
<tr><td><b>Schreiben</b></td><td>ca. 20 min</td><td>Teil 1: fill in 5 missing fields in a form from a short text (5 points). Teil 2: a short message or email of about 30 words with 3 content points (10 points: 3 per point, 1 for the text type, e.g. salutation and closing).</td></tr>
<tr><td><b>Sprechen</b></td><td>ca. 15 min, group of up to 4</td><td>Teil 1: introduce yourself (name, age, country, home, languages, job, hobby), spell a word, say a number (3 points). Teil 2: ask and answer questions on a topic using word cards (6 points). Teil 3: make requests and react to requests using picture cards (6 points). Comprehensibility counts, not the number of mistakes.</td></tr></table>
<h3>What is expected at A1</h3>
<ul><li><b>Vocabulary:</b> the official Goethe A1 word list has about 650 words and phrases (personal details, family, home, food, shopping, travel, work, free time, health, time, numbers, weather). This app covers them in 13 lessons.</li>
<li><b>Grammar:</b> present tense of regular and irregular verbs, sein/haben, modal verbs, separable verbs, imperative, Perfekt and war/hatte, articles, kein/nicht, plural, accusative and dative (basic), possessive articles, prepositions of place and time, word order (verb second, sentence bracket), W-questions and yes/no questions, und/aber/oder/denn.</li>
<li><b>Writing:</b> forms, short personal emails and notes (invitation, apology, request, appointment) with salutation and closing.</li>
<li><b>Speaking:</b> introduce yourself, spell, numbers, simple questions and answers about everyday topics, polite requests.</li></ul>
<h3>Where to take the exam in Switzerland</h3>
<p>In Switzerland the Goethe exams are run by <b>Swiss Exams</b> (goethe-pruefungen.swiss-exams.ch) at several locations, including in eastern Switzerland. Dates, fees and registration: shop.swiss-exams.ch. The Goethe-Institut also offers the exam in Germany and worldwide. Check the official pages before you register; formats are updated from time to time.</p>
<h3>Study plan (about 8 weeks at 30 min a day)</h3>
<ol><li>1–2 lessons per week: read the grammar, learn the vocabulary as cards, do all exercises and the mini-test.</li>
<li>Every day: 10–15 cards and 3 dictation sentences.</li>
<li>From lesson 6: one Modelltest per week; from lesson 10: time yourself strictly.</li>
<li>Speak out loud, record yourself and compare with the model answer. Practise spelling your name and saying your phone number until it is automatic.</li>
<li>Write the Schreiben tasks by hand and count the words.</li></ol>
<p class="mut">Sources: Goethe-Institut, «Prüfungsziele, Testbeschreibung A1 Start Deutsch 1» and «Durchführungsbestimmungen»; Goethe-Institut A1 word list (A1_SD1_Wortliste); Swiss Exams information pages.</p>`;

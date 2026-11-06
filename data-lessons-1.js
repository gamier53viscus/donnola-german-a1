/* Deutsch A1 (Goethe-Zertifikat A1: Start Deutsch 1) – Lessons 1–7
   Structure per lesson:
   id, title, sub, goals[], grammar (HTML, English explanations), vocab [[de,en]], ex [[question, correct, [wrong…], explanation]],
   read {title,text,qs[[q,correct,[wrong…]]]}, listen [[de,en]], dialog {text,qs}, write {p,req,m}, speak {p,cues,m}
*/
window.LESSONS = window.LESSONS || [];

window.LESSONS.push(
/* ================= LESSON 1 ================= */
{id:1,title:"Hallo! Begrüßung und Vorstellung",sub:"Greetings, introducing yourself, the alphabet",
goals:["greet formally and informally","introduce yourself: name, origin, home, languages","spell your name (exam task: Sprechen Teil 1)","use sein, heißen, kommen, wohnen"],
grammar:`
<h3>1. The alphabet and spelling</h3>
<p>In the speaking exam you must spell your name or a word. Letters are pronounced:</p>
<table><tr><td>A ah</td><td>B beh</td><td>C tseh</td><td>D deh</td><td>E eh</td><td>F eff</td><td>G geh</td></tr>
<tr><td>H hah</td><td>I ih</td><td>J yott</td><td>K kah</td><td>L ell</td><td>M emm</td><td>N enn</td></tr>
<tr><td>O oh</td><td>P peh</td><td>Q kuh</td><td>R err</td><td>S ess</td><td>T teh</td><td>U uh</td></tr>
<tr><td>V fau</td><td>W veh</td><td>X iks</td><td>Y üpsilon</td><td>Z tsett</td><td>Ä äh · Ö öh · Ü üh</td><td>ß ess-tsett</td></tr></table>
<p><i>Wie schreibt man das? – M-O-M-O-K-O. / Können Sie das buchstabieren?</i></p>
<p>Pronunciation tips: <b>ei</b> = "eye" (nein, mein), <b>ie</b> = "ee" (wie, Sie), <b>eu/äu</b> = "oy" (neu, Häuser), <b>ch</b> after a/o/u is a throaty sound (Buch), after e/i soft (ich), <b>sch</b> = "sh", <b>st/sp</b> at word start = "sht/shp" (Straße, sprechen), <b>v</b> = "f" (vier), <b>w</b> = "v" (wo), <b>z</b> = "ts" (zehn), <b>ß</b> = "ss" (heißen).</p>
<h3>2. Greetings: formal and informal</h3>
<table><tr><th>informal (du)</th><th>formal (Sie)</th></tr>
<tr><td>Hallo! / Hi!</td><td>Guten Tag! Guten Morgen! Guten Abend!</td></tr>
<tr><td>Wie geht's? / Wie geht es dir?</td><td>Wie geht es Ihnen?</td></tr>
<tr><td>Tschüss! / Bis bald!</td><td>Auf Wiedersehen! (phone: Auf Wiederhören!)</td></tr>
<tr><td>Wie heißt du?</td><td>Wie heißen Sie?</td></tr>
<tr><td>Woher kommst du?</td><td>Woher kommen Sie?</td></tr></table>
<p>In Switzerland people say <i>Grüezi</i> (formal) and <i>Hoi</i> (informal), in the exam you use the standard forms above. Use <b>Sie</b> with adults you don't know, at offices, shops and in the exam with the examiner.</p>
<h3>3. Personal pronouns</h3>
<table><tr><td>ich</td><td>I</td><td>wir</td><td>we</td></tr><tr><td>du</td><td>you (informal)</td><td>ihr</td><td>you (plural, informal)</td></tr>
<tr><td>er / sie / es</td><td>he / she / it</td><td>sie</td><td>they</td></tr><tr><td colspan="2"></td><td>Sie</td><td>you (formal, singular and plural, always capital S)</td></tr></table>
<h3>4. The verbs sein, heißen, kommen, wohnen, sprechen</h3>
<table><tr><th></th><th>sein (to be)</th><th>heißen (to be called)</th><th>kommen (to come)</th><th>wohnen (to live)</th><th>sprechen (to speak)</th></tr>
<tr><td>ich</td><td>bin</td><td>heiße</td><td>komme</td><td>wohne</td><td>spreche</td></tr>
<tr><td>du</td><td>bist</td><td>heißt</td><td>kommst</td><td>wohnst</td><td>sprichst</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>heißt</td><td>kommt</td><td>wohnt</td><td>spricht</td></tr>
<tr><td>wir</td><td>sind</td><td>heißen</td><td>kommen</td><td>wohnen</td><td>sprechen</td></tr>
<tr><td>ihr</td><td>seid</td><td>heißt</td><td>kommt</td><td>wohnt</td><td>sprecht</td></tr>
<tr><td>sie/Sie</td><td>sind</td><td>heißen</td><td>kommen</td><td>wohnen</td><td>sprechen</td></tr></table>
<p>Regular pattern: <b>-e, -st, -t, -en, -t, -en</b>. <i>sprechen</i> changes e→i in du/er forms.</p>
<h3>5. Introducing yourself</h3>
<p><i>Ich heiße Momoko. / Mein Name ist Momoko Tanaka. Ich komme aus Japan, aus Tokio. Ich wohne in der Schweiz, in St. Gallen. Ich spreche Japanisch und Englisch und ein bisschen Deutsch. Ich bin verheiratet.</i></p>
<p>Countries: most have no article: <i>aus Japan, aus Deutschland, in Italien</i>. With article: <i>die Schweiz → aus der Schweiz, in der Schweiz; die Türkei → aus der Türkei; die USA → aus den USA</i>.</p>
<h3>6. Questions</h3>
<p>W-questions: question word + verb + subject: <i>Wie heißen Sie? Woher kommen Sie? Wo wohnen Sie? Was sprechen Sie?</i><br>Yes/no questions: verb first: <i>Kommen Sie aus Japan? – Ja. / Nein, aus Korea.</i></p>
<p>Negation with <b>nicht</b>: <i>Ich komme nicht aus China. Ich wohne nicht in Zürich.</i></p>
<h3>7. Classroom and exam phrases</h3>
<p><i>Wie bitte? Können Sie das wiederholen? Langsamer, bitte. Was bedeutet …? Wie schreibt man das? Ich verstehe das nicht.</i></p>`,
vocab:[["Hallo","hello"],["Guten Morgen","good morning"],["Guten Tag","good day / hello (formal)"],["Guten Abend","good evening"],["Gute Nacht","good night"],["Auf Wiedersehen","goodbye (formal)"],["Auf Wiederhören","goodbye (on the phone)"],["Tschüss","bye"],["Bis bald","see you soon"],["Bis morgen","see you tomorrow"],["Wie geht es Ihnen?","how are you? (formal)"],["Wie geht's?","how are you? (informal)"],["Danke, gut.","fine, thanks"],["Es geht.","so-so"],["Nicht so gut.","not so good"],["Und Ihnen? / Und dir?","and you?"],["bitte","please / you're welcome"],["danke","thank you"],["Vielen Dank","many thanks"],["Entschuldigung","excuse me / sorry"],["Es tut mir leid","I'm sorry"],["Wie bitte?","pardon?"],["ja","yes"],["nein","no"],["der Name","name"],["der Vorname","first name"],["der Familienname / Nachname","surname"],["Wie heißen Sie?","what is your name? (formal)"],["Ich heiße …","my name is …"],["Mein Name ist …","my name is …"],["Woher kommen Sie?","where are you from?"],["Ich komme aus …","I come from …"],["Wo wohnen Sie?","where do you live?"],["Ich wohne in …","I live in …"],["buchstabieren","to spell"],["Wie schreibt man das?","how do you spell that?"],["sprechen (spricht)","to speak"],["die Sprache","language"],["Deutsch","German"],["Englisch","English"],["Japanisch","Japanese"],["Französisch","French"],["Italienisch","Italian"],["ein bisschen","a little"],["Japan","Japan"],["die Schweiz","Switzerland"],["Deutschland","Germany"],["Österreich","Austria"],["die USA","the USA"],["Schweizer / Schweizerin","Swiss (man / woman)"],["Deutscher / Deutsche","German (man / woman)"],["Japaner / Japanerin","Japanese (man / woman)"],["das Land","country"],["die Stadt, ¨-e","city, town"],["der Herr","Mr."],["die Frau, -en","Mrs., Ms., woman"],["der Mann, ¨-er","man, husband"],["der Freund / die Freundin","friend (m/f), boyfriend / girlfriend"],["sein","to be"],["heißen","to be called"],["kommen","to come"],["wohnen","to live (reside)"],["verstehen","to understand"],["Ich verstehe nicht.","I don't understand."],["wiederholen","to repeat"],["langsam","slow(ly)"],["Was bedeutet …?","what does … mean?"],["nicht","not"],["und","and"],["auch","also"],["aber","but"],["oder","or"]],
ex:[["Ich ___ Momoko.","heiße",["heißt","heißen","bin heiße"],"ich heiße."],
["Woher ___ du?","kommst",["kommt","kommen","komme"],"du → -st."],
["Er ___ aus Deutschland.","kommt",["kommst","kommen","komme"],"er → -t."],
["Wir ___ in St. Gallen.","wohnen",["wohnt","wohne","wohnst"],"wir → -en."],
["___ Sie aus Japan?","Kommen",["Kommt","Kommst","Komme"],"Sie → -en."],
["Ich ___ Japanerin.","bin",["bist","ist","sind"],"sein: ich bin."],
["Du ___ Schweizer.","bist",["bin","ist","seid"],"sein: du bist."],
["Eliseo ___ Schweizer.","ist",["bist","sind","seid"],"sein: er ist."],
["Ihr ___ aus Italien.","seid",["sind","seit","ist"],"sein: ihr seid (not «seit», that means «since»)."],
["Du ___ gut Deutsch.","sprichst",["sprechst","spricht","sprechen"],"sprechen: du sprichst (e → i)."],
["Ich wohne ___ der Schweiz.","in",["aus","nach","im"],"wohnen in + der Schweiz (Dativ)."],
["Ich komme ___ Japan.","aus",["in","von","auf"],"kommen aus + country."],
["Ich komme ___ Schweiz.","aus der",["aus","aus die","von"],"die Schweiz → aus der Schweiz."],
["___ heißen Sie?","Wie",["Wo","Was","Wer"],"wie = how → «What is your name?» is «Wie heißen Sie?»."],
["___ wohnen Sie?","Wo",["Wer","Woher","Was"],"wo = where (location)."],
["___ kommen Sie? – Aus Japan.","Woher",["Wo","Wohin","Wie"],"woher = where from."],
["Formal goodbye:","Auf Wiedersehen",["Tschüss","Hallo","Bis bald"],"Auf Wiedersehen is formal."],
["On the phone you say goodbye with:","Auf Wiederhören",["Auf Wiedersehen","Gute Nacht","Hallo"],"hören = to hear."],
["Ich komme ___ aus China.","nicht",["kein","nein","no"],"Negation of a verb/phrase: nicht."],
["How do you ask someone to spell a word?","Wie schreibt man das?",["Wie heißt das?","Was bedeutet das?","Wo ist das?"],"schreiben = to write."]],
read:{title:"Zwei Nachrichten",text:"Hallo! Ich heiße Lena Berger. Ich komme aus Österreich, aus Wien, und wohne jetzt in Zürich. Ich spreche Deutsch, Englisch und ein bisschen Spanisch. Ich bin Lehrerin. Und du? Woher kommst du?\n\nGuten Tag, Frau Tanaka. Mein Name ist Thomas Weber. Ich bin Ihr Deutschlehrer. Der Kurs ist am Montag und am Mittwoch um 18 Uhr, Raum 12. Bis Montag! Mit freundlichen Grüßen\nThomas Weber",
qs:[["Where is Lena from?","From Vienna, Austria",["From Zurich","From Berlin","From Spain"]],["Which languages does Lena speak?","German, English and a little Spanish",["Only German","German and French","English and Japanese"]],["Who is Thomas Weber?","The German teacher",["A student","Lena's husband","A doctor"]],["When is the course?","Monday and Wednesday at 6 pm",["Tuesday at 8","Every day","Saturday morning"]]]},
listen:[["Guten Tag, ich heiße Momoko.","Hello, my name is Momoko."],["Woher kommen Sie?","Where are you from?"],["Ich komme aus Japan und wohne in der Schweiz.","I come from Japan and live in Switzerland."],["Wie geht es Ihnen?","How are you?"],["Können Sie das bitte buchstabieren?","Can you spell that, please?"],["Ich spreche ein bisschen Deutsch.","I speak a little German."]],
dialog:{text:"– Guten Tag, ich bin Peter Huber.\n– Guten Tag, Herr Huber. Ich heiße Momoko Tanaka.\n– Woher kommen Sie, Frau Tanaka?\n– Ich komme aus Japan, aus Tokio. Und Sie?\n– Ich bin Schweizer, aus Bern. Wohnen Sie schon lange in der Schweiz?\n– Nein, erst ein Jahr. Ich lerne Deutsch.",
qs:[["Where is Momoko from?","From Tokyo, Japan",["From Bern","From Osaka","From Zurich"]],["Where is Mr Huber from?","From Bern, Switzerland",["From Germany","From Tokyo","From Austria"]],["How long has Momoko lived in Switzerland?","One year",["Ten years","Since childhood","Two months"]]]},
write:{p:"Write a short introduction (4–5 sentences): greeting, name, where you are from, where you live, which languages you speak, goodbye.",req:[["Greeting",/\b(hallo|guten tag|guten morgen|guten abend)\b/i],["Name",/\b(ich heiße|mein name ist|ich bin)\b/i],["Origin",/\b(ich komme aus|aus japan|aus tokio)\b/i],["Home",/\b(ich wohne in|in der schweiz)\b/i],["Language",/\b(ich spreche|deutsch|englisch|japanisch)\b/i],["Goodbye",/\b(tschüs+|bis (bald|morgen|später|dann)|auf wiedersehen|(viele|liebe|herzliche|freundliche|beste) grüße|(mit )?(freundlichen|herzlichen|besten) grüßen)\b/i]],m:"Hallo! Ich heiße Momoko. Ich komme aus Japan, aus Tokio. Ich wohne jetzt in der Schweiz. Ich spreche Japanisch, Englisch und ein bisschen Deutsch. Bis bald!"},
speak:{p:"Exam task (Sprechen Teil 1): Introduce yourself with name, age, country, home town, languages, job or activity. Then spell your surname and say your phone number.",cues:["Ich heiße … / Mein Name ist …","Ich komme aus …, ich wohne in …","Ich spreche …","Ich bin … Jahre alt / Ich bin verheiratet","Buchstabieren: T-A-N-A-K-A","Meine Telefonnummer ist …"],m:"Guten Tag. Ich heiße Momoko Tanaka. Ich bin 34 Jahre alt. Ich komme aus Japan, aus Tokio, und ich wohne in der Schweiz. Ich spreche Japanisch, Englisch und ein bisschen Deutsch. Ich bin Grafikerin und verheiratet. Mein Name: T-A-N-A-K-A. Meine Telefonnummer ist null sieben neun, drei vier fünf, sechs sieben, acht neun."}},

/* ================= LESSON 2 ================= */
{id:2,title:"Zahlen, Alter und Formulare",sub:"Numbers, age, phone numbers, jobs, filling in forms",
goals:["numbers up to 1000, phone numbers, prices","say your age and ask about it (haben)","talk about your job and workplace","fill in a form (exam task: Schreiben Teil 1)"],
grammar:`
<h3>1. Numbers 0–20</h3>
<table><tr><td>0 null</td><td>1 eins</td><td>2 zwei</td><td>3 drei</td><td>4 vier</td><td>5 fünf</td><td>6 sechs</td></tr>
<tr><td>7 sieben</td><td>8 acht</td><td>9 neun</td><td>10 zehn</td><td>11 elf</td><td>12 zwölf</td><td>13 dreizehn</td></tr>
<tr><td>14 vierzehn</td><td>15 fünfzehn</td><td>16 sechzehn</td><td>17 siebzehn</td><td>18 achtzehn</td><td>19 neunzehn</td><td>20 zwanzig</td></tr></table>
<p>Note: 16 <b>sech</b>zehn (no s), 17 <b>sieb</b>zehn (no en).</p>
<h3>2. Numbers 21–1000</h3>
<table><tr><td>20 zwanzig</td><td>30 dreißig</td><td>40 vierzig</td><td>50 fünfzig</td><td>60 sechzig</td></tr>
<tr><td>70 siebzig</td><td>80 achtzig</td><td>90 neunzig</td><td>100 (ein)hundert</td><td>1000 (ein)tausend</td></tr></table>
<p>German says the units first: 21 = <b>ein</b>und<b>zwanzig</b> (one-and-twenty), 35 = fünfunddreißig, 99 = neunundneunzig, 101 = hunderteins, 250 = zweihundertfünfzig, 2024 = zweitausendvierundzwanzig. Years: 1990 = neunzehnhundertneunzig.</p>
<p>Phone numbers are said digit by digit or in pairs: <i>079 456 12 33 = null sieben neun, vier fünf sechs, zwölf, dreiunddreißig.</i> «zwei» is often said «zwo» on the phone to avoid confusion with «drei».</p>
<h3>3. haben (to have)</h3>
<table><tr><td>ich <b>habe</b></td><td>wir <b>haben</b></td></tr><tr><td>du <b>hast</b></td><td>ihr <b>habt</b></td></tr><tr><td>er/sie/es <b>hat</b></td><td>sie/Sie <b>haben</b></td></tr></table>
<p>Age uses <b>sein</b> in German: <i>Wie alt sind Sie? – Ich bin 32 Jahre alt. / Ich bin 32.</i> <i>haben</i> is used for: <i>Ich habe Zeit / Hunger / Durst / eine Frage / zwei Kinder.</i></p>
<h3>4. Jobs</h3>
<p><i>Was sind Sie von Beruf? / Was machen Sie beruflich? – Ich bin Lehrerin. Ich arbeite als Verkäuferin. Ich arbeite bei der Migros / in einem Büro / in einer Firma. Ich bin Hausfrau. Ich bin Student. Ich suche Arbeit.</i></p>
<p>Female forms usually add <b>-in</b>: Lehrer → Lehrerin, Arzt → Ärztin, Koch → Köchin, Verkäufer → Verkäuferin. No article with jobs and nationalities after sein: <i>Ich bin Ärztin.</i></p>
<h3>5. Forms (Formular)</h3>
<p>In Schreiben Teil 1 you fill in 5 missing fields from a short text. Know these words:</p>
<table><tr><td>Vorname</td><td>first name</td><td>Familienname / Nachname / Name</td><td>surname</td></tr>
<tr><td>Geburtsdatum</td><td>date of birth (12.05.1990)</td><td>Geburtsort</td><td>place of birth</td></tr>
<tr><td>Alter</td><td>age</td><td>Geschlecht: männlich / weiblich</td><td>sex: male / female</td></tr>
<tr><td>Staatsangehörigkeit / Nationalität</td><td>nationality (japanisch)</td><td>Familienstand: ledig / verheiratet</td><td>marital status</td></tr>
<tr><td>Adresse / Straße, Hausnummer</td><td>address</td><td>Postleitzahl (PLZ), Ort / Wohnort</td><td>postcode, town</td></tr>
<tr><td>Telefon / Handy</td><td>phone</td><td>E-Mail</td><td>email (@ = «at», . = «Punkt»)</td></tr>
<tr><td>Beruf</td><td>job</td><td>Unterschrift</td><td>signature</td></tr>
<tr><td>Datum</td><td>date</td><td>Abfahrt / Ankunft, Anzahl Personen</td><td>departure / arrival, number of people</td></tr></table>
<h3>6. Articles and negation preview: ein / eine, kein / keine</h3>
<p><i>Ich habe eine Frage. Ich habe einen Bruder. Ich habe keine Kinder. Ich habe kein Auto.</i> (Full rules in Lesson 3.)</p>`,
vocab:[["null","zero"],["eins","one"],["zwei","two"],["drei","three"],["vier","four"],["fünf","five"],["sechs","six"],["sieben","seven"],["acht","eight"],["neun","nine"],["zehn","ten"],["elf","eleven"],["zwölf","twelve"],["dreizehn","thirteen"],["vierzehn","fourteen"],["fünfzehn","fifteen"],["sechzehn","sixteen"],["siebzehn","seventeen"],["achtzehn","eighteen"],["neunzehn","nineteen"],["zwanzig","twenty"],["einundzwanzig","twenty-one"],["dreißig","thirty"],["vierzig","forty"],["fünfzig","fifty"],["sechzig","sixty"],["siebzig","seventy"],["achtzig","eighty"],["neunzig","ninety"],["hundert","hundred"],["tausend","thousand"],["die Zahl","number (figure)"],["die Nummer","number (phone, house)"],["das Alter","age"],["Wie alt sind Sie?","how old are you?"],["Ich bin … Jahre alt.","I am … years old."],["das Jahr, -e","year"],["das Geburtsdatum","date of birth"],["der Geburtsort","place of birth"],["geboren","born"],["die Adresse","address"],["die Straße, -n","street"],["die Hausnummer","house number"],["die Postleitzahl (PLZ)","postcode"],["der Wohnort","place of residence"],["die Telefonnummer","phone number"],["das Handy, -s","mobile phone"],["die E-Mail","email"],["die Unterschrift","signature"],["unterschreiben","to sign"],["das Formular","form"],["ausfüllen","to fill in"],["ankreuzen","to tick"],["die Staatsangehörigkeit","nationality"],["der Familienstand","marital status"],["ledig","single"],["verheiratet","married"],["männlich","male"],["weiblich","female"],["der Beruf","profession, job"],["Was sind Sie von Beruf?","what is your job?"],["arbeiten","to work"],["die Arbeit","work"],["der Lehrer / die Lehrerin","teacher"],["der Arzt / die Ärztin","doctor"],["der Verkäufer / die Verkäuferin","shop assistant"],["der Koch / die Köchin","cook"],["der Kellner / die Kellnerin","waiter / waitress"],["der Ingenieur / die Ingenieurin","engineer"],["der Student / die Studentin","student"],["die Hausfrau / der Hausmann","housewife / househusband"],["der Chef / die Chefin","boss"],["die Firma","company"],["das Büro","office"],["die Schule","school"],["das Krankenhaus","hospital"],["das Geschäft","shop, business"],["arbeitslos","unemployed"],["der Kurs","course"],["haben","to have"],["Ich habe Zeit.","I have time."],["Ich habe eine Frage.","I have a question."],["Ich habe Hunger / Durst.","I'm hungry / thirsty."],["das Kind, -er","child"],["die Kinder","children"],["die Anmeldung","registration"],["sich anmelden","to register"],["der Termin, -e","appointment"],["der Preis, -e","price"],["kosten","to cost"],["der Euro / der Franken","euro / Swiss franc"],["die Anzahl","number (quantity)"],["die Person","person"]],
ex:[["Ich ___ 32 Jahre alt.","bin",["habe","bist","ist"],"Age: sein, not haben."],
["Wie alt ___ du?","bist",["hast","bist du","seid"],"du bist."],
["Wir ___ zwei Kinder.","haben",["habt","hat","sind"],"wir haben."],
["Sie (she) ___ eine Frage.","hat",["hast","habe","haben"],"sie (she) hat."],
["___ Sie Zeit?","Haben",["Habt","Hast","Hat"],"Sie → haben."],
["«17» is…","siebzehn",["siebenzehn","siebzig","siebenzig"],"siebzehn (no -en)."],
["«16» is…","sechzehn",["sechszehn","sechzig","sechsehn"],"sechzehn (no s)."],
["«21» is…","einundzwanzig",["zwanzigeins","einzwanzig","zwanzigundeins"],"units first: ein-und-zwanzig."],
["«45» is…","fünfundvierzig",["vierzigfünf","vierundfünfzig","fünfvierzig"],"45 = fünf-und-vierzig; vierundfünfzig = 54."],
["«100» is…","hundert",["hundred","tausend","zehnzig"],"hundert; 1000 = tausend."],
["«1990» as a year is…","neunzehnhundertneunzig",["eintausendneunhundertneunzig","neunzehnneunzig","neunzehntausendneunzig"],"years before 2000: ...hundert..."],
["Ich arbeite ___ Lehrerin.","als",["wie","für","bei"],"arbeiten als + job."],
["Ich arbeite ___ der Migros.","bei",["an","auf","aus"],"bei + company."],
["Ich bin ___. (female doctor)","Ärztin",["Arzt","eine Ärztin","Ärzte"],"Female form -in; no article with jobs after sein."],
["Was ___ Sie von Beruf?","sind",["heißen","haben","arbeiten"],"Was sind Sie von Beruf?"],
["«Date of birth» on a form is…","Geburtsdatum",["Geburtsort","Alter","Datum"],"Geburt = birth, Datum = date."],
["«Postcode» on a form is…","Postleitzahl",["Hausnummer","Wohnort","Telefonnummer"],"Postleitzahl = PLZ."],
["Marital status «married» is…","verheiratet",["ledig","geboren","weiblich"],"ledig = single."],
["Ich habe ___ Kinder.","keine",["nicht","kein","nein"],"Negating a noun: keine (plural)."],
["Bitte ___ Sie das Formular aus.","füllen",["fühlen","fallen","finden"],"ausfüllen = to fill in."]],
read:{title:"Anmeldung Deutschkurs",text:"SPRACHSCHULE LINGUA ST. GALLEN – Anmeldeformular\nFamilienname: Tanaka   Vorname: Momoko\nGeburtsdatum: 03.04.1992   Geburtsort: Tokio\nStaatsangehörigkeit: japanisch   Familienstand: verheiratet\nStraße, Hausnummer: Bahnhofstraße 5   PLZ, Ort: 9000 St. Gallen\nTelefon: 079 345 67 89   E-Mail: momoko.t@mail.ch\nKurs: Deutsch A1, Dienstag und Donnerstag, 18.00–19.30 Uhr   Preis: 480 Franken\nDatum: 10.01.2027   Unterschrift: M. Tanaka",
qs:[["Where was Momoko born?","In Tokyo",["In St. Gallen","In Osaka","In Zurich"]],["What is the postcode?","9000",["9400","8000","3000"]],["When is the course?","Tuesday and Thursday, 18.00–19.30",["Monday and Wednesday","Saturday morning","Every evening"]],["How much does the course cost?","480 francs",["480 euros","180 francs","Free"]]]},
listen:[["Ich bin zweiunddreißig Jahre alt.","I am 32 years old."],["Meine Telefonnummer ist null sieben neun, zwei drei vier, fünf sechs, sieben acht.","My phone number is 079 234 56 78."],["Ich wohne in der Bahnhofstraße fünfzehn.","I live at Bahnhofstrasse 15."],["Ich bin Verkäuferin und arbeite bei Coop.","I'm a shop assistant and work at Coop."],["Wie alt ist Ihr Mann?","How old is your husband?"],["Der Kurs kostet dreihundert Franken.","The course costs 300 francs."],["Die Postleitzahl ist neun null null null.","The postcode is 9000."]],
dialog:{text:"– Guten Tag, ich möchte mich für den Deutschkurs anmelden.\n– Gern. Wie heißen Sie?\n– Momoko Tanaka.\n– Wie alt sind Sie?\n– Vierunddreißig.\n– Was sind Sie von Beruf?\n– Ich bin Grafikerin, aber ich arbeite im Moment nicht.\n– Und Ihre Telefonnummer?\n– Null sieben sechs, vier fünf sechs, zwölf, dreiunddreißig.",
qs:[["How old is Momoko in this dialogue?","34",["24","43","33"]],["What is her job?","Graphic designer",["Teacher","Doctor","Shop assistant"]],["What is her phone number?","076 456 12 33",["079 456 12 33","076 465 12 33","076 456 21 33"]]]},
write:{p:"Exam task (Schreiben Teil 1): Your friend Anna Keller (born 12.08.1988 in Bern, Swiss, lives at Rosenweg 3, 8001 Zürich, phone 044 123 45 67) wants to register for a Pilates course. Fill in the form, one item per line: Familienname, Vorname, Geburtsdatum, Geburtsort, Nationalität, Straße, PLZ/Ort, Telefon.",req:[["Familienname",/familienname:?\s*keller/i],["Vorname",/vorname:?\s*anna/i],["Geburtsdatum",/geburtsdatum:?\s*12\.?\s*(0?8\.?|august)\s*1988/i],["Geburtsort",/geburtsort:?\s*bern/i],["Nationalität",/(nationalität|staatsangehörigkeit):?\s*(schweiz|schweizerin|schweizerisch)/i],["Straße",/(stra(ß|ss)e\b[^\n]*?|adresse:?\s*)rosenweg\s*3/i],["PLZ/Ort",/8001\s*z(ü|ue)rich/i],["Telefon",/(telefon(nummer)?|tel\.|handy):?\s*044\s*123\s*45\s*67/i]],m:"Familienname: Keller\nVorname: Anna\nGeburtsdatum: 12.08.1988\nGeburtsort: Bern\nNationalität: Schweizerin\nStraße: Rosenweg 3\nPLZ/Ort: 8001 Zürich\nTelefon: 044 123 45 67"},
speak:{p:"You are registering at a language school. Answer: Wie heißen Sie? Wie alt sind Sie? Woher kommen Sie? Wo wohnen Sie? Was sind Sie von Beruf? Wie ist Ihre Telefonnummer? Then spell your first name.",cues:["Ich heiße …","Ich bin … Jahre alt","Ich komme aus … / Ich wohne in …","Ich bin … von Beruf / Ich arbeite …","Meine Nummer ist …","M-O-M-O-K-O"],m:"Ich heiße Momoko Tanaka. Ich bin vierunddreißig Jahre alt. Ich komme aus Japan und wohne in St. Gallen. Ich bin Grafikerin. Meine Telefonnummer ist null sieben neun, drei vier fünf, sechs sieben, acht neun. Mein Vorname: M-O-M-O-K-O."}},

/* ================= LESSON 3 ================= */
{id:3,title:"Artikel, Nomen und Dinge",sub:"der / die / das, ein / kein, plural, things around you",
goals:["use the three genders and articles correctly","build the plural","negate with kein / nicht","name everyday objects and ask what something is"],
grammar:`
<h3>1. Three genders</h3>
<p>Every German noun has a gender: <b>der</b> (masculine), <b>die</b> (feminine), <b>das</b> (neuter). Always learn the article with the noun. Nouns are written with a capital letter.</p>
<table><tr><th>Usually der</th><th>Usually die</th><th>Usually das</th></tr>
<tr><td>male persons (der Mann, der Lehrer); days, months, seasons (der Montag, der Mai); -ig, -ling (der Honig, der Frühling); -er for people and devices from verbs (der Lehrer, der Computer), but: das Fenster, das Zimmer</td><td>female persons (die Frau, die Lehrerin); -e (die Lampe, die Straße), -ung, -heit, -keit, -ion, -ie (die Wohnung, die Information)</td><td>diminutives -chen, -lein (das Mädchen); -um, -ment (das Zentrum, das Dokument); infinitives as nouns (das Essen)</td></tr></table>
<h3>2. Definite and indefinite article, negation</h3>
<table><tr><th></th><th>der (m.)</th><th>die (f.)</th><th>das (n.)</th><th>Plural</th></tr>
<tr><td>the</td><td>der Tisch</td><td>die Lampe</td><td>das Buch</td><td>die Tische / Lampen / Bücher</td></tr>
<tr><td>a / an</td><td>ein Tisch</td><td>eine Lampe</td><td>ein Buch</td><td>– Tische (no article)</td></tr>
<tr><td>no / not a</td><td>kein Tisch</td><td>keine Lampe</td><td>kein Buch</td><td>keine Tische</td></tr></table><p><i>Es gibt</i> + accusative: <i>Es gibt einen Tisch. Es gibt keinen Fernseher.</i></p>
<p><b>kein</b> negates a noun with ein or without article: <i>Das ist kein Tisch. Ich habe keine Zeit. Ich habe keine Kinder.</i><br><b>nicht</b> negates everything else (verbs, adjectives, nouns with definite article, names): <i>Ich arbeite nicht. Das ist nicht gut. Das ist nicht mein Buch.</i></p>
<h3>3. Plural</h3>
<p>There are several plural endings; learn them with each noun. Common patterns:</p>
<table><tr><td>-e (often with umlaut)</td><td>der Tisch → die Tische, der Stuhl → die Stühle</td></tr>
<tr><td>-(e)n</td><td>die Lampe → die Lampen, die Frau → die Frauen (most feminine nouns)</td></tr>
<tr><td>-er (often with umlaut)</td><td>das Kind → die Kinder, das Buch → die Bücher, der Mann → die Männer</td></tr>
<tr><td>-s</td><td>das Auto → die Autos, das Handy → die Handys, das Büro → die Büros</td></tr>
<tr><td>– (no ending, sometimes umlaut)</td><td>der Lehrer → die Lehrer, das Fenster → die Fenster, der Apfel → die Äpfel</td></tr></table>
<p>The plural article is always <b>die</b> (nominative and accusative).</p>
<h3>4. Asking about things</h3>
<p><i>Was ist das? – Das ist ein Stuhl. / Das ist eine Lampe. / Das sind Bücher.</i><br><i>Ist das ein Handy? – Ja. / Nein, das ist kein Handy, das ist eine Kamera.</i><br><i>Wer ist das? – Das ist Herr Huber.</i></p>
<h3>5. Pronouns for things</h3>
<p>Use er/sie/es according to the gender, not the meaning: <i>Der Tisch ist neu. <b>Er</b> ist groß. Die Lampe ist alt. <b>Sie</b> ist schön. Das Auto ist teuer. <b>Es</b> ist rot.</i></p>
<h3>6. Useful adjectives (after sein, no ending)</h3>
<p><i>groß – klein, neu – alt, gut – schlecht, schön, teuer – billig, richtig – falsch, kaputt, modern, praktisch.</i> <i>Das Handy ist neu und sehr gut.</i></p>`,
vocab:[["der Tisch, -e","table"],["der Stuhl, ¨-e","chair"],["das Bett, -en","bed"],["die Lampe, -n","lamp"],["der Schrank, ¨-e","wardrobe, cupboard"],["das Sofa, -s","sofa"],["das Fenster, -","window"],["die Tür, -en","door"],["das Buch, ¨-er","book"],["das Heft, -e","exercise book"],["der Kugelschreiber, -","pen"],["der Bleistift, -e","pencil"],["das Papier","paper"],["die Tasche, -n","bag"],["der Schlüssel, -","key"],["das Handy, -s","mobile phone"],["der Computer, -","computer"],["der Drucker, -","printer"],["die Uhr, -en","clock, watch"],["die Brille, -n","glasses"],["das Auto, -s","car"],["das Fahrrad, ¨-er","bicycle"],["das Foto, -s","photo"],["die Zeitung, -en","newspaper"],["der Brief, -e","letter"],["die Flasche, -n","bottle"],["das Glas, ¨-er","glass"],["die Tasse, -n","cup"],["der Teller, -","plate"],["die Wohnung, -en","flat, apartment"],["das Zimmer, -","room"],["das Haus, ¨-er","house"],["die Küche, -n","kitchen"],["das Bad, ¨-er","bathroom"],["die Sache, -n","thing"],["das Ding, -e","thing, object"],["die Frau, -en","woman"],["der Mann, ¨-er","man"],["das Kind, -er","child"],["das Mädchen, -","girl"],["der Junge, -n","boy"],["der Hund, -e","dog"],["die Katze, -n","cat"],["der Baum, ¨-e","tree"],["die Blume, -n","flower"],["der Apfel, ¨-","apple"],["das Licht","light"],["die Maschine, -n","machine"],["die Waschmaschine","washing machine"],["der Kühlschrank","fridge"],["Was ist das?","what is that?"],["Wer ist das?","who is that?"],["Das ist …","this is …"],["Das sind …","these are …"],["kein / keine","no, not a"],["groß","big, tall"],["klein","small"],["neu","new"],["alt","old"],["gut","good"],["schlecht","bad"],["schön","beautiful, nice"],["teuer","expensive"],["billig","cheap"],["richtig","right, correct"],["falsch","wrong"],["kaputt","broken"],["praktisch","practical"],["modern","modern"],["sehr","very"],["hier","here"],["dort / da","there"],["es gibt","there is / there are"]],
ex:[["___ Tisch ist neu.","Der",["Die","Das","Den"],"der Tisch (m.)."],
["___ Lampe ist schön.","Die",["Der","Das","Ein"],"die Lampe (f.: -e)."],
["___ Buch ist gut.","Das",["Der","Die","Dem"],"das Buch (n.)."],
["Das ist ___ Stuhl.","ein",["eine","einen","einer"],"m. → ein."],
["Das ist ___ Tasche.","eine",["ein","einen","einer"],"f. → eine."],
["Das ist ___ Auto.","ein",["eine","einer","die"],"n. → ein."],
["Das ist ___ Handy, das ist eine Kamera.","kein",["nicht","keine","nein"],"Negating ein + noun → kein."],
["Ich habe ___ Zeit.","keine",["kein","nicht","keinen"],"die Zeit → keine."],
["Das ist ___ mein Buch.","nicht",["kein","keine","nein"],"With a possessive → nicht."],
["Plural of «der Tisch»:","die Tische",["die Tischen","die Tischs","der Tische"],"-e."],
["Plural of «die Lampe»:","die Lampen",["die Lampes","die Lampe","die Lämpen"],"-n."],
["Plural of «das Kind»:","die Kinder",["die Kinds","die Kinde","die Kindern"],"-er."],
["Plural of «das Auto»:","die Autos",["die Auten","die Autoe","die Autos die"],"-s."],
["Plural of «das Buch»:","die Bücher",["die Buchs","die Buche","die Bücheren"],"umlaut + -er."],
["Plural of «der Lehrer»:","die Lehrer",["die Lehrers","die Lehreren","die Lehrere"],"no ending."],
["Die Wohnung ist groß. ___ ist auch hell.","Sie",["Er","Es","Ihr"],"die Wohnung → sie."],
["Das Handy ist neu. ___ ist teuer.","Es",["Er","Sie","Ich"],"das Handy → es."],
["Der Computer ist alt. ___ ist kaputt.","Er",["Es","Sie","Wir"],"der Computer → er."],
["___ ist das? – Das ist Frau Müller.","Wer",["Was","Wie","Wo"],"wer = who."],
["Was ist das? – Das ___ Bücher.","sind",["ist","sein","bin"],"Plural → sind."],
["«die Zeitung» is feminine because of…","the ending -ung",["the ending -g","the meaning","the ending -ei"],"-ung, -heit, -keit, -ion → die."]],
read:{title:"Kleinanzeigen: Zu verkaufen",text:"ZU VERKAUFEN\n1) Sofa, blau, 2 Jahre alt, sehr gut, 150 Franken. Tel. 079 111 22 33\n2) Fahrrad für Kinder, rot, neu, 80 Franken. Abholen in St. Gallen.\n3) Kühlschrank, klein, kaputt, gratis! Nur abholen.\n4) Bücher: 20 Deutschbücher (A1–B1), zusammen 30 Franken. E-Mail: lisa@mail.ch\n5) Computer, 5 Jahre alt, funktioniert gut, 100 Franken.",
qs:[["How much is the sofa?","150 francs",["80 francs","30 francs","Free"]],["Which item is free?","The fridge",["The bicycle","The books","The computer"]],["What is wrong with the fridge?","It is broken",["It is too big","It is old","Nothing"]],["How do you contact the seller of the books?","By email",["By phone","At the shop","In person"]]]},
listen:[["Was ist das? Das ist ein Schlüssel.","What is that? That is a key."],["Ich habe ein Buch und zwei Hefte.","I have a book and two exercise books."],["Das ist kein Handy, das ist eine Kamera.","That's not a phone, that's a camera."],["Die Wohnung ist klein, aber schön.","The flat is small but nice."],["Wo ist meine Brille?","Where are my glasses?"],["Der Computer ist kaputt.","The computer is broken."]],
dialog:{text:"– Entschuldigung, ist das Ihre Tasche?\n– Nein, meine Tasche ist schwarz. Das ist die Tasche von Frau Keller.\n– Und der Schlüssel hier?\n– Ja, der Schlüssel ist meiner, danke!\n– Bitte. Und das Handy?\n– Das ist nicht mein Handy. Mein Handy ist alt und kaputt.",
qs:[["Whose bag is it?","Mrs Keller's",["The speaker's","Nobody's","Mr Huber's"]],["What colour is the speaker's bag?","Black",["Red","White","Blue"]],["What is the speaker's phone like?","Old and broken",["New","Black","Expensive"]]]},
write:{p:"Describe what is in your bag or on your desk (5 sentences). Use ein / eine, kein / keine, a plural and «es gibt».",req:[["es gibt or Das ist",/\b(es gibt|gibt es|das ist|das sind)\b/i],["ein / eine",/\b(ein|eine|einen)\b/i],["kein / keine",/\bkein(e|en|em|er)?\b/i],["plural",/(bücher|hefte|schlüssel|stifte|sachen|fotos|flaschen|kinder|handys|brillen|tassen|gläser|schreiber|lampen|tische|stühle|taschen|bilder|uhren|zettel)\b/i],["adjective",/\b(neu|alt|groß|klein|schön|kaputt|teuer|teur|billig|gut|praktisch|modern)(e[nmrs]?)?\b/i]],m:"In meiner Tasche gibt es ein Handy und einen Schlüssel. Das ist mein Portemonnaie. Es gibt auch zwei Bücher und ein Heft. Ich habe keinen Computer in der Tasche. Mein Handy ist neu, aber die Tasche ist alt."},
speak:{p:"Point at five things in the room and say what they are with the right article. Then say what there is and is not in the room.",cues:["Das ist ein / eine …","Das sind …","Es gibt … / Es gibt keinen (m.) / kein (n.) / keine (f., pl.) …","Der / die / das … ist …"],m:"Das ist ein Tisch. Das ist eine Lampe. Das ist mein Handy. Das sind meine Bücher. Im Zimmer gibt es zwei Fenster und eine Tür. Es gibt einen Computer, aber es gibt keinen Fernseher. Der Tisch ist groß und neu."}},

/* ================= LESSON 4 ================= */
{id:4,title:"Familie und Personen",sub:"Family, possessive articles, describing people",
goals:["talk about your family","use possessive articles (mein, dein, sein, ihr, Ihr…)","describe people: appearance and character","ask Wie ist …? and Wer ist …?"],
grammar:`
<h3>1. Possessive articles</h3>
<table><tr><th>owner</th><th>m. / n.</th><th>f. / plural</th></tr>
<tr><td>ich</td><td><b>mein</b> Mann / mein Kind</td><td><b>meine</b> Frau / meine Kinder</td></tr>
<tr><td>du</td><td>dein</td><td>deine</td></tr>
<tr><td>er / es</td><td>sein</td><td>seine</td></tr>
<tr><td>sie (she)</td><td>ihr</td><td>ihre</td></tr>
<tr><td>wir</td><td>unser</td><td>unsere</td></tr>
<tr><td>ihr (you pl.)</td><td>euer</td><td>eure</td></tr>
<tr><td>sie (they)</td><td>ihr</td><td>ihre</td></tr>
<tr><td>Sie (formal)</td><td>Ihr</td><td>Ihre</td></tr></table>
<p>The ending follows the noun that is owned (like ein/eine): <i>mein Bruder (der), meine Schwester (die), mein Kind (das), meine Eltern (plural)</i>. <i>sein</i> = his, <i>ihr</i> = her / their, <i>Ihr</i> (capital) = your (formal).</p>
<p><i>Das ist Eliseo, mein Mann. Seine Eltern wohnen in Bern. Ihre Schwester heißt Yuki.</i></p>
<h3>2. Family words</h3>
<p><i>die Familie, die Eltern (Mutter + Vater), die Kinder (Sohn, Tochter), die Geschwister (Bruder, Schwester), die Großeltern (Oma/Großmutter, Opa/Großvater), der Onkel, die Tante, der Cousin, die Cousine, der Schwiegervater, die Schwiegermutter, der Enkel, die Enkelin.</i></p>
<p><i>Haben Sie Geschwister? – Ja, ich habe einen Bruder und eine Schwester. / Nein, ich bin Einzelkind. Haben Sie Kinder? – Nein, noch nicht.</i></p>
<h3>3. Describing people</h3>
<p>Adjectives after <b>sein</b> have no ending: <i>Mein Mann ist groß und sportlich. Meine Mutter ist nett.</i></p>
<table><tr><th>appearance</th><th>character</th></tr>
<tr><td>groß – klein, schlank – dick, jung – alt, hübsch, sportlich; die Haare: lang / kurz / blond / braun / schwarz / grau; die Augen: blau / braun / grün; er trägt eine Brille, er hat einen Bart</td><td>nett, freundlich, lustig, ruhig, ernst, intelligent, fleißig, faul, schüchtern, sympathisch</td></tr></table>
<p><i>Wie ist dein Mann? – Er ist groß, hat kurze braune Haare und ist sehr nett. Wie alt ist er? – Er ist 36.</i></p>
<h3>4. Accusative preview: einen</h3>
<p>After <i>haben</i> masculine nouns take <b>einen / keinen / meinen</b>: <i>Ich habe einen Bruder. Er hat einen Bart. Ich habe keinen Hund.</i> Feminine, neuter and plural stay the same: <i>Ich habe eine Schwester, ein Kind, zwei Katzen.</i> (Full accusative in Lesson 6.)</p>
<h3>5. Verbs with vowel change: sprechen, lesen, sehen, fahren, essen, schlafen</h3>
<table><tr><th></th><th>e → i(e)</th><th></th><th>a → ä</th></tr>
<tr><td>ich</td><td>spreche, lese, sehe, esse</td><td></td><td>fahre, schlafe</td></tr>
<tr><td>du</td><td>sprichst, liest, siehst, isst</td><td></td><td>fährst, schläfst</td></tr>
<tr><td>er/sie/es</td><td>spricht, liest, sieht, isst</td><td></td><td>fährt, schläft</td></tr>
<tr><td>wir/ihr/sie</td><td>sprechen, sprecht, sprechen …</td><td></td><td>fahren, fahrt, fahren</td></tr></table>
<p>Only <b>du</b> and <b>er/sie/es</b> change. <i>Mein Mann spricht Deutsch und Italienisch. Meine Schwester liest viel.</i></p>`,
vocab:[["die Familie, -n","family"],["die Eltern (Pl.)","parents"],["die Mutter, ¨-","mother"],["der Vater, ¨-","father"],["die Mama / der Papa","mum / dad"],["das Kind, -er","child"],["der Sohn, ¨-e","son"],["die Tochter, ¨-","daughter"],["die Geschwister (Pl.)","siblings"],["der Bruder, ¨-","brother"],["die Schwester, -n","sister"],["die Großeltern (Pl.)","grandparents"],["die Großmutter / die Oma","grandmother / grandma"],["der Großvater / der Opa","grandfather / grandpa"],["der Onkel, -","uncle"],["die Tante, -n","aunt"],["der Cousin / die Cousine","cousin (m/f)"],["der Ehemann / die Ehefrau","husband / wife"],["mein Mann / meine Frau","my husband / my wife"],["die Schwiegereltern","parents-in-law"],["das Baby, -s","baby"],["das Einzelkind","only child"],["der Partner / die Partnerin","partner"],["die Leute (Pl.)","people"],["der Nachbar / die Nachbarin","neighbour"],["der Kollege / die Kollegin","colleague"],["der Bekannte / die Bekannte","acquaintance"],["Haben Sie Geschwister?","do you have siblings?"],["Haben Sie Kinder?","do you have children?"],["noch nicht","not yet"],["mein / meine","my"],["dein / deine","your (informal)"],["sein / seine","his"],["ihr / ihre","her / their"],["Ihr / Ihre","your (formal)"],["unser / unsere","our"],["Wie ist …?","what is … like?"],["das Haar, -e","hair"],["das Auge, -n","eye"],["die Brille, -n","glasses"],["der Bart","beard"],["schlank","slim"],["dick","fat"],["jung","young"],["hübsch","pretty"],["sportlich","sporty"],["lang","long"],["kurz","short"],["blond","blond"],["braun","brown"],["schwarz","black"],["grau","grey"],["blau","blue"],["grün","green"],["nett","nice, kind"],["freundlich","friendly"],["lustig","funny"],["ruhig","quiet, calm"],["ernst","serious"],["intelligent","intelligent"],["fleißig","hard-working"],["faul","lazy"],["schüchtern","shy"],["sympathisch","likeable"],["müde","tired"],["glücklich","happy"],["traurig","sad"],["lesen (liest)","to read"],["sehen (sieht)","to see"],["fahren (fährt)","to drive, go"],["essen (isst)","to eat"],["schlafen (schläft)","to sleep"],["tragen (trägt)","to wear, carry"],["lieben","to love"],["mögen (mag)","to like"],["zusammen","together"],["allein","alone"]],
ex:[["Das ist ___ Mann. (my)","mein",["meine","meinen","meiner"],"der Mann → mein."],
["Das ist ___ Schwester. (my)","meine",["mein","meinen","meiner"],"die Schwester → meine."],
["___ Eltern wohnen in Tokio. (my)","Meine",["Mein","Meinen","Meiner"],"plural → meine."],
["Eliseo und ___ Bruder sind Schweizer. (his)","sein",["seine","ihr","seinen"],"his = sein; der Bruder → sein."],
["Momoko und ___ Schwester kommen aus Japan. (her)","ihre",["ihr","seine","Ihre"],"her = ihr; die Schwester → ihre."],
["Wie heißt ___ Mann, Frau Tanaka? (your, formal)","Ihr",["ihr","dein","Ihre"],"Formal your = Ihr (capital); der Mann → Ihr."],
["Wie heißt ___ Mutter, Lisa? (your, informal)","deine",["dein","Ihre","deinen"],"die Mutter → deine."],
["Das sind ___ Kinder. (our)","unsere",["unser","unseren","euere"],"plural → unsere."],
["Ich habe ___ Bruder.","einen",["ein","eine","einem"],"haben + masculine → einen."],
["Ich habe ___ Schwester.","eine",["einen","ein","einer"],"die Schwester → eine."],
["Wir haben ___ Kinder.","keine",["kein","keinen","nicht"],"plural → keine."],
["Mein Mann ___ groß und sportlich.","ist",["hat","sind","bin"],"Adjectives after sein."],
["Meine Mutter ___ kurze graue Haare.","hat",["ist","habe","hast"],"haben + Haare."],
["Mein Bruder ___ eine Brille.","trägt",["tragt","trage","tragen"],"tragen: er trägt (a → ä)."],
["Meine Schwester ___ viel.","liest",["lest","liesst","lese"],"lesen: sie liest."],
["Mein Mann ___ Deutsch und Italienisch.","spricht",["sprecht","spreche","sprichst"],"sprechen: er spricht."],
["Du ___ nach Bern.","fährst",["fahrst","fährt","fahren"],"fahren: du fährst."],
["___ ist dein Mann? – Nett und lustig.","Wie",["Wer","Was","Wo"],"wie = what … like."],
["Hast du Geschwister? – Nein, ich bin ___.","Einzelkind",["allein","einzeln","Einzelkinder"],"Einzelkind = only child."],
["Die Eltern von meinem Mann sind meine ___.","Schwiegereltern",["Großeltern","Geschwister","Eltern"],"Schwieger- = in-law."]],
read:{title:"Meine Familie",text:"Ich heiße Daniel und bin 35 Jahre alt. Meine Familie ist nicht groß. Meine Mutter heißt Rita, sie ist 62 und arbeitet nicht mehr. Mein Vater, Georg, ist 65 und arbeitet noch als Arzt. Ich habe eine Schwester, Elena. Sie ist 30, verheiratet und hat eine Tochter, Sofia. Sofia ist drei Jahre alt. Elena ist groß, hat lange braune Haare und ist sehr lustig. Ich bin eher ruhig. Meine Großeltern wohnen in Italien. Im Sommer fahren wir alle zusammen zu ihnen.",
qs:[["How old is Daniel's mother?","62",["65","35","30"]],["What does the father do?","He is a doctor",["He is retired","He is a teacher","He is unemployed"]],["Who is Sofia?","Daniel's niece",["Daniel's sister","Daniel's daughter","Daniel's cousin"]],["What is Daniel like?","Rather quiet",["Very funny","Tall with long hair","Sporty"]],["Where do the grandparents live?","In Italy",["In Switzerland","With Daniel","In Austria"]]]},
listen:[["Meine Schwester hat lange blonde Haare.","My sister has long blond hair."],["Meine Eltern wohnen in Tokio.","My parents live in Tokyo."],["Mein Mann ist groß und sehr sportlich.","My husband is tall and very sporty."],["Haben Sie Kinder?","Do you have children?"],["Ihr Bruder ist nett und lustig.","Her brother is nice and funny."],["Unsere Großmutter ist achtzig Jahre alt.","Our grandmother is 80 years old."]],
dialog:{text:"– Wer ist das auf dem Foto?\n– Das ist meine Cousine Yuki. Sie ist 28 und studiert in Osaka.\n– Sie ist sehr hübsch! Hat sie braune Augen?\n– Nein, schwarze. Und der Mann neben ihr ist ihr Bruder Kenji.\n– Wie ist Kenji?\n– Er ist nett, aber ein bisschen schüchtern.",
qs:[["Who is Yuki?","The cousin",["The sister","The friend","The daughter"]],["What colour are Yuki's eyes?","Black",["Brown","Green","Blue"]],["What is Kenji like?","Nice but a little shy",["Funny and sporty","Serious","Tall and blond"]]]},
write:{p:"Describe your family or a person you know well (5 sentences): name, age, job, appearance, character. Use possessive articles.",req:[["Possessive + family word",/\b(mein|meine|meinen|sein|seine|ihr|ihre|unser|unsere|dein|deine)\s+(mann|frau|mutter|vater|schwester|bruder|eltern|kind|kinder|sohn|tochter|freund|freundin|oma|opa|tante|onkel|großmutter|großvater|großeltern|cousin|cousine|geschwister|kollege|kollegin|familie)\b/i],["Age",/\bjahre alt\b|\b(ist|bin)\s+\d+\b/i],["Appearance",/\b(groß|klein|schlank|dick|jung|hübsch|haare|augen|brille|bart|blond|braun|schwarz)\b/i],["Character",/\b(nett|freundlich|lustig|ruhig|ernst|intelligent|fleißig|faul|schüchtern|sympathisch|sportlich|hilfsbereit|geduldig)\b/i],["Job or activity",/\b(arbeitet|arbeite|studiert|studiere|von beruf|(ist|bin)\s+\w+(er|in|ist)\b|(ist|bin)\s+(koch|student|hausmann|hausfrau|pilot)\b|lehrer|arzt|ärztin|ingenieur)/i]],m:"Mein Mann heißt Eliseo. Er ist Schweizer und 36 Jahre alt. Er arbeitet als Ingenieur in St. Gallen. Er ist groß, hat kurze braune Haare und trägt eine Brille. Er ist sehr nett und lustig. Seine Eltern wohnen in Bern."},
speak:{p:"Exam task (Sprechen Teil 2, topic «Familie»): Ask and answer questions: Haben Sie Geschwister? Wie heißt Ihr Mann? Wie alt sind Ihre Eltern? Wo wohnt Ihre Familie? Wie ist Ihre Schwester? Then describe one family member.",cues:["Ich habe … / Ich habe keine …","Mein Mann heißt …, er ist …","Meine Eltern wohnen in …","Meine Schwester ist …, sie hat …"],m:"Ich habe eine Schwester. Sie heißt Yuki und wohnt in Tokio. Mein Mann heißt Eliseo. Er ist Schweizer und 36 Jahre alt. Meine Eltern wohnen in Japan. Mein Vater ist 65 und meine Mutter ist 63. Meine Schwester ist klein und schlank, sie hat lange schwarze Haare und ist sehr lustig."}},

/* ================= LESSON 5 ================= */
{id:5,title:"Verben, Fragen und Satzbau",sub:"Present tense, word order, W-questions, yes/no questions",
goals:["conjugate regular and important irregular verbs","put the verb in second position","ask W-questions and yes/no questions","talk about everyday activities"],
grammar:`
<h3>1. Regular verbs</h3>
<table><tr><th></th><th>machen</th><th>arbeiten (stem ends in -t/-d: extra e)</th><th>heißen (stem ends in -s/-ß/-z)</th></tr>
<tr><td>ich</td><td>mach<b>e</b></td><td>arbeit<b>e</b></td><td>heiß<b>e</b></td></tr>
<tr><td>du</td><td>mach<b>st</b></td><td>arbeit<b>est</b></td><td>heiß<b>t</b></td></tr>
<tr><td>er/sie/es</td><td>mach<b>t</b></td><td>arbeit<b>et</b></td><td>heiß<b>t</b></td></tr>
<tr><td>wir</td><td>mach<b>en</b></td><td>arbeit<b>en</b></td><td>heiß<b>en</b></td></tr>
<tr><td>ihr</td><td>mach<b>t</b></td><td>arbeit<b>et</b></td><td>heiß<b>t</b></td></tr>
<tr><td>sie/Sie</td><td>mach<b>en</b></td><td>arbeit<b>en</b></td><td>heiß<b>en</b></td></tr></table>
<h3>2. Important irregular verbs</h3>
<table><tr><th></th><th>sein</th><th>haben</th><th>werden</th><th>wissen</th><th>nehmen</th><th>geben</th><th>möchten</th></tr>
<tr><td>ich</td><td>bin</td><td>habe</td><td>werde</td><td>weiß</td><td>nehme</td><td>gebe</td><td>möchte</td></tr>
<tr><td>du</td><td>bist</td><td>hast</td><td>wirst</td><td>weißt</td><td>nimmst</td><td>gibst</td><td>möchtest</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>hat</td><td>wird</td><td>weiß</td><td>nimmt</td><td>gibt</td><td>möchte</td></tr>
<tr><td>wir</td><td>sind</td><td>haben</td><td>werden</td><td>wissen</td><td>nehmen</td><td>geben</td><td>möchten</td></tr>
<tr><td>ihr</td><td>seid</td><td>habt</td><td>werdet</td><td>wisst</td><td>nehmt</td><td>gebt</td><td>möchtet</td></tr>
<tr><td>sie/Sie</td><td>sind</td><td>haben</td><td>werden</td><td>wissen</td><td>nehmen</td><td>geben</td><td>möchten</td></tr></table>
<h3>3. Word order: the verb is always in position 2</h3>
<table><tr><th>position 1</th><th>verb (2)</th><th>rest</th></tr>
<tr><td>Ich</td><td>arbeite</td><td>heute in Zürich.</td></tr>
<tr><td>Heute</td><td>arbeite</td><td>ich in Zürich.</td></tr>
<tr><td>In Zürich</td><td>arbeite</td><td>ich heute.</td></tr></table>
<p>If you start with a time or place, the subject moves behind the verb. This is the most important rule of German sentences.</p>
<h3>4. Questions</h3>
<p><b>W-questions:</b> question word first, verb second: <i>Was machst du? Wo arbeitest du? Wann kommst du? Wer ist das? Wie heißt das? Warum lernst du Deutsch? Wie viel kostet das? Wie viele Kinder hast du? Welche Sprache sprichst du? Wohin fährst du? Woher kommst du?</i></p>
<p><b>Yes/no questions:</b> verb first: <i>Arbeitest du heute? Kommen Sie aus Japan? Hast du Zeit?</i> Answer: <i>Ja. / Nein. / Doch</i> (= yes, to a negative question: <i>Hast du kein Auto? – Doch!</i>).</p>
<h3>5. Connecting sentences: und, aber, oder, denn</h3>
<p>These words do not change the word order: <i>Ich arbeite in Zürich, aber ich wohne in St. Gallen. Ich lerne Deutsch, denn ich wohne in der Schweiz.</i></p>
<h3>6. Time and frequency words</h3>
<p><i>heute, morgen, jetzt, dann, später, immer, oft, manchmal, nie, meistens, zuerst, danach, am Montag, am Wochenende.</i> <i>Ich gehe oft ins Kino. Am Wochenende schlafe ich lange.</i></p>`,
vocab:[["machen","to do, make"],["arbeiten","to work"],["lernen","to learn"],["studieren","to study (at university)"],["wohnen","to live"],["kommen","to come"],["gehen","to go, walk"],["fahren (fährt)","to drive, go (by vehicle)"],["kaufen","to buy"],["kochen","to cook"],["essen (isst)","to eat"],["trinken","to drink"],["schlafen (schläft)","to sleep"],["lesen (liest)","to read"],["schreiben","to write"],["hören","to hear, listen"],["sehen (sieht)","to see"],["fernsehen (sieht fern)","to watch TV"],["sprechen (spricht)","to speak"],["fragen","to ask"],["antworten","to answer"],["suchen","to look for"],["finden","to find"],["brauchen","to need"],["nehmen (nimmt)","to take"],["geben (gibt)","to give"],["wissen (weiß)","to know (facts)"],["kennen","to know (people, places)"],["werden (wird)","to become"],["bleiben","to stay"],["spielen","to play"],["warten","to wait"],["öffnen","to open"],["schließen","to close"],["helfen (hilft)","to help"],["telefonieren","to phone"],["bezahlen","to pay"],["besuchen","to visit"],["verstehen","to understand"],["möchten","would like"],["was","what"],["wer","who"],["wo","where"],["wohin","where to"],["woher","where from"],["wann","when"],["wie","how"],["warum","why"],["wie viel","how much"],["wie viele","how many"],["welche / welcher / welches","which"],["heute","today"],["morgen","tomorrow"],["jetzt","now"],["dann","then"],["später","later"],["immer","always"],["oft","often"],["manchmal","sometimes"],["nie","never"],["meistens","mostly"],["zuerst","first"],["danach","afterwards"],["doch","yes (after a negative question)"],["denn","because (connector)"],["vielleicht","maybe"],["natürlich","of course"],["leider","unfortunately"],["gern","gladly, with pleasure"],["zu Hause","at home"],["nach Hause","(to) home"]],
ex:[["Du ___ heute. (arbeiten)","arbeitest",["arbeitst","arbeitet","arbeite"],"Stem ends in -t → -est."],
["Er ___ in Zürich. (arbeiten)","arbeitet",["arbeit","arbeitst","arbeiten"],"-et."],
["Ihr ___ Deutsch. (lernen)","lernt",["lernen","lernst","lerne"],"ihr → -t."],
["Du ___ den Bus. (nehmen)","nimmst",["nehmst","nimmt","nehmen"],"nehmen: du nimmst."],
["Was ___ es heute zu essen? (geben)","gibt",["gebt","gibst","geben"],"es gibt."],
["Ich ___ das nicht. (wissen)","weiß",["wisse","weißt","wissen"],"wissen: ich weiß."],
["Ich ___ Frau Müller gut. (know a person)","kenne",["weiß","wisse","kennt"],"kennen for people and places; wissen for facts."],
["Heute ___ ich in Bern.","arbeite",["ich arbeite","arbeite ich","arbeiten"],"Verb in position 2: Heute arbeite ich…"],
["Am Wochenende ___.","schlafe ich lange",["ich schlafe lange","lange ich schlafe","schlafe lange ich"],"Time first → verb → subject."],
["___ machst du heute Abend?","Was",["Wer","Wo","Wie"],"was = what."],
["___ kostet das Buch?","Wie viel",["Wie viele","Wo","Wie"],"wie viel = how much."],
["___ Kinder haben Sie?","Wie viele",["Wie viel","Wie","Welche"],"wie viele + plural = how many."],
["___ fährst du? – Nach Bern.","Wohin",["Wo","Woher","Wann"],"wohin = where to (direction)."],
["___ lernst du Deutsch? – Weil ich in der Schweiz wohne.","Warum",["Wie","Wann","Was"],"warum = why."],
["___ Sprache sprichst du?","Welche",["Welcher","Was","Wie"],"die Sprache → welche."],
["___ Sie Deutsch?","Sprechen",["Spricht","Sprecht","Sprichst"],"Yes/no question with Sie: verb first."],
["Hast du kein Auto? – ___, ich habe ein Auto.","Doch",["Ja","Nein","Nicht"],"Doch contradicts a negative question."],
["Ich wohne in St. Gallen, ___ ich arbeite in Zürich.","aber",["denn","oder","dann"],"aber = but."],
["Ich lerne Deutsch, ___ ich wohne in der Schweiz. (because)","denn",["aber","oder","und"],"denn = because (no word-order change)."],
["Ich gehe jetzt ___.","nach Hause",["zu Hause","im Haus","zum Hause"],"nach Hause = (to) home; zu Hause = at home."],
["Ich ___ gern Deutsch.","lerne",["lernen","lernt","lernst"],"ich → -e; gern = gladly."]],
read:{title:"Ein Tag von Sandra",text:"Sandra wohnt in Winterthur und arbeitet in einer Buchhandlung. Am Morgen nimmt sie den Zug und ist um neun Uhr im Geschäft. Am Mittag isst sie ein Sandwich mit einer Kollegin. Am Nachmittag öffnet sie die Pakete mit den neuen Büchern und hilft den Kunden. Um sechs Uhr ist die Arbeit zu Ende. Am Abend liest sie, sieht fern oder geht mit Freunden aus. Am Samstag arbeitet sie nicht: Sie kauft auf dem Markt ein und kocht für die Familie.",
qs:[["Where does Sandra work?","In a bookshop",["In a library","In an office","In a school"]],["How does she get to work?","By train",["On foot","By car","By bike"]],["When does work end?","At 6 o'clock",["At 9","At noon","At 8 pm"]],["What does she do on Saturday?","Shops at the market and cooks",["Works","Goes out with friends","Watches TV"]]]},
listen:[["Was machst du heute?","What are you doing today?"],["Ich fahre mit dem Bus zur Arbeit.","I go to work by bus."],["Ich verstehe nicht, können Sie das wiederholen?","I don't understand, can you repeat that?"],["Wohin fahrt ihr am Samstag?","Where are you going on Saturday?"],["Die Kinder schlafen schon.","The children are already asleep."],["Ich trinke lieber Tee als Kaffee.","I prefer tea to coffee."],["Warum kommst du nicht mit?","Why don't you come along?"]],
dialog:{text:"– Hallo Marta, was machst du heute Abend?\n– Nichts Besonderes. Ich sehe zu Hause fern. Und du?\n– Ich gehe mit Luca in die Pizzeria. Kommst du mit?\n– Gern! Um wie viel Uhr?\n– Um acht. Wir treffen uns vor dem Bahnhof.",
qs:[["What does Marta plan to do first?","Watch TV at home",["Go to the pizzeria","Work","Sleep"]],["Who is going out with the speaker?","Luca",["Marta alone","The family","Colleagues"]],["Where do they meet?","In front of the station",["At the pizzeria","At Marta's","At the cinema"]]]},
write:{p:"Write 6 sentences about your everyday life: where you work or study, how you get there, what you eat, what you do in the evening and at the weekend. Start at least two sentences with a time word (Am Morgen…, Am Abend…) and use one negation (nicht / kein).",req:[["Sentence starting with time + verb + ich",/\b(am (morgen|vormittag|mittag|nachmittag|abend|wochenende|montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag)|heute|morgen|dann|zuerst|danach|um \S+( uhr)?)\s+\w+\s+ich\b/i],["regular verb (ich)",/\b(arbeite|lerne|koche|kaufe|gehe|spiele|lese|schreibe|höre|esse|trinke|schlafe)\b/i],["transport or place",/\b(mit dem (bus|zug|auto|fahrrad|velo|tram)|mit der (s-bahn|u-bahn|straßenbahn|bahn)|zu fuß|zu hause|im büro|in der schule|bei)\b/i],["negation",/\b(nicht|nie|kein(e|en|em|er)?)\b/i],["connector",/\b(und|aber|oder|denn)\b/i]],m:"Ich arbeite nicht, ich lerne Deutsch. Am Morgen lerne ich zu Hause. Am Mittag esse ich mit meinem Mann. Am Nachmittag gehe ich zu Fuß in die Stadt und kaufe ein. Am Abend koche ich und wir sehen fern. Am Wochenende fahren wir oft nach Bern, denn seine Eltern wohnen dort."},
speak:{p:"Describe a normal day (at least 6 sentences with different verbs). Then ask three questions with question words.",cues:["Am Morgen … / Am Nachmittag … / Am Abend …","ich stehe auf, lerne, koche, gehe, kaufe…","Was machst du …? Wo …? Wann …?"],m:"Am Morgen trinke ich Kaffee und lerne Deutsch. Dann gehe ich in die Stadt und kaufe ein. Am Mittag koche ich. Am Nachmittag telefoniere ich mit meiner Familie in Japan. Am Abend sehen wir fern oder gehen spazieren. Und du, was machst du am Abend? Wo arbeitest du? Wann hast du Zeit?"}},

/* ================= LESSON 6 ================= */
{id:6,title:"Essen und Trinken",sub:"Food, ordering in a café or restaurant, accusative, prices",
goals:["order and pay in a café or restaurant","use the accusative (den / einen / keinen)","say what you like and prefer (gern, lieber, am liebsten)","read a menu and understand prices"],
grammar:`
<h3>1. The accusative (direct object)</h3>
<p>The accusative is used for the thing that is acted on (what you eat, buy, take, have…). Only the <b>masculine</b> changes.</p>
<table><tr><th></th><th>m.</th><th>f.</th><th>n.</th><th>Pl.</th></tr>
<tr><td>Nominative (subject)</td><td>der / ein / kein Kaffee</td><td>die / eine / keine Suppe</td><td>das / ein / kein Brot</td><td>die / – / keine Äpfel</td></tr>
<tr><td>Accusative (object)</td><td><b>den / einen / keinen</b> Kaffee</td><td>die / eine / keine Suppe</td><td>das / ein / kein Brot</td><td>die / – / keine Äpfel</td></tr></table>
<p><i>Ich nehme <b>einen</b> Kaffee. Ich esse <b>eine</b> Suppe. Ich möchte <b>das</b> Brot. Ich habe <b>keinen</b> Hunger.</i> Possessives follow the same pattern: <i>Ich suche meinen Schlüssel.</i></p>
<p>Verbs that take the accusative: <i>haben, nehmen, essen, trinken, kaufen, möchten, suchen, finden, brauchen, sehen, kennen, bestellen, bezahlen.</i> Question: <i>Was? / Wen?</i></p>
<h3>2. möchten (would like) and the sentence bracket</h3>
<p><i>Ich möchte einen Kaffee. Ich möchte bitte zahlen. Wir möchten bestellen.</i> With a second verb, the infinitive goes to the end: <i>Ich möchte ein Wasser <b>trinken</b>.</i></p>
<h3>3. In the café and restaurant</h3>
<table><tr><th>waiter</th><th>you</th></tr>
<tr><td>Was möchten Sie? / Was darf es sein? / Bitte schön?</td><td>Ich möchte / Ich nehme / Ich hätte gern einen Kaffee, bitte.</td></tr>
<tr><td>Möchten Sie etwas trinken?</td><td>Ein Mineralwasser, bitte. Mit oder ohne Kohlensäure? – Ohne.</td></tr>
<tr><td>Sonst noch etwas?</td><td>Nein, danke, das ist alles.</td></tr>
<tr><td>Hat es geschmeckt?</td><td>Ja, sehr gut, danke.</td></tr>
<tr><td>Zusammen oder getrennt?</td><td>Zusammen, bitte. / Getrennt.</td></tr>
<tr><td>Das macht 24 Franken 50.</td><td>Zahlen, bitte! / Die Rechnung, bitte. / Kann ich mit Karte zahlen? / Stimmt so. (keep the change)</td></tr></table>
<p>Prices: <i>3,50 = drei Franken fünfzig / drei Euro fünfzig; 0,80 = achtzig Rappen / achtzig Cent. Was kostet …? Wie viel kostet …? Das kostet …</i></p>
<h3>4. Likes: gern, lieber, am liebsten; schmecken</h3>
<p><i>Ich trinke gern Tee. Ich trinke lieber Kaffee. Am liebsten trinke ich Wasser.</i> (gern goes after the verb)<br><i>Ich mag Pizza. Ich mag keinen Fisch.</i> (mögen + accusative)<br><i>Das schmeckt gut / lecker. Die Suppe schmeckt mir nicht.</i></p>
<h3>5. Meals and quantities</h3>
<p><i>das Frühstück, das Mittagessen, das Abendessen; frühstücken, zu Mittag essen, zu Abend essen.</i><br>Quantities have no article: <i>ein Kilo Äpfel, ein Liter Milch, eine Flasche Wasser, ein Glas Wein, eine Tasse Kaffee, ein Stück Kuchen, 100 Gramm Käse.</i></p>
<h3>6. Prepositions in the restaurant</h3>
<p><i>mit / ohne: Kaffee mit Milch, Tee ohne Zucker. zum: zum Frühstück, zum Mittagessen. für: ein Tisch für zwei Personen.</i></p>`,
vocab:[["das Essen","food, meal"],["das Getränk, -e","drink"],["das Frühstück","breakfast"],["das Mittagessen","lunch"],["das Abendessen","dinner"],["frühstücken","to have breakfast"],["das Brot, -e","bread"],["das Brötchen, -","bread roll"],["die Butter","butter"],["der Käse","cheese"],["der Schinken","ham"],["die Wurst, ¨-e","sausage"],["das Ei, -er","egg"],["die Milch","milk"],["der Joghurt","yoghurt"],["das Müsli","muesli"],["die Marmelade","jam"],["der Zucker","sugar"],["das Salz","salt"],["der Pfeffer","pepper"],["das Öl","oil"],["der Reis","rice"],["die Nudeln (Pl.)","pasta, noodles"],["die Kartoffel, -n","potato"],["die Pommes frites (Pl.)","chips, fries"],["das Fleisch","meat"],["das Hähnchen","chicken"],["der Fisch","fish"],["das Gemüse","vegetables"],["der Salat","salad, lettuce"],["die Tomate, -n","tomato"],["das Obst","fruit"],["der Apfel, ¨-","apple"],["die Banane, -n","banana"],["die Orange, -n","orange"],["die Suppe, -n","soup"],["die Pizza","pizza"],["der Kuchen","cake"],["das Eis","ice cream"],["die Schokolade","chocolate"],["der Kaffee","coffee"],["der Tee","tea"],["das Wasser","water"],["das Mineralwasser","mineral water"],["mit / ohne Kohlensäure","sparkling / still"],["der Saft, ¨-e","juice"],["das Bier","beer"],["der Wein","wine"],["die Cola","cola"],["das Café","café"],["das Restaurant","restaurant"],["die Speisekarte","menu"],["der Kellner / die Kellnerin","waiter / waitress"],["bestellen","to order"],["Ich möchte …","I would like …"],["Ich hätte gern …","I would like …"],["Ich nehme …","I'll have …"],["Sonst noch etwas?","anything else?"],["Das ist alles.","that's all."],["Zahlen, bitte!","the bill, please!"],["die Rechnung","bill"],["zusammen / getrennt","together / separately"],["bar / mit Karte","cash / by card"],["Stimmt so.","keep the change."],["Das macht …","that comes to …"],["Guten Appetit!","enjoy your meal!"],["schmecken","to taste"],["lecker","delicious"],["Es schmeckt gut.","it tastes good."],["gern / lieber / am liebsten","like / prefer / like best"],["mögen (mag)","to like"],["Hunger haben","to be hungry"],["Durst haben","to be thirsty"],["das Stück","piece"],["die Tasse, -n","cup"],["das Glas, ¨-er","glass"],["die Flasche, -n","bottle"],["der Liter","litre"],["das Kilo","kilo"],["das Gramm","gram"],["süß","sweet"],["scharf","spicy, hot"],["warm / kalt","warm / cold"],["frisch","fresh"],["vegetarisch","vegetarian"]],
ex:[["Ich nehme ___ Kaffee.","einen",["ein","eine","der"],"der Kaffee → accusative einen."],
["Ich möchte ___ Suppe.","eine",["einen","ein","der"],"die Suppe → eine (unchanged)."],
["Ich esse ___ Brötchen.","ein",["einen","eine","der"],"das Brötchen → ein."],
["Ich habe ___ Hunger.","keinen",["kein","keine","nicht"],"der Hunger → keinen."],
["Ich mag ___ Fisch.","keinen",["kein","keine","nicht"],"der Fisch → keinen."],
["Wir nehmen ___ Salat und ___ Pizza.","den / die",["der / die","den / den","das / die"],"der Salat → den; die Pizza → die."],
["Ich suche ___ Schlüssel. (one key)","meinen",["mein","meine","meiner"],"der Schlüssel → meinen."],
["Ich möchte ein Wasser ___.","trinken",["trinke","trinkt","getrunken"],"Infinitive at the end."],
["– Sonst noch etwas? – Nein, danke, ___.","das ist alles",["das macht alles","alles gut","das ist nichts"],"Fixed phrase."],
["Ich trinke ___ Tee, aber ___ Kaffee.","gern / lieber",["lieber / gern","gern / gern","am liebsten / gern"],"gern < lieber < am liebsten."],
["___ trinke ich Wasser.","Am liebsten",["Am lieber","Gernsten","Lieber am"],"am liebsten = most of all."],
["Die Suppe ___ sehr gut.","schmeckt",["schmecke","schmeckst","schmecken"],"die Suppe → schmeckt."],
["Kaffee ___ Milch, bitte. (with)","mit",["ohne","und","zu"],"mit = with."],
["Ein Tisch ___ zwei Personen, bitte.","für",["mit","zu","bei"],"für = for."],
["Ich hätte ___ ein Stück Kuchen.","gern",["gut","möchte","bitte"],"Ich hätte gern = I would like."],
["«3,50 Franken» is…","drei Franken fünfzig",["drei fünfzig Franken","dreifünfzig","drei und fünfzig Franken"],"drei Franken fünfzig."],
["Ich kaufe ein Kilo ___.","Äpfel",["Apfel","Äpfeln","der Äpfel"],"Quantity + plural noun without article."],
["– Zusammen oder getrennt? – ___, bitte.","Zusammen",["Mit","Alles","Bar"],"zusammen = together."],
["Kann ich ___ Karte zahlen?","mit",["bei","in","auf"],"mit Karte / bar."],
["Was ___ Sie? – Ich nehme das Hähnchen.","möchten",["möchte","mögt","möchtest"],"Sie → möchten."]],
read:{title:"Café Sonne – Speisekarte",text:"CAFÉ SONNE – Frühstück bis 11 Uhr\nKleines Frühstück (Brötchen, Butter, Marmelade, Kaffee) 8,50\nGroßes Frühstück (Brötchen, Käse, Schinken, Ei, Saft, Kaffee) 14,90\nMüsli mit Joghurt und Obst 7,50\n\nMittagsmenü 12–14 Uhr: Suppe + Hauptgericht 18,00\nHeute: Tomatensuppe, dann Hähnchen mit Reis oder vegetarisch: Nudeln mit Gemüse\n\nGetränke: Kaffee 4,20 · Cappuccino 4,80 · Tee 4,00 · Mineralwasser (3 dl) 3,50 · Apfelsaft 4,50\nKuchen des Tages 5,50 · Kinder essen bis 6 Jahre gratis.\nMontag Ruhetag. Wir akzeptieren Karten.",
qs:[["Until when is breakfast served?","Until 11 o'clock",["Until 14 o'clock","All day","Until 9"]],["What is in the big breakfast?","Roll, cheese, ham, egg, juice, coffee",["Only roll and coffee","Muesli and fruit","Soup and chicken"]],["What is the vegetarian lunch option?","Pasta with vegetables",["Chicken with rice","Tomato soup only","Salad"]],["When is the café closed?","On Monday",["On Sunday","At lunchtime","Never"]],["What do children under 6 pay?","Nothing",["Half price","5,50","8,50"]]]},
listen:[["Ich möchte einen Kaffee und ein Brötchen, bitte.","I'd like a coffee and a roll, please."],["Zahlen, bitte!","The bill, please!"],["Das macht zwölf Franken fünfzig.","That comes to 12.50 francs."],["Ich esse gern Gemüse, aber ich mag keinen Fisch.","I like vegetables, but I don't like fish."],["Ein Tisch für drei Personen, bitte.","A table for three, please."],["Möchten Sie das Wasser mit oder ohne Kohlensäure?","Would you like the water sparkling or still?"],["Kann ich mit Karte bezahlen?","Can I pay by card?"]],
dialog:{text:"– Guten Abend, haben Sie einen Tisch für zwei?\n– Ja, bitte, hier. Hier ist die Speisekarte.\n– Danke. Ich nehme die Tomatensuppe und dann das Hähnchen mit Reis.\n– Und für Sie?\n– Für mich die Nudeln mit Gemüse, bitte.\n– Möchten Sie etwas trinken?\n– Eine Flasche Mineralwasser ohne Kohlensäure und zwei Glas Rotwein.\n– Gern. Möchten Sie auch einen Nachtisch?\n– Später vielleicht.",
qs:[["What does the first person order?","Tomato soup and chicken with rice",["Pasta with vegetables","Pizza","Salad and fish"]],["What do they drink?","Still water and red wine",["Sparkling water and beer","Only wine","Coffee"]],["When do they decide about dessert?","Later",["Now","Not at all","Before the meal"]]]},
write:{p:"Write a message to a friend (about 30 words): You were at a restaurant. Say what you ate and drank, what it cost, whether it was good, and invite your friend to go there together.",req:[["Food",/(\b(pizza|nudeln|hähnchen|fisch|reis|gemüse|fleisch|pommes|käse|wurst|schnitzel|spaghetti|risotto|rösti|brötchen)|(suppe|kuchen|salat|brot|torte))\b/i],["Drink",/(\b(kaffee|tee|cola|milch|cappuccino|espresso|limonade)|(wasser|wein|bier|saft))\b/i],["Price",/\d+([.,]\d+)?\s*(franken|fr\.|euro|€|chf)|\b(chf|fr\.)\s*\d+|\b(franken|euro)\b/i],["Opinion",/\b(lecker|gut|schmeckt|super|toll|nicht gut)\b/i],["Invitation",/\b(kommst du\b[^.?!]*\bmit|komm (doch )?mit|mitkommen|gehen wir|möchtest du|willst du|wollen wir|hast du (zeit|lust))\b/i]],m:"Hallo Anna! Ich war gestern im Café Sonne. Ich hatte die Nudeln mit Gemüse und ein Glas Wein, zusammen 25 Franken. Sehr lecker! Gehen wir am Samstag zusammen hin? Liebe Grüße\nMomoko"},
speak:{p:"Exam task (Sprechen Teil 3, requests): You are in a café. Greet, order something to eat and drink, ask for the price, ask for the bill, say goodbye. (The examiner is the waiter.) Practise also: «Ich hätte gern …», «Kann ich bitte … haben?»",cues:["Guten Tag, ich hätte gern …","Was kostet …?","Mit / ohne …","Zahlen, bitte. / Die Rechnung, bitte.","Kann ich mit Karte zahlen?"],m:"Guten Tag! Ich hätte gern einen Cappuccino und ein Stück Kuchen, bitte. Was kostet der Kuchen? Fünf Franken fünfzig, gut. Und ein Mineralwasser ohne Kohlensäure. Zahlen, bitte! Kann ich mit Karte bezahlen? Vielen Dank, auf Wiedersehen!"}},

/* ================= LESSON 7 ================= */
{id:7,title:"In der Stadt: Orte und Wege",sub:"Places, asking for directions, prepositions with the dative, transport",
goals:["name places in a town","ask for and understand directions (exam: Hören, Sprechen)","use wo / wohin and prepositions with the dative","talk about means of transport"],
grammar:`
<h3>1. The dative after prepositions of place (Wo?)</h3>
<p>After <b>in, an, auf, neben, vor, hinter, über, unter, zwischen</b> the dative is used when answering <b>Wo?</b> (where, location):</p>
<table><tr><th></th><th>m.</th><th>f.</th><th>n.</th><th>Pl.</th></tr>
<tr><td>Dative</td><td><b>dem</b> / einem Bahnhof</td><td><b>der</b> / einer Post</td><td><b>dem</b> / einem Hotel</td><td><b>den</b> Häusern (+n)</td></tr></table>
<p>Contractions: <b>in dem = im</b>, <b>an dem = am</b>. <i>Ich bin im Büro. Die Bank ist am Bahnhof. Das Café ist neben der Post. Das Auto steht vor dem Haus.</i></p>
<h3>2. Wohin? – direction</h3>
<p>Movement to a place uses the accusative after in/an/auf: <b>in den</b> Park, <b>in die</b> Stadt, <b>ins</b> (in das) Kino, <b>an den</b> See, <b>auf den</b> Markt. Many destinations use <b>zu</b> + dative: <i>zum (zu dem) Bahnhof, zur (zu der) Post, zum Arzt, zu Anna</i>. Cities and countries: <b>nach</b>: <i>nach Bern, nach Japan, nach Hause</i>; countries with an article take <b>in</b>: <i>in die Schweiz, in die Türkei</i>.</p>
<table><tr><th>Wo? (location, dative)</th><th>Wohin? (direction)</th></tr>
<tr><td>im Kino, in der Stadt, im Supermarkt, auf dem Markt, am Bahnhof, zu Hause, bei Anna</td><td>ins Kino, in die Stadt, in den Supermarkt, auf den Markt, zum Bahnhof, nach Hause, zu Anna</td></tr></table>
<h3>3. Prepositions that always take the dative</h3>
<p><b>mit, nach, von, zu, bei, aus, seit</b>: <i>mit dem Bus, mit der S-Bahn, nach dem Essen, von der Arbeit, zum Arzt, bei der Bank, aus dem Haus, seit einem Jahr.</i></p>
<h3>4. Asking for directions</h3>
<p><i>Entschuldigung, wo ist der Bahnhof? / Wie komme ich zum Bahnhof? / Gibt es hier eine Apotheke? / Ist das weit?</i></p>
<table><tr><td>Gehen Sie geradeaus.</td><td>Go straight on.</td></tr>
<tr><td>Gehen Sie (die erste Straße) links / rechts.</td><td>Turn (first street) left / right.</td></tr>
<tr><td>Gehen Sie bis zur Ampel / Kreuzung / Brücke.</td><td>Go as far as the traffic lights / crossroads / bridge.</td></tr>
<tr><td>Der Bahnhof ist auf der linken / rechten Seite.</td><td>on the left / right side</td></tr>
<tr><td>Es ist gegenüber von der Post / neben der Bank / hinter der Kirche / um die Ecke.</td><td>opposite the post office / next to the bank / behind the church / around the corner</td></tr>
<tr><td>Das ist nicht weit, etwa fünf Minuten zu Fuß.</td><td>It's not far, about five minutes on foot.</td></tr>
<tr><td>Nehmen Sie den Bus Nummer 3 und steigen Sie am Rathaus aus.</td><td>Take bus number 3 and get off at the town hall.</td></tr></table>
<p>Imperative with Sie: verb + Sie: <i>Gehen Sie! Nehmen Sie! Fahren Sie! Steigen Sie aus!</i></p>
<h3>5. Transport</h3>
<p><i>mit dem Bus / Zug / Auto / Fahrrad / Taxi, mit der S-Bahn / Straßenbahn / U-Bahn, zu Fuß. Ich fahre mit dem Zug nach Zürich. Ich gehe zu Fuß. Wo ist die Haltestelle? Wann fährt der nächste Bus? Der Zug fährt von Gleis 4 ab. Eine Fahrkarte nach Bern, bitte, hin und zurück.</i></p>`,
vocab:[["die Stadt, ¨-e","city, town"],["das Dorf, ¨-er","village"],["das Zentrum","centre"],["die Straße, -n","street"],["der Platz, ¨-e","square"],["der Weg, -e","way, path"],["der Bahnhof, ¨-e","railway station"],["die Haltestelle, -n","stop (bus, tram)"],["der Bus, -se","bus"],["der Zug, ¨-e","train"],["die S-Bahn","suburban train"],["die Straßenbahn / das Tram","tram"],["die U-Bahn","underground"],["das Taxi","taxi"],["das Flugzeug","plane"],["der Flughafen","airport"],["das Fahrrad, ¨-er","bicycle"],["zu Fuß","on foot"],["die Fahrkarte / das Ticket","ticket"],["das Gleis","platform, track"],["die Abfahrt","departure"],["die Ankunft","arrival"],["hin und zurück","return (there and back)"],["einfach","single (one-way); simple"],["die Bank, -en","bank"],["die Post","post office"],["die Apotheke, -n","pharmacy"],["das Krankenhaus","hospital"],["der Arzt / die Ärztin","doctor"],["der Supermarkt","supermarket"],["der Markt","market"],["die Bäckerei","bakery"],["das Geschäft / der Laden","shop"],["das Kaufhaus","department store"],["die Kirche","church"],["das Museum","museum"],["das Kino","cinema"],["das Theater","theatre"],["der Park","park"],["das Schwimmbad","swimming pool"],["die Schule","school"],["die Universität","university"],["die Bibliothek","library"],["das Hotel","hotel"],["das Rathaus","town hall"],["die Polizei","police"],["die Brücke","bridge"],["der Fluss","river"],["der See","lake"],["die Ampel","traffic lights"],["die Kreuzung","crossroads"],["die Ecke","corner"],["der Parkplatz","car park"],["links","left"],["rechts","right"],["geradeaus","straight on"],["weit","far"],["nah / in der Nähe","near / nearby"],["neben","next to"],["vor","in front of"],["hinter","behind"],["gegenüber (von)","opposite"],["zwischen","between"],["an / am","at, on"],["auf","on, on top of"],["in / im","in"],["zu / zum / zur","to"],["nach","to (cities, countries), after"],["mit","with, by (transport)"],["bei","at (a person's or company's place)"],["von","from, of"],["aus","out of, from"],["Wo ist …?","where is …?"],["Wie komme ich zu …?","how do I get to …?"],["Gibt es hier …?","is there … here?"],["Gehen Sie geradeaus.","go straight on."],["aussteigen / einsteigen","to get off / get on"],["umsteigen","to change (trains)"],["abfahren","to depart"],["ankommen","to arrive"],["der Eingang / der Ausgang","entrance / exit"],["geöffnet / geschlossen","open / closed"],["die Öffnungszeiten","opening hours"]],
ex:[["Ich bin ___ Büro.","im",["in","ins","am"],"in dem = im (Wo? dative)."],
["Die Bank ist ___ Bahnhof.","am",["an","auf","zum"],"an dem = am."],
["Das Café ist neben ___ Post.","der",["die","dem","den"],"die Post → dative der."],
["Das Auto steht vor ___ Haus.","dem",["das","den","der"],"das Haus → dative dem."],
["Ich gehe ___ Kino. (Wohin?)","ins",["im","in","am"],"in das = ins (direction)."],
["Wir fahren ___ Stadt. (Wohin?)","in die",["in der","ins","nach"],"direction into the city: in die Stadt."],
["Wie komme ich ___ Bahnhof?","zum",["zur","nach","im"],"zu dem = zum."],
["Wie komme ich ___ Post?","zur",["zum","nach","in"],"zu der = zur."],
["Ich fahre ___ Bern.","nach",["zu","in","zum"],"Cities: nach."],
["Ich gehe jetzt ___ Hause.","nach",["zu","in","im"],"nach Hause = home (direction)."],
["Ich fahre ___ Bus.","mit dem",["mit der","mit den","im"],"der Bus → mit dem."],
["Ich fahre ___ S-Bahn.","mit der",["mit dem","mit die","in der"],"die S-Bahn → mit der."],
["Ich komme ___ Arbeit.","von der",["vom","aus der","bei der"],"die Arbeit → von der."],
["Ich wohne ___ einem Jahr in der Schweiz.","seit",["für","vor","bei"],"seit = since / for (duration)."],
["Gehen Sie ___ und dann links.","geradeaus",["gerade",  "rechtsaus","vorne"],"geradeaus = straight on."],
["___ Sie den Bus Nummer 5!","Nehmen",["Nimmt","Nehmt","Nimm"],"Imperative with Sie: Nehmen Sie."],
["Die Apotheke ist ___ der Kirche.","gegenüber von",["gegen","vor von","zwischen"],"gegenüber von = opposite."],
["Steigen Sie am Rathaus ___. (get off)","aus",["ein","um","ab"],"aussteigen = get off."],
["Eine Fahrkarte nach Zürich, ___, bitte.","hin und zurück",["hin und her","einfach zurück","zurück und hin"],"return ticket = hin und zurück."],
["Der Zug fährt von ___ 4 ab.","Gleis",["Platz","Straße","Bus"],"Gleis = platform."]],
read:{title:"Wegbeschreibung per E-Mail",text:"Liebe Momoko,\nhier der Weg zur Sprachschule: Vom Bahnhof St. Gallen nimmst du den Bus Nummer 1 Richtung Stephanshorn und steigst an der vierten Haltestelle, «Marktplatz», aus. Dann gehst du über den Platz: Die Schule ist gegenüber von der Kirche, neben einer Apotheke. Es ist ein gelbes Haus mit einer grünen Tür, 1. Stock. Zu Fuß vom Bahnhof brauchst du 15 Minuten: immer geradeaus die Bahnhofstraße entlang, dann rechts in die Marktgasse.\nBis Dienstag! Liebe Grüße\nThomas",
qs:[["Which bus should Momoko take?","Number 1",["Number 4","Number 15","Number 11"]],["Where does she get off?","At the fourth stop, Marktplatz",["At the station","At the first stop","At the church"]],["Where is the school?","Opposite the church, next to a pharmacy",["Behind the station","Next to the bank","In the park"]],["How long is it on foot?","15 minutes",["4 minutes","1 hour","30 minutes"]]]},
listen:[["Entschuldigung, wo ist der Bahnhof?","Excuse me, where is the station?"],["Gehen Sie geradeaus und dann die zweite Straße links.","Go straight on and then take the second street on the left."],["Die Apotheke ist neben der Bank.","The pharmacy is next to the bank."],["Ich nehme den Bus Nummer fünf.","I take bus number five."],["Ist das weit? Nein, fünf Minuten zu Fuß.","Is it far? No, five minutes on foot."],["Der Zug nach Zürich fährt von Gleis sieben ab.","The train to Zurich leaves from platform seven."],["Gibt es hier in der Nähe einen Supermarkt?","Is there a supermarket near here?"]],
dialog:{text:"– Entschuldigung, gibt es hier eine Bank?\n– Ja, in der Bahnhofstraße. Gehen Sie geradeaus bis zur Ampel, dann links. Die Bank ist gegenüber von der Post.\n– Ist das weit?\n– Nein, etwa fünf Minuten zu Fuß.\n– Vielen Dank!\n– Bitte, gern.",
qs:[["Where is the bank?","In the Bahnhofstraße, opposite the post office",["Next to the station","Behind the church","At the traffic lights"]],["What do you do at the traffic lights?","Turn left",["Turn right","Go straight on","Turn back"]],["How far is it?","About 5 minutes on foot",["15 minutes by bus","Very far","2 stops"]]]},
write:{p:"A friend is visiting you. Write how to get from the station to your home (about 40 words): transport, stop, directions, what is nearby.",req:[["Transport",/\b(bus|tram|zug|s-bahn|u-bahn|straßenbahn|bahn|zu fuß|taxi|auto|fahrrad|velo)\b/i],["Direction",/\b(geradeaus|links|rechts|bis zur|bis zum|die erste|die zweite)\b/i],["Preposition + dative",/\b(am|im|zum|zur|neben der|neben dem|vor dem|vor der|gegenüber|hinter dem|hinter der|mit dem|mit der)\b/i],["Stop or place",/\b(haltestelle|bahnhof|kirche|post|bank|apotheke|supermarkt|park|platz)\b/i],["aussteigen",/\b(steig|aussteigen)/i]],m:"Hallo Lisa! Vom Bahnhof nimmst du den Bus Nummer 7 und steigst an der Haltestelle «Park» aus. Dann gehst du geradeaus und die erste Straße rechts. Mein Haus ist neben der Bäckerei, gegenüber vom Park. Es hat eine blaue Tür. Bis morgen!"},
speak:{p:"Exam task: Someone asks you the way to the station / pharmacy / supermarket. Describe the way from your home (transport, directions, how long).",cues:["Gehen Sie …","geradeaus, links, rechts, bis zur Ampel","Nehmen Sie den Bus …, steigen Sie … aus","Es ist nicht weit, … Minuten"],m:"Der Bahnhof? Gehen Sie geradeaus bis zur Ampel, dann links. Gehen Sie etwa hundert Meter weiter. Der Bahnhof ist auf der rechten Seite, gegenüber vom Supermarkt. Das ist nicht weit, etwa zehn Minuten zu Fuß. Oder Sie nehmen den Bus Nummer 2 und steigen an der zweiten Haltestelle aus."}}
);

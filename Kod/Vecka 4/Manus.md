# Manus

## Catch-up

* HTML - Upplägget för dokumentet.

Vi använder oss av det för att strukturera och ge innebörd, eller mening till vårt innehåll. Här definerar vi exempelvis stycken, eller "paragraphs", rubriker alltså "headings", tabeller och/eller bilder.

* CSS - Dokumentets stil.

Stilregler som vi använder för att lägga till stil på vårt HTML-innehåll samt struktur. Här skriver vi regler för exempelvis bakgrundsfärger, typsnitt eller för att dela innehållet i flera kolumner.

* JavaScript - Dynamiska dokument interaktioner.

Och tillslut har vi det som vi kommer att lära oss om idag, JavaScript.

## Introduktion

JS, eller "JavaScript", är ett skriptspråk som låter oss skapa dynamiskt innehåll, låter oss kontrollera multimedia, animera bilder och mycket annat. 

Vi ska titta på detta enkla exempel jag har här.

[... Improv - Öppna i VSCode ...]

Vad kan vi göra med programmeringspråk?

Bara 3 saker. All teknologi vi ser runt omkring oss är baserat på dessa 3 punkter.

* Sekvensering - Sequencing - Order, Följd

I vilken följd man skriver sin kod, vilken ordning den har.

* Selektion - Selection - Frågor, Påståenden

Påståenden, frågor. Vi ska titta ytterligare på detta senare.

* Iteration - Upprepning

Och iteration, alltså upprepning.

Alla nya programmeringspråk består av dessa tre. Gamla språk kanske saknar selektion eller iteration, men alla moderna språk i alla fall har bara dessa tre fundamentala verktyg.

Så här ser de ut i Javascript.

Om vi börjar med Sequencing:

Två variabler, och en utskrift till konsollen. En sekvens av kod.

Ändrar vi på innehållet i `console.log(schoolName + " in " + cityName)` till `console.log(cityName + " has " + schoolName)` så får vi en annan utskrift till konsollen.

Sammanfattningsvis, att programmeringspråk börjar först upp, och sedan fortsätter nedåt. Först från vänster, och sedan till höger. Som en bok, på engelska.

Okej, hur ser Selection ut då?

En variabel "studentAge" som har numret "18" och ett "if" påstående som frågar om "studentAge" variabeln är över eller lika med numret 18.

Om påståendet stämmer, går vi in i den första blocken av kod och då får vi utskriften "Welcome, you can join." och annars (else) får vi utskriften "You're too young, you can't join."

Alltså, om påståendet stämmer kör vi koden inuti dessa klammer-paranteser, eller som de heter på engelska "curly brackets, curly braces".

Och i JavaScript är det alltså if och else som man använder. Det finns även "else if" som ser ut så här.

Någon som vill gissa vad utskriften blir?
"You're 18 years old."

Okej, vad händer om studentAge är 19 då?
"You're older than 18 years."

Okej, dags för iteration! Eller med enklare ord, upprepning!

Här har vi ett variabel kallad "number" med numret 7 och en loop, en upprepning av utskrift av beräkningen "number * index".

I loopen ser vi att vi först skapar en variabel med namnet index som vi ger numret 1 till. I mitten här har vi påståendet "om index är mindre än eller lika med 10" och på slutet har vi "index++" som betyder "index += 1". Man kan även skriva den "index += 1" men "index++" ser bättre ut.

Alltså, denna loop kommer att upprepa 10 gånger där variabeln "index" kommer att ha sitt nummer ändrat för varje upprepning. Och anledningen till att vi måste ändra variabeln "index" är för att se till att påståendet slutar att stämma efter ett tag annars kan denna funktion att bara upprepa i oändligheter vilket kan krascha en dator. Detta kallas för ett "halting problem". Alltså en loop som aldrig tar slut eftersom datorn inte vet när den kommer att ta slut.

Okej, vi har nu gått igenom dem tre viktigaste momenten i programmering nu ska vi igenom mer tråkiga saker.

Som variabler, ord/text, det vill säga strings och nummer.

Har redan visat variabler tidigare men här ett ytterligare exempel. Vi har alltså två variabler, x och y som har inget fördefinierat värde. Och då betyder de att dem är "undefined". Alltså icke definerade. Allt som inte finns är "undefined" i Javascript, detta skiljer sig i andra språk så detta är inte universellt. Så ha i baktanke att denna presentation handlar bara om Javascript.

Om vi försöker skriva ut variablerna x och y får vi alltså undefined, och i variabeln "f" säger vi att f ska vara fördefinerat till "x + y". Men eftersom x och y är undefined, får vi utskriften "NaN". Not a number. Det vill säga att slutresultatet inte är ett number. Detta är också något som är specifikt till Javascript, i andra språk skulle man få röda varningmeddelanden men här tillåter Javascript att du gör detta.

För att variabeln "f" ska skriva ut något annat än "NaN" måste vi fylla ut variablerna x och y med något och sedan definerar vi variabeln "f" igen till att var "x + y". Alltså, dessa variabler är inte dynamiska. Ger du dem ett värde har dem detta värde tills du ändrar på dem senare. Så variabeln "f" kommer inte att ha sitt värde ändrat om x eller y ändrar på sig, du måste alltså ändra "f" till att vara lika med "x + y" igen.

Och som tidigare sakt, sekvensering av kod är viktigt. Upp och ner, vänster till höger.

Trippel och dubbel jämföring, eller "comparison" som det heter på engelska.

En string med texten "1" är inte likadan som siffran 1. Men om man vill jämföra dem två, använder man sig av dubbla lika med tecken.

Ett lika med tecken betyder att man ska definera variabeln.
Två lika med tecken betyder att man ska jämföra värden, och använda sig av magi.

Medans tre lika med tecken betyder att man ska jämföra värden, och se till att dem är exakt samma typ av värde. Alltså att man jämför ett nummer med ett annat nummer.

Jag vill att vi inte använder oss av dubbla lika med tecknet, för jag vill att ni förvandlar strings till numbers istället genom andra funktioner eller konstruktörer.

Men, men! Nu har jag snackat för länge! Dags att göra saker.

Vi ska följa en tutorial på MDN...

[... Improv ...]

Här har vi en funktion 

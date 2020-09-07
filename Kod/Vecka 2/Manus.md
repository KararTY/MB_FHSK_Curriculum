# HTML

Vad är HTML?

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Dokument</title>
</head>

<body>
  <p class="paragraf">Hej!</p>
</body>

</html>
```

HTML, eller som det står i läroböcker "HyperText Markup Language", är vad definerar innebörden. Ska förklara vad det betyder om ett tag. Och strukturen av webbinnehåll, alltså innehållet av en webbsida.

Och ordet "HyperText", ja vad kan det betyda? Någon som vågar gissa?
Okej, det är nog bättre att jag förklarar det ordet med ett exempel.

[Hypertext exempel.](src/hypertext1.html)

Alltså, hypertext är själva sammanbindningen mellan dessa olika dokument. Det vill säga, länkarna.
Tänk er Öresundsbron, bron mellan Sverige och Danmark. Den sammanbinder dessa två länders trafik, över havet.

Och i det här fallet, är trafiken inte bilar men datorer som klickar på länkar och transporteras från en sida till en annan. Och när du skapar en webbsida, och får den att hamna på Google, så har du skapat en bro. Den kommer att leda trafik från, låt oss säga Google, till din hemsida.

Och dessa länkar behöver inte ta dig till en helt annan webbsida, i exemplet jag visade tog bron dig till en annan sida på samma hemsida. Som i det här fallet är faktiskt bara din dator. Inte direkt en riktig hemsida, det vill säga.

Nåval, till innebörden.

Innebörden. I HTML heter saker vissa ting så att människor, och maskiner, kan läsa av dem och förstå vad de innebär.

Om vi tittar på sida "2", alltså "hypertext2", har vi en tabell uppställd.

Kommer ni ihåg CTRL+SHIFT+I, låt oss göra det lite snabbt och se hur koden ser ut.

Om vi tittar på "förälder" elementet, som vi nu kommer att kalla för "parent element", detta element här på toppen är alltså föräldern, "parent" för alla "barn" element som jag kommer att kalla för "child elements", har vi:

```html
<table></table>
```

Innebörden är alltså att detta element är en table, eller tabell på Svenska.

Och dess "översta" child elements är
```html
<thead>
  ...
</thead>
<tbody>
  ...
</tbody>
```

Och "thead" har också child elements, i detta fall är det

```html
<tr>
  ...
</tr>
```

som har

```html
<th></th>
```

som child element.

Och den kan ha text som child element. Där tar det slut. Okej, låt oss sätta ihop en tabell lite snabbt.

[Bygg upp ett dokument som visar dem sammansatta ... Improv ...]

Vad vi har här är alltså ett DOM träd, eller DOM tree på engelska.

Som ett träd, kan man klättra upp och ner för träd genom att gå upp från en child element till en parent element som kanske är en child element till ett annat parent element också vidare...

Visa [HTML.md](HTML.md)

På det här viset. Vill inte behöva säga detta varje gång, men om ni är vilse vill jag gärna att ni frågar.

Men men, nu har ni lyssnat på mig för länge. Dags för en paus.

[Efter paus]

Hoppas ni är redo, för det dags för er att skriva lite HTML!

Jag vill att ni öppnar "hypertext2" och väljer en krigen. Ni ska göra ett dokument där ni ska beskriva kriget med bilder och text, och istället för att ni skriver det i google document, vill jag att ni gör det i HTML.

De element som är viktiga för denna uppgift för er finns på filen `HTML.md`.

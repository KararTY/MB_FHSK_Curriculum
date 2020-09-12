# CSS

## Introduktion

* Cascade style sheet.
* Används för att lägga till och/eller ändra design på en webbsida.

* Dela upp din HTML i `<header>, <main>, <footer>`. **Alla HTML element har en innebörd.**

**Bläddra till [https://jgthms.com/web-design-in-4-minutes/](https://jgthms.com/web-design-in-4-minutes/).**

* Börja först med ditt innehåll (texten & bilder).
* Skapa din `stylesheet.css` fil.

```css
html {
  font-size: 16px;
}
```

* **Centrera ditt innehåll.**

```css
body {
  margin: 0 auto;
  max-width: 50em;
}
```

* Vad är *"em"*? *em* är relativt till parent element, i detta fall relativt till `font-size: 16px;`. **Alltså, 1em är 16 pixlar. 50em: 50 x 16 pixlar.**

* **Ändra typsnittet!** Times New Roman ser inte trevligt ut. Vi försöker att skapa en webbsida inte en inlämningsuppgift!

```css
body {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Dessa heter Sans Serif, men det finns också Serif typsnitt vilket är vad `Times New Roman` är.

<img src="https://about.easil.com/wp-content/uploads/blog-graphic-02-1024x364-1-800x284.png">

*Finns även monospace och så vidare, se [Google Fonts](https://fonts.google.com/) för flera gratis exemplar.*

* Lägg till mellanrum i ditt dokument. Detta är inte ett fysiskt papper, detta dokument är helt digitalt. Var inte rädd för att ha tomt utrymme!

```css
body {
  line-height: 1.5;
  padding: 4em 1em;
}

h2 {
  margin-top: 1em;
  padding-top: 1em;
}
```

Här ändrar vi heading / rubrik element till att ta upp mer utrymme och ha tomrum på topp-sidan.

* Ändra standardfärgen för text innehåll.

```css
/* Lägg till innehållet här med din tidigare body {}. */
body {
  color: #555;
}
```

Du kan även ändra färgen för bakgrunden och för headings. **Här ändrar vi färgen på headings så att man kan förstå att de är viktiga.**

* Vad är den där siffran med en hashtag i början? Hex values och hex färger.

[Sök flera färger här.](https://encycolorpedia.com/named) Det finns flera än dessa, men webbsidan är en bra början.

```css
h1,
h2,
strong {
  color: #333;
}
```

* Välj "brand" färger. **Vilka färger ska kännetecka din webbsida?** Hur ska man kunna separera en länk-address från vanligt text?

```css
/* Den "primära" "brand" färgen. */
a {
  color: #e81c4f;
}
```

Det finns primära, sekundära och tertiära färger. Hur många färger du behöver beror på vad du behöver färgerna till. Har du valt 3 olika färger, kan du välja 3 till färger som "liknar" de 3 färgerna du först valde. **Men man ska inte ha för många färger.**

* Ändra flera färger, sekundär färgen skall vara för bakgrunden i detta fall.

```css
/* Lägg till innehållet här med din tidigare body {}. */
body {
  color: #566b78;
}
```

* Gillar inte de typsnitt som kommer med datorer? Använd/Ladda ner Google Fonts!

```css
@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';

body {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}
```

Du kan även ladda ner typsnittet "Roboto" men i detta fall laddar vi ner typsnittet via en länk.

* Ge `<header>` en stil.

```css
header {
  background-color: #263d36;
  background-image: url("header.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 1.2;
  padding: 10vw 2em;
  text-align: center;
}
```

Ladda ner en bild från [Unsplash](https://unsplash.com/) och namnge den `header`. **Lägg märke till vilken filtillägg den har och namnge den enligt filtillägget. (.png .jpg .jpeg)**

* Ändra heading stilen om den befinner sig i en `<header>` parent element.

```css
header h1 {
  color: white;
  font-size: 2.5em;
  font-weight: 300;
}
```

---

```css
header p {}
```

betyder:

```html
<header>
  <p></p> <!-- Detta element kommer att ha sin stil ändrad. -->
</header>
```

---

```css
footer p {}
```

betyder:

```html
<footer>
  <p></p> <!-- Detta element kommer att ha sin stil ändrad. -->
</footer>
```

---

Vad kommer följande stil att ändra?

```css
p {}
```

```html
<header>
  <p></p>
</header>

<main>
  <p></p>
</main>

<footer>
  <p></p>
</footer>
```

Alla `<p>` element kommer att ha sin stil ändrade... Men `header p` och `footer p` reglerna kommer att skriva ÖVER den regeln för de räknas som viktigare.

* Ändra `<a>` länk stilen inuti `<header>`.

```css

header a {
  border: 1px solid #e81c4f;
  border-radius: 290486px;
  color: white;
  font-size: 0.6em;
  letter-spacing: 0.2em;
  padding: 1em 2em;
  text-transform: uppercase;
  text-decoration: none;
}

/* :hover är pseudo-element. Den betyder att när man svävar över <a> elementet skall följande ändras: */
header a:hover {
  background:  #e81c4f;
  color: white;
}
```

* Vad betyder allt det där med `letter-spacing`, `text-decoration` etcetera?

[MDN är din vän!](https://developer.mozilla.org/)

* **Hur bläddrar man och söker sig fram till MDN?**

* CSS referens listan.
  * Technologies > CSS > CSS reference > `CTRL+F` "text-decoration".
* Eller Googla bara!

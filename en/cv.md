# Maxim Zorin — **Lead JavaScript Developer**
<figure class="photo"><img src="mxn42-photo.jpg" alt="Maxim Zorin in winter"></figure>

<aside data-toc-label="Contacts" data-toc-icon="bxs-user-detail">
<ul class="contacts">
<li><i class="bx bxl-github"></i> <a href="https://github.com/mxn42">mxn42</a></li>
<li><i class="bx bx-envelope"></i> <a href="mailto:maxim.zorin@gmail.com">maxim.zorin@gmail.com</a></li>
<li><i class="bx bxl-linkedin"></i> <a href="https://www.linkedin.com/in/maximzorin/">maximzorin</a></li>
<li><i class="bx bxs-map"></i> <a href="https://www.google.com/maps/place/St+Petersburg/">Saint Petersburg, Russia</a></li>
</ul>
</aside>

<a data-toc-label="About me" data-toc-icon="bx-message-square-detail"></a>
\
I like _to_ javascript.

<q id="quote">I'x qaj uafzhf hp zaspk wvut ragkt sqm jly.</q> <cite>Douglas Adams</cite>

<a data-toc-label="Experience" data-toc-icon="bx-code-alt"></a>
## Experience

### IT: Programming, Management, Testing
- 2018-2021 **[Zodiac Systems](//zodiacsystems.com)** Lead JS Developer
- 2013-2018 **[Zodiac Systems](//zodiacsystems.com)** Head JS Technologies
- 2012-2013 **[JetBrains](//jetbrains.com)** Senior UI Developer
- 2010-2012 **[Zodiac Systems](//zodiacsystems.com)** Senior JS Developer
- 2006-2010 **[Quest Software](//quest.com)** Senior Software Developer
- 2004-2006 **[Quest Software](//quest.com)** C# Developer
- 2002-2004 **[Quest Software](//quest.com)** Head Quality Assurance
- 2000-2001 **Novalumen** Lead Quality Assurance
- 1999-2000 **[Goodwin](//goodwin-gmc.com)** Webmaster

### Teaching
- 2013-2021 **Anichkov Lyceum (school)** Computer Science Teacher
- 2014-2018 **SPB Polytechnic University** JavaScript Teacher
- 1995-1999 **Moscow City University** Computer Science Teacher

<a data-toc-label="Education" data-toc-icon="bxs-graduation"></a>
## Education

1992-1997 **Moscow Pedagogical State University** \
_**Master of Science**_, Mathematics and computer science

<a data-toc-label="Skills" data-toc-icon="bx-cog"></a>
## Skills

### IT
- JS fullstack: **FE, BE, Embeded**
- OS: **Windows, Ubuntu**
- Management: **up to 20 people team**
- Teach CS levels: **Upper primary schools, College, University**

### Languages
- JavaScript **proficiency**
- Python **advanced**
- Russian **fluent**
- English **B2**
- HTML, CSS, SQL **are used in work**
- Pascal, Delphi, C#, Perl, SSI, PHP, ASP **used to be used in work**

### Frameworks
- VanillaJS  **proficiency**
- VueJS, ReactJS **B1**

### Interests
- Mainly: Fatherhood
- Outdoors: Hiking, Canoeing, Active games
- Indoors: Reading, Board games (especially tafl, chess, go), Сard games (primarily poker)

<a data-toc-label="Sample JS" data-toc-icon="bxl-javascript"></a>
## Sample JavaScript

There is a problem from CodeWars.

**[Vigenère Cipher Helper](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3)**
```javascript
class VigenereCipher {
  constructor(key, abc) {
    Object.assign(this, {key, abc});
  }
  char(x, i, forward) {
    const {key, abc} = this;
    if (!abc.includes(x))
      return x;
    const shift = (forward ? 1 : -1) * abc.indexOf(key[i % key.length]);
    return abc[(abc.indexOf(x) + shift + abc.length) % abc.length];
  }
  encode(str, forward = true) {
    return str.split``.map((x, i) => this.char(x, i, forward)).join``;
  }
  decode(str) {
    return this.encode(str, false);
  };
}

// usage
const cipher = new VigenereCipher('douglasadams', 'abcdefghijklmnopqrstuvwxyz');
console.log(cipher.decode(quote.textContent)); // I’d far rather be happy than right any day.
```


<aside class="last-update">
  Last CV update: <time datetime="2021-09-22">22th September, 2021</time>
</aside>

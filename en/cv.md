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

<a data-toc-label="About" data-toc-icon="bx-message-square-detail"></a>
\
I like _to_ javascript.

<q id="quote">I'x qaj uafzhf hp zaspk wvut ragkt sqm jly.</q> <cite>Douglas Adams</cite>

<a data-toc-label="Experience" data-toc-icon="bx-history"></a>

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

<a data-toc-label="Projects" data-toc-icon="bx-code-alt"></a>

### Web and JavaScript projects

#### Last decade
- JS and webdev for embeded Interactive TV, customer demos, internal web portals.
- Web UI of a version control system.
- EcmaScript and Node courses in Polytech.

#### 2000s
- Custom dev [Active Roles](https://www.oneidentity.com/products/active-roles/), javascripting ActiveDirectory and Windows.
- ASP<span>.</span>NET webdev (developer, qa head) an user provisioning, [self-service management and security](https://www.oneidentity.com/products/password-manager/), [management ActiveDirectory](https://www.quest.com/products/recovery-manager-for-active-directory/), [recovery Exchange](https://www.quest.com/products/recovery-manager-for-exchange/), customize SharePoint.
- QA engineer of 1st version of <http://beeline.ru>, one of the first interactive websites on the Internet.

#### Past millennium
- Fullstack webdev 1st version of <http://goodwin-gmc.com/>


<a data-toc-label="Education" data-toc-icon="bxs-graduation"></a>

## Education

### Contribution
- 2013-2021 **Anichkov Lyceum (school)** Computer Science Teacher
- 2014-2018 **SPB Polytechnic University** JavaScript Teacher
- 1995-1999 **Moscow City University** Computer Science Teacher

### Graduated
- 1992-1997 **Moscow Pedagogical State University** \
_**Master of Science**_, Mathematics and computer science

<a data-toc-label="Skills" data-toc-icon="bx-cog"></a>

## Skills

### IT
- JS fullstack: **FE, BE, Embeded**
- OS: **Windows, Ubuntu**
- Management: **up to 20 people team**
- Teach CS levels: **Upper primary schools, College, University**

### Languages
- JavaScript **proficiency**, Vanilla dialect
- Python, HTML, CSS, SQL, UML, Markdown **are used in work**
- Pascal, Delphi, C#, Perl, SSI, PHP, ASP<span>.</span>NET, VBScript, PowerShell **used to be used in work**
- Russian **fluent**
- English **B2**

### Interests
- Mainly: Fatherhood
- Outdoors: Hiking, Canoeing, Active games
- Indoors: Reading, Board games (especially tafl, chess, go), Сard games (primarily poker)

<a data-toc-label="Sample" data-toc-icon="bxl-javascript"></a>

## Sample JavaScript

There is a solve of [Vigenère Cipher Helper](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3) problem from CodeWars.

```javascript
class VigenereCipher {
  static #keygen = abc => [...Array(abc.length)].map(x => abc[~~(Math.random() * abc.length)]).join``
  #abc = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  #key
  constructor(key, abc = this.#abc) {
    this.#abc = abc;
    this.#key = key || VigenereCipher.#keygen(this.#abc);
  }
  #char(x, i, step) {
    const [key, abc] = [this.#key, this.#abc];
    if (!key || !abc.includes(x)) return x;
    const shift = step * abc.indexOf(key[i % key.length]);
    return abc[(abc.indexOf(x) + shift + abc.length) % abc.length];
  }
  #line(str, step) {
    return str.split``.map((x, i) => this.#char(x, i, step)).join``;
  }
  get key() { return this.#key }
  encode(str) { return this.#line(str, 1) }
  decode(str) { return this.#line(str, -1) }
}

// usage
let code, text = 'I’d far rather be happy than right any day.';

const c1 = new VigenereCipher('douglasadams', 'abcdefghijklmnopqrstuvwxyz');
code = 'I’x qaj uafzhf hp zaspk wvut ragkt sqm jly.';
console.assert(c1.encode(text) === code);
console.assert(c1.decode(code) === text);

const c2 = new VigenereCipher();
code = c2.encode(text);
console.assert(text !== code);
console.assert(c2.decode(code) === text);

const c3 = new VigenereCipher();
console.assert(c1.key !== c2.key);
console.assert(c2.key !== c3.key);
code = c3.encode('Hello, World!'); // 'MLwrE,hbGvyX!' or 'M Trv,YHGLCp!'
console.assert(c3.decode(code) === 'Hello, World!');

const c4 = new VigenereCipher(c2.key);
code = c4.encode(text);
console.assert(text !== code);
console.assert(c2.decode(code) === text);
```


<aside class="last-update">
  Last CV update: <time datetime="2021-09-24">24th September, 2021</time>
</aside>

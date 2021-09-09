# Maxim Zorin &mdash; **Lead JavaScript Developer**
<img align="right" width="30%" src="photo.jpg">

<div style="font-size: 150%"></div>

<blockquote>
mxn42 | <a href="mailto:maxim.zorin@gmail.com">maxim.zorin@gmail.com</a> | <a href="https://www.linkedin.com/in/maximzorin/">LinkedIn</a> | Saint Petersburg, Russia
</blockquote>

\
I like _to_ javascript.

## Experience

- 2018-2021 **Zodiac Systems** Lead JS Developer
- 2013-2018 **Zodiac Interactive** Head JS Technologies
- 2012-2013 **JetBrains** Senior UI Developer
- 2010-2012 **Zodiac Interactive** Senior JS Developer
- 2006-2010 **Quest Software** Senior Software Developer
- 2004-2006 **Quest Software** C# Developer
- 2002-2004 **Quest Software** Head Quality Assurance
- 2000-2001 **Novalumen** Lead Quality Assurance
- 1999-2000 **GMC** Webmaster
- 1995-1999 **MPGU** Teacher of mathematics and computer science

## Education

1992-1997 **Moscow Pedagogical State University** \
_**Master of Science**_\, Mathematics and computer science

## Skills

**Basic Skills**: JS full-stack.

**Languages**: JavaScript proficiency, Python advanced, and more others B2.

**Languages**: Russian fluent; English B2.

## Sample JavaScript code

There is a problem from CodeWars.

**[Vigenère Cipher Helper](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3)**
```javascript
class VigenèreCipher {
  constructor(key, abc) {
    Object.assign(this, { key, abc });
  }
  char(x, i, forward) {
    const { key, abc } = this;
    if (!abc.includes(x)) return x; 
    const shift = (forward ? 1 : -1) * abc.indexOf(key[i % key.length]);
    return abc[(abc.indexOf(x) + shift + abc.length) % abc.length];
  }
  encode(str, forward = true) {
    return str.split('').map((x, i) => this.char(x, i, forward)).join('');
  }
  decode(str) {
    return this.encode(str, false);
  };
}
```

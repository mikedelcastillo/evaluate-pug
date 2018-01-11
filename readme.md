# Evaluate Pug

Hello I like using Emmet but it can't do multiple lines so I made this package.

## What does it do?

Well, you can select code like this:

```php
<div class="code-i-already-wrote">

  .section#footer-wrapper
    .center-wrapper
      .copy-text Copyright Mike del Castillo
    .social-wrapper
      each site in ["facebook", "twitter", "snapchat"]
        a(href=`http://${site}.com`)= site

  <?php echo "oh look, i can be working in a PHP file" ?>
</div>
```

into this:

```php
<div class="code-i-already-wrote">

  <div class="section" id="footer-wrapper">
    <div class="center-wrapper">
      <div class="copy-text">Copyright Mike del Castillo</div>
    </div>
    <div class="social-wrapper">
      <a href="http://facebook.com">facebook</a>
      <a href="http://twitter.com">twitter</a>
      <a href="http://snapchat.com">snapchat</a>
    </div>
  </div>

  <?php echo "oh look, i can be working in a PHP file" ?>
</div>
```

It's Emmet on steroids.

## How to use

1. Install the package through Atom.
2. Select Pug code in editor.
  - You can just select the lines partially.
3. Run `Evaluate Pug`
  - Hit `Command/Control-Shift-Space`
  - Or right click and select `Evaluate Pug`
4. Continue coding.

## It supports

- Auto-indentation
- Full Pug capabilities, even Javascript
- PHP, HTML and even JS files
  - It doesn't really matter what file actually
- Uhm

## Author

Hello, I'm Mike del Castillo and I like getting things done. Visit my [website](http://mikedc.io)!

Back to coding.

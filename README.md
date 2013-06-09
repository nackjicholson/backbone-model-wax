# backbone-model-wax

[![Build Status](https://secure.travis-ci.org/CascadeEnergy/backbone-model-wax.png?branch=master)](https://travis-ci.org/CascadeEnergy/backbone-model-wax)

Backbone.Model mixin which works with backbone-collection-wax to provide methods for controlling 'on'/'off' state in collections.

Contributers:

- Will Vaughn

---
### [Contents](id:contents)
- [Install](#install)
- [Tests](#tests)
- [Support](#support)

---
[top](#contents)
### [Install](id:install)

**This mixin is a dependency of [backbone-collection-wax](https://github.com/CascadeEnergy/backbone-collection-wax)**.

Go there for more documentation.

**Don't install model-wax directly install collection-wax and you will also get model-wax.**

Bower is a package manager for the web built by twitter, you should check it out, and download this package.

`$ npm install bower -g`  
`$ bower install backbone-collection-wax --save `

The `--save` flag will save backbone-collection-wax as a dependency in your project's `bower.json` file.


---
[top](#contents)
### [Tests](id:tests)

Tests are in the `test/` directory, they are written with mocha, and run via `testrunner.html`. To get the dependencies for testing, you must have npm and bower installed: `npm install -g bower`.

Single Test Run. This is how travis-ci runs the tests.

```
$ git clone git@github.com:CascadeEnergy/backbone-model-wax.git  
$ cd backbone-model-wax/
$ npm install
$ bower install
$ npm test
```

**OR**  

Run them in the terminal as you Develop!!!

```
$ git clone git@github.com:CascadeEnergy/backbone-model-wax.git  
$ cd backbone-model-wax/
$ npm install
$ bower install
```

Start a server in one terminal window.  
`$ grunt nodemon`

And then in another terminal window.

```   
$ cd backbone-model-wax/ 
$ grunt watch
```

and then just start developing. Grunt will run automated tests with [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs), and JSHint whenever you save files.

Also tests in the browser at <http://localhost:8000/testrunner.html>

---
[top](#contents)
### [Support](id:support)

You can make an issue. Pull requests welcome.

[@nackjicholson](http://twitter.com/nackjicholson)
If I'm on my computer I'll be in IRC freenode `#sensei`

component generated with yeoman and [backbone-module](https://github.com/nackjicholson/generator-backbone-module)
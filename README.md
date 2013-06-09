# backbone-model-wax

[![Build Status](https://secure.travis-ci.org/CascadeEnergy/backbone-model-wax.png?branch=master)](https://travis-ci.org/CascadeEnergy/backbone-model-wax)

description

Contributers:

- Will Vaughn

---
### [Contents](id:contents)
- [Usage](#usage)
- [Install](#install)
- [Why](#why)
- [Example](#example)
- [API](#api)
- [Tests](#tests)
- [Support](#support)

---
### [Usage](id:usage)

A waxy backbone collection needs to at least extend collectionwax, and listen for a `wax` event to be handled by the `breathe()` method.

    var MyCollection = Backbone.Collection.extend{
      model: MyModel, // see below.

      initialize: function() { 
        // Don't forget to breathe. Very Important!
        this.on('wax', this.breathe, this)
      }
    }

    // Mixin.
    _.extend(MyCollection.prototype, collectionwax)

Also, its models need to extend modelwax.

    var MyModel = Backbone.Model.extend({
      // do normal model stuff here.
    })

    _.extend(MyModel.prototype, modelwax)

---
[top](#contents)
### [Install](id:install)

This mixin is on a team with **[backbone-collection-wax](https://github.com/CascadeEnergy/backbone-collection-wax)**.

I couldn't define a circular dependency. So just don't install model-wax, go through collection-wax instead.

Bower is a package manager for the web built by twitter, you should check it out, and download this package.

`$ npm install bower -g`  
`$ bower install backbone-collection-wax --save `

The `--save` flag will save backbone-collection-wax as a dependency in your project's `bower.json` file.

By installing collection-wax you will also get model-wax. 

---
[top](#contents)
### [Why](id:why)

---
[top](#contents)
### [Example](id:example)

see [collection-wax example](https://github.com/CascadeEnergy/backbone-collection-wax#example). 

---
[top](#contents)
### [API](id:api)

  _documentation needed_

  - **wax()**
  - **isOn()**

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
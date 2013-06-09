define([
  'jquery',
  'backbone',
  'chai',
  'lib/backbone-model-wax'
], function($, Backbone, chai, modelwax) { 
  'use strict';

  var expect = chai.expect;

  describe('model-wax', function() {
    var HeroModel
      , hero
      , mockHero; 

    mockHero = {name: 'Daniel LaRusso'};

    beforeEach(function() {
      HeroModel = Backbone.Model.extend({});
      _.extend(HeroModel.prototype, modelwax);

      hero = new HeroModel(mockHero);
    });

    afterEach(function() {
      hero.off();
      hero = undefined;
    });

    it('should be an object', function() {
      expect(modelwax).to.be.a('object');
    });

    it('hero mock should be Daniel LaRusso', function() {
      expect(hero.get('name')).to.equal("Daniel LaRusso"); 
    });

    it('hero mock start with on: undefined', function() {
      expect(hero.get('on')).to.not.exist;
    });

    describe('.wax()', function() {
      it('should setup a "wax" event handler when passed a function', function(done) {
        var spy;

        spy = function() {
          done();
        };

        hero.wax(spy);
        hero.trigger("wax");
      });

      it('should trigger a "wax" event and pass along the model, and any options', function(done) {
        var options
          , spy
          , spy2;

        options = {foo: "bar"};

        spy = function() {
          expect(arguments.length).to.equal(2);
          var args = [].slice.call(arguments, 0);
          expect(args).to.contain(hero);
          expect(args).to.contain(options);
        };
        spy2 = function() {
          expect(arguments.length).to.equal(1);
          var args = [].slice.call(arguments, 0);
          expect(args).to.contain(hero);
          done();
        };

        hero.wax(spy);

        hero.wax(options);
        hero.off();

        hero.wax(spy2);
        hero.wax();
        hero.off();
      });

      it('should be chainable', function() {
        var val;

        val = hero.wax();
        expect(val).to.eql(hero);
      });
    });

    describe('.isOn()', function() {
      it('should return true when on is true', function() {
        var val;

        hero.set({on: true});
        val = hero.isOn();
        expect(val).to.be.true;
      });

      it('should return false when on is false', function() {
        var val;

        hero.set({on: false});
        val = hero.isOn();
        expect(val).to.be.false;
      });
    }); 

    describe('._waxOn', function() {
      it('should set "on" attribute to "true", and pass along options if provided.', function(done) {
        var obj
          , spy
          , spy2;

        obj = {foo: "bar"};

        spy = function(model, value, options) {
          expect(model.isOn()).to.be.true;
          expect(options).to.be.empty;
        };

        spy2 = function(model, value, options) {
          expect(model.isOn()).to.be.true;
          expect(options).to.eql(obj);
          done();
        };

        hero.on("change:on", spy);
        hero._waxOn();
        hero.off();

        hero.set({on: false});
        expect(hero.isOn()).to.be.false;

        hero.on("change:on", spy2);
        hero._waxOn(obj);
        hero.off();
      });
    });

    describe('._waxOff', function() {
      it('should set "on" attribute to "false", and pass along options if provided.', function(done) {
        var obj
          , spy
          , spy2;

        obj = {foo: "bar"};

        spy = function(model, value, options) {
          expect(model.isOn()).to.be.false;
          expect(options).to.be.empty;
        };

        spy2 = function(model, value, options) {
          expect(model.isOn()).to.be.false;
          expect(options).to.eql(obj);
          done();
        };

        // Set to true, before building listeners.
        hero.set({on: true});
        expect(hero.isOn()).to.be.true;

        hero.on("change:on", spy);
        hero._waxOff();
        hero.off();

        // Set to true again.
        hero.set({on: true});
        expect(hero.isOn()).to.be.true;

        hero.on("change:on", spy2);
        hero._waxOff(obj);
        hero.off();
      });
    });
  });
});
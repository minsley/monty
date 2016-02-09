'use strict';

/**
 * @ngdoc function
 * @name mhApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mhApp
 */
angular.module('mhApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    return {
        startGame: startGame
    };
  
    function startGame(){
        alert("start");
    }
  });

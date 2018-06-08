'use strict';

var app = angular.module('JVS', []);

app.run(['pads', '$q', '$rootScope', '$timeout', function(pads, $q, $rootScope, $timeout) {
  $rootScope.loading = true;

  pads.loadInstruments().then(function(result) {
    pads.loadSequence().then(function(result) {
      $rootScope.machine = pads;
      $rootScope.tempo = pads.tempo.call(this);
      $rootScope.loading = false;
    })
  });
}]);

(function(){
    angular
          .module('weatherApp')
          .directive('weatherDisplay', weatherDisplay);

    function weatherDisplay(){
      return {
        restrict: "EA",
        scope:{
          weather: "=weather"
        },
        templateUrl: "/common/directives/weatherDisplay/weatherDisplay.template.html",
        controller: 'weatherDisplayCtrl as wdvm'
      };
    }
})();

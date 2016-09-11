(function(){
  angular
        .module('weatherApp')
        .directive('tempDisplay', tempDisplay);

      function tempDisplay(){
        return {
          restrict: "EA",
          scope: {
            temperature: "=temp"
          },
          templateUrl: "/common/directives/tempDisplay/tempDisplay.template.html"
        };
      }
})();

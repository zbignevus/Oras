(function(){
  angular.module('weatherApp', ['ngRoute']);

      function config($routeProvider, $locationProvider){
        $routeProvider
          .when('/', {
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: "vm"

          })
          .when('/about', {
            templateUrl: 'about/about.view.html',
            controller: 'aboutCtrl',
            controllerAs: 'vm'
          })
          .otherwise({
            redirectTo: '/'
          });

          //$locationProvider.html5Mode(true);
      };

      angular.module('weatherApp')
         .config(['$routeProvider', '$locationProvider', config]);
})();

/*
  var mainCtrl = function($scope){
  $scope.myInput = "World";
};

angular.module('weatherApp',[])
      .controller('mainCtrl', mainCtrl);
*/

(function(){
    angular
          .module('weatherApp')
          .controller('homeCtrl', homeCtrl);


    function homeCtrl($http, weatherData){
    var vm = this;
    vm.location = "";
    vm.onSubmit = function(cityName){
        weatherData
        .getByCity(cityName)
        .then(function(response){
          vm.location = response.data;
        },
          function(response){
          console.log(response.e);
        });
    };


  };
})();

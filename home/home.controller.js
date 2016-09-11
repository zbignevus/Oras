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
        .success(function(data){
          vm.location = data;
        })
        .error(function(e){
          console.log(e);
        });
    };


  };
})();

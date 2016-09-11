(function(){
    angular
          .module('weatherApp')
          .service('weatherData', weatherData);

    function weatherData($http) {
      var getByCity = function(city){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast/city?q=' + city + '&units=metric&APPID=cf21a23b703ecdb8416f51062f5718fa');
      };
    return {
      getByCity: getByCity
    };
  }
})();

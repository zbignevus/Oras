(function(){
    angular
          .module('weatherApp')
          .service('weatherData', weatherData);

    function weatherData($http) {
      var getByCity = function(city){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast/city?q=' + city + '&units=metric&APPID=16b2a3a252da61359cf16176920cb03f');
      };
    return {
      getByCity: getByCity
    };
  }
})();

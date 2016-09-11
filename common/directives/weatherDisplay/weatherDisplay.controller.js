(function(){
  angular
        .module('weatherApp')
        .controller('weatherDisplayCtrl', weatherDisplayCtrl);

    function weatherDisplayCtrl(){
      var vm = this;
      vm.date = new Date();
      vm.hour = vm.date.getHours();


    }

})();

var nodeDealerServices = angular.module('nodeDealerServices', []);

nodeDealerServices.service("serviceObj", function () {

  var obj;

  return {
    setValue: function (deal) {
       obj = deal
    },
    getValue: function () {
      return obj;
    }
  }

});

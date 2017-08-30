
angular.module('apicliente').controller('NewClienteController', function ($scope, $location, locationParser, flash, ClienteResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.cliente = $scope.cliente || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The cliente was created successfully.'});
            $location.path('/Clientes');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        ClienteResource.save($scope.cliente, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Clientes");
    };
});
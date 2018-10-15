var main = angular.module('main', ['ngCookies']);

main.controller('mainController', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {

    $scope.getItemSrc = function(src){
        return src.split(';')[0];
    };

    $scope.showModal = function (e, itemId) {
        $http.get('/items/' + itemId).then(function (data) {
            $scope.item = data.data;
            $scope.itemPhotos = $scope.item.src.split(';');
            console.log($scope.itemPhotos);
            $('.js-modal1').addClass('show-modal1');
        });
    };

    $scope.closeModal = function () {
        delete $scope.item;
        delete $scope.itemPhotos;
        $('.js-modal1').removeClass('show-modal1');
    };


}]);
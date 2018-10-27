var app = angular.module('main', []);

app.controller('productController', ['$scope', '$http', function ($scope, $http) {

    $scope.items = [
                  {name: "Шапка 'Бабусина Умнічка' Блакитна", src: "images\\catalog\\hats\\Hat_Blue1.jpg;images\\catalog\\hats\\Hat_Blue2.jpg;", description: "100%", price: 200},
                  {name: "Шапка 'Буденна' Сіра", src: "images\\catalog\\hats\\Hat_Grey1.jpg;images\\catalog\\hats\\Hat_Grey2.jpg;", description: "100%", price: 200},
                  {name: "Шапка 'Мамина Доця' Рожева", src: "images\\catalog\\hats\\Hat_Pink1.jpg;images\\catalog\\hats\\Hat_Pink2.jpg;", description: "100%", price: 200},
                  {name: "Шапка 'Бамбоновий шарм' Блакитна", src: "images\\catalog\\hats\\Hat_Blue_Short1.jpg;images\\catalog\\hats\\Hat_Blue_Short2.jpg;", description: "100%", price: 180},
                  {name: "Шапка 'Справжня Гуцулка' Фіолетова", src: "images\\catalog\\hats\\Hat_Purple1.jpg;images\\catalog\\hats\\Hat_Purple2.jpg;", description: "100%", price: 150},
                  {name: "Шапка 'Соблазнітєльніца' Блакитна", src: "images\\catalog\\hats\\Hat_Blue_Long1.jpg;images\\catalog\\hats\\Hat_Blue_Long2.jpg;", description: "100%", price: 190},
                  {name: "Шапка 'Пацанський Фьюжн' Чорна", src: "images\\catalog\\hats\\Hat_Black1.jpg;", description: "100%", price: 210},
                  {name: "Шапка 'Дворова Класіка' Зелена", src: "images\\catalog\\hats\\Hat_Green1.jpg;images\\catalog\\hats\\Hat_Green2.jpg;", description: "100%", price: 200},
                  {name: "Шапка 'На Разборки' Синя", src: "images\\catalog\\hats\\Hat_Blue_Dark1.jpg;images\\catalog\\hats\\Hat_Blue_Dark2.jpg;", description: "100%", price: 200},
                  {name: "Шапка 'Пацанський Фьюжн' Синя", src: "images\\catalog\\hats\\Hat_Purple_Short1.jpg;images\\catalog\\hats\\Hat_Purple_Short2.jpg;", description: "100%", price: 250},
                  {name: "Шапка 'Класіка Агрєсора' Червона", src: "images\\catalog\\hats\\Hat_Red1.jpg;images\\catalog\\hats\\Hat_Red2.jpg;", description: "100%", price: 210}
    ]

    $scope.getItemSrc = function(src){
        return src.split(';')[0];
    };

    $scope.showModal = function (e, item) {
            $scope.item = item;
            $scope.item.amount = 1;
            $scope.itemPhotos = $scope.item.src.split(';');
            $('.js-modal1').addClass('show-modal1');
    };

    $scope.closeModal = function () {
        delete $scope.item;
        delete $scope.itemPhotos;
        $('.slick3-dots').find('li').removeClass('slick-active slick-center slick-current');
        $('.click-track').find('div').removeClass('slick-active slick-current');
        $('.js-modal1').removeClass('show-modal1');
    };


}]);
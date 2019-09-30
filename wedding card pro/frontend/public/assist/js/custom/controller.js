app.controller("wedCtrl", function($scope, wedFactory) {
    $scope.shareRes = function(isCheck) {
        console.log("controller call", isCheck);
        if (isCheck) {
            var myEl = angular.element(document.querySelector('#res'));
            myEl.addClass('response_show');
        } else {
            var myEl = angular.element(document.querySelector('#res'));
            myEl.removeClass('response_show');
        }
    }

    $scope.close = function() {
        window.location.reload();

    }

    $scope.confirmation = function() {
        // window.onbeforeunload = null;
        // console.log("paramter name is" + name);
        if (!$scope.name) {
            console.log("name is not defined");
            var req = angular.element(document.querySelector('#req'));
            req.addClass('valid_show');
        } else if ($scope.name) {
            console.log("name is ",
                $scope.name);
            var req = angular.element(document.querySelector('#req'));
            req.removeClass('valid_show');
            var promise = wedFactory.confirm($scope.name);
            promise.then(function(response) {
                var data = response.data;
                // console.log("data is ", data);
                alert(data + " " + $scope.name);
                window.location.reload();

            }, function(error) {
                console.log("error is ", error);
            });
        }
    }
});
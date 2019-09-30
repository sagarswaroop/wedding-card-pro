app.factory("wedFactory", function($http) {
    return {
        confirm: function(name) {


            var request_url = "http://localhost:3000/coming";
            // var obj = {
            //     'name': name
            // }
            // var obj = name;
            var promise = $http.post(request_url, { name });


            // var promise = $http.post(request_url, {
            //     // 'Content-Type': 'application/json',
            //     // method: 'post',
            //     // body: JSON.stringify(name)
            //     name
            // });
            return promise;
        }
    }
});
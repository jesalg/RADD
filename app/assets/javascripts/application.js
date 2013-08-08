//= require jquery.min
//= require suggest.min
//= require angular
//= require bootstrap.min
//= require angular-strap.min
//= require angular-resource
//= require services/sessionService
//= require services/recordService
//= require controllers/app
//= require controllers/record
//= require controllers/users

angular.module('radd', ['sessionService','recordService','$strap.directives'])
  .config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

        var interceptor = ['$location', '$rootScope', '$q', function($location, $rootScope, $q) {
            function success(response) {
                return response
            };

            function error(response) {
                if (response.status == 401) {
                    $rootScope.$broadcast('event:unauthorized');
                    $location.path('/users/login');
                    return response;
                };
                return $q.reject(response);
            };

            return function(promise) {
                return promise.then(success, error);
            };
        }];
        $httpProvider.responseInterceptors.push(interceptor);
  }])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {templateUrl:'/home/index.html'})
      .when('/record', {templateUrl:'/record/index.html', controller:RecordCtrl})
      .when('/users/login', {templateUrl:'/users/login.html', controller:UsersCtrl})
      .when('/users/register', {templateUrl:'/users/register.html', controller:UsersCtrl});
  }]);

angular.module('sessionService', [])
    .factory('Session', function($location, $http, $q) {
        // Redirect to the given url (defaults to '/')
        function redirect(url) {
            url = url || '/';
            $location.path(url);
        }
        var service = {
            login: function(email, password) {
                return $http.post('/login', {user: {email: email, password: password} })
                    .then(function(response) {
                        service.currentUser = response.data.user;
                        if (service.isAuthenticated()) {
                            //$location.path(response.data.redirect);
                            $location.path('/record');
                        }
                    });
            },

            logout: function(redirectTo) {
                $http.post('/logout').then(function() {
                    service.currentUser = null;
                    redirect(redirectTo);
                });
            },

            register: function(email, password, confirm_password) {
                return $http.post('/users.json', {user: {email: email, password: password, password_confirmation: confirm_password} })
                .then(function(response) {
                    service.currentUser = response.data;
                    if (service.isAuthenticated()) {
                        $location.path('/record');
                    }
                });
            },
            requestCurrentUser: function() {
                if (service.isAuthenticated()) {
                    return $q.when(service.currentUser);
                } else {
                    return $http.get('/current_user').then(function(response) {
                        service.currentUser = response.data.user;
                        return service.currentUser;
                    });
                }
            },

            currentUser: null,

            isAuthenticated: function(){
                return !!service.currentUser;
            }
        };
        return service;
    });

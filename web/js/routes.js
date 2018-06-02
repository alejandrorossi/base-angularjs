app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
      
        $stateProvider
        
        .state("home", {
            url: "/",
            templateUrl: "templates/login.html",
            controller: "LoginCtrl as login"
          })



});
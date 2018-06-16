const Routes = ($stateProvider, $urlRouterProvider) => {

        $urlRouterProvider.otherwise("/");
      
        $stateProvider
        
        .state("home", {
            url: "/",
            templateUrl: "templates/home.html",
            controller: "HomeController as hm",
            // params:{
            //   parametro: null
            // }
          })
		//   .state("another", {
        //     url: "/",
        //     templateUrl: "templates/another.html",
        //     controller: "another as another",
        //     // params:{
        //     //   param: null
        //     // }
        //   })


};
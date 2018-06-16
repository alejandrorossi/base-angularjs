var app = angular.module('app', ['ui.bootstrap','ui.router','ngAnimate','ngTouch'])
    
    .config(Routes)
    // .factory('aService', AService)
    .controller('homeController', HomeController)

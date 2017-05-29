angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "home/home.html"
        })
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/tabs.html"
        })
        .state('hospital', {
            url: "/hospital",
            templateUrl: "hospital/tabs.html"
        })
        .state('cadastro-paciente', {
            url: "/cadastro-paciente",
            templateUrl: "cadastro-paciente/cadastro-paciente.html"
        })
        .state('cadastro-funcionario', {
            url: "/cadastro-funcionario",
            templateUrl: "cadastro-funcionario/cadastro-funcionario.html"
        })
        .state('nova-consulta', {
            url: "/nova-consulta",
            templateUrl: "nova-consulta/nova-consulta.html"
        })


        $urlRouterProvider.otherwise('/home')
    }

])
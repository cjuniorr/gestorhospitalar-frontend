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
            templateUrl: "cadastro-paciente/cadastro-pacienteok.html",
            controller: 'PacienteCtrl'
        })
        .state('cadastro-funcionario', {
            url: "/cadastro-funcionario",
            // templateUrl: "cadastro-funcionario/cadastro-funcionario.html"
            templateUrl: "cadastro-funcionario/cadastro-funcionariook.html",
            controller: 'FuncionarioCtrl'
        })
        .state('cadastro-consulta', {
            url: "/cadastro-consulta",
            templateUrl: "cadastro-consulta/cadastro-consultaok.html",
            controller: 'ConsultaCtrl'
        })


        $urlRouterProvider.otherwise('/home')
    }

]).controller('FuncionarioCtrl',['$scope', '$http', 'msgs', function($scope, $http, msgs){

    const url = 'http://localhost:3003/api/funcionarios'

    $scope.listaFuncionario = [];
    $scope.teste = "AEEE";

    $scope.buscaFuncionarios = function() {
        debugger;
            $http.get(url).then(function(response){
                $scope.funcionarioNovo = {}
                $scope.funcionarios = response.data
                // $scope.tab = tabs.show({ tabList: true, tabCreate: true})
        })
    }

    $scope.criarFuncionario = function () {
            $http.post(url, $scope.funcionarioNovo).then(function(response){
               $scope.buscaFuncionarios();
            // $scope.refresh();
            msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error){
            msgs.addError('Há valores obrigatórios')
        })
    }


    $scope.removerFuncionario = function(funcionario) {
        
        var urlRemove = url + '/' + funcionario._id;

        $http.delete(urlRemove).then(function(response){
            msgs.addSuccess('Removido com sucesso!')
            $scope.buscaFuncionarios();

        }).catch(function(error){
            msgs.addError('Erro na remoção!')
        })

    }

    $scope.buscaFuncionarios();

}]).controller('PacienteCtrl',['$scope', '$http', 'msgs', function($scope, $http, msgs){

    const url = 'http://localhost:3003/api/pacientes'

    $scope.pacienteNovo = {}

    $scope.buscaPacientes = function() {
            $http.get(url).then(function(response){
                $scope.pacienteNovo = {}
                $scope.pacientes = response.data
                // $scope.tab = tabs.show({ tabList: true, tabCreate: true})
        })
    }

    $scope.criarPacientes = function () {
            $http.post(url, $scope.pacienteNovo).then(function(response){
               $scope.buscaPacientes();
            // $scope.refresh();
            msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error){
            msgs.addError('Há valores obrigatórios')
        })
    }

    $scope.removerPaciente = function(paciente) {
        var urlRemove = url + '/' + paciente._id;

        $http.delete(urlRemove).then(function(response){
            msgs.addSuccess('Removido com sucesso!')
            $scope.buscaPacientes();
        }).catch(function(error){
            msgs.addError('Erro na remoção!')
        })

    }

    $scope.buscaPacientes();

}]).controller('ConsultaCtrl',['$scope', '$http', 'msgs', function($scope, $http, msgs){

    const url = 'http://localhost:3003/api/consultas';

    $scope.medicos = [];
    $scope.pacientes = [];
    $scope.consultaNovo = {}

    $scope.buscaMedicos = function() {
        var urlMedicos = 'http://localhost:3003/api/funcionarios'
        $http.get(urlMedicos).then(function(response){
            $scope.medicos = response.data
            // $scope.tab = tabs.show({ tabList: true, tabCreate: true})
        })
    }

    $scope.buscaPacientes = function() {
        var urlPacientes = 'http://localhost:3003/api/pacientes'
        $http.get(urlPacientes).then(function(response){
            $scope.pacientes = response.data
            // $scope.tab = tabs.show({ tabList: true, tabCreate: true})
        })
    }

    $scope.buscaConsultas = function() {
            $http.get(url).then(function(response){
                $scope.consultaNovo = {}
                debugger;
                $scope.consultas = response.data
                // $scope.tab = tabs.show({ tabList: true, tabCreate: true})
        })
    }

    $scope.criarConsulta = function () {
        debugger;

        $scope.consultaNovo.medico = angular.fromJson($scope.consultaNovo.medico);
        $scope.consultaNovo.paciente = angular.fromJson($scope.consultaNovo.paciente);

        // var urlCriarConsulta = url + '/' + 
        console.log('entrou CriarConsulta')
            $http.post(url, $scope.consultaNovo).then(function(response){
               $scope.buscaConsultas();
                msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error){
            console.log('DEU ERRO')
            console.log(error); 
            msgs.addError('Há valores obrigatórios')
        })
    }

    $scope.removerConsulta = function(consulta) {
        debugger;
        var urlRemove = url + '/' + consulta._id;

        $http.delete(urlRemove).then(function(response){
            debugger;
            msgs.addSuccess('Removido com sucesso!')
            $scope.buscaConsultas();
        }).catch(function(error){
            debugger;
            msgs.addError('Erro na remoção!')
        })

    }

    $scope.buscaConsultas();
    $scope.buscaMedicos();
    $scope.buscaPacientes();

}])
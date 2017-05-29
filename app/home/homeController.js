angular.module('app').controller('HomeCtrl', [
    '$scope',
    '$http',
    HomeController
])

function HomeController($scope, $http){

    $scope.retornaPacientes = function(){
        const url = 'http://localhost:3003/api/pacientes/count'
        $http.get(url).then(function(result){
                $scope.quantidadePacientes = result.data.value;
            })
    }

    $scope.retornaFuncionarios = function(){
        const url = 'http://localhost:3003/api/funcionarios/count'
        $http.get(url).then(function(result){
                $scope.quantidadeFuncionarios = result.data.value;
            })
    }


    $scope.retornaConsultas = function(){
        const url = 'http://localhost:3003/api/consultas/count'
        $http.get(url).then(function(result){
                $scope.quantidadeConsultas = result.data.value;
            })
    }

    $scope.retornaPacientes();
    $scope.retornaFuncionarios();
    $scope.retornaConsultas();
}
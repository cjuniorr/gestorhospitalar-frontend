angular.module('app').controller('CadastroFuncionarioCtrl', [
    '$http',
    '$scope',
    'msgs',
    'tabs',
    CadastroFuncionarioController
])

function CadastroFuncionarioController($http, $scope, msgs, tabs){
    const url = 'http://localhost:3003/api/funcionarios'
    $scope.funcionarioNovo = {}
    $scope.funcionarios = []
    $scope.tab = {}

    $scope.CriarFuncionario = function(){
        $http.post(url, $scope.funcionarioNovo).then(function(response){
            $scope.refresh();
            msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error){
            msgs.addError('Há valores obrigatórios')
        })
    }

    $scope.refresh = function() {
        $http.get(url).then(function(response){
            $scope.funcionarioNovo = {}
            $scope.funcionarios = response.data
            $scope.tab = tabs.show({ tabList: true, tabCreate: true})
        })
    }

    $scope.refresh();
}
angular.module('app').factory('tabs', [TabsFactory])

function TabsFactory(){

    function show({
        tabList = false,
        tabCreate = false,
        tabUpdate = false,
        tabDelete = false
    }) {
        tabList = tabList
        tabCreate = tabCreate
        tabUpdate = tabUpdate
        tabDelete = tabDelete
    }

    return { show }
}
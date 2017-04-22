//similar to modules on Node, the [] would be a list
//of modules this module would depend on
angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc(){
    this.people = clientPeople;
}
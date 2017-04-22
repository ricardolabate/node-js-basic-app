//similar to modules on Node, the [] would be a list
//of modules this module would depend on
angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc(){
    //as vm = view model on index.ejs
    this.message = 'Hello';

    this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }
    ]
}
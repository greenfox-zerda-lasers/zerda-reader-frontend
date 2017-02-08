
require('./lib/angular.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
require('./lib/angular-mocks.js');

require('./node_modules/semantic-ui/dist/semantic.min.css');
require('./node_modules/semantic-ui/dist/components/accordion.css');
require('./node_modules/semantic-ui/dist/components/popup.css');
require('./style/login.scss');
require('./style/home.scss');
// require('./node_modules/ngstorage/ngStorage.js');
require('./router.js');
require('./app/components/favorite.directive.js');

require('./app/login/login.controller.js');
require('./app/signup/signup.controller.js');
require('./app/navbar/navbar.controller.js');
require('./app/sidebar/sidebar.controller.js');
require('./app/addsubscription/addsubscription.controller.js');
require('./app/mainlist/mainlist.controller.js');


require('./app/home/home.js');

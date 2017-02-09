// Let's require all files that need to be bundled

// Import angular modules:
require('./lib/angular.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
require('./lib/angular-mocks.js');
require('./node_modules/angular-resource/angular-resource.js');
require('./node_modules/ng-infinite-scroll/build/ng-infinite-scroll.js');

// Import Semantic UI modules (styles):
require('./node_modules/semantic-ui/dist/semantic.min.css');
require('./node_modules/semantic-ui/dist/components/accordion.css');
require('./node_modules/semantic-ui/dist/components/popup.css');

// Import custom Sass styling:
require('./style/login.scss');
require('./style/home.scss');

// Router:
require('./router.js');

// Services:
require('./app/sidebar/api.factory.js');

//Directives:
require('./app/components/favorite.directive.js');

// All the controllers:
require('./app/login/login.controller.js');
require('./app/signup/signup.controller.js');
require('./app/home/home.js');

require('./app/navbar/navbar.controller.js');
require('./app/sidebar/sidebar.controller.js');
require('./app/addsubscription/addsubscription.controller.js');
require('./app/mainlist/mainlist.controller.js');

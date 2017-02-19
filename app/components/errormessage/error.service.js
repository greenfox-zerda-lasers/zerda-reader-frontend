(function(){
  angular
    .module('zerdaReader')
    .service('errorMessage', errorMessage);

    errorMessage.$inject = ['ModalService'];

    function errorMessage(ModalService) {
      const messages = [
        { status: 404, message: 'The server doesn\'t respond.' },
        { status: 500, message: 'Internal server error.' },
      ]
      const service = {
        show: show,
      };

      return service;


      function show(error) {

        let displayMessage = messages.filter(function (item) {
          if (item.status === error) {
            console.log(item);
            console.log(item.message);
            return item.message;
          }
        });
        console.log(displayMessage);
        ModalService.showModal({
          templateUrl: 'app/errormessage/errormessage.html',
          controller: 'ErrorController',
          controllerAs: 'errorCtrl',
          inputs: {
            error: displayMessage[0].message,
          }
        })
        // .then(function (modal) {
        // });
      }
    }
})();

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
        let displayMessage;

        messages.forEach(function (item) {
          if (item.status === error) {
            displayMessage = item.message;
            return
          } else {
            displayMessage = 'Something went wrong'
          }
        });

        console.log(displayMessage);
        ModalService.showModal({
          templateUrl: 'app/components/errormessage/errormessage.html',
          controller: 'ErrorController',
          controllerAs: 'errorCtrl',
          inputs: {
            error: displayMessage + error,
          }
        })
        // .then(function (modal) {
        // });
      }
    }
})();

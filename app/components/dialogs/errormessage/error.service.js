(function () {
  angular
    .module('zerdaReader')
    .service('errorMessage', errorMessage);

  errorMessage.$inject = ['ModalService'];

  function errorMessage(ModalService) {
    const service = {
      showErrorModal: showErrorModal,
    };
    const messages = [
      { status: 404, message: 'The server doesn\'t respond.' },
      { status: 500, message: 'Internal server error.' },
    ];

    function showErrorModal(error) {
      let displayMessage = 'Something went wrong';
      messages.forEach(function (item) {
        if (item.status === error) {
          displayMessage = item.message;
        }
      });
      ModalService.showModal({
        templateUrl: 'app/components/dialogs/errormessage/errormessage.html',
        controller: 'ErrorController',
        controllerAs: 'errorCtrl',
        inputs: {
          error: error + ': ' + displayMessage,
        },
      });
    }
    return service;
  }
})();

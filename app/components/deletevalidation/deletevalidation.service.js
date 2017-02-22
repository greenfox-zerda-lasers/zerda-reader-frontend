(function(){
  angular
    .module('zerdaReader')
    .service('deleteValidation', deleteValidation);

    deleteValidation.$inject = ['ModalService'];

    function deleteValidation(ModalService) {
      const service = {
        show: show,
      };

      return service;

      function show() {
        ModalService.showModal({
          templateUrl: 'app/components/deletevalidation/deletevalidation.html',
          controller: 'DeleteValidationController',
          controllerAs: 'deleteValidationCtrl',
        }).then(function(modal) {
          modal.element.modal();
          modal.close().then(function (result) {
            console.log(result);
          });
        });
      }
    }
})();

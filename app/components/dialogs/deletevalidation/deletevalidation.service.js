'use strict';

(function () {
  angular
    .module('zerdaReader')
    .service('deleteValidation', deleteValidation);

    deleteValidation.$inject = ['$rootScope', 'ModalService', '$q'];

    function deleteValidation($rootScope, ModalService, $q) {
      const service = {
        showDeleteModal: showDeleteModal,
      };

      function showDeleteModal() {
        return $q(function (resolve, reject) {
          ModalService.showModal({
            templateUrl: 'app/components/dialogs/deletevalidation/deletevalidation.html',
            controller: 'DeleteValidationController',
            controllerAs: 'deleteValidationCtrl',
          }).then(function (modal) {
            modal.close.then(function (result) {
              resolve(result)
            });
          });
        });
      }
      return service;
    }
})();

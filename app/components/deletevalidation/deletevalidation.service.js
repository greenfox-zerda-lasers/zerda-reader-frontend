(function(){
  angular
    .module('zerdaReader')
    .service('deleteValidation', deleteValidation);

    deleteValidation.$inject = ['$rootScope', 'ModalService', '$q'];

    function deleteValidation($rootScope, ModalService, $q) {
      const service = {
        show: show,
      };

      return service;

      function show() {
        return $q(function (resolve, reject) {
          ModalService.showModal({
            templateUrl: 'app/components/deletevalidation/deletevalidation.html',
            controller: 'DeleteValidationController',
            controllerAs: 'deleteValidationCtrl',
          }).then(function (modal) {
            modal.close.then(function (result) {
              resolve(result)
            });
          });
        });
      }
    }
})();

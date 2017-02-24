(function () {
  angular
    .module('zerdaReader')
    .service('loadingModal', loadingModal);

  loadingModal.$inject = ['ModalService'];

  function loadingModal(ModalService) {
    const service = {
      showloadingModal: showloadingModal,
      closeLoadingModal: closeLoadingModal,
    };
    let loading = {};

    function showloadingModal(active) {
      loading = ModalService.showModal({
        templateUrl: 'app/components/dialogs/loadingmodal/loadingmodal.html',
        controller: 'ModalController',
        controllerAs: 'modalCtrl',
      });
    }
    function closeLoadingModal(){
      loading.$$state.value.scope.modalCtrl.visibility = false;
    }
    return service;
  }
})();

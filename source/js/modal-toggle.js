'use strict';

(function () {
  var ESC_CODE = 27;

  var modal = document.querySelector('.modal');
  var modalInitButton = document.querySelector('.promotion__button');
  var modalCloseButton = modal.querySelector('.modal__button');
  var sizeList = modal.querySelector('.modal__size-list');

  modalInitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('visually-hidden');

    modalCloseButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('visually-hidden');
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_CODE && !modal.classList.contains('visually-hidden')) {
        modal.classList.add('visually-hidden');
      }
    });

    sizeList.addEventListener('click', function (evt) {
      var sizeElements = sizeList.querySelectorAll('.modal__size-item');

      if (evt.target.classList.contains('modal__size-item')) {
        for (var i = 0; i < sizeElements.length; i++) {
          sizeElements[i].classList.remove('modal__size-item--checked');
        }
        evt.target.classList.add('modal__size-item--checked');
      }
    });
  });

})();

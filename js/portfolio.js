const modalTriggers = document.querySelectorAll('.popup-trigger');
const modalCloseTrigger = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.overlay');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    // get scroll position
    var scrollPos = window.scrollY

    const { popupTrigger } = trigger.dataset;
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

    // show dialogue box
    popupModal.classList.add('is--visible');
    // darken background
    bodyBlackout.classList.add('is-blacked-out');

    // prevent scrolling in the background
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollPos}`;

    // close modal
    popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
      // enable scrolling
      document.querySelector('body').removeAttribute("style");
      // hide dialogue box
      popupModal.classList.remove('is--visible');
      // remove overlay
      bodyBlackout.classList.remove('is-blacked-out');

      // const body = document.body;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, scrollPos);
    })

    bodyBlackout.addEventListener('click', () => {
      // enable scrolling
      document.querySelector('body').removeAttribute("style");
      // hide dialogue box
      popupModal.classList.remove('is--visible');
      // remove overlay
      bodyBlackout.classList.remove('is-blacked-out');

      // const body = document.body;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, scrollPos);
    })
  })
});

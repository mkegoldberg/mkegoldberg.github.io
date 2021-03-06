/*
============================================
; Title:  Goldberg Portfolio
; Author: Mike Goldberg
; Date:   May 2020
; Description: JS for portfolio project
;===========================================
*/

const modalTriggers = document.querySelectorAll('.popup-trigger');
const modalCloseTrigger = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.overlay');

function goTo(section) {
  document.getElementById(section).scrollIntoView({block: 'start', behavior: 'smooth' });
}

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset;
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

    // show dialogue box
    popupModal.classList.add('is--visible');
    // darken background
    bodyBlackout.classList.add('is-blacked-out');

    // prevent scrolling in the background
    const body = document.body;
    body.style.overflow = 'hidden';

    // close modal
    popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
      // enable scrolling
      document.querySelector('body').removeAttribute("style");
      // hide dialogue box
      popupModal.classList.remove('is--visible');
      // remove overlay
      bodyBlackout.classList.remove('is-blacked-out');
    })

    bodyBlackout.addEventListener('click', () => {
      // enable scrolling
      document.querySelector('body').removeAttribute("style");
      // hide dialogue box
      popupModal.classList.remove('is--visible');
      // remove overlay
      bodyBlackout.classList.remove('is-blacked-out');
    })
  })
});

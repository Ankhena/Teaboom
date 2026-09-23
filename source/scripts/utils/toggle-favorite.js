const ACTIVE_CLASS = 'btn__favorite-active';

document.querySelectorAll('.product__favorite').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle(ACTIVE_CLASS);
  });
});

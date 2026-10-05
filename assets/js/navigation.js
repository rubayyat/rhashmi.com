/* Navigation is fully available without JavaScript.
   Only the compact, accessible mobile disclosure needs enhancement. */
(() => {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-navigation');
  if (!header || !button || !navigation) return;

  const smallScreen = window.matchMedia('(max-width: 760px)');
  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    navigation.classList.toggle('is-open', open);
  };
  header.classList.add('nav-enhanced');
  setOpen(false);

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && smallScreen.matches && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (smallScreen.matches && !header.contains(event.target)) setOpen(false);
  });
  const resetOnResize = () => {
    const focusedLinkWillHide = smallScreen.matches && navigation.contains(document.activeElement);
    setOpen(false);
    if (focusedLinkWillHide) button.focus();
  };
  if (smallScreen.addEventListener) smallScreen.addEventListener('change', resetOnResize);
  else smallScreen.addListener(resetOnResize);
})();

import {
  existClassInElement,
  getElementHeight,
  getNextElement,
  setStyle,
  toggleClass,
} from '../helpers.js';

export default function dropdown() {
  const classNameInstance = 'dropdown';
  const elements = document.querySelectorAll('.' + classNameInstance);

  if (elements.length < 1) return;

  const classNameActive = 'dropdown-on';
  const classNameSlow = 'dropdown-slow';
  const classNameFast = 'dropdown-fast';

  const slideSpeed = {
    slow: 50,
    fast: 20,
  };

  function valideteReturnSlideSpeed(element) {
    return (
      existClassInElement(element, classNameSlow, slideSpeed.slow) ??
      existClassInElement(element, classNameFast, slideSpeed.fast) ??
      slideSpeed.slow
    );
  }

  function slideUp(element, speed) {
    let interval;
    const elementHeight = getElementHeight(element);
    interval = setInterval(() => {
      elementHeight--;
      setStyle(element, [`height: ${elementHeight}px`]);
      if (elementHeight === 0) clearInterval(interval);
    }, 1000 * speed);
  }

  function slideDown() {}

  function eventClick(event) {
    const rootElement = event.target;
    const nextElement = getNextElement(rootElement);
    const nextElementHeight = getElementHeight(nextElement);
    const dropdownSpeed = valideteReturnSlideSpeed(rootElement);

    toggleClass(rootElement, classNameActive);
    const dropdownOn = existClassInElement(rootElement, classNameActive);
    console.log(dropdownOn);
    dropdownOn ? slideUp(nextElement, dropdownSpeed) : slideDown();
  }

  for (const element of elements) {
    element.onclick = eventClick;
  }

  console.log('end dropdown function.');
}

export function getNextElement(element) {
  return element.nextElementSibling ?? element.lastElementChild;
}

export function getElementHeight(element) {
  return element.clientHeight;
}

export function existClassInElement(
  element,
  className,
  chooseReturn = undefined
) {
  const pattern = RegExp('(' + className + ')');
  const isMatch = element.className.match(pattern) ? true : false;
  if (typeof chooseReturn === 'undefined') return isMatch;

  if (isMatch) return chooseReturn;
}

export function setStyle(element, arrayStyles) {
  element.style = arrayStyles.join(';');
}

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

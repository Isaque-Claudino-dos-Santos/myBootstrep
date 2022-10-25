for (const e of document.querySelectorAll('.dropdown span')) {
  e.onclick = () => e.classList.toggle('on');
}

const input = document.getElementById('urlInput');
const button = document.getElementById('loadButton');
const iframe = document.getElementById('frameArea');

button.addEventListener('click', () => {
  const url = input.value.trim();
  if (url) {
    iframe.src = url;
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
});

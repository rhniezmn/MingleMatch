(() => {
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.hostname.endsWith('.local');
  if (location.protocol !== 'https:' || local) return;
  const url = new URL('./', location.href).href;
  const code = qrcode(0, 'M');
  code.addData(url);
  code.make();
  const svg = code.createSvgTag({cellSize:8,margin:32,scalable:true});
  document.querySelector('#qr').innerHTML = svg;
  const link = document.querySelector('#site-link');
  link.href = url; link.textContent = url;
  const download = document.querySelector('#download');
  download.href = URL.createObjectURL(new Blob([svg], {type:'image/svg+xml'}));
  download.hidden = false;
  document.querySelector('#status').textContent = 'Scan to open the welcome screen.';
})();

// Mendapatkan referensi ke elemen HTML
const captureButton = document.getElementById('captureButton');
const locationData = document.getElementById('locationData');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const signatureCanvas = document.getElementById('signatureCanvas');
const clearSignature = document.getElementById('clearSignature');

// Fitur mengambil gambar dengan kamera
captureButton.addEventListener('click', () => {
  // Anda dapat menambahkan logika untuk mengakses kamera di sini
  alert('Mengambil gambar dengan kamera...');
});

// Fitur menampilkan lokasi
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    latitude.textContent = coords.latitude;
    longitude.textContent = coords.longitude;
  });
} else {
  locationData.textContent = 'Lokasi tidak tersedia';
}

// Fitur tanda tangan digital
const signatureContext = signatureCanvas.getContext('2d');
let isDrawing = false;

signatureCanvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  signatureContext.beginPath();
  signatureContext.moveTo(
    e.clientX - signatureCanvas.offsetLeft,
    e.clientY - signatureCanvas.offsetTop
  );
});

signatureCanvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  signatureContext.lineTo(
    e.clientX - signatureCanvas.offsetLeft,
    e.clientY - signatureCanvas.offsetTop
  );
  signatureContext.stroke();
});

signatureCanvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Tombol untuk menghapus tanda tangan
clearSignature.addEventListener('click', () => {
  signatureContext.clearRect(
    0,
    0,
    signatureCanvas.width,
    signatureCanvas.height
  );
});

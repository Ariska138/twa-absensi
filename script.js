// Mengambil Gambar dari Kamera
async function takePicture() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement('video');
    const captureButton = document.createElement('button');
    const canvas = document.createElement('canvas');

    // Menampilkan video dari kamera
    document.body.appendChild(video);
    video.srcObject = stream;
    video.play();

    // Mengambil gambar saat tombol di klik
    captureButton.textContent = 'Ambil Gambar';
    document.body.appendChild(captureButton);
    captureButton.addEventListener('click', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      const image = canvas.toDataURL('image/png');
      // Simpan atau kirim gambar sesuai kebutuhan Anda
    });
  } catch (error) {
    console.error('Gagal mengakses kamera:', error);
  }
}

// Mendapatkan Lokasi
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Gunakan latitude dan longitude sesuai kebutuhan Anda
      },
      (error) => {
        console.error('Gagal mendapatkan lokasi:', error);
      }
    );
  } else {
    console.error('Geolokasi tidak didukung di perangkat ini');
  }
}

// Membuat Tanda Tangan
function createSignature() {
  const signaturePad = new SignaturePad(
    document.getElementById('signature-pad')
  );
  // Konfigurasi SignaturePad sesuai kebutuhan Anda

  const clearButton = document.getElementById('clear-signature');
  clearButton.addEventListener('click', () => {
    signaturePad.clear();
  });

  const saveButton = document.getElementById('save-signature');
  saveButton.addEventListener('click', () => {
    const signatureImage = signaturePad.toDataURL(); // Menghasilkan gambar tanda tangan
    // Simpan atau kirim gambar tanda tangan sesuai kebutuhan Anda
  });
}

// Panggil fungsi-fungsi di atas sesuai kebutuhan
takePicture();
getLocation();
createSignature();

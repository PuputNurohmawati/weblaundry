function prosesPesanan() {
  const nama = document.getElementById("nama").value.trim();
  const layanan = document.getElementById("layanan").value;
  const berat = parseFloat(document.getElementById("berat").value);
 
  if (!nama || isNaN(berat) || berat <= 0) {
    alert("Mohon isi semua data dengan benar.");
    return;
  }

  const hargaPerKg = layanan === "Express" ? 8000 : 5000;
  const total = hargaPerKg * berat;

  // Tampilkan output
  document.getElementById("output").innerHTML = `
    <strong>Ringkasan Pesanan:</strong><br>
    Nama: ${nama}<br>
    Layanan: ${layanan}<br>
    Berat: ${berat} kg<br>
    Total Harga: <strong>Rp${total.toLocaleString()}</strong>
  `;

  // Siapkan pesan WhatsApp
  const pesan = `*Pesanan Laundry Baru*\n` + `Nama: ${nama}\n` + `Layanan: ${layanan}\n` + `Berat: ${berat} kg\n` + `Total: Rp${total.toLocaleString()}\n\n` + `Silakan diproses, terima kasih 🙏`;

  const nomorOwner = "62895335130524"; // Ganti dengan nomor owner
  const waURL = `https://wa.me/${62895335130524}?text=${encodeURIComponent(pesan)}`;

  // Tampilkan link WhatsApp
  document.getElementById("waLink").href = waURL;
  document.getElementById("whatsappLink").style.display = "block";
}
